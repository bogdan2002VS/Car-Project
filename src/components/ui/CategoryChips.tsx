import { categories } from '@/content/categories'
import type { CategoryId } from '@/model/taxonomy'
import { useI18n } from '@/i18n/LangContext'
import { Icon } from './Icon'
import { cn } from '@/lib/cn'

export type CategoryFilter = CategoryId | 'all'

export function CategoryChips({
  value,
  onChange,
  available,
}: {
  value: CategoryFilter
  onChange: (v: CategoryFilter) => void
  available?: CategoryId[]
}) {
  const { t, tx } = useI18n()
  const list = available
    ? categories.filter((c) => available.includes(c.id))
    : categories

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        className={cn('chip', value === 'all' && 'chip-active')}
        onClick={() => onChange('all')}
      >
        {t('filter.allCategories')}
      </button>
      {list.map((c) => (
        <button
          key={c.id}
          type="button"
          className={cn('chip', value === c.id && 'chip-active')}
          onClick={() => onChange(c.id)}
        >
          <Icon name={c.icon} className="h-3.5 w-3.5" />
          {tx(c.name)}
        </button>
      ))}
    </div>
  )
}
