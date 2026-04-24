import { Plus, MessageSquare } from 'lucide-react'
import type { ChatSession } from '@/types/chat'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { ScrollArea } from '@/components/ui/ScrollArea'

interface Props {
  sessions: ChatSession[]
  activeSessionId: string
  onSelect: (id: string) => void
  onNew: () => void
}

export function SessionList({ sessions, activeSessionId, onSelect, onNew }: Props) {
  return (
    <div className="flex h-full flex-col border-r border-border bg-card/50">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-border">
        <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Consultas</h2>
        <Button variant="ghost" size="icon-sm" onClick={onNew} aria-label="Nueva consulta">
          <Plus size={14} />
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2 space-y-0.5">
          {sessions.map(s => (
            <button
              key={s.id}
              onClick={() => onSelect(s.id)}
              className={cn(
                'w-full rounded-lg px-3 py-2.5 text-left transition-colors',
                activeSessionId === s.id
                  ? 'bg-primary/10 text-primary'
                  : 'hover:bg-accent text-foreground',
              )}
            >
              <div className="flex items-start gap-2">
                <MessageSquare size={13} className="mt-0.5 shrink-0 opacity-60" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-medium">{s.title}</p>
                  <p className="mt-0.5 truncate text-[11px] text-muted-foreground">{s.preview}</p>
                  <p className="mt-1 text-[10px] text-muted-foreground">{s.createdAt}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
