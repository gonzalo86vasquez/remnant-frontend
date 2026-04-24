import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { radarZonasData } from '@/mock/historical.mock'

export function RadarZonas() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <RadarChart data={radarZonasData} margin={{ top: 8, right: 16, left: 16, bottom: 8 }}>
        <PolarGrid stroke="hsl(var(--border))" />
        <PolarAngleAxis dataKey="zona" tick={{ fontSize: 10 }} />
        <Tooltip
          contentStyle={{ fontSize: 11, borderRadius: 6, border: '1px solid hsl(var(--border))' }}
          formatter={(v) => [`${v}% remanente`]}
        />
        <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
        <Radar name="C03" dataKey="c03" stroke="hsl(220 9% 55%)" fill="hsl(220 9% 55%)" fillOpacity={0.15} strokeWidth={1.5} />
        <Radar name="C04" dataKey="c04" stroke="hsl(221 83% 53%)" fill="hsl(221 83% 53%)" fillOpacity={0.2} strokeWidth={2} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
