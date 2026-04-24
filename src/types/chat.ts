export interface SourceCitation {
  label: string
  date: string
  type: 'report' | 'performance' | 'projection'
}

export interface TableData {
  headers: string[]
  rows: string[][]
}

export interface ChartPayload {
  type: 'bar' | 'line' | 'area'
  data: Record<string, string | number>[]
  dataKeys: string[]
  colors?: string[]
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  sources?: SourceCitation[]
  tableData?: TableData
  chartData?: ChartPayload
}

export interface ChatSession {
  id: string
  title: string
  preview: string
  createdAt: string
  messageCount: number
}
