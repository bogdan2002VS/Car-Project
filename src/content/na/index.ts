import type { Engine, Generation } from '@/model/generation'
import { b6zeSpecs, bpSpecs } from './specs'
import { naParts } from './parts'
import { naExplodedViews } from './exploded'
import { naWiringDiagrams } from './wiring'
import { naGuides } from './guides'

const forEngine = <T extends { engineIds: string[] }>(items: T[], id: string) =>
  items.filter((i) => i.engineIds.includes(id))

const b6ze: Engine = {
  id: 'b6ze-1600',
  generationId: 'na',
  displacementL: 1.6,
  engineCode: 'B6ZE',
  name: { ro: '1.6 (B6ZE)', en: '1.6 (B6ZE)' },
  variantNote: { ro: 'Motorul de bază NA', en: 'The base NA engine' },
  years: { from: 1989, to: 1997 },
  power: { ro: '~85 kW (115 CP)', en: '~85 kW (115 hp)' },
  specSheet: b6zeSpecs,
  wiringDiagrams: forEngine(naWiringDiagrams, 'b6ze-1600'),
  parts: forEngine(naParts, 'b6ze-1600'),
  explodedViews: forEngine(naExplodedViews, 'b6ze-1600'),
  guides: forEngine(naGuides, 'b6ze-1600'),
}

const bp: Engine = {
  id: 'bp-1800',
  generationId: 'na',
  displacementL: 1.8,
  engineCode: 'BP',
  name: { ro: '1.8 (BP)', en: '1.8 (BP)' },
  variantNote: { ro: 'Din 1994', en: 'From 1994' },
  years: { from: 1994, to: 1997 },
  power: { ro: '~96 kW (131 CP)', en: '~96 kW (131 hp)' },
  specSheet: bpSpecs,
  wiringDiagrams: forEngine(naWiringDiagrams, 'bp-1800'),
  parts: forEngine(naParts, 'bp-1800'),
  explodedViews: forEngine(naExplodedViews, 'bp-1800'),
  guides: forEngine(naGuides, 'bp-1800'),
}

export const na: Generation = {
  id: 'na',
  code: 'NA',
  name: { ro: 'Prima generație (NA)', en: 'First generation (NA)' },
  years: { from: 1989, to: 1997 },
  summary: {
    ro: 'NA „Eunos Roadster” — faruri retractabile, motoare B6 (1.6) și BP (1.8). Ușoară, simplă, începutul legendei MX-5.',
    en: 'The pop-up-headlight NA "Eunos Roadster" — B6 (1.6) and BP (1.8) engines. Light, simple, the start of the MX-5 legend.',
  },
  complete: true,
  engines: [b6ze, bp],
}
