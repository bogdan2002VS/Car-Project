import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEngineCtx } from '../engineContext'
import { diagramById, partById } from '@/lib/selectors'
import { useI18n, type UiKey } from '@/i18n/LangContext'
import { DiagramViewer } from '@/components/diagram/DiagramViewer'
import { Disclaimer } from '@/components/ui/Disclaimer'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/cn'
import NotFoundPage from '../NotFoundPage'

export default function WiringDetailPage() {
  const { gen, engine } = useEngineCtx()
  const { diagramId } = useParams()
  const { t, tx } = useI18n()
  const d = diagramById(engine, diagramId ?? '')
  const [activeId, setActiveId] = useState<string | null>(null)
  if (!d) return <NotFoundPage />

  const active = d.hotspots.find((h) => h.id === activeId) ?? null
  const viewerHotspots = d.hotspots.map((h) => ({ id: h.id, x: h.x, y: h.y }))

  return (
    <div className="space-y-4">
      <Link to={`/g/${gen.id}/${engine.id}/wiring`} className="link-accent text-sm">
        ← {t('mod.wiring')}
      </Link>

      <div>
        <p className="kicker">{t(`subsystem.${d.subSystem}` as UiKey)}</p>
        <h2 className="section-title">{tx(d.title)}</h2>
        <p className="mt-1 text-ink-600 dark:text-ink-300">{tx(d.description)}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_330px]">
        <DiagramViewer
          svgMarkup={d.svgMarkup}
          viewBox={d.viewBox}
          hotspots={viewerHotspots}
          activeId={activeId}
          onSelect={setActiveId}
        />

        <div className="space-y-3">
          <div className="card p-3">
            <ul className="space-y-0.5">
              {d.hotspots.map((h) => (
                <li key={h.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(h.id)}
                    className={cn(
                      'w-full rounded-lg px-3 py-2 text-left text-sm transition',
                      activeId === h.id
                        ? 'bg-mazda-50 font-medium text-mazda-800 dark:bg-mazda-600/15 dark:text-mazda-200'
                        : 'hover:bg-ink-100 dark:hover:bg-ink-800'
                    )}
                  >
                    {tx(h.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {active && (
            <div className="card animate-slide-up p-4">
              <h3 className="font-bold">{tx(active.label)}</h3>
              <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">{tx(active.detail)}</p>

              {!!active.pinout?.length && (
                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                    {t('wiring.pinout')}
                  </p>
                  <table className="mt-1 w-full text-sm">
                    <thead>
                      <tr className="text-left text-ink-400">
                        <th className="py-1 font-medium">{t('wiring.pin')}</th>
                        <th className="font-medium">{t('wiring.signal')}</th>
                        <th className="font-medium">{t('wiring.color')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {active.pinout.map((p, i) => (
                        <tr key={i} className="border-t border-ink-100 dark:border-ink-800">
                          <td className="py-1 font-mono">{p.pin}</td>
                          <td>{tx(p.signal)}</td>
                          <td className="font-mono">{p.color ?? '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {!!active.relatedPartIds?.length && (
                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                    {t('wiring.relatedParts')}
                  </p>
                  <ul className="mt-1 space-y-1 text-sm">
                    {active.relatedPartIds.map((pid) => {
                      const p = partById(engine, pid)
                      if (!p) return null
                      return (
                        <li key={pid} className="flex items-center gap-1.5">
                          <Icon name="Package" className="h-3.5 w-3.5 text-ink-400" />
                          <Link
                            className="link-accent"
                            to={`/g/${gen.id}/${engine.id}/parts/item/${pid}`}
                          >
                            {tx(p.name)}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </div>
          )}

          <Disclaimer reference={d.reference} />
        </div>
      </div>
    </div>
  )
}
