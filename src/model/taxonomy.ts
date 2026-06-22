import type { LocalizedString } from './common'

export type GenerationId = 'na' | 'nb' | 'nc' | 'nd'

export type ModuleId = 'overview' | 'wiring' | 'parts' | 'guides'

/** The 7 stable category IDs used as tags across all content. */
export type CategoryId =
  | 'engine-accessories' // intake, exhaust, cooling
  | 'suspension-dampers'
  | 'steering-alignment'
  | 'braking'
  | 'transmission-diff'
  | 'body-interior' // incl. soft-top / hard-top
  | 'electrical'

export interface Category {
  id: CategoryId
  name: LocalizedString
  description: LocalizedString
  /** lucide-react icon name */
  icon: string
  order: number
}
