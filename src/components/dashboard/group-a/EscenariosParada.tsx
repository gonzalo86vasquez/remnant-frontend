import { Area, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, Line, ComposedChart } from 'recharts'
import { escenariosData } from '@/mock/liner-status.mock'

export function EscenariosParada() {
  return (
    <div>
      <div className="mb-3 flex items-center gap-4 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="h-2 w-6 rounded bg-destructive/20 border border-destructive/40 inline-block" /> P10 (opt.)
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-6 rounded bg-primary/20 border border-primary/40 inline-block" /> P50 (base)
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-6 rounded bg-warning/20 border border-warning/40 inline-block" /> P90 (pess.)
        </span>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <ComposedChart data={escenariosData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <XAxis dataKey="fecha" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} unit="mm" />
          <Tooltip
            contentStyle={{ fontSize: 11, borderRadius: 6, border: '1px solid hsl(var(--border))' }}
            formatter={(v) => [v != null ? `${v} mm` : '—']}
          />

          <ReferenceLine y={0} stroke="hsl(var(--destructive))" strokeDasharray="4 2" strokeWidth={1.5}
            label={{ value: 'Em límite', position: 'right', fontSize: 9, fill: 'hsl(var(--destructive))' }}
          />

          <Area dataKey="p90" fill="hsl(38 92% 50% / 0.15)" stroke="hsl(38 92% 50%)" strokeWidth={1.5} name="P90" dot={false} />
          <Area dataKey="p50" fill="hsl(221 83% 53% / 0.2)" stroke="hsl(221 83% 53%)" strokeWidth={2} name="P50" dot={false} />
          <Area dataKey="p10" fill="hsl(10 77% 54% / 0.1)" stroke="hsl(10 77% 54%)" strokeWidth={1.5} name="P10" dot={false} />
          <Line dataKey="actual" stroke="hsl(var(--foreground))" strokeWidth={2} name="Real" dot={{ r: 3 }} connectNulls={false} />
        </ComposedChart>
      </ResponsiveContainer>

      <div className="mt-2 flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2">
        <span className="text-[11px] text-muted-foreground">Parada estimada P50:</span>
        <span className="text-[11px] font-semibold text-primary">~8 de Abril 2026</span>
        <span className="ml-auto text-[10px] text-muted-foreground">± 15 días</span>
      </div>
    </div>
  )
}
