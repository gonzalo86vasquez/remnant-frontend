import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceLine,
  Legend,
} from 'recharts'
import { tphGapData } from '@/mock/operations.mock'

export function GapTPH() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <ComposedChart data={tphGapData} margin={{ top: 4, right: 8, left: -8, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke="hsl(var(--border))" strokeOpacity={0.5} />
        <XAxis dataKey="semana" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
        <YAxis
          yAxisId="tph"
          domain={[240, 295]}
          tick={{ fontSize: 10 }}
          tickLine={false}
          axisLine={false}
          unit=" TPH"
        />
        <YAxis
          yAxisId="gap"
          orientation="right"
          domain={[-20, 15]}
          tick={{ fontSize: 10 }}
          tickLine={false}
          axisLine={false}
          unit=" TPH"
        />
        <Tooltip
          contentStyle={{ fontSize: 11, borderRadius: 6, border: '1px solid hsl(var(--border))' }}
          formatter={(v) => [`${v} TPH`]}
        />
        <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />

        <ReferenceLine yAxisId="gap" y={0} stroke="hsl(var(--muted-foreground))" strokeDasharray="4 2" />

        <Line yAxisId="tph" dataKey="flota" name="Flota (prom.)" stroke="hsl(var(--muted-foreground))" strokeWidth={1.5} dot={false} strokeDasharray="5 3" />
        <Line yAxisId="tph" dataKey="m8" name="M8" stroke="hsl(221 83% 53%)" strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} />
        <Area yAxisId="gap" dataKey="gap" name="Gap M8-Flota" stroke="none"
          fill="hsl(10 77% 54% / 0.2)"
          fillOpacity={1}
        />
      </ComposedChart>
    </ResponsiveContainer>
  )
}
