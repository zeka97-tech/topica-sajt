---
naslov: Skuffer: slik velger du skinne og regner ut skuffekassen
opis: Kulelagret, rulleskinne eller metallkasse: klaring per side, valg av skinnelengde og utregning av skuffekassen for et skrog på 600 mm, med nøyaktige tall.
datum: 2026-11-04
slika: ../slike/web/snimak-13-korpus-sa-fiokama-1600.webp
status: za-proveru
---

En skuff er front pluss kasse pluss skinne, og de tre delene må stemme på millimeteren. Fronten synes, men kassen og skinnen avgjør om skuffen glir eller skurer. En feil på 2 mm per side betyr at kassen ikke går inn, eller at den slarker. Her er rekkefølgen skuffen regnes ut i på verkstedet, for et vanlig benke[skrog](../recnik/korpus.html) på 600 mm, med de tre skinnetypene det kjøpes mest av.

## Først lysåpningen, så alt annet

Alle skuffemål går ut fra **lysåpningen**: avstanden mellom innsidene av sidene. På et skrog på 600 mm med sider i 18 mm sponplate er åpningen 600 − 2 × 18 = **564 mm**. I dybden regner du med skrogets innvendige dybde: et skrog på 560 i dybden har plater som er 539 mm dype, for fra 560 trekkes front (18) og bakplate i hardplate (3). Ikke mål åpningen over fronten, og ikke glem bakplaten; det er de to vanligste feilene før noe som helst er kappet.

## Tre skinnetyper og klaringen deres

Klaringen er plassen skinnen krever mellom kassen og skrogsiden, på hver side for seg.

| Skinne | Klaring per side | Lengder | Hva den bærer |
|---|---|---|---|
| Kulelagret teleskopskinne | **13 mm** | 250–550, trinn 50 | trekasse (side 18 mm) |
| Rulleskinne | **12,5 mm** | 250–500 | trekasse, lettere skuffer |
| Metallkasse (Modern Box, PRO) | etter formel fra katalogen | PRO: NL 300–550 | egne sider, du kapper bare bunn og bakstykke |

Med trekasse lager du hele kassen: to sider, forstykke og bakstykke og bunn i hardplate 3 mm. Med metallkasse er sidene fabrikklaget, og du kapper bare **bunn og bakstykke** etter produsentens formel. Formlene for GTV Modern Box fra katalogen: bunnbredde = lysåpning − 86, bunnlengde = NL − 24, bakstykke = åpning − 97, kassehøyder 68/83/146/210. For Modern Box PRO: åpning − 75, NL − 24, åpning − 87, høyder 84/135/167/199.

## Skinnelengde: den største som får plass

Regelen er enkel, og programmet holder den likt: **skinnen er den største nominelle lengden som får plass i skrogdybden**. For en innvendig dybde på 539 mm får en kulelagret skinne på 550 ikke plass, så det blir **500**. Samme logikk gjelder rulleskinnen (500) og metallkassen (NL 500). Den som tar 550 fordi «det er plass til veggen», har glemt hardplaten og fronten; skinnen slår da i bakplaten eller skyver fronten ut.

## Eksempel: skrog 600 × 720 × 560, tre skuffer

Åpning 564 mm, innvendig dybde 539 mm, skinne 500.

**Kulelagret teleskopskinne, trekasse.** Kassens utvendige bredde er 564 − 2 × 13 = **538 mm**. Kassens sider er i 18 mm sponplate, like lange som skinnen (500 mm, vanlig praksis). Forstykke og bakstykke går mellom sidene: 538 − 36 = **502 mm**. Bunnen i hardplate 3 mm er etter programmets regel 3 mm smalere og kortere enn kassen: **535 × 497 mm**.

| Plate i kassen | Mål (mm) | Tyk. | Stk |
|---|---|---|---|
| Kasseside | 500 × høyde | 18 | 2 |
| Forstykke / bakstykke | 502 × høyde | 18 | 2 |
| Bunn | 535 × 497 | 3 | 1 |

**Rulleskinne.** Klaring 12,5 mm per side gir en kasse på 564 − 25 = **539 mm**, så forstykke og bakstykke blir 503 mm. Resten som over.

**Modern Box.** Bunn 564 − 86 = **478 mm** bred og 500 − 24 = **476 mm** lang; bakstykke 564 − 97 = **467 mm** bredt. **Modern Box PRO**: bunn **489 × 476**, bakstykke **477** mm. Bakstykkets høyde følger kassehøyden du har kjøpt, etter tabellen i katalogen.

## Høyden på kassesiden

Høyden på siden i en trekasse velges etter fronthøyden og etter hva som skal i skuffen: for kulelagrede skinner er M 85, K 120, C 150 og F 180 mm vanlig, for rulleskinner 85/120/150. Den øverste skuffen under traversen får vanligvis den laveste kassen, den nederste den høyeste. Regelen programmet ikke lar deg bryte: **kassen går aldri gjennom platen over**. På et benkeskap under benkeplaten står det to traverser på 100 mm over den øverste skuffen, så den øverste kassen må få plass under dem, uansett hvor høy fronten er. [Skuffene](../recnik/fioka-i-vodjica.html) telles ovenfra, så «første skuff» er alltid den under traversen.

## Vanlige feil

- Klaringen trukket fra bare én gang i stedet for på begge sider: kasse på 551 i stedet for 538, går ikke inn.
- Åpningen målt over skrogets utvendige bredde (600) i stedet for mellom sidene (564).
- Skinnelengden valgt etter skrogets utvendige dybde (560) i stedet for den innvendige (539).
- Metallkassens formel brukt på kassens bredde, og ikke på lysåpningen.
- Glemt [frontspalte](../recnik/zazor-fronta.html): 3 mm mellom nabofronter og 1,5 mm per skapkant, så skuffefrontene gnisser mot hverandre.
- Kantlist: skuffefronten kantes på alle fire kanter med 1 mm list, og trekassens sider bare på overkanten med 0,45 mm; den som kanter kassen på alle sider, endrer målet dens. Mer i guiden [om kantlist](./kant-debljina-i-duzina.html).

## Slik gjør TOPICA det

I programmet regner du ikke ut skuffen: på skroget klikker du «Skuffer» med pluss og minus, skriver inn hvor mange det er, og kasse, bunn og skinne avledes fra lysåpningen og dybden etter reglene over. Skinnen er GTV som standard, den største lengden som får plass; når du endrer skrogdybden fra 560 til 500, får skinne og kasse nye mål, og med dem [kapplisten](./krojna-lista.html).

![Benkeskrog med tre skuffer 600 × 720 × 560 mm i TOPICA: 3D-visning inntil veggen, panel med antall skuffer og valg av kantlist, materiale og håndtak](../slike/web/snimak-13-korpus-sa-fiokama-1600.webp "Tre skuffer på ett skrog: antallet endrer du med en knapp, kasse og skinne regner programmet ut.")

Skuffen er det dyreste stedet å gjøre feil på kjøkkenet, for feilen synes først når skinnene er skrudd og fronten hengt. Derfor regnes den ut før kappingen, ikke etter.
