import type { BoxplotPoint, RadarPoint, ScatterPoint } from '@/types/charts'
import type { ComponentDistribution } from '@/types/domain'

export const tasasCampanaData = [
  { campana: 'C01', lifterFeed: 0.94, shellMid: 1.02, lifterDisc: 0.88, grate: 1.15 },
  { campana: 'C02', lifterFeed: 0.89, shellMid: 0.97, lifterDisc: 0.82, grate: 1.08 },
  { campana: 'C03', lifterFeed: 0.85, shellMid: 0.93, lifterDisc: 0.78, grate: 1.01 },
  { campana: 'C04', lifterFeed: 0.74, shellMid: 0.82, lifterDisc: 0.69, grate: 0.91 },
]

export const consumoBolasDualData = [
  { mes: 'Oct-24', consumoBolas: 312, tasaDesgaste: 0.97 },
  { mes: 'Nov-24', consumoBolas: 298, tasaDesgaste: 0.93 },
  { mes: 'Dic-24', consumoBolas: 285, tasaDesgaste: 0.89 },
  { mes: 'Ene-25', consumoBolas: 276, tasaDesgaste: 0.86 },
  { mes: 'Feb-25', consumoBolas: 265, tasaDesgaste: 0.83 },
  { mes: 'Mar-25', consumoBolas: 271, tasaDesgaste: 0.85 },
  { mes: 'Abr-25', consumoBolas: 258, tasaDesgaste: 0.81 },
  { mes: 'May-25', consumoBolas: 262, tasaDesgaste: 0.82 },
]

export const alturaVsTPHData: ScatterPoint[] = [
  { tph: 245, tasaDesgaste: 0.28, campana: 'C03' },
  { tph: 258, tasaDesgaste: 0.31, campana: 'C03' },
  { tph: 271, tasaDesgaste: 0.33, campana: 'C03' },
  { tph: 252, tasaDesgaste: 0.29, campana: 'C04' },
  { tph: 268, tasaDesgaste: 0.32, campana: 'C04' },
  { tph: 279, tasaDesgaste: 0.34, campana: 'C04' },
  { tph: 284, tasaDesgaste: 0.36, campana: 'C04' },
]

export const radarZonasData: RadarPoint[] = [
  { zona: 'Feed Head', c04: 72, c03: 58 },
  { zona: 'Lifter Feed', c04: 68, c03: 54 },
  { zona: 'Shell Mid', c04: 61, c03: 49 },
  { zona: 'Shell Desc.', c04: 55, c03: 41 },
  { zona: 'Lifter Desc.', c04: 63, c03: 47 },
  { zona: 'Grate/Pulp', c04: 43, c03: 32 },
]

export const eficienciaCampanaData = [
  { campana: 'C01', duracionDias: 118, tmsTotal: 5.82e6, eficiencia: 49322 },
  { campana: 'C02', duracionDias: 124, tmsTotal: 6.21e6, eficiencia: 50081 },
  { campana: 'C03', duracionDias: 131, tmsTotal: 6.78e6, eficiencia: 51756 },
  { campana: 'C04', duracionDias: 97, tmsTotal: 5.12e6, eficiencia: 52783 },
]

export const boxplotData: BoxplotPoint[] = [
  { campana: 'C01', min: 0.71, q1: 0.82, median: 0.94, q3: 1.05, max: 1.22 },
  { campana: 'C02', min: 0.68, q1: 0.79, median: 0.88, q3: 0.99, max: 1.18 },
  { campana: 'C03', min: 0.65, q1: 0.76, median: 0.85, q3: 0.96, max: 1.12 },
  { campana: 'C04', min: 0.58, q1: 0.68, median: 0.77, q3: 0.88, max: 1.04 },
]

export const distribucionComponentes: ComponentDistribution[] = [
  {
    componente: 'Lifter Anillo Descarga',
    cantidad: 24,
    material: 'CR27',
    espesorInicial: 115,
    espesorActual: 68,
    vidaRemanente: '62%',
    estado: 'OK',
  },
  {
    componente: 'Shell Liner Descarga',
    cantidad: 36,
    material: 'CR27',
    espesorInicial: 95,
    espesorActual: 42,
    vidaRemanente: '45%',
    estado: 'Atención',
  },
  {
    componente: 'Grate Plate',
    cantidad: 16,
    material: 'CR26',
    espesorInicial: 68,
    espesorActual: 31,
    vidaRemanente: '41%',
    estado: 'Crítico',
  },
  {
    componente: 'Pulp Lifter',
    cantidad: 16,
    material: 'CR26',
    espesorInicial: 90,
    espesorActual: 55,
    vidaRemanente: '71%',
    estado: 'OK',
  },
  {
    componente: 'Shell Liner Mid',
    cantidad: 48,
    material: 'CR27',
    espesorInicial: 100,
    espesorActual: 58,
    vidaRemanente: '58%',
    estado: 'OK',
  },
  {
    componente: 'Lifter Anillo Feed',
    cantidad: 24,
    material: 'CR27',
    espesorInicial: 120,
    espesorActual: 76,
    vidaRemanente: '73%',
    estado: 'OK',
  },
  {
    componente: 'Feed Head Liner',
    cantidad: 12,
    material: 'CR28',
    espesorInicial: 130,
    espesorActual: 82,
    vidaRemanente: '75%',
    estado: 'OK',
  },
]
