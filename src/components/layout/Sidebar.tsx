import { motion } from 'framer-motion'
import { PanelLeftClose, PanelLeftOpen, Activity } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useSidebar } from '@/context/SidebarContext'
import { navItems } from '@/constants/navigation'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'

export function Sidebar() {
  const { collapsed, toggle } = useSidebar()
  const location = useLocation()

  return (
    <motion.aside
      animate={{ width: collapsed ? 64 : 240 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col h-full border-r border-border bg-card overflow-hidden shrink-0"
    >
      {/* Logo + toggle */}
      <div className="flex items-center h-14 px-3 border-b border-border">
        <motion.div
          animate={{ opacity: collapsed ? 0 : 1, width: collapsed ? 0 : 'auto' }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2 overflow-hidden"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/10">
            <Activity size={14} className="text-primary" />
          </div>
          <span className="font-semibold text-sm whitespace-nowrap">Remnant</span>
        </motion.div>

        {collapsed && (
          <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/10 mx-auto">
            <Activity size={14} className="text-primary" />
          </div>
        )}

        <button
          onClick={toggle}
          className={cn(
            'ml-auto flex items-center justify-center h-7 w-7 rounded text-muted-foreground hover:text-foreground hover:bg-accent transition-colors',
            collapsed && 'hidden',
          )}
          aria-label="Colapsar sidebar"
        >
          <PanelLeftClose size={14} />
        </button>
      </div>

      {/* Nav items */}
      <nav className="flex-1 p-2 space-y-0.5">
        {navItems.map(item => {
          const isActive = location.pathname.startsWith(item.path)
          const Icon = item.icon
          return (
            <Link
              key={item.id}
              to={item.path}
              title={collapsed ? item.label : undefined}
              className={cn(
                'flex items-center gap-3 h-9 px-2.5 rounded text-sm transition-colors',
                isActive
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent',
              )}
            >
              <Icon size={16} className="shrink-0" />
              <motion.span
                animate={{ opacity: collapsed ? 0 : 1, width: collapsed ? 0 : 'auto' }}
                transition={{ duration: 0.15 }}
                className="overflow-hidden whitespace-nowrap flex items-center gap-2"
              >
                {item.label}
                {item.badge && (
                  <Badge variant="default" className="text-[10px] px-1.5 py-0 h-4">
                    {item.badge}
                  </Badge>
                )}
              </motion.span>
            </Link>
          )
        })}
      </nav>

      {/* Expand button when collapsed */}
      {collapsed && (
        <div className="p-2 border-t border-border">
          <button
            onClick={toggle}
            className="flex w-full items-center justify-center h-7 rounded text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Expandir sidebar"
          >
            <PanelLeftOpen size={14} />
          </button>
        </div>
      )}

      {/* Version footer */}
      {!collapsed && (
        <div className="p-3 border-t border-border">
          <p className="text-[10px] text-muted-foreground">Remnant v0.1 · MVP</p>
        </div>
      )}
    </motion.aside>
  )
}
