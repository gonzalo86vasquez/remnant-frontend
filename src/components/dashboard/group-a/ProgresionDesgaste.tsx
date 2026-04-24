import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend,
} from 'recharts'
import { progresionData, emThresholds } from '@/mock/liner-status.mock'

const SERIES = [
  { key: 'lifterFeed', label: 'Lifter Feed', color: 'hsl(221 83% 53%)' },
  { key: 'shellMid', label: 'Shell Mid', color: 'hsl(142 71% 45%)' },
  { key: 'lifterDisc', label: 'Lifter Desc.', color: 'hsl(38 92% 50%)' },
  { key: 'gratePlate', label: 'Grate Plate', color: 'hsl(10 77% 54%)' },
]

const EM_LABELS: Record<string, string> = {
  [emThresholds.lifterFeed]: 'Em Lifter',
  [emThresholds.shellMid]: 'Em Shell',
  [emThresholds.lifterDisc]: 'Em Lifter Desc.',
  [emThresholds.gratePlate]: 'Em Grate',
}

export function ProgresionDesgaste() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={progresionData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
        <XAxis dataKey="fecha" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} unit="mm" domain={[0, 130]} />
        <Tooltip
          contentStyle={{ fontSize: 11, borderRadius: 6, border: '1px solid hsl(var(--border))' }}
          formatter={(v) => [`${v} mm`]}
        />
        <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />

        {/* Em reference lines */}
        {Object.entries(emThresholds).map(([_key, val]) => (
          <ReferenceLine
            key={val}
            y={val}
            stroke="hsl(var(--border))"
            strokeDasharray="3 3"
            label={{ value: EM_LABELS[val] ?? `Em ${val}`, position: 'right', fontSize: 9, fill: 'hsl(var(--muted-foreground))' }}
          />
        ))}

        {SERIES.map(s => (
          <Line
            key={s.key}
            dataKey={s.key}
            name={s.label}
            stroke={s.color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}
