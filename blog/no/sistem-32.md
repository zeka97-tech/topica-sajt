---
naslov: System 32: hvorfor europeiske møbler har hull på 32 mm
opis: System 32 er en rad hull Ø5 mm med 32 mm avstand, det første 37 mm fra sidens forkant. Hvor det kommer fra, hvordan hyller, hengsler og skinner hentes fra det, og hvordan du borer uten CNC.
datum: 2026-11-04
slika: ../slike/web/snimak-52-ruka-jedna-vrata-1600.webp
status: za-proveru
---

System 32 er en avtale om at det bores hull med 5 mm diameter i en rad på skrogets side, med 32 mm avstand, slik at hyllebærere, hengselplater og skuffeskinner passer i de samme hullene. Det er verken lov eller standard med stempel, men en konvensjon beslagprodusentene (Blum, Hettich, Grass, GTV) og maskinprodusentene holder seg til. Den som følger den, kan kjøpe beslag fra hvem som helst av dem, og det passer i hullene som allerede er boret.

## Hvorfor akkurat 32 mm

Avstanden ble ikke valgt fordi det er et pent tall. Da platemøbler i Europa gikk over til serieproduksjon, ble de boret på flerspindelbormaskiner: en rekke spindler som borer hele hullraden i én senking. Spindlene drives av tannhjul som griper i hverandre, og den minste senteravstanden tannhjulene den gang kunne pakkes på, var 32 mm. Maskinen ga rasteret, og beslagprodusentene la hyllebærere, monteringsplater og skinner oppå det. Slik ble tannhjulsavstanden til møbelavstanden, og den har holdt seg til i dag, også på CNC-maskiner som ikke lenger trenger den grunnen.

Målet **37 mm** fra [sidens](../recnik/bok.html) forkant til senter av den første raden er den andre delen av avtalen. Det er tilpasset hengselets monteringsplate og skinnens fremre ende, så den samme hullraden tjener både hyller og beslag. Den bakre raden ligger 37 mm fra bakkanten eller på 37 + n·32 fra forkanten, så skinnen treffer rasteret i begge ender.

## Tre tall å huske

- **Ø5 mm**: hulldiameteren. Hyllebærerens tapp går rett inn, hengselplaten og skinnen skrus med euroskrue beregnet for 5 mm hull.
- **32 mm**: avstanden mellom sentrene på nabohullene i raden. Ikke 30, ikke 35; enhver annen avstand betyr at hyllen står skjevt eller at beslaget ikke passer.
- **37 mm**: senter av den fremre raden fra sidens forkant. Måles fra kanten på den ferdige siden, etter [kantlisten](../recnik/kant.html).

## Hva som avledes fra systemet

**Hyller.** [Hyllens](../recnik/polica.html) bærer går i et hvilket som helst hull i fremre og bakre rad, så hyllen flyttes i trinn på 32 mm. Kunden flytter hyllen selv senere, og den blir stående plant fordi alle fire hullene ligger i samme høyde.

**Hengsler.** [Hengselets](../recnik/sarka.html) monteringsplate skrus i den fremre raden, på 37 mm. Koppen Ø35 bores i fronten til 12,5–13 mm dybde, med senter 21,5–22,5 mm fra frontkanten (avstand K fra 3 til 6 mm, etter hengselkatalogen). Antall hengsler følger fronthøyden: til 900 mm to, til 1600 tre, til 2000 fire, over det fem. Koppene sitter 100 mm fra frontens over- og underkant, resten jevnt fordelt imellom.

**Skuffeskinner.** Skinnens fremre ende går i den fremre raden, den bakre i den bakre raden. Derfor må den bakre raden ligge i raster med den fremre; gjør den ikke det, står skinnen skrått og [skuffen](../recnik/fioka-i-vodjica.html) skurer. Høyden skinnen skrus i, avhenger av skuffesystemet og hentes fra produsentens anvisning, men det er alltid ett av hullene i raden.

## Slik borer du uten CNC

Du trenger ikke maskin, du trenger en mal. Den enkleste er en list av hardt tre eller aluminium med hull Ø5 på nøyaktig 32 mm og et anlegg som legger seg mot sidens forkant slik at den første raden havner på 37 mm. Det finnes også kjøpemaler med stålhylser, som ikke bores opp etter noen måneder slik de av tre gjør. Fremgangsmåten er alltid den samme:

1. Siden på benken, innsiden opp, forkanten mot deg.
2. Malens anlegg mot forkanten, malen rettet inn i høyden på samme måte for alle sidene i prosjektet.
3. Bor med dybdestopp; siden er 18 mm og har ingen reserve.
4. Den andre siden bores speilvendt: forkanten igjen mot anlegget, innsiden igjen opp.

Trinnet som lønner seg mest: lag malen lengre enn du trenger og bor hele siden i ett, uten å flytte. Hver flytting er en anledning for raden til å stikke av med en millimeter.

![Benkeskrog 600 × 720 × 560 mm med én dør og én hylle i TOPICA; til høyre panel med antall dører, merket «Hengsler venstre» og antall hyller](../slike/web/snimak-52-ruka-jedna-vrata-1600.webp "Én dør, én hylle: programmet bestemmer selv hengsler og monteringsplater etter System 32.")

## Vanlige feil

- **Feil kant.** Raden boret 37 mm fra bakkanten i stedet for forkanten. Hyllen passer, hengselet ikke.
- **Sidene er ikke speilvendt.** Begge sidene boret fra samme side, så den ene har hullene på utsiden. Regel: innsiden opp, forkanten mot anlegget, uten unntak.
- **Summering med målebånd.** Den som måler 32, og så 32, og så 32, samler opp en halv millimeter feil per hull. Mål fra ett nullpunkt eller bruk mal.
- **Gjennomboret plate.** Uten dybdestopp kommer hullet ut på pyntesiden. Det svir særlig på en [dekkside](../recnik/ukrasna-strana.html) i frontens dekor.
- **Ulikt nullpunkt på de to sidene.** Malen lagt an fra bunnen på venstre side, fra toppen på høyre. Hullene står på 32 mm, men ikke i samme høyde.

## Slik gjør TOPICA det

Programmet borer ikke og har ingen CNC-eksport; jobben dets er at målene er riktige før du kommer til bormaskinen. Hengslene regner det ut etter fronthøyden, monteringsplatens posisjon holder det på 37 mm, skinnen velger det som den største nominelle lengden som får plass i skrogdybden, og alt dette kommer ut i beslagslisten ved siden av [kapplisten](./krojna-lista.html). Hvordan du kommer fra rommet til den listen, ser du i avsnittet [slik virker det](../#kako-radi).

System 32 er ikke skoleteori: det er grunnen til at hyllen kunden flytter én rad blir stående plant, og at hengselet du kjøper om to år passer i det gamle hullet. Tre tall og én god mal er hele jobben.
