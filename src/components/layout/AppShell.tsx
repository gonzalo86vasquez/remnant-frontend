import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { PageTransition } from '@/components/common/PageTransition'
import { ThemeToggle } from '@/components/common/ThemeToggle'

// PageTransition uses key to remount on route change, triggering fade-in
// AnimatePresence is only kept for the mobile drawer overlay

export function AppShell() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop sidebar */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Mobile drawer overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: -240 }}
              animate={{ x: 0 }}
              exit={{ x: -240 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="fixed left-0 top-0 z-50 h-full md:hidden"
              style={{ width: 240 }}
            >
              <Sidebar />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden min-w-0">
        {/* Mobile header with hamburger */}
        <div className="flex md:hidden items-center h-14 px-4 border-b border-border gap-3">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-accent"
            aria-label="Abrir menú"
          >
            <Menu size={18} />
          </button>
          <span className="font-semibold text-sm flex-1">Remnant</span>
          <ThemeToggle />
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold select-none">
            GV
          </div>
        </div>

        {/* Desktop header */}
        <div className="hidden md:block w-full">
          <Header />
        </div>

        <main className="flex-1 overflow-hidden">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </main>
      </div>
    </div>
  )
}
