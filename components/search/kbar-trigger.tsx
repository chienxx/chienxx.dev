import { useKBar } from 'kbar'
import { Command } from 'lucide-react'

export function KbarSearchTrigger() {
  let { query } = useKBar()

  return (
    <button
      aria-label="Search"
      className="plausible-event-name=search+the+site rounded p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700"
      onClick={() => query.toggle()}
    >
      <Command size={20} strokeWidth={1.5} />
    </button>
  )
}
