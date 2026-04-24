import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(n: number, decimals = 0): string {
  return new Intl.NumberFormat('es-CL', { maximumFractionDigits: decimals }).format(n)
}

export function formatTMS(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)} MTon`
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}k TMS`
  return `${n} TMS`
}

export function statusColor(status: 'ok' | 'warning' | 'critical'): string {
  return {
    ok: 'hsl(142 71% 45%)',
    warning: 'hsl(38 92% 50%)',
    critical: 'hsl(10 77% 54%)',
  }[status]
}

export function statusBadgeClass(status: string): string {
  const map: Record<string, string> = {
    OK: 'bg-success/10 text-success border-success/20',
    Atención: 'bg-warning/10 text-warning border-warning/20',
    Crítico: 'bg-destructive/10 text-destructive border-destructive/20',
  }
  return map[status] ?? 'bg-muted text-muted-foreground border-border'
}
