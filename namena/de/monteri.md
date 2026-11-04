---
naslov: Für Monteure und alle, die beim Zuschnittservice sägen lassen
opis: Software für Küchenmonteure und Handwerker, die Platten im Zuschnittservice schneiden lassen: Schnittliste „Nach Maß“ zum Kopieren und Schicken, Beschläge pro Stück, Projekt als eine Datei. Windows.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
---

Immer mehr Handwerker arbeiten ohne eigene Formatkreissäge: Sie messen beim Kunden auf, bestellen Zuschnitt und Bekantung beim Plattenservice und bauen zusammen und montieren. Da ist die Schnittliste das einzige Blatt, das aus deinen Händen in fremde geht. Stimmt sie, ruft der Service nicht an; stimmt sie nicht, zeigt sich der Fehler erst bei der Montage. TOPICA macht diese Liste aus dem Projekt, nicht aus deinem Notizbuch.

## Eine Liste, die der Service versteht

Die Ansicht „Nach Maß“ fasst gleiche Maße in einer Zeile zusammen, nach Material und Stärke gruppiert, mit [Kantenvermerk](../recnik/kant.html) und Stückzahl, genau so, wie geschnitten wird: zuerst weiße Spanplatte 18 mm, dann die Fronten, dann HDF. Das erste Maß ist die Faserrichtung, also stehen die Fronten stehend, und HDF trägt den Vermerk „ohne Faser“; der Service muss nicht raten, wie die Maserung gedreht ist. Die Maße sind Fertigmaße nach dem Bekanten, das ist Standard im Programm und gehört in die erste Nachricht an den Service. Die Liste kopierst du mit einem Klick und schickst sie als Nachricht oder E-Mail, oder du druckst sie als PDF. Was jede Zeile bedeutet, steht im Glossar unter [Schnittliste](../recnik/krojna-lista.html).

## Beispiel: Was in die Nachricht geht

Unterschrank 600 × 720 × 560 mit Tür und Fachboden, acht Teile:

| Teil | Maß (mm) | Stärke | Kante | Stk. |
|---|---|---|---|---|
| Seite | 702 × 539 | 18 | 1 lang | 2 |
| Boden | 600 × 539 | 18 | 1 lang | 1 |
| Fachboden | 562 × 519 | 18 | 1 lang | 1 |
| Traverse | 564 × 100 | 18 | 2 lang | 2 |
| Front | 717 × 597 | 18 | 2 lang, 2 kurz | 1 |
| Rückwand (HDF) | 717 × 597 | 3 | ohne | 1 |

Eine Küche mit zwölf Schränken sind rund hundert solcher Zeilen. Das Programm stellt sie für alle Korpusse zusammen und gibt dazu den Gesamtverbrauch an Platten in m² und die Kantenlänge mit 10 % Verschnitt, damit du weißt, wie viele Platten und wie viele Meter Band du bestellst.

![Tabelle „Nach Maß“ aus TOPICA: Zeilen mit Maß in Millimetern, Stärke, Kantenvermerk und Stückzahl, nach Material gruppiert](../slike/web/isecak-po-meri-tabela-1600.webp "So sieht das aus, was du kopierst und an den Zuschnitt schickst.")

## Beschläge und Material vor dem Weg in den Laden

Der Monteur kauft die Beschläge selbst, und er kauft sie einmal. Das Programm gibt zur Teileliste die Beschlagliste: [Topfbänder](../recnik/sarka.html) nach Fronthöhe (bis 900 mm zwei, bis 1600 drei), [Führungen](../recnik/fioka-i-vodjica.html) als größte Nennlänge, die in die Korpustiefe passt, Stellfüße vier pro Schrank bis 800 mm Breite und sechs darüber, Bodenträger nach System 32. Nichts davon schreibst du von der Zeichnung ab.

## Das Projekt ist eine Datei

Kein Konto, kein Server: Das Projekt ist eine Datei auf deinem Rechner. Du schickst sie dem Kollegen, der sägt, nimmst sie auf dem Laptop zur Montage mit und öffnest dort das 3D mit den Maßen zur Wand, zum Nachbarn und vom Boden, und zeigst dem Kunden, wo was hinkommt, bevor du das erste Loch bohrst. Wie der Raum gemessen wird, damit die Liste stimmt, steht im Ratgeber [Wie man eine Küche aufmisst](../blog/kako-izmeriti-kuhinju.html); was das Programm sonst gibt, unter [Funktionen](../#mogucnosti).

## Was das Programm in dieser Version nicht macht

Es erzeugt keine CNC-Datei und keinen Schnittplan (Nesting). Das macht der Service in seinem Programm und an seiner Säge; er braucht eine genaue Liste, und die bekommst du. Der ganze Weg vom Raum zu dieser Liste sind [drei Schritte](../#kako-radi).

Mach die nächste Liste für den Service im Programm und vergleich sie mit der aus dem Notizbuch.
