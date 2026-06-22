import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEngineCtx } from '../engineContext'
import { useI18n, type UiKey } from '@/i18n/LangContext'
import { CategoryChips, type CategoryFilter } from '@/components/ui/CategoryChips'
import { EmptyState } from '@/components/ui/EmptyState'
import { Icon } from '@/components/ui/Icon'

export default function WiringModule() {
  const { engine } = useEngineCtx()
  const { t, tx } = useI18n()
  const [cat, setCat] = useState<CategoryFilter>('all')
  const diagrams = engine.wiringDiagrams ?? []
  if (!diagrams.length) return <EmptyState icon="CircuitBoard" title={t('wiring.empty')} />

  const available = Array.from(new Set(diagrams.map((d) => d.category)))
  const list = cat === 'all' ? diagrams : diagrams.filter((d) => d.category === cat)

  return (
    <div className="space-y-4">
      <CategoryChips value={cat} onChange={setCat} available={available} />
      <div className="grid gap-4 sm:grid-cols-2">
        {list.map((d) => (
          <Link key={d.id} to={d.id} className="card card-hover p-5">
            <div className="flex items-center gap-2 text-mazda-600 dark:text-mazda-400">
              <Icon name="CircuitBoard" className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wide">
                {t(`subsystem.${d.subSystem}` as UiKey)}
              </span>
            </div>
            <h3 className="mt-1 font-semibold">{tx(d.title)}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-ink-600 dark:text-ink-300">
              {tx(d.description)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
