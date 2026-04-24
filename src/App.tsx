import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/context/ThemeContext'
import { SidebarProvider } from '@/context/SidebarContext'
import { TenantProvider } from '@/context/TenantContext'
import { router } from './router'

export default function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <TenantProvider>
          <RouterProvider router={router} />
        </TenantProvider>
      </SidebarProvider>
    </ThemeProvider>
  )
}
