import type { ChatSession, ChatMessage } from '@/types/chat'

export const mockSessions: ChatSession[] = [
  {
    id: 'sess-001',
    title: 'Análisis C04 — Zona Descarga',
    preview: '¿Cuál es la vida remanente del lifter descarga?',
    createdAt: '2026-02-11',
    messageCount: 8,
  },
  {
    id: 'sess-002',
    title: 'Comparativa C03 vs C04',
    preview: 'Diferencia de tasas de desgaste entre campañas...',
    createdAt: '2026-02-08',
    messageCount: 14,
  },
  {
    id: 'sess-003',
    title: 'Proyección próxima detención',
    preview: '¿Cuándo se estima la próxima parada según P50?',
    createdAt: '2026-02-05',
    messageCount: 6,
  },
  {
    id: 'sess-004',
    title: 'Optimización TPH',
    preview: '¿A qué TPH operar sin acelerar desgaste?',
    createdAt: '2026-01-28',
    messageCount: 10,
  },
]

export const mockMessages: Record<string, ChatMessage[]> = {
  'sess-001': [
    {
      id: 'msg-001',
      role: 'user',
      content: '¿Cuál es la vida remanente de las piezas de la zona de descarga en C04?',
      timestamp: new Date('2026-02-11T10:23:00'),
    },
    {
      id: 'msg-002',
      role: 'assistant',
      content:
        'Según el Informe de Desgaste de C04 (T7, 11/02/2026), la zona de descarga presenta los siguientes espesores remanentes al cierre de la campaña:',
      timestamp: new Date('2026-02-11T10:23:05'),
      sources: [{ label: 'Informe Desgaste C04 T7', date: '11/02/2026', type: 'report' }],
      tableData: {
        headers: ['Pieza', 'Espesor actual (mm)', 'Em (mm)', 'Vida rem. (%)', 'Días est.'],
        rows: [
          ['Lifter Anillo Descarga', '68', '25', '62%', '47 días'],
          ['Shell Liner Descarga', '42', '18', '55%', '38 días'],
          ['Grate Plate', '31', '12', '48%', '31 días'],
          ['Pulp Lifter', '55', '20', '71%', '58 días'],
        ],
      },
    },
    {
      id: 'msg-003',
      role: 'user',
      content: '¿Cómo se compara con la campaña C03?',
      timestamp: new Date('2026-02-11T10:25:00'),
    },
    {
      id: 'msg-004',
      role: 'assistant',
      content:
        'La comparación entre C03 y C04 muestra una mejora del 12% en las tasas de desgaste de la zona descarga, consistente con la reducción del carguío de bolas registrado desde diciembre 2024.',
      timestamp: new Date('2026-02-11T10:25:08'),
      sources: [
        { label: 'Informe Desgaste C04 T7', date: '11/02/2026', type: 'report' },
        { label: 'Performance M8 Feb-2026', date: '11/02/2026', type: 'performance' },
      ],
      chartData: {
        type: 'bar',
        data: [
          { pieza: 'Lifter Desc.', C03: 0.82, C04: 0.71 },
          { pieza: 'Shell Liner', C03: 0.95, C04: 0.84 },
          { pieza: 'Grate Plate', C03: 1.12, C04: 0.97 },
          { pieza: 'Pulp Lifter', C03: 0.63, C04: 0.58 },
        ],
        dataKeys: ['C03', 'C04'],
        colors: ['hsl(220 9% 55%)', 'hsl(221 83% 53%)'],
      },
    },
  ],
  'sess-002': [
    {
      id: 'msg-101',
      role: 'user',
      content: 'Resume las diferencias de desgaste entre C03 y C04 en todas las zonas.',
      timestamp: new Date('2026-02-08T14:10:00'),
    },
    {
      id: 'msg-102',
      role: 'assistant',
      content:
        'Comparando las tasas promedio por zona entre C03 y C04, la campaña C04 muestra mejoras consistentes en todas las zonas, con la mayor reducción de desgaste en Shell Zona Descarga (-13%) y la menor en Pulp Lifter (-8%).',
      timestamp: new Date('2026-02-08T14:10:15'),
      sources: [{ label: 'Informe Desgaste C03/C04', date: '08/02/2026', type: 'report' }],
    },
  ],
  'sess-003': [
    {
      id: 'msg-201',
      role: 'user',
      content: '¿Cuándo se estima la próxima parada de mantenimiento según el escenario P50?',
      timestamp: new Date('2026-02-05T09:00:00'),
    },
    {
      id: 'msg-202',
      role: 'assistant',
      content:
        'Según la proyección del Informe C04 T7 (11/02/2026), el escenario P50 estima la próxima detención entre el 5 y 10 de abril de 2026, cuando el Grate Plate alcanzaría el espesor mínimo (Em = 12 mm). El escenario P10 lo adelanta al 22 de marzo y el P90 lo extiende hasta el 28 de abril.',
      timestamp: new Date('2026-02-05T09:00:12'),
      sources: [{ label: 'Proyección C04 T7', date: '11/02/2026', type: 'projection' }],
    },
  ],
  'sess-004': [],
}

export const suggestedPrompts = [
  '¿Cuál es la vida remanente de cada zona en C04?',
  '¿Cuándo se estima la próxima parada según el escenario P50?',
  '¿Qué piezas están en estado crítico o de atención?',
  '¿Cómo ha evolucionado el TPH en los últimos 3 meses?',
  'Comparar tasas de desgaste entre C03 y C04',
]
