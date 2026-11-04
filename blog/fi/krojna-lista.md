---
naslov: Mikä sahauslista on ja miten sitä luetaan
opis: Sahauslista on luettelo kalusteen jokaisesta levystä mittoineen, paksuuksineen ja reunanauhoineen. Miltä se näyttää, mitä ”ensimmäinen mitta = syysuunta” on.
datum: 2026-11-04
slika: ../slike/web/snimak-33-po-meri-1600.webp
---

Sahauslista (eli osaluettelo) on se paperi tai taulukko, joka kulkee verstaalta levysahalle. Siinä on kalusteen jokainen levy: kuinka pitkä, kuinka leveä, kuinka paksu, mitä materiaalia, mihin reunanauha tulee ja montako kappaletta tarvitaan. Sen, joka sahaa levyt, ei tarvitse tietää, miltä kaluste näyttää; lista riittää. Siksi sahauslista on tärkein dokumentti suunnitelman ja valmiin kalusteen välissä: jos se on oikein, kaikki sopii; jos paperilta puuttuu 18 mm, ne puuttuvat myös keittiöstä.

## Mitä sahauslista sisältää

Levykalusteissa (keittiöt, vaatekaapit, lastulevystä tehdyt kaapistot) yksi listan rivi sisältää yleensä kuusi tietoa:

- **Levyn nimi** ja mihin runkoon se kuuluu: sivu, pohja, hylly, tukirima, ovi, tausta.
- **Pituus × leveys** millimetreinä, valmiin levyn nettomitta.
- **Paksuus**: 18 mm runkoon ja oviin, 3 mm kovalevy taustoihin, 8–10 mm laatikonpohjiin.
- **Materiaali**: valkoinen lastulevy, tammidekori, värillinen kovalevy.
- **[Reunanauha](../recnik/kant.html)**: mitkä reunat nauhoitetaan ja millä nauhalla (0,45 mm rungossa, 1 tai 2 mm ovissa).
- **Kappalemäärä**: kaksi sivua, yksi pohja, kaksi tukirimaa.

Hyvä lista on ryhmitelty materiaalin ja paksuuden mukaan, koska niin levyt sahataan: ensin kaikki valkoinen 18 mm lastulevy, sitten ovet, sitten kovalevy.

## Ensimmäinen mitta on syysuunta

Kuvioiduilla dekoreilla (tammi, pähkinä, sonoma) on väliä, miten levy asettuu arkille. Sahauslistat noudattavat siksi yhtä sopimusta: **ensimmäinen mitta kulkee aina syiden suuntaan**. 717 × 597 ovessa syyt kulkevat pystyyn, kuten oven kuuluukin. Kirjoitettuna 597 × 717 syyt kulkisivat vaakaan. Valkoisella lastulevyllä ja kovalevyllä tällä ei ole väliä, joten ohjelma merkitsee taustan ”ei syysuuntaa”.

## Esimerkki: alakaappi 600 × 720 × 560

Tavallisen keittiön alakaapin [rungossa](../recnik/korpus.html), jossa on yksi ovi ja yksi hylly, on kahdeksan levyä. Pohja on sivujen päällä (täysi leveys 600), joten sivut ovat 702 korkeita, eivät 720. Rungon syvyys on 539, koska ovi (18) ja tausta (3) vähennetään 560:stä.

| Levy | Mitta (mm) | Paks. | Reuna | Kpl |
|---|---|---|---|---|
| Sivu | 702 × 539 | 18 | 1 pitkä | 2 |
| Pohja | 600 × 539 | 18 | 1 pitkä | 1 |
| Hylly | 562 × 519 | 18 | 1 pitkä | 1 |
| Tukirima | 564 × 100 | 18 | 2 pitkää | 2 |
| Ovi | 717 × 597 | 18 | 2 pitkää, 2 lyhyttä | 1 |
| Tausta (kovalevy) | 717 × 597 | 3 | ei | 1 |

Jonkun on laskettava jokainen näistä luvuista. Yhdelle rungolle se on kymmenen minuuttia kynällä. Kahdentoista kaapin keittiölle se on tunti ja vähintään yksi virhe.

## Näin TOPICA rakentaa sahauslistan

Ohjelmassa et kirjoita sahauslistaa: se lasketaan huoneeseen asettamistasi rungoista. Muuta kaapin leveys 600:sta 450:een, ja kaikki kahdeksan levyä saavat uudet mitat sillä hetkellä, yhdessä reunanauhan, helojen ja hinnan kanssa. ”Mitoittain”-näkymä laittaa samat mitat yhdelle riville, materiaalin mukaan ryhmiteltynä, reunamerkinnällä ja kappalemäärällä, juuri niin kuin se menee sahalle. Sen näkymän kopioit yhdellä klikkauksella ja lähetät viestinä tai tulostat PDF:ksi.

![”Mitoittain”-sahauslista TOPICAssa 600 × 720 × 560 mm alakaapille: kahdeksan levyä ryhmiteltynä materiaalin mukaan, mittoineen, paksuuksineen, reunanauhoineen ja kappalemäärineen](../slike/web/snimak-33-po-meri-1600.webp "”Mitoittain”-näkymä yhdelle rungolle: kahdeksan levyä, kolme materiaalia, 2,34 m² levyä.")

Ohjelma pitää itse huolen säännöstä ”ensimmäinen mitta = syysuunta”: ovi kirjoitetaan aina pystyyn, ja kovalevy saa merkinnän ”ei syysuuntaa”. Jos muutat myöhemmin taustan paksuutta tai oven reunanauhaa verstaan asetuksissa, muutos kulkee läpi projektin jokaiseen levyyn, myös niihin, jotka jo katsoit.

Lisää siitä, mihin mikäkin nauha tulee, lukee oppaassa [Reunanauha: mikä paksuus minne](./kant-debljina-i-duzina.html), ja reikäjaosta oppaassa [System 32](./sistem-32.html).

Sahauslista ei ole monimutkainen. Monimutkaista on saada se oikein joka kerta, jokaiselle kaapille, sen jälkeen kun asiakas on muuttanut mieltään kolme kertaa. Sitä varten ohjelma on.
