---
naslov: System 32: hvorfor europæiske møbler har huller for hver 32 mm
opis: System 32 er en række Ø5 mm huller med 32 mm afstand, det første 37 mm fra sidens forkant. Hvor det kommer fra, hvordan hylder, hængsler og skuffeskinner tages fra det, og hvordan man borer uden CNC.
datum: 2026-11-04
slika: ../slike/web/snimak-52-ruka-jedna-vrata-1600.webp
status: za-proveru
---

System 32 er den aftale, at der i korpussets side bores huller med 5 mm diameter i en række med 32 mm afstand, så hyldebærere, hængslernes monteringsplader og skuffeskinner passer i de samme huller. Det er hverken lov eller en standard med stempel, men en konvention, som beslagsproducenterne (Blum, Hettich, Grass, GTV) og maskinfabrikanterne holder. Den, der følger den, kan købe beslag fra hvem som helst af dem, og det passer i de huller, han allerede har boret.

## Hvorfor netop 32 mm

Afstanden er ikke valgt, fordi det er et pænt tal. Da pladeinventar i Europa gik i serieproduktion, blev der boret på flerspindelboremaskiner: en række spindler, der borer hele hulrækken i én sænkning. Spindlerne drives af tandhjul, der griber ind i hinanden, og den mindste centerafstand, tandhjulene dengang kunne pakkes med, var 32 mm. Maskinen gav rasteret, og beslagsproducenterne lagde deres hyldebærere, monteringsplader og skinner efter det. Sådan blev tandhjulsafstanden til møbelafstanden og er det den dag i dag, også på CNC-boremaskiner, der ikke længere har brug for den grund.

Målet **37 mm** fra [sidens](../recnik/bok.html) forkant til centrum af første række er aftalens anden del. Det er afstemt med hængslets monteringsplade og skinnens forreste ende, så samme hulrække tjener både hylder og beslag. Den bageste række sidder 37 mm fra bagkanten eller på 37 + n·32 fra forkanten, så skinnen falder i rasteret i begge ender.

## Tre tal, du skal huske

- **Ø5 mm**: hullets diameter. Hyldebærerens tap går direkte i, hængslets monteringsplade og skinnen skrues med euroskruer beregnet til et 5 mm hul.
- **32 mm**: afstanden mellem centrum af to nabohuller i rækken. Ikke 30, ikke 35; enhver anden afstand betyder, at hylden står skævt, eller at beslaget ikke passer.
- **37 mm**: centrum af forreste række fra sidens forkant. Måles fra den færdige sides kant, efter [kantbånd](../recnik/kant.html).

## Hvad der udledes af systemet

**Hylder.** [Hyldens](../recnik/polica.html) bærer går i et hvilket som helst hul i forreste og bageste række, så hylden flyttes i spring på 32 mm. Kunden flytter senere selv hylden, og den bliver plan, fordi alle fire huller sidder i samme højde.

**Hængsler.** [Hængslets](../recnik/sarka.html) monteringsplade skrues i forreste række, på 37 mm. Koppen Ø35 bores i fronten til 12,5–13 mm dybde, med centrum 21,5–22,5 mm fra frontens kant (afstand K på 3 til 6 mm, efter hængslets katalog). Antallet af hængsler følger frontens højde: op til 900 mm to, op til 1600 tre, op til 2000 fire, derover fem. Kopperne sidder 100 mm fra frontens over- og underkant, resten jævnt fordelt imellem.

**Skuffeskinner.** Skinnens forreste ende går i forreste række, den bageste i bageste række. Derfor skal bageste række være i raster med forreste; er den ikke, står skinnen skævt, og [skuffen](../recnik/fioka-i-vodjica.html) skurer. Højden, skinnen skrues i, afhænger af skuffesystemet og tages fra producentens vejledning, men det er altid et af hullerne i rækken.

## Sådan borer du uden CNC

Du har ikke brug for en maskine, du har brug for en skabelon. Den enkleste er en liste af hårdt træ eller aluminium med Ø5 huller på præcis 32 mm og et anslag, der lægger sig an mod sidens forkant, så første række falder på 37 mm. Der findes også købeskabeloner med stålbøsninger, som ikke bores op på få måneder som træ. Fremgangsmåden er altid den samme:

1. Siden på bordet, indersiden opad, forkanten mod dig.
2. Skabelonens anslag mod forkanten, skabelonen rettet ind i højden på samme måde for alle sider i projektet.
3. Bor med dybdestop; siden er 18 mm og har ingen reserve.
4. Den anden side bores spejlvendt: forkanten igen mod anslaget, indersiden igen opad.

Det trin, der betaler sig bedst: lav skabelonen længere, end du har brug for, og bor hele siden på én gang, uden at flytte. Hver flytning er en mulighed for, at rækken stikker af med en millimeter.

![Underskab til køkken 600 × 720 × 560 mm med én låge og én hylde i programmet TOPICA; til højre et panel med antal låger, mærket »Hængsler venstre« og antal hylder](../slike/web/snimak-52-ruka-jedna-vrata-1600.webp "Én låge, én hylde: programmet bestemmer selv hængsler og monteringsplader efter System 32.")

## Typiske fejl

- **Forkert kant.** Rækken boret 37 mm fra bagkanten i stedet for forkanten. Hylden passer, hængslet gør ikke.
- **Siderne er ikke spejlvendte.** Begge sider boret fra samme side, så den ene har hullerne udvendigt. Reglen: indersiden opad, forkanten mod anslaget, uden undtagelse.
- **Sammenlægning med tommestokken.** Den, der måler 32, så 32 til, så 32 til, samler en fejl på en halv millimeter pr. hul. Der måles fra ét nulpunkt, eller der bruges skabelon.
- **Gennemboret plade.** Uden dybdestop kommer hullet ud på ydersiden. Det gør særlig ondt på en [dækside](../recnik/ukrasna-strana.html) i frontens dekor.
- **Forskelligt nulpunkt på de to sider.** Skabelonen lagt an fra bunden på venstre side og fra toppen på højre. Hullerne sidder med 32 mm, men ikke i samme højde.

## Sådan gør TOPICA

Programmet borer ikke og har ingen CNC-eksport; dets job er, at målene er rigtige, før du når til boremaskinen. Hængslerne regner det efter frontens højde, monteringspladens position holder det på 37 mm, skinnen vælger det som den største nominelle længde, der kan være i korpusdybden, og alt det kommer ud på beslagslisten ved siden af [skærelisten](./krojna-lista.html). Hvordan man kommer fra rummet til den liste, ses i afsnittet [sådan virker det](../#kako-radi).

System 32 er ikke skoleteori: det er grunden til, at en hylde, kunden flytter én række, bliver plan, og at et hængsel, du køber om to år, passer i det gamle hul. Tre tal og én god skabelon er hele arbejdet.
