import Fuse from 'fuse.js'
import type { LocalizedString } from '@/model/common'
import type { CategoryId, GenerationId } from '@/model/taxonomy'
import { generations } from '@/content/registry'
import { normalizeOem } from './partNumber'

export type SearchType = 'part' | 'guide' | 'diagram' | 'spec'

export interface SearchRecord {
  type: SearchType
  genId: GenerationId
  engineId: string
  category?: CategoryId
  title: LocalizedString
  subtitle?: LocalizedString
  keywords: string
  route: string
}

function buildRecords(): SearchRecord[] {
  const records: SearchRecord[] = []
  for (const gen of generations) {
    for (const engine of gen.engines) {
      const base = `/g/${gen.id}/${engine.id}`
      if (engine.specSheet) {
        records.push({
          type: 'spec',
          genId: gen.id,
          engineId: engine.id,
          title: {
            ro: `Specificații ${engine.name.ro} (${gen.code})`,
            en: `Specs ${engine.name.en} (${gen.code})`,
          },
          keywords: [engine.name.ro, engine.name.en, engine.engineCode, gen.code].join(' '),
          route: `${base}/overview`,
        })
      }
      for (const p of engine.parts ?? []) {
        records.push({
          type: 'part',
          genId: gen.id,
          engineId: engine.id,
          category: p.category,
          title: p.name,
          subtitle: { ro: p.oemCodes.join(', '), en: p.oemCodes.join(', ') },
          keywords: [
            p.name.ro,
            p.name.en,
            ...p.oemCodes,
            ...p.oemCodes.map(normalizeOem),
            ...(p.aftermarketRefs?.map((a) => `${a.brand} ${a.code}`) ?? []),
          ].join(' '),
          route: `${base}/parts/item/${p.id}`,
        })
      }
      for (const g of engine.guides ?? []) {
        records.push({
          type: 'guide',
          genId: gen.id,
          engineId: engine.id,
          category: g.category,
          title: g.title,
          keywords: [g.title.ro, g.title.en, g.summary.ro, g.summary.en].join(' '),
          route: `${base}/guides/${g.id}`,
        })
      }
      for (const d of engine.wiringDiagrams ?? []) {
        records.push({
          type: 'diagram',
          genId: gen.id,
          engineId: engine.id,
          category: d.category,
          title: d.title,
          keywords: [d.title.ro, d.title.en, d.description.ro, d.description.en].join(' '),
          route: `${base}/wiring/${d.id}`,
        })
      }
    }
  }
  return records
}

export const searchRecords = buildRecords()

export const fuse = new Fuse(searchRecords, {
  includeScore: true,
  threshold: 0.4,
  ignoreLocation: true,
  keys: [
    { name: 'title.ro', weight: 2 },
    { name: 'title.en', weight: 2 },
    { name: 'keywords', weight: 1 },
  ],
})
