export interface EspesorData {
  pieza: string
  espesor: number
  em: number
  initial: number
}

export interface ScenarioPoint {
  fecha: string
  p10: number
  p50: number
  p90: number
  actual: number | null
}

export interface ProgresionPoint {
  fecha: string
  lifterFeed: number
  shellMid: number
  lifterDisc: number
  gratePlate: number
}

export interface TMSData {
  mes: string
  tms: number
  campana: string | null
  fase: string
}

export interface TPHGapData {
  semana: string
  m8: number
  flota: number
  gap: number
}

export interface ScatterPoint {
  tph: number
  tasaDesgaste: number
  campana: string
}

export interface BoxplotPoint {
  campana: string
  min: number
  q1: number
  median: number
  q3: number
  max: number
}

export interface RadarPoint {
  zona: string
  c04: number
  c03: number
}
