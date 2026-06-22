import { NavLink, Outlet, useParams } from 'react-router-dom'
import { getEngine } from '@/content/registry'
import { useI18n, type UiKey } from '@/i18n/LangContext'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/cn'
import NotFoundPage from './NotFoundPage'
import type { EngineCtx } from './engineContext'

const modules: { seg: string; icon: string; key: UiKey }[] = [
  { seg: 'overview', icon: 'Gauge', key: 'mod.overview' },
  { seg: 'wiring', icon: 'CircuitBoard', key: 'mod.wiring' },
  { seg: 'parts', icon: 'Package', key: 'mod.parts' },
  { seg: 'guides', icon: 'Wrench', key: 'mod.guides' },
]

export default function EnginePage() {
  const { genId, engineId } = useParams()
  const found = getEngine(genId ?? '', engineId ?? '')
  const { t, tx } = useI18n()
  if (!found) return <NotFoundPage />
  const { gen, engine } = found
  const ctx: EngineCtx = { gen, engine }

  return (
    <div className="space-y-5">
      <Breadcrumbs
        items={[
          { label: t('nav.home'), to: '/' },
          { label: gen.code, to: `/g/${gen.id}` },
          { label: tx(engine.name) },
        ]}
      />

      <header className="flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-mazda-600 to-mazda-500 text-white">
          <span className="font-display text-xl font-extrabold">
            {engine.displacementL.toFixed(1)}
          </span>
        </div>
        <div>
          <h1 className="text-2xl font-bold">
            {tx(engine.name)} <span className="text-ink-400">· {gen.code}</span>
          </h1>
          <p className="text-sm text-ink-500 dark:text-ink-400">
            {engine.engineCode}
            {engine.power ? ` · ${tx(engine.power)}` : ''}
          </p>
        </div>
      </header>

      <nav className="flex gap-1 overflow-x-auto rounded-xl border border-ink-100 bg-white p-1 dark:border-ink-800 dark:bg-ink-900">
        {modules.map((m) => (
          <NavLink
            key={m.seg}
            to={m.seg}
            className={({ isActive }) =>
              cn(
                'flex min-w-max flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition',
                isActive
                  ? 'bg-mazda-600 text-white shadow'
                  : 'text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800'
              )
            }
          >
            <Icon name={m.icon} className="h-4 w-4" />
            <span>{t(m.key)}</span>
          </NavLink>
        ))}
      </nav>

      <Outlet context={ctx} />
    </div>
  )
}
