---
naslov: Élzárás: melyik vastagság hová megy (0,45 / 1 / 2 mm), és hogyan számolják a hosszát
opis: 0,45 mm élzáró a korpuszra, 1 mm a frontokra, 2 mm az erősebb élekre. Nettó méret élzárás után, és hogyan számolják a szalag hosszát 10 % hulladékkal.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Az élzáró szalag, legtöbbször ABS, amellyel a bútorlap vágott élét zárják le, hogy ne látsszon a lap belseje, és ne jusson bele nedvesség. A szalag vastagsága nem ízlés dolga: a vékony szalag az ajtón az első ütésnél leválik, a vastag szalag a belső polcon pedig kidobott pénz. Ez az útmutató megmondja, melyik vastagság hová megy, mely éleket zárják egyáltalán, mit jelent a „nettó méret élzárás után”, és hogyan számold ki, hány méter szalagot rendelj.

## Három vastagság, és melyik hová megy

| Szalag | Hová megy | Miért |
|---|---|---|
| **0,45 mm** | a [korpusz](../recnik/korpus.html) látszó élei és a [polc](../recnik/polica.html) elülső éle | az éleket nem ütik, a szalag csak zárja a lapot |
| **1 mm** | [frontok](../recnik/front.html), mind a négy él | az élt kézzel fogják és ütik, test kell neki |
| **2 mm** | frontok, ahol erősebb él kell, [munkalapok](../recnik/radna-ploca.html), gardróbajtók | a legjobban igénybe vett élek, a szalag lekerekített és ellenálló |

A 2 mm-es szalag közönséges frontokon is jobb, ha a vevő lágyabb, lekerekített élt akar; az ára magasabb, és gép kell, amely felragasztja. A korpuszon a 2 mm hiba: belül nem látszik, a fronttal való találkozás pedig olyan élt kap, amelyet senki sem kért.

## Mely éleket zárják, és melyeket nem

A szabály egyszerű: azt az élt zárják, amely látszik, vagy amelyet kézzel érintenek. A fal melletti él, a munkalap alatti él és a másik lappal találkozó él nem kap élzárót, mert a szalag ott csak zavarná az illesztést, és időt vinne. Egy közönséges alsó korpuszon ez így néz ki:

- **Oldal**: egy hosszú él, az elülső. A hátsó a falnál van, a felső a lap alatt, az alsó a padlón.
- **Fenéklap**: egy hosszú, az elülső.
- **Polc**: egy hosszú, az elülső. A polc beljebb van húzva, csak elölről látszik.
- **Heveder**: két hosszú. Az elülső heveder alulról látszik, amikor kinyílik az ajtó, ezért mindkettőt megkapja.
- **Front**: két hosszú és két rövid, mind a négy.
- **Hátfal** 3 mm-es farostlemezből: élzárás nélkül.

## Nettó méret élzárás után

A [szabásjegyzékben](./krojna-lista.html) a lap mérete **nettó, élzárás után**: ez a kész lap mérete felragasztott szalaggal, úgy, ahogy a korpuszba kerül. 0,45 mm-es szalagnál a különbség fél milliméter alatt van, és a gyakorlatban nem vonják le. 1 mm-nél és 2 mm-nél levonják: a front, amely a jegyzékben 717 × 597-ként áll, 1 mm-es szalaggal mind a négy élen 715 × 595-re vágódik, és élzárás után pontosan 717 × 597. Aki ezt elfelejti, minden oldalon 2 mm-rel nagyobb frontot kap, és az ajtók közötti 3 mm-es hézag eltűnik.

A „nettó élzárás után” megállapodás a programban alapértelmezett, és módosítható, ha a műhely fordítva dolgozik, de erről tudnia kell annak is, aki szab, és annak is, aki ragaszt.

## Hogyan számolják a szalag hosszát

Az élzáró hossza egy vastagsághoz **az adott vastagságú összes élzárt él összege, 10 % hulladékkal növelve**. A tíz százalék fedezi a szalag elejét és végét a gépen, a levágott darabokat és az esetenként kétszer élzárt élt. A százalék állítható; a kézi géppel dolgozó műhely általában többet vesz.

Példa: 600 × 720 × 560-as alsó korpusz, egy ajtó, egy polc, két heveder.

| Lap | Méret (mm) | Élzárás | Db | Szalaghossz |
|---|---|---|---|---|
| Oldal | 702 × 539 | 1 hosszú · 0,45 | 2 | 2 × 702 = 1404 |
| Fenéklap | 600 × 539 | 1 hosszú · 0,45 | 1 | 600 |
| Polc | 562 × 519 | 1 hosszú · 0,45 | 1 | 562 |
| Heveder | 564 × 100 | 2 hosszú · 0,45 | 2 | 2 × 2 × 564 = 2256 |
| Front | 717 × 597 | 2 hosszú, 2 rövid · 1 mm | 1 | 2 × 717 + 2 × 597 = 2628 |
| Hátfal | 717 × 597 | nincs | 1 | 0 |

Összeg a **0,45 mm**-es szalagra: 1404 + 600 + 562 + 2256 = **4822 mm**; 10 % hulladékkal 5304 mm, vagyis kb. **5,3 m**. Összeg az **1 mm**-es szalagra: **2628 mm**; hulladékkal 2891 mm, kb. **2,9 m**. Egy korpuszra összesen kb. 8,2 m szalag, két vastagság, két dekor. Egy tizenkét elemes konyha fiókokkal és felső sorral könnyen túllépi a száz métert, és itt a „szemre” becslés egy tekerccsel téved.

## Élzárásjelölések a szabásjegyzékben

Aki szab, annak nem kell tudnia, hová megy a lap, elég neki az élek jelölése. A program négyet használ:

- **1 hosszú**: a lap két hosszú éléből csak az egyik.
- **2 hosszú**: mindkét hosszú él, a rövidek csupaszok maradnak.
- **2 hosszú, 2 rövid**: mind a négy, jellemzően front.
- **nincs**: hátfal és farostlemez fiókfenék.

A „hosszú” a lap hosszabb oldalára vonatkozik, nem a jegyzék első méretére. Az első méret a szálirány, és fehér bútorlapnál nem számít, a hosszú él pedig mindig a kettő közül a nagyobb. A 702 × 539-es oldalnál a hosszú a 702, ez az elülső függőleges él; a 600 × 539-es fenéklapnál a hosszú a 600, az elülső vízszintes.

![„Méret szerint” táblázat a TOPICA programban egy korpuszhoz: hat lap fehér bútorlapból, front tölgy dekorban és farostlemez hátfal, az Élzárás oszlopban „1 hosszú”, „2 hosszú”, „2 hosszú, 2 rövid” és „nincs”](../slike/web/isecak-po-meri-tabela-1600.webp "Az Élzárás oszlop a szabásjegyzékben: élek jelölése, anyag szerint csoportosítva.")

## Hogyan csinálja a TOPICA

Az élzáró vastagságát egyszer adod meg a korpuszra és egyszer a frontokra a projektbeállításokban (alapértelmezés 0,45 és 1 mm, dekor „mint a lap”), a program pedig minden laphoz beírja, mely éleket zárják, és összeadja a hosszt vastagság és dekor szerint, az általad beállított hulladékkal. A szalag méterárát te írod be; a be nem írt nulla, a program nem találja ki. Az anyaglista az élzáróval ugyanannak a nézetnek a része, mint a szabásjegyzék, lásd a [funkciók](../#mogucnosti) részt és az [élzárás](../recnik/kant.html) címszót a szótárban.

Az élzáró apróság, amíg van belőle elég. Amikor az utolsó két frontnál elfogy, és a dekor másik gyártási tételből van, az apróságból még egy út lesz a beszállítóhoz.
