import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
  CartesianGrid,
} from 'recharts'
import { tmsData } from '@/mock/operations.mock'

const faseColor: Record<string, string> = {
  inicio: 'hsl(142 71% 45% / 0.7)',
  estable: 'hsl(221 83% 53%)',
  fin: 'hsl(38 92% 50%)',
  parada: 'hsl(var(--muted))',
}

const faseLabel: Record<string, string> = {
  inicio: 'Inicio campaña',
  estable: 'Campaña estable',
  fin: 'Fin campaña',
  parada: 'Parada',
}

export function TMSMensual() {
  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-3 text-[11px] text-muted-foreground">
        {Object.entries(faseLabel).map(([k, v]) => (
          <span key={k} className="flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-sm inline-block" style={{ background: faseColor[k] }} />
            {v}
          </span>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <ComposedChart data={tmsData} margin={{ top: 4, right: 8, left: -4, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="hsl(var(--border))" strokeOpacity={0.5} />
          <XAxis dataKey="mes" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={v => `${(v / 1000).toFixed(0)}k`} />
          <Tooltip
            contentStyle={{ fontSize: 11, borderRadius: 6, border: '1px solid hsl(var(--border))' }}
            formatter={(v) => [`${(Number(v) / 1000).toFixed(1)}k TMS`]}
          />
          <ReferenceLine y={200000} stroke="hsl(var(--border))" strokeDasharray="4 2"
            label={{ value: 'Obj. 200k', position: 'right', fontSize: 9, fill: 'hsl(var(--muted-foreground))' }}
          />
          <Bar dataKey="tms" name="TMS" radius={[3, 3, 0, 0]} barSize={32}>
            {tmsData.map((entry, i) => (
              <Cell key={i} fill={faseColor[entry.fase]} />
            ))}
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
