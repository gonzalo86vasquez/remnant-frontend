import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts'
import { alturaVsTPHData } from '@/mock/historical.mock'

const c03 = alturaVsTPHData.filter(d => d.campana === 'C03')
const c04 = alturaVsTPHData.filter(d => d.campana === 'C04')

export function AlturaVsTPH() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <ScatterChart margin={{ top: 4, right: 8, left: -12, bottom: 0 }}>
        <CartesianGrid stroke="hsl(var(--border))" strokeOpacity={0.5} />
        <XAxis
          dataKey="tph"
          type="number"
          name="TPH"
          domain={[240, 290]}
          tick={{ fontSize: 10 }}
          tickLine={false}
          axisLine={false}
          unit=" TPH"
        />
        <YAxis
          dataKey="tasaDesgaste"
          type="number"
          name="Altura rel."
          domain={[0.25, 0.40]}
          tick={{ fontSize: 10 }}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          contentStyle={{ fontSize: 11, borderRadius: 6, border: '1px solid hsl(var(--border))' }}
          formatter={(v) => [`${Number(v).toFixed(2)}`]}
        />
        <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
        <Scatter name="C03" data={c03} fill="hsl(220 9% 55%)" opacity={0.8} />
        <Scatter name="C04" data={c04} fill="hsl(142 71% 45%)" opacity={0.9} />
      </ScatterChart>
    </ResponsiveContainer>
  )
}
