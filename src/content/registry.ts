import type { Engine, Generation } from '@/model/generation'
import type { DIYGuide } from '@/model/guide'
import type { ExplodedView, PartCatalogEntry } from '@/model/parts'
import type { WiringDiagram } from '@/model/wiring'
import { na } from './na'
import { nb } from './nb'
import { nc } from './nc'
import { nd } from './nd'

/** All generations, in display order. */
export const generations: Generation[] = [na, nb, nc, nd]

// Flattened indexes consumed by routing and search.
export const allEngines: Engine[] = generations.flatMap((g) => g.engines)
export const allGuides: DIYGuide[] = allEngines.flatMap((e) => e.guides ?? [])
export const allDiagrams: WiringDiagram[] = allEngines.flatMap((e) => e.wiringDiagrams ?? [])
export const allExploded: ExplodedView[] = allEngines.flatMap((e) => e.explodedViews ?? [])
export const allParts: PartCatalogEntry[] = allEngines.flatMap((e) => e.parts ?? [])

export function getGeneration(genId: string): Generation | undefined {
  return generations.find((g) => g.id === genId)
}

export function getEngine(
  genId: string,
  engineId: string
): { gen: Generation; engine: Engine } | undefined {
  const gen = getGeneration(genId)
  const engine = gen?.engines.find((e) => e.id === engineId)
  if (!gen || !engine) return undefined
  return { gen, engine }
}
