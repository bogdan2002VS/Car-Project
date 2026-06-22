import type { Reference } from '@/model/common'
import { useI18n } from '@/i18n/LangContext'
import { Icon } from './Icon'
import { Badge } from './Badge'

export function VerifiedBadge({ verified }: { verified: boolean }) {
  const { t } = useI18n()
  return verified ? (
    <Badge tone="green">
      <Icon name="CheckCircle2" className="h-3 w-3" />
      {t('disclaimer.verified')}
    </Badge>
  ) : (
    <Badge tone="amber">
      <Icon name="AlertTriangle" className="h-3 w-3" />
      {t('disclaimer.unverified')}
    </Badge>
  )
}

export function Disclaimer({ reference }: { reference?: Reference }) {
  const { t, tx } = useI18n()
  return (
    <div className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
      <Icon name="AlertTriangle" className="mt-0.5 h-4 w-4 shrink-0" />
      <div>
        <p className="font-semibold">{t('disclaimer.title')}</p>
        <p className="mt-0.5 opacity-90">{t('disclaimer.body')}</p>
        {reference?.source && (
          <p className="mt-1 text-xs opacity-80">
            {tx(reference.label)} ·{' '}
            {reference.url ? (
              <a className="link-accent" href={reference.url} target="_blank" rel="noreferrer">
                {reference.source}
              </a>
            ) : (
              reference.source
            )}
          </p>
        )}
      </div>
    </div>
  )
}
