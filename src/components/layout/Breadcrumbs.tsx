import { Link } from 'react-router-dom'
import { Icon } from '@/components/ui/Icon'

export interface Crumb {
  label: string
  to?: string
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="flex flex-wrap items-center gap-1 text-sm text-ink-500 dark:text-ink-400">
      {items.map((c, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <Icon name="ChevronRight" className="h-3.5 w-3.5 opacity-60" />}
          {c.to ? (
            <Link to={c.to} className="hover:text-mazda-700 dark:hover:text-mazda-400">
              {c.label}
            </Link>
          ) : (
            <span className="font-medium text-ink-700 dark:text-ink-200">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
