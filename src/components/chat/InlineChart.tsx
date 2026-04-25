import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import type { ChartPayload } from '@/types/chat'

const DEFAULT_COLORS = [
  'hsl(220 9% 55%)',
  'hsl(221 83% 53%)',
  'hsl(142 71% 45%)',
  'hsl(38 92% 50%)',
]

interface Props {
  data: ChartPayload
  height?: number
}

export function InlineChart({ data, height = 180 }: Props) {
  const colors = data.colors ?? DEFAULT_COLORS

  if (!data.data?.length || !data.dataKeys?.length) return null

  if (data.type === 'bar') {
    return (
      <div className="mt-3 rounded-lg border border-border bg-background/50 p-3">
        <ResponsiveContainer width="100%" height={height}>
          <BarChart data={data.data} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
            <XAxis dataKey="pieza" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{ fontSize: 11, borderRadius: 6, border: '1px solid hsl(var(--border))' }}
              cursor={{ fill: 'hsl(var(--accent))' }}
            />
            <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
            {data.dataKeys.map((key, i) => (
              <Bar key={key} dataKey={key} fill={colors[i % colors.length]} radius={[3, 3, 0, 0]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }

  if (data.type === 'line') {
    return (
      <div className="mt-3 rounded-lg border border-border bg-background/50 p-3">
        <ResponsiveContainer width="100%" height={height}>
          <LineChart data={data.data} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
            <XAxis dataKey={data.dataKeys[0]} tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{ fontSize: 11, borderRadius: 6, border: '1px solid hsl(var(--border))' }}
            />
            {data.dataKeys.slice(1).map((key, i) => (
              <Line key={key} dataKey={key} stroke={colors[i % colors.length]} strokeWidth={2} dot={false} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }

  if (data.type === 'area') {
    return (
      <div className="mt-3 rounded-lg border border-border bg-background/50 p-3">
        <ResponsiveContainer width="100%" height={height}>
          <AreaChart data={data.data} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
            <XAxis dataKey={data.dataKeys[0]} tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ fontSize: 11, borderRadius: 6, border: '1px solid hsl(var(--border))' }} />
            {data.dataKeys.slice(1).map((key, i) => (
              <Area
                key={key}
                dataKey={key}
                stroke={colors[i % colors.length]}
                fill={colors[i % colors.length]}
                fillOpacity={0.15}
                strokeWidth={2}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }

  return null
}
