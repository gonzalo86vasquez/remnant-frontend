import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts'
import { espesoresData } from '@/mock/liner-status.mock'

const getBarColor = (espesor: number, em: number) => {
  const ratio = (espesor - em) / em
  if (ratio > 1) return 'hsl(142 71% 45%)'
  if (ratio > 0.5) return 'hsl(38 92% 50%)'
  return 'hsl(10 77% 54%)'
}

export function WaterfallEspesor() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={espesoresData} layout="vertical" margin={{ top: 0, right: 40, left: 120, bottom: 0 }}>
        <XAxis type="number" domain={[0, 140]} tick={{ fontSize: 10 }} tickLine={false} axisLine={false} unit="mm" />
        <YAxis type="category" dataKey="pieza" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} width={115} />
        <Tooltip
          formatter={(value) => [`${value} mm`]}
          contentStyle={{ fontSize: 11, borderRadius: 6, border: '1px solid hsl(var(--border))' }}
        />
        <Bar dataKey="initial" fill="hsl(var(--muted))" radius={[0, 3, 3, 0]} barSize={14} name="Ei inicial">
          <LabelList dataKey="initial" position="right" style={{ fontSize: 9, fill: 'hsl(var(--muted-foreground))' }} />
        </Bar>
        <Bar dataKey="espesor" radius={[0, 3, 3, 0]} barSize={14} name="Espesor actual">
          {espesoresData.map((entry, i) => (
            <Cell key={i} fill={getBarColor(entry.espesor, entry.em)} />
          ))}
          <LabelList dataKey="espesor" position="right" style={{ fontSize: 9, fill: 'hsl(var(--foreground))' }} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
