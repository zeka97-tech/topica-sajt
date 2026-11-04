---
naslov: Reunanauha: mikä paksuus minne (0,45 / 1 / 2 mm) ja miten pituus lasketaan
opis: Reunanauha 0,45 mm runkoon, 1 mm oviin, 2 mm koville reunoille. Mitä nettomitta tarkoittaa ja miten nauhan pituus lasketaan 10 % hukalla, esimerkein.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Reunanauha on nauha, useimmiten ABS-muovia, jolla lastulevyn sahattu reuna suljetaan, jottei levyn sydän näy eikä kosteus pääse siihen. Nauhan paksuus ei ole makuasia: ohut nauha ovessa irtoaa ensimmäisestä kolhusta, ja paksu nauha sisähyllyssä on heitettyä rahaa. Tämä opas kertoo, mikä paksuus menee minne, mitkä reunat ylipäätään nauhoitetaan, mitä ”nettomitta reunanauhan jälkeen” tarkoittaa ja miten lasket, montako metriä nauhaa tilaat.

## Kolme paksuutta ja minne mikäkin menee

| Nauha | Minne | Miksi |
|---|---|---|
| **0,45 mm** | [rungon](../recnik/korpus.html) näkyvät reunat ja [hyllyn](../recnik/polica.html) etureuna | reunoihin ei kohdistu iskuja, nauha vain sulkee levyn |
| **1 mm** | [ovet](../recnik/front.html), kaikki neljä reunaa | reunaan tartutaan kädellä ja se saa kolhuja, se tarvitsee runkoa |
| **2 mm** | ovet, joihin halutaan vahvempi reuna, [työtasot](../recnik/radna-ploca.html), vaatekaapin ovet | kovimmin rasitetut reunat, nauha pyöristetty ja kestävä |

2 mm nauha on parempi myös tavallisissa ovissa, kun asiakas haluaa pehmeämmän, pyöristetyn reunan; hinta on korkeampi ja tarvitaan kone, joka sen liimaa. Rungossa 2 mm on virhe: sisällä se ei näy, ja liitos oveen saa reunan, jota kukaan ei pyytänyt.

## Mitkä reunat nauhoitetaan ja mitkä eivät

Sääntö on yksinkertainen: nauhoitetaan reuna, joka näkyy tai johon kosketaan. Seinää vasten olevaa reunaa, työtason alla olevaa reunaa ja toiseen levyyn liittyvää reunaa ei nauhoiteta, koska nauha vain haittaisi siellä kokoonpanoa ja veisi aikaa. Tavallisessa alakaapin rungossa se näyttää tältä:

- **Sivu**: yksi pitkä reuna, etureuna. Takareuna on seinää vasten, yläreuna tason alla, alareuna lattiassa.
- **Pohja**: yksi pitkä, etureuna.
- **Hylly**: yksi pitkä, etureuna. Hylly on sisäänvedetty, se näkyy vain edestä.
- **Tukirima**: kaksi pitkää. Eturima näkyy alhaalta, kun ovi avataan, joten se saa molemmat.
- **Ovi**: kaksi pitkää ja kaksi lyhyttä, kaikki neljä.
- **Taustalevy** 3 mm kovalevyä: ei nauhaa.

## Nettomitta reunanauhan jälkeen

[Sahauslistassa](./krojna-lista.html) levyn mitta on **netto reunanauhan jälkeen**: se on valmiin levyn mitta nauha liimattuna, sellaisena kuin se menee runkoon. 0,45 mm nauhalla ero on alle puoli millimetriä, eikä sitä käytännössä vähennetä. 1 mm ja 2 mm nauhalla vähennetään: ovi, joka on listassa 717 × 597 1 mm nauhalla kaikissa neljässä reunassa, sahataan 715 × 595:een, jolloin se on nauhoituksen jälkeen tarkalleen 717 × 597. Joka unohtaa tämän, saa oven, joka on 2 mm suurempi joka suuntaan, ja 3 mm rako ovien välistä katoaa.

Sopimus ”netto reunanauhan jälkeen” on ohjelman oletus, ja sen voi vaihtaa, jos verstas tekee toisinpäin, mutta siitä on tiedettävä sekä sen, joka sahaa, että sen, joka liimaa.

## Miten nauhan pituus lasketaan

Reunanauhan pituus yhdelle paksuudelle on **sen paksuuden kaikkien nauhoitettujen reunojen summa, korotettuna 10 % hukalla**. Kymmenen prosenttia kattaa nauhan alun ja lopun koneessa, poisleikatut palat ja silloin tällöin kahdesti nauhoitetun reunan. Prosentti on säädettävissä; käsikoneella työskentelevä verstas menee yleensä korkeammalle.

Esimerkki: alakaappi 600 × 720 × 560, yksi ovi, yksi hylly, kaksi tukirimaa.

| Levy | Mitta (mm) | Reuna | Kpl | Nauhan pituus |
|---|---|---|---|---|
| Sivu | 702 × 539 | 1 pitkä · 0,45 | 2 | 2 × 702 = 1404 |
| Pohja | 600 × 539 | 1 pitkä · 0,45 | 1 | 600 |
| Hylly | 562 × 519 | 1 pitkä · 0,45 | 1 | 562 |
| Tukirima | 564 × 100 | 2 pitkää · 0,45 | 2 | 2 × 2 × 564 = 2256 |
| Ovi | 717 × 597 | 2 pitkää, 2 lyhyttä · 1 mm | 1 | 2 × 717 + 2 × 597 = 2628 |
| Taustalevy | 717 × 597 | ei | 1 | 0 |

Summa **0,45 mm** nauhalle: 1404 + 600 + 562 + 2256 = **4822 mm**; 10 % hukalla 5304 mm, eli noin **5,3 m**. Summa **1 mm** nauhalle: **2628 mm**; hukalla 2891 mm, noin **2,9 m**. Yhdelle rungolle yhteensä noin 8,2 m nauhaa, kahta paksuutta, kahta dekoria. Kahdentoista kaapin keittiö laatikoineen ja yläriveineen ylittää helposti sata metriä, ja siinä ”silmämääräinen” arvio menee ohi rullan verran.

## Reunanauhan merkinnät sahauslistassa

Sahaajan ei tarvitse tietää, minne levy menee, reunojen merkintä riittää. Ohjelma käyttää neljää:

- **1 pitkä**: vain toinen levyn kahdesta pitkästä reunasta.
- **2 pitkää**: molemmat pitkät reunat, lyhyet jäävät paljaiksi.
- **2 pitkää, 2 lyhyttä**: kaikki neljä, tyypillisesti ovi.
- **ei**: taustalevyt ja laatikonpohjat kovalevystä.

”Pitkä” tarkoittaa levyn pidempää sivua, ei listan ensimmäistä mittaa. Ensimmäinen mitta on syysuunta, eikä sillä ole valkoisessa lastulevyssä väliä, mutta pitkä reuna on aina kahdesta suurempi. Sivussa 702 × 539 pitkä on 702, se on etummainen pystyreuna; pohjassa 600 × 539 pitkä on 600, etummainen vaakareuna.

![”Mitoittain”-taulukko TOPICA-ohjelmassa yhdelle rungolle: kuusi valkoista lastulevyä, ovi tammidekorissa ja kovalevytausta, Reuna-sarakkeessa ”1 pitkä”, ”2 pitkää”, ”2 pitkää, 2 lyhyttä” ja ”ei”](../slike/web/isecak-po-meri-tabela-1600.webp "Reuna-sarake sahauslistassa: reunojen merkintä, ryhmiteltynä materiaalin mukaan.")

## Näin TOPICA tekee sen

Reunanauhan paksuuden annat kerran rungolle ja kerran oville projektin asetuksissa (oletus 0,45 ja 1 mm, dekori ”kuten levy”), ja ohjelma merkitsee jokaiselle levylle nauhoitettavat reunat ja laskee pituuden paksuuksittain ja dekoreittain, säätämälläsi hukalla. Nauhametrin hinnan syötät sinä; syöttämätön on nolla, ohjelma ei keksi sitä. Materiaaliluettelo nauhoineen on osa samaa näkymää kuin sahauslista, katso osio [ominaisuudet](../#mogucnosti) ja sanaston termi [reunanauha](../recnik/kant.html).

Reunanauha on pikkuasia niin kauan kuin sitä riittää. Kun se loppuu viimeisten kahden oven kohdalla ja dekori on toisesta erästä, pikkuasiasta tulee vielä yksi ajo tukkurille.
