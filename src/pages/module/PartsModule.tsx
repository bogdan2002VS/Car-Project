import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEngineCtx } from '../engineContext'
import { useI18n } from '@/i18n/LangContext'
import { CategoryChips, type CategoryFilter } from '@/components/ui/CategoryChips'
import { EmptyState } from '@/components/ui/EmptyState'
import { ExplodedViewer } from '@/components/parts/ExplodedViewer'
import { categoryById } from '@/content/categories'
import { Icon } from '@/components/ui/Icon'
import { formatOem } from '@/lib/partNumber'

export default function PartsModule() {
  const { engine } = useEngineCtx()
  const { t, tx } = useI18n()
  const [cat, setCat] = useState<CategoryFilter>('all')
  const parts = engine.parts ?? []
  if (!parts.length) return <EmptyState icon="Package" title={t('parts.empty')} />

  const available = Array.from(new Set(parts.map((p) => p.category)))
  const views = (engine.explodedViews ?? []).filter(
    (v) => cat === 'all' || v.category === cat
  )
  const list = cat === 'all' ? parts : parts.filter((p) => p.category === cat)

  return (
    <div className="space-y-6">
      <CategoryChips value={cat} onChange={setCat} available={available} />

      {views.map((v) => (
        <ExplodedViewer key={v.id} engine={engine} view={v} />
      ))}

      <div>
        <h3 className="mb-3 font-semibold">{t('parts.title')}</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => {
            const c = categoryById.get(p.category)
            return (
              <Link key={p.id} to={`item/${p.id}`} className="card card-hover p-4">
                <div className="flex items-center gap-1.5 text-xs text-ink-400">
                  <Icon name={c?.icon ?? 'Tag'} className="h-3.5 w-3.5" />
                  {c ? tx(c.name) : ''}
                </div>
                <h4 className="mt-1 font-medium">{tx(p.name)}</h4>
                <p className="mt-1 font-mono text-sm text-mazda-700 dark:text-mazda-400">
                  {p.oemCodes[0] ? formatOem(p.oemCodes[0]) : '—'}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
