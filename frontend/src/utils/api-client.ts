import { AUTH_TOKEN_LS, getBackendUrl, IS_DEVELOPMENT } from '~/constants'
import { mockData } from './mock-data'

/**
 * Get mock response for a given URL
 * @param url URL to get mock response for
 * @returns Mock response data
 */
export const getMockResponse = (url: string) => {
  // Direct match
  if (mockData[url]) {
    return mockData[url]
  }

  // Handle URLs with query parameters
  const urlWithoutParams = url.split('?')[0]
  if (mockData[urlWithoutParams]) {
    return mockData[urlWithoutParams]
  }

  // Handle URLs with path parameters (like :id)
  if (url.includes('/campaigns/') && url.includes('/analytics')) {
    return mockData['/api/campaigns/:id/analytics']
  }

  if (url.includes('/conversations/') && url.includes('/messages')) {
    return mockData['/api/conversations/:id/messages']
  }

  // Handle specific endpoints with or without /api prefix
  const endpointMappings: Record<string, string> = {
    '/organization': '/api/organization',
    '/contacts': '/api/contacts',
    '/lists': '/api/lists',
    '/ai/chats': '/api/ai/chats',
    '/user/feature-flags': '/api/user/feature-flags',
    '/user/notifications': '/api/user/notifications',
    '/settings/organization-roles': '/api/settings/organization-roles',
    '/settings/api-keys': '/api/settings/api-keys',
    '/settings/phone-numbers': '/api/settings/phone-numbers',
    '/settings/ai-configuration': '/api/settings/ai-configuration',
    '/organization/templates': '/api/organization/templates',
    '/organization/phone-numbers': '/api/organization/phone-numbers',
    '/auth/login': '/api/auth/login',
    '/auth/register': '/api/auth/register',
    '/user': '/api/user'
  }

  // Check if the URL matches any of the endpoint mappings
  for (const [endpoint, mockEndpoint] of Object.entries(endpointMappings)) {
    if (url === endpoint || url.startsWith(`${endpoint}/`)) {
      // Special case for templates and phone numbers to ensure they're arrays
      if (endpoint === '/organization/templates' || endpoint === '/organization/phone-numbers' || endpoint === '/settings/phone-numbers') {
        const data = mockData[mockEndpoint]
        return Array.isArray(data) ? data : []
      }
      return mockData[mockEndpoint]
    }
  }

  // Fallback for unknown URLs
  console.warn(`No mock data found for URL: ${url}`)
  return {}
}

const USE_MOCK_DATA = true // Toggle this to switch between mock and real data

export const customInstance = async <T>({
  url,
  method,
  params,
  data
}: {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  params?: any
  data?: any
  responseType?: string
  signal?: AbortSignal
  headers?: Record<string, string>
}): Promise<T> => {
  // Return mock data if enabled
  if (USE_MOCK_DATA) {
    const mockData = getMockResponse(url)
    if (mockData) {
      return Promise.resolve(mockData as T)
    }
    // If no mock data found, return empty response
    return Promise.resolve({} as T)
  }

  const authToken = localStorage.getItem(AUTH_TOKEN_LS)
  const headers = new Headers()
  headers.set('Content-Type', 'application/json')
  headers.set('Accept', 'application/json')

  if (authToken) {
    headers.set('x-access-token', authToken)
  }

  const queryParam = new URLSearchParams(params).toString()

  try {
    const response = await fetch(
      `${getBackendUrl()}${url}` + `${queryParam ? `?${queryParam}` : ''}`,
      {
        method,
        ...(data ? { body: JSON.stringify(data) } : {}),
        headers: headers,
        credentials: 'include',
        mode: 'cors',
        cache: 'no-cache'
      }
    )

    if (!response.ok) {
      // Gracefully return an error object
      const errorData = await response.json().catch(() => ({})) // Handle non-JSON error responses
      return Promise.reject({
        status: response.status,
        statusText: response.statusText,
        message: errorData.message || 'An error occurred'
      })
    }

    const responseData = await response.json()
    return responseData
  } catch (error) {
    console.error('API request failed:', error)
    // Return mock data as fallback if available
    if (IS_DEVELOPMENT) {
      const mockData = getMockResponse(url)
      if (mockData) {
        console.log('Using mock data as fallback:', mockData)
        return mockData as T
      }
    }
    throw error
  }
}

export default customInstance
