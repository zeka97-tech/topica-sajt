---
naslov: Szuflady: jak wybrać prowadnicę i policzyć skrzynkę
opis: Prowadnica kulkowa, rolkowa czy szuflada metalowa — jaki jest luz na stronę, jak dobiera się długość prowadnicy i jak liczy się skrzynkę szuflady do korpusu 600 mm, z dokładnymi liczbami.
datum: 2026-11-04
slika: ../slike/web/snimak-13-korpus-sa-fiokama-1600.webp
status: za-proveru
---

Szuflada to front plus skrzynka plus prowadnica, i te trzy części muszą się zgrać co do milimetra. Front widać, ale skrzynka i prowadnica decydują, czy szuflada się przesuwa, czy trze. Błąd 2 mm na stronę znaczy, że skrzynka nie wchodzi albo się telepie. Tu jest kolejność, w jakiej w warsztacie liczy się szufladę do zwykłego dolnego [korpusu](../recnik/korpus.html) o szerokości 600 mm, z trzema rodzajami prowadnic, które kupuje się najczęściej.

## Najpierw światło, potem cała reszta

Wszystkie wymiary szuflady wychodzą ze **światła korpusu**: odstępu między wewnętrznymi stronami boków. Przy korpusie 600 mm z bokami z płyty wiórowej 18 mm światło to 600 − 2 × 18 = **564 mm**. W głąb liczysz z głębokością wewnętrzną korpusu: korpus o głębokości 560 ma formatki głębokie na 539 mm, bo od 560 odejmuje się front (18) i plecy z HDF (3). Nie mierz światła razem z frontem i nie zapomnij o plecach; to dwa najczęstsze błędy, zanim cokolwiek zostanie pocięte.

## Trzy rodzaje prowadnic i ich luz

Luz to przestrzeń, której prowadnica wymaga między skrzynką a bokiem korpusu, z każdej strony osobno.

| Prowadnica | Luz na stronę | Długości | Co niesie |
|---|---|---|---|
| Kulkowa teleskopowa | **13 mm** | 250–550, co 50 | skrzynkę drewnianą (bok 18 mm) |
| Rolkowa | **12,5 mm** | 250–500 | skrzynkę drewnianą, lżejsze szuflady |
| Szuflada metalowa (Modern Box, PRO) | według wzoru z katalogu | PRO: NL 300–550 | własne boki, ty tniesz tylko dno i tył |

Przy skrzynce drewnianej robisz całą skrzynkę: dwa boki, przednią i tylną ściankę oraz dno z HDF 3 mm. Przy szufladzie metalowej boki są fabryczne, a ty tniesz tylko **dno i tył** według wzoru producenta. Wzory dla GTV Modern Box z katalogu: szerokość dna = światło korpusu − 86, długość dna = NL − 24, tył = światło − 97, wysokości szuflady 68/83/146/210. Dla Modern Box PRO: światło − 75, NL − 24, światło − 87, wysokości 84/135/167/199.

## Długość prowadnicy: największa, która się mieści

Zasada jest prosta i program trzyma ją tak samo: **prowadnica to największa długość nominalna, która mieści się w głębokości korpusu**. Dla głębokości wewnętrznej 539 mm prowadnica kulkowa 550 się nie mieści, więc idzie **500**. Ta sama logika dotyczy rolkowej (500) i szuflady metalowej (NL 500). Kto bierze 550, bo „jest miejsce do ściany”, zapomniał o HDF i froncie; prowadnica wtedy uderza w plecy albo wypycha front na zewnątrz.

## Przykład: korpus 600 × 720 × 560, trzy szuflady

Światło 564 mm, głębokość wewnętrzna 539 mm, prowadnica 500.

**Kulkowa teleskopowa, skrzynka drewniana.** Szerokość zewnętrzna skrzynki to 564 − 2 × 13 = **538 mm**. Boki skrzynki są z płyty wiórowej 18 mm, długie tyle co prowadnica (500 mm, zwykła praktyka). Przednia i tylna ścianka skrzynki idą między boki: 538 − 36 = **502 mm**. Dno z HDF 3 mm jest według zasady programu o 3 mm węższe i krótsze od skrzynki: **535 × 497 mm**.

| Formatka skrzynki | Wymiar (mm) | Gr. | Szt. |
|---|---|---|---|
| Bok skrzynki | 500 × wysokość | 18 | 2 |
| Ścianka przednia / tylna | 502 × wysokość | 18 | 2 |
| Dno | 535 × 497 | 3 | 1 |

**Rolkowa.** Luz 12,5 mm na stronę daje skrzynkę 564 − 25 = **539 mm**, więc ścianka przednia i tylna mają 503 mm. Reszta jak wyżej.

**Modern Box.** Dno 564 − 86 = **478 mm** szerokości i 500 − 24 = **476 mm** długości; tył 564 − 97 = **467 mm** szerokości. **Modern Box PRO**: dno **489 × 476**, tył **477** mm. Wysokość tyłu idzie według wysokości szuflady, którą kupiłeś, według tabeli z katalogu.

## Wysokość boku skrzynki

Wysokość boku skrzynki drewnianej dobiera się według wysokości frontu i tego, co idzie do szuflady: do prowadnic kulkowych typowe są M 85, K 120, C 150 i F 180 mm, do rolkowych 85/120/150. Górna szuflada pod listwą dostaje zwykle najniższą skrzynkę, dolna najwyższą. Zasada, której program nie pozwala złamać: **skrzynka nigdy nie wchodzi w formatkę nad sobą**. W szafce dolnej pod blatem nad górną szufladą są dwie listwy o wysokości 100 mm, więc górna skrzynka musi zmieścić się pod nimi, niezależnie od tego, jak wysoki jest front. [Szuflady](../recnik/fioka-i-vodjica.html) liczy się od góry, więc „pierwsza szuflada” to zawsze ta pod listwą.

## Częste błędy

- Luz odjęty tylko raz zamiast z obu stron: skrzynka 551 zamiast 538, nie wchodzi.
- Światło mierzone po szerokości zewnętrznej korpusu (600) zamiast między bokami (564).
- Długość prowadnicy dobrana według głębokości korpusu z zewnątrz (560) zamiast wewnętrznej (539).
- Wzór szuflady metalowej zastosowany do szerokości skrzynki, a nie do światła korpusu.
- Zapomniana [szczelina frontu](../recnik/zazor-fronta.html): 3 mm między sąsiednimi frontami i 1,5 mm na krawędź szafki, więc fronty szuflad trą o siebie.
- Obrzeże: front szuflady okleja się na wszystkich czterech krawędziach taśmą 1 mm, a boki skrzynki drewnianej tylko na górnej krawędzi 0,45 mm; kto okleja skrzynkę ze wszystkich stron, zmienia jej wymiar. Więcej w poradniku [o obrzeżu](./kant-debljina-i-duzina.html).

## Jak robi to TOPICA

W programie szuflady nie liczysz: na korpusie klikasz „Szuflady” z plusem i minusem, wpisujesz, ile ich jest, a skrzynka, dno i prowadnica wyprowadzają się ze światła i głębokości według powyższych zasad. Prowadnica to domyślnie GTV, największa długość, która się mieści; gdy zmienisz głębokość korpusu z 560 na 500, prowadnica i skrzynka dostają nowe wymiary, a z nimi [lista cięcia](./krojna-lista.html).

![Szafka dolna z trzema szufladami 600 × 720 × 560 mm w programie TOPICA: widok 3D przy ścianie, panel z liczbą szuflad i wyborem obrzeża, materiału i uchwytów](../slike/web/snimak-13-korpus-sa-fiokama-1600.webp "Trzy szuflady na jednym korpusie: liczbę zmieniasz przyciskiem, skrzynkę i prowadnicę liczy program.")

Szuflada to najdroższe miejsce na błąd w kuchni, bo błąd widać dopiero, gdy prowadnice są przykręcone, a front zawieszony. Dlatego liczy się ją przed cięciem, a nie po.
