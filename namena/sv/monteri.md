---
naslov: För montörer och den som låter någon annan kapa
opis: Program för köksmontörer och snickare som låter andra kapa: kaplistan ”Efter mått” att kopiera och skicka, beslag per styck, projektet som en fil. Windows.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Allt fler snickare arbetar utan egen justersåg: de mäter hos kunden, beställer kapning och kantning hos en skivleverantör, och monterar sedan. Där är kaplistan det enda pappret som går från dina händer till någon annans. Stämmer den ringer leverantören inte; stämmer den inte syns felet först vid monteringen. TOPICA gör den listan ur projektet, inte ur ditt anteckningsblock.

## En lista leverantören förstår

Vyn ”Efter mått” ger lika mått på en rad, grupperade efter material och tjocklek, med [kantlistens](../recnik/kant.html) märkning och antal, precis så som det kapas: först vit spånskiva 18 mm, sedan fronter, sedan hardboard. Första måttet är fiberriktningen, så fronterna står inskrivna stående och hardboarden bär märkningen ”utan fiberriktning”; leverantören behöver inte gissa hur mönstret är vänt. Måtten är netto, efter kantlist, vilket är förvalt i programmet och värt att säga till leverantören i första meddelandet. Listan kopierar du med ett klick och skickar som meddelande eller mejl, eller skriver ut som PDF. Vad varje rad betyder står i ordlistan under [kaplista](../recnik/krojna-lista.html).

## Exempel: vad som går i meddelandet

Bänkstomme 600 × 720 × 560 med lucka och hyllplan, åtta skivor:

| Skiva | Mått (mm) | Tj. | Kant | Ant |
|---|---|---|---|---|
| Sida | 702 × 539 | 18 | 1 lång | 2 |
| Botten | 600 × 539 | 18 | 1 lång | 1 |
| Hyllplan | 562 × 519 | 18 | 1 lång | 1 |
| Regel | 564 × 100 | 18 | 2 långa | 2 |
| Front | 717 × 597 | 18 | 2 långa, 2 korta | 1 |
| Rygg (hardboard) | 717 × 597 | 3 | ingen | 1 |

Ett kök med tolv skåp är ett hundratal sådana rader. Programmet ställer upp dem för alla stommar tillsammans och ger därtill total skivåtgång i m² och kantlistens längd med 10 % spill, så du vet hur många plattor och hur många meter band du ska beställa.

![Tabellen ”Efter mått” från programmet TOPICA: rader med skivor med mått i millimeter, tjocklek, kantmärkning och antal, grupperade efter material](../slike/web/isecak-po-meri-tabela-1600.webp "Så ser det ut som du kopierar och skickar till sågen.")

## Beslag och material innan du går till butiken

Montören köper beslagen själv och köper dem en gång. Programmet ger utöver skivlistan en beslagslista: [gångjärn](../recnik/sarka.html) efter fronthöjden (upp till 900 mm två, upp till 1600 tre), [lådskenor](../recnik/fioka-i-vodjica.html) som den största nominella längd som ryms i stommens djup, ben fyra per skåp upp till 800 mm bredd och sex däröver, hyllbärare enligt system 32. Inget av det skriver du av från ritningen.

## Projektet är en fil

Inget konto och ingen server: projektet är en fil på din dator. Du skickar den till kollegan som kapar, tar den med på laptopen till monteringen och öppnar där 3D-vyn med mått till väggen, till grannen och från golvet, och visar kunden var allt ska stå innan du borrar första hålet. Hur rummet mäts för att listan ska stämma står i guiden [så mäter du ett kök](../blog/kako-izmeriti-kuhinju.html); vad programmet ger utöver det finns under [funktioner](../#mogucnosti).

## Vad programmet inte gör i den här versionen

Det gör ingen CNC-fil och ingen kapplan (nesting). Det gör leverantören i sitt program och på sin såg; vad den behöver är en exakt lista, och det är det du får. Hela vägen från rummet till den listan är [tre steg](../#kako-radi).

Gör nästa lista till leverantören i programmet, och jämför med den ur anteckningsblocket.
