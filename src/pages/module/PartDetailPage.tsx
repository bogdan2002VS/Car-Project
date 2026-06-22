import { Link, useParams } from 'react-router-dom'
import { useEngineCtx } from '../engineContext'
import { partById } from '@/lib/selectors'
import { useI18n } from '@/i18n/LangContext'
import { PartDetailCard } from '@/components/parts/PartDetailCard'
import { Disclaimer } from '@/components/ui/Disclaimer'
import NotFoundPage from '../NotFoundPage'

export default function PartDetailPage() {
  const { gen, engine } = useEngineCtx()
  const { partId } = useParams()
  const { t } = useI18n()
  const part = partById(engine, partId ?? '')
  if (!part) return <NotFoundPage />

  return (
    <div className="space-y-4">
      <Link to={`/g/${gen.id}/${engine.id}/parts`} className="link-accent text-sm">
        ← {t('parts.title')}
      </Link>
      <div className="card p-5">
        <PartDetailCard part={part} />
      </div>
      {part.ref && <Disclaimer reference={part.ref} />}
    </div>
  )
}
