import { PreviewMessage, ThinkingMessage } from './message'
import { useScrollToBottom } from '~/hooks/use-scroll-to-bottom'
import { Overview } from './overview'
import { AiChatMessageRoleEnum, type AiChatMessageVoteSchema } from 'root/.generated'
import { useAiChatStore } from '~/store/ai-chat-store'
import { ChatBotStateEnum } from '~/types'

interface MessagesProps {
	chatId: string
	isLoading: boolean
	votes: Array<AiChatMessageVoteSchema> | undefined
	isReadonly: boolean
	chatBotState: ChatBotStateEnum
	currentMessageIdInStream: string | null
}

const Messages = ({
	chatId,
	isLoading,
	votes,
	isReadonly,
	currentMessageIdInStream,
	chatBotState
}: MessagesProps) => {
	const [messagesContainerRef, messagesEndRef] = useScrollToBottom<HTMLDivElement>()

	const { currentChatMessages } = useAiChatStore()

	return (
		<div
			ref={messagesContainerRef}
			className="flex min-w-0 flex-1 flex-col gap-1 overflow-y-scroll pt-4"
		>
			{currentChatMessages.length === 0 && <Overview />}

			{currentChatMessages.map((message, index) => (
				<PreviewMessage
					key={message.uniqueId}
					chatId={chatId}
					message={message}
					isLoading={isLoading && currentChatMessages.length - 1 === index}
					vote={
						votes ? votes.find(vote => vote.messageId === message.uniqueId) : undefined
					}
					isReadonly={isReadonly}
					isCurrentMessageInProgress={
						currentMessageIdInStream === message.uniqueId &&
						chatBotState === ChatBotStateEnum.Streaming
					}
				/>
			))}

			{isLoading &&
				currentChatMessages.length > 0 &&
				currentChatMessages[currentChatMessages.length - 1].role ===
					AiChatMessageRoleEnum.User && <ThinkingMessage />}

			{/* when bot is streaming add a blinking cursor here */}

			<div ref={messagesEndRef} className="min-h-[24px] min-w-[24px] shrink-0" />
		</div>
	)
}

export { Messages }
