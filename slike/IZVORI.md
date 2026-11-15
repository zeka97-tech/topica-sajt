# Izvori slika

Pravilo: svaka slika na sajtu ima jasno poreklo i licencu za komercijalnu upotrebu. Bez slika sa sajtova proizvođača, iz drugih programa, sa Pinterest-a ili Google slika.

| Datoteka (slike/izvor/) | Šta je | Izvor | Autor | Licenca |
|---|---|---|---|---|
| topi-meri-korpus.png, topi-busilica.png | maskota Topi (original, bela pozadina) | priložio vlasnik u zadatku | vlasnik TOPICA | vlasništvo vlasnika |
| topi-*-isecen.png | isto, isečena pozadina (ImageMagick) | izvedeno iz gornjih | — | isto |
| snimak-*.png | snimci ekrana programa TOPICA (iz TOPICA/docs/dizajn/snimci-uredno/) | repozitorijum zeka97-tech/TOPICA | vlasnik TOPICA | vlasništvo vlasnika |
| slike/web/isecak-*.webp, tekstura-hrast-*.webp | isečci iz snimaka programa (skripte/slike.mjs) | izvedeno iz snimaka | — | isto |
| slike/og/*.webp, slike/og.webp | slika za deljenje (Topi + naslov), generiše skripte/og.mjs | izvedeno | — | isto |
| slike/favicon-32.png, favicon-180.png | Topijeva glava | izvedeno iz topi-meri-korpus.png | — | isto |

## Fotografije sa slobodnom licencom (Unsplash / Pexels / Pixabay / Poly Haven / ambientCG)

Nijedna nije preuzeta: mrežna politika sesije u kojoj je sajt pravljen blokirala je sve te servise (403), pa su galerija i pozadine napravljene isključivo od snimaka programa i CSS-a. Kad vlasnik doda fotografiju:

1. Preuzmi sa Unsplash/Pexels/Pixabay (licenca dozvoljava komercijalnu upotrebu bez navođenja autora, ali ga ovde navodimo) ili Poly Haven / ambientCG (CC0).
2. Sačuvaj u `slike/izvor/foto-<opis>.jpg`, pokreni `npm run slike`.
3. Dodaj red u ovu tabelu: datoteka · URL stranice slike · autor · licenca.
4. Ubaci u šablon (npr. `src/sablon/galerija.html`) sa `alt` tekstom iz JSON-a.

## Zadatak 5

| Datoteka | Šta je | Izvor | Licenca |
|---|---|---|---|
| slike/izvor/uzor-kuhinje.webp, uzor-plakari.webp, uzor-garderoberi.webp, uzor-komode.webp, uzor-custom.webp | ilustracija prostora za kartice „Šta sve možeš da projektuješ" (izvađene iz uzora `docs/predlog-dizajna/uzor-2/TOPICA_SVE_U_JEDNOM.html`) | ilustracija, obezbedio vlasnik | po dozvoli vlasnika; na sajtu piše da nisu snimci programa |
| slike/izvor/uzor-vrh.webp | pozadina vrha sa Topijem i laptopom (iz uzora) — NE objavljuje se sama | ilustracija, obezbedio vlasnik | isto |
| slike/izvor/vrh-topi-laptop.png | uzor-vrh + PRAVI snimak programa (snimak-41) u perspektivi preko ekrana laptopa (`skripte/vrh-slika.py`) | izvedeno | isto |
| slike/izvor/uzor-komoda-konfigurator.webp | AI slika komode iz uzora — NE objavljuje se (zamenjuje je živi 3D) | ilustracija, obezbedio vlasnik | isto |
| slike/izvor/konf-poster.png | poster konfiguratora: snimak 3D prikaza sajta (`skripte/poster.mjs`) | izvedeno | vlasništvo vlasnika |
| slike/dezeni/mat-oak.webp, mat-sonoma.webp, mat-walnut.webp (+ mini/) | teksture dezena Hrast natur, Hrast sonoma, Orah — iste datoteke kao u programu (TOPICA `public/dezeni/`) | ambientCG: Wood049, Wood014, Wood013 (https://ambientcg.com), po `docs/DEZENI-IZVORI.md` programa | CC0 1.0 |
| fontovi/inter-*.woff2 | font Inter (@fontsource-variable/inter 5.3.0); latin-ext sužen na Latin Extended-A + ș ț (fonttools pyftsubset) | npm | SIL OFL 1.1 (`fontovi/LICENSE-inter`), menjanje i sužavanje dozvoljeno |
| vendor/three.*.min.js, vendor/RoomEnvironment.js | three.js 0.185.1 (ista verzija kao program) | npm | MIT (`vendor/LICENSE-three`) |
