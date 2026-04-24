import { distribucionComponentes } from '@/mock/historical.mock'
import { cn, statusBadgeClass } from '@/lib/utils'

export function TablaDistribucion() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-border">
            {['Componente', 'Cant.', 'Material', 'Ei (mm)', 'Ef actual (mm)', 'Vida rem.', 'Estado'].map(h => (
              <th key={h} className="px-3 py-2.5 text-left font-medium text-muted-foreground whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {distribucionComponentes.map((row, i) => (
            <tr
              key={i}
              className={cn(
                'border-b border-border last:border-0 transition-colors hover:bg-accent/50',
                i % 2 === 0 ? 'bg-background' : 'bg-muted/20',
              )}
            >
              <td className="px-3 py-2.5 font-medium whitespace-nowrap">{row.componente}</td>
              <td className="px-3 py-2.5 text-center text-muted-foreground">{row.cantidad}</td>
              <td className="px-3 py-2.5 text-muted-foreground font-mono">{row.material}</td>
              <td className="px-3 py-2.5 text-right text-muted-foreground">{row.espesorInicial}</td>
              <td className="px-3 py-2.5 text-right font-medium">{row.espesorActual}</td>
              <td className="px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 flex-1 rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: row.vidaRemanente }}
                    />
                  </div>
                  <span className="w-8 text-right">{row.vidaRemanente}</span>
                </div>
              </td>
              <td className="px-3 py-2.5">
                <span className={cn('inline-flex items-center rounded border px-2 py-0.5 text-[10px] font-medium', statusBadgeClass(row.estado))}>
                  {row.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
