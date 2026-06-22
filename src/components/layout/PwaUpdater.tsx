import { useRegisterSW } from 'virtual:pwa-register/react'
import { useI18n } from '@/i18n/LangContext'
import { Icon } from '@/components/ui/Icon'

export function PwaUpdater() {
  const { t } = useI18n()
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW()

  if (!offlineReady && !needRefresh) return null

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <div className="card flex items-center gap-3 px-4 py-3 shadow-lg">
        <Icon
          name={needRefresh ? 'RotateCcw' : 'CheckCircle2'}
          className="h-5 w-5 text-mazda-600 dark:text-mazda-400"
        />
        <span className="text-sm">
          {needRefresh ? t('pwa.updateAvailable') : t('pwa.offlineReady')}
        </span>
        {needRefresh ? (
          <button
            type="button"
            className="btn-primary px-3 py-1.5 text-sm"
            onClick={() => updateServiceWorker(true)}
          >
            {t('pwa.reload')}
          </button>
        ) : (
          <button type="button" className="btn-ghost px-3 py-1.5 text-sm" onClick={close}>
            {t('pwa.dismiss')}
          </button>
        )}
      </div>
    </div>
  )
}
