---
naslov: System 32: därför har europeiska möbler hål på 32 mm
opis: System 32 är en rad hål Ø5 mm med 32 mm delning, det första 37 mm från sidans framkant. Varifrån det kommer, hur hyllplan, gångjärn och lådskenor tas ur det och hur man borrar utan CNC.
datum: 2026-11-04
slika: ../slike/web/snimak-52-ruka-jedna-vrata-1600.webp
status: za-proveru
---

System 32 är en överenskommelse om att borra hål med 5 mm diameter i rad i stommens sida, med 32 mm delning, så att hyllbärare, gångjärnens monteringsplattor och lådskenor passar i samma hål. Det är ingen lag och ingen stämplad standard, utan en konvention som beslagstillverkarna (Blum, Hettich, Grass, GTV) och borrmaskinstillverkarna håller sig till. Den som följer den kan köpa beslag från vem som helst av dem, och de passar i hålen som redan är borrade.

## Varför just 32 mm

Delningen valdes inte för att det är ett vackert tal. När skivmöbler i Europa började tillverkas i serie borrades de i flerspindliga borrmaskiner: en rad spindlar som borrar hela hålraden i en nedsänkning. Spindlarna drivs av kugghjul som griper i varandra, och det minsta centrumavstånd kugghjulen då kunde packas på var 32 mm. Maskinen gav rastret, och beslagstillverkarna anpassade sina hyllbärare, plattor och skenor till det. Så blev kugghjulens delning möblernas delning, och så har det förblivit, även på CNC-maskiner som inte längre behöver det skälet.

Måttet **37 mm** från [sidans](../recnik/bok.html) framkant till den första radens centrum är överenskommelsens andra del. Det är samordnat med gångjärnets monteringsplatta och lådskenans främre ände, så att samma hålrad tjänar både hyllplan och beslag. Den bakre raden sitter 37 mm från bakkanten eller på 37 + n·32 från framkanten, så att skenan hamnar i rastret i båda ändar.

## Tre tal att komma ihåg

- **Ø5 mm**: hålets diameter. Hyllbärarens tapp går rakt i, gångjärnsplattan och skenan skruvas med euroskruv avsedd för 5 mm-hål.
- **32 mm**: avståndet mellan centrum på två grannhål i raden. Inte 30, inte 35; varje annan delning betyder att hyllplanet står snett eller att beslaget inte passar.
- **37 mm**: den främre radens centrum från sidans framkant. Mäts från den färdiga sidans kant, efter [kantlist](../recnik/kant.html).

## Vad som tas ur systemet

**Hyllplan.** [Hyllplanets](../recnik/polica.html) bärare går i vilket hål som helst i främre och bakre raden, så hyllplanet flyttas i steg om 32 mm. Kunden flyttar senare hyllplanet själv, och det förblir plant eftersom alla fyra hålen ligger på samma höjd.

**Gångjärn.** [Gångjärnets](../recnik/sarka.html) monteringsplatta skruvas i främre raden, på 37 mm. Koppen Ø35 borras i fronten till 12,5–13 mm djup, med centrum 21,5–22,5 mm från frontens kant (avståndet K från 3 till 6 mm, enligt gångjärnets katalog). Antalet gångjärn följer fronthöjden: upp till 900 mm två, upp till 1600 tre, upp till 2000 fyra, däröver fem. Kopparna sitter 100 mm från frontens över- och underkant, de övriga jämnt fördelade emellan.

**Lådskenor.** Skenans främre ände går i främre raden, den bakre i bakre raden. Därför måste bakre raden ligga i raster med den främre; gör den inte det står skenan snett och [lådan](../recnik/fioka-i-vodjica.html) skrapar. Höjden skenan skruvas på beror på lådsystemet och tas ur tillverkarens anvisning, men den är alltid något av hålen i raden.

## Så borrar du utan CNC

Du behöver ingen maskin, du behöver en jigg. Den enklaste är en list av hårt trä eller aluminium med Ø5-hål på exakt 32 mm och ett anslag som ligger an mot sidans framkant så att första raden hamnar på 37 mm. Det finns också köpjiggar med stålbussningar, som inte borras upp på några månader som träjiggar gör. Arbetsgången är alltid densamma:

1. Sidan på bänken, insidan upp, framkanten mot dig.
2. Jiggens anslag mot framkanten, rikta jiggen i höjdled på samma sätt för alla sidor i projektet.
3. Borra med djupstopp; sidan är 18 mm och har ingen marginal.
4. Den andra sidan borras spegelvänd: framkanten åter mot anslaget, insidan åter upp.

Steget som lönar sig mest: gör jiggen längre än du behöver och borra hela sidan i ett svep, utan att flytta den. Varje flytt är ett tillfälle för raden att smita en millimeter.

![Bänkstomme 600 × 720 × 560 mm med en lucka och ett hyllplan i programmet TOPICA; till höger en panel med antal luckor, märkningen ”Gångjärn vänster” och antal hyllplan](../slike/web/snimak-52-ruka-jedna-vrata-1600.webp "En lucka, ett hyllplan: programmet bestämmer själv gångjärn och plattor enligt system 32.")

## Vanliga fel

- **Fel kant.** Raden borrad 37 mm från bakkanten i stället för framkanten. Hyllplanet passar, gångjärnet inte.
- **Sidorna inte spegelvända.** Båda sidorna borrade från samma håll, så den ena har hålen på utsidan. Regel: insidan upp, framkanten mot anslaget, utan undantag.
- **Addera med måttbandet.** Den som mäter 32, och 32 till, och 32 till, samlar på sig en halv millimeters fel per hål. Mät från en nolla eller använd jigg.
- **Genomborrad skiva.** Utan djupstopp går hålet ut på den synliga sidan. Det svider särskilt på en [täcksida](../recnik/ukrasna-strana.html) i frontens dekor.
- **Olika nolla på två sidor.** Jiggen på vänster sida anlagd från botten, på höger från toppen. Hålen sitter på 32 mm, men inte på samma höjd.

## Så gör TOPICA

Programmet borrar inte och har ingen CNC-export; dess jobb är att måtten ska vara rätt innan du kommer till borrmaskinen. Gångjärnen räknar det efter fronthöjden, plattans läge håller det på 37 mm, skenan väljer det som den största nominella längd som ryms i stommens djup, och allt det kommer ut i beslagslistan bredvid [kaplistan](./krojna-lista.html). Hur man kommer från rummet till den listan visas i avsnittet [så funkar det](../#kako-radi).

System 32 är ingen skolteori: det är skälet till att hyllplanet kunden flyttar ett steg förblir plant, och att gångjärnet du köper om två år passar i det gamla hålet. Tre tal och en bra jigg är hela jobbet.
