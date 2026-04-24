import type { EspesorData, ScenarioPoint, ProgresionPoint } from '@/types/charts'
import type { ZoneStatus } from '@/types/domain'

export const espesoresData: EspesorData[] = [
  { pieza: 'Feed Head Liner', espesor: 82, em: 30, initial: 130 },
  { pieza: 'Lifter Anillo Feed', espesor: 76, em: 28, initial: 120 },
  { pieza: 'Shell Liner Feed', espesor: 61, em: 22, initial: 100 },
  { pieza: 'Shell Liner Mid', espesor: 58, em: 22, initial: 100 },
  { pieza: 'Shell Liner Desc.', espesor: 42, em: 18, initial: 95 },
  { pieza: 'Lifter Anillo Desc.', espesor: 68, em: 25, initial: 115 },
  { pieza: 'Discharge Head', espesor: 44, em: 15, initial: 88 },
  { pieza: 'Grate Plate', espesor: 31, em: 12, initial: 68 },
  { pieza: 'Pulp Lifter', espesor: 55, em: 20, initial: 90 },
]

export const zonesData: ZoneStatus[] = [
  { name: 'Zona Feed', remaining: 72, status: 'ok', daysLeft: 54, tonsLeft: 2820000 },
  { name: 'Zona Shell', remaining: 58, status: 'ok', daysLeft: 41, tonsLeft: 2140000 },
  { name: 'Zona Descarga', remaining: 43, status: 'warning', daysLeft: 28, tonsLeft: 1460000 },
  { name: 'Grate / Pulp', remaining: 38, status: 'warning', daysLeft: 22, tonsLeft: 1150000 },
]

export const progresionData: ProgresionPoint[] = [
  { fecha: 'Oct-25', lifterFeed: 118, shellMid: 96, lifterDisc: 112, gratePlate: 64 },
  { fecha: 'Oct-15', lifterFeed: 112, shellMid: 90, lifterDisc: 105, gratePlate: 58 },
  { fecha: 'Nov-25', lifterFeed: 104, shellMid: 84, lifterDisc: 97, gratePlate: 51 },
  { fecha: 'Nov-15', lifterFeed: 96, shellMid: 77, lifterDisc: 88, gratePlate: 44 },
  { fecha: 'Dic-25', lifterFeed: 89, shellMid: 72, lifterDisc: 80, gratePlate: 38 },
  { fecha: 'Dic-15', lifterFeed: 83, shellMid: 67, lifterDisc: 74, gratePlate: 33 },
  { fecha: 'Ene-26', lifterFeed: 78, shellMid: 63, lifterDisc: 69, gratePlate: 29 },
  { fecha: 'Feb-26', lifterFeed: 76, shellMid: 61, lifterDisc: 68, gratePlate: 28 },
]

export const emThresholds = {
  lifterFeed: 28,
  shellMid: 22,
  lifterDisc: 25,
  gratePlate: 12,
}

export const escenariosData: ScenarioPoint[] = [
  { fecha: '1-Feb', p10: 18, p50: 24, p90: 32, actual: 28 },
  { fecha: '15-Feb', p10: 12, p50: 19, p90: 28, actual: 22 },
  { fecha: '1-Mar', p10: 6, p50: 14, p90: 23, actual: null },
  { fecha: '15-Mar', p10: 0, p50: 8, p90: 18, actual: null },
  { fecha: '1-Abr', p10: 0, p50: 2, p90: 12, actual: null },
  { fecha: '10-Abr', p10: 0, p50: 0, p90: 5, actual: null },
]
