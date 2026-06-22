import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEngineCtx } from '../engineContext'
import { useI18n, type UiKey } from '@/i18n/LangContext'
import { CategoryChips, type CategoryFilter } from '@/components/ui/CategoryChips'
import { EmptyState } from '@/components/ui/EmptyState'
import { Icon } from '@/components/ui/Icon'
import { Badge } from '@/components/ui/Badge'
import type { Difficulty } from '@/model/guide'

const diffTone: Record<Difficulty, 'green' | 'amber' | 'accent'> = {
  easy: 'green',
  moderate: 'amber',
  advanced: 'accent',
}

export default function GuidesModule() {
  const { engine } = useEngineCtx()
  const { t, tx } = useI18n()
  const [cat, setCat] = useState<CategoryFilter>('all')
  const guides = engine.guides ?? []
  if (!guides.length) return <EmptyState icon="Wrench" title={t('guides.empty')} />

  const available = Array.from(new Set(guides.map((g) => g.category)))
  const list = cat === 'all' ? guides : guides.filter((g) => g.category === cat)

  return (
    <div className="space-y-4">
      <CategoryChips value={cat} onChange={setCat} available={available} />
      <div className="grid gap-4 sm:grid-cols-2">
        {list.map((g) => (
          <Link key={g.id} to={g.id} className="card card-hover p-5">
            <div className="flex items-center justify-between">
              <Badge tone={diffTone[g.difficulty]}>
                {t(`difficulty.${g.difficulty}` as UiKey)}
              </Badge>
              <span className="flex items-center gap-1 text-xs text-ink-400">
                <Icon name="Clock" className="h-3.5 w-3.5" />
                {g.estimatedMinutes} {t('guides.minShort')}
              </span>
            </div>
            <h3 className="mt-2 font-semibold">{tx(g.title)}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-ink-600 dark:text-ink-300">
              {tx(g.summary)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
