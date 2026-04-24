import { MessageSquare, BarChart3, FileText, Settings, HelpCircle } from 'lucide-react'
import type { NavItem } from '@/types/domain'

export const navItems: NavItem[] = [
  { id: 'chat', label: 'Consultas IA', icon: MessageSquare, path: '/chat' },
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3, path: '/dashboard', badge: 'Beta' },
  { id: 'reports', label: 'Informes', icon: FileText, path: '/reports' },
  { id: 'settings', label: 'Configuración', icon: Settings, path: '/settings' },
  { id: 'help', label: 'Ayuda', icon: HelpCircle, path: '/help' },
]
