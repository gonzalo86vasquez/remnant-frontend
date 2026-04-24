import { useState, useCallback } from 'react'
import type { ChatMessage, ChatSession } from '@/types/chat'
import { mockSessions, mockMessages } from '@/mock/chat.mock'

export function useChat() {
  const [sessions] = useState<ChatSession[]>(mockSessions)
  const [activeSessionId, setActiveSessionId] = useState<string>(mockSessions[0].id)
  const [messages, setMessages] = useState<Record<string, ChatMessage[]>>(mockMessages)
  const [isTyping, setIsTyping] = useState(false)

  const activeMessages = messages[activeSessionId] ?? []

  const sendMessage = useCallback(
    (text: string) => {
      const userMsg: ChatMessage = {
        id: `msg-${Date.now()}`,
        role: 'user',
        content: text,
        timestamp: new Date(),
      }

      setMessages(prev => ({
        ...prev,
        [activeSessionId]: [...(prev[activeSessionId] ?? []), userMsg],
      }))

      setIsTyping(true)

      setTimeout(() => {
        const assistantMsg: ChatMessage = {
          id: `msg-${Date.now() + 1}`,
          role: 'assistant',
          content:
            'Analizando los datos del Informe de Desgaste C04 (T7, 11/02/2026) y la planilla de Performance del Molino 8... No encontré datos específicos para esa consulta en los registros disponibles. ¿Podría reformular la pregunta con más detalle sobre la pieza o período de interés?',
          timestamp: new Date(),
          sources: [{ label: 'Informe Desgaste C04 T7', date: '11/02/2026', type: 'report' }],
        }

        setMessages(prev => ({
          ...prev,
          [activeSessionId]: [...(prev[activeSessionId] ?? []), assistantMsg],
        }))

        setIsTyping(false)
      }, 1800)
    },
    [activeSessionId],
  )

  const newSession = useCallback(() => {
    const id = `sess-new-${Date.now()}`
    setMessages(prev => ({ ...prev, [id]: [] }))
    setActiveSessionId(id)
  }, [])

  return {
    sessions,
    activeSessionId,
    setActiveSessionId,
    activeMessages,
    isTyping,
    sendMessage,
    newSession,
  }
}
