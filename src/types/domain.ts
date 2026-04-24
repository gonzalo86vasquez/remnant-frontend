import type { LucideIcon } from 'lucide-react'

export interface Tenant {
  id: string
  name: string
  mill: string
  campaign: string
}

export interface NavItem {
  id: string
  label: string
  icon: LucideIcon
  path: string
  badge?: string
}

export interface ZoneStatus {
  name: string
  remaining: number
  status: 'ok' | 'warning' | 'critical'
  daysLeft: number
  tonsLeft: number
}

export interface ComponentDistribution {
  componente: string
  cantidad: number
  material: string
  espesorInicial: number
  espesorActual: number
  vidaRemanente: string
  estado: 'OK' | 'Atención' | 'Crítico'
}
