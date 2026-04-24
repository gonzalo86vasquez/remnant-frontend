import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { Login } from '@/pages/Login'
import { Chat } from '@/pages/Chat'
import { Dashboard } from '@/pages/Dashboard'

function RequireAuth({ children }: { children: React.ReactNode }) {
  const isLoggedIn = localStorage.getItem('remnant_logged_in') === 'true'
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />
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
      { path: 'chat', element: <Chat /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'reports', element: <div className="p-6 text-muted-foreground">Informes — próximamente</div> },
      { path: 'settings', element: <div className="p-6 text-muted-foreground">Configuración — próximamente</div> },
      { path: 'help', element: <div className="p-6 text-muted-foreground">Ayuda — próximamente</div> },
    ],
  },
])
