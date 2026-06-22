import type { Engine, Generation } from '@/model/generation'

// SCAFFOLD: engine metadata only. Modules are filled in following the NA template.
const engines: Engine[] = [
  {
    id: 'nd-1500',
    generationId: 'nd',
    displacementL: 1.5,
    engineCode: 'P5-VP[R]',
    name: { ro: '1.5 Skyactiv-G', en: '1.5 Skyactiv-G' },
    years: { from: 2015, to: null },
    power: { ro: '~96 kW (131 CP)', en: '~96 kW (131 hp)' },
  },
  {
    id: 'nd-2000',
    generationId: 'nd',
    displacementL: 2.0,
    engineCode: 'PE-VPR',
    name: { ro: '2.0 Skyactiv-G', en: '2.0 Skyactiv-G' },
    variantNote: { ro: 'ND1 (~160 CP) și ND2 din 2019 (~184 CP)', en: 'ND1 (~160 hp) and ND2 from 2019 (~184 hp)' },
    years: { from: 2015, to: null },
    power: { ro: '~135 kW (184 CP) ND2', en: '~135 kW (184 hp) ND2' },
  },
]

export const nd: Generation = {
  id: 'nd',
  code: 'ND',
  name: { ro: 'A patra generație (ND / ND2)', en: 'Fourth generation (ND / ND2)' },
  years: { from: 2015, to: null },
  summary: {
    ro: 'ND — Skyactiv, din nou ușoară. 1.5 și 2.0; revizia ND2 (2019) crește puterea lui 2.0 la ~184 CP.',
    en: 'ND — Skyactiv, light again. 1.5 and 2.0; the ND2 revision (2019) raised the 2.0 to ~184 hp.',
  },
  complete: false,
  engines,
}
