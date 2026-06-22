import type { SpecSheet } from '@/model/spec'
import { useI18n } from '@/i18n/LangContext'
import { Icon } from '@/components/ui/Icon'

export function SpecTable({ sheet }: { sheet: SpecSheet }) {
  const { t, tx } = useI18n()
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {sheet.groups.map((g, i) => (
        <div key={i} className="card overflow-hidden">
          <div className="border-b border-ink-100 bg-ink-50 px-4 py-2.5 dark:border-ink-800 dark:bg-ink-900">
            <h3 className="font-semibold">{tx(g.title)}</h3>
          </div>
          <dl className="divide-y divide-ink-100 dark:divide-ink-800">
            {g.rows.map((r, j) => (
              <div key={j} className="flex items-start justify-between gap-4 px-4 py-2.5">
                <dt className="text-sm text-ink-500 dark:text-ink-400">{tx(r.label)}</dt>
                <dd className="flex items-center gap-1.5 text-right text-sm font-medium">
                  {tx(r.value)}
                  {r.ref && !r.ref.verified && (
                    <Icon
                      name="AlertTriangle"
                      className="h-3.5 w-3.5 shrink-0 text-amber-500"
                      aria-label={t('disclaimer.unverified')}
                    />
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  )
}
