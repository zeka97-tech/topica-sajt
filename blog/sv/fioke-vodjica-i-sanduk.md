---
naslov: Lådor: så väljer du lådskena och räknar ut lådlådan
opis: Kulskena, rullskena eller metallåda — hur stort spelet per sida är, hur skenans längd väljs och hur lådlådan räknas för en stomme på 600 mm, med exakta tal.
datum: 2026-11-04
slika: ../slike/web/snimak-13-korpus-sa-fiokama-1600.webp
status: za-proveru
---

En låda är front plus lådlåda plus skena, och de tre delarna måste gå ihop på millimetern. Fronten syns, men lådlådan och skenan avgör om lådan glider eller skrapar. Ett fel på 2 mm per sida betyder att lådlådan inte går in eller att den slamrar. Här är ordningen i vilken man i verkstaden räknar en låda för en vanlig [bänkstomme](../recnik/korpus.html) på 600 mm, med de tre skentyper som köps oftast.

## Först den fria öppningen, sedan allt annat

Alla lådmått utgår från den **fria öppningen**: avståndet mellan sidornas insidor. För en stomme på 600 mm med sidor av 18 mm spånskiva är öppningen 600 − 2 × 18 = **564 mm**. På djupet räknar du med stommens innerdjup: en stomme med djup 560 har skivor som är 539 mm djupa, eftersom front (18) och rygg av hardboard (3) dras av från 560. Mät inte öppningen över fronten och glöm inte ryggen; det är de två vanligaste felen innan något alls är kapat.

## Tre skentyper och deras spel

Spelet är utrymmet skenan kräver mellan lådlådan och stommens sida, på varje sida för sig.

| Skena | Spel per sida | Längder | Vad den bär |
|---|---|---|---|
| Kulskena (teleskop) | **13 mm** | 250–550, steg 50 | trälåda (sida 18 mm) |
| Rullskena | **12,5 mm** | 250–500 | trälåda, lättare lådor |
| Metallåda (Modern Box, PRO) | enligt formel i katalogen | PRO: NL 300–550 | egna sidor, du kapar bara botten och bakstycke |

Med trälåda gör du hela lådlådan: två sidor, fram- och bakstycke och botten av hardboard 3 mm. Med metallåda är sidorna fabriksgjorda, och du kapar bara **botten och bakstycke** efter tillverkarens formel. Formlerna för GTV Modern Box ur katalogen: bottenbredd = fri öppning − 86, bottenlängd = NL − 24, bakstycke = öppning − 97, lådhöjder 68/83/146/210. För Modern Box PRO: öppning − 75, NL − 24, öppning − 87, höjder 84/135/167/199.

## Skenans längd: den största som ryms

Regeln är enkel och programmet håller den likadant: **skenan är den största nominella längd som ryms i stommens djup**. För innerdjupet 539 mm ryms inte kulskenan på 550, så det blir **500**. Samma logik gäller rullskenan (500) och metallådan (NL 500). Den som tar 550 för att ”det finns plats till väggen” har glömt hardboarden och fronten; skenan slår då i ryggen eller trycker ut fronten.

## Exempel: stomme 600 × 720 × 560, tre lådor

Öppning 564 mm, innerdjup 539 mm, skena 500.

**Kulskena, trälåda.** Lådlådans yttre bredd är 564 − 2 × 13 = **538 mm**. Lådsidorna är av spånskiva 18 mm, lika långa som skenan (500 mm, vanlig praxis). Fram- och bakstycke går mellan sidorna: 538 − 36 = **502 mm**. Botten av hardboard 3 mm är enligt programmets regel 3 mm smalare och kortare än lådlådan: **535 × 497 mm**.

| Lådlådans skiva | Mått (mm) | Tj. | Ant |
|---|---|---|---|
| Lådsida | 500 × höjd | 18 | 2 |
| Fram- / bakstycke | 502 × höjd | 18 | 2 |
| Botten | 535 × 497 | 3 | 1 |

**Rullskena.** Spel 12,5 mm per sida ger en lådlåda på 564 − 25 = **539 mm**, så fram- och bakstycke blir 503 mm. Resten som ovan.

**Modern Box.** Botten 564 − 86 = **478 mm** bred och 500 − 24 = **476 mm** lång; bakstycke 564 − 97 = **467 mm** brett. **Modern Box PRO**: botten **489 × 476**, bakstycke **477** mm. Bakstyckets höjd följer höjden på den låda du har köpt, enligt tabellen i katalogen.

## Lådsidans höjd

Trälådans sidhöjd väljs efter fronthöjden och efter vad som ska ligga i lådan: för kulskenor är M 85, K 120, C 150 och F 180 mm vanliga, för rullskenor 85/120/150. Översta lådan under regeln får oftast den lägsta lådlådan, den nedersta den högsta. Regeln programmet inte låter dig bryta: **lådlådan går aldrig genom skivan ovanför**. På ett bänkskåp under bänkskivan sitter två reglar om 100 mm ovanför översta lådan, så den övre lådlådan måste få plats under dem, oavsett hur hög fronten är. [Lådorna](../recnik/fioka-i-vodjica.html) räknas uppifrån, så ”första lådan” är alltid den under regeln.

## Vanliga fel

- Spelet draget bara en gång i stället för på båda sidor: lådlåda 551 i stället för 538, går inte in.
- Öppningen mätt över stommens yttre bredd (600) i stället för mellan sidorna (564).
- Skenlängden vald efter stommens yttre djup (560) i stället för det inre (539).
- Metallådans formel tillämpad på lådlådans bredd och inte på den fria öppningen.
- Glömd [frontspalt](../recnik/zazor-fronta.html): 3 mm mellan grannfronter och 1,5 mm per skåpkant, så lådfronterna gnider mot varandra.
- Kantlist: lådfronten kantas på alla fyra kanterna med 1 mm band, men trälådans sidor bara på överkanten med 0,45 mm; den som kantar lådlådan runt om ändrar dess mått. Mer i guiden [om kantlist](./kant-debljina-i-duzina.html).

## Så gör TOPICA

I programmet räknar du inte lådan: på stommen klickar du ”Lådor” med plus och minus, skriver in hur många de är, och lådlåda, botten och skena tas fram ur den fria öppningen och djupet enligt reglerna ovan. Skenan är GTV som förval, den största längd som ryms; ändrar du stommens djup från 560 till 500 får skena och lådlåda nya mått, och med dem [kaplistan](./krojna-lista.html).

![Bänkstomme med tre lådor 600 × 720 × 560 mm i programmet TOPICA: 3D-vy mot väggen, panel med antal lådor och val av kantlist, material och handtag](../slike/web/snimak-13-korpus-sa-fiokama-1600.webp "Tre lådor på en stomme: antalet ändrar du med en knapp, lådlåda och skena räknar programmet.")

Lådan är det dyraste stället att göra fel på i köket, eftersom felet syns först när skenorna är skruvade och fronten hängd. Därför räknas den före kapningen, inte efter.
