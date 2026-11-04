---
naslov: Mitä mittatilauskeittiö maksaa — miten puuseppä laskee hinnan
opis: Mittatilauskeittiön hinta: materiaali per m², reunanauha metriltä, helat kappaleelta, työ ja kate. Mitä unohdetaan ja miten ohjelma laskee puusepän hinnoista.
datum: 2026-11-04
slika: ../slike/web/snimak-37-cena-1600.webp
status: za-proveru
---

Mittatilauskeittiön hinta ei ole yksi luku päästä vaan viiden erän summa: materiaali, reunanauha, helat, työ ja kate. Joka laskee näin, tietää, miksi hinta on se mikä on, ja voi puolustaa sitä asiakkaan edessä. Joka laskee ”juoksumetriltä” silmämääräisesti, selviää hyvin yksinkertaisesta keittiöstä ja häviää sellaisessa, jossa on laatikoita ja korkeita kaappeja. Tässä ei ole hintoja euroissa, koska jokaisella verstaalla on omansa; tässä on tapa, jolla ne hinnat ladotaan yhteen.

## 1. Materiaali: levyneliöt, lajeittain

Ensin lasketaan jokaisen levylajin neliömetrit erikseen, koska ne myös ostetaan erikseen: valkoinen [lastulevy](../recnik/iverica.html) 18 mm runkoihin, dekori 18 mm oviin, kovalevy 3 mm taustoihin ja laatikonpohjiin, työtaso 38 mm juoksumetriltä. Neliömäärä saadaan [sahauslistasta](./krojna-lista.html): pituus × leveys × kappaleet, summattuna materiaaleittain. Esimerkki ohjelmasta: yhdessä alakaapissa 600 × 720 × 560 on 8 levyä ja 2,34 m² levyä, siitä 1,48 m² valkoista lastulevyä, 0,43 m² dekoria oveen ja 0,43 m² kovalevyä.

Tämä neliömäärä on netto. Arkkia ei käytetä kokonaan: tavalliset arkkimitat ovat 2800 × 2070 mm tai 2750 × 1830 mm, ja sahauksen jälkeen jää hukkaa sahausraoista, reunoista ja paloista, jotka eivät mahdu mihinkään. Realistinen **arkin käyttöaste on noin 80 %**, joten jaat nettoneliöt 0,8:lla saadaksesi, kuinka paljon levyä oikeasti ostat. 10 m² nettoa valkoista lastulevyä vaativa keittiö tarvitsee noin 12,5 m² ostettua levyä. Joka laskuttaa vain neton, maksaa hukan omasta taskustaan.

## 2. Reunanauha: juoksumetrit plus hukka

[Reunanauha](../recnik/kant.html) lasketaan juoksumetriltä, erikseen jokaiselle paksuudelle, koska hinnatkin eroavat: 0,45 mm rungon ja hyllyjen näkyviin reunoihin, 1 mm oviin kaikkiin neljään reunaan, 2 mm kovemmin rasitettuihin reunoihin. Pituus on sahauslistan kaikkien nauhoitettujen reunojen summa plus **10 % hukkaa** nauhan alkuun ja loppuun ja hylkyyn. Yksi ovi 717 × 597 vie yksin 2,63 m 1 mm nauhaa; kahdellekymmenelle ovelle se on yli 50 m, mikä ei ole pikkuasia. Yksityiskohdat ovat oppaassa [reunanauhan paksuudesta ja pituudesta](./kant-debljina-i-duzina.html).

## 3. Helat: kappaleelta, luettelosta

Helat lasketaan, ei arvioida. Tavallisen keittiön luettelo: saranat (900 mm asti korkea ovi kantaa 2, 1600 asti kolme, 2000 asti neljä), kiskot tai metallilaatikot per laatikko, säätöjalat (4 kpl 800 mm leveyteen asti, 6 sen yli), vetimet per ovi, epäkeskot ja puutapit tai Confirmatit per liitos, sokkeliklipsit, yläkaappien ripustimet, hyllynkannattimet. Jokaisella erällä on kappalehinta toimittajan luettelosta ja kappalemäärä projektista. Laatikot ovat tässä kalleimmat: yksi kaappi kolmella metallilaatikolla maksaa heloissa enemmän kuin kolme ovellista kaappia.

## 4. Työ: per kaappi tai per oven neliö

Kaksi tavallista tapaa. **Per kaappi**: jokainen runko, ala tai ylä, kantaa saman työsumman, ja monimutkaisemmat (laatikot, kulma, uuni) lisän. Yksinkertainen ja nopea, hyvä rivikeittiöihin. **Per oven m²**: työ lasketaan ovien neliömäärästä, jolloin iso vaatekaappi kantaa enemmän kuin pieni yläkaappi. Tarkempi vaatekaapeille ja korkeille kaapeille. Kumman valitsetkin, työhön kuuluvat sahaus, reunanauhoitus, poraus, kokoaminen ja koeasennus verstaalla. Asennus asiakkaan luona on erillinen erä, katso alla.

## 5. Kate

Materiaalin, reunanauhan, helojen ja työn summaan tulee **kate prosentteina**. Se ei ole puusepän palkka, koska työ on jo maksettu; se kattaa sen, mikä ei näy projektissa: työkalut, sähkön, kuluvat koneet, päivät ilman töitä ja riskin, että jokin menee pieleen. Verstas, joka toimii ilman katetta, tekee työtä palkasta, ei itselleen.

## Mitä ihmiset unohtavat

- **Kuljetus**: levyt toimittajalta verstaalle, valmiit kaapit asiakkaalle, kaksi kertaa pakettiauto.
- **Asennus**: päivä tai kaksi asiakkaan luona, kantamista kerrokseen, vaaitusta, altaan ja keittotason aukot valmistajan sapluunan mukaan.
- **Hukka**: ne 20 % arkista ja 10 % reunanauhasta; ja kovalevy, jonka kaikki unohtavat, koska se on halpaa.
- **Muutokset**: asiakas, joka vaihtaa dekoria kolme kertaa tai lisää laatikon; jokainen muutos on uusi laskelma ja, jos levy on jo sahattu, uusi levy.
- **Pikkutavara**: ruuvit, tapit, liima, silikoni, työtason listat, seinälista; yksittäin ei mitään, yhdessä huomattavaa.
- **Palvelut**: sahaus ja reunanauhoitus toisella, jos omia koneita ei ole.
- **Laitteet ja työtaso**: kuka hankkii, kuka asentaa ja kuka vastaa, jos aukko ei sovi.

Jolla on lista, ei ole yllätyksiä; jolla ei ole, näkee ne työn lopussa, kun on liian myöhäistä laskuttaa.

## Näin TOPICA tekee sen

Ohjelma ei tunne hintojasi eikä keksi niitä. **Verstaan asetuksissa**, kohdassa ”Materiaalit ja hinnat”, syötät levyjen hinnan lajeittain, reunanauhan metriltä jokaiselle paksuudelle (0,4; 0,45; 0,8; 1 ja 2 mm), helat kappaleelta, **työn per kaappi** ja **katteen** prosentteina. Kentässä, jota et täyttänyt, lukee ”ei syötetty”, ja se lasketaan nollana, ilman varoitusta, joten raportin hinnassa ei koskaan ole lukua, jota et itse antanut. Kun hinnat on kerran syötetty, ohjelma laskee jokaiselle projektille neliöt materiaaleittain, reunanauhametrit hukan kanssa, helat kappaleelta ja työn per kaappi, lisää katteen ja antaa Raporttien ”Hinta”-välilehdellä projektin hinnan, ”Materiaalit”- ja ”Helat”-välilehtien rinnalla, joista näkyy, mistä se koostuu. Muutat kaapin leveyttä tai lisäät laatikon, hinta muuttuu samalla hetkellä. Katsaus siihen, mitä kaikkea ohjelma antaa, on osiossa [Ominaisuudet](../#mogucnosti).

![Verstaan asetukset TOPICA-ohjelmassa, osio ”Hinta ja tarjous”: kentät työlle per kaappi ja katteelle prosentteina, reunanauhalle metriltä 0,4–2 mm ja liesituulettimen osille, syöttämättömät kentät merkitty ”ei syötetty”](../slike/web/snimak-37-cena-1600.webp "Hinnat syöttää puuseppä, kerran verstaalle; syöttämätön on nolla, ohjelma ei oleta mitään.")

Mittatilauskeittiön hinta on summa, jonka voit näyttää paperilla, erä erältä. Kun ohjelma laskee sen hinnoistasi, sinulle jää vain se, mitä ohjelma ei voi: arvioida asiakas ja päättää, kuinka paljon haluat sen työn.
