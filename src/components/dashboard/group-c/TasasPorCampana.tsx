import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts'
import { tasasCampanaData } from '@/mock/historical.mock'

export function TasasPorCampana() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={tasasCampanaData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke="hsl(var(--border))" strokeOpacity={0.5} />
        <XAxis dataKey="campana" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} unit=" mm/MTon" domain={[0, 1.4]} />
        <Tooltip
          contentStyle={{ fontSize: 11, borderRadius: 6, border: '1px solid hsl(var(--border))' }}
          formatter={(v) => [`${Number(v).toFixed(2)} mm/MTon`]}
        />
        <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
        <Bar dataKey="lifterFeed" name="Lifter Feed" fill="hsl(221 83% 53%)" radius={[3, 3, 0, 0]} />
        <Bar dataKey="shellMid" name="Shell Mid" fill="hsl(142 71% 45%)" radius={[3, 3, 0, 0]} />
        <Bar dataKey="lifterDisc" name="Lifter Desc." fill="hsl(38 92% 50%)" radius={[3, 3, 0, 0]} />
        <Bar dataKey="grate" name="Grate Plate" fill="hsl(10 77% 54%)" radius={[3, 3, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
