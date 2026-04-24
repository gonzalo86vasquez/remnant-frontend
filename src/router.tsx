import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { Login } from '@/pages/Login'

const Chat = lazy(() => import('@/pages/Chat').then(m => ({ default: m.Chat })))
const Dashboard = lazy(() => import('@/pages/Dashboard').then(m => ({ default: m.Dashboard })))

function RequireAuth({ children }: { children: React.ReactNode }) {
  const isLoggedIn = localStorage.getItem('remnant_logged_in') === 'true'
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />
}

function LazyPage({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div className="flex h-full items-center justify-center text-muted-foreground text-sm">Cargando...</div>}>{children}</Suspense>
}

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <RequireAuth>
        <AppShell />
      </RequireAuth>
    ),
    children: [
      { index: true, element: <Navigate to="/chat" replace /> },
      { path: 'chat', element: <LazyPage><Chat /></LazyPage> },
      { path: 'dashboard', element: <LazyPage><Dashboard /></LazyPage> },
      { path: 'reports', element: <div className="p-6 text-muted-foreground">Informes — próximamente</div> },
      { path: 'settings', element: <div className="p-6 text-muted-foreground">Configuración — próximamente</div> },
      { path: 'help', element: <div className="p-6 text-muted-foreground">Ayuda — próximamente</div> },
    ],
  },
])
