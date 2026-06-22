import type { Engine, Generation } from '@/model/generation'

// SCAFFOLD: engine metadata only. Modules are filled in following the NA template.
const engines: Engine[] = [
  {
    id: 'nc-1800',
    generationId: 'nc',
    displacementL: 1.8,
    engineCode: 'L8-VE',
    name: { ro: '1.8 (L8-VE)', en: '1.8 (L8-VE)' },
    years: { from: 2005, to: 2015 },
    power: { ro: '~93 kW (126 CP)', en: '~93 kW (126 hp)' },
  },
  {
    id: 'nc-2000',
    generationId: 'nc',
    displacementL: 2.0,
    engineCode: 'LF-VE',
    name: { ro: '2.0 (LF-VE)', en: '2.0 (LF-VE)' },
    variantNote: { ro: 'Pre-facelift și facelift (NC2/NC3)', en: 'Pre-facelift and facelift (NC2/NC3)' },
    years: { from: 2005, to: 2015 },
    power: { ro: '~118 kW (160 CP)', en: '~118 kW (160 hp)' },
  },
]

export const nc: Generation = {
  id: 'nc',
  code: 'NC',
  name: { ro: 'A treia generație (NC / NCFL)', en: 'Third generation (NC / NCFL)' },
  years: { from: 2005, to: 2015 },
  summary: {
    ro: 'NC — platformă nouă, motoare MZR L8 (1.8) și LF (2.0), opțiune hard-top retractabil (RHT). Faceliftul NC2 (2009) revizuiește 2.0.',
    en: 'NC — new platform, MZR L8 (1.8) and LF (2.0) engines, optional retractable hard-top (RHT). The NC2 facelift (2009) revised the 2.0.',
  },
  complete: false,
  engines,
}
