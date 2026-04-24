import { PieChart, Pie, Cell } from 'recharts'
import { zonesData } from '@/mock/liner-status.mock'
import { statusColor } from '@/lib/utils'
import { cn } from '@/lib/utils'

function Gauge({ name, remaining, status, daysLeft, tonsLeft }: (typeof zonesData)[0]) {
  const color = statusColor(status)
  const data = [{ value: remaining }, { value: 100 - remaining }]
  const statusLabel = { ok: 'OK', warning: 'Atención', critical: 'Crítico' }[status]
  const badgeClass = {
    ok: 'text-success bg-success/10 border-success/20',
    warning: 'text-warning bg-warning/10 border-warning/20',
    critical: 'text-destructive bg-destructive/10 border-destructive/20',
  }[status]

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative">
        <PieChart width={120} height={70}>
          <Pie
            data={data}
            cx="50%"
            cy="100%"
            startAngle={180}
            endAngle={0}
            innerRadius={40}
            outerRadius={56}
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            <Cell fill={color} />
            <Cell fill="hsl(var(--muted))" />
          </Pie>
        </PieChart>
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-center">
          <span className="text-lg font-bold leading-none">{remaining}%</span>
        </div>
      </div>
      <p className="text-xs font-medium text-center leading-tight">{name}</p>
      <span className={cn('inline-flex items-center rounded border px-1.5 py-0 text-[10px] font-medium', badgeClass)}>
        {statusLabel}
      </span>
      <p className="text-[10px] text-muted-foreground">~{daysLeft} días · {(tonsLeft / 1e6).toFixed(1)} MTon</p>
    </div>
  )
}

export function GaugesVidaRemanente() {
  return (
    <div className="grid grid-cols-2 gap-4 pt-2">
      {zonesData.map(z => (
        <Gauge key={z.name} {...z} />
      ))}
    </div>
  )
}
