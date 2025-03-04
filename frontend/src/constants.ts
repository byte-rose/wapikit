import { type Icons } from './components/icons'
import { type NavItem } from './types'
import { config } from 'dotenv'

config()

export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'

export const AUTH_TOKEN_LS = '__auth_token'

export function getBackendUrl() {
	if (IS_DEVELOPMENT) {
		// Try to use the host's IP address from the browser's perspective
		return window.location.protocol + '//' + window.location.hostname + ':8000/api'
	} else {
		return '/api'
	}
}

export const IMG_MAX_LIMIT = 10

export const navItems: NavItem[] = [
	{
		title: 'Dashboard',
		href: '/dashboard',
		icon: 'dashboard',
		label: 'Dashboard'
	},
	{
		title: 'Contacts',
		href: '/contacts',
		icon: 'user',
		label: 'profile'
	},
	{
		title: 'Lists',
		href: '/lists',
		icon: 'billing',
		label: 'employee'
	},
	{
		title: 'Members',
		href: '/members',
		icon: 'laptop',
		label: 'Members'
	},
	{
		title: 'Conversations',
		href: '/conversations',
		icon: 'message',
		label: 'Conversations'
	},
	{
		title: 'Campaigns',
		href: '/campaigns',
		icon: 'rocket',
		label: 'Campaigns'
	},
	{
		title: 'Settings',
		href: '/settings',
		icon: 'settings',
		label: 'kanban'
	},
	{
		title: 'Integrations',
		href: '/integrations',
		icon: 'link',
		label: 'Integrations'
	}
]

export enum OnboardingStepsEnum {
	CreateOrganization = 'create-organization',
	WhatsappBusinessAccountDetails = 'whatsapp-business-account-details',
	InviteTeamMembers = 'invite-team-members'
}

export const OnboardingSteps: {
	title: string
	description: string
	slug: OnboardingStepsEnum
	status: 'current' | 'incomplete' | 'complete'
	icon: keyof typeof Icons
}[] = [
	{
		title: 'Create Organization',
		description: 'Create an organization to get started',
		slug: OnboardingStepsEnum.CreateOrganization,
		status: 'current',
		icon: 'profile'
	},
	{
		title: 'Whatsapp Business Account Details',
		description: 'Enter your Whatsapp Business Account details to get started',
		slug: OnboardingStepsEnum.WhatsappBusinessAccountDetails,
		status: 'incomplete',
		icon: 'settings'
	},
	{
		title: 'Invite Team Members',
		description:
			'Enter the email addresses of your team members to invite them to your organization',
		slug: OnboardingStepsEnum.InviteTeamMembers,
		status: 'incomplete',
		icon: 'link'
	}
] as const

export const pathAtWhichSidebarShouldBeCollapsedByDefault = ['/conversations']
