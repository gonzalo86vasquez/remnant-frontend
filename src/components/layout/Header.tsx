import { useLocation } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { TenantSelector } from '@/components/common/TenantSelector'

const BREADCRUMBS: Record<string, string[]> = {
  '/chat': ['Consultas IA'],
  '/dashboard': ['Dashboard'],
  '/reports': ['Informes'],
  '/settings': ['Configuración'],
  '/help': ['Ayuda'],
}

export function Header() {
  const location = useLocation()
  const crumbs = BREADCRUMBS[location.pathname] ?? ['Inicio']

  return (
    <header className="w-full sticky top-0 z-40 flex h-14 items-center border-b border-border bg-background px-5">
      {/* Breadcrumb — ocupa todo el espacio disponible */}
      <nav className="flex flex-1 items-center gap-1.5 text-sm min-w-0 mr-4">
        <span className="text-muted-foreground shrink-0">Remnant</span>
        {crumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1.5 min-w-0">
            <ChevronRight size={12} className="text-muted-foreground shrink-0" />
            <span className={`truncate ${i === crumbs.length - 1 ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
              {crumb}
            </span>
          </span>
        ))}
      </nav>

      {/* Acciones — agrupadas a la derecha */}
      <div className="flex items-center gap-1 shrink-0">
        {/* Tenant selector */}
        <TenantSelector />

        {/* Separador */}
        <div className="mx-1 h-5 w-px bg-border" />

        {/* Tema + Avatar */}
        <ThemeToggle />
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold select-none">
          GV
        </div>
      </div>
    </header>
  )
}
