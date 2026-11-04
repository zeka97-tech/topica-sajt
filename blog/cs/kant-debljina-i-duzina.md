---
naslov: Hrana: jaká tloušťka kam patří (0,45 / 1 / 2 mm) a jak se počítá délka
opis: ABS hrana 0,45 mm na korpus, 1 mm na dvířka, 2 mm na namáhané hrany. Co je čistý rozměr po olepení a jak spočítat délku pásky s 10 % odpadu na příkladu.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Hrana je páska, nejčastěji ABS, kterou se uzavírá řezná hrana LTD, aby nebyl vidět střed desky a nevnikala do ní vlhkost. Tloušťka pásky není věc vkusu: tenká páska na dvířkách se odlepí při prvním nárazu a silná páska na vnitřní polici jsou vyhozené peníze. Tenhle návod říká, jaká tloušťka kam patří, které hrany se vůbec olepují, co znamená „čistý rozměr po olepení“ a jak spočítat, kolik metrů pásky objednat.

## Tři tloušťky a kam která patří

| Páska | Kam patří | Proč |
|---|---|---|
| **0,45 mm** | viditelné hrany [korpusu](../recnik/korpus.html) a přední hrana [police](../recnik/polica.html) | hrany se nenarážejí, páska jen uzavírá desku |
| **1 mm** | [dvířka](../recnik/front.html), všechny čtyři hrany | hranu berete do ruky a naráží se, potřebuje tělo |
| **2 mm** | dvířka, kde se chce silnější hrana, [pracovní desky](../recnik/radna-ploca.html), dveře šatních skříní | nejvíc namáhané hrany, páska zaoblená a odolná |

Páska 2 mm je lepší i na běžných dvířkách, když zákazník chce měkčí, zaoblený okraj; cena je vyšší a chce to stroj, který ji nalepí. Na korpusu jsou 2 mm chyba: uvnitř nejsou vidět a spoj s dvířky dostane hranu, kterou nikdo nechtěl.

## Které hrany se olepují a které ne

Pravidlo je prosté: olepuje se hrana, která je vidět nebo se jí dotýká ruka. Hrana u stěny, hrana pod pracovní deskou a hrana ve spoji s jiným dílcem se neolepují, protože by tam páska jen překážela sestavě a stála čas. Na běžném spodním korpusu to vypadá takhle:

- **Bok**: jedna dlouhá hrana, přední. Zadní je u stěny, horní pod deskou, spodní na podlaze.
- **Dno**: jedna dlouhá, přední.
- **Police**: jedna dlouhá, přední. Police je zapuštěná, je vidět jen zepředu.
- **Příčka**: dvě dlouhé. Přední příčka je vidět zespodu, když se otevřou dvířka, takže dostane obě.
- **Dvířka**: dvě dlouhé a dvě krátké, všechny čtyři.
- **Záda** ze sololitu 3 mm: bez hrany.

## Čistý rozměr po olepení

V [nářezovém plánu](./krojna-lista.html) je rozměr dílce **čistý po olepení**: je to rozměr hotového dílce s nalepenou páskou, tak jak vstupuje do korpusu. U pásky 0,45 mm je rozdíl pod půl milimetru a v praxi se neodečítá. U 1 mm a 2 mm se odečítá: dvířka, která v plánu stojí jako 717 × 597 s páskou 1 mm na všech čtyřech hranách, se řežou na 715 × 595, takže po olepení mají přesně 717 × 597. Kdo na to zapomene, dostane dvířka o 2 mm větší na každou stranu a spára 3 mm mezi dvířky zmizí.

Dohoda „čistý rozměr po olepení“ je v programu výchozí a dá se změnit, pokud dílna pracuje naopak, ale musí o tom vědět i ten, kdo řeže, i ten, kdo lepí.

## Jak se počítá délka pásky

Délka hrany pro jednu tloušťku je **součet všech olepovaných hran té tloušťky, zvětšený o 10 % odpadu**. Deset procent pokryje začátek a konec pásky na stroji, kusy, které se odříznou, a občas hranu, která se olepuje dvakrát. Procento je nastavitelné; dílna s ruční olepovačkou jde obvykle výš.

Příklad: spodní korpus 600 × 720 × 560, jedna dvířka, jedna police, dvě příčky.

| Dílec | Rozměr (mm) | Hrana | Ks | Délka pásky |
|---|---|---|---|---|
| Bok | 702 × 539 | 1 dlouhá · 0,45 | 2 | 2 × 702 = 1404 |
| Dno | 600 × 539 | 1 dlouhá · 0,45 | 1 | 600 |
| Police | 562 × 519 | 1 dlouhá · 0,45 | 1 | 562 |
| Příčka | 564 × 100 | 2 dlouhé · 0,45 | 2 | 2 × 2 × 564 = 2256 |
| Dvířka | 717 × 597 | 2 dlouhé, 2 krátké · 1 mm | 1 | 2 × 717 + 2 × 597 = 2628 |
| Záda | 717 × 597 | žádná | 1 | 0 |

Součet pro pásku **0,45 mm**: 1404 + 600 + 562 + 2256 = **4822 mm**; s 10 % odpadu 5304 mm, tedy asi **5,3 m**. Součet pro pásku **1 mm**: **2628 mm**; s odpadem 2891 mm, asi **2,9 m**. Na jeden korpus celkem asi 8,2 m pásky, dvě tloušťky, dva dekory. Kuchyň o dvanácti skříňkách se zásuvkami a horní řadou snadno překročí sto metrů, a tam odhad „od oka“ netrefí o celou roli.

## Značky hrany v nářezovém plánu

Kdo řeže, nemusí vědět, kam dílec přijde, stačí mu značka hran. Program používá čtyři:

- **1 dlouhá**: jen jedna ze dvou dlouhých hran dílce.
- **2 dlouhé**: obě dlouhé hrany, krátké zůstávají holé.
- **2 dlouhé, 2 krátké**: všechny čtyři, typicky dvířka.
- **žádná**: záda a dna zásuvek ze sololitu.

„Dlouhá“ se vztahuje k delší straně dílce, ne k prvnímu rozměru v plánu. První rozměr je směr kresby a u bílého lamina na něm nezáleží, kdežto dlouhá hrana je vždy ta větší ze dvou. U boku 702 × 539 je dlouhá 702, to je přední svislá hrana; u dna 600 × 539 je dlouhá 600, přední vodorovná.

![Tabulka „Podle rozměru“ v programu TOPICA pro jeden korpus: šest dílců bílého lamina, dvířka v dekoru dub a záda ze sololitu, se sloupcem Hrana, kde stojí „1 dlouhá“, „2 dlouhé“, „2 dlouhé, 2 krátké“ a „žádná“](../slike/web/isecak-po-meri-tabela-1600.webp "Sloupec Hrana v nářezovém plánu: značka hran, seskupeno podle materiálu.")

## Jak to dělá TOPICA

Tloušťku hrany zadáte jednou pro korpus a jednou pro dvířka v nastavení projektu (výchozí 0,45 a 1 mm, dekor „jako deska“) a program každému dílci zapíše, které hrany se olepují, a sečte délku podle tloušťky a dekoru, s odpadem, který jste nastavili. Cenu metru pásky zadáváte vy; nezadaná je nula, program si ji nevymýšlí. Seznam materiálu s hranou je součást stejného pohledu jako nářezový plán, viz část [funkce](../#mogucnosti) a pojem [hrana](../recnik/kant.html) ve slovníku.

Hrana je maličkost, dokud je jí dost. Když dojde na poslední dvoje dvířka a dekor je z jiné šarže, z maličkosti je další cesta k dodavateli.
