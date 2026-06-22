import type { Id, LocalizedRich, LocalizedString } from './common'
import type { GenerationId } from './taxonomy'
import type { SpecSheet } from './spec'
import type { WiringDiagram } from './wiring'
import type { ExplodedView, PartCatalogEntry } from './parts'
import type { DIYGuide } from './guide'

export interface YearRange {
  from: number
  to: number | null // null = present
}

export interface Engine {
  id: Id
  generationId: GenerationId
  displacementL: number
  engineCode: string
  name: LocalizedString
  variantNote?: LocalizedString
  years?: YearRange
  /** Short power summary shown on cards, e.g. "85 kW (115 CP)". */
  power?: LocalizedString
  // The four modules. Optional so generations can be scaffolded empty.
  specSheet?: SpecSheet
  wiringDiagrams?: WiringDiagram[]
  /** Parts catalog (source of truth). Exploded-view hotspots reference these by id. */
  parts?: PartCatalogEntry[]
  explodedViews?: ExplodedView[]
  guides?: DIYGuide[]
}

export interface Generation {
  id: GenerationId
  code: string // "NA", "NB", "NC", "ND"
  name: LocalizedString
  years: YearRange
  summary: LocalizedRich
  engines: Engine[]
  /** false until the content for this generation is marked complete. */
  complete: boolean
}
