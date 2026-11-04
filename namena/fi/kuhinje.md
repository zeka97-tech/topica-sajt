---
naslov: Ohjelma mittatilauskeittiöille
opis: Keittiösuunnitteluohjelma puusepille: piirrät huoneen, asetat rungot luettelosta, saat 3D:n, millintarkan sahauslistan, helat ja hinnan. Windows, ilman nettiä.
datum: 2026-11-04
slika: ../slike/web/snimak-41-kuhinja-sonoma-bela-laminat-1600.webp
status: za-proveru
---

Keittiö on levykalusteiden vaativin työ: eniten kaappeja, eniten tyyppejä (allas, uuni, kulma, liesituuletin) ja asiakas, joka muuttaa päätöksiään asennuspäivään asti. TOPICA on tehty juuri tähän työhön. Piirrät huoneen, asetat rungot seinää vasten, ja ohjelma pitää rakenteen, sahauslistan ja hinnan oikeina, kun sinä puhut asiakkaan kanssa.

## Huone ensin, sitten rivi seinää vasten

Syötät seinät, kattokorkeuden, ikkunan ja missä vesi ja sähkö ovat. Sitten lasket rungot luettelosta: ne asettuvat seinää ja naapuria vasten, ja mittoja muutat livenä, millin tarkkuudella. Vakiomitat ovat jo ohjelmassa: alakaappi korkeudeltaan **720** **100 mm** säätöjaloilla, syvyydeltään **560** 600 työtason alla, ylärivi alareuna **1400 mm lattiasta**. Jos verstas tekee toisin, vaihdat kerran projektin asetuksissa, ei jokaisessa rungossa. Miten huone mitataan sitä ennen, lukee oppaassa [miten keittiö mitataan](../blog/kako-izmeriti-kuhinju.html), ja luvut on koottu [keittiön vakiomittoihin](../blog/standardne-mere-kuhinje.html).

## Erikoiskaapit, jotka jokaisessa keittiössä on

Keittiö ei ole rivi samanlaisia laatikoita. Ohjelman luettelossa on kaapit, jotka verstaalla tehdään toisin:

- [Allaskaappi](../recnik/sudopera-element.html): ilman takatukirimaa, jotta hajulukolle on tila; etutukirima jää.
- [Uunikaappi](../recnik/element-za-rernu.html): kalusteuunin syvennys vaatii vähintään 568 mm; ohjelma ilmoittaa, jos syvennys ei mahdu.
- [Kulmakaappi](../recnik/ugaoni-element.html): L kahdella haaralla, hyllyllä ja tuella.
- [Liesituuletin](../recnik/aspirator.html): alareuna 650 mm keittotason yläpuolella sähköllä, 750 kaasulla, valmistajan ohjeen mukaan.
- [Sokkeli](../recnik/cokla.html) ja [työtaso](../recnik/radna-ploca.html): tehdään valittujen runkojen päälle, yhdessä linjassa, ja kulkevat niiden mukana, kun siirrät niitä. Sokkeli on sisäänvedetty ja aina astianpesukoneen edessä.

## Esimerkki: 3200 mm alarivi

Seinä on 3200 pitkä. Asetat altaan 800, uunikaapin 600, laatikoston 600 ja kaksi ovellista kaappia 600. Niiden päälle neljä yläkaappia 800. Ohjelma johtaa jokaiselle rungolle levyt: sivut, pohjan sivujen alle, kaksi tukirimaa työtason alle, 3 mm kovalevytaustan, oven 1 mm reunanauhalla. Saranat se jakaa oven korkeuden mukaan (900 mm asti kaksi), kiskot ottaa rungon syvyyden mukaan, säätöjalkoja neljä per kaappi 800 mm leveyteen asti.

Asiakas sanoo sitten, että laatikosto olkoon 450 ja viereinen ovi 750. Muutat kaksi leveyttä. Jokainen levy näissä kahdessa rungossa saa uuden mitan, reunanauha ja helat lasketaan uudelleen, työtaso ja sokkeli pysyvät yhdessä 3200 mm linjassa. Ei ”laske uudelleen” -komentoa; [niin ohjelma toimii](../#kako-radi) alusta asti.

![Keittiö 3D:nä TOPICA-ohjelmasta: ala- ja ylärivi seinää vasten, ovet sonoma-dekoria ja valkoiset rungot, harmaa laminaatti lattialla](../slike/web/snimak-41-kuhinja-sonoma-bela-laminat-1600.webp "Sama projekti, joka antaa sahauslistan, näytettynä niin kuin asiakas sen ymmärtää.")

## Mitä saat lopuksi

Koko projektille: sahauslistan rungoittain ja materiaaleittain, ”Mitoittain”-näkymän kopioitavaksi ja lähetettäväksi sahaukseen, helaluettelon, levymenekin ja hinnan sinun levy-, reunanauha-, hela- ja työhinnoillasi. Kaikki saa PDF:ksi. Miten listaa luetaan ja miksi ensimmäinen mitta on syysuunta, on selitetty tekstissä [sahauslistasta](../blog/krojna-lista.html); täysi luettelo siitä, mitä ohjelma tekee, on [ominaisuuksissa](../#mogucnosti).

Keittiö tehdään edelleen käsin. Ohjelma huolehtii vain siitä, että jokainen niistä sadasta luvusta on oikein, kun lähdet sahaamaan.
