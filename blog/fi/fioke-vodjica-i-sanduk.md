---
naslov: Laatikot: miten kisko valitaan ja laatikkorunko lasketaan
opis: Kuulakisko, rullakisko vai metallilaatikko — kuinka suuri välys per sivu, miten kiskon pituus valitaan ja miten laatikkorunko lasketaan 600 mm rungolle, tarkoin luvuin.
datum: 2026-11-04
slika: ../slike/web/snimak-13-korpus-sa-fiokama-1600.webp
status: za-proveru
---

Laatikko on etusarja plus laatikkorunko plus kisko, ja näiden kolmen osan on sovittava yhteen millin tarkkuudella. Etusarja näkyy, mutta laatikkorunko ja kisko ratkaisevat, liukuuko laatikko vai hankaako se. 2 mm virhe per sivu tarkoittaa, että laatikko ei mahdu tai että se heiluu. Tässä on järjestys, jossa verstaalla lasketaan laatikko tavalliselle 600 mm leveälle ala[rungolle](../recnik/korpus.html), kolmella useimmin ostetulla kiskotyypillä.

## Ensin vapaa aukko, sitten kaikki muu

Kaikki laatikon mitat lähtevät **vapaasta aukosta**: sivujen sisäpintojen välistä. 600 mm rungossa 18 mm lastulevysivuilla aukko on 600 − 2 × 18 = **564 mm**. Syvyyssuunnassa lasket rungon sisäsyvyydellä: 560 syvän rungon levyt ovat 539 mm syviä, koska 560:stä vähennetään ovi (18) ja kovalevytausta (3). Älä mittaa aukkoa oven yli äläkä unohda taustalevyä; nämä ovat kaksi yleisintä virhettä ennen kuin mitään on sahattu.

## Kolme kiskotyyppiä ja niiden välys

Välys on tila, jonka kisko vaatii laatikkorungon ja rungon sivun väliin, kummallakin puolella erikseen.

| Kisko | Välys per sivu | Pituudet | Mitä kantaa |
|---|---|---|---|
| Kuulakisko (teleskooppi) | **13 mm** | 250–550, 50 mm välein | puisen laatikkorungon (sivu 18 mm) |
| Rullakisko | **12,5 mm** | 250–500 | puisen laatikkorungon, kevyemmät laatikot |
| Metallilaatikko (Modern Box, PRO) | luettelon kaavan mukaan | PRO: NL 300–550 | omat sivunsa, sinä sahaat vain pohjan ja takasarjan |

Puisessa laatikkorungossa teet koko rungon: kaksi sivua, etu- ja takasarjan ja 3 mm kovalevypohjan. Metallilaatikossa sivut ovat tehdasvalmiit, ja sinä sahaat vain **pohjan ja takasarjan** valmistajan kaavalla. GTV Modern Boxin kaavat luettelosta: pohjan leveys = vapaa aukko − 86, pohjan pituus = NL − 24, takasarja = aukko − 97, laatikon korkeudet 68/83/146/210. Modern Box PRO: aukko − 75, NL − 24, aukko − 87, korkeudet 84/135/167/199.

## Kiskon pituus: suurin, joka mahtuu

Sääntö on yksinkertainen, ja ohjelma pitää sen samana: **kisko on suurin nimellispituus, joka mahtuu rungon syvyyteen**. 539 mm sisäsyvyyteen 550 kuulakisko ei mahdu, joten tulee **500**. Sama logiikka pätee rullakiskoon (500) ja metallilaatikkoon (NL 500). Joka ottaa 550, koska ”seinään asti on tilaa”, on unohtanut kovalevyn ja oven; kisko osuu silloin taustalevyyn tai työntää oven ulos.

## Esimerkki: runko 600 × 720 × 560, kolme laatikkoa

Aukko 564 mm, sisäsyvyys 539 mm, kisko 500.

**Kuulakisko, puinen laatikkorunko.** Laatikkorungon ulkoleveys on 564 − 2 × 13 = **538 mm**. Laatikon sivut ovat 18 mm lastulevyä, kiskon pituiset (500 mm, tavallinen käytäntö). Etu- ja takasarja menevät sivujen väliin: 538 − 36 = **502 mm**. 3 mm kovalevypohja on ohjelman säännön mukaan 3 mm kapeampi ja lyhyempi kuin laatikko: **535 × 497 mm**.

| Laatikkorungon levy | Mitta (mm) | Paks. | Kpl |
|---|---|---|---|
| Laatikon sivu | 500 × korkeus | 18 | 2 |
| Etu- / takasarja | 502 × korkeus | 18 | 2 |
| Pohja | 535 × 497 | 3 | 1 |

**Rullakisko.** 12,5 mm välys per sivu antaa laatikkorungon 564 − 25 = **539 mm**, jolloin etu- ja takasarja ovat 503 mm. Muu kuten yllä.

**Modern Box.** Pohja 564 − 86 = **478 mm** leveä ja 500 − 24 = **476 mm** pitkä; takasarja 564 − 97 = **467 mm** leveä. **Modern Box PRO**: pohja **489 × 476**, takasarja **477** mm. Takasarjan korkeus menee ostamasi laatikon korkeuden mukaan, luettelon taulukosta.

## Laatikon sivun korkeus

Puisen laatikkorungon sivun korkeus valitaan etusarjan korkeuden ja laatikon sisällön mukaan: kuulakiskoille tavallisia ovat M 85, K 120, C 150 ja F 180 mm, rullakiskoille 85/120/150. Ylin laatikko tukiriman alla saa yleensä matalimman rungon, alin korkeimman. Sääntö, jota ohjelma ei anna rikkoa: **laatikkorunko ei koskaan kulje yläpuolisen levyn läpi**. Alakaapissa työtason alla ylimmän laatikon päällä on kaksi 100 mm korkeaa tukirimaa, joten ylimmän laatikkorungon on mahduttava niiden alle riippumatta siitä, kuinka korkea etusarja on. [Laatikot](../recnik/fioka-i-vodjica.html) lasketaan ylhäältä, joten ”ensimmäinen laatikko” on aina se tukiriman alla.

## Yleiset virheet

- Välys vähennetty vain kerran molempien puolten sijasta: laatikkorunko 551 eikä 538, ei mahdu.
- Aukko mitattu rungon ulkoleveydestä (600) sivujen välin (564) sijasta.
- Kiskon pituus valittu rungon ulkosyvyyden (560) mukaan sisäsyvyyden (539) sijasta.
- Metallilaatikon kaava sovellettu laatikkorungon leveyteen eikä vapaaseen aukkoon.
- Unohtunut [ovirako](../recnik/zazor-fronta.html): 3 mm vierekkäisten etusarjojen välissä ja 1,5 mm kaapin reunaa kohti, jolloin laatikoiden etusarjat hankaavat toisiaan.
- Reunanauha: laatikon etusarja nauhoitetaan kaikista neljästä reunasta 1 mm nauhalla, puisen laatikkorungon sivut vain yläreunasta 0,45 mm; joka nauhoittaa rungon joka puolelta, muuttaa sen mittaa. Lisää [reunanauhaoppaassa](./kant-debljina-i-duzina.html).

## Näin TOPICA tekee sen

Ohjelmassa laatikkoa ei lasketa: napsautat rungossa ”Laatikot” plussalla ja miinuksella, annat määrän, ja laatikkorunko, pohja ja kisko johdetaan vapaasta aukosta ja syvyydestä yllä olevin säännöin. Kisko on oletuksena GTV, suurin mahtuva pituus; kun vaihdat rungon syvyyden 560:stä 500:aan, kisko ja laatikkorunko saavat uudet mitat, ja niiden kanssa [sahauslista](./krojna-lista.html).

![Alakaappi kolmella laatikolla 600 × 720 × 560 mm TOPICA-ohjelmassa: 3D-näkymä seinää vasten, paneeli laatikoiden määrällä ja reunanauhan, materiaalin ja vetimien valinnalla](../slike/web/snimak-13-korpus-sa-fiokama-1600.webp "Kolme laatikkoa yhdessä rungossa: määrän vaihdat napilla, laatikkorungon ja kiskon laskee ohjelma.")

Laatikko on keittiön kallein paikka virheelle, koska virhe näkyy vasta, kun kiskot on ruuvattu ja etusarja ripustettu. Siksi se lasketaan ennen sahausta, ei sen jälkeen.
