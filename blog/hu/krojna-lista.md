---
naslov: Mi a szabásjegyzék, és hogyan kell olvasni
opis: A szabásjegyzék egy bútor összes lapjának listája pontos mérettel, vastagsággal, élzárással és darabszámmal. Hogyan néz ki, mit jelent az „első méret = szálirány”, és hogyan készíti el a TOPICA automatikusan.
datum: 2026-11-04
slika: ../slike/web/snimak-33-po-meri-1600.webp
---

A szabásjegyzék az a papír (vagy táblázat), amely a műhelyből a lapszabászatra megy. Rajta van egy bútor minden egyes lapja: milyen hosszú, milyen széles, milyen vastag, milyen anyagból van, hol kap élzárást, és hány darab kell belőle. Aki a lapokat szabja, annak nem kell tudnia, hogyan néz ki a bútor; elég neki a jegyzék. Ezért a szabásjegyzék (sokan szabáslistának hívják) a legfontosabb dokumentum a terv és a kész bútor között: ha helyes, minden összeáll; ha papíron hiányzik 18 mm, a konyhában is hiányozni fog.

## Mit tartalmaz a szabásjegyzék

Lapszerkezetes bútornál (konyha, gardrób, bútorlapból készült szekrény) a jegyzék egy sora általában hat adatot hordoz:

- **A lap neve** és hogy melyik szekrényhez tartozik: oldal, fenéklap, polc, heveder, front, hátfal.
- **Hossz × szélesség** milliméterben, a kész lap nettó mérete.
- **Vastagság**: 18 mm a korpuszhoz és a frontokhoz, 3 mm farostlemez a hátfalhoz, 8–10 mm a fiókfenekekhez.
- **Anyag**: fehér bútorlap, tölgy dekor, színes farostlemez.
- **Élzárás**: mely élek kapnak élzárót, és milyen szalagot (0,45 mm a korpuszra, 1 vagy 2 mm a frontokra).
- **Darabszám**: két oldal, egy fenéklap, két heveder.

A jó jegyzék anyag és vastagság szerint van csoportosítva, mert a lapokat így szabják: először az összes fehér 18 mm-es bútorlap, aztán a frontok, végül a farostlemez.

## Az első méret a szálirány

Mintás dekoroknál (tölgy, dió, sonoma) nem mindegy, hogyan fekszik a lap a táblán. A szabásjegyzékek ezért egy megállapodást követnek: **az első méret mindig a szálirányban fut**. Egy 717 × 597-es front erezete függőleges, ahogy egy ajtónak illik. 597 × 717-ként írva az erezet vízszintesen futna. Fehér bútorlapnál és farostlemeznél ez nem számít, ezért a program a hátfalat „szálirány nélkül” jelöléssel látja el.

## Példa: egy 600 × 720 × 560-as alsószekrény

Egy átlagos, egyajtós, egypolcos alsó konyhaszekrénynek nyolc lapja van. A fenéklap az oldalak fölött ül (teljes szélesség 600), ezért az oldalak 702 magasak, nem 720. A korpusz mélysége 539, mert az 560-ból lejön a front (18) és a hátfal (3).

| Lap | Méret (mm) | Vast. | Élzárás | Db |
|---|---|---|---|---|
| Oldal | 702 × 539 | 18 | 1 hosszú | 2 |
| Fenéklap | 600 × 539 | 18 | 1 hosszú | 1 |
| Polc | 562 × 519 | 18 | 1 hosszú | 1 |
| Heveder | 564 × 100 | 18 | 2 hosszú | 2 |
| Front (ajtó) | 717 × 597 | 18 | 2 hosszú, 2 rövid | 1 |
| Hátfal (farostlemez) | 717 × 597 | 3 | nincs | 1 |

Ezeket a számokat valakinek ki kell számolnia. Egy szekrénynél ez tíz perc ceruzával. Egy tizenkét elemes konyhánál egy óra, és legalább egy hiba.

## Hogyan készíti a TOPICA a szabásjegyzéket

A programban a szabásjegyzéket nem írod: a helyiségbe helyezett szekrényekből számolódik. Módosítsd egy elem szélességét 600-ról 450-re, és mind a nyolc lap abban a pillanatban új méretet kap, az élzárással, a vasalattal és az árral együtt. A „Méret szerint” nézet az azonos méreteket egy sorba teszi, anyag szerint csoportosítva, az élzárás jelölésével és a darabszámmal, pontosan úgy, ahogy a lapszabászatra megy. Ezt a nézetet egy kattintással kimásolod, és üzenetben elküldöd vagy PDF-be nyomtatod.

![A „Méret szerint” szabásjegyzék a TOPICA programban egy 600 × 720 × 560 mm-es alsószekrényhez: nyolc lap anyag szerint csoportosítva, mérettel, vastagsággal, élzárással és darabszámmal](../slike/web/snimak-33-po-meri-1600.webp "A „Méret szerint” nézet egy szekrényhez: nyolc lap, három anyag, 2,34 m² lap.")

Az „első méret = szálirány” szabályt a program magától betartja: a front mindig állva van írva, a farostlemez pedig „szálirány nélkül” jelölést kap. Ha később a műhelybeállításokban módosítod a hátfal vastagságát vagy a frontok élzárását, a változás végigfut a projekt minden lapján, azokon is, amelyeket már megnéztél.

A szabásjegyzék nem bonyolult. Az a bonyolult, hogy minden alkalommal, minden elemre jó legyen, azután is, hogy a vevő háromszor meggondolta magát. Erre való a program.
