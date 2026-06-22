import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { fuse, type SearchType } from '@/lib/search'
import { useI18n, type UiKey } from '@/i18n/LangContext'
import { Icon } from '@/components/ui/Icon'
import { Badge } from '@/components/ui/Badge'

const typeIcon: Record<SearchType, string> = {
  part: 'Package',
  guide: 'Wrench',
  diagram: 'CircuitBoard',
  spec: 'Gauge',
}

export default function SearchPage() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') ?? ''
  const { t, tx } = useI18n()

  const results = useMemo(
    () => (q.trim() ? fuse.search(q.trim()).map((r) => r.item) : []),
    [q]
  )

  const setQ = (v: string) => setParams(v ? { q: v } : {}, { replace: true })

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <h1 className="section-title">{t('search.title')}</h1>

      <div className="relative">
        <Icon
          name="Search"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400"
        />
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t('search.placeholder')}
          className="w-full rounded-xl border border-ink-200 bg-white py-3 pl-12 pr-4 text-base outline-none transition focus:border-mazda-500 dark:border-ink-700 dark:bg-ink-900"
        />
      </div>

      {!q.trim() ? (
        <p className="text-ink-500 dark:text-ink-400">{t('search.typeToStart')}</p>
      ) : results.length === 0 ? (
        <p className="text-ink-500 dark:text-ink-400">{t('search.noResults', { q })}</p>
      ) : (
        <>
          <p className="text-sm text-ink-500 dark:text-ink-400">
            {t('search.resultsCount', { n: results.length })}
          </p>
          <ul className="space-y-2">
            {results.map((r, i) => (
              <li key={i}>
                <Link to={r.route} className="card card-hover flex items-center gap-3 p-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-mazda-50 text-mazda-600 dark:bg-mazda-600/15 dark:text-mazda-400">
                    <Icon name={typeIcon[r.type]} className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{tx(r.title)}</p>
                    {r.subtitle && tx(r.subtitle) && (
                      <p className="truncate font-mono text-xs text-ink-500 dark:text-ink-400">
                        {tx(r.subtitle)}
                      </p>
                    )}
                  </div>
                  <Badge tone="neutral">{t(`type.${r.type}` as UiKey)}</Badge>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
