import type { PartCatalogEntry } from '@/model/parts'

const BOTH = ['b6ze-1600', 'bp-1800']

// Honesty policy: a part number we are confident about is `verified: true` with a source.
// Anything uncertain is `verified: false` with a note to confirm by VIN in an OEM catalog.
// The global disclaimer is always shown by the UI.

export const naParts: PartCatalogEntry[] = [
  // ── Engine & Accessories (cooling parts referenced by the exploded view) ──
  {
    id: 'oil-filter',
    category: 'engine-accessories',
    engineIds: BOTH,
    name: { ro: 'Filtru de ulei', en: 'Engine oil filter' },
    oemCodes: ['B6Y1-14-302'],
    aftermarketRefs: [
      { brand: 'Mahle', code: 'OC 976' },
      { brand: 'K&N', code: 'HP-1004' },
    ],
    qtyPerCar: 1,
    notes: {
      ro: 'Filet 3/4-16 UNF. Folosit pe 1.6 și 1.8 NA/NB.',
      en: 'Thread 3/4-16 UNF. Used on both 1.6 and 1.8 NA/NB.',
    },
    ref: { label: { ro: 'Cod uzual comunitate', en: 'Commonly cited code' }, source: 'miata.net', url: 'https://www.miata.net/garage/', verified: true },
  },
  {
    id: 'spark-plugs',
    category: 'engine-accessories',
    engineIds: BOTH,
    name: { ro: 'Bujii', en: 'Spark plugs' },
    oemCodes: [],
    aftermarketRefs: [
      { brand: 'NGK', code: 'BKR6E-11' },
      { brand: 'Denso', code: 'K20PR-U11' },
    ],
    qtyPerCar: 4,
    notes: {
      ro: 'Distanță electrozi ~1.0–1.1 mm. Indice termic poate varia cu zona/uzura.',
      en: 'Electrode gap ~1.0–1.1 mm. Heat range may vary with climate/use.',
    },
    ref: { label: { ro: 'Echivalență uzuală', en: 'Common cross-reference' }, source: 'NGK / community', verified: true },
  },
  {
    id: 'radiator',
    category: 'engine-accessories',
    engineIds: BOTH,
    name: { ro: 'Radiator răcire', en: 'Cooling radiator' },
    oemCodes: ['B61P-15-200'],
    qtyPerCar: 1,
    notes: { ro: 'Cod orientativ — confirmă după VIN (manual vs. automat diferă).', en: 'Indicative code — confirm by VIN (manual vs. auto differ).' },
    ref: { label: { ro: 'De confirmat', en: 'To confirm' }, source: 'OEM catalog', url: 'https://partsouq.com/', verified: false },
  },
  {
    id: 'radiator-cap',
    category: 'engine-accessories',
    engineIds: BOTH,
    name: { ro: 'Bușon radiator', en: 'Radiator cap' },
    oemCodes: [],
    qtyPerCar: 1,
    notes: { ro: 'Presiune ~0.9 bar (88–108 kPa).', en: 'Pressure rating ~0.9 bar (88–108 kPa).' },
    ref: { label: { ro: 'De confirmat', en: 'To confirm' }, source: 'OEM catalog', verified: false },
  },
  {
    id: 'upper-rad-hose',
    category: 'engine-accessories',
    engineIds: BOTH,
    name: { ro: 'Furtun superior radiator', en: 'Upper radiator hose' },
    oemCodes: ['B61P-15-186'],
    qtyPerCar: 1,
    notes: { ro: 'Cod orientativ — confirmă după VIN.', en: 'Indicative code — confirm by VIN.' },
    ref: { label: { ro: 'De confirmat', en: 'To confirm' }, source: 'OEM catalog', verified: false },
  },
  {
    id: 'lower-rad-hose',
    category: 'engine-accessories',
    engineIds: BOTH,
    name: { ro: 'Furtun inferior radiator', en: 'Lower radiator hose' },
    oemCodes: ['B61P-15-185'],
    qtyPerCar: 1,
    notes: { ro: 'Cod orientativ — confirmă după VIN.', en: 'Indicative code — confirm by VIN.' },
    ref: { label: { ro: 'De confirmat', en: 'To confirm' }, source: 'OEM catalog', verified: false },
  },
  {
    id: 'thermostat',
    category: 'engine-accessories',
    engineIds: BOTH,
    name: { ro: 'Termostat', en: 'Thermostat' },
    oemCodes: [],
    qtyPerCar: 1,
    notes: { ro: 'Deschidere ~82 °C. Verifică inelul de etanșare.', en: 'Opens ~82 °C. Check the seal ring.' },
    ref: { label: { ro: 'De confirmat', en: 'To confirm' }, source: 'OEM catalog', verified: false },
  },
  {
    id: 'water-pump',
    category: 'engine-accessories',
    engineIds: BOTH,
    name: { ro: 'Pompă de apă', en: 'Water pump' },
    oemCodes: [],
    qtyPerCar: 1,
    notes: { ro: 'Se înlocuiește de regulă împreună cu cureaua de distribuție.', en: 'Usually replaced together with the timing belt.' },
    ref: { label: { ro: 'De confirmat', en: 'To confirm' }, source: 'OEM catalog', verified: false },
  },
  {
    id: 'expansion-tank',
    category: 'engine-accessories',
    engineIds: BOTH,
    name: { ro: 'Vas de expansiune', en: 'Coolant expansion tank' },
    oemCodes: [],
    qtyPerCar: 1,
    ref: { label: { ro: 'De confirmat', en: 'To confirm' }, source: 'OEM catalog', verified: false },
  },
  {
    id: 'cooling-fan',
    category: 'engine-accessories',
    engineIds: BOTH,
    name: { ro: 'Electroventilator răcire', en: 'Cooling fan' },
    oemCodes: [],
    qtyPerCar: 1,
    notes: { ro: 'NA are de regulă ventilator electric pe radiator.', en: 'NA typically uses an electric fan on the radiator.' },
    ref: { label: { ro: 'De confirmat', en: 'To confirm' }, source: 'OEM catalog', verified: false },
  },

  // ── Braking ──
  {
    id: 'front-brake-pads',
    category: 'braking',
    engineIds: BOTH,
    name: { ro: 'Plăcuțe frână față', en: 'Front brake pads' },
    oemCodes: [],
    aftermarketRefs: [{ brand: 'EBC', code: 'DP2/Ultimax (per disc)' }],
    qtyPerCar: 1,
    notes: {
      ro: '1.6 și 1.8 pot avea etriere/plăcuțe diferite. Confirmă după VIN.',
      en: '1.6 and 1.8 may use different calipers/pads. Confirm by VIN.',
    },
    ref: { label: { ro: 'De confirmat', en: 'To confirm' }, source: 'OEM catalog', verified: false },
  },

  // ── Suspension & Dampers ──
  {
    id: 'front-shock',
    category: 'suspension-dampers',
    engineIds: BOTH,
    name: { ro: 'Amortizor față', en: 'Front shock absorber' },
    oemCodes: [],
    qtyPerCar: 2,
    ref: { label: { ro: 'De confirmat', en: 'To confirm' }, source: 'OEM catalog', verified: false },
  },

  // ── Steering & Alignment ──
  {
    id: 'tie-rod-end',
    category: 'steering-alignment',
    engineIds: BOTH,
    name: { ro: 'Cap de bară', en: 'Tie rod end' },
    oemCodes: [],
    qtyPerCar: 2,
    ref: { label: { ro: 'De confirmat', en: 'To confirm' }, source: 'OEM catalog', verified: false },
  },

  // ── Transmission & Differential ──
  {
    id: 'clutch-kit',
    category: 'transmission-diff',
    engineIds: BOTH,
    name: { ro: 'Kit ambreiaj', en: 'Clutch kit' },
    oemCodes: [],
    qtyPerCar: 1,
    notes: { ro: 'Diametru disc diferă între 1.6 și 1.8.', en: 'Clutch disc diameter differs between 1.6 and 1.8.' },
    ref: { label: { ro: 'De confirmat', en: 'To confirm' }, source: 'OEM catalog', verified: false },
  },

  // ── Body & Interior ──
  {
    id: 'soft-top-latch',
    category: 'body-interior',
    engineIds: BOTH,
    name: { ro: 'Cârlig prindere capotă (soft-top)', en: 'Soft-top latch' },
    oemCodes: [],
    qtyPerCar: 2,
    notes: { ro: 'Se reglează pe înălțime pentru tensionarea capotei.', en: 'Height-adjustable to tension the top.' },
    ref: { label: { ro: 'De confirmat', en: 'To confirm' }, source: 'OEM catalog', verified: false },
  },

  // ── Electrical ──
  {
    id: 'main-relay',
    category: 'electrical',
    engineIds: BOTH,
    name: { ro: 'Releu principal (main relay)', en: 'Main relay' },
    oemCodes: [],
    qtyPerCar: 1,
    notes: { ro: 'Alimentează pompa de combustibil și ECU. Cauză frecventă de „nu pornește la cald”.', en: 'Feeds the fuel pump and ECU. A common hot-start fault.' },
    ref: { label: { ro: 'De confirmat', en: 'To confirm' }, source: 'OEM catalog', verified: false },
  },
]
