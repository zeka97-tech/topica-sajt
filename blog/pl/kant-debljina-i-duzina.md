---
naslov: Obrzeże: jaka grubość gdzie idzie (0,45 / 1 / 2 mm) i jak liczyć długość
opis: Obrzeże 0,45 mm na korpus, 1 mm na fronty, 2 mm na obciążone krawędzie. Co znaczy wymiar netto po oklejeniu i jak liczyć długość taśmy z 10 % odpadu.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Obrzeże to taśma, najczęściej ABS, którą zamyka się ciętą krawędź płyty wiórowej, żeby nie było widać środka płyty i żeby nie wchodziła w nią wilgoć. Grubość taśmy to nie kwestia gustu: cienka taśma na drzwiach odkleja się przy pierwszym uderzeniu, a gruba taśma na półce w środku to wyrzucone pieniądze. Ten poradnik mówi, jaka grubość gdzie idzie, które krawędzie w ogóle się okleja, co znaczy „wymiar netto po oklejeniu” i jak policzyć, ile metrów taśmy zamówić.

## Trzy grubości i gdzie która idzie

| Taśma | Gdzie idzie | Dlaczego |
|---|---|---|
| **0,45 mm** | widoczne krawędzie [korpusu](../recnik/korpus.html) i przednia krawędź [półki](../recnik/polica.html) | krawędzie nie dostają uderzeń, taśma tylko zamyka płytę |
| **1 mm** | [fronty](../recnik/front.html), wszystkie cztery krawędzie | krawędź chwyta się ręką i uderza, potrzebuje ciała |
| **2 mm** | fronty, gdzie wymagana jest mocniejsza krawędź, [blaty](../recnik/radna-ploca.html), drzwi szaf | najbardziej obciążone krawędzie, taśma zaokrąglona i odporna |

Taśma 2 mm jest lepsza także na zwykłych frontach, gdy klient chce miększą, zaokrągloną krawędź; cena jest wyższa i potrzebna jest maszyna, która ją przyklei. Na korpusie 2 mm to błąd: w środku nie widać, a styk z frontem dostaje krawędź, o którą nikt nie prosił.

## Które krawędzie się okleja, a których nie

Zasada jest prosta: okleja się krawędź, którą widać albo dotyka się ręką. Krawędzi przy ścianie, krawędzi pod blatem i krawędzi w połączeniu z inną formatką się nie okleja, bo taśma by tam tylko przeszkadzała w składaniu i zabierała czas. Na zwykłej szafce dolnej wygląda to tak:

- **Bok**: jedna dłuższa krawędź, przednia. Tylna jest przy ścianie, górna pod blatem, dolna na podłodze.
- **Dno**: jedna dłuższa, przednia.
- **Półka**: jedna dłuższa, przednia. Półka jest cofnięta, widać ją tylko z przodu.
- **Listwa**: dwie dłuższe. Przednią listwę widać od dołu po otwarciu drzwi, więc dostaje obie.
- **Front**: dwie dłuższe i dwie krótsze, wszystkie cztery.
- **Plecy** z HDF 3 mm: bez obrzeża.

## Wymiar netto po oklejeniu

Na [liście cięcia](./krojna-lista.html) wymiar formatki jest **netto po oklejeniu**: to wymiar gotowej formatki z przyklejoną taśmą, tak jak wchodzi do korpusu. Przy taśmie 0,45 mm różnica jest poniżej pół milimetra i w praktyce się jej nie odejmuje. Przy 1 mm i 2 mm się odejmuje: front, który na liście stoi jako 717 × 597 z taśmą 1 mm na wszystkich czterech krawędziach, tnie się na 715 × 595, żeby po oklejeniu miał dokładnie 717 × 597. Kto o tym zapomni, dostaje front większy o 2 mm z każdej strony i szczelina 3 mm między drzwiami znika.

Umowa „netto po oklejeniu” jest domyślna w programie i można ją zmienić, jeśli warsztat pracuje odwrotnie, ale musi o tym wiedzieć i ten, kto tnie, i ten, kto okleja.

## Jak liczy się długość taśmy

Długość obrzeża dla jednej grubości to **suma wszystkich oklejanych krawędzi tej grubości, powiększona o 10 % odpadu**. Dziesięć procent pokrywa początek i koniec taśmy na maszynie, odcięte kawałki i jakąś krawędź, którą okleja się dwa razy. Procent jest do ustawienia; warsztat z ręczną okleiniarką zwykle daje więcej.

Przykład: szafka dolna 600 × 720 × 560, jedne drzwi, jedna półka, dwie listwy.

| Formatka | Wymiar (mm) | Obrzeże | Szt. | Długość taśmy |
|---|---|---|---|---|
| Bok | 702 × 539 | 1 dłuższy · 0,45 | 2 | 2 × 702 = 1404 |
| Dno | 600 × 539 | 1 dłuższy · 0,45 | 1 | 600 |
| Półka | 562 × 519 | 1 dłuższy · 0,45 | 1 | 562 |
| Listwa | 564 × 100 | 2 dłuższe · 0,45 | 2 | 2 × 2 × 564 = 2256 |
| Front | 717 × 597 | 2 dłuższe, 2 krótsze · 1 mm | 1 | 2 × 717 + 2 × 597 = 2628 |
| Plecy | 717 × 597 | brak | 1 | 0 |

Suma dla taśmy **0,45 mm**: 1404 + 600 + 562 + 2256 = **4822 mm**; z 10 % odpadu 5304 mm, czyli około **5,3 m**. Suma dla taśmy **1 mm**: **2628 mm**; z odpadem 2891 mm, około **2,9 m**. Dla jednej szafki razem około 8,2 m taśmy, dwie grubości, dwa dekory. Kuchnia z dwunastu szafek z szufladami i górnym rzędem łatwo przekracza sto metrów i tu szacunek „na oko” myli się o rolkę.

## Oznaczenia obrzeża na liście cięcia

Kto tnie, nie musi wiedzieć, gdzie formatka trafi, wystarczy mu oznaczenie krawędzi. Program używa czterech:

- **1 dłuższy**: tylko jedna z dwóch dłuższych krawędzi formatki.
- **2 dłuższe**: obie dłuższe krawędzie, krótsze zostają gołe.
- **2 dłuższe, 2 krótsze**: wszystkie cztery, typowo front.
- **brak**: plecy i dna szuflad z HDF.

„Dłuższy” odnosi się do dłuższego boku formatki, nie do pierwszego wymiaru na liście. Pierwszy wymiar to kierunek usłojenia i przy białej płycie nie ma znaczenia, a dłuższa krawędź to zawsze ta większa z dwóch. Przy boku 702 × 539 dłuższa to 702, to przednia pionowa krawędź; przy dnie 600 × 539 dłuższa to 600, przednia pozioma.

![Tabela „Według wymiaru” w programie TOPICA dla jednej szafki: sześć formatek białej płyty wiórowej, front w dekorze dąb i plecy z HDF, z kolumną Obrzeże, w której stoi „1 dłuższy”, „2 dłuższe”, „2 dłuższe, 2 krótsze” i „brak”](../slike/web/isecak-po-meri-tabela-1600.webp "Kolumna Obrzeże na liście cięcia: oznaczenie krawędzi, pogrupowane według materiału.")

## Jak robi to TOPICA

Grubość obrzeża ustawiasz raz dla korpusu i raz dla frontów w ustawieniach projektu (domyślnie 0,45 i 1 mm, dekor „jak płyta”), a program każdej formatce wpisuje, które krawędzie się okleja, i sumuje długość według grubości i dekoru, z odpadem, który ustawiłeś. Cenę metra taśmy wpisujesz ty; niewpisana to zero, program jej nie wymyśla. Spis materiałów z obrzeżem jest częścią tego samego widoku co lista cięcia, zobacz sekcję [funkcje](../#mogucnosti) i hasło [obrzeże](../recnik/kant.html) w słowniku.

Obrzeże to drobiazg, dopóki jest go dość. Gdy zabraknie go na ostatnie dwa fronty, a dekor jest z innej partii, drobiazg staje się jeszcze jednym kursem do dostawcy.
