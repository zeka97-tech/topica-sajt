---
naslov: Czym jest lista cięcia i jak ją czytać
opis: Lista cięcia to spis wszystkich formatek jednego mebla z dokładnymi wymiarami, grubością, obrzeżem i ilością. Jak wygląda, co znaczy „pierwszy wymiar = kierunek usłojenia” i jak TOPICA tworzy ją automatycznie.
datum: 2026-11-04
slika: ../slike/web/snimak-33-po-meri-1600.webp
---

Lista cięcia to kartka (albo tabela), która idzie z warsztatu na piłę panelową. Jest na niej każda formatka jednego mebla: jak długa, jak szeroka, jakiej grubości, z jakiego materiału, gdzie idzie obrzeże i ile sztuk trzeba. Kto tnie płyty, nie musi wiedzieć, jak mebel wygląda; wystarczy mu lista. Dlatego lista cięcia jest najważniejszym dokumentem między projektem a gotowym meblem: jeśli jest poprawna, wszystko się składa; jeśli na papierze brakuje 18 mm, brakuje ich także w kuchni.

## Co zawiera lista cięcia

Dla mebli płytowych (kuchnie, szafy, komody z płyty wiórowej) jeden wiersz listy zwykle niesie sześć informacji:

- **Nazwa formatki** i szafka, do której należy: bok, dno, półka, listwa, front, plecy.
- **Długość × szerokość** w milimetrach, wymiar netto gotowej formatki.
- **Grubość**: 18 mm na korpus i fronty, 3 mm HDF na plecy, 8–10 mm na dna szuflad.
- **Materiał**: biała płyta wiórowa, dekor dąb, HDF kolorowy.
- **Obrzeże**: które krawędzie dostają obrzeże i jaką taśmę (0,45 mm na korpus, 1 lub 2 mm na fronty).
- **Ilość**: dwa boki, jedno dno, dwie listwy.

Dobra lista jest pogrupowana według materiału i grubości, bo tak właśnie tnie się płyty: najpierw cała biała płyta 18 mm, potem fronty, na końcu HDF.

## Pierwszy wymiar to kierunek usłojenia

Przy dekorach z rysunkiem (dąb, orzech, sonoma) ma znaczenie, jak formatka leży na płycie. Listy cięcia trzymają się więc jednej zasady: **pierwszy wymiar zawsze biegnie wzdłuż usłojenia**. Front 717 × 597 ma słoje pionowo, jak przystało na drzwi. Zapisany jako 597 × 717 miałby słoje poziomo. Dla białej płyty i HDF nie ma to znaczenia, dlatego program oznacza plecy jako „bez usłojenia”.

## Przykład: szafka dolna 600 × 720 × 560

Zwykła dolna szafka kuchenna z jednymi drzwiami i jedną półką ma osiem formatek. Dno leży na bokach (pełna szerokość 600), więc boki mają 702 wysokości, nie 720. Głębokość korpusu to 539, bo od 560 odejmuje się front (18) i plecy (3).

| Formatka | Wymiar (mm) | Gr. | Obrzeże | Szt. |
|---|---|---|---|---|
| Bok | 702 × 539 | 18 | 1 dłuższy | 2 |
| Dno | 600 × 539 | 18 | 1 dłuższy | 1 |
| Półka | 562 × 519 | 18 | 1 dłuższy | 1 |
| Listwa | 564 × 100 | 18 | 2 dłuższe | 2 |
| Front (drzwi) | 717 × 597 | 18 | 2 dłuższe, 2 krótsze | 1 |
| Plecy (HDF) | 717 × 597 | 3 | brak | 1 |

Każdą z tych liczb ktoś musi policzyć. Dla jednej szafki to dziesięć minut z ołówkiem. Dla kuchni z dwunastu szafek to godzina i co najmniej jeden błąd.

## Jak TOPICA buduje listę cięcia

W programie nie pisze się listy cięcia: jest liczona z szafek, które ustawiłeś w pomieszczeniu. Zmień szerokość szafki z 600 na 450, a wszystkie osiem formatek dostaje nowe wymiary w tej samej chwili, razem z obrzeżem, okuciami i ceną. Widok „Według wymiaru” zbiera identyczne wymiary w jednym wierszu, pogrupowane według materiału, z oznaczeniem obrzeża i ilością, dokładnie tak, jak idzie na piłę. Ten widok kopiuje się jednym kliknięciem i wysyła jako wiadomość albo drukuje do PDF.

![Lista cięcia „Według wymiaru” w programie TOPICA dla szafki dolnej 600 × 720 × 560 mm: osiem formatek pogrupowanych według materiału, z wymiarem, grubością, obrzeżem i ilością](../slike/web/snimak-33-po-meri-1600.webp "Widok „Według wymiaru” dla jednej szafki: osiem formatek, trzy materiały, 2,34 m² płyty.")

Zasadę „pierwszy wymiar = kierunek usłojenia” program pilnuje sam: front jest zawsze zapisany pionowo, a HDF ma oznaczenie „bez usłojenia”. Jeśli później zmienisz w ustawieniach warsztatu grubość pleców albo obrzeże frontów, zmiana przechodzi przez każdą formatkę w projekcie, także przez te, które już oglądałeś.

Lista cięcia nie jest skomplikowana. Skomplikowane jest zrobienie jej dobrze za każdym razem, dla każdej szafki, po tym, jak klient trzy razy zmienił zdanie. Od tego jest program.
