// Content integrity check: bilingual completeness + cross-references.
// Run with vite-node so `@/` aliases and `?raw` SVG imports resolve.
import { generations } from '@/content/registry'
import type { LocalizedString } from '@/model/common'

let errors = 0
const fail = (msg: string) => {
  console.error('  ✗', msg)
  errors++
}

function checkLs(ls: LocalizedString | undefined, where: string) {
  if (!ls || !ls.ro?.trim() || !ls.en?.trim()) {
    fail(`${where}: missing ro/en translation`)
  }
}

for (const gen of generations) {
  checkLs(gen.name, `generation ${gen.id} name`)
  checkLs(gen.summary, `generation ${gen.id} summary`)

  for (const engine of gen.engines) {
    const where = `${gen.id}/${engine.id}`
    checkLs(engine.name, `${where} name`)
    const partIds = new Set((engine.parts ?? []).map((p) => p.id))

    if (engine.specSheet) {
      for (const grp of engine.specSheet.groups) {
        checkLs(grp.title, `${where} spec group`)
        for (const row of grp.rows) {
          checkLs(row.label, `${where} spec row label`)
          checkLs(row.value, `${where} spec row value`)
        }
      }
    }

    for (const p of engine.parts ?? []) {
      checkLs(p.name, `${where} part ${p.id} name`)
    }

    for (const v of engine.explodedViews ?? []) {
      checkLs(v.title, `${where} exploded ${v.id} title`)
      for (const h of v.hotspots) {
        if (!partIds.has(h.partId)) {
          fail(`${where} exploded ${v.id}: hotspot ${h.id} → unknown part "${h.partId}"`)
        }
      }
    }

    for (const d of engine.wiringDiagrams ?? []) {
      checkLs(d.title, `${where} wiring ${d.id} title`)
      for (const h of d.hotspots) {
        checkLs(h.label, `${where} wiring ${d.id} hotspot ${h.id} label`)
        for (const pid of h.relatedPartIds ?? []) {
          if (!partIds.has(pid)) {
            fail(`${where} wiring ${d.id}: hotspot ${h.id} → unknown part "${pid}"`)
          }
        }
      }
    }

    for (const g of engine.guides ?? []) {
      checkLs(g.title, `${where} guide ${g.id} title`)
      checkLs(g.summary, `${where} guide ${g.id} summary`)
      for (const gp of g.parts) {
        if (!partIds.has(gp.partId)) {
          fail(`${where} guide ${g.id}: parts list → unknown part "${gp.partId}"`)
        }
      }
      for (const s of g.steps) {
        checkLs(s.title, `${where} guide ${g.id} step ${s.order} title`)
        for (const pid of s.partIds ?? []) {
          if (!partIds.has(pid)) {
            fail(`${where} guide ${g.id} step ${s.order} → unknown part "${pid}"`)
          }
        }
      }
    }
  }
}

if (errors > 0) {
  console.error(`\n${errors} content error(s) found.`)
  process.exit(1)
} else {
  console.log(`✓ Content valid (${generations.length} generations, all references resolve).`)
}
