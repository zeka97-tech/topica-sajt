---
naslov: Polc
opis: A polc a korpuszban mozgatható lap négy polctartón a 32-es rendszer szerint. A polc méretei, behúzás, 0,45 mm-es élzárás és 32 mm-es furatosztás az oldalban.
datum: 2026-11-04
slika: ../slike/web/snimak-19-krupni-prikaz-1600.webp
status: za-proveru
---

A **polc** vízszintes lap a korpuszban, amely az [oldal](./bok.html) furataiban ülő négy polctartóra támaszkodik. A fenéklappal és a tetőlappal ellentétben a polc nem köti össze a dobozt: kivehető és magasságban áthelyezhető. Ezért a méretei is eltérnek a fenéklap méreteitől.

## Szabványos méretek

- Bútorlap **18 mm**.
- Szélesség: a korpusz belső szélessége mínusz a polctartók hézaga. A program példájában a 600-as elemnél a polc **562 × 519 mm**, tehát 2 mm-rel keskenyebb a belső 564-nél, és **beljebb húzva** az oldal elülső élétől.
- Élzárás: **0,45 mm** az elülső élen.
- Polctartók: a [32-es rendszer](../blog/sistem-32.html) szerint, Ø5 mm-es furatok **32 mm**-es osztással, az első sor **37 mm**-re az oldal elülső élétől (tengely); ugyanez a furatsor szolgálja a pántokat és a síneket is, a vasalatgyártó katalógusa szerint.
- A széles polcok behajlanak a teher alatt; általában az elemet [válaszfallal](./pregrada.html) osztják, vagy a polcot vastagabbra készítik.

## A műhelyben

A polctartók furatait a 32-es rendszer sablonjával fúrják összeszerelés előtt, mindkét oldalon ugyanattól az éltől, hogy a polcok ne álljanak ferdén. A polcot a belső méretnél kicsit rövidebbre szabják, hogy akadás nélkül kivehető legyen, és beljebb húzzák az elülső éltől, hogy ne látsszon az ajtóhézag mögött. Gyakori hiba: a furatok más-más éltől fúrva a bal és a jobb oldalon, így minden polc ferdén áll; a másik a teljes belső méretre szabott polc, amely beszorul és felkarcolja az élzárót.

![Nyitott ajtós korpusz a TOPICA programban: egy polc a magasság közepén, a falig és a padlótól mért méretekkel](../slike/web/snimak-52-ruka-jedna-vrata-1600.webp "A polc az elülső éltől beljebb van, és rövidebb a belső szélességnél, hogy kivehető legyen.")

## Hogyan csinálja a TOPICA

A program a projekt összes polcára egy behúzást tart, és maga számolja a szélességet a hézag szerint; a polcok számát a korpuszban módosítod, a méretek pedig egyenesen a [szabásjegyzékbe](../blog/krojna-lista.html) mennek ([funkciók](../#mogucnosti)).

A polc az egyetlen lap a korpuszban, amelynek mozognia kell, szabd hát úgy, hogy tudjon.
