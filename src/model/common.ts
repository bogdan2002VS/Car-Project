/** Supported languages. Content and UI are bilingual. */
export type Lang = 'ro' | 'en'

/** Every human-readable string in content is bilingual. */
export interface LocalizedString {
  ro: string
  en: string
}

/** Plain-text rich block; a blank line separates paragraphs. Same shape as LocalizedString. */
export type LocalizedRich = LocalizedString

/** A citation / "verify against the official manual" pointer. */
export interface Reference {
  label: LocalizedString
  /** e.g. "Mazda Workshop Manual NA, Section B" or a public spec source */
  source: string
  url?: string
  /** true = original/derived data we authored; false = must be verified before relying on it */
  verified: boolean
}

/** A URL-safe slug identifier, e.g. "b6ze-1600". */
export type Id = string
