---
naslov: Szerelőknek és azoknak, akik máshol szabatnak
opis: Program konyhaszerelőknek és lapszabászatban szabató mestereknek: „Méret szerint” szabásjegyzék másolásra, vasalat darabonként, a projekt egy fájl. Windows.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Egyre több mester dolgozik saját lapszabászgép nélkül: felmér a vevőnél, megrendeli a szabást és az élzárást a lapszabászatban, aztán összeszerel és beszerel. Itt a szabásjegyzék az egyetlen papír, amely a te kezedből másokéba kerül. Ha pontos, a lapszabászat nem hív; ha nem az, a hiba csak a beszerelésnél látszik. A TOPICA ezt a jegyzéket a projektből készíti, nem a füzetedből.

## Jegyzék, amelyet a lapszabászat ért

A „Méret szerint” nézet az azonos méreteket egy sorba teszi, anyag és vastagság szerint csoportosítva, az [élzárás](../recnik/kant.html) jelölésével és a darabszámmal, pontosan úgy, ahogy szabják: először a fehér 18 mm-es bútorlap, aztán a frontok, végül a farostlemez. Az első méret a szálirány, így a frontok állva vannak beírva, a farostlemez pedig „szálirány nélkül” jelölést kap; a lapszabászatnak nem kell találgatnia, merre fordul a minta. A méretek nettók, élzárás után, ami a programban alapértelmezett, és érdemes az első üzenetben megmondani a lapszabászatnak. A jegyzéket egy kattintással kimásolod, és üzenetben vagy e-mailben elküldöd, vagy PDF-be nyomtatod. Mit jelent az egyes sorok tartalma, a szótárban a [szabásjegyzéknél](../recnik/krojna-lista.html) olvashatod.

## Példa: mi megy az üzenetbe

600 × 720 × 560-as alsó korpusz ajtóval és polccal, nyolc lap:

| Lap | Méret (mm) | Vast. | Élzárás | Db |
|---|---|---|---|---|
| Oldal | 702 × 539 | 18 | 1 hosszú | 2 |
| Fenéklap | 600 × 539 | 18 | 1 hosszú | 1 |
| Polc | 562 × 519 | 18 | 1 hosszú | 1 |
| Heveder | 564 × 100 | 18 | 2 hosszú | 2 |
| Front | 717 × 597 | 18 | 2 hosszú, 2 rövid | 1 |
| Hátfal (farostlemez) | 717 × 597 | 3 | nincs | 1 |

Egy tizenkét elemes konyha százegynéhány ilyen sor. A program az összes korpuszra együtt rakja össze őket, és melléjük adja a teljes lapfelhasználást m²-ben és az élzáró hosszát 10 % hulladékkal, így tudod, hány táblát és hány méter szalagot rendelj.

![„Méret szerint” táblázat a TOPICA programból: lapok sorai milliméteres mérettel, vastagsággal, élzárásjelöléssel és darabszámmal, anyag szerint csoportosítva](../slike/web/isecak-po-meri-tabela-1600.webp "Így néz ki az, amit kimásolsz és elküldesz a szabásra.")

## Vasalat és anyag, mielőtt a boltba mész

A szerelő maga veszi a vasalatot, és egyszer veszi meg. A program a laplista mellé vasalatlistát is ad: [pántok](../recnik/sarka.html) a front magassága szerint (900 mm-ig kettő, 1600-ig három), [sínek](../recnik/fioka-i-vodjica.html) a korpusz mélységében elférő legnagyobb névleges hosszként, lábak elemenként négy 800 mm szélességig és hat afölött, polctartók a 32-es rendszer szerint. Ebből semmit nem írsz át rajzról.

## A projekt egyetlen fájl

Nincs fiók, nincs szerver: a projekt egy fájl a számítógépeden. Elküldöd a kollégának, aki szab, laptopon magaddal viszed a beszerelésre, és ott megnyitod a 3D-t a falig, a szomszédig és a padlótól mért méretjelölésekkel, és megmutatod a vevőnek, hová mi kerül, mielőtt az első lyukat kifúrod. Hogyan kell a helyiséget felmérni, hogy a jegyzék pontos legyen, a [hogyan mérj fel egy konyhát](../blog/kako-izmeriti-kuhinju.html) útmutatóban van; mit ad még a program, a [funkciókban](../#mogucnosti).

## Amit a program ebben a verzióban nem csinál

Nem készít CNC-fájlt, sem szabástervet (nesting). Azt a lapszabászat csinálja a saját programján és a saját gépén; neki pontos jegyzék kell, és ezt kapod. A teljes út a helyiségtől a jegyzékig [három lépés](../#kako-radi).

A következő jegyzéket a lapszabászatnak a programban készítsd el, aztán hasonlítsd össze a füzetbelivel.
