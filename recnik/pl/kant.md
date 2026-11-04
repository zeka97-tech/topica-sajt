---
naslov: Obrzeże
opis: Obrzeże to taśma ABS na krawędzi płyty wiórowej: 0,45 mm na korpus, 1 mm na fronty, 2 mm na mocniejsze krawędzie. Które krawędzie okleić i jak liczyć długość.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

**Obrzeże** to taśma ABS naklejana na krawędź płyty wiórowej, żeby zakryć surową stronę płyty, chronić ją przed wilgocią i uderzeniem i żeby formatka wyglądała na gotową. Obrzeże nie zmienia wymiaru na liście cięcia, gdy pracuje się na wymiar netto, ale zmienia cenę, czas i spis krawędzi, które stolarz musi obrobić.

## Wymiary standardowe

- **0,45 mm**: widoczne krawędzie korpusu i przednia krawędź półki; cienkie, tanie, w kolorze płyty.
- **1 mm**: fronty, wszystkie cztery krawędzie.
- **2 mm**: drzwi szaf, blaty i inne mocniej obciążone krawędzie; zaokrąglone, znosi uderzenia.
- Wymiar cięcia to **netto po oklejeniu** (domyślnie w programie): [front](./front.html) 597 z obrzeżem 1 mm z obu stron tnie się na 595. Kto pracuje na wymiar brutto, tnie na 597 i dostaje 599.
- Długość obrzeża = suma oklejanych krawędzi + **10 % odpadu** (do ustawienia). Front 717 × 597 z czterema krawędziami: 2 × 717 + 2 × 597 = 2628 mm, z odpadem ≈ 2,9 m.

Więcej o wyborze grubości i liczeniu długości w poradniku [Obrzeże: grubość i długość](../blog/kant-debljina-i-duzina.html).

## W warsztacie

Korpus okleja się z przodu przed złożeniem, front ze wszystkich czterech stron przed wierceniem. Na okleiniarce zwykle najpierw idą krótsze krawędzie, potem dłuższe, żeby styk w narożniku patrzył w stronę, którą mniej widać. Częsty błąd: zapomniane obrzeże na dolnej krawędzi [listwy](./precka.html) albo na przedniej krawędzi dna za drzwiami; drugi to mieszanie wymiaru netto i brutto, przez co wszystkie fronty są szersze o 2 mm i szczelina 3 mm znika.

![Tabela „Według wymiaru” w programie TOPICA: dla każdej formatki wymiar, grubość, obrzeże (1 dłuższy, 2 dłuższe, 2 dłuższe i 2 krótsze, brak) i ilość, pogrupowane według materiału](../slike/web/isecak-po-meri-tabela-1600.webp "Kolumna „Obrzeże” mówi, które krawędzie się okleja: bok jedną dłuższą, listwa dwie, front wszystkie cztery, HDF nic.")

## Jak robi to TOPICA

Dla każdej formatki program wpisuje, które krawędzie dostają obrzeże i jakiej grubości, sumuje długość według grubości z odpadem i uwzględnia cenę, którą wpisałeś ([funkcje](../#mogucnosti)). W 3D obrzeże jest tylko oznaczone; wymiar zostaje netto.

Obrzeże to pół milimetra plastiku, które decyduje, czy kuchnia wygląda jak mebel, czy jak płyty.
