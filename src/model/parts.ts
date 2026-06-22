import type { Id, LocalizedRich, LocalizedString, Reference } from './common'
import type { CategoryId } from './taxonomy'

export interface AftermarketRef {
  brand: string
  code: string
}

/** The searchable unit of the parts catalog: an OEM-coded part. */
export interface PartCatalogEntry {
  id: Id
  category: CategoryId
  engineIds: Id[]
  name: LocalizedString
  /** Primary OEM/OE code(s). Multiple = supersessions or market variants. */
  oemCodes: string[]
  aftermarketRefs?: AftermarketRef[]
  notes?: LocalizedRich
  qtyPerCar?: number
  supersededBy?: string
  ref?: Reference
}

/** A clickable point on an exploded-view image. Coordinates are percent (0-100) of the image. */
export interface PartHotspot {
  id: Id
  partId: Id
  x: number
  y: number
  w?: number
  h?: number
  /** Diagram callout number matching the drawing, e.g. "12". */
  callout?: string
}

export interface ExplodedView {
  id: Id
  engineIds: Id[]
  category: CategoryId
  title: LocalizedString
  description?: LocalizedRich
  /** Raw inline SVG markup of the ORIGINAL exploded illustration (imported via `?raw`). */
  svgMarkup: string
  /** Coordinate space note: hotspots use percent (0-100); kept for reference. */
  viewBox?: string
  /** Hotspots reference parts by id; the catalog entries live on the Engine (`Engine.parts`). */
  hotspots: PartHotspot[]
  reference: Reference
}
