import type { Id, LocalizedRich, LocalizedString, Reference } from './common'
import type { CategoryId } from './taxonomy'

export type Difficulty = 'easy' | 'moderate' | 'advanced'

export interface Tool {
  name: LocalizedString
  optional?: boolean
}

export interface TorqueSpec {
  fastener: LocalizedString
  nm: number
  nmMax?: number
  angleDeg?: number
  notes?: LocalizedString
}

export interface GuideStep {
  order: number
  title: LocalizedString
  body: LocalizedRich
  image?: string
  warning?: LocalizedString
  torque?: TorqueSpec[]
  partIds?: Id[]
}

export interface GuidePart {
  partId: Id
  qty: number
}

export interface DIYGuide {
  id: Id
  category: CategoryId
  engineIds: Id[]
  title: LocalizedString
  summary: LocalizedRich
  difficulty: Difficulty
  estimatedMinutes: number
  tools: Tool[]
  /** Shopping list → links into the parts catalog. */
  parts: GuidePart[]
  /** Master torque list (steps may also carry their own). */
  torqueSpecs: TorqueSpec[]
  steps: GuideStep[]
  safety?: LocalizedRich
  reference: Reference
}
