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
