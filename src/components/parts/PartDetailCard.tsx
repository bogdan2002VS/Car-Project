import type { PartCatalogEntry } from '@/model/parts'
import { useI18n } from '@/i18n/LangContext'
import { VerifiedBadge } from '@/components/ui/Disclaimer'
import { formatOem } from '@/lib/partNumber'

export function PartDetailCard({ part }: { part: PartCatalogEntry }) {
  const { t, tx } = useI18n()
  return (
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold">{tx(part.name)}</h3>
        {part.ref && <VerifiedBadge verified={part.ref.verified} />}
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
          {t('parts.oem')}
        </p>
        {part.oemCodes.length ? (
          <div className="mt-1 flex flex-wrap gap-2">
            {part.oemCodes.map((c) => (
              <code
                key={c}
                className="rounded bg-ink-100 px-2 py-1 font-mono text-sm dark:bg-ink-800"
              >
                {formatOem(c)}
              </code>
            ))}
          </div>
        ) : (
          <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">—</p>
        )}
      </div>

      {!!part.aftermarketRefs?.length && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
            {t('parts.aftermarket')}
          </p>
          <ul className="mt-1 space-y-1 text-sm">
            {part.aftermarketRefs.map((a, i) => (
              <li key={i}>
                <span className="font-medium">{a.brand}</span>{' '}
                <code className="font-mono text-ink-600 dark:text-ink-300">{a.code}</code>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
        {part.qtyPerCar != null && (
          <span>
            <span className="text-ink-400">{t('parts.qty')}:</span> {part.qtyPerCar}
          </span>
        )}
        {part.supersededBy && (
          <span>
            <span className="text-ink-400">{t('parts.supersededBy')}:</span>{' '}
            <code className="font-mono">{part.supersededBy}</code>
          </span>
        )}
      </div>

      {part.notes && (
        <p className="rounded-lg bg-ink-50 p-3 text-sm text-ink-600 dark:bg-ink-900 dark:text-ink-300">
          {tx(part.notes)}
        </p>
      )}
    </div>
  )
}
