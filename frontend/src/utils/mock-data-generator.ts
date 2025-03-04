import { mockResponses } from './mock-data'

// Function to record API responses for mock data generation
export const recordApiResponse = (url: string, response: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`Mock data template for ${url}:`, JSON.stringify(response, null, 2))
  }
}

// Helper function to generate realistic-looking mock data
export const generateMockData = (type: string) => {
  switch (type) {
    case 'user':
      return {
        id: `user-${Math.random().toString(36).substr(2, 9)}`,
        name: 'Mock User',
        email: 'mock@example.com',
        createdAt: new Date().toISOString()
      }
    case 'organization':
      return {
        id: `org-${Math.random().toString(36).substr(2, 9)}`,
        name: 'Mock Organization',
        createdAt: new Date().toISOString()
      }
    // Add more types as needed
    default:
      return {}
  }
}

// Export all mock responses for easy access
export const getAllMockResponses = () => mockResponses
