import { Link } from 'react-router-dom'
import { useI18n } from '@/i18n/LangContext'
import { Icon } from '@/components/ui/Icon'

export default function NotFoundPage() {
  const { t } = useI18n()
  return (
    <div className="flex flex-col items-center gap-4 py-20 text-center">
      <h1 className="font-display text-6xl font-extrabold text-mazda-600 dark:text-mazda-500">404</h1>
      <p className="text-lg font-semibold">{t('common.notFoundTitle')}</p>
      <p className="max-w-md text-ink-500 dark:text-ink-400">{t('common.notFoundBody')}</p>
      <Link to="/" className="btn-primary">
        <Icon name="Home" className="h-4 w-4" />
        {t('common.goHome')}
      </Link>
    </div>
  )
}
