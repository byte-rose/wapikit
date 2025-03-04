'use client'

import { useEffect } from 'react'
import { useGetAiChats } from 'root/.generated'
import { useAiChatStore } from '~/store/ai-chat-store'
import { useLayoutStore } from '~/store/layout.store'
import AiChatBox from '../ai/ai-chat-box'

const AiChatProvider = ({ children }: { children: React.ReactNode }) => {
	const { featureFlags } = useLayoutStore()
	const { writeProperty } = useAiChatStore()

	// ! TODO: handle the pagination here
	const { data: chats } = useGetAiChats(
		{
			page: 1,
			per_page: 20
		},
		{
			query: {
				enabled: featureFlags?.SystemFeatureFlags?.isAiIntegrationEnabled || false
			}
		}
	)

	useEffect(() => {
		writeProperty({
			chats: chats?.chats || []
		})
	}, [writeProperty, chats?.chats])

	return (
		<>
			<AiChatBox />
			{children}
		</>
	)
}

export default AiChatProvider
