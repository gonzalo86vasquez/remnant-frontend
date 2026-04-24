import type { TMSData, TPHGapData, ScatterPoint } from '@/types/charts'

export const tmsData: TMSData[] = [
  { mes: 'Ago-25', tms: 198420, campana: 'C03', fase: 'estable' },
  { mes: 'Sep-25', tms: 203150, campana: 'C03', fase: 'estable' },
  { mes: 'Oct-25', tms: 199870, campana: 'C03', fase: 'fin' },
  { mes: 'Nov-25', tms: 0, campana: null, fase: 'parada' },
  { mes: 'Dic-25', tms: 187300, campana: 'C04', fase: 'inicio' },
  { mes: 'Ene-26', tms: 210450, campana: 'C04', fase: 'estable' },
  { mes: 'Feb-26', tms: 195200, campana: 'C04', fase: 'estable' },
]

export const tphGapData: TPHGapData[] = [
  { semana: 'S1-Dic', m8: 258, flota: 271, gap: -13 },
  { semana: 'S2-Dic', m8: 262, flota: 268, gap: -6 },
  { semana: 'S3-Dic', m8: 271, flota: 275, gap: -4 },
  { semana: 'S4-Dic', m8: 265, flota: 270, gap: -5 },
  { semana: 'S1-Ene', m8: 274, flota: 272, gap: 2 },
  { semana: 'S2-Ene', m8: 278, flota: 271, gap: 7 },
  { semana: 'S3-Ene', m8: 269, flota: 273, gap: -4 },
  { semana: 'S4-Ene', m8: 272, flota: 274, gap: -2 },
  { semana: 'S1-Feb', m8: 267, flota: 269, gap: -2 },
  { semana: 'S2-Feb', m8: 261, flota: 271, gap: -10 },
]

export const scatterTPHData: ScatterPoint[] = [
  { tph: 245, tasaDesgaste: 1.02, campana: 'C03' },
  { tph: 258, tasaDesgaste: 0.98, campana: 'C03' },
  { tph: 263, tasaDesgaste: 0.95, campana: 'C03' },
  { tph: 271, tasaDesgaste: 0.91, campana: 'C03' },
  { tph: 252, tasaDesgaste: 1.08, campana: 'C04' },
  { tph: 261, tasaDesgaste: 0.91, campana: 'C04' },
  { tph: 268, tasaDesgaste: 0.87, campana: 'C04' },
  { tph: 275, tasaDesgaste: 0.82, campana: 'C04' },
  { tph: 279, tasaDesgaste: 0.79, campana: 'C04' },
  { tph: 284, tasaDesgaste: 0.76, campana: 'C04' },
]
