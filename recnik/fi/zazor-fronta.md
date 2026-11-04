---
naslov: Ovirako
opis: Ovirako on vierekkäisten ovien väli (3 mm) ja etäisyys kaapin reunasta (1,5 mm). Miten oven mitta lasketaan, esimerkki 600 → 597, ja yleiset virheet.
datum: 2026-11-04
slika: ../slike/web/isecak-front-1600.webp
status: za-proveru
---

Ovirako on kahden vierekkäisen oven väli sekä oven ja kaapin reunan väli, joka jättää tilan ovien ja laatikoiden avautua hankaamatta. Ilman rakoa ovet koskettavat toisiaan, ja jokainen vinon lattian millimetri näkyy saumassa.

## Vakiomitat

- **3 mm** kahden vierekkäisen oven välissä (ohjelma).
- **1,5 mm** kaapin reunaa kohti, jolloin kaksi vierekkäistä runkoa antavat taas 3 mm oviensa väliin.
- Esimerkki: 600 mm leveä [runko](./korpus.html) yhdellä ovella → ovi **597 mm** (600 − 2 × 1,5); korkeus 720 → ovi **717 mm**.
- Kaksi ovea 800:ssa: 800 − 2 × 1,5 − 3 = 794, per ovi **397 mm**.
- [Gola-profiililla](./gola-rucka.html) raon sanelee profiili, [push-järjestelmässä](./push-sistem.html) se on suurempi työntimen liikkeen verran (noin 2–3 mm).

## Verstaalla

Rako sahataan oveen, ei jätetä asennukseen: ovi on aina runkoa pienempi raon verran, ja ovi säädetään jälkeenpäin saranasta syvyys-, sivu- ja korkeussuunnassa, jotta saumat ovat tasaiset. Yleinen virhe: ovi rungon täydessä mitassa (600 × 720), jolloin viereisten kaappien ovet hankaavat ja ne on sahattava, ja sahaus vie reunanauhan. Toinen: 3 mm rako ja vielä reunanauhan paksuus päälle; sahauslistan mitta on netto reunanauhan jälkeen, joten 597 tarkoittaa 597 nauhan kanssa. Kolmas: eri rako ylä- ja alarivissä, jolloin saumalinjat eivät ole päällekkäin.

![Oven leike TOPICA-ohjelmasta mittoineen ja rakoineen rungon reunaan](../slike/web/isecak-front-1600.webp "Ovi on runkoa pienempi raon verran joka puolelta.")

## Näin TOPICA tekee sen

Rako on yhdessä paikassa asetuksissa (3 / 1,5 mm), ja ohjelma laskee sen jokaisen [oven](./front.html) mittaan ja sahauslistaan; kun muutat oven jakoa, raot lasketaan uudelleen ([näin se toimii](../#kako-radi)).

Kolme millimetriä on pieni mitta, kunnes niitä ei ole.
