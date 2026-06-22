import { useI18n } from '@/i18n/LangContext'

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="mt-16 border-t border-ink-100 bg-white py-8 dark:border-ink-800 dark:bg-ink-950">
      <div className="mx-auto max-w-6xl space-y-1 px-4 text-xs text-ink-500 dark:text-ink-400">
        <p className="font-semibold text-ink-600 dark:text-ink-300">{t('footer.notAffiliated')}</p>
        <p>{t('footer.disclaimer')}</p>
        <p>{t('footer.dataNote')}</p>
      </div>
    </footer>
  )
}
