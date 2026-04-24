import { FileText, BarChart2, TrendingUp } from 'lucide-react'
import type { SourceCitation as TSourceCitation } from '@/types/chat'
import { cn } from '@/lib/utils'

const typeConfig = {
  report: { icon: FileText, label: 'Informe', className: 'text-primary border-primary/20 bg-primary/5' },
  performance: { icon: BarChart2, label: 'Performance', className: 'text-success border-success/20 bg-success/5' },
  projection: { icon: TrendingUp, label: 'Proyección', className: 'text-warning border-warning/20 bg-warning/5' },
}

interface Props {
  citations: TSourceCitation[]
}

export function SourceCitation({ citations }: Props) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {citations.map((c, i) => {
        const { icon: Icon, className } = typeConfig[c.type]
        return (
          <span
            key={i}
            className={cn(
              'inline-flex items-center gap-1 rounded border px-2 py-0.5 text-[11px] font-medium',
              className,
            )}
          >
            <Icon size={10} />
            {c.label} · {c.date}
          </span>
        )
      })}
    </div>
  )
}
