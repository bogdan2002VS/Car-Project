import type { Engine, Generation } from '@/model/generation'

// SCAFFOLD: engine metadata only. Modules are filled in following the NA template.
const engines: Engine[] = [
  {
    id: 'nb-1600',
    generationId: 'nb',
    displacementL: 1.6,
    engineCode: 'B6ZE',
    name: { ro: '1.6 (B6ZE)', en: '1.6 (B6ZE)' },
    years: { from: 1998, to: 2000 },
    power: { ro: '~81 kW (110 CP)', en: '~81 kW (110 hp)' },
  },
  {
    id: 'nb-1800',
    generationId: 'nb',
    displacementL: 1.8,
    engineCode: 'BP / BP-VE',
    name: { ro: '1.8 (BP)', en: '1.8 (BP)' },
    variantNote: { ro: 'S-VT (BP-VE) din 2001', en: 'S-VT (BP-VE) from 2001' },
    years: { from: 1998, to: 2005 },
    power: { ro: '~106 kW (146 CP) S-VT', en: '~106 kW (146 hp) S-VT' },
  },
]

export const nb: Generation = {
  id: 'nb',
  code: 'NB',
  name: { ro: 'A doua generație (NB / NBFL)', en: 'Second generation (NB / NBFL)' },
  years: { from: 1998, to: 2005 },
  summary: {
    ro: 'NB — fără faruri retractabile, motoare B6 și BP, versiunea S-VT (BP-VE) și facelift NBFL din 2001.',
    en: 'NB — fixed headlights, B6 and BP engines, the S-VT (BP-VE) variant and the 2001 NBFL facelift.',
  },
  complete: false,
  engines,
}
