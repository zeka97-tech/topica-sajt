---
naslov: Co je nářezový plán a jak ho číst
opis: Nářezový plán je seznam všech dílců jednoho kusu nábytku s přesnými rozměry, tloušťkou, hranou a počtem kusů. Jak vypadá, co znamená „první rozměr = směr kresby“ a jak ho TOPICA vytváří automaticky.
datum: 2026-11-04
slika: ../slike/web/snimak-33-po-meri-1600.webp
---

Nářezový plán je papír (nebo tabulka), který jde z dílny k formátovací pile. Je na něm každý dílec jednoho kusu nábytku: jak je dlouhý, jak široký, jak tlustý, z jakého materiálu, kde má hranu a kolik kusů je potřeba. Kdo řeže desky, nemusí vědět, jak nábytek vypadá; stačí mu plán. Proto je nářezový plán (někde mu říkají kusovník) nejdůležitější dokument mezi návrhem a hotovým nábytkem: když je správně, všechno sedí; když na papíře chybí 18 mm, chybí i v kuchyni.

## Co nářezový plán obsahuje

U deskového nábytku (kuchyně, skříně, komody z lamina) nese jeden řádek plánu obvykle šest údajů:

- **Název dílce** a ke které skříňce patří: bok, dno, police, příčka, dvířka, záda.
- **Délka × šířka** v milimetrech, čistý rozměr hotového dílce.
- **Tloušťka**: 18 mm na korpus a dvířka, 3 mm sololit na záda, 8–10 mm na dna zásuvek.
- **Materiál**: bílé lamino, dekor dub, barevný sololit.
- **Hrana**: které hrany se olepují a jakou páskou (0,45 mm na korpus, 1 nebo 2 mm na dvířka).
- **Počet kusů**: dva boky, jedno dno, dvě příčky.

Dobrý plán je seskupený podle materiálu a tloušťky, protože tak se desky řežou: nejdřív všechno bílé lamino 18 mm, pak dvířka, nakonec sololit.

## První rozměr je směr kresby

U dekorů s kresbou (dub, ořech, sonoma) záleží na tom, jak dílec na desce leží. Nářezové plány proto drží jednu konvenci: **první rozměr vždy běží po směru kresby (let)**. Dvířka 717 × 597 mají kresbu svisle, jak mají dvířka mít. Zapsaná jako 597 × 717 by měla kresbu vodorovně. U bílého lamina a sololitu na tom nezáleží, proto program označí záda jako „bez směru“.

## Příklad: spodní skříňka 600 × 720 × 560

Obyčejná spodní kuchyňská skříňka s jedněmi dvířky a jednou policí má osm dílců. Dno sedí na bocích (plná šířka 600), takže boky jsou vysoké 702, ne 720. Hloubka korpusu je 539, protože z 560 se odečtou dvířka (18) a záda (3).

| Dílec | Rozměr (mm) | Tl. | Hrana | Ks |
|---|---|---|---|---|
| Bok | 702 × 539 | 18 | 1 dlouhá | 2 |
| Dno | 600 × 539 | 18 | 1 dlouhá | 1 |
| Police | 562 × 519 | 18 | 1 dlouhá | 1 |
| Příčka | 564 × 100 | 18 | 2 dlouhé | 2 |
| Dvířka | 717 × 597 | 18 | 2 dlouhé, 2 krátké | 1 |
| Záda (sololit) | 717 × 597 | 3 | žádná | 1 |

Každé z těchto čísel musí někdo spočítat. U jedné skříňky je to deset minut s tužkou. U kuchyně o dvanácti skříňkách je to hodina a nejméně jedna chyba.

## Jak TOPICA sestavuje nářezový plán

V programu nářezový plán nepíšete: počítá se ze skříněk, které jste postavili do místnosti. Změňte šířku skříňky z 600 na 450 a všech osm dílců dostane v tu chvíli nové rozměry, spolu s hranami, kováním a cenou. Pohled „Podle rozměru“ dá stejné rozměry na jeden řádek, seskupené podle materiálu, se značkou hrany a počtem kusů, přesně tak, jak to jde na pilu. Tento pohled zkopírujete jedním kliknutím a pošlete jako zprávu nebo vytisknete do PDF.

![Nářezový plán „Podle rozměru“ v programu TOPICA pro spodní skříňku 600 × 720 × 560 mm: osm dílců seskupených podle materiálu, s rozměrem, tloušťkou, hranou a počtem kusů](../slike/web/snimak-33-po-meri-1600.webp "Pohled „Podle rozměru“ pro jednu skříňku: osm dílců, tři materiály, 2,34 m² desky.")

Pravidlo „první rozměr = směr kresby“ program hlídá sám: dvířka jsou vždy zapsaná nastojato a sololit nese značku „bez směru“. Když později v nastavení dílny změníte tloušťku zad nebo hranu dvířek, změna projde každým dílcem v projektu, i těmi, které jste si už prohlédli.

Nářezový plán není složitý. Složité je udělat ho správně pokaždé, pro každou skříňku, poté, co si zákazník třikrát rozmyslel, co chce. Od toho je program.
