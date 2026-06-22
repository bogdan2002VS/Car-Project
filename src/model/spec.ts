import type { Id, LocalizedString, Reference } from './common'
import type { CategoryId } from './taxonomy'

export interface SpecRow {
  label: LocalizedString
  /** Value kept localized so unit words ("with filter" / "cu filtru") translate too. */
  value: LocalizedString
  ref?: Reference
}

export interface SpecGroup {
  title: LocalizedString
  category?: CategoryId
  rows: SpecRow[]
}

export interface SpecSheet {
  engineId: Id
  groups: SpecGroup[]
  /** Top-level "verify against official manual" disclaimer. */
  disclaimer: Reference
}
