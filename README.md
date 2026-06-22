# MX-5 Encyclopedia 🚗

Enciclopedie tehnică pentru **Mazda MX-5 (Miata)**: specificații, scheme electrice
interactive, catalog de piese cu coduri OEM și ghiduri DIY pas cu pas — organizate pe
generații și motorizări. Bilingv **RO / EN**, funcționează **offline** (PWA) și se
instalează ca aplicație pe telefon sau PC.

> Proiect independent, **neafiliat cu Mazda Motor Corporation**. Datele tehnice sunt
> orientative — verifică întotdeauna în manualul de service oficial.

---

## 🌐 Folosește aplicația (fără instalare)

După publicare, aplicația e disponibilă la un link de tipul:

```
https://bogdan2002vs.github.io/car-project/
```

- Se deschide în orice browser (telefon / PC).
- Pe telefon: meniul browserului → **„Adaugă la ecranul principal”** → o ai ca aplicație.
- După prima încărcare merge și **fără internet** (ideal în garaj).

## 💻 Rulează local (pentru dezvoltare)

Ai nevoie de [Node.js](https://nodejs.org) (v20+). Apoi, în folderul proiectului:

```bash
npm install      # o singură dată
npm run dev      # pornește aplicația la http://localhost:5173/car-project/
```

Alte comenzi utile:

```bash
npm run build      # construiește versiunea de producție (folder dist/)
npm run preview    # servește local build-ul de producție
npm run validate   # verifică integritatea conținutului (traduceri + referințe)
npm run typecheck  # verifică tipurile TypeScript
npm run gen-icons  # regenerează iconițele PWA din public/favicon.svg
```

## 🧭 Cum e organizat

```
Generație (NA · NB · NC · ND)
  └── Motorizare (ex. 1.6 B6ZE, 1.8 BP)
        ├── Prezentare & Specificații   (coduri, putere, capacități, cupluri)
        ├── Scheme electrice            (diagrame interactive, pe sub-sisteme)
        ├── Catalog de piese            (vederi descompuse + coduri OE/OEM)
        └── Ghiduri DIY                 (pași, cupluri de strângere, scule)
```

Totul e etichetat pe **7 categorii**: Motor & Anexe · Suspensie & Amortizoare ·
Direcție & Aliniament · Frânare · Transmisie & Diferențial · Caroserie & Interior ·
Sistem Electric.

Generația **NA este completă** ca șablon; NB / NC / ND sunt pregătite și se completează
urmând același model.

## ✍️ Cum adaugi conținut

Tot conținutul stă în fișiere tipate sub [`src/content/`](src/content/). Pentru a adăuga
o piesă, un ghid sau o diagramă:

1. Deschide folderul generației (ex. `src/content/na/`).
2. Copiază o intrare existentă din `parts.ts`, `guides.ts` etc. și editează textele
   (fiecare câmp are versiune `ro` și `en`).
3. Rulează `npm run validate` — îți spune clar dacă lipsește o traducere sau o referință.

TypeScript te avertizează în timp real dacă o categorie sau un cod de piesă e greșit.
Poți edita și direct pe github.com (fără unelte locale): modificarea declanșează verificarea
automată în Pull Request.

## 🚀 Publicare automată

La fiecare push pe ramura `main`, GitHub Actions construiește și publică aplicația pe
GitHub Pages ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).
Activează-o o singură dată: **Settings → Pages → Source = GitHub Actions**.

## 🛠️ Tehnologii

React · TypeScript · Vite · Tailwind CSS · React Router · vite-plugin-pwa ·
react-zoom-pan-pinch · Fuse.js · fonturi self-hosted (Montserrat + Inter).
