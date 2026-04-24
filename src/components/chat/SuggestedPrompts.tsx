import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { suggestedPrompts } from '@/mock/chat.mock'

interface Props {
  onSelect: (prompt: string) => void
}

export function SuggestedPrompts({ onSelect }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="flex flex-col items-center gap-4 py-12 px-6 text-center"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
        <Sparkles size={20} className="text-primary" />
      </div>
      <div>
        <h3 className="text-sm font-semibold">¿Qué necesitas saber?</h3>
        <p className="mt-1 text-xs text-muted-foreground max-w-xs">
          Consulta el estado del liner, proyecciones de desgaste o comparativas de campaña.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 max-w-lg">
        {suggestedPrompts.map((prompt, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.06 }}
            onClick={() => onSelect(prompt)}
            className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-accent transition-all"
          >
            {prompt}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
