import { useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import type { ChatMessage } from '@/types/chat'
import { MessageBubble } from './MessageBubble'
import { TypingIndicator } from './TypingIndicator'
import { SuggestedPrompts } from './SuggestedPrompts'
import { ScrollArea } from '@/components/ui/ScrollArea'

interface Props {
  messages: ChatMessage[]
  isTyping: boolean
  onSuggest: (prompt: string) => void
}

export function MessageArea({ messages, isTyping, onSuggest }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  return (
    <ScrollArea className="flex-1">
      <div className="p-4 space-y-4 min-h-full">
        {messages.length === 0 ? (
          <SuggestedPrompts onSelect={onSuggest} />
        ) : (
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <MessageBubble key={msg.id} message={msg} isLast={i === messages.length - 1} />
            ))}
            {isTyping && <TypingIndicator key="typing" />}
          </AnimatePresence>
        )}
        <div ref={bottomRef} />
      </div>
    </ScrollArea>
  )
}
