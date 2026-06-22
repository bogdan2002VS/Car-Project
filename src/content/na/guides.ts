import type { DIYGuide } from '@/model/guide'
import type { Reference } from '@/model/common'

const BOTH = ['b6ze-1600', 'bp-1800']

const ref: Reference = {
  label: { ro: 'Procedură generală — verifică manualul', en: 'General procedure — check the manual' },
  source: 'MX-5 Encyclopedia',
  verified: false,
}

export const naGuides: DIYGuide[] = [
  {
    id: 'oil-and-filter-change',
    category: 'engine-accessories',
    engineIds: BOTH,
    title: { ro: 'Schimb ulei și filtru', en: 'Engine oil & filter change' },
    summary: {
      ro: 'Întreținere de bază: golirea uleiului uzat, înlocuirea filtrului și umplerea cu ulei nou.',
      en: 'Basic maintenance: drain the old oil, replace the filter and refill with fresh oil.',
    },
    difficulty: 'easy',
    estimatedMinutes: 30,
    tools: [
      { name: { ro: 'Cheie pentru bușonul de golire', en: 'Wrench for the drain plug' } },
      { name: { ro: 'Cheie de filtru', en: 'Oil filter wrench' } },
      { name: { ro: 'Tavă de colectare ulei', en: 'Oil drain pan' } },
      { name: { ro: 'Pâlnie', en: 'Funnel' } },
      { name: { ro: 'Cric și capre de sprijin', en: 'Jack and axle stands' } },
      { name: { ro: 'Mănuși', en: 'Gloves' }, optional: true },
    ],
    parts: [{ partId: 'oil-filter', qty: 1 }],
    torqueSpecs: [
      { fastener: { ro: 'Bușon golire ulei', en: 'Oil drain plug' }, nm: 30, nmMax: 41, notes: { ro: 'Folosește garnitură nouă dacă e cazul', en: 'Use a new washer if needed' } },
    ],
    safety: {
      ro: 'Uleiul cald arde. Nu lucra niciodată sub mașina sprijinită doar pe cric — folosește capre. Reciclează uleiul uzat.',
      en: 'Hot oil burns. Never work under a car held only by a jack — use axle stands. Recycle used oil.',
    },
    steps: [
      { order: 1, title: { ro: 'Încălzește ușor motorul', en: 'Warm the engine slightly' }, body: { ro: 'Pornește motorul 2–3 minute ca uleiul să curgă mai bine. Nu îl supraîncălzi.', en: 'Run the engine 2–3 minutes so the oil flows better. Do not get it hot.' } },
      { order: 2, title: { ro: 'Ridică și sprijină mașina', en: 'Lift and support the car' }, body: { ro: 'Ridică partea din față și așaz-o pe capre. Verifică stabilitatea.', en: 'Lift the front and set it on axle stands. Check it is stable.' }, warning: { ro: 'Niciodată doar pe cric.', en: 'Never on the jack alone.' } },
      { order: 3, title: { ro: 'Golește uleiul', en: 'Drain the oil' }, body: { ro: 'Poziționează tava, slăbește bușonul și lasă uleiul să curgă complet.', en: 'Position the pan, loosen the drain plug and let the oil fully drain.' }, torque: [{ fastener: { ro: 'Bușon golire ulei', en: 'Oil drain plug' }, nm: 30, nmMax: 41 }] },
      { order: 4, title: { ro: 'Înlocuiește filtrul', en: 'Replace the filter' }, body: { ro: 'Deșurubează filtrul vechi. Unge garnitura filtrului nou cu ulei și strânge-l cu mâna (3/4 tură după contact).', en: 'Unscrew the old filter. Oil the new filter gasket and hand-tighten (3/4 turn after contact).' }, partIds: ['oil-filter'] },
      { order: 5, title: { ro: 'Umple cu ulei nou', en: 'Refill with fresh oil' }, body: { ro: 'Strânge bușonul la cuplu, toarnă uleiul prin pâlnie și verifică nivelul cu joja.', en: 'Torque the drain plug, pour the oil through the funnel and check the level with the dipstick.' } },
      { order: 6, title: { ro: 'Verifică scurgerile', en: 'Check for leaks' }, body: { ro: 'Pornește motorul, verifică stingerea lămpii de presiune și caută scurgeri la filtru și bușon.', en: 'Start the engine, confirm the oil light goes out and check for leaks at the filter and plug.' } },
    ],
    reference: ref,
  },
  {
    id: 'front-brake-pads',
    category: 'braking',
    engineIds: BOTH,
    title: { ro: 'Înlocuire plăcuțe frână față', en: 'Front brake pad replacement' },
    summary: {
      ro: 'Schimbarea plăcuțelor de frână față, cu retragerea pistonului și strângerea la cuplu.',
      en: 'Replacing the front brake pads, including retracting the piston and torquing to spec.',
    },
    difficulty: 'moderate',
    estimatedMinutes: 60,
    tools: [
      { name: { ro: 'Cric și capre de sprijin', en: 'Jack and axle stands' } },
      { name: { ro: 'Chei tubulare (14 / 17 mm)', en: 'Sockets (14 / 17 mm)' } },
      { name: { ro: 'Clește/scula de retras pistonul', en: 'Piston retraction tool or C-clamp' } },
      { name: { ro: 'Cheie dinamometrică', en: 'Torque wrench' } },
      { name: { ro: 'Spray curățare frâne', en: 'Brake cleaner' }, optional: true },
    ],
    parts: [{ partId: 'front-brake-pads', qty: 1 }],
    torqueSpecs: [
      { fastener: { ro: 'Șuruburi ghidaj etrier', en: 'Caliper guide bolts' }, nm: 33, nmMax: 49 },
      { fastener: { ro: 'Prezoane roată', en: 'Wheel lug nuts' }, nm: 88, nmMax: 118 },
    ],
    safety: {
      ro: 'Praful de frână poate fi nociv — nu-l inhala. Asigură mașina pe capre. După montaj, apasă pedala de mai multe ori înainte de a porni.',
      en: 'Brake dust can be harmful — do not inhale it. Secure the car on stands. After fitting, pump the pedal several times before driving.',
    },
    steps: [
      { order: 1, title: { ro: 'Slăbește prezoanele', en: 'Loosen the lug nuts' }, body: { ro: 'Cu roata încă pe sol, slăbește ușor prezoanele.', en: 'With the wheel still on the ground, slightly loosen the lug nuts.' } },
      { order: 2, title: { ro: 'Ridică și demontează roata', en: 'Lift and remove the wheel' }, body: { ro: 'Ridică mașina, pune-o pe capre și scoate roata.', en: 'Lift the car, set it on stands and remove the wheel.' } },
      { order: 3, title: { ro: 'Demontează etrierul', en: 'Remove the caliper' }, body: { ro: 'Scoate șuruburile de ghidaj și ridică etrierul. Sprijină-l — nu-l lăsa atârnat de furtun.', en: 'Remove the guide bolts and lift the caliper. Support it — do not let it hang by the hose.' }, warning: { ro: 'Nu tensiona furtunul de frână.', en: 'Do not strain the brake hose.' } },
      { order: 4, title: { ro: 'Retrage pistonul', en: 'Retract the piston' }, body: { ro: 'Împinge pistonul înapoi în etrier cu scula dedicată. Supraveghează nivelul din vas să nu dea pe afară.', en: 'Push the piston back into the caliper with the tool. Watch the reservoir level so it does not overflow.' } },
      { order: 5, title: { ro: 'Montează plăcuțele noi', en: 'Fit the new pads' }, body: { ro: 'Înlocuiește plăcuțele (și clipsurile/șimsurile), curăță ghidajele și remontează etrierul la cuplu.', en: 'Replace the pads (and clips/shims), clean the slides and refit the caliper to torque.' }, partIds: ['front-brake-pads'], torque: [{ fastener: { ro: 'Șuruburi ghidaj etrier', en: 'Caliper guide bolts' }, nm: 33, nmMax: 49 }] },
      { order: 6, title: { ro: 'Montează roata și strânge', en: 'Refit the wheel and torque' }, body: { ro: 'Montează roata, coboară mașina și strânge prezoanele la cuplu, în cruce.', en: 'Refit the wheel, lower the car and torque the lugs in a star pattern.' }, torque: [{ fastener: { ro: 'Prezoane roată', en: 'Wheel lug nuts' }, nm: 88, nmMax: 118 }] },
      { order: 7, title: { ro: 'Apasă pedala', en: 'Pump the pedal' }, body: { ro: 'Apasă pedala de mai multe ori până devine fermă înainte de prima deplasare.', en: 'Pump the pedal several times until firm before the first drive.' } },
    ],
    reference: ref,
  },
  {
    id: 'coolant-flush',
    category: 'engine-accessories',
    engineIds: BOTH,
    title: { ro: 'Golire și umplere lichid de răcire', en: 'Coolant drain & refill' },
    summary: {
      ro: 'Înlocuirea lichidului de răcire și eliminarea aerului din circuit.',
      en: 'Replacing the coolant and bleeding air from the circuit.',
    },
    difficulty: 'moderate',
    estimatedMinutes: 45,
    tools: [
      { name: { ro: 'Tavă de colectare', en: 'Drain pan' } },
      { name: { ro: 'Pâlnie', en: 'Funnel' } },
      { name: { ro: 'Clește pentru coliere', en: 'Hose clamp pliers' } },
      { name: { ro: 'Lichid de răcire + apă distilată', en: 'Coolant + distilled water' } },
    ],
    parts: [
      { partId: 'radiator-cap', qty: 1 },
      { partId: 'thermostat', qty: 1 },
    ],
    torqueSpecs: [],
    safety: {
      ro: 'NU deschide niciodată sistemul cald — lichidul sub presiune provoacă arsuri grave. Antigelul este toxic pentru animale; strânge-l imediat.',
      en: 'NEVER open the system hot — pressurised coolant causes severe burns. Antifreeze is toxic to pets; clean up spills immediately.',
    },
    steps: [
      { order: 1, title: { ro: 'Motor rece', en: 'Cold engine' }, body: { ro: 'Lucrează doar cu motorul rece. Demontează bușonul radiatorului.', en: 'Work only with a cold engine. Remove the radiator cap.' }, warning: { ro: 'Niciodată la cald.', en: 'Never when hot.' } },
      { order: 2, title: { ro: 'Golește circuitul', en: 'Drain the circuit' }, body: { ro: 'Deschide robinetul de golire (sau slăbește furtunul inferior) și lasă lichidul să curgă complet.', en: 'Open the drain cock (or loosen the lower hose) and let the coolant fully drain.' }, partIds: ['lower-rad-hose'] },
      { order: 3, title: { ro: 'Umple cu amestec nou', en: 'Refill with fresh mix' }, body: { ro: 'Închide golirea și umple lent cu amestecul de lichid pentru a evita pungile de aer.', en: 'Close the drain and slowly refill with the coolant mix to avoid air pockets.' } },
      { order: 4, title: { ro: 'Elimină aerul', en: 'Bleed the air' }, body: { ro: 'Pornește motorul cu bușonul scos, lasă-l să ajungă la temperatură până se deschide termostatul și completează nivelul.', en: 'Run the engine with the cap off, let it reach temperature until the thermostat opens and top up the level.' }, partIds: ['thermostat'] },
      { order: 5, title: { ro: 'Verifică și închide', en: 'Check and close' }, body: { ro: 'Montează bușonul, verifică scurgerile și nivelul în vasul de expansiune după o repornire la rece.', en: 'Refit the cap, check for leaks and verify the expansion tank level after a cold restart.' }, partIds: ['radiator-cap', 'expansion-tank'] },
    ],
    reference: ref,
  },
]
