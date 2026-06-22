import { useEngineCtx } from '../engineContext'
import { useI18n } from '@/i18n/LangContext'
import { SpecTable } from '@/components/spec/SpecTable'
import { Disclaimer } from '@/components/ui/Disclaimer'
import { EmptyState } from '@/components/ui/EmptyState'

export default function OverviewModule() {
  const { engine } = useEngineCtx()
  const { t } = useI18n()
  if (!engine.specSheet) return <EmptyState icon="Gauge" title={t('specs.empty')} />
  return (
    <div className="space-y-5">
      <SpecTable sheet={engine.specSheet} />
      <Disclaimer reference={engine.specSheet.disclaimer} />
    </div>
  )
}
