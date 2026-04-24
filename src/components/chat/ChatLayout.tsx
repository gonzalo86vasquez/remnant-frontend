import { useChat } from '@/hooks/useChat'
import { SessionList } from './SessionList'
import { MessageArea } from './MessageArea'
import { ChatInput } from './ChatInput'

export function ChatLayout() {
  const {
    sessions,
    activeSessionId,
    setActiveSessionId,
    activeMessages,
    isTyping,
    sendMessage,
    newSession,
  } = useChat()

  return (
    <div className="flex h-full overflow-hidden">
      {/* Sessions sidebar */}
      <div className="w-[260px] shrink-0 overflow-hidden">
        <SessionList
          sessions={sessions}
          activeSessionId={activeSessionId}
          onSelect={setActiveSessionId}
          onNew={newSession}
        />
      </div>

      {/* Chat main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Context bar */}
        <div className="flex items-center gap-2 px-4 h-11 border-b border-border bg-background/50">
          <span className="text-xs text-muted-foreground">
            Contexto: <span className="font-medium text-foreground">Los Pelambres · Molino SAG M8 · Campaña C04</span>
          </span>
          <span className="ml-auto text-[10px] bg-success/10 text-success border border-success/20 rounded px-2 py-0.5">
            T7 · 11/02/2026 · 4.48 MTon
          </span>
        </div>

        {/* Messages */}
        <MessageArea
          messages={activeMessages}
          isTyping={isTyping}
          onSuggest={sendMessage}
        />

        {/* Input */}
        <div className="p-4 border-t border-border bg-background">
          <ChatInput onSend={sendMessage} disabled={isTyping} />
          <p className="mt-1.5 text-center text-[10px] text-muted-foreground">
            Las respuestas citan las fuentes de datos disponibles en el sistema.
          </p>
        </div>
      </div>
    </div>
  )
}
