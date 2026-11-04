---
naslov: Kantlist: hvilken tykkelse hvor (0,45 / 1 / 2 mm) og hvordan lengden regnes
opis: Kantlist 0,45 mm på skroget, 1 mm på frontene, 2 mm på harde kanter. Hva nettomål etter kantlist betyr og hvordan listlengden regnes med 10 % kapp.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Kantlisten er listen, oftest ABS, som lukker den kappede kanten på sponplaten så kjernen ikke synes og fukt ikke trenger inn. Tykkelsen er ikke en smakssak: en tynn list på en dør løsner ved første slag, og en tykk list på en innvendig hylle er bortkastede penger. Denne guiden sier hvilken tykkelse som går hvor, hvilke kanter som i det hele tatt kantes, hva «nettomål etter kantlist» betyr, og hvordan du regner ut hvor mange meter list du skal bestille.

## Tre tykkelser og hvor de går

| List | Hvor | Hvorfor |
|---|---|---|
| **0,45 mm** | synlige kanter på [skroget](../recnik/korpus.html) og forkanten på [hyllen](../recnik/polica.html) | kantene får ikke slag, listen lukker bare platen |
| **1 mm** | [fronter](../recnik/front.html), alle fire kanter | kanten tas i med hånden og får slag, den trenger substans |
| **2 mm** | fronter der det kreves kraftigere kant, [benkeplater](../recnik/radna-ploca.html), garderobedører | de mest belastede kantene, listen er avrundet og slitesterk |

2 mm list er bedre også på vanlige fronter når kunden vil ha en mykere, avrundet kant; prisen er høyere, og det trengs en maskin som limer den. På skroget er 2 mm en feil: innvendig synes den ikke, og skjøten mot fronten får en kant ingen har bedt om.

## Hvilke kanter kantes, og hvilke ikke

Regelen er enkel: den kanten kantes som synes eller berøres med hånden. Kanten mot veggen, kanten under benkeplaten og kanten i skjøten mot en annen plate kantes ikke, for der ville listen bare vært i veien for sammenføyningen og kostet tid. På et vanlig benkeskrog ser det slik ut:

- **Side**: én lang kant, den fremre. Den bakre er mot veggen, den øvre under platen, den nedre på gulvet.
- **Bunn**: én lang, den fremre.
- **Hylle**: én lang, den fremre. Hyllen er trukket inn, den synes bare forfra.
- **Travers**: to lange. Den fremre traversen synes nedenfra når døren åpnes, så den får begge.
- **Front**: to lange og to korte, alle fire.
- **Bakplate** i hardplate 3 mm: ingen kantlist.

## Nettomål etter kantlist

I [kapplisten](./krojna-lista.html) er platens mål **netto etter kantlist**: det er målet på den ferdige platen med pålimt list, slik den går inn i skroget. Med 0,45 mm list er forskjellen under en halv millimeter og trekkes i praksis ikke fra. Med 1 mm og 2 mm trekkes den fra: en front som står som 717 × 597 i listen med 1 mm list på alle fire kanter, kappes til 715 × 595, og har etter kantlisten nøyaktig 717 × 597. Den som glemmer det, får en front som er 2 mm større i hver retning, og spalten på 3 mm mellom dørene forsvinner.

Avtalen «netto etter kantlist» er standard i programmet og kan endres hvis verkstedet arbeider motsatt, men det må både den som kapper og den som limer vite om.

## Slik regnes listlengden

Lengden kantlist for én tykkelse er **summen av alle kantede kanter i den tykkelsen, økt med 10 % kapp**. Ti prosent dekker start og slutt på rullen i maskinen, biter som kappes av og en og annen kant som kantes to ganger. Prosenten er justerbar; et verksted med håndholdt kantlimer går vanligvis høyere.

Eksempel: benkeskrog 600 × 720 × 560, én dør, én hylle, to traverser.

| Plate | Mål (mm) | Kant | Stk | Listlengde |
|---|---|---|---|---|
| Side | 702 × 539 | 1 lang · 0,45 | 2 | 2 × 702 = 1404 |
| Bunn | 600 × 539 | 1 lang · 0,45 | 1 | 600 |
| Hylle | 562 × 519 | 1 lang · 0,45 | 1 | 562 |
| Travers | 564 × 100 | 2 lange · 0,45 | 2 | 2 × 2 × 564 = 2256 |
| Front | 717 × 597 | 2 lange, 2 korte · 1 mm | 1 | 2 × 717 + 2 × 597 = 2628 |
| Bakplate | 717 × 597 | ingen | 1 | 0 |

Sum for list **0,45 mm**: 1404 + 600 + 562 + 2256 = **4822 mm**; med 10 % kapp 5304 mm, altså omtrent **5,3 m**. Sum for list **1 mm**: **2628 mm**; med kapp 2891 mm, omtrent **2,9 m**. For ett skrog til sammen omtrent 8,2 m list, to tykkelser, to dekorer. Et kjøkken med tolv skap med skuffer og veggskapsrekke passerer lett hundre meter, og der bommer et anslag «på øyemål» med en hel rull.

## Kantmerking i kapplisten

Den som kapper, trenger ikke vite hvor platen skal, kantmerkingen er nok. Programmet bruker fire:

- **1 lang**: bare én av platens to lange kanter.
- **2 lange**: begge de lange kantene, de korte blir rå.
- **2 lange, 2 korte**: alle fire, typisk front.
- **ingen**: bakplater og skuffebunner i hardplate.

«Lang» viser til platens lange side, ikke til første mål i listen. Første mål er fiberretningen og spiller ingen rolle på hvit sponplate, mens den lange kanten alltid er den største av de to. På siden 702 × 539 er 702 den lange, det er den stående forkanten; på bunnen 600 × 539 er 600 den lange, den liggende forkanten.

![Tabellen «Etter mål» i TOPICA for ett skrog: seks plater i hvit sponplate, front i eikedekor og bakplate i hardplate, med kolonnen Kant der det står «1 lang», «2 lange», «2 lange, 2 korte» og «ingen»](../slike/web/isecak-po-meri-tabela-1600.webp "Kolonnen Kant i kapplisten: kantmerking, gruppert etter materiale.")

## Slik gjør TOPICA det

Kantlisttykkelsen setter du én gang for skroget og én gang for frontene i prosjektinnstillingene (standard 0,45 og 1 mm, dekor «som platen»), og programmet fører på hver plate hvilke kanter som kantes og summerer lengden per tykkelse og dekor, med det kappet du har satt. Meterprisen på listen skriver du inn; en pris som ikke er skrevet inn, er null, programmet finner den ikke på. Materiallisten med kantlist er en del av samme visning som kapplisten, se avsnittet [funksjoner](../#mogucnosti) og oppslaget [kantlist](../recnik/kant.html) i ordlisten.

Kantlist er en bagatell så lenge det er nok av den. Når den tar slutt på de to siste frontene, og dekoren er fra et annet parti, blir bagatellen enda en tur til leverandøren.
