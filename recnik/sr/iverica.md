---
naslov: Iverica 18 mm
opis: Iverica 18 mm (oplemenjena, melaminska) je osnovna ploča pločastog nameštaja. Debljine, uobičajene mere tabli, krojenje i česte greške u računanju materijala.
datum: 2026-11-04
slika: ../slike/web/snimak-46-izbliza-front-1600.webp
---

Iverica je ploča od presovanih drvenih čestica i lepka; oplemenjena (melaminska) iverica ima s obe strane zapečen dekor-papir, pa je gotova za korpus i front bez farbanja. To je osnovni materijal pločastog nameštaja: od nje su bokovi, dno, police, prečke i frontovi, a ivice se zatvaraju [kantom](./kant.html).

## Standardne mere

- Debljina **18 mm** za korpus i front; varijante 16, 19 i 25 mm.
- Uobičajene mere tabli: **2800 × 2070 mm** (Egger) ili **2750 × 1830 mm** (Kronospan, Kastamonu); prva je oko 5,8 m², druga oko 5,0 m².
- Leđa nisu iverica nego **lesonit (HDF) 3 mm**.
- Kant **0,45 mm** na vidljivim ivicama korpusa, **1 mm** na frontu.

## U radionici

Tabla se kroji po krojnoj listi, pa se ivice kantuju. Dezen sa šarom ima god, pa se daske sa dezenom slažu po tabli samo u jednom pravcu, a bela iverica kako manje otpada. Rez bez predrezača kida dekor sa donje strane; zato se kroji formatnom testerom sa predrezačem, a ako je nema, vidljiva strana se okreće naviše. Česta greška: potrošnja se računa po m² dasaka bez otpada, pa na kraju fali pola table; koliki je otpad, zavisi od toga koliko se mere dasaka lepo slažu uz dugu ivicu table. Druga: table dva proizvođača u „istoj" beloj, koje pod svetlom nisu iste.

![Front od oplemenjene iverice izbliza u 3D prikazu programa TOPICA, sa vidljivim dezenom i kantom](../slike/web/snimak-46-izbliza-front-1600.webp "Dezen i kant kako će stajati na gotovom frontu.")

## Kako to radi TOPICA

Program vodi materijal po debljini i dezenu, sabira m² svih dasaka u [krojnoj listi](./krojna-lista.html) i množi cenom koju si upisao ([mogućnosti](../#mogucnosti)); raspored dasaka na tabli (nesting) u ovoj verziji ne radi.

Tabla je ista za sve; razlika je koliko od nje ode u korpus, a koliko u otpad.
