---
naslov: System 32: miksi eurooppalaisissa kalusteissa reiät ovat 32 mm välein
opis: System 32 (järjestelmä 32) on Ø5 mm reikärivi 32 mm jaolla, ensimmäinen 37 mm sivun etureunasta. Mistä se tulee, miten hyllyt, saranat ja kiskot johdetaan siitä ja miten porataan ilman CNC:tä.
datum: 2026-11-04
slika: ../slike/web/snimak-52-ruka-jedna-vrata-1600.webp
status: za-proveru
---

System 32 (järjestelmä 32) on sopimus, jonka mukaan rungon sivuun porataan halkaisijaltaan 5 mm reikiä riviin 32 mm välein niin, että samoihin reikiin asettuvat hyllynkannattimet, saranoiden pohjalevyt ja laatikkokiskot. Se ei ole laki eikä leimattu standardi, vaan käytäntö, josta helavalmistajat (Blum, Hettich, Grass, GTV) ja porakoneiden valmistajat pitävät kiinni. Joka noudattaa sitä, voi ostaa helat keneltä tahansa heistä, ja ne asettuvat reikiin, jotka hän on jo porannut.

## Miksi juuri 32 mm

Jakoa ei valittu siksi, että se olisi kaunis luku. Kun levykalusteiden sarjatuotanto Euroopassa alkoi, porattiin monikaraporakoneilla: karojen rivi, joka yhdellä laskulla poraa koko reikärivin. Karoja pyörittävät toisiaan koskettavat hammaspyörät, ja pienin akseliväli, johon hammaspyörät silloin saatiin pakattua, oli 32 mm. Kone antoi rasterin, ja helavalmistajat sovittivat siihen kannattimensa, pohjalevynsä ja kiskonsa. Niin hammaspyörien jaosta tuli kalusteiden jako, ja se on pysynyt tähän päivään, myös CNC-porakoneissa, jotka eivät sitä syytä enää tarvitse.

Mitta **37 mm** [sivun](../recnik/bok.html) etureunasta ensimmäisen rivin keskiöön on sopimuksen toinen osa. Se on sovitettu saranan pohjalevyyn ja kiskon etupäähän, joten sama reikärivi palvelee sekä hyllyjä että heloja. Takarivi on 37 mm takareunasta tai 37 + n·32 etureunasta, jotta kisko asettuu rasteriin molemmista päistään.

## Kolme lukua, jotka kannattaa muistaa

- **Ø5 mm**: reiän halkaisija. Hyllynkannattimen tappi menee suoraan sisään, saranan pohjalevy ja kisko ruuvataan 5 mm reikään tarkoitetulla euroruuvilla.
- **32 mm**: rivin vierekkäisten reikien keskiöväli. Ei 30, ei 35; jokainen muu väli tarkoittaa, että hylly on vinossa tai hela ei asetu.
- **37 mm**: eturivin keskiö sivun etureunasta. Mitataan valmiin sivun reunasta, [reunanauhan](../recnik/kant.html) jälkeen.

## Mitä järjestelmästä johdetaan

**Hyllyt.** [Hyllyn](../recnik/polica.html) kannatin menee mihin tahansa etu- ja takarivin reikään, joten hylly siirtyy 32 mm askelin. Asiakas siirtää hyllyn myöhemmin itse, ja se pysyy suorassa, koska kaikki neljä reikää ovat samalla korkeudella.

**Saranat.** [Saranan](../recnik/sarka.html) pohjalevy ruuvataan eturiviin, 37 mm kohdalle. Ø35 kuppi porataan oveen 12,5–13 mm syvyyteen, keskiö 21,5–22,5 mm oven reunasta (etäisyys K 3–6 mm, saranan luettelon mukaan). Saranoiden määrä menee oven korkeuden mukaan: 900 mm asti kaksi, 1600 asti kolme, 2000 asti neljä, sen yli viisi. Kupit ovat 100 mm oven ylä- ja alareunasta, muut tasavälein niiden välissä.

**Kiskot.** Kiskon etupää menee eturiviin, takapää takariviin. Siksi takarivin on oltava eturivin rasterissa; jos ei ole, kisko on vinossa ja [laatikko](../recnik/fioka-i-vodjica.html) hankaa. Korkeus, jolle kisko ruuvataan, riippuu laatikkojärjestelmästä ja otetaan valmistajan ohjeesta, mutta se on aina jokin rivin rei'istä.

## Miten porataan ilman CNC:tä

Et tarvitse konetta, tarvitset porausohjaimen. Yksinkertaisin on kovapuinen tai alumiininen rima, jossa on Ø5 reiät tarkalleen 32 mm välein ja vaste, joka nojaa sivun etureunaan niin, että ensimmäinen rivi osuu 37 mm kohdalle. On myös ostettavia ohjaimia teräsholkeilla, jotka eivät kulu puhki muutamassa kuukaudessa kuten puiset. Työjärjestys on aina sama:

1. Sivu pöydälle, sisäpuoli ylöspäin, etureuna itseäsi kohti.
2. Ohjaimen vaste etureunaa vasten, ohjain kohdistettuna korkeussuunnassa samalla tavalla projektin kaikille sivuille.
3. Poraa syvyysrajoittimella; sivu on 18 mm eikä varaa ole.
4. Toinen sivu porataan peilikuvana: etureuna taas vastetta vasten, sisäpuoli taas ylöspäin.

Askel, joka kannattaa eniten: tee ohjaimesta pidempi kuin tarvitset ja poraa koko sivu kerralla, siirtämättä. Jokainen siirto on tilaisuus rivin karata millimetrin.

![Keittiön alakaappi 600 × 720 × 560 mm yhdellä ovella ja yhdellä hyllyllä TOPICA-ohjelmassa; oikealla paneeli ovien määrällä, merkinnällä ”Saranat vasemmalla” ja hyllyjen määrällä](../slike/web/snimak-52-ruka-jedna-vrata-1600.webp "Yksi ovi, yksi hylly: ohjelma määrittää itse saranat ja pohjalevyt System 32:n mukaan.")

## Yleiset virheet

- **Väärä reuna.** Rivi porattu 37 mm takareunasta etureunan sijasta. Hylly sopii, sarana ei.
- **Sivut eivät ole peilikuvia.** Molemmat sivut porattu samalta puolelta, jolloin toisessa reiät ovat ulkopuolella. Sääntö: sisäpuoli ylöspäin, etureuna vastetta vasten, poikkeuksetta.
- **Mittanauhalla yhteenlaskien.** Joka mittaa 32, ja vielä 32, ja vielä 32, kerää puolen millin virheen per reikä. Mitataan yhdestä nollasta tai käytetään ohjainta.
- **Puhki porattu levy.** Ilman syvyysrajoitinta reikä tulee ulos koristepuolelta. Erityisen kipeää oven dekorissa olevassa [päätylevyssä](../recnik/ukrasna-strana.html).
- **Eri nolla kahdessa sivussa.** Ohjain vasemmassa sivussa alareunasta, oikeassa yläreunasta. Reiät ovat 32 mm välein, mutta eivät samalla korkeudella.

## Näin TOPICA tekee sen

Ohjelma ei poraa eikä siinä ole CNC-vientiä; sen työ on pitää mitat oikeina ennen kuin pääset porakoneelle. Saranat se laskee oven korkeuden mukaan, pohjalevyn paikan pitää 37 mm:ssä, kiskon valitsee suurimpana nimellispituutena, joka mahtuu rungon syvyyteen, ja kaikki tämä tulee helaluetteloon [sahauslistan](./krojna-lista.html) rinnalle. Miten huoneesta päästään siihen luetteloon, näkyy osiossa [näin se toimii](../#kako-radi).

System 32 ei ole kouluteoriaa: se on syy, miksi hylly, jonka asiakas siirtää yhden rivin, pysyy suorassa, ja sarana, jonka ostat kahden vuoden päästä, asettuu vanhaan reikään. Kolme lukua ja yksi hyvä ohjain ovat koko homma.
