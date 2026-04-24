import { motion } from 'framer-motion'
import type { ChatMessage } from '@/types/chat'
import { SourceCitation } from './SourceCitation'
import { InlineChart } from './InlineChart'
import { cn } from '@/lib/utils'

interface Props {
  message: ChatMessage
  isLast: boolean
}

function InlineTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="mt-3 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            {headers.map(h => (
              <th key={h} className="px-3 py-2 text-left font-medium text-muted-foreground whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={cn('border-b border-border last:border-0', i % 2 === 0 && 'bg-background/50')}>
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function MessageBubble({ message }: Props) {
  const isUser = message.role === 'user'

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cn('flex items-start gap-3', isUser && 'flex-row-reverse')}
    >
      {/* Avatar */}
      <div
        className={cn(
          'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold',
          isUser ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary',
        )}
      >
        {isUser ? 'GV' : 'AI'}
      </div>

      {/* Bubble */}
      <div className={cn('max-w-[80%]', isUser && 'items-end')}>
        <div
          className={cn(
            'rounded-xl px-4 py-2.5 text-sm',
            isUser
              ? 'rounded-tr-none bg-primary text-primary-foreground'
              : 'rounded-tl-none border border-border bg-card text-card-foreground',
          )}
        >
          <p className="leading-relaxed whitespace-pre-wrap">{message.content}</p>

          {message.tableData && (
            <InlineTable
              headers={message.tableData.headers}
              rows={message.tableData.rows}
            />
          )}

          {message.chartData && <InlineChart data={message.chartData} />}
        </div>

        {message.sources && message.sources.length > 0 && (
          <SourceCitation citations={message.sources} />
        )}

        <p className="mt-1 text-[10px] text-muted-foreground px-1">
          {message.timestamp.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </motion.div>
  )
}
