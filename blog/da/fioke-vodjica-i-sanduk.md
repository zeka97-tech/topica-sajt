---
naslov: Skuffer: sådan vælger du skinne og regner skuffekassen ud
opis: Kuglelejeskinne, rulleskinne eller metalkasse: hvor stor luft pr. side, hvordan skinnelængden vælges, og hvordan skuffekassen regnes ud til et korpus på 600 mm, med nøjagtige tal.
datum: 2026-11-04
slika: ../slike/web/snimak-13-korpus-sa-fiokama-1600.webp
status: za-proveru
---

En skuffe er front plus skuffekasse plus skinne, og de tre dele skal passe sammen på millimeteren. Fronten ses, men skuffekasse og skinne afgør, om skuffen glider eller skurer. En fejl på 2 mm pr. side betyder, at kassen ikke går ind, eller at den slingrer. Her er den rækkefølge, en skuffe regnes ud i i værkstedet til et almindeligt under[korpus](../recnik/korpus.html) på 600 mm, med de tre skinnetyper, der oftest købes.

## Først lysmålet, så alt det andet

Alle skuffens mål udgår fra **lysmålet**: afstanden mellem sidernes indersider. På et korpus på 600 mm med sider af 18 mm spånplade er åbningen 600 − 2 × 18 = **564 mm**. I dybden regner du med korpussets indvendige dybde: et korpus på 560 i dybden har plader på 539 mm, fordi front (18) og bagklædning af hardboard (3) trækkes fra de 560. Mål ikke åbningen over fronten, og glem ikke bagklædningen; det er de to hyppigste fejl, før noget overhovedet er skåret.

## Tre skinnetyper og deres luft

Luften er den plads, skinnen kræver mellem skuffekassen og korpussets side, i hver side for sig.

| Skinne | Luft pr. side | Længder | Hvad den bærer |
|---|---|---|---|
| Kuglelejeskinne, fuldt udtræk | **13 mm** | 250–550, spring 50 | trækasse (side 18 mm) |
| Rulleskinne | **12,5 mm** | 250–500 | trækasse, lettere skuffer |
| Metalkasse (Modern Box, PRO) | efter formel fra kataloget | PRO: NL 300–550 | egne sider, du skærer kun bund og bagstykke |

Ved trækassen laver du hele skuffekassen: to sider, for- og bagstykke og bund af hardboard 3 mm. Ved metalkassen er siderne fra fabrikken, og du skærer kun **bund og bagstykke** efter producentens formel. Formlerne for GTV Modern Box fra kataloget: bundbredde = lysmål − 86, bundlængde = NL − 24, bagstykke = lysmål − 97, kassehøjder 68/83/146/210. For Modern Box PRO: lysmål − 75, NL − 24, lysmål − 87, højder 84/135/167/199.

## Skinnelængde: den største, der kan være der

Reglen er enkel, og programmet holder den på samme måde: **skinnen er den største nominelle længde, der kan være i korpusdybden**. Ved en indvendig dybde på 539 mm kan en kuglelejeskinne på 550 ikke være der, så det bliver **500**. Samme logik gælder for rulleskinnen (500) og metalkassen (NL 500). Den, der tager 550, fordi »der er plads til væggen«, har glemt hardboard og front; skinnen støder så mod bagklædningen eller skubber fronten ud.

## Eksempel: korpus 600 × 720 × 560, tre skuffer

Lysmål 564 mm, indvendig dybde 539 mm, skinne 500.

**Kuglelejeskinne, trækasse.** Skuffekassens udvendige bredde er 564 − 2 × 13 = **538 mm**. Kassens sider er af 18 mm spånplade, lige så lange som skinnen (500 mm, almindelig praksis). Kassens for- og bagstykke går mellem siderne: 538 − 36 = **502 mm**. Bunden af hardboard 3 mm er efter programmets regel 3 mm smallere og kortere end kassen: **535 × 497 mm**.

| Plade i skuffekassen | Mål (mm) | Tyk. | Stk |
|---|---|---|---|
| Kassens side | 500 × højde | 18 | 2 |
| For- / bagstykke | 502 × højde | 18 | 2 |
| Bund | 535 × 497 | 3 | 1 |

**Rulleskinne.** Luft på 12,5 mm pr. side giver en kasse på 564 − 25 = **539 mm**, så for- og bagstykke er 503 mm. Resten som ovenfor.

**Modern Box.** Bund 564 − 86 = **478 mm** bred og 500 − 24 = **476 mm** lang; bagstykke 564 − 97 = **467 mm** bredt. **Modern Box PRO**: bund **489 × 476**, bagstykke **477** mm. Bagstykkets højde følger den kassehøjde, du har købt, efter tabellen i kataloget.

## Skuffekassens sidehøjde

Højden på trækassens side vælges efter frontens højde, og efter hvad der skal i skuffen: til kuglelejeskinner er M 85, K 120, C 150 og F 180 mm almindelige, til rulleskinner 85/120/150. Den øverste skuffe under tværstykket får som regel den laveste kasse, den nederste den højeste. En regel, programmet ikke lader dig bryde: **skuffekassen går aldrig gennem pladen ovenover**. På et underskab under bordpladen sidder der over den øverste skuffe to tværstykker på 100 mm, så den øverste kasse skal kunne være under dem, uanset hvor høj fronten er. [Skufferne](../recnik/fioka-i-vodjica.html) tælles oppefra, så »første skuffe« er altid den under tværstykket.

## Typiske fejl

- Luften kun trukket fra én gang i stedet for i begge sider: kasse på 551 i stedet for 538, går ikke ind.
- Åbningen målt over korpussets udvendige bredde (600) i stedet for mellem siderne (564).
- Skinnelængden valgt efter korpussets udvendige dybde (560) i stedet for den indvendige (539).
- Metalkassens formel brugt på kassens bredde og ikke på lysmålet.
- Glemt [frontfuge](../recnik/zazor-fronta.html): 3 mm mellem nabofronter og 1,5 mm pr. skabskant, så skuffefronterne gnider mod hinanden.
- Kantbånd: skuffefronten kantes på alle fire kanter med 1 mm bånd, trækassens sider kun på overkanten med 0,45 mm; den, der kanter kassen hele vejen rundt, ændrer dens mål. Mere i guiden [om kantbånd](./kant-debljina-i-duzina.html).

## Sådan gør TOPICA

I programmet regner du ikke skuffen ud: på korpusset klikker du »Skuffer« med plus og minus, skriver hvor mange der skal være, og skuffekasse, bund og skinne udledes af lysmål og dybde efter reglerne ovenfor. Skinnen er GTV som standard, den største længde, der kan være der; når du ændrer korpusdybden fra 560 til 500, får skinne og kasse nye mål, og med dem [skærelisten](./krojna-lista.html).

![Underskab med tre skuffer 600 × 720 × 560 mm i programmet TOPICA: 3D-visning op ad væggen, panel med antal skuffer og valg af kantbånd, materiale og greb](../slike/web/snimak-13-korpus-sa-fiokama-1600.webp "Tre skuffer på ét korpus: antallet ændrer du med en knap, skuffekasse og skinne regner programmet.")

Skuffen er det dyreste sted at fejle i køkkenet, for fejlen ses først, når skinnerne er skruet i, og fronten hængt på. Derfor regnes den ud før skæringen, ikke efter.
