import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { useI18n } from '@/i18n/LangContext'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/cn'

export interface ViewerHotspot {
  id: string
  x: number
  y: number
  callout?: string
}

export function DiagramViewer({
  svgMarkup,
  viewBox,
  hotspots,
  activeId,
  onSelect,
}: {
  svgMarkup: string
  viewBox: string
  hotspots: ViewerHotspot[]
  activeId?: string | null
  onSelect: (id: string) => void
}) {
  const { t } = useI18n()
  const parts = viewBox.split(/\s+/).map(Number)
  const w = parts[2]
  const h = parts[3]
  const aspect = w && h ? `${w} / ${h}` : '16 / 9'

  return (
    <div className="card overflow-hidden">
      <TransformWrapper
        minScale={0.8}
        maxScale={6}
        doubleClick={{ mode: 'zoomIn' }}
        wheel={{ step: 0.15 }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="flex items-center gap-1 border-b border-ink-100 bg-ink-50 px-2 py-1.5 dark:border-ink-800 dark:bg-ink-900">
              <button type="button" className="btn-ghost px-2 py-1" onClick={() => zoomIn()} aria-label="Zoom in">
                <Icon name="ZoomIn" className="h-4 w-4" />
              </button>
              <button type="button" className="btn-ghost px-2 py-1" onClick={() => zoomOut()} aria-label="Zoom out">
                <Icon name="ZoomOut" className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="btn-ghost px-2 py-1"
                onClick={() => resetTransform()}
                title={t('wiring.zoomReset')}
                aria-label={t('wiring.zoomReset')}
              >
                <Icon name="Maximize2" className="h-4 w-4" />
              </button>
              <span className="ml-auto pr-1 text-xs text-ink-500 dark:text-ink-400">
                {t('wiring.tapHint')}
              </span>
            </div>

            <TransformComponent
              wrapperClass="!w-full !bg-white dark:!bg-ink-950"
              contentClass="!w-full"
            >
              <div className="relative w-full" style={{ aspectRatio: aspect }}>
                <div
                  className="diagram-svg absolute inset-0 p-3"
                  dangerouslySetInnerHTML={{ __html: svgMarkup }}
                />
                {hotspots.map((hs) => (
                  <button
                    key={hs.id}
                    type="button"
                    onClick={() => onSelect(hs.id)}
                    style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                    aria-label={hs.callout ? `#${hs.callout}` : hs.id}
                    className={cn(
                      'absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white shadow transition',
                      activeId === hs.id
                        ? 'scale-110 bg-mazda-700 ring-2 ring-mazda-300'
                        : 'bg-mazda-500 hover:scale-110 hover:bg-mazda-600'
                    )}
                  >
                    {hs.callout ?? ''}
                  </button>
                ))}
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  )
}
