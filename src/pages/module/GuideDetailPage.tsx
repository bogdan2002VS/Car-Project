import { Link, useParams } from 'react-router-dom'
import { useEngineCtx } from '../engineContext'
import { guideById, partById } from '@/lib/selectors'
import { useI18n, type UiKey } from '@/i18n/LangContext'
import { Badge } from '@/components/ui/Badge'
import { Icon } from '@/components/ui/Icon'
import { Disclaimer } from '@/components/ui/Disclaimer'
import { cn } from '@/lib/cn'
import type { Difficulty, TorqueSpec } from '@/model/guide'
import NotFoundPage from '../NotFoundPage'

const diffTone: Record<Difficulty, 'green' | 'amber' | 'accent'> = {
  easy: 'green',
  moderate: 'amber',
  advanced: 'accent',
}

function torqueValue(s: TorqueSpec): string {
  let v = `${s.nm}${s.nmMax ? `–${s.nmMax}` : ''} Nm`
  if (s.angleDeg) v += ` + ${s.angleDeg}°`
  return v
}

function TorqueTable({ specs, compact }: { specs: TorqueSpec[]; compact?: boolean }) {
  const { tx } = useI18n()
  return (
    <table className={cn('w-full text-sm', compact && 'mt-2')}>
      <tbody>
        {specs.map((s, i) => (
          <tr key={i} className="border-t border-ink-100 first:border-0 dark:border-ink-800">
            <td className="py-1 pr-2 text-ink-600 dark:text-ink-300">{tx(s.fastener)}</td>
            <td className="whitespace-nowrap py-1 text-right font-mono font-medium">
              {torqueValue(s)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function GuideDetailPage() {
  const { gen, engine } = useEngineCtx()
  const { guideId } = useParams()
  const { t, tx } = useI18n()
  const g = guideById(engine, guideId ?? '')
  if (!g) return <NotFoundPage />

  return (
    <div className="space-y-5">
      <Link to={`/g/${gen.id}/${engine.id}/guides`} className="link-accent text-sm">
        ← {t('guides.title')}
      </Link>

      <header>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={diffTone[g.difficulty]}>{t(`difficulty.${g.difficulty}` as UiKey)}</Badge>
          <span className="flex items-center gap-1 text-sm text-ink-500 dark:text-ink-400">
            <Icon name="Clock" className="h-4 w-4" />
            {g.estimatedMinutes} {t('guides.minShort')}
          </span>
        </div>
        <h1 className="mt-2 text-2xl font-bold">{tx(g.title)}</h1>
        <p className="mt-1 text-ink-600 dark:text-ink-300">{tx(g.summary)}</p>
      </header>

      {g.safety && (
        <div className="flex gap-3 rounded-lg border-l-4 border-mazda-600 bg-mazda-50 p-3 text-sm dark:bg-mazda-600/10">
          <Icon name="AlertTriangle" className="mt-0.5 h-4 w-4 shrink-0 text-mazda-600 dark:text-mazda-400" />
          <p className="text-ink-700 dark:text-ink-200">{tx(g.safety)}</p>
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
        <section className="space-y-3">
          <h2 className="section-title">{t('guides.steps')}</h2>
          <ol className="space-y-3">
            {g.steps.map((s) => (
              <li key={s.order} className="card p-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mazda-600 text-sm font-bold text-white">
                    {s.order}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold">{tx(s.title)}</h3>
                    <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">{tx(s.body)}</p>
                    {s.warning && (
                      <p className="mt-2 flex items-center gap-1.5 text-sm text-amber-700 dark:text-amber-400">
                        <Icon name="AlertTriangle" className="h-4 w-4 shrink-0" />
                        {tx(s.warning)}
                      </p>
                    )}
                    {!!s.torque?.length && (
                      <div className="mt-2 rounded-lg bg-ink-50 px-3 py-1.5 dark:bg-ink-900">
                        <TorqueTable specs={s.torque} compact />
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <aside className="space-y-4">
          <div className="card p-4">
            <h3 className="flex items-center gap-2 font-semibold">
              <Icon name="Wrench" className="h-4 w-4 text-mazda-600 dark:text-mazda-400" />
              {t('guides.tools')}
            </h3>
            <ul className="mt-2 space-y-1 text-sm">
              {g.tools.map((tool, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-mazda-500">•</span>
                  <span>
                    {tx(tool.name)}
                    {tool.optional && (
                      <span className="text-xs text-ink-400"> ({t('guides.optional')})</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {!!g.parts.length && (
            <div className="card p-4">
              <h3 className="flex items-center gap-2 font-semibold">
                <Icon name="Package" className="h-4 w-4 text-mazda-600 dark:text-mazda-400" />
                {t('guides.partsNeeded')}
              </h3>
              <ul className="mt-2 space-y-1 text-sm">
                {g.parts.map(({ partId, qty }) => {
                  const p = partById(engine, partId)
                  if (!p) return null
                  return (
                    <li key={partId}>
                      <Link
                        className="link-accent"
                        to={`/g/${gen.id}/${engine.id}/parts/item/${partId}`}
                      >
                        {tx(p.name)}
                      </Link>{' '}
                      <span className="text-ink-400">× {qty}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {!!g.torqueSpecs.length && (
            <div className="card p-4">
              <h3 className="flex items-center gap-2 font-semibold">
                <Icon name="Gauge" className="h-4 w-4 text-mazda-600 dark:text-mazda-400" />
                {t('guides.torque')}
              </h3>
              <div className="mt-2">
                <TorqueTable specs={g.torqueSpecs} />
              </div>
            </div>
          )}
        </aside>
      </div>

      <Disclaimer reference={g.reference} />
    </div>
  )
}
