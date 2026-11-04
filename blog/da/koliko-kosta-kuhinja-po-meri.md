---
naslov: Hvad koster et køkken efter mål? Sådan regner snedkeren prisen ud
opis: Prisen på et køkken efter mål sættes sammen af materiale pr. m², kantbånd pr. meter, beslag pr. stk., arbejdsløn og avance. Hvad der indgår, hvad der glemmes, og hvordan programmet lægger sammen ud fra de priser, snedkeren indtaster.
datum: 2026-11-04
slika: ../slike/web/snimak-37-cena-1600.webp
status: za-proveru
---

Prisen på et køkken efter mål er ikke ét tal fra hovedet, men summen af fem poster: materiale, kantbånd, beslag, arbejdsløn og avance. Den, der regner sådan, ved, hvorfor prisen er, som den er, og kan forsvare den over for kunden. Den, der regner »pr. løbende meter« på øjemål, klarer sig fint på et enkelt køkken og taber på det med skuffer og højskabe. Her er der ingen priser i kroner eller euro, for dem har hvert værksted sine egne; her er den måde, priserne sættes sammen på.

## 1. Materiale: kvadratmeter plade, pr. type

Først tælles kvadratmeterne for hver pladetype for sig, for de købes også for sig: hvid [spånplade](../recnik/iverica.html) 18 mm til korpusser, dekor 18 mm til fronter, hardboard 3 mm til bagklædning og skuffebunde, bordplade 38 mm pr. løbende meter. Arealet fås fra [skærelisten](./krojna-lista.html): længde × bredde × antal, lagt sammen pr. materiale. Eksempel fra programmet: ét underkorpus 600 × 720 × 560 har 8 plader og 2,34 m² plade, heraf 1,48 m² hvid spånplade, 0,43 m² dekor til fronten og 0,43 m² hardboard.

Det areal er netto. Råpladen udnyttes ikke helt: de almindelige pladeformater er 2800 × 2070 mm eller 2750 × 1830 mm, og efter opskæringen er der spild fra snit, kanter og stykker, der ikke passer nogen steder. Realistisk er **pladeudnyttelsen cirka 80 %**, så du dividerer nettokvadratmeterne med 0,8 for at få, hvor meget plade du faktisk køber. Et køkken med 10 m² netto hvid spånplade kræver cirka 12,5 m² købt plade. Den, der kun tager betaling for netto, betaler spildet af egen lomme.

## 2. Kantbånd: løbende meter plus spild

[Kantbånd](../recnik/kant.html) regnes pr. løbende meter, for hver tykkelse for sig, for priserne er også forskellige: 0,45 mm til korpussets og hyldernes synlige kanter, 1 mm til fronter på alle fire kanter, 2 mm til hårdere belastede kanter. Længden er summen af alle kantede kanter fra skærelisten plus **10 % spild** til båndets start og slut og til kassation. En front på 717 × 597 bærer alene 2,63 m kantbånd på 1 mm; på tyve fronter er det over 50 m, hvilket ikke er en bagatel. Detaljerne står i guiden [om kantbåndets tykkelse og længde](./kant-debljina-i-duzina.html).

## 3. Beslag: pr. stk., fra listen

Beslag tælles, de skønnes ikke. Listen for et almindeligt køkken: hængsler (en front op til 900 mm i højden bærer 2, op til 1600 tre, op til 2000 fire), skuffeskinner eller metalkasser pr. skuffe, ben (4 stk. op til 800 mm bredde, 6 derover), greb pr. front, ekscenterbeslag og dyvler eller konfirmatskruer pr. samling, sokkelclips, ophængsbeslag til overskabe, hyldebærere. Hver post har en stykpris fra leverandørens katalog og et antal fra projektet. Skufferne er det dyreste her: ét skab med tre skuffer på metalkasser koster mere i beslag end tre skabe med låger.

## 4. Arbejdsløn: pr. element eller pr. m² front

To almindelige måder. **Pr. element**: hvert korpus, under eller over, bærer samme beløb i arbejdsløn, og de mere komplicerede (skuffer, hjørne, ovn) et tillæg. Enkelt og hurtigt, godt til køkkener på én række. **Pr. m² front**: arbejdslønnen regnes på fronternes areal, så et stort garderobeskab bærer mere end et lille overskab. Mere præcist til garderobeskabe og højskabe. Uanset hvilken du vælger, indgår opskæring, kantning, boring, samling og prøvesamling i værkstedet i arbejdslønnen. Montagen hos kunden er en særskilt post, se nedenfor.

## 5. Avance

På summen af materiale, kantbånd, beslag og arbejdsløn lægges **avance i procent**. Den er ikke snedkerens løn, for arbejdet er allerede betalt; den dækker det, der ikke ses i projektet: værktøj, strøm, maskiner, der slides, dage uden arbejde og risikoen for, at noget går galt. Et værksted, der arbejder uden avance, arbejder for løn, ikke for sig selv.

## Hvad folk glemmer

- **Transport**: plader fra leverandøren til værkstedet, færdige skabe til kunden, to ture med varevognen.
- **Montage**: en dag eller to hos kunden, med bæring op ad trappen, nivellering, udskæring til vask og kogeplade efter producentens skabelon.
- **Spild**: de 20 % plade og 10 % kantbånd; og hardboard, som alle glemmer, fordi det er billigt.
- **Ændringer**: kunden, der skifter dekor tre gange eller tilføjer en skuffe; hver ændring er et nyt regnestykke og, hvis pladen allerede er skåret, en ny plade.
- **Småting**: skruer, dyvler, lim, silikone, bordpladelister, vægliste; enkeltvis ingenting, tilsammen mærkbart.
- **Ydelser**: opskæring og kantning hos andre, hvis du ikke har egne maskiner.
- **Hvidevarer og bordplade**: hvem skaffer dem, hvem monterer dem, og hvem står til ansvar, hvis udskæringen ikke passer.

Den, der har en liste, får ingen overraskelser; den, der ikke har, ser dem ved arbejdets slutning, når det er for sent at tage betaling for dem.

## Sådan gør TOPICA

Programmet kender ikke dine priser og opfinder dem ikke. I **Værkstedsindstillinger**, under »Materialer og priser«, indtaster du pladepris pr. type, kantbånd pr. meter for hver tykkelse (0,4; 0,45; 0,8; 1 og 2 mm), beslag pr. stk., **arbejdsløn pr. element** og **avance** i procent. Et felt, du ikke har udfyldt, siger »ikke indtastet« og regnes som nul, uden advarsel, så prisen i rapporten aldrig indeholder et tal, du ikke selv har givet. Når priserne én gang er indtastet, lægger programmet for hvert projekt kvadratmeter pr. materiale, meter kantbånd med spild, beslag pr. stk. og arbejdsløn pr. element sammen, lægger avancen til og giver i Rapporter, fanen »Pris«, prisen pr. projekt, ved siden af fanerne »Materialer« og »Beslag«, hvor man ser, hvad den er sat sammen af. Ændrer du et skabs bredde eller tilføjer en skuffe, ændrer prisen sig i samme øjeblik. En oversigt over alt, hvad programmet giver, står i afsnittet [Funktioner](../#mogucnosti).

![Værkstedsindstillinger i programmet TOPICA, afsnittet »Pris og tilbud«: felter til arbejdsløn pr. element og avance i procent, kantbånd pr. meter for 0,4 til 2 mm og emhættens dele, ikke udfyldte felter markeret med »ikke indtastet«](../slike/web/snimak-37-cena-1600.webp "Priserne indtaster snedkeren, én gang for værkstedet; ikke indtastet er nul, programmet antager ingenting.")

Prisen på et køkken efter mål er en sum, du kan vise på papir, post for post. Når programmet lægger den sammen ud fra dine priser, er der kun det tilbage, som programmet ikke kan: at vurdere kunden og beslutte, hvor meget du vil have det arbejde.
