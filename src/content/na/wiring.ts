import type { WiringDiagram } from '@/model/wiring'
import chargingSvg from './art/charging.svg?raw'

const BOTH = ['b6ze-1600', 'bp-1800']

export const naWiringDiagrams: WiringDiagram[] = [
  {
    id: 'charging-starting',
    engineIds: BOTH,
    category: 'electrical',
    subSystem: 'charging-starting',
    title: { ro: 'Circuit de încărcare și pornire', en: 'Charging & starting circuit' },
    description: {
      ro: 'Schemă simplificată: baterie, siguranță principală, contact, demaror și alternator. Firul roșu este alimentarea +12V.',
      en: 'Simplified schematic: battery, main fuse, ignition switch, starter and alternator. The red line is the +12V feed.',
    },
    svgMarkup: chargingSvg,
    viewBox: '0 0 1000 600',
    hotspots: [
      {
        id: 'w-batt',
        x: 15,
        y: 77.5,
        label: { ro: 'Baterie 12V', en: '12V battery' },
        detail: {
          ro: 'Sursa principală de energie. Borna + alimentează magistrala roșie spre siguranță, demaror și alternator; borna − merge la masă pe caroserie/motor.',
          en: 'Main energy source. The + terminal feeds the red bus to the fuse, starter and alternator; the − terminal goes to chassis/engine ground.',
        },
        relatedPartIds: ['main-relay'],
      },
      {
        id: 'w-fuse',
        x: 37,
        y: 49,
        label: { ro: 'Siguranță principală', en: 'Main fuse' },
        detail: {
          ro: 'Protejează circuitele principale. De aici pleacă alimentarea spre contact (IG1).',
          en: 'Protects the main circuits. Power to the ignition switch (IG1) branches from here.',
        },
      },
      {
        id: 'w-ign',
        x: 60.5,
        y: 23,
        label: { ro: 'Contact (ignition switch)', en: 'Ignition switch' },
        detail: {
          ro: 'În poziția START trimite semnal la solenoidul demarorului; în RUN alimentează aprinderea și anexele.',
          en: 'In START it signals the starter solenoid; in RUN it powers ignition and accessories.',
        },
        pinout: [
          { pin: 'B', signal: { ro: 'Intrare +12V', en: '+12V input' }, color: 'B/W' },
          { pin: 'IG1', signal: { ro: 'Aprindere / RUN', en: 'Ignition / RUN' }, color: 'B/Y' },
          { pin: 'ST', signal: { ro: 'Comandă demaror', en: 'Starter command' }, color: 'B/R' },
        ],
      },
      {
        id: 'w-starter',
        x: 87.5,
        y: 28,
        label: { ro: 'Demaror (starter)', en: 'Starter motor' },
        detail: {
          ro: 'Solenoidul primește comanda de la contact și cuplează pinionul; bobina principală trage curent mare direct de la baterie.',
          en: 'The solenoid gets the command from the ignition switch and engages the pinion; the main winding draws heavy current straight from the battery.',
        },
      },
      {
        id: 'w-alt',
        x: 64.5,
        y: 78,
        label: { ro: 'Alternator', en: 'Alternator' },
        detail: {
          ro: 'Încarcă bateria și alimentează consumatorii cu motorul pornit. Borna B+ se leagă la magistrala +12V; circuitul de excitație/lampă pleacă spre bord.',
          en: 'Charges the battery and powers loads while running. The B+ terminal ties to the +12V bus; the field/lamp circuit runs to the dash.',
        },
      },
    ],
    reference: {
      label: { ro: 'Schemă originală simplificată', en: 'Original simplified schematic' },
      source: 'MX-5 Encyclopedia',
      verified: true,
    },
  },
]
