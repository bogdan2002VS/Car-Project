import type { SpecSheet } from '@/model/spec'
import type { Reference } from '@/model/common'

const disclaimer: Reference = {
  label: { ro: 'Valori orientative', en: 'Indicative values' },
  source: 'Owner manuals / community references',
  url: 'https://www.miata.net/garage/',
  verified: false,
}

const verified: Reference = {
  label: { ro: 'Larg confirmat', en: 'Widely confirmed' },
  source: 'Owner manual / community',
  verified: true,
}

export const b6zeSpecs: SpecSheet = {
  engineId: 'b6ze-1600',
  disclaimer,
  groups: [
    {
      title: { ro: 'Identificare', en: 'Identification' },
      rows: [
        { label: { ro: 'Cod motor', en: 'Engine code' }, value: { ro: 'B6ZE (B6)', en: 'B6ZE (B6)' }, ref: verified },
        { label: { ro: 'Generație', en: 'Generation' }, value: { ro: 'NA (1989–1997)', en: 'NA (1989–1997)' }, ref: verified },
        { label: { ro: 'Configurație', en: 'Layout' }, value: { ro: '4 cilindri în linie, DOHC 16V', en: 'Inline-4, DOHC 16V' }, ref: verified },
      ],
    },
    {
      title: { ro: 'Motor', en: 'Engine' },
      rows: [
        { label: { ro: 'Capacitate', en: 'Displacement' }, value: { ro: '1597 cm³', en: '1597 cc' }, ref: verified },
        { label: { ro: 'Alezaj × cursă', en: 'Bore × stroke' }, value: { ro: '78.0 × 83.6 mm', en: '78.0 × 83.6 mm' }, ref: verified },
        { label: { ro: 'Raport compresie', en: 'Compression ratio' }, value: { ro: '9.4 : 1', en: '9.4 : 1' }, ref: disclaimer },
        { label: { ro: 'Putere (early)', en: 'Power (early)' }, value: { ro: '~85 kW (115 CP) la 6500 rpm', en: '~85 kW (115 hp) at 6500 rpm' }, ref: disclaimer },
        { label: { ro: 'Cuplu', en: 'Torque' }, value: { ro: '~136 Nm la 5500 rpm', en: '~136 Nm at 5500 rpm' }, ref: disclaimer },
        { label: { ro: 'Ordine aprindere', en: 'Firing order' }, value: { ro: '1–3–4–2', en: '1–3–4–2' }, ref: verified },
      ],
    },
    {
      title: { ro: 'Fluide & capacități', en: 'Fluids & capacities' },
      category: 'engine-accessories',
      rows: [
        { label: { ro: 'Ulei motor (cu filtru)', en: 'Engine oil (with filter)' }, value: { ro: '~3.5 L, 5W-30 / 10W-40', en: '~3.5 L, 5W-30 / 10W-40' }, ref: disclaimer },
        { label: { ro: 'Lichid de răcire', en: 'Coolant' }, value: { ro: '~6.0 L', en: '~6.0 L' }, ref: disclaimer },
        { label: { ro: 'Ulei cutie (5MT)', en: 'Gearbox oil (5MT)' }, value: { ro: '~2.0 L, 75W-90 GL-4', en: '~2.0 L, 75W-90 GL-4' }, ref: disclaimer },
        { label: { ro: 'Ulei diferențial', en: 'Differential oil' }, value: { ro: '~1.1 L, 80W-90 GL-5', en: '~1.1 L, 80W-90 GL-5' }, ref: disclaimer },
        { label: { ro: 'Rezervor combustibil', en: 'Fuel tank' }, value: { ro: '45 L', en: '45 L' }, ref: verified },
        { label: { ro: 'Bujii / distanță', en: 'Spark plugs / gap' }, value: { ro: 'NGK BKR6E-11, ~1.0–1.1 mm', en: 'NGK BKR6E-11, ~1.0–1.1 mm' }, ref: disclaimer },
      ],
    },
    {
      title: { ro: 'Cupluri de strângere cheie', en: 'Key torque specs' },
      rows: [
        { label: { ro: 'Prezoane roată', en: 'Wheel lug nuts' }, value: { ro: '88–118 Nm', en: '88–118 Nm' }, ref: verified },
        { label: { ro: 'Bușon golire ulei', en: 'Oil drain plug' }, value: { ro: '30–41 Nm', en: '30–41 Nm' }, ref: verified },
        { label: { ro: 'Bujii', en: 'Spark plugs' }, value: { ro: '15–23 Nm', en: '15–23 Nm' }, ref: verified },
        { label: { ro: 'Șuruburi ghidaj etrier', en: 'Caliper guide bolts' }, value: { ro: '33–49 Nm', en: '33–49 Nm' }, ref: disclaimer },
      ],
    },
  ],
}

export const bpSpecs: SpecSheet = {
  engineId: 'bp-1800',
  disclaimer,
  groups: [
    {
      title: { ro: 'Identificare', en: 'Identification' },
      rows: [
        { label: { ro: 'Cod motor', en: 'Engine code' }, value: { ro: 'BP / BP-ZE', en: 'BP / BP-ZE' }, ref: verified },
        { label: { ro: 'Generație', en: 'Generation' }, value: { ro: 'NA (din 1994)', en: 'NA (from 1994)' }, ref: verified },
        { label: { ro: 'Configurație', en: 'Layout' }, value: { ro: '4 cilindri în linie, DOHC 16V', en: 'Inline-4, DOHC 16V' }, ref: verified },
      ],
    },
    {
      title: { ro: 'Motor', en: 'Engine' },
      rows: [
        { label: { ro: 'Capacitate', en: 'Displacement' }, value: { ro: '1839 cm³', en: '1839 cc' }, ref: verified },
        { label: { ro: 'Alezaj × cursă', en: 'Bore × stroke' }, value: { ro: '83.0 × 85.0 mm', en: '83.0 × 85.0 mm' }, ref: verified },
        { label: { ro: 'Raport compresie', en: 'Compression ratio' }, value: { ro: '9.0 : 1', en: '9.0 : 1' }, ref: disclaimer },
        { label: { ro: 'Putere (early)', en: 'Power (early)' }, value: { ro: '~96 kW (131 CP) la 6500 rpm', en: '~96 kW (131 hp) at 6500 rpm' }, ref: disclaimer },
        { label: { ro: 'Cuplu', en: 'Torque' }, value: { ro: '~152 Nm la 5000 rpm', en: '~152 Nm at 5000 rpm' }, ref: disclaimer },
        { label: { ro: 'Ordine aprindere', en: 'Firing order' }, value: { ro: '1–3–4–2', en: '1–3–4–2' }, ref: verified },
      ],
    },
    {
      title: { ro: 'Fluide & capacități', en: 'Fluids & capacities' },
      category: 'engine-accessories',
      rows: [
        { label: { ro: 'Ulei motor (cu filtru)', en: 'Engine oil (with filter)' }, value: { ro: '~3.8 L, 5W-30 / 10W-40', en: '~3.8 L, 5W-30 / 10W-40' }, ref: disclaimer },
        { label: { ro: 'Lichid de răcire', en: 'Coolant' }, value: { ro: '~6.0 L', en: '~6.0 L' }, ref: disclaimer },
        { label: { ro: 'Ulei cutie (5MT)', en: 'Gearbox oil (5MT)' }, value: { ro: '~2.0 L, 75W-90 GL-4', en: '~2.0 L, 75W-90 GL-4' }, ref: disclaimer },
        { label: { ro: 'Ulei diferențial', en: 'Differential oil' }, value: { ro: '~1.1 L, 80W-90 GL-5', en: '~1.1 L, 80W-90 GL-5' }, ref: disclaimer },
        { label: { ro: 'Rezervor combustibil', en: 'Fuel tank' }, value: { ro: '45 L', en: '45 L' }, ref: verified },
        { label: { ro: 'Bujii / distanță', en: 'Spark plugs / gap' }, value: { ro: 'NGK BKR6E-11, ~1.0–1.1 mm', en: 'NGK BKR6E-11, ~1.0–1.1 mm' }, ref: disclaimer },
      ],
    },
    {
      title: { ro: 'Cupluri de strângere cheie', en: 'Key torque specs' },
      rows: [
        { label: { ro: 'Prezoane roată', en: 'Wheel lug nuts' }, value: { ro: '88–118 Nm', en: '88–118 Nm' }, ref: verified },
        { label: { ro: 'Bușon golire ulei', en: 'Oil drain plug' }, value: { ro: '30–41 Nm', en: '30–41 Nm' }, ref: verified },
        { label: { ro: 'Bujii', en: 'Spark plugs' }, value: { ro: '15–23 Nm', en: '15–23 Nm' }, ref: verified },
        { label: { ro: 'Șuruburi ghidaj etrier', en: 'Caliper guide bolts' }, value: { ro: '33–49 Nm', en: '33–49 Nm' }, ref: disclaimer },
      ],
    },
  ],
}
