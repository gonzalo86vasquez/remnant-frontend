import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
  ErrorBar,
  ReferenceLine,
} from 'recharts'
import { boxplotData } from '@/mock/historical.mock'

// Transform for Recharts: bar represents IQR (Q1 to Q3), errorBar for whiskers
const chartData = boxplotData.map(d => ({
  campana: d.campana,
  base: d.q1,
  iqr: d.q3 - d.q1,
  median: d.median,
  whiskerLow: d.q1 - d.min,
  whiskerHigh: d.max - d.q3,
  min: d.min,
  max: d.max,
  q1: d.q1,
  q3: d.q3,
}))

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { payload: typeof chartData[0] }[]; label?: string }) => {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="rounded-lg border border-border bg-card p-2.5 shadow text-[11px] space-y-0.5">
      <p className="font-semibold mb-1">{label}</p>
      <p>Máx: <span className="font-medium">{d.max.toFixed(2)}</span></p>
      <p>Q3: <span className="font-medium">{d.q3.toFixed(2)}</span></p>
      <p className="text-primary">Mediana: <span className="font-semibold">{d.median.toFixed(2)}</span></p>
      <p>Q1: <span className="font-medium">{d.q1.toFixed(2)}</span></p>
      <p>Mín: <span className="font-medium">{d.min.toFixed(2)}</span></p>
      <p className="text-muted-foreground text-[10px] pt-1">mm/MTon</p>
    </div>
  )
}

export function BoxplotTasas() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <ComposedChart data={chartData} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke="hsl(var(--border))" strokeOpacity={0.5} />
        <XAxis dataKey="campana" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} unit=" mm/MTon" domain={[0.5, 1.35]} />
        <Tooltip content={<CustomTooltip />} />

        {/* IQR bar starting from Q1 */}
        <Bar dataKey="iqr" name="IQR" stackId="box" barSize={28} radius={[3, 3, 0, 0]}>
          {chartData.map((_d, i) => (
            <Cell key={i} fill="hsl(221 83% 53% / 0.25)" stroke="hsl(221 83% 53%)" strokeWidth={1.5} />
          ))}
          <ErrorBar dataKey="whiskerHigh" width={8} strokeWidth={1.5} stroke="hsl(var(--muted-foreground))" />
        </Bar>

        {/* Invisible base bar to offset */}
        <Bar dataKey="base" name="_base" stackId="box" barSize={28} fill="transparent" stroke="none">
          <ErrorBar dataKey="whiskerLow" width={8} strokeWidth={1.5} stroke="hsl(var(--muted-foreground))" direction="y" />
        </Bar>

        {/* Median reference per campaign — approximate with refline */}
        {chartData.map(d => (
          <ReferenceLine key={d.campana} y={d.median} stroke="hsl(221 83% 53%)" strokeWidth={1} strokeDasharray="0" />
        ))}
      </ComposedChart>
    </ResponsiveContainer>
  )
}
