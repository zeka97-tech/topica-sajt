---
naslov: Fachboden
opis: Der Fachboden ist das verstellbare Teil im Korpus auf vier Bodenträgern nach System 32. Maße des Fachbodens, Rücksprung, Kante 0,45 mm und Lochabstand 32 mm in der Seite.
datum: 2026-11-04
slika: ../slike/web/snimak-19-krupni-prikaz-1600.webp
---

Der **Fachboden** (Einlegeboden) ist das waagerechte Teil im Korpus, das auf vier Bodenträgern in den Löchern der [Seite](./bok.html) aufliegt. Anders als Boden und Oberboden verbindet der Fachboden den Kasten nicht: Er lässt sich herausnehmen und in der Höhe versetzen. Deshalb weichen seine Maße von denen des Bodens ab.

## Standardmaße

- Spanplatte **18 mm**.
- Breite: Korpusinnenbreite minus Luft für die Bodenträger. Im Programmbeispiel für den Schrank von 600 ist der Fachboden **562 × 519 mm**, also 2 mm schmaler als die inneren 564 und **zurückgesetzt** von der Vorderkante der Seite.
- Kante: **0,45 mm** an der Vorderkante.
- Bodenträger: nach [System 32](../blog/sistem-32.html), Löcher Ø5 mm im Abstand **32 mm**, erste Reihe **37 mm** von der Vorderkante der Seite (Achse); dieselbe Lochreihe dient auch Topfbändern und Führungen, nach dem Katalog des Beschlagherstellers.
- Breite Fachböden biegen sich unter Last durch; üblicherweise teilt man den Schrank mit einer [Mittelseite](./pregrada.html) oder macht den Fachboden stärker.

## In der Werkstatt

Die Löcher für die Bodenträger werden vor dem Zusammenbau mit der 32er-Schablone gebohrt, in beiden Seiten von derselben Kante aus, damit die Fachböden nicht schief liegen. Der Fachboden wird etwas kürzer als das Innenmaß geschnitten, damit er sich ohne Klemmen herausnehmen lässt, und von der Vorderkante zurückgesetzt, damit er hinter der Türfuge nicht zu sehen ist. Häufiger Fehler: Löcher an linker und rechter Seite von verschiedenen Kanten aus gebohrt, und jeder Fachboden liegt schräg; zweiter: Fachboden auf volles Innenmaß, der sich verkeilt und die Kante zerkratzt.

![Korpus mit offener Tür in TOPICA: ein Fachboden auf halber Höhe, Maße zur Wand und zum Boden](../slike/web/snimak-52-ruka-jedna-vrata-1600.webp "Der Fachboden ist von der Vorderkante zurückgesetzt und kürzer als die Innenbreite, damit er sich herausnehmen lässt.")

## So macht es TOPICA

Das Programm hält für alle Fachböden im Projekt einen Rücksprung und rechnet die Breite nach der Luft selbst; die Zahl der Fachböden änderst du am Korpus, und die Maße gehen direkt in die [Schnittliste](../blog/krojna-lista.html) ([Funktionen](../#mogucnosti)).

Der Fachboden ist das einzige Teil im Korpus, das sich bewegen soll, also schneide ihn so, dass er es kann.
