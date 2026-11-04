---
naslov: Vad en kaplista är och hur du läser den
opis: En kaplista är listan över varje skiva i en möbel med exakta mått, tjocklek, kantlist och antal. Hur den ser ut, vad ”första måttet = fiberriktningen” betyder och hur TOPICA tar fram den automatiskt.
datum: 2026-11-04
slika: ../slike/web/snimak-33-po-meri-1600.webp
---

En kaplista (eller såglista) är pappret eller tabellen som går från verkstaden till justersågen. På den står varje skiva i en möbel: hur lång, hur bred, hur tjock, vilket material, var kantlisten ska sitta och hur många bitar som behövs. Den som kapar skivorna behöver inte veta hur möbeln ser ut; listan räcker. Det gör kaplistan till det viktigaste dokumentet mellan ritningen och den färdiga möbeln: stämmer den passar allt; saknas 18 mm på papperet saknas de i köket också.

## Vad en kaplista innehåller

För skivmöbler (kök, garderober, skåp i spånskiva) bär en rad i listan oftast sex uppgifter:

- **Skivans namn** och vilken stomme den hör till: sida, botten, hylla, regel, front, baksida.
- **Längd × bredd** i millimeter, den färdiga skivans nettomått.
- **Tjocklek**: 18 mm för stomme och fronter, 3 mm hardboard för baksidor, 8–10 mm för lådbottnar.
- **Material**: vit spånskiva, ekdekor, färgad hardboard.
- **Kantlist**: vilka kanter som får kantband och vilken list (0,45 mm på stommen, 1 eller 2 mm på fronter).
- **Antal**: två sidor, en botten, två reglar.

En bra lista är grupperad efter material och tjocklek, för det är så skivorna kapas: all vit 18 mm spånskiva först, sedan fronter, sedan hardboard.

## Första måttet är fiberriktningen

Med mönstrade dekorer (ek, valnöt, sonoma) spelar det roll hur skivan ligger på plattan. Kaplistor följer därför en konvention: **första måttet går alltid längs fibern**. En front på 717 × 597 har ådringen stående, som en lucka ska ha. Skriven som 597 × 717 skulle ådringen ligga. För vit spånskiva och hardboard spelar det ingen roll, så programmet märker baksidan med ”utan fiberriktning”.

## Exempel: en bänkstomme 600 × 720 × 560

En vanlig bänkstomme för kök med en lucka och en hylla har åtta skivor. Botten ligger över sidorna (full bredd 600), så sidorna är 702 höga, inte 720. Stommens djup är 539, eftersom fronten (18) och baksidan (3) dras av från 560.

| Skiva | Mått (mm) | Tj. | Kant | Ant |
|---|---|---|---|---|
| Sida | 702 × 539 | 18 | 1 lång | 2 |
| Botten | 600 × 539 | 18 | 1 lång | 1 |
| Hylla | 562 × 519 | 18 | 1 lång | 1 |
| Regel | 564 × 100 | 18 | 2 långa | 2 |
| Front (lucka) | 717 × 597 | 18 | 2 långa, 2 korta | 1 |
| Baksida (hardboard) | 717 × 597 | 3 | ingen | 1 |

Någon måste räkna fram varje siffra här. För en stomme är det tio minuter med en penna. För ett kök med tolv skåp är det en timme och minst ett fel.

## Så bygger TOPICA kaplistan

I programmet skriver du inte kaplistan: den räknas fram ur stommarna du har ställt in i rummet. Ändra ett skåp från 600 till 450 brett, och alla åtta skivor får nya mått i samma stund, tillsammans med kantlist, beslag och pris. Vyn ”Efter mått” lägger lika mått på en rad, grupperade efter material, med kantmarkering och antal, precis som det går till sågen. Den vyn kopierar du med ett klick och skickar som meddelande eller skriver ut till PDF.

![Kaplistan ”Efter mått” i TOPICA för en bänkstomme 600 × 720 × 560 mm: åtta skivor grupperade efter material, med mått, tjocklek, kantlist och antal](../slike/web/snimak-33-po-meri-1600.webp "Vyn ”Efter mått” för en stomme: åtta skivor, tre material, 2,34 m² skiva.")

Programmet håller själv regeln ”första måttet = fiberriktningen”: en front skrivs alltid stående, och hardboard får märkningen ”utan fiberriktning”. Ändrar du senare baksidans tjocklek eller frontens kantlist i verkstadsinställningarna slår ändringen igenom i varje skiva i projektet, även de du redan har tittat på.

En kaplista är inte komplicerad. Det komplicerade är att få den rätt varje gång, för varje skåp, efter att kunden har ändrat sig tre gånger. Det är det programmet är till för.
