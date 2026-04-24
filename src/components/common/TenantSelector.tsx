import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Building2, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTenant } from '@/context/TenantContext'
import { cn } from '@/lib/utils'

export function TenantSelector() {
  const { currentTenant, tenants, setTenant } = useTenant()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 rounded px-2 py-1.5 text-xs hover:bg-accent transition-colors"
      >
        <Building2 size={14} className="text-muted-foreground" />
        <div className="flex flex-col items-start leading-none">
          <span className="font-medium text-foreground">{currentTenant.name}</span>
          <span className="text-muted-foreground">{currentTenant.mill} · {currentTenant.campaign}</span>
        </div>
        <ChevronDown size={12} className={cn('text-muted-foreground transition-transform', open && 'rotate-180')} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.14 }}
            className="absolute right-0 top-full mt-1 z-50 min-w-[220px] rounded-lg border border-border bg-popover shadow-lg p-1"
          >
            {tenants.map(t => (
              <button
                key={t.id}
                onClick={() => { setTenant(t); setOpen(false) }}
                className="flex w-full items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent transition-colors"
              >
                <div className="flex-1 text-left">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.mill} · {t.campaign}</div>
                </div>
                {t.id === currentTenant.id && <Check size={14} className="text-primary" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
