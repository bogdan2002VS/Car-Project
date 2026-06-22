import { useState } from 'react'
import type { Engine } from '@/model/generation'
import type { ExplodedView } from '@/model/parts'
import { DiagramViewer } from '@/components/diagram/DiagramViewer'
import { PartDetailCard } from './PartDetailCard'
import { partById } from '@/lib/selectors'
import { useI18n } from '@/i18n/LangContext'
import { cn } from '@/lib/cn'

export function ExplodedViewer({ engine, view }: { engine: Engine; view: ExplodedView }) {
  const { t, tx } = useI18n()
  const [activeHotspot, setActiveHotspot] = useState<string | null>(
    view.hotspots[0]?.id ?? null
  )
  const active = view.hotspots.find((h) => h.id === activeHotspot) ?? null
  const activePart = active ? partById(engine, active.partId) : undefined
  const viewerHotspots = view.hotspots.map((h) => ({
    id: h.id,
    x: h.x,
    y: h.y,
    callout: h.callout,
  }))

  return (
    <div className="space-y-3">
      <div>
        <h3 className="font-semibold">{tx(view.title)}</h3>
        {view.description && (
          <p className="text-sm text-ink-600 dark:text-ink-300">{tx(view.description)}</p>
        )}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_330px]">
        <DiagramViewer
          svgMarkup={view.svgMarkup}
          viewBox={view.viewBox ?? '0 0 800 600'}
          hotspots={viewerHotspots}
          activeId={activeHotspot}
          onSelect={setActiveHotspot}
        />

        <div className="space-y-3">
          <div className="card p-3">
            <p className="px-1 pb-1 text-xs font-semibold uppercase tracking-wide text-ink-400">
              {t('parts.partsList')}
            </p>
            <ul className="max-h-72 space-y-0.5 overflow-auto">
              {view.hotspots.map((h) => {
                const p = partById(engine, h.partId)
                if (!p) return null
                return (
                  <li key={h.id}>
                    <button
                      type="button"
                      onClick={() => setActiveHotspot(h.id)}
                      className={cn(
                        'flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm transition',
                        activeHotspot === h.id
                          ? 'bg-mazda-50 dark:bg-mazda-600/15'
                          : 'hover:bg-ink-100 dark:hover:bg-ink-800'
                      )}
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mazda-600 text-[10px] font-bold text-white">
                        {h.callout}
                      </span>
                      <span className="truncate">{tx(p.name)}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          {activePart && (
            <div className="card animate-slide-up p-4">
              <PartDetailCard part={activePart} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
