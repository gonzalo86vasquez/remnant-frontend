import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
  LabelList,
} from 'recharts'
import { eficienciaCampanaData } from '@/mock/historical.mock'

export function EficienciaCampana() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={eficienciaCampanaData}
        margin={{ top: 16, right: 8, left: -12, bottom: 0 }}
      >
        <CartesianGrid vertical={false} stroke="hsl(var(--border))" strokeOpacity={0.5} />
        <XAxis dataKey="campana" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
        <YAxis
          tick={{ fontSize: 10 }}
          tickLine={false}
          axisLine={false}
          domain={[45000, 56000]}
          tickFormatter={v => `${(v / 1000).toFixed(0)}k`}
          unit=" TMS/d"
        />
        <Tooltip
          contentStyle={{ fontSize: 11, borderRadius: 6, border: '1px solid hsl(var(--border))' }}
          formatter={(v) => [`${Number(v).toLocaleString('es-CL')} TMS/día`]}
        />
        <Bar dataKey="eficiencia" name="TMS/día prom." radius={[4, 4, 0, 0]} barSize={40}>
          {eficienciaCampanaData.map((_, i) => (
            <Cell
              key={i}
              fill={i === eficienciaCampanaData.length - 1 ? 'hsl(221 83% 53%)' : 'hsl(221 83% 53% / 0.4)'}
            />
          ))}
          <LabelList
            dataKey="eficiencia"
            position="top"
            style={{ fontSize: 10 }}
            formatter={(v) => `${(Number(v) / 1000).toFixed(1)}k`}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
