import type { Category } from '@/model/taxonomy'

/** The 7 categories, gen-agnostic. Everything else references these by `CategoryId`. */
export const categories: Category[] = [
  {
    id: 'engine-accessories',
    order: 1,
    icon: 'Cog',
    name: { ro: 'Motor & Anexe', en: 'Engine & Accessories' },
    description: {
      ro: 'Admisie, evacuare, răcire, distribuție și anexe motor.',
      en: 'Intake, exhaust, cooling, timing and engine accessories.',
    },
  },
  {
    id: 'suspension-dampers',
    order: 2,
    icon: 'Spline',
    name: { ro: 'Suspensie & Amortizoare', en: 'Suspension & Dampers' },
    description: {
      ro: 'Arcuri, amortizoare, brațe, bucșe și bare antiruliu.',
      en: 'Springs, dampers, arms, bushings and anti-roll bars.',
    },
  },
  {
    id: 'steering-alignment',
    order: 3,
    icon: 'LifeBuoy',
    name: { ro: 'Direcție & Aliniament', en: 'Steering & Alignment' },
    description: {
      ro: 'Casetă, capete de bară, coloană și geometrie.',
      en: 'Rack, tie rods, column and alignment geometry.',
    },
  },
  {
    id: 'braking',
    order: 4,
    icon: 'Disc3',
    name: { ro: 'Sistem de Frânare', en: 'Braking System' },
    description: {
      ro: 'Discuri, plăcuțe, etriere, lichid și ABS.',
      en: 'Discs, pads, calipers, fluid and ABS.',
    },
  },
  {
    id: 'transmission-diff',
    order: 5,
    icon: 'Settings2',
    name: { ro: 'Transmisie & Diferențial', en: 'Transmission & Differential' },
    description: {
      ro: 'Cutie, ambreiaj, cardan, diferențial și planetare.',
      en: 'Gearbox, clutch, driveshaft, differential and axles.',
    },
  },
  {
    id: 'body-interior',
    order: 6,
    icon: 'CarFront',
    name: { ro: 'Caroserie & Interior', en: 'Body & Interior' },
    description: {
      ro: 'Caroserie, interior și mecanism soft-top / hard-top.',
      en: 'Body, interior and the soft-top / hard-top mechanism.',
    },
  },
  {
    id: 'electrical',
    order: 7,
    icon: 'Zap',
    name: { ro: 'Sistem Electric', en: 'Electrical System' },
    description: {
      ro: 'Cablaje, relee, senzori, iluminare și ECU.',
      en: 'Wiring, relays, sensors, lighting and ECU.',
    },
  },
]

export const categoryById = new Map(categories.map((c) => [c.id, c]))
