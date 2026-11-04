---
naslov: 32-es rendszer: miért 32 mm-enként vannak a furatok az európai bútorban
opis: A 32-es rendszer Ø5 mm-es furatsor 32 mm-es osztással, az első 37 mm-re az oldal elülső élétől. Honnan ered, hogyan jönnek belőle a polcok, pántok és sínek, és hogyan fúrják CNC nélkül.
datum: 2026-11-04
slika: ../slike/web/snimak-52-ruka-jedna-vrata-1600.webp
status: za-proveru
---

A 32-es rendszer (System 32) az a megállapodás, amely szerint a korpusz oldalába 5 mm átmérőjű furatokat fúrnak sorban, 32 mm-es osztással, úgy, hogy ugyanazokba a furatokba illeszkedjenek a polctartók, a pántok szerelőtalpai és a fióksínek. Nem törvény és nem pecsétes szabvány, hanem konvenció, amelyet a vasalatgyártók (Blum, Hettich, Grass, GTV) és a fúrógépgyártók tartanak. Aki betartja, bármelyiküktől vehet vasalatot, és az bele fog illeni a már kifúrt furatokba.

## Honnan éppen 32 mm

Az osztást nem azért választották, mert szép szám. Amikor a lapszerkezetes bútor Európában sorozatgyártásba ment, soklyukfúró gépeken fúrták: orsósor, amely egy lesüllyesztéssel kifúrja az egész furatsort. Az orsókat egymáshoz érő fogaskerekek hajtják, és a legkisebb tengelytáv, amelyre a fogaskerekeket akkor össze lehetett pakolni, 32 mm volt. A gép adta a rasztert, a vasalatgyártók pedig erre fektették a tartóikat, talpaikat és síneiket. Így lett a fogaskerekek osztásából a bútor osztása, és így maradt máig, a CNC-fúrókon is, amelyeknek erre az okra már nincs szükségük.

A **37 mm** az [oldal](../recnik/bok.html) elülső élétől az első sor tengelyéig a megállapodás másik része. A pánt szerelőtalpához és a sín elülső végéhez van hangolva, így ugyanaz a furatsor szolgálja a polcokat és a vasalatot is. A hátsó sor 37 mm-re van a hátsó éltől, vagy 37 + n·32-re az elülsőtől, hogy a sín mindkét végén a raszterbe feküdjön.

## Három szám, amit meg kell jegyezni

- **Ø5 mm**: a furat átmérője. A polctartó tüskéje közvetlenül bemegy, a pánt szerelőtalpát és a sínt az 5 mm-es furathoz való eurocsavarral csavarozzák.
- **32 mm**: a szomszédos furatok tengelytávolsága a sorban. Nem 30, nem 35; minden más osztás azt jelenti, hogy a polc ferdén áll, vagy a vasalat nem illeszkedik.
- **37 mm**: az elülső sor tengelye az oldal elülső élétől. A kész oldal élétől mérik, [élzárás](../recnik/kant.html) után.

## Mi vezetődik le a rendszerből

**Polcok.** A [polc](../recnik/polica.html) tartója az elülső és hátsó sor bármelyik furatába megy, így a polc 32 mm-es lépésben mozgatható. A vevő később maga helyezi át a polcot, és az vízszintes marad, mert mind a négy furat azonos magasságban van.

**Pántok.** A [kivetőpánt](../recnik/sarka.html) szerelőtalpát az elülső sorba csavarozzák, 37 mm-re. A Ø35-ös csészét a frontba fúrják 12,5–13 mm mélyre, a tengelye 21,5–22,5 mm-re a front élétől (K távolság 3-tól 6 mm-ig, a pánt katalógusa szerint). A pántok száma a front magassága szerint megy: 900 mm-ig kettő, 1600-ig három, 2000-ig négy, afölött öt. A csészék 100 mm-re vannak a front felső és alsó élétől, a többi egyenletesen közöttük.

**Sínek.** A sín elülső vége az elülső sorba megy, a hátsó a hátsó sorba. Ezért kell a hátsó sornak az elülső raszterében lennie; ha nincs, a sín ferdén áll, és a [fiók](../recnik/fioka-i-vodjica.html) súrlódik. A magasság, amelyre a sínt csavarozzák, a fiókrendszertől függ, és a gyártó utasításából veszik, de mindig a sor valamelyik furata.

## Hogyan fúrnak CNC nélkül

Nem gép kell hozzá, hanem sablon. A legegyszerűbb egy keményfa vagy alumínium léc Ø5-ös furatokkal pontosan 32 mm-enként, és egy ütközővel, amely az oldal elülső élére fekszik úgy, hogy az első sor 37 mm-re essen. Vannak kapható sablonok is acélpersellyel, amelyek nem fúródnak ki néhány hónap alatt, mint a fából készültek. Az eljárás mindig ugyanaz:

1. Oldal az asztalra, belső oldal felfelé, elülső él feléd.
2. A sablon ütközője az elülső élhez, a sablont magasságban ugyanúgy igazítsd a projekt minden oldalánál.
3. Fúrj mélységütközővel; az oldal 18 mm, és nincs tartalék.
4. A másik oldalt tükörben fúrd: az elülső él megint az ütközőhöz, a belső oldal megint felfelé.

A lépés, amely a legjobban megéri: a sablont készítsd hosszabbra, mint amennyi kell, és fúrd ki az egész oldalt egyszerre, áthelyezés nélkül. Minden áthelyezés alkalom arra, hogy a sor egy millimétert elszaladjon.

![600 × 720 × 560 mm-es alsó konyhai korpusz egy ajtóval és egy polccal a TOPICA programban; jobbra panel az ajtók számával, a „Pántok balra” jelöléssel és a polcok számával](../slike/web/snimak-52-ruka-jedna-vrata-1600.webp "Egy ajtó, egy polc: a program maga határozza meg a pántokat és a szerelőtalpakat a 32-es rendszer szerint.")

## Gyakori hibák

- **Rossz él.** A sor 37 mm-re a hátsó éltől fúrva az elülső helyett. A polc elfér, a pánt nem.
- **Az oldalak nem tükörképek.** Mindkét oldal ugyanarról az oldalról fúrva, így az egyiken kívül vannak a furatok. Szabály: belső oldal felfelé, elülső él az ütközőhöz, kivétel nélkül.
- **Összeadás mérőszalaggal.** Aki 32-t mér, aztán még 32-t, aztán még 32-t, furatonként fél milliméter hibát gyűjt össze. Egy nullától mérnek, vagy sablont használnak.
- **Átfúrt lap.** Mélységütköző nélkül a furat a díszoldalon jön ki. Különösen fáj a front dekorjában készült [takarólapon](../recnik/ukrasna-strana.html).
- **Más nulla a két oldalon.** A sablon a bal oldalon alulról támasztva, a jobbon felülről. A furatok 32 mm-enként vannak, de nem ugyanabban a magasságban.

## Hogyan csinálja a TOPICA

A program nem fúr, és nincs CNC-exportja; a feladata az, hogy a méretek pontosak legyenek, mielőtt a fúróhoz érsz. A pántokat a front magassága szerint számolja, a szerelőtalp helyét 37 mm-en tartja, a sínt a korpusz mélységében elférő legnagyobb névleges hosszként választja, és mindez kijön a vasalatlistában a [szabásjegyzék](./krojna-lista.html) mellett. Hogyan jutsz a helyiségtől eddig a listáig, az [így működik](../#kako-radi) részben látható.

A 32-es rendszer nem iskolai elmélet: ez az oka annak, hogy a polc, amelyet a vevő egy sorral feljebb tesz, vízszintes marad, és a pánt, amelyet két év múlva veszel, beleillik a régi furatba. Három szám és egy jó sablon az egész munka.
