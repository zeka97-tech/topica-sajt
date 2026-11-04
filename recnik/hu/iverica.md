---
naslov: Bútorlap 18 mm
opis: A 18 mm-es laminált bútorlap (forgácslap) a lapszerkezetes bútor alapanyaga. Vastagságok, szokásos táblaméretek, szabás és gyakori hibák az anyagszámításban.
datum: 2026-11-04
slika: ../slike/web/snimak-46-izbliza-front-1600.webp
status: za-proveru
---

A forgácslap préselt faforgácsból és ragasztóból készült lap; a laminált bútorlapnak mindkét oldalán ráégetett dekorpapír van, így festés nélkül kész korpusznak és frontnak. Ez a lapszerkezetes bútor alapanyaga: ebből van az oldal, a fenéklap, a polc, a heveder és a front, az éleket pedig [élzáróval](./kant.html) zárják le.

## Szabványos méretek

- Vastagság **18 mm** korpuszhoz és fronthoz; változatok 16, 19 és 25 mm.
- Szokásos táblaméretek: **2800 × 2070 mm** (Egger) vagy **2750 × 1830 mm** (Kronospan, Kastamonu); az első kb. 5,8 m², a második kb. 5,0 m².
- A hátfal nem bútorlap, hanem **farostlemez (HDF) 3 mm**.
- Élzárás **0,45 mm** a korpusz látszó élein, **1 mm** a fronton.

## A műhelyben

A táblát a szabásjegyzék szerint szabják, majd az éleket élzárják. A mintás dekornak száliránya van, ezért a dekoros lapokat csak egy irányban helyezik el a táblán, a fehér bútorlapot pedig úgy, ahogy kevesebb a hulladék. Az elővágó nélküli vágás alulról kitépi a dekort; ezért elővágós lapszabászgéppel vágnak, és ha nincs, a látszó oldalt felfelé fordítják. Gyakori hiba: a felhasználást a lapok m²-e alapján számolják hulladék nélkül, és a végén hiányzik fél tábla; a hulladék mértéke attól függ, mennyire illeszkednek a lapméretek a tábla hosszú éléhez. A másik: két gyártó táblája „ugyanabban” a fehérben, amely fényben nem egyforma.

![Laminált bútorlap front közelről a TOPICA program 3D-s nézetében, látható dekorral és élzárással](../slike/web/snimak-46-izbliza-front-1600.webp "Dekor és élzárás, ahogy a kész fronton állni fog.")

## Hogyan csinálja a TOPICA

A program az anyagot vastagság és dekor szerint vezeti, összeadja a [szabásjegyzék](./krojna-lista.html) összes lapjának m²-ét, és megszorozza a beírt áraddal ([funkciók](../#mogucnosti)); a lapok táblára rendezését (nesting) ebben a verzióban nem végzi.

A tábla mindenkinek ugyanaz; a különbség az, mennyi megy belőle a korpuszba, és mennyi a hulladékba.
