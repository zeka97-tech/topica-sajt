---
naslov: Asentajille ja niille, jotka sahauttavat muualla
opis: Ohjelma keittiöasentajille ja levypalvelussa sahauttaville: ”Mitoittain”-sahauslista kopioitavaksi, helat kappaleelta, projekti yhtenä tiedostona. Windows.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Yhä useampi tekijä toimii ilman omaa levysahaa: mittaa asiakkaan luona, tilaa sahauksen ja reunanauhoituksen levypalvelusta, ja kokoaa ja asentaa. Silloin sahauslista on ainoa paperi, joka menee sinun käsistäsi toisen käsiin. Jos se on oikein, palvelu ei soita; jos ei ole, virhe näkyy vasta asennuksessa. TOPICA tekee tuon listan projektista, ei vihkostasi.

## Lista, jonka palvelu ymmärtää

”Mitoittain”-näkymä antaa samat mitat yhdellä rivillä, ryhmiteltynä materiaalin ja paksuuden mukaan, [reunanauhan](../recnik/kant.html) merkinnällä ja kappalemäärällä, juuri niin kuin sahataan: ensin valkoinen lastulevy 18 mm, sitten ovet, sitten kovalevy. Ensimmäinen mitta on syysuunta, joten ovet on kirjattu pystyyn ja kovalevy kantaa merkinnän ”ei syysuuntaa”; palvelun ei tarvitse arvata, miten kuvio on käännetty. Mitat ovat nettoa, reunanauhan jälkeen, mikä on ohjelman oletus ja kannattaa sanoa palvelulle ensimmäisessä viestissä. Listan kopioit yhdellä napsautuksella ja lähetät viestinä tai sähköpostilla, tai tulostat PDF:ksi. Mitä jokainen rivi tarkoittaa, lukee sanastossa kohdassa [sahauslista](../recnik/krojna-lista.html).

## Esimerkki: mitä viestiin menee

Alakaappi 600 × 720 × 560 ovella ja hyllyllä, kahdeksan levyä:

| Levy | Mitta (mm) | Paks. | Reuna | Kpl |
|---|---|---|---|---|
| Sivu | 702 × 539 | 18 | 1 pitkä | 2 |
| Pohja | 600 × 539 | 18 | 1 pitkä | 1 |
| Hylly | 562 × 519 | 18 | 1 pitkä | 1 |
| Tukirima | 564 × 100 | 18 | 2 pitkää | 2 |
| Ovi | 717 × 597 | 18 | 2 pitkää, 2 lyhyttä | 1 |
| Tausta (kovalevy) | 717 × 597 | 3 | ei | 1 |

Kahdentoista kaapin keittiö on satakunta tällaista riviä. Ohjelma kokoaa ne kaikille rungoille yhdessä ja antaa niiden rinnalle levyjen kokonaismenekin m²:nä ja reunanauhan pituuden 10 % hukalla, joten tiedät, montako arkkia ja montako metriä nauhaa tilaat.

![”Mitoittain”-taulukko TOPICA-ohjelmasta: levyrivit mitalla millimetreinä, paksuudella, reunanauhan merkinnällä ja kappalemäärällä, ryhmiteltynä materiaalin mukaan](../slike/web/isecak-po-meri-tabela-1600.webp "Tältä näyttää se, minkä kopioit ja lähetät sahaukseen.")

## Helat ja materiaali ennen kauppaan lähtöä

Asentaja ostaa helat itse ja ostaa ne kerran. Ohjelma antaa levylistan rinnalle myös helaluettelon: [saranat](../recnik/sarka.html) oven korkeuden mukaan (900 mm asti kaksi, 1600 asti kolme), [kiskot](../recnik/fioka-i-vodjica.html) suurimpana nimellispituutena, joka mahtuu rungon syvyyteen, säätöjalat neljä per kaappi 800 mm leveyteen asti ja kuusi sen yli, hyllynkannattimet System 32:n mukaan. Mitään näistä et kopioi piirustuksesta.

## Projekti on yksi tiedosto

Ei tiliä eikä palvelinta: projekti on tiedosto koneellasi. Lähetät sen sahaavalle kollegalle, viet läppärillä asennukseen ja avaat siellä 3D:n mitoilla seinään, naapuriin ja lattiasta, ja näytät asiakkaalle, mihin mikäkin tulee, ennen kuin poraat ensimmäisen reiän. Miten tila mitataan, jotta lista on oikein, lukee oppaassa [miten keittiö mitataan](../blog/kako-izmeriti-kuhinju.html); mitä muuta ohjelma antaa, on [ominaisuuksissa](../#mogucnosti).

## Mitä ohjelma ei tee tässä versiossa

Se ei tee CNC-tiedostoa eikä sahaussuunnitelmaa (nestingiä). Sen tekee palvelu omalla ohjelmallaan ja omalla sahallaan; se tarvitsee tarkan listan, ja sen saat. Koko matka huoneesta siihen listaan on [kolme askelta](../#kako-radi).

Tee seuraava lista palvelulle ohjelmassa, ja vertaa sitä vihkosta tehtyyn.
