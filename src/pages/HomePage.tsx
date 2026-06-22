import { Link } from 'react-router-dom'
import { generations } from '@/content/registry'
import { useI18n } from '@/i18n/LangContext'
import { Icon } from '@/components/ui/Icon'
import { Badge } from '@/components/ui/Badge'

export default function HomePage() {
  const { t, tx } = useI18n()

  const features = [
    { icon: 'Gauge', title: t('home.feature.specs'), desc: t('home.feature.specs.desc') },
    { icon: 'CircuitBoard', title: t('home.feature.wiring'), desc: t('home.feature.wiring.desc') },
    { icon: 'Package', title: t('home.feature.parts'), desc: t('home.feature.parts.desc') },
    { icon: 'Wrench', title: t('home.feature.guides'), desc: t('home.feature.guides.desc') },
  ]

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-2xl border border-ink-100 bg-gradient-to-br from-white to-ink-50 p-8 dark:border-ink-800 dark:from-ink-900 dark:to-ink-950 sm:p-12">
        <div
          className="pointer-events-none absolute -right-16 -top-10 h-64 w-64 rounded-full bg-mazda-500/10 blur-3xl"
          aria-hidden
        />
        <div className="motion-line mb-5" />
        <p className="kicker">{t('home.heroKicker')}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-4xl md:text-5xl">
          {t('home.heroTitle')}
        </h1>
        <p className="mt-4 max-w-2xl text-ink-600 dark:text-ink-300">{t('home.heroSubtitle')}</p>
        <Link to="/search" className="btn-primary mt-6">
          <Icon name="Search" className="h-4 w-4" />
          {t('home.searchCta')}
        </Link>
      </section>

      <section>
        <h2 className="section-title mb-4">{t('home.pickGeneration')}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {generations.map((g) => (
            <Link key={g.id} to={`/g/${g.id}`} className="card card-hover flex flex-col p-5">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-extrabold text-mazda-600 dark:text-mazda-400">
                  {g.code}
                </span>
                <Badge tone={g.complete ? 'green' : 'neutral'}>
                  {g.complete ? t('gen.complete') : t('common.comingSoon')}
                </Badge>
              </div>
              <p className="mt-2 font-semibold">{tx(g.name)}</p>
              <p className="text-sm text-ink-500 dark:text-ink-400">
                {g.years.from}–{g.years.to ?? t('common.present')}
              </p>
              <p className="mt-3 line-clamp-3 text-sm text-ink-600 dark:text-ink-300">
                {tx(g.summary)}
              </p>
              <p className="mt-3 text-xs text-ink-400">
                {t('gen.engineCount', { n: g.engines.length })}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title mb-4">{t('home.featuresTitle')}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="card p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mazda-50 text-mazda-600 dark:bg-mazda-600/15 dark:text-mazda-400">
                <Icon name={f.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
