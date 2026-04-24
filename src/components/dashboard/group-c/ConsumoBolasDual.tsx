import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from 'recharts'
import { consumoBolasDualData } from '@/mock/historical.mock'

export function ConsumoBolasDual() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <ComposedChart data={consumoBolasDualData} margin={{ top: 4, right: 40, left: -12, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke="hsl(var(--border))" strokeOpacity={0.5} />
        <XAxis dataKey="mes" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
        <YAxis
          yAxisId="bolas"
          domain={[230, 340]}
          tick={{ fontSize: 10 }}
          tickLine={false}
          axisLine={false}
          unit=" kg"
        />
        <YAxis
          yAxisId="tasa"
          orientation="right"
          domain={[0.7, 1.05]}
          tick={{ fontSize: 10 }}
          tickLine={false}
          axisLine={false}
          unit=" mm/MTon"
        />
        <Tooltip
          contentStyle={{ fontSize: 11, borderRadius: 6, border: '1px solid hsl(var(--border))' }}
        />
        <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
        <Bar yAxisId="bolas" dataKey="consumoBolas" name="Consumo bolas (kg)" fill="hsl(220 9% 70%)" radius={[3, 3, 0, 0]} opacity={0.7} />
        <Line yAxisId="tasa" dataKey="tasaDesgaste" name="Tasa desgaste" stroke="hsl(10 77% 54%)" strokeWidth={2} dot={{ r: 3 }} />
      </ComposedChart>
    </ResponsiveContainer>
  )
}
