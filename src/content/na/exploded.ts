import type { ExplodedView } from '@/model/parts'
import coolingSvg from './art/cooling.svg?raw'

const BOTH = ['b6ze-1600', 'bp-1800']

export const naExplodedViews: ExplodedView[] = [
  {
    id: 'cooling-system',
    engineIds: BOTH,
    category: 'engine-accessories',
    title: {
      ro: 'Sistem de răcire — vedere descompusă',
      en: 'Cooling system — exploded view',
    },
    description: {
      ro: 'Componentele principale ale circuitului de răcire. Apasă pe un reper pentru codul piesei.',
      en: 'The main components of the cooling circuit. Tap a callout for the part code.',
    },
    svgMarkup: coolingSvg,
    viewBox: '0 0 800 600',
    hotspots: [
      { id: 'c-1', partId: 'radiator', callout: '1', x: 13.75, y: 20 },
      { id: 'c-2', partId: 'radiator-cap', callout: '2', x: 20, y: 16.7 },
      { id: 'c-3', partId: 'upper-rad-hose', callout: '3', x: 42.5, y: 20 },
      { id: 'c-4', partId: 'thermostat', callout: '4', x: 63.75, y: 20 },
      { id: 'c-5', partId: 'water-pump', callout: '5', x: 81.25, y: 50 },
      { id: 'c-6', partId: 'lower-rad-hose', callout: '6', x: 45, y: 78.3 },
      { id: 'c-7', partId: 'cooling-fan', callout: '7', x: 15, y: 86.7 },
      { id: 'c-8', partId: 'expansion-tank', callout: '8', x: 90, y: 15 },
    ],
    reference: {
      label: { ro: 'Ilustrație originală simplificată', en: 'Original simplified illustration' },
      source: 'MX-5 Encyclopedia',
      verified: true,
    },
  },
]
