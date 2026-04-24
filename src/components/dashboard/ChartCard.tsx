import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Props {
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  priority?: 'high' | 'medium'
}

export function ChartCard({ title, subtitle, children, className, priority = 'high' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'flex flex-col rounded-lg border border-border bg-card shadow-sm overflow-hidden',
        className,
      )}
    >
      <div className="flex items-start justify-between px-4 pt-4 pb-2">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold leading-none">{title}</h3>
            {priority === 'high' && (
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            )}
          </div>
          {subtitle && <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
      <div className="flex-1 px-4 pb-4">{children}</div>
    </motion.div>
  )
}
