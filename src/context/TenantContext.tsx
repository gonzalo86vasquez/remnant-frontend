import { createContext, useContext, useState } from 'react'
import type { Tenant } from '@/types/domain'

const TENANTS: Tenant[] = [
  { id: 'los-pelambres', name: 'Los Pelambres', mill: 'Molino SAG M8', campaign: 'C04' },
  { id: 'los-pelambres-m2', name: 'Los Pelambres', mill: 'Molino SAG M2', campaign: 'C11' },
  { id: 'caserones', name: 'Caserones', mill: 'Molino SAG M1', campaign: 'C07' },
]

interface TenantContextValue {
  currentTenant: Tenant
  tenants: Tenant[]
  setTenant: (t: Tenant) => void
}

const TenantContext = createContext<TenantContextValue | null>(null)

export function TenantProvider({ children }: { children: React.ReactNode }) {
  const [currentTenant, setCurrentTenant] = useState<Tenant>(() => {
    const saved = localStorage.getItem('remnant_tenant')
    return TENANTS.find(t => t.id === saved) ?? TENANTS[0]
  })

  const setTenant = (t: Tenant) => {
    localStorage.setItem('remnant_tenant', t.id)
    setCurrentTenant(t)
  }

  return (
    <TenantContext.Provider value={{ currentTenant, tenants: TENANTS, setTenant }}>
      {children}
    </TenantContext.Provider>
  )
}

export function useTenant() {
  const ctx = useContext(TenantContext)
  if (!ctx) throw new Error('useTenant must be used within TenantProvider')
  return ctx
}
