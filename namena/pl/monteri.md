---
naslov: Dla monterów i tych, którzy tną na usługę
opis: Program dla monterów kuchni i stolarzy, którzy zlecają rozkrój płyt w składzie: lista cięcia „Według wymiaru” do skopiowania i wysłania, okucia na sztuki, projekt jako jeden plik. Windows.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Coraz więcej fachowców pracuje bez własnej piły formatowej: mierzą u klienta, zamawiają cięcie i oklejanie w składzie płyt, a potem składają i montują. Tu lista cięcia to jedyny papier, który idzie z twoich rąk w cudze. Jeśli jest poprawna, skład nie dzwoni; jeśli nie, błąd widać dopiero na montażu. TOPICA robi tę listę z projektu, a nie z twojego zeszytu.

## Lista, którą skład rozumie

Widok „Według wymiaru” daje te same wymiary w jednym wierszu, pogrupowane według materiału i grubości, z oznaczeniem [obrzeża](../recnik/kant.html) i ilością, dokładnie tak, jak się tnie: najpierw biała płyta wiórowa 18 mm, potem fronty, potem HDF. Pierwszy wymiar to kierunek usłojenia, więc fronty są zapisane pionowo, a HDF ma oznaczenie „bez usłojenia”; skład nie musi zgadywać, jak obrócony jest rysunek. Wymiary są netto, po oklejeniu, co jest domyślne w programie i warto to powiedzieć składowi w pierwszej wiadomości. Listę kopiujesz jednym kliknięciem i wysyłasz wiadomością lub e-mailem, albo drukujesz do PDF. Co znaczy każdy wiersz, pisze w słowniku pod [lista cięcia](../recnik/krojna-lista.html).

## Przykład: co idzie w wiadomości

Szafka dolna 600 × 720 × 560 z drzwiami i półką, osiem formatek:

| Formatka | Wymiar (mm) | Gr. | Obrzeże | Szt. |
|---|---|---|---|---|
| Bok | 702 × 539 | 18 | 1 dłuższy | 2 |
| Dno | 600 × 539 | 18 | 1 dłuższy | 1 |
| Półka | 562 × 519 | 18 | 1 dłuższy | 1 |
| Listwa | 564 × 100 | 18 | 2 dłuższe | 2 |
| Front | 717 × 597 | 18 | 2 dłuższe, 2 krótsze | 1 |
| Plecy (HDF) | 717 × 597 | 3 | brak | 1 |

Kuchnia z dwunastu szafek to około stu takich wierszy. Program układa je dla wszystkich korpusów razem, a przy nich daje łączne zużycie płyt w m² i długość obrzeża z 10 % odpadu, więc wiesz, ile płyt i ile metrów taśmy zamówić.

![Tabela „Według wymiaru” z programu TOPICA: wiersze formatek z wymiarem w milimetrach, grubością, oznaczeniem obrzeża i ilością, pogrupowane według materiału](../slike/web/isecak-po-meri-tabela-1600.webp "Tak wygląda to, co kopiujesz i wysyłasz na rozkrój.")

## Okucia i materiał przed wyjściem do sklepu

Monter kupuje okucia sam i kupuje je raz. Program przy liście formatek daje też spis okuć: [zawiasy](../recnik/sarka.html) według wysokości frontu (do 900 mm dwa, do 1600 trzy), [prowadnice](../recnik/fioka-i-vodjica.html) jako największą długość nominalną, która mieści się w głębokości korpusu, nóżki cztery na szafkę do 800 mm szerokości i sześć powyżej, podpórki półek w Systemie 32. Niczego z tego nie przepisujesz z rysunku.

## Projekt to jeden plik

Nie ma konta ani serwera: projekt to plik na twoim komputerze. Wysyłasz go koledze, który tnie, zabierasz na laptopie na montaż i tam otwierasz 3D z wymiarami do ściany, do sąsiada i od podłogi, a klientowi pokazujesz, gdzie co stanie, zanim wywiercisz pierwszy otwór. Jak zmierzyć pomieszczenie, żeby lista była poprawna, pisze w poradniku [jak zmierzyć kuchnię](../blog/kako-izmeriti-kuhinju.html); co jeszcze daje program, jest we [funkcjach](../#mogucnosti).

## Czego program nie robi w tej wersji

Nie robi pliku CNC ani planu rozkroju (nestingu). To robi skład na swoim programie i na swojej pile; jemu potrzebna jest dokładna lista, i to właśnie dostajesz. Cała droga od pomieszczenia do tej listy to [trzy kroki](../#kako-radi).

Następną listę dla składu zrób w programie, a potem porównaj z tą z zeszytu.
