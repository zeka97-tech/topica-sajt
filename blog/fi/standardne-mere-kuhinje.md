---
naslov: Keittiökaappien vakiomitat
opis: Taulukko keittiön vakiomitoista: ala- ja yläkaapit, korkeat kaapit, työtaso, sokkeli, etäisyys yläkaappeihin, leveydet. TOPICAn oletusarvot ja milloin poiketa.
datum: 2026-11-04
slika: ../slike/web/snimak-41-kuhinja-sonoma-bela-laminat-1600.webp
status: za-proveru
---

Keittiön vakiomitat eivät ole määräys vaan sopimus, josta jokainen projekti lähtee: korkeus, jolla on mukava työskennellä, syvyys, johon työtaso ja laite mahtuvat, leveydet, jotka sopivat lastulevyarkkiin ja kalustelaitteisiin. Joka osaa ne ulkoa, piirtää nopeammin ja erehtyy harvemmin; joka ei osaa, tekee keittiön, joka on teknisesti oikein eikä kenellekään mukava. Tässä ovat mitat, joita TOPICA-ohjelma käyttää oletuksina, sekä alue, jota ala pitää tavallisena.

## Taulukko: useimmin kysytyt mitat

| Kaappi / mitta | Oletus | Tavallinen alue | Huomautus |
|---|---|---|---|
| Ala[runko](../recnik/korpus.html), korkeus | 720 mm | — | ilman sokkelia ja työtasoa |
| Alarunko, syvyys | 560 mm | — | työtaso 600 |
| [Sokkeli](../recnik/cokla.html) / säätöjalat | 100 mm | 80–150 | muoviset säädettävät jalat |
| [Työtaso](../recnik/radna-ploca.html), paksuus | 38 mm | 28 / 40 | |
| Työtaso, syvyys | 600 mm | 620 / 635 | syvemmillä rungoilla |
| [Ylitys](../recnik/prepust-radne-ploce.html) oven yli | 20–30 mm | — | 560 + 18 + ylitys = 600 |
| Työtason korkeus lattiasta | 858 mm | 850–920 | 720 + 100 + 38 |
| Ylärunko, korkeus | 720 mm | 360, 900/920 | |
| Ylärunko, syvyys | 300–350 mm | — | |
| Yläkaappien alareuna lattiasta | 1400 mm | — | etäisyys tasosta ≈ 500–550 |
| Korkeat kaapit | 2000–2200 mm | — | jääkaappi, uuni + mikro, ruokakomero |
| Kaappien leveydet | 300–1200 mm | 150–1200 | tavalliset 300/400/450/500/600/800/900/1000/1200 |

Työtason korkeus lattiasta ja etäisyys yläkaappeihin ovat mittoja, jotka **säädetään käyttäjän pituuden mukaan**: 858 on oletusosien summa, ei sääntö. Pitkä ihminen saa 900 tai 920 nostamalla sokkelia tai runkoa, lyhyt menee 850:een laskemalla sokkelia. Ohjelma pitää nämä mitat projektin asetuksissa, joten vaihdat ne kerran koko alariville.

## Alakaapit

Alarunko on 720 korkea ja 560 syvä. Pohja menee sivujen alle, joten sivu on 702 ja levyn syvyys 539 (560 ilman ovea 18 ja taustalevyä 3). Työtason alla ei ole kantta vaan kaksi 100 mm [tukirimaa](../recnik/precka.html), etu- ja takarima; allaskaapissa ei ole takarimaa, jotta hajulukko mahtuu. Säätöjalkoja on neljä 800 mm leveyteen asti, kuusi sen yli. Leveys menee 150:stä 1200:aan, ja käytännössä valitaan sarjasta 300–1200, koska laitteet ja helat seuraavat näitä lukuja: astianpesukone 600, uuni kaapissa, jonka syvennys on vähintään 568 mm, allas 600–1000.

## Yläkaapit

Ylärunko on myös 720 korkea, syvyydeltään 300–350, kannella tukirimien sijasta. Matalampi 360 ylä tulee jääkaapin tai liesituulettimen päälle, korkeampi 900/920 kun katto sallii ja asiakas haluaa enemmän tilaa. Yläkaappien alareuna on 1400 mm lattiasta, mikä tason kanssa 858:ssa antaa noin 540 mm vapaata seinää; siihen väliin mahtuvat laatat, pistorasiat ja [liesituuletin](../recnik/aspirator.html), joka tulee keittotason yläpuolelle 650 mm sähköllä ja 750 kaasulla, valmistajan ohjeen mukaan.

## Korkeat kaapit ja ovet

Korkeat kaapit ovat 2000–2200 mm: integroitavalle jääkaapille, uunille ja mikrolle silmien korkeudella, hyllylliselle ruokakomerolle. Niiden yläreuna tasataan yleensä ylärivin kanssa, joten korkeus riippuu siitä, missä ylärivi on, ei toisinpäin.

Ovet seuraavat runkoa [raon](../recnik/zazor-fronta.html) kanssa: 3 mm vierekkäisten ovien välissä ja 1,5 mm kaapin reunaa kohti. 600 × 720 alarungon ovi on siksi 597 × 717, ja Gola- ja push-järjestelmissä raot menevät profiilin ja mekanismin mukaan.

![Keittiö TOPICA-ohjelmassa: alarivi laatikoilla ja ovilla, työtaso, ylärivi vapaan seinän yläpuolella, sonoma-dekori valkoisella lastulevyllä, laminaattilattia](../slike/web/snimak-41-kuhinja-sonoma-bela-laminat-1600.webp "Alarivi 720 + sokkeli 100 + taso 38, ylärivi 1400 lattiasta: oletusmitat yhdessä rivissä.")

## Milloin poiketa

- **Käyttäjän pituus.** Taso 858:ssa on keskimittaiselle; joka kokkaa kumarassa, saa selkäkipua, joka kokkaa kyynärpäät koholla, ei voi painaa veistä. Kysy, kuka kokkaa eniten ja kuinka pitkä hän on, ja säädä sokkelia tai rungon korkeutta.
- **Matala katto tai vino katto.** 720 ylärivi 1400:ssa vaatii 2120 mm; sen alle menee matalampi ylä tai pienempi etäisyys.
- **Ikkuna seinällä.** Työtasoa matalampi ikkunalauta määrää tason korkeuden, ei toisinpäin; ylä jätetään siitä pois.
- **Laitteet.** Uunin syvennys, astianpesukoneen korkeus jalkoineen ja jääkaapin syvyys ovat valmistajan ohjeen mittoja ja painavat enemmän kuin mikään taulukko.
- **Syvempi työtaso** (620/635), kun rungon takana kulkee putkia tai seinä on vino; ylitys kasvaa, runko pysyy 560:ssä.
- **Vanha asunto.** Seinä, joka heittää 20 mm kolmen metrin matkalla, syö yhden tavallisen leveyden; siihen tulee mittakaappi tai päätylevy, joka peittää raon.

## Näin TOPICA tekee sen

Kaikki taulukon mitat ovat projektin oletusarvoja: alarivin korkeus, sokkeli, tason paksuus ja ylärivin korkeus syötetään kerran, ja jokainen uusi runko perii ne. Kun vaihdat sokkelin 100:sta 120:een, koko alarivi nousee, 3D-näkymän mitat näyttävät uudet luvut, ja [sahauslista](./krojna-lista.html) pysyy samana, koska runko ei muuttunut. Mittakaapin kirjoitat suoraan leveyteen, korkeuteen ja syvyyteen, kuten osiossa [ominaisuudet](../#mogucnosti).

![Mitat alarungossa TOPICA-ohjelmassa: leveys 600, korkeus 720, syvyys 560 ja etäisyydet naapuriin, takaseinään ja lattiasta](../slike/web/isecak-kote-800.webp "Mitat livenä: leveys, korkeus, syvyys ja etäisyydet naapuriin ja seinään.")

Vakiomitat ovat hyvä alku ja huono loppu: aloita niistä, mutta lopeta ihmiseen, joka seisoo siinä keittiössä joka päivä.
