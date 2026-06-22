import { Icon } from './Icon'

export function EmptyState({
  icon = 'Info',
  title,
  hint,
}: {
  icon?: string
  title: string
  hint?: string
}) {
  return (
    <div className="card flex flex-col items-center gap-2 p-10 text-center">
      <Icon name={icon} className="h-8 w-8 text-ink-300 dark:text-ink-600" />
      <p className="font-medium text-ink-700 dark:text-ink-200">{title}</p>
      {hint && <p className="text-sm text-ink-500 dark:text-ink-400">{hint}</p>}
    </div>
  )
}
