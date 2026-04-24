import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceLine,
  Legend,
} from 'recharts'
import { scatterTPHData } from '@/mock/operations.mock'

const c03 = scatterTPHData.filter(d => d.campana === 'C03')
const c04 = scatterTPHData.filter(d => d.campana === 'C04')

export function ScatterTPH() {
  return (
    <ResponsiveContainer width="100%" height={240}>
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
          name="Tasa Desgaste"
          domain={[0.7, 1.15]}
          tick={{ fontSize: 10 }}
          tickLine={false}
          axisLine={false}
          unit=" mm/MTon"
        />
        <Tooltip
          contentStyle={{ fontSize: 11, borderRadius: 6, border: '1px solid hsl(var(--border))' }}
          formatter={(v) => [`${v}`]}
          cursor={{ strokeDasharray: '3 3' }}
        />
        <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
        <ReferenceLine x={270} stroke="hsl(var(--border))" strokeDasharray="4 2"
          label={{ value: '270 TPH obj.', position: 'top', fontSize: 9, fill: 'hsl(var(--muted-foreground))' }}
        />
        <Scatter name="C03" data={c03} fill="hsl(220 9% 55%)" opacity={0.8} />
        <Scatter name="C04" data={c04} fill="hsl(221 83% 53%)" opacity={0.9} />
      </ScatterChart>
    </ResponsiveContainer>
  )
}
