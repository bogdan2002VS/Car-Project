import type { Engine } from '@/model/generation'

export function partById(engine: Engine, partId: string) {
  return (engine.parts ?? []).find((p) => p.id === partId)
}

export function guideById(engine: Engine, guideId: string) {
  return (engine.guides ?? []).find((g) => g.id === guideId)
}

export function diagramById(engine: Engine, id: string) {
  return (engine.wiringDiagrams ?? []).find((d) => d.id === id)
}

export function engineHasContent(engine: Engine): boolean {
  return Boolean(
    engine.specSheet ||
      engine.parts?.length ||
      engine.guides?.length ||
      engine.wiringDiagrams?.length ||
      engine.explodedViews?.length
  )
}
