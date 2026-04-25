import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChartCard } from './ChartCard'
import { WaterfallEspesor } from './group-a/WaterfallEspesor'
import { GaugesVidaRemanente } from './group-a/GaugesVidaRemanente'
import { ProgresionDesgaste } from './group-a/ProgresionDesgaste'
import { EscenariosParada } from './group-a/EscenariosParada'
import { TMSMensual } from './group-b/TMSMensual'
import { GapTPH } from './group-b/GapTPH'
import { ScatterTPH } from './group-b/ScatterTPH'
import { TasasPorCampana } from './group-c/TasasPorCampana'
import { ConsumoBolasDual } from './group-c/ConsumoBolasDual'
import { AlturaVsTPH } from './group-c/AlturaVsTPH'
import { RadarZonas } from './group-c/RadarZonas'
import { EficienciaCampana } from './group-c/EficienciaCampana'
import { BoxplotTasas } from './group-c/BoxplotTasas'
import { TablaDistribucion } from './group-c/TablaDistribucion'
import { cn } from '@/lib/utils'

const TABS = [
  { id: 'a', label: 'Estado del Liner', description: 'Espesor actual y vida remanente por zona — Campaña C04' },
  { id: 'b', label: 'Operaciones', description: 'TMS, TPH y correlación con desgaste' },
  { id: 'c', label: 'Histórico', description: 'Comparativa entre campañas C01–C04' },
]

function TabA() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <ChartCard
        className="col-span-12 lg:col-span-7 min-h-[320px]"
        title="Espesor actual vs inicial"
        subtitle="Barras azules = actual, grises = inicial · rojo = riesgo crítico, naranja = atención"
        priority="high"
      >
        <WaterfallEspesor />
      </ChartCard>

      <ChartCard
        className="col-span-12 lg:col-span-5 min-h-[320px]"
        title="Vida remanente por zona"
        subtitle="% de vida restante hasta Em · Molino 8 C04 T7"
        priority="high"
      >
        <GaugesVidaRemanente />
      </ChartCard>

      <ChartCard
        className="col-span-12 lg:col-span-6 min-h-[280px]"
        title="Progresión del desgaste C04"
        subtitle="Espesor (mm) por pieza desde Oct-2025 · líneas punteadas = Em"
        priority="high"
      >
        <ProgresionDesgaste />
      </ChartCard>

      <ChartCard
        className="col-span-12 lg:col-span-6 min-h-[280px]"
        title="Escenarios de próxima parada"
        subtitle="Vida remanente proyectada (mm) bajo escenarios P10 / P50 / P90"
        priority="high"
      >
        <EscenariosParada />
      </ChartCard>
    </div>
  )
}

function TabB() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <ChartCard
        className="col-span-12 lg:col-span-8 min-h-[280px]"
        title="TMS mensual M8 con fases de campaña"
        subtitle="Toneladas Métricas Secas procesadas · color según fase de campaña"
        priority="high"
      >
        <TMSMensual />
      </ChartCard>

      <ChartCard
        className="col-span-12 lg:col-span-4 row-span-2 min-h-[280px]"
        title="TPH vs Tasa de desgaste"
        subtitle="Scatter C03 vs C04 · correlación operación–desgaste"
        priority="high"
      >
        <ScatterTPH />
      </ChartCard>

      <ChartCard
        className="col-span-12 lg:col-span-8 min-h-[280px]"
        title="Gap TPH: Molino 8 vs Flota"
        subtitle="Diferencia semanal respecto al promedio de flota"
        priority="high"
      >
        <GapTPH />
      </ChartCard>
    </div>
  )
}

function TabC() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <ChartCard
        className="col-span-12 md:col-span-6 lg:col-span-4 min-h-[260px]"
        title="Tasas de desgaste por campaña"
        subtitle="mm/MTon por pieza · C01 → C04"
        priority="medium"
      >
        <TasasPorCampana />
      </ChartCard>

      <ChartCard
        className="col-span-12 md:col-span-6 lg:col-span-4 min-h-[260px]"
        title="Consumo de bolas vs tasa desgaste"
        subtitle="Dual axis: kg bolas (barra) y mm/MTon (línea)"
        priority="medium"
      >
        <ConsumoBolasDual />
      </ChartCard>

      <ChartCard
        className="col-span-12 md:col-span-6 lg:col-span-4 min-h-[260px]"
        title="Altura de carga vs TPH"
        subtitle="Relación entre nivel de carga y rendimiento"
        priority="medium"
      >
        <AlturaVsTPH />
      </ChartCard>

      <ChartCard
        className="col-span-12 md:col-span-6 lg:col-span-4 min-h-[260px]"
        title="Radar: estado por zona C04 vs C03"
        subtitle="% vida remanente por zona — comparativa de campaña"
        priority="medium"
      >
        <RadarZonas />
      </ChartCard>

      <ChartCard
        className="col-span-12 md:col-span-6 lg:col-span-4 min-h-[260px]"
        title="Eficiencia de campaña histórica"
        subtitle="TMS promedio por día efectivo de operación"
        priority="medium"
      >
        <EficienciaCampana />
      </ChartCard>

      <ChartCard
        className="col-span-12 md:col-span-6 lg:col-span-4 min-h-[260px]"
        title="Boxplot histórico de tasas"
        subtitle="Distribución de tasas de desgaste (mm/MTon) por campaña"
        priority="medium"
      >
        <BoxplotTasas />
      </ChartCard>

      <ChartCard
        className="col-span-12 min-h-[200px]"
        title="Distribución de componentes — Campaña C04"
        subtitle="Estado actual por pieza al T7 (11/02/2026) · Molino SAG M8"
        priority="medium"
      >
        <TablaDistribucion />
      </ChartCard>
    </div>
  )
}

export function DashboardLayout() {
  const [activeTab, setActiveTab] = useState<'a' | 'b' | 'c'>('a')
  const activeTabInfo = TABS.find(t => t.id === activeTab)!

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Tab bar */}
      <div className="flex items-end gap-1 border-b border-border bg-background px-4 pt-3">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as 'a' | 'b' | 'c')}
            className={cn(
              'relative px-4 py-2 text-sm transition-colors rounded-t-lg',
              activeTab === tab.id
                ? 'text-foreground font-medium bg-card border border-b-0 border-border'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab description */}
      <div className="flex items-center gap-3 px-4 py-2 border-b border-border bg-muted/30">
        <p className="text-xs text-muted-foreground">{activeTabInfo.description}</p>
        <span className="ml-auto text-[10px] text-muted-foreground bg-muted border border-border rounded px-2 py-0.5">
          Molino SAG M8 · C04 · T7 11/02/2026
        </span>
      </div>

      {/* Charts grid */}
      <div className="flex-1 overflow-y-auto p-4">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
        >
          {activeTab === 'a' && <TabA />}
          {activeTab === 'b' && <TabB />}
          {activeTab === 'c' && <TabC />}
        </motion.div>
      </div>
    </div>
  )
}
