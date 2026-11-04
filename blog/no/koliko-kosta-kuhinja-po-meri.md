---
naslov: Hva koster et kjøkken etter mål — slik regner snekkeren ut prisen
opis: Prisen på et kjøkken etter mål settes sammen av materiale per m², kantlist per meter, beslag per stykk, arbeid og påslag. Hva som inngår, hva som glemmes og hvordan programmet summerer fra prisene snekkeren skriver inn.
datum: 2026-11-04
slika: ../slike/web/snimak-37-cena-1600.webp
status: za-proveru
---

Prisen på et kjøkken etter mål er ikke ett tall fra hodet, men summen av fem poster: materiale, kantlist, beslag, arbeid og påslag. Den som regner slik, vet hvorfor prisen er som den er, og kan forsvare den overfor kunden. Den som regner «per løpemeter» på øyemål, kommer godt ut av et enkelt kjøkken og taper på det med skuffer og høyskap. Her er det ingen priser i kroner eller euro, for hvert verksted har sine egne; her er måten de prisene settes sammen på.

## 1. Materiale: kvadratmeter plate, per type

Først telles kvadratmeterne av hver platetype for seg, for de kjøpes også hver for seg: hvit [sponplate](../recnik/iverica.html) 18 mm til skrog, dekor 18 mm til fronter, hardplate 3 mm til bakplater og skuffebunner, benkeplate 38 mm per løpemeter. Kvadratmeterne kommer fra [kapplisten](./krojna-lista.html): lengde × bredde × antall, summert per materiale. Eksempel fra programmet: ett benkeskrog 600 × 720 × 560 har 8 plater og 2,34 m² plate, av det 1,48 m² hvit sponplate, 0,43 m² dekor til fronten og 0,43 m² hardplate.

Det kvadratmetertallet er netto. Råplaten utnyttes ikke helt: vanlige platestørrelser er 2800 × 2070 mm eller 2750 × 1830 mm, og etter kappingen blir det igjen kapp fra snitt, kanter og biter som ikke passer noe sted. Reelt er **plateutnyttelsen omtrent 80 %**, så du deler nettokvadratmeterne på 0,8 for å finne hvor mye plate du faktisk kjøper. Et kjøkken med 10 m² netto hvit sponplate krever omtrent 12,5 m² kjøpt plate. Den som fakturerer bare netto, betaler kappet av egen lomme.

## 2. Kantlist: løpemeter pluss kapp

[Kantlist](../recnik/kant.html) regnes per løpemeter, for hver tykkelse for seg, for prisene er også forskjellige: 0,45 mm til synlige kanter på skrog og hyller, 1 mm til fronter på alle fire kanter, 2 mm til hardt belastede kanter. Lengden er summen av alle kantede kanter fra kapplisten pluss **10 % kapp** til start og slutt på rullen og til vrak. En front på 717 × 597 bærer alene 2,63 m kantlist på 1 mm; på tjue fronter er det over 50 m, og det er ingen bagatell. Detaljene står i guiden [om kantlistens tykkelse og lengde](./kant-debljina-i-duzina.html).

## 3. Beslag: per stykk, fra listen

Beslag telles, de anslås ikke. Listen for et vanlig kjøkken: hengsler (en front opp til 900 mm høyde har 2, til 1600 tre, til 2000 fire), skinner eller metallkasser per skuff, føtter (4 stk opp til 800 mm bredde, 6 over), håndtak per front, eksenterbeslag og dybler eller konfirmatskruer per skjøt, sokkelklips, opphengsbeslag til veggskapene, hyllebærere. Hver post har en stykkpris fra leverandørens katalog og et antall fra prosjektet. Skuffene er det dyreste her: ett skap med tre skuffer på metallkasser koster mer i beslag enn tre skap med dører.

## 4. Arbeid: per skap eller per kvadratmeter front

To vanlige måter. **Per skap**: hvert skrog, benke- eller veggskap, bærer samme arbeidsbeløp, og de mer sammensatte (skuffer, hjørne, ovn) et tillegg. Enkelt og raskt, bra for kjøkken på rekke. **Per m² front**: arbeidet regnes på frontenes kvadratmeter, så en stor garderobe bærer mer enn et lite veggskap. Mer treffsikkert for garderober og høyskap. Uansett hva du velger, inngår kapping, kanting, boring, sammensetting og prøvemontering på verkstedet i arbeidet. Montering hos kunden er en egen post, se under.

## 5. Påslag

På summen av materiale, kantlist, beslag og arbeid legges et **påslag i prosent**. Det er ikke snekkerens fortjeneste, for arbeidet er allerede betalt; det dekker det som ikke synes i prosjektet: verktøy, strøm, maskiner som slites, dager uten jobb og risikoen for at noe går galt. Et verksted som arbeider uten påslag, arbeider for lønn, ikke for seg selv.

## Det folk glemmer

- **Transport**: plater fra leverandøren til verkstedet, ferdige skap til kunden, to turer med varebil.
- **Montering**: en dag eller to hos kunden, med bæring opp trappen, vatring, utsparing for vask og koketopp etter produsentens mal.
- **Kapp**: de 20 % av råplaten og 10 % av kantlisten; og hardplaten, som alle glemmer fordi den er billig.
- **Endringer**: kunden som bytter dekor tre ganger eller legger til en skuff; hver endring er et nytt regnestykke og, hvis platen allerede er kappet, en ny plate.
- **Småtteri**: skruer, dybler, lim, silikon, benkeplatelister, vegglist; hver for seg ingenting, til sammen merkbart.
- **Tjenester**: kapping og kanting hos andre hvis du ikke har egne maskiner.
- **Hvitevarer og benkeplate**: hvem som skaffer dem, hvem som monterer dem og hvem som har ansvaret hvis utsparingen ikke passer.

Den som har en liste, får ingen overraskelser; den som ikke har, ser dem på slutten av jobben, når det er for sent å fakturere dem.

## Slik gjør TOPICA det

Programmet kjenner ikke prisene dine og finner dem ikke på. I **Verkstedinnstillinger**, under «Materialer og priser», skriver du inn plateprisen per type, kantlist per meter for hver tykkelse (0,4; 0,45; 0,8; 1 og 2 mm), beslag per stykk, **arbeid per enhet** og **påslag** i prosent. Et felt du ikke har fylt ut, sier «ikke angitt» og regnes som null, uten varsel, så prisen i rapporten aldri inneholder et tall du ikke har gitt. Når prisene én gang er skrevet inn, summerer programmet for hvert prosjekt kvadratmeterne per materiale, meterne kantlist med kapp, beslagene per stykk og arbeidet per enhet, legger til påslaget og gir i Rapporter, fanen «Pris», prisen per prosjekt, ved siden av fanene «Materialer» og «Beslag» der du ser hva den består av. Endrer du bredden på et skap eller legger til en skuff, endres prisen i samme øyeblikk. En oversikt over alt programmet gir, står i avsnittet [Funksjoner](../#mogucnosti).

![Verkstedinnstillinger i TOPICA, avsnittet «Pris og tilbud»: felt for arbeid per enhet og påslag i prosent, kantlist per meter for 0,4 til 2 mm og deler til ventilatoren, tomme felt merket «ikke angitt»](../slike/web/snimak-37-cena-1600.webp "Prisene skriver snekkeren inn, én gang for verkstedet; det som ikke er angitt, er null, programmet antar ingenting.")

Prisen på et kjøkken etter mål er en sum du kan vise på papir, post for post. Når programmet summerer den fra dine priser, gjenstår bare det programmet ikke kan: å vurdere kunden og bestemme hvor gjerne du vil ha den jobben.
