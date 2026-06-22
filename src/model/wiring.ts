import type { Id, LocalizedRich, LocalizedString, Reference } from './common'
import type { CategoryId } from './taxonomy'

export type WiringSubSystem =
  | 'engine-management'
  | 'lighting'
  | 'ecu'
  | 'audio'
  | 'charging-starting'
  | 'instruments'
  | 'hvac'
  | 'power-accessories'

export interface PinoutRow {
  pin: string
  signal: LocalizedString
  color?: string
}

/** A clickable point on a wiring diagram. Coordinates are percent (0-100) of the diagram box. */
export interface Hotspot {
  id: Id
  x: number
  y: number
  w?: number
  h?: number
  label: LocalizedString
  detail: LocalizedRich
  pinout?: PinoutRow[]
  /** Links into the parts catalog (e.g. the relay's OEM part). */
  relatedPartIds?: Id[]
}

export interface WiringDiagram {
  id: Id
  engineIds: Id[]
  category: CategoryId
  subSystem: WiringSubSystem
  title: LocalizedString
  description: LocalizedRich
  /** Raw inline SVG markup of the ORIGINAL simplified schematic (imported via `?raw`). */
  svgMarkup: string
  /** SVG viewBox, e.g. "0 0 1000 600" — used to preserve the diagram box aspect ratio. */
  viewBox: string
  hotspots: Hotspot[]
  reference: Reference
}
