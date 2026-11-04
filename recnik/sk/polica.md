---
naslov: Polica
opis: Polica je prestaviteľný dielec v korpuse na štyroch podperkách podľa System 32. Rozmery police, zapustenie, hrana 0,45 mm a rozstup otvorov 32 mm v boku.
datum: 2026-11-04
slika: ../slike/web/snimak-19-krupni-prikaz-1600.webp
status: za-proveru
---

**Polica** je vodorovný dielec vnútri korpusu, ktorý leží na štyroch podperkách v otvoroch [boku](./bok.html). Na rozdiel od dna a vrchu polica korpus nespája: dá sa vybrať a prestaviť po výške. Preto sa aj jej rozmery líšia od rozmerov dna.

## Štandardné rozmery

- LTD **18 mm**.
- Šírka: vnútorná šírka korpusu mínus vôľa pre podperky. V príklade programu pre skrinku 600 je polica **562 × 519 mm**, teda o 2 mm užšia než vnútorných 564 a **zapustená** od prednej hrany boku.
- Hrana: **0,45 mm** na prednej hrane.
- Podperky políc: podľa [System 32](../blog/sistem-32.html), otvory Ø5 mm s rozstupom **32 mm**, prvý rad **37 mm** od prednej hrany boku (os); ten istý rad otvorov slúži aj závesom a výsuvom, podľa katalógu výrobcu kovania.
- Široké police sa pod záťažou prehýbajú; zvyčajne sa skrinka delí [medzistenou](./pregrada.html) alebo sa polica robí hrubšia.

## V dielni

Otvory pre podperky sa vŕtajú podľa šablóny System 32 pred zložením, v oboch bokoch od tej istej hrany, aby police nestáli nakrivo. Polica sa reže o niečo kratšia než vnútorný rozmer, aby sa vyberala bez zadrhávania, a zapúšťa sa od prednej hrany, aby ju nebolo vidieť za škárou dvierok. Častá chyba: otvory vŕtané od rôznej hrany na ľavom a pravom boku, takže každá polica stojí šikmo; druhá je polica na plný vnútorný rozmer, ktorá sa zasekne a poškriabe hranu.

![Korpus s otvorenými dvierkami v programe TOPICA: jedna polica v strede výšky, kóty k stene a od podlahy](../slike/web/snimak-52-ruka-jedna-vrata-1600.webp "Polica je zapustená od prednej hrany a kratšia než vnútorná šírka, aby sa dala vybrať.")

## Ako to robí TOPICA

Program drží pre všetky police v projekte jedno zapustenie a sám počíta šírku podľa vôle; počet políc meníte v korpuse a rozmery idú priamo do [nárezového plánu](../blog/krojna-lista.html) ([funkcie](../#mogucnosti)).

Polica je jediný dielec v korpuse, ktorý sa má hýbať, tak ju narežte tak, aby mohla.
