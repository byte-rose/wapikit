/**
 * Mock data for API endpoints
 */
export const mockData: Record<string, any> = {
  '/api/ai/chats': {
    data: [
      {
        id: 'mock-chat-1',
        title: 'Mock Chat 1',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 'mock-chat-2',
        title: 'Mock Chat 2',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ],
    chats: [
      {
        id: 'chat-id-1',
        title: 'Campaign Strategy Discussion',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 'chat-id-2',
        title: 'Customer Engagement Ideas',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        updatedAt: new Date(Date.now() - 3600000).toISOString()
      }
    ]
  },
  '/api/analytics/primary': {
    aggregateAnalytics: {
      campaignStats: {
        totalCampaigns: 5,
        campaignsRunning: 2,
        campaignsDraft: 2,
        campaignsScheduled: 1
      },
      conversationStats: {
        totalConversations: 120,
        conversationsActive: 45,
        conversationsClosed: 65,
        conversationsPending: 10
      },
      messageStats: {
        totalMessages: 1250,
        messagesSent: 650,
        messagesRead: 500,
        messagesUndelivered: 100
      },
      contactStats: {
        totalContacts: 500,
        contactsActive: 450,
        contactsBlocked: 50
      }
    },
    messageAnalytics: [
      { date: '2023-01-01', sent: 50, delivered: 48, read: 45 },
      { date: '2023-01-02', sent: 65, delivered: 60, read: 55 },
      { date: '2023-01-03', sent: 45, delivered: 42, read: 40 },
      { date: '2023-01-04', sent: 70, delivered: 68, read: 65 },
      { date: '2023-01-05', sent: 55, delivered: 52, read: 50 }
    ],
    linkClickAnalytics: [
      { date: '2023-01-01', clicks: 25 },
      { date: '2023-01-02', clicks: 30 },
      { date: '2023-01-03', clicks: 20 },
      { date: '2023-01-04', clicks: 35 },
      { date: '2023-01-05', clicks: 28 }
    ]
  },
  '/api/analytics/secondary': {
    messageTypeTrafficDistributionAnalytics: [
      { type: 'Text', count: 750 },
      { type: 'Image', count: 250 },
      { type: 'Video', count: 150 },
      { type: 'Document', count: 100 }
    ]
  },
  '/api/settings/organization-roles': {
    organizationRoles: {
      roles: [
        {
          name: 'Admin',
          uniqueId: 'admin-role-id',
          description: 'Full access to all features',
          permissions: ['READ_CAMPAIGNS', 'WRITE_CAMPAIGNS', 'READ_CONTACTS', 'WRITE_CONTACTS', 'READ_CONVERSATIONS', 'WRITE_CONVERSATIONS', 'READ_SETTINGS', 'WRITE_SETTINGS']
        },
        {
          name: 'Editor',
          uniqueId: 'editor-role-id',
          description: 'Can edit campaigns and contacts',
          permissions: ['READ_CAMPAIGNS', 'WRITE_CAMPAIGNS', 'READ_CONTACTS', 'WRITE_CONTACTS', 'READ_CONVERSATIONS', 'WRITE_CONVERSATIONS']
        },
        {
          name: 'Viewer',
          uniqueId: 'viewer-role-id',
          description: 'Can only view data',
          permissions: ['READ_CAMPAIGNS', 'READ_CONTACTS', 'READ_CONVERSATIONS']
        }
      ],
      paginationMeta: {
        page: 1,
        per_page: 10,
        total: 3
      }
    }
  },
  '/api/settings/api-keys': {
    apiKey: {
      uniqueId: 'api-key-id',
      key: 'wk_mock_api_key_12345',
      createdAt: new Date().toISOString()
    }
  },
  '/api/settings/phone-numbers': {
    phoneNumbers: [
      {
        id: 'phone-number-id-1',
        display_phone_number: '+1234567890',
        verified_name: 'Wapikit Test',
        platform_type: 'whatsapp',
        quality_rating: 'HIGH',
        code_verification_status: {
          status: 'VERIFIED'
        }
      },
      {
        id: 'phone-number-id-2',
        display_phone_number: '+0987654321',
        verified_name: 'Wapikit Demo',
        platform_type: 'whatsapp',
        quality_rating: 'MEDIUM',
        code_verification_status: {
          status: 'VERIFIED'
        }
      }
    ]
  },
  '/api/settings/ai-configuration': {
    aiConfiguration: {
      apiKey: 'sk-mock-ai-key-12345',
      isEnabled: true,
      model: 'GPT_4'
    }
  },
  '/api/integrations': {
    integrations: [
      {
        name: 'HubSpot',
        uniqueId: 'hubspot',
        slug: 'hubspot',
        status: 'INACTIVE',
        type: 'messaging',
        icon: '/assets/integrations/hubspot.svg',
        description: 'This integration allows you to export campaign contacts or leads to HubSpot',
        createdAt: new Date().toISOString(),
        isPremium: false
      },
      {
        name: 'Salesforce',
        uniqueId: 'sales-force',
        slug: 'salesforce',
        status: 'INACTIVE',
        type: 'messaging',
        icon: '/assets/integrations/salesforce.svg',
        description: 'This integration allows you to export campaign contacts or leads to Salesforce',
        createdAt: new Date().toISOString(),
        isPremium: false
      },
      {
        name: 'Shopify',
        uniqueId: 'shopify',
        slug: 'shopify',
        status: 'INACTIVE',
        type: 'ecommerce',
        icon: '/assets/integrations/shopify.svg',
        description: 'This integration allows you to connect your Shopify store',
        createdAt: new Date().toISOString(),
        isPremium: true
      },
      {
        name: 'Zapier',
        uniqueId: 'zapier',
        slug: 'zapier',
        status: 'ACTIVE',
        type: 'automation',
        icon: '/assets/integrations/zapier.svg',
        description: 'Connect Wapikit with thousands of apps through Zapier',
        createdAt: new Date().toISOString(),
        isPremium: false
      }
    ],
    paginationMeta: {
      page: 1,
      per_page: 10,
      total: 4
    }
  },
  '/api/lists': {
    lists: [
      {
        uniqueId: 'list-id-1',
        name: 'Marketing Contacts',
        description: 'Contacts for marketing campaigns',
        tags: [
          { uniqueId: 'tag-id-1', name: 'marketing' },
          { uniqueId: 'tag-id-2', name: 'active' }
        ],
        numberOfContacts: 156,
        numberOfCampaignsSent: 5,
        createdAt: new Date().toISOString()
      },
      {
        uniqueId: 'list-id-2',
        name: 'Sales Leads',
        description: 'Potential customers',
        tags: [
          { uniqueId: 'tag-id-3', name: 'sales' },
          { uniqueId: 'tag-id-4', name: 'leads' }
        ],
        numberOfContacts: 89,
        numberOfCampaignsSent: 3,
        createdAt: new Date().toISOString()
      },
      {
        uniqueId: 'list-id-3',
        name: 'Newsletter Subscribers',
        description: 'Contacts who subscribed to our newsletter',
        tags: [
          { uniqueId: 'tag-id-5', name: 'newsletter' }
        ],
        numberOfContacts: 243,
        numberOfCampaignsSent: 12,
        createdAt: new Date().toISOString()
      }
    ],
    paginationMeta: {
      page: 1,
      per_page: 10,
      total: 3
    }
  },
  '/api/campaigns': {
    campaigns: [
      {
        uniqueId: 'campaign-id-1',
        name: 'Summer Sale Announcement',
        description: 'Announcing our summer sale with special discounts',
        status: 'RUNNING',
        isLinkTrackingEnabled: true,
        phoneNumberInUse: '+1234567890',
        templateMessageId: 'template-id-1',
        lists: [
          {
            uniqueId: 'list-id-1',
            name: 'Marketing Contacts',
            description: 'Contacts for marketing campaigns',
            tags: [{ uniqueId: 'tag-id-1', name: 'marketing' }],
            numberOfContacts: 156,
            numberOfCampaignsSent: 5,
            createdAt: new Date().toISOString()
          }
        ],
        tags: [
          { uniqueId: 'tag-id-6', name: 'promotion' },
          { uniqueId: 'tag-id-7', name: 'summer' }
        ],
        createdAt: new Date().toISOString(),
        sentAt: new Date().toISOString()
      },
      {
        uniqueId: 'campaign-id-2',
        name: 'Product Launch',
        description: 'New product announcement',
        status: 'SCHEDULED',
        isLinkTrackingEnabled: true,
        phoneNumberInUse: '+1234567890',
        templateMessageId: 'template-id-2',
        lists: [
          {
            uniqueId: 'list-id-1',
            name: 'Marketing Contacts',
            description: 'Contacts for marketing campaigns',
            tags: [{ uniqueId: 'tag-id-1', name: 'marketing' }],
            numberOfContacts: 156,
            numberOfCampaignsSent: 5,
            createdAt: new Date().toISOString()
          },
          {
            uniqueId: 'list-id-2',
            name: 'Sales Leads',
            description: 'Potential customers',
            tags: [{ uniqueId: 'tag-id-3', name: 'sales' }],
            numberOfContacts: 89,
            numberOfCampaignsSent: 3,
            createdAt: new Date().toISOString()
          }
        ],
        tags: [
          { uniqueId: 'tag-id-8', name: 'product' },
          { uniqueId: 'tag-id-9', name: 'launch' }
        ],
        createdAt: new Date().toISOString(),
        scheduledAt: new Date(Date.now() + 86400000).toISOString() // Tomorrow
      },
      {
        uniqueId: 'campaign-id-3',
        name: 'Customer Feedback Survey',
        description: 'Survey to collect customer feedback',
        status: 'DRAFT',
        isLinkTrackingEnabled: false,
        templateMessageId: 'template-id-3',
        lists: [],
        tags: [
          { uniqueId: 'tag-id-10', name: 'survey' },
          { uniqueId: 'tag-id-11', name: 'feedback' }
        ],
        createdAt: new Date().toISOString()
      }
    ],
    paginationMeta: {
      page: 1,
      per_page: 10,
      total: 3
    }
  },
  '/api/campaigns/:id/analytics': {
    conversationInitiated: 120,
    messagesDelivered: 115,
    messagesFailed: 5,
    messagesRead: 98,
    messagesSent: 120,
    messagesUndelivered: 0,
    totalLinkClicks: 45,
    totalMessages: 120,
    linkClicksData: [
      {
        date: new Date().toISOString().split('T')[0],
        label: 'Today',
        count: 15
      },
      {
        date: new Date(Date.now() - 86400000).toISOString().split('T')[0],
        label: 'Yesterday',
        count: 12
      },
      {
        date: new Date(Date.now() - 172800000).toISOString().split('T')[0],
        label: '2 days ago',
        count: 18
      }
    ]
  },
  '/api/conversations': {
    conversations: [
      {
        uniqueId: 'conversation-id-1',
        status: 'ACTIVE',
        initiatedBy: 'CONTACT',
        numberOfUnreadMessages: 2,
        contactId: 'contact-id-1',
        contact: {
          uniqueId: 'contact-id-1',
          name: 'John Doe',
          phone: '+1234567890',
          status: 'ACTIVE',
          attributes: {
            company: 'Acme Inc',
            position: 'Manager'
          },
          lists: [],
          createdAt: new Date().toISOString()
        },
        organizationId: 'org-id-1',
        messages: [
          {
            uniqueId: 'message-id-1',
            conversationId: 'conversation-id-1',
            message_type: 'TEXT',
            direction: 'INBOUND',
            status: 'DELIVERED',
            messageData: {},
            createdAt: new Date(Date.now() - 3600000).toISOString() // 1 hour ago
          },
          {
            uniqueId: 'message-id-2',
            conversationId: 'conversation-id-1',
            message_type: 'TEXT',
            direction: 'OUTBOUND',
            status: 'DELIVERED',
            messageData: {},
            createdAt: new Date(Date.now() - 3000000).toISOString() // 50 minutes ago
          },
          {
            uniqueId: 'message-id-3',
            conversationId: 'conversation-id-1',
            message_type: 'TEXT',
            direction: 'INBOUND',
            status: 'DELIVERED',
            messageData: {},
            createdAt: new Date(Date.now() - 600000).toISOString() // 10 minutes ago
          }
        ],
        tags: [],
        createdAt: new Date(Date.now() - 3600000).toISOString() // 1 hour ago
      },
      {
        uniqueId: 'conversation-id-2',
        status: 'ACTIVE',
        initiatedBy: 'SYSTEM',
        numberOfUnreadMessages: 0,
        contactId: 'contact-id-2',
        contact: {
          uniqueId: 'contact-id-2',
          name: 'Jane Smith',
          phone: '+0987654321',
          status: 'ACTIVE',
          attributes: {
            company: 'XYZ Corp',
            position: 'Director'
          },
          lists: [],
          createdAt: new Date().toISOString()
        },
        organizationId: 'org-id-1',
        messages: [
          {
            uniqueId: 'message-id-4',
            conversationId: 'conversation-id-2',
            message_type: 'TEXT',
            direction: 'OUTBOUND',
            status: 'DELIVERED',
            messageData: {},
            createdAt: new Date(Date.now() - 86400000).toISOString() // 1 day ago
          },
          {
            uniqueId: 'message-id-5',
            conversationId: 'conversation-id-2',
            message_type: 'TEXT',
            direction: 'INBOUND',
            status: 'DELIVERED',
            messageData: {},
            createdAt: new Date(Date.now() - 82800000).toISOString() // 23 hours ago
          }
        ],
        tags: [],
        createdAt: new Date(Date.now() - 86400000).toISOString() // 1 day ago
      }
    ],
    paginationMeta: {
      page: 1,
      per_page: 50,
      total: 2
    }
  },
  '/api/conversations/:id/messages': {
    messages: [
      {
        uniqueId: 'message-id-1',
        conversationId: 'conversation-id-1',
        message_type: 'TEXT',
        direction: 'INBOUND',
        status: 'DELIVERED',
        messageData: {},
        createdAt: new Date(Date.now() - 3600000).toISOString() // 1 hour ago
      },
      {
        uniqueId: 'message-id-2',
        conversationId: 'conversation-id-1',
        message_type: 'TEXT',
        direction: 'OUTBOUND',
        status: 'DELIVERED',
        messageData: {},
        createdAt: new Date(Date.now() - 3000000).toISOString() // 50 minutes ago
      },
      {
        uniqueId: 'message-id-3',
        conversationId: 'conversation-id-1',
        message_type: 'TEXT',
        direction: 'INBOUND',
        status: 'DELIVERED',
        messageData: {},
        createdAt: new Date(Date.now() - 600000).toISOString() // 10 minutes ago
      }
    ],
    paginationMeta: {
      page: 1,
      per_page: 50,
      total: 3
    }
  },
  '/api/organization': {
    organizations: [
      {
        uniqueId: 'org-id-1',
        name: 'Example Organization',
        description: 'This is an example organization',
        createdAt: new Date().toISOString(),
        aiConfiguration: {
          isEnabled: true,
          model: 'GPT_3_5_TURBO'
        },
        whatsappBusinessAccountDetails: {
          accessToken: 'mock-whatsapp-token',
          businessAccountId: 'mock-whatsapp-account-id',
          webhookSecret: 'mock-webhook-secret'
        }
      }
    ],
    paginationMeta: {
      page: 1,
      per_page: 10,
      total: 1
    }
  },
  '/api/contacts': {
    contacts: [
      {
        uniqueId: 'contact-id-1',
        name: 'John Doe',
        phone: '+1234567890',
        status: 'ACTIVE',
        attributes: {
          company: 'Acme Inc',
          position: 'Manager'
        },
        lists: [
          {
            uniqueId: 'list-id-1',
            name: 'Marketing Contacts'
          }
        ],
        createdAt: new Date().toISOString()
      },
      {
        uniqueId: 'contact-id-2',
        name: 'Jane Smith',
        phone: '+0987654321',
        status: 'ACTIVE',
        attributes: {
          company: 'XYZ Corp',
          position: 'Director'
        },
        lists: [
          {
            uniqueId: 'list-id-2',
            name: 'Sales Leads'
          }
        ],
        createdAt: new Date().toISOString()
      }
    ],
    paginationMeta: {
      page: 1,
      per_page: 10,
      total: 2
    }
  },
  '/api/user/feature-flags': {
    featureFlags: {
      enableAI: true,
      enableBulkOperations: true,
      enableAdvancedAnalytics: true,
      enableCustomTemplates: true,
      enableMultiChannelCampaigns: false,
      SystemFeatureFlags: {
        isAiIntegrationEnabled: true,
        isMultiChannelEnabled: false,
        isWhatsappEnabled: true,
        isSmsEnabled: false
      }
    }
  },
  '/api/user/notifications': {
    notifications: [
      {
        uniqueId: 'notification-1',
        title: 'Welcome to Wapikit',
        description: 'Thank you for joining Wapikit. Get started by exploring the dashboard.',
        createdAt: new Date().toISOString(),
        read: false,
        type: 'welcome',
        ctaUrl: '/dashboard'
      },
      {
        uniqueId: 'notification-2',
        title: 'Set up your first campaign',
        description: 'Create your first campaign to start engaging with your audience.',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        read: true,
        type: 'tip',
        ctaUrl: '/campaigns/new'
      }
    ],
    paginationMeta: {
      page: 1,
      per_page: 10,
      total: 2
    },
    unreadCount: 1
  },
  '/api/auth/login': {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfaWQiOiJ1c2VyLWlkLTEiLCJ1c2VybmFtZSI6ImFkbWluQGV4YW1wbGUuY29tIiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJBRE1JTiIsIm9yZ2FuaXphdGlvbl9pZCI6Im9yZy1pZC0xIiwibmFtZSI6IkFkbWluIFVzZXIiLCJpYXQiOjE2MDk0NTkwMDAsImV4cCI6MTYwOTU0NTQwMH0.8JGxmEZrGRHMXEP9yKZJKZEVIxNKFBgvdKCnkPGlbJg',
    isOnboardingCompleted: true
  },
  '/api/auth/register': {
    isOtpSent: true
  },
  '/api/user': {
    user: {
      uniqueId: 'user-id-1',
      username: 'admin@example.com',
      email: 'admin@example.com',
      name: 'Admin User',
      createdAt: new Date().toISOString(),
      isOwner: true,
      currentOrganizationAccessLevel: 'Owner',
      featureFlags: {
        SystemFeatureFlags: {
          isAiIntegrationEnabled: true,
          isApiAccessEnabled: true,
          isMultiOrganizationEnabled: true,
          isRoleBasedAccessControlEnabled: true
        }
      },
      organization: {
        uniqueId: 'org-id-1',
        name: 'Example Organization',
        description: 'This is an example organization',
        createdAt: new Date().toISOString(),
        aiConfiguration: {
          isEnabled: true,
          model: 'GPT_3_5_TURBO'
        },
        whatsappBusinessAccountDetails: {
          accessToken: 'mock-whatsapp-token',
          businessAccountId: 'mock-whatsapp-account-id',
          webhookSecret: 'mock-webhook-secret'
        }
      }
    }
  },
  '/api/organization/phone-numbers': [
    {
      id: 'phone-1',
      display_phone_number: '+1234567890',
      phone_number_id: 'phone-id-1',
      quality_rating: 'HIGH',
      verified_name: 'Wapikit Demo',
      status: 'CONNECTED'
    },
    {
      id: 'phone-2',
      display_phone_number: '+1987654321',
      phone_number_id: 'phone-id-2',
      quality_rating: 'MEDIUM',
      verified_name: 'Wapikit Test',
      status: 'CONNECTED'
    }
  ],
  '/api/organization/templates': [
    {
      id: 'template-1',
      name: 'Welcome Template',
      category: 'MARKETING',
      language: 'en',
      status: 'APPROVED',
      components: [
        {
          type: 'HEADER',
          format: 'TEXT',
          text: 'Welcome to our service'
        },
        {
          type: 'BODY',
          text: 'Hello {{1}}, thank you for joining our platform. We are excited to have you on board!'
        },
        {
          type: 'FOOTER',
          text: 'Reply STOP to unsubscribe'
        }
      ]
    },
    {
      id: 'template-2',
      name: 'Promotional Template',
      category: 'MARKETING',
      language: 'en',
      status: 'APPROVED',
      components: [
        {
          type: 'HEADER',
          format: 'TEXT',
          text: 'Special Offer'
        },
        {
          type: 'BODY',
          text: 'Hello {{1}}, we have a special offer for you! Use code {{2}} to get {{3}}% off your next purchase.'
        },
        {
          type: 'FOOTER',
          text: 'Reply STOP to unsubscribe'
        }
      ]
    }
  ]
}

/**
 * Get mock response for a given URL
 * @param url URL to get mock response for
 * @returns Mock response data
 */
export function getMockResponse(url: string): any {
  const baseUrl = url.split('?')[0]
  
  // Check for exact matches first
  if (mockData[url]) {
    return mockData[url]
  }
  
  // Then check for base URL matches
  const endpoint = Object.keys(mockData).find(key => baseUrl.includes(key))
  if (endpoint) {
    return mockData[endpoint]
  }
  
  return null
}
