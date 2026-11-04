---
naslov: Čo je nárezový plán a ako ho čítať
opis: Nárezový plán je zoznam všetkých dielcov jedného kusu nábytku s presnými rozmermi, hrúbkou, hranou a počtom kusov. Ako vyzerá, čo znamená „prvý rozmer = smer kresby“ a ako ho TOPICA vytvára automaticky.
datum: 2026-11-04
slika: ../slike/web/snimak-33-po-meri-1600.webp
---

Nárezový plán je papier (alebo tabuľka), ktorý ide z dielne k formátovacej píle. Je na ňom každý dielec jedného kusu nábytku: aký je dlhý, aký široký, aký hrubý, z akého materiálu, kde má hranu a koľko kusov treba. Kto reže dosky, nemusí vedieť, ako nábytok vyzerá; stačí mu plán. Preto je nárezový plán (niekde mu hovoria kusovník) najdôležitejší dokument medzi návrhom a hotovým nábytkom: keď je správny, všetko sedí; keď na papieri chýba 18 mm, chýba aj v kuchyni.

## Čo nárezový plán obsahuje

Pri plošnom nábytku (kuchyne, skrine, komody z LTD) nesie jeden riadok plánu zvyčajne šesť údajov:

- **Názov dielca** a ku ktorej skrinke patrí: bok, dno, polica, priečka, dvierka, chrbát.
- **Dĺžka × šírka** v milimetroch, čistý rozmer hotového dielca.
- **Hrúbka**: 18 mm na korpus a dvierka, 3 mm sololit na chrbát, 8–10 mm na dná zásuviek.
- **Materiál**: biela LTD, dekor dub, farebný sololit.
- **[Hrana](../recnik/kant.html)**: ktoré hrany sa olepujú a akou páskou (0,45 mm na korpus, 1 alebo 2 mm na dvierka).
- **Počet kusov**: dva boky, jedno dno, dve priečky.

Dobrý plán je zoskupený podľa materiálu a hrúbky, pretože tak sa dosky režú: najprv všetka biela LTD 18 mm, potom dvierka, nakoniec sololit.

## Prvý rozmer je smer kresby

Pri dekoroch s kresbou (dub, orech, sonoma) záleží na tom, ako dielec na doske leží. Nárezové plány preto držia jednu konvenciu: **prvý rozmer vždy beží v smere kresby (letokruhov)**. Dvierka 717 × 597 majú kresbu zvislo, ako majú dvierka mať. Zapísané ako 597 × 717 by mali kresbu vodorovne. Pri bielej LTD a sololite na tom nezáleží, preto program označí chrbát ako „bez smeru“.

## Príklad: spodná skrinka 600 × 720 × 560

Obyčajný spodný kuchynský [korpus](../recnik/korpus.html) s jednými dvierkami a jednou policou má osem dielcov. Dno sedí na bokoch (plná šírka 600), takže boky sú vysoké 702, nie 720. Hĺbka korpusu je 539, pretože z 560 sa odpočítajú dvierka (18) a chrbát (3).

| Dielec | Rozmer (mm) | Hr. | Hrana | Ks |
|---|---|---|---|---|
| Bok | 702 × 539 | 18 | 1 dlhá | 2 |
| Dno | 600 × 539 | 18 | 1 dlhá | 1 |
| Polica | 562 × 519 | 18 | 1 dlhá | 1 |
| Priečka | 564 × 100 | 18 | 2 dlhé | 2 |
| Dvierka | 717 × 597 | 18 | 2 dlhé, 2 krátke | 1 |
| Chrbát (sololit) | 717 × 597 | 3 | žiadna | 1 |

Každé z týchto čísel musí niekto spočítať. Pri jednej skrinke je to desať minút s ceruzkou. Pri kuchyni s dvanástimi skrinkami je to hodina a najmenej jedna chyba.

## Ako TOPICA zostavuje nárezový plán

V programe nárezový plán nepíšete: počíta sa zo skriniek, ktoré ste postavili do miestnosti. Zmeňte šírku skrinky zo 600 na 450 a všetkých osem dielcov dostane v tej chvíli nové rozmery, spolu s hranami, kovaním a cenou. Pohľad „Podľa rozmeru“ dá rovnaké rozmery na jeden riadok, zoskupené podľa materiálu, so značkou hrany a počtom kusov, presne tak, ako to ide na pílu. Tento pohľad skopírujete jedným kliknutím a pošlete ako správu alebo vytlačíte do PDF.

![Nárezový plán „Podľa rozmeru“ v programe TOPICA pre spodnú skrinku 600 × 720 × 560 mm: osem dielcov zoskupených podľa materiálu, s rozmerom, hrúbkou, hranou a počtom kusov](../slike/web/snimak-33-po-meri-1600.webp "Pohľad „Podľa rozmeru“ pre jednu skrinku: osem dielcov, tri materiály, 2,34 m² dosky.")

Pravidlo „prvý rozmer = smer kresby“ program stráži sám: dvierka sú vždy zapísané nastojato a sololit nesie značku „bez smeru“. Keď neskôr v nastaveniach dielne zmeníte hrúbku chrbta alebo hranu dvierok, zmena prejde každým dielcom v projekte, aj tými, ktoré ste si už pozreli.

Viac o tom, ktorá páska kam patrí, je v návode [Hrana: aká hrúbka kam patrí](./kant-debljina-i-duzina.html) a o rozmiestnení otvorov v [System 32](./sistem-32.html).

Nárezový plán nie je zložitý. Zložité je urobiť ho správne zakaždým, pre každú skrinku, po tom, čo si zákazník trikrát rozmyslel, čo chce. Na to je program.
