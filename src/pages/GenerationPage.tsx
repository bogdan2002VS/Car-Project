import { Link, useParams } from 'react-router-dom'
import { getGeneration } from '@/content/registry'
import { useI18n } from '@/i18n/LangContext'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Badge } from '@/components/ui/Badge'
import { Icon } from '@/components/ui/Icon'
import { engineHasContent } from '@/lib/selectors'
import NotFoundPage from './NotFoundPage'

export default function GenerationPage() {
  const { genId } = useParams()
  const gen = getGeneration(genId ?? '')
  const { t, tx } = useI18n()
  if (!gen) return <NotFoundPage />

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: t('nav.home'), to: '/' }, { label: gen.code }]} />

      <header>
        <div className="flex items-center gap-3">
          <span className="font-display text-4xl font-extrabold text-mazda-600 dark:text-mazda-400">
            {gen.code}
          </span>
          <div>
            <h1 className="text-2xl font-bold">{tx(gen.name)}</h1>
            <p className="text-sm text-ink-500 dark:text-ink-400">
              {gen.years.from}–{gen.years.to ?? t('common.present')}
            </p>
          </div>
        </div>
        <p className="mt-3 max-w-2xl text-ink-600 dark:text-ink-300">{tx(gen.summary)}</p>
      </header>

      <section>
        <h2 className="section-title mb-3">{t('gen.pickEngine')}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {gen.engines.map((e) => {
            const has = engineHasContent(e)
            return (
              <Link
                key={e.id}
                to={`/g/${gen.id}/${e.id}/overview`}
                className="card card-hover flex items-center gap-4 p-5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-mazda-50 dark:bg-mazda-600/15">
                  <span className="font-display text-lg font-bold text-mazda-600 dark:text-mazda-400">
                    {e.displacementL.toFixed(1)}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{tx(e.name)}</h3>
                    {!has && <Badge tone="neutral">{t('common.comingSoon')}</Badge>}
                  </div>
                  <p className="text-sm text-ink-500 dark:text-ink-400">
                    {e.engineCode}
                    {e.power ? ` · ${tx(e.power)}` : ''}
                  </p>
                  {e.variantNote && (
                    <p className="text-xs text-ink-400">{tx(e.variantNote)}</p>
                  )}
                </div>
                <Icon name="ChevronRight" className="h-5 w-5 shrink-0 text-ink-300" />
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
