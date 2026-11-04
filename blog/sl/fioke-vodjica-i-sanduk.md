---
naslov: Predali: kako izbrati vodilo in izračunati škatlo
opis: Kroglično, kolesno ali kovinska škatla — kolikšna je reža na stran, kako se izbere dolžina vodila in kako se izračuna škatla predala za korpus 600 mm, s točnimi številkami.
datum: 2026-11-04
slika: ../slike/web/snimak-13-korpus-sa-fiokama-1600.webp
status: za-proveru
---

Predal je fronta plus škatla plus vodilo in ti trije deli se morajo ujeti na milimeter. Fronta se vidi, a škatla in vodilo odločata, ali predal drsi ali drgne. Napaka 2 mm na stran pomeni, da škatla ne gre noter ali da se maje. Tukaj je vrstni red, po katerem se v delavnici izračuna predal za običajen spodnji [korpus](../recnik/korpus.html) širine 600 mm, s tremi vrstami vodil, ki se najpogosteje kupujejo.

## Najprej svetla odprtina, potem vse drugo

Vse mere predala izhajajo iz **svetle odprtine**: razmika med notranjima stranema stranic. Pri korpusu 600 mm s stranicama iz iverke 18 mm je odprtina 600 − 2 × 18 = **564 mm**. Po globini računate z notranjo globino korpusa: korpus globine 560 ima plošče globoke 539 mm, ker se od 560 odštejeta fronta (18) in hrbtišče iz lesonita (3). Ne merite odprtine čez fronto in ne pozabite hrbtišča; to sta najpogostejši napaki, preden je karkoli odrezano.

## Tri vrste vodil in njihova reža

Reža je prostor, ki ga vodilo zahteva med škatlo in stranico korpusa, na vsaki strani posebej.

| Vodilo | Reža na stran | Dolžine | Kaj nosi |
|---|---|---|---|
| Kroglično teleskopsko | **13 mm** | 250–550, korak 50 | leseno škatlo (stranica 18 mm) |
| Kolesno | **12,5 mm** | 250–500 | leseno škatlo, lažje predale |
| Kovinska škatla (Modern Box, PRO) | po formuli iz kataloga | PRO: NL 300–550 | lastne stranice, vi režete samo dno in hrbtišče |

Pri leseni škatli naredite celotno škatlo sami: dve stranici, sprednjo in zadnjo ploščo ter dno iz lesonita 3 mm. Pri kovinski škatli so stranice tovarniške, vi pa režete samo **dno in hrbtišče** po formuli proizvajalca. Formule za GTV Modern Box iz kataloga: dno širina = svetla odprtina − 86, dno dolžina = NL − 24, hrbtišče = odprtina − 97, višine škatle 68/83/146/210. Za Modern Box PRO: odprtina − 75, NL − 24, odprtina − 87, višine 84/135/167/199.

## Dolžina vodila: največja, ki gre noter

Pravilo je preprosto in program se ga drži enako: **vodilo je največja nazivna dolžina, ki gre v globino korpusa**. Za notranjo globino 539 mm kroglično vodilo 550 ne gre noter, zato gre **500**. Enaka logika velja za kolesno (500) in za kovinsko škatlo (NL 500). Kdor vzame 550, ker „je prostor do stene“, je pozabil lesonit in fronto; vodilo takrat udarja v hrbtišče ali potiska fronto ven.

## Primer: korpus 600 × 720 × 560, trije predali

Odprtina 564 mm, notranja globina 539 mm, vodilo 500.

**Kroglično teleskopsko, lesena škatla.** Zunanja širina škatle je 564 − 2 × 13 = **538 mm**. Stranici škatle sta iz iverke 18 mm, dolgi kolikor vodilo (500 mm, običajna praksa). Sprednja in zadnja plošča škatle gresta med stranici: 538 − 36 = **502 mm**. Dno iz lesonita 3 mm je po pravilu programa 3 mm ožje in krajše od škatle: **535 × 497 mm**.

| Plošča škatle | Mera (mm) | Deb. | Kos |
|---|---|---|---|
| Stranica škatle | 500 × višina | 18 | 2 |
| Sprednja / zadnja plošča | 502 × višina | 18 | 2 |
| Dno | 535 × 497 | 3 | 1 |

**Kolesno.** Reža 12,5 mm na stran da škatlo 564 − 25 = **539 mm**, zato sta sprednja in zadnja plošča 503 mm. Ostalo kot zgoraj.

**Modern Box.** Dno 564 − 86 = **478 mm** široko in 500 − 24 = **476 mm** dolgo; hrbtišče 564 − 97 = **467 mm** široko. **Modern Box PRO**: dno **489 × 476**, hrbtišče **477** mm. Višina hrbtišča gre po višini škatle, ki ste jo kupili, po tabeli iz kataloga.

## Višina stranice škatle

Višina stranice lesene škatle se izbere po višini fronte in po tem, kaj gre v predal: za kroglična vodila so običajne M 85, K 120, C 150 in F 180 mm, za kolesna 85/120/150. Zgornji predal pod prečko običajno dobi najnižjo škatlo, spodnji najvišjo. Pravilo, ki ga program ne pusti prekršiti: **škatla nikoli skozi ploščo nad njo**. Pri spodnjem elementu pod delovnim pultom nad zgornjim predalom stojita dve prečki, visoki 100 mm, zato mora zgornja škatla iti pod njiju, ne glede na to, kako visoka je fronta. [Predali](../recnik/fioka-i-vodjica.html) se štejejo od zgoraj, zato je „prvi predal“ vedno tisti pod prečko.

## Pogoste napake

- Reža, odšteta samo enkrat namesto na obeh straneh: škatla 551 namesto 538, ne gre noter.
- Odprtina, merjena čez zunanjo širino korpusa (600) namesto med stranicama (564).
- Dolžina vodila, izbrana po zunanji globini korpusa (560) namesto po notranji (539).
- Formula kovinske škatle, uporabljena na širini škatle in ne na svetli odprtini.
- Pozabljena [reža fronte](../recnik/zazor-fronta.html): 3 mm med sosednjima frontama in 1,5 mm ob robu elementa, zato fronte predalov drgnejo druga ob drugo.
- Rob: fronta predala se obrobi na vseh štirih robovih s trakom 1 mm, stranici lesene škatle pa samo na zgornjem robu z 0,45 mm; kdor škatlo obrobi z vseh strani, ji spremeni mero. Več v vodniku [o robu](./kant-debljina-i-duzina.html).

## Kako to naredi TOPICA

V programu predala ne računate: na korpusu kliknete „Predali“ s plusom in minusom, vpišete, koliko jih je, škatla, dno in vodilo pa se izpeljejo iz svetle odprtine in globine po zgornjih pravilih. Vodilo je privzeto GTV, največja dolžina, ki gre noter; ko spremenite globino korpusa s 560 na 500, vodilo in škatla dobita nove mere, z njima pa tudi [razrezni seznam](./krojna-lista.html).

![Spodnji korpus s tremi predali 600 × 720 × 560 mm v programu TOPICA: 3D prikaz ob steni, plošča s številom predalov in izbiro roba, materiala in ročajev](../slike/web/snimak-13-korpus-sa-fiokama-1600.webp "Trije predali na enem korpusu: število spremenite z gumbom, škatlo in vodilo izračuna program.")

Predal je najdražje mesto za napako v kuhinji, ker se napaka vidi šele, ko so vodila privita in fronta obešena. Zato se računa pred rezanjem, ne po njem.
