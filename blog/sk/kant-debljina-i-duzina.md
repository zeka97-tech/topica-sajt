---
naslov: Hrana: aká hrúbka kam patrí (0,45 / 1 / 2 mm) a ako sa počíta dĺžka
opis: ABS hrana 0,45 mm ide na korpus, 1 mm na čelá, 2 mm na namáhané hrany. Čistý rozmer po olepení a výpočet dĺžky pásky s 10 % odpadu na príklade korpusu.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Hrana je páska, najčastejšie ABS, ktorou sa uzatvára odrezaná hrana LTD, aby nebolo vidieť stred dosky a aby do nej nevnikala vlhkosť. Hrúbka pásky nie je vec vkusu: tenká páska na dvierkach sa odlepí pri prvom náraze a hrubá páska na vnútornej polici sú vyhodené peniaze. Tento návod hovorí, aká hrúbka kam patrí, ktoré hrany sa vôbec olepujú, čo znamená „čistý rozmer po olepení“ a ako si vypočítať, koľko metrov pásky objednať.

## Tri hrúbky a kam ktorá patrí

| Páska | Kam patrí | Prečo |
|---|---|---|
| **0,45 mm** | viditeľné hrany [korpusu](../recnik/korpus.html) a predná hrana [police](../recnik/polica.html) | do hrán sa nenaráža, páska len uzatvára dosku |
| **1 mm** | [čelá](../recnik/front.html), všetky štyri hrany | hranu chytá ruka a naráža sa do nej, potrebuje telo |
| **2 mm** | čelá, kde sa žiada pevnejšia hrana, [pracovné dosky](../recnik/radna-ploca.html), dvere šatníka | najviac namáhané hrany, páska zaoblená a odolná |

Páska 2 mm je lepšia aj na bežných čelách, keď zákazník chce mäkší, zaoblený okraj; cena je vyššia a treba stroj, ktorý ju lepí. Na korpuse je 2 mm chyba: vnútri ju nevidno a spoj s čelom dostane hranu, ktorú nikto nežiadal.

## Ktoré hrany sa olepujú a ktoré nie

Pravidlo je jednoduché: olepuje sa hrana, ktorú vidno alebo ktorej sa dotýka ruka. Hrana pri stene, hrana pod pracovnou doskou a hrana v spoji s iným dielcom sa neolepujú, pretože by tam páska len prekážala zostave a míňala čas. Na bežnom spodnom korpuse to vyzerá takto:

- **Bok**: jedna dlhšia hrana, predná. Zadná je pri stene, horná pod doskou, spodná na podlahe.
- **Dno**: jedna dlhšia, predná.
- **Polica**: jedna dlhšia, predná. Polica je zapustená, vidno ju len spredu.
- **Priečka**: dve dlhšie. Prednú priečku vidno zospodu, keď sa otvoria dvierka, takže dostane obe.
- **Čelo**: dve dlhšie a dve kratšie, všetky štyri.
- **Chrbát** zo sololitu 3 mm: bez hrany.

## Čistý rozmer po olepení

V [nárezovom pláne](./krojna-lista.html) je rozmer dielca **čistý po olepení**: je to rozmer hotového dielca s nalepenou páskou, tak, ako vstupuje do korpusu. Pri páske 0,45 mm je rozdiel pod pol milimetra a v praxi sa neodpočítava. Pri 1 mm a 2 mm sa odpočítava: čelo, ktoré v pláne stojí ako 717 × 597 s páskou 1 mm na všetkých štyroch hranách, sa reže na 715 × 595, a po olepení má presne 717 × 597. Kto na to zabudne, dostane čelo o 2 mm väčšie z každej strany a škára 3 mm medzi dvierkami zmizne.

Dohoda „čistý po olepení“ je v programe predvolená a dá sa zmeniť, ak dielňa pracuje opačne, ale musí o tom vedieť aj ten, kto reže, aj ten, kto lepí.

## Ako sa počíta dĺžka pásky

Dĺžka hrany pre jednu hrúbku je **súčet všetkých olepených hrán tejto hrúbky, zväčšený o 10 % odpadu**. Desať percent pokrýva začiatok a koniec pásky na stroji, kusy, ktoré sa odrežú, a občasnú hranu, ktorá sa olepuje dvakrát. Percento je nastaviteľné; dielňa s ručnou olepovačkou ide zvyčajne vyššie.

Príklad: spodný korpus 600 × 720 × 560, jedny dvierka, jedna polica, dve priečky.

| Dielec | Rozmer (mm) | Hrana | Ks | Dĺžka pásky |
|---|---|---|---|---|
| Bok | 702 × 539 | 1 dlhá · 0,45 | 2 | 2 × 702 = 1404 |
| Dno | 600 × 539 | 1 dlhá · 0,45 | 1 | 600 |
| Polica | 562 × 519 | 1 dlhá · 0,45 | 1 | 562 |
| Priečka | 564 × 100 | 2 dlhé · 0,45 | 2 | 2 × 2 × 564 = 2256 |
| Čelo | 717 × 597 | 2 dlhé, 2 krátke · 1 mm | 1 | 2 × 717 + 2 × 597 = 2628 |
| Chrbát | 717 × 597 | žiadna | 1 | 0 |

Súčet pre pásku **0,45 mm**: 1404 + 600 + 562 + 2256 = **4822 mm**; s 10 % odpadu 5304 mm, teda približne **5,3 m**. Súčet pre pásku **1 mm**: **2628 mm**; s odpadom 2891 mm, približne **2,9 m**. Na jeden korpus spolu približne 8,2 m pásky, dve hrúbky, dva dekory. Kuchyňa s dvanástimi skrinkami, so zásuvkami a horným radom ľahko prekročí sto metrov a tu sa odhad „od oka“ pomýli o celý kotúč.

## Označenie hrany v nárezovom pláne

Kto reže, nemusí vedieť, kam dielec ide, stačí mu označenie hrán. Program používa štyri:

- **1 dlhá**: len jedna z dvoch dlhších hrán dielca.
- **2 dlhé**: obe dlhšie hrany, kratšie zostávajú holé.
- **2 dlhé, 2 krátke**: všetky štyri, typicky čelo.
- **žiadna**: chrbát a dná zásuviek zo sololitu.

„Dlhá“ sa vzťahuje na dlhšiu stranu dielca, nie na prvý rozmer v pláne. Prvý rozmer je smer kresby a pri bielej LTD nie je podstatný, dlhšia hrana je vždy tá väčšia z dvoch. Pri boku 702 × 539 je dlhšia 702, to je predná zvislá hrana; pri dne 600 × 539 je dlhšia 600, predná vodorovná.

![Tabuľka „Podľa rozmeru“ v programe TOPICA pre jeden korpus: šesť dielcov bielej LTD, čelo v dekore dub a chrbát zo sololitu, so stĺpcom Hrana, v ktorom stojí „1 dlhá“, „2 dlhé“, „2 dlhé, 2 krátke“ a „žiadna“](../slike/web/isecak-po-meri-tabela-1600.webp "Stĺpec Hrana v nárezovom pláne: označenie hrán, zoskupené podľa materiálu.")

## Ako to robí TOPICA

Hrúbku hrany zadáte raz pre korpus a raz pre čelá v nastaveniach projektu (predvolene 0,45 a 1 mm, dekor „ako doska“) a program každému dielcu zapíše, ktoré hrany sa olepujú, a sčíta dĺžku podľa hrúbky a dekoru, s odpadom, ktorý ste nastavili. Cenu metra pásky zadávate vy; nezadaná je nula, program si ju nevymýšľa. Zoznam materiálu s hranou je súčasťou rovnakého pohľadu ako nárezový plán, pozri časť [funkcie](../#mogucnosti) a pojem [ABS hrana](../recnik/kant.html) v slovníku.

Hrana je maličkosť, kým jej je dosť. Keď dôjde na posledných dvoch čelách a dekor je z inej šarže, z maličkosti je ďalšia cesta k dodávateľovi.
