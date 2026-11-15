# MODELI — šta program TOPICA računa (za konfigurator na sajtu)

Izvor: kod programa TOPICA **0.1.66** (`package.json:4`), pročitan 14.11.2026, bez ijedne izmene u programu.
Putanje su od korena programa (`/home/user/topica`), oblik `fajl:red`. Primeri izračunati samim kodom: `docs/modeli-primeri.json` (47 primera, `"izvor": "kod"`).
Formule iz tačke 4 su posebno prepisane u čist JS i upoređene sa kodom programa na **17 176 kombinacija mera i opcija — 0 razlika** (daske, komadi, kant, m², okovi).

Oznake: **Š, V, D** = spoljne mere elementa u mm (D je ukupna dubina **sa frontom** — `src/domain/elementSets.ts:27`, `:340-346`); ⌊x⌋ = ceo mm naniže.

## 0. Podrazumevane vrednosti koje ulaze u formule

| Oznaka | Šta je | Vrednost | Izvor |
|---|---|---|---|
| t | debljina ploče korpusa (i fronta) | 18 | `src/domain/catalog/settings.ts:9`; front istom debljinom `src/domain/templates/helpers.ts:386` |
| tl | debljina leđa (lesonit) | 3 | `catalog/settings.ts:11` |
| r | umanjenje leđa po širini i visini | 3 | `catalog/settings.ts:12` |
| zp | zazor pomične police po širini | 2 | `catalog/settings.ts:13` |
| u | uvučenost police od prednje ivice | 20 | `catalog/settings.ts:15`, `templates/helpers.ts:26-28` |
| ze | zazor fronta po ivici korpusa | 1,5 | `catalog/settings.ts:17` |
| zf | razmak između dva fronta | 3 | `catalog/settings.ts:16` |
| p | širina prečke | 100 | `catalog/settings.ts:79`, `templates/helpers.ts:203-205` |
| kant korpusa / frontova | debljina trake | 0,45 / 1 | `catalog/settings.ts:58-59` |
| cokla | visina / uvučenost od fronta | 100 / 50 | `catalog/settings.ts:63`, `:66` |
| visina donjih / gornjih | parametar projekta | 720 / 720, gornji vise na 1400 | `catalog/settings.ts:113`, `:116-117` |
| otpad kanta / iskorišćenje table | | 10 % / 80 % | `catalog/settings.ts:95-96` |
| okov | podrazumevani brend, fioke | GTV, „GTV kuglični teleskopski klizač (drvena fioka)“ | `catalog/settings.ts:110`, `src/domain/catalog/drawerSystems.ts:171-190` |

Konstrukcija (podrazumevano):
- **Leđa prikucana spolja** („od ivice do ivice“): daske korpusa su pliće za tl. Dubina dasaka **Dk = D − t − tl = D − 21** za elemente čija dubina uključuje front; otvoreni viseći nema front: **Dk = D − 3** (`elementSets.ts:53-90` kolona `depthIncludesFront`, `:396-398`, `:433-438`). „U falcu“ (Dk = D − 18) ostaje samo za stare projekte i ručni izbor.
- **Dno donjih, visokih, ormara i komoda ide PREKO bokova** (dno = Š, bok kraći za t); **visećih IZMEĐU** (`elementSets.ts:248-258`, `:261-271`; primena `src/domain/cutlist/derive.ts:77-78`, `:90-112`).
- **Donji pod radnom pločom: dve vodoravne prečke 100 umesto krova**; gornji, visoki, ormar, komoda: pun krov između bokova (`elementSets.ts:281-287`, `templates/helpers.ts:209-218`).
- **Mera u listi je gotova mera; kant se samo označava i ne odbija** (`templates/helpers.ts:366-367`, `src/domain/cutlist/kant.ts:26-33`).
- Svaki front i svaka daska je ceo mm; ostatak deljenja ide u zazor (`src/domain/fronts/frontLayout.ts:83-94`, `src/domain/fronts/faceSpec.ts:146-155`).

## 1. Spisak modela iz biblioteke

Biblioteka „Dodaj“ ima 8 tabova i 53 stavke; tab i podgrupa su u `src/domain/library/libraryTabs.ts:47-112`, stavke u `libraryKitchen.ts`, `libraryWardrobes.ts`, `libraryHome.ts`. Naziv je tačno onaj koji program prikazuje (iz `src/i18n/sr/`); mere su početne Š × V × D; „čipovi“ = širine koje se nude jednim klikom.

| Tab › podgrupa | Naziv u programu | Šablon | Š × V × D | Čipovi širina | Izvor |
|---|---|---|---|---|---|
| Donji › Korpusi | **Element sa vratima** | `base-with-doors` | 600 × 720 × 560 | 300, 400, 500, 600, 800, 900 | `libraryKitchen.ts:18` |
| | **Element sa fiokama** | `base-with-drawers` | 600 × 720 × 560 | 400, 500, 600, 800 | `libraryKitchen.ts:22` |
| | Element sa fiokom i vratima | `doors-plus-drawers` | 600 × 720 × 560 | 400, 500, 600, 800 | `libraryKitchen.ts:26` |
| | Uski izvlačni element | `pull-out-base` | 200 × 720 × 560 | 150, 200, 300 | `libraryKitchen.ts:58` |
| | Završni otvoreni element (donji) | `open-base-end` | 300 × 720 × 560 | 200, 300, 400 | `libraryKitchen.ts:62` |
| Donji › Sudopera i uređaji | Element za sudoperu | `sink-base` | 800 × 720 × 560 | 600, 800, 900, 1000 | `libraryKitchen.ts:31` |
| | Element za ugradnu mašinu za sudove | `dishwasher-front` | 600 × 820 × 550 | 450, 600 | `libraryKitchen.ts:44` |
| | Kućište rerne (donji) | `oven-base` | 600 × 720 × 560 | samo 600 | `libraryKitchen.ts:35` |
| | Element za rernu i ploču za kuvanje | `oven-base` | 600 × 720 × 560 | samo 600 | `libraryKitchen.ts:41` |
| | Element za ploču za kuvanje | `base-with-drawers` | 600 × 720 × 560 | 600, 800, 900 | `libraryKitchen.ts:51` |
| Gornji › Viseći | **Viseći element sa vratima** | `wall-with-doors` | 600 × 720 × 320 | 300, 400, 500, 600, 800, 900 | `libraryKitchen.ts:68` |
| | Element sa horizontalnim otvaranjem | `wall-with-doors` (klapna) | 600 × 360 × 320 | 500, 600, 800, 900 | `libraryKitchen.ts:72-80` |
| | Element sa podizanjem fronta | `wall-with-doors` (podizni) | 600 × 500 × 320 | 500, 600, 800, 900 | `libraryKitchen.ts:81-87` |
| | **Otvoreni viseći element** | `open-shelf` | 600 × 720 × 320 | 400, 600, 800, 1000 | `libraryKitchen.ts:94` |
| | Završni otvoreni element (gornji) | `open-shelf` | 300 × 720 × 320 | 200, 300 | `libraryKitchen.ts:98` |
| | Viseći element za aspirator | `wall-with-doors` + aspirator | 600 × 720 × 320 | 600, 900 | `libraryKitchen.ts:90` |
| Gornji › Police | Zidna polica | `open-shelf` | 600 × 720 × 320 | 400, 600, 800, 1000, 1200 | `libraryHome.ts:97` |
| | Kockasta polica | `open-shelf` (0 polica) | 350 × 350 × 250 | 300, 350, 400 | `libraryHome.ts:101` |
| | Polica na zidu | `wall-shelf` (jedna daska) | 800 × 18 × 250 | 600, 800, 1000, 1200 | `libraryHome.ts:109` |
| Visoki › Ostave i kolone | **Visoki ostavinski element** | `tall-unit` | 600 × 2000 × 560 | 500, 600 | `libraryKitchen.ts:109` |
| | Visoki element sa policama | `tall-unit` (5 polica) | 600 × 2000 × 560 | 500, 600 | `libraryKitchen.ts:126` |
| | Visoki izvlačni element | `pull-out-base` | 300 × 2000 × 560 | 200, 300, 400 | `libraryKitchen.ts:130-136` |
| Visoki › Za uređaje | Element za ugradni frižider | `appliance-tall` | 600 × 2100 × 560 | samo 600 | `libraryKitchen.ts:113` |
| | Visoki sa rernom | `appliance-tall` | 600 × 2100 × 560 | samo 600 | `libraryKitchen.ts:117` |
| | Element za rernu i mikrotalasnu | `appliance-tall` | 600 × 2100 × 560 | samo 600 | `libraryKitchen.ts:121` |
| Visoki › Regali | Otvoreni regal | `custom-carcass` | 800 × 1800 × 350 | 600, 800, 1000 | `libraryHome.ts:118` |
| | Regal sa vratima | `wardrobe` | 800 × 1800 × 350 | 600, 800, 1000 | `libraryHome.ts:125-131` |
| Ugaoni | Ugaoni element (L) | `corner-base-l` | 900 × 720 × 900 (krak 560) | nema | `libraryKitchen.ts:57` |
| Plakari › Na krila | **Ormar** | `wardrobe` | 1000 × 1900 × 550 | 800, 900, 1000, 1200, 1500, 1800 | `libraryWardrobes.ts:12` |
| | Uski ormar | `wardrobe` (1 krilo) | 500 × 1900 × 550 | 450, 500, 600 | `libraryWardrobes.ts:20` |
| | Ormar sa vratima i fiokama | `doors-plus-drawers` | 900 × 1900 × 550 | 900, 1000, 1200 | `libraryWardrobes.ts:28` |
| Plakari › Klizni | Plakar sa kliznim vratima | `sliding-wardrobe` | 2000 × 2400 × 650 | 1600, 1800, 2000, 2400 | `libraryWardrobes.ts:49` |
| | Veliki klizni plakar | `sliding-wardrobe` | 3000 × 2400 × 650 | 2700, 3000, 3600 | `libraryWardrobes.ts:53` |
| | Nadgradnja iznad ormara | `wall-with-doors` | 1000 × 400 × 550 | 800 … 1800 | `libraryWardrobes.ts:62` |
| Komode › Sobne komode | **Komoda sa fiokama** | `dresser` (3 fioke) | 800 × 800 × 450 | 600, 800, 1000, 1200 | `libraryWardrobes.ts:75` |
| | Visoka komoda sa fiokama | `dresser` (5 fioka) | 600 × 1200 × 450 | 500, 600, 800 | `libraryWardrobes.ts:79` |
| | Komoda sa vratima | `wardrobe` | 800 × 800 × 420 | 600, 800, 1000 | `libraryWardrobes.ts:88-94` |
| | Komoda sa vratima i fiokama | `doors-plus-drawers` | 900 × 850 × 450 | 800, 900, 1000, 1200 | `libraryWardrobes.ts:95-111` |
| Komode › TV komode | TV komoda sa fiokama | `dresser` (2 fioke) | 1200 × 450 × 420 | 900, 1000, 1200 | `libraryWardrobes.ts:116` |
| | TV komoda sa vratima | `wardrobe` | 1600 × 450 × 420 | 1200, 1400, 1600, 1800 | `libraryWardrobes.ts:123-133` |
| Kupatilo | Donji element za umivaonik | `sink-base` | 600 × 550 × 460 | 450, 600, 800 | `libraryHome.ts:11-25` |
| | Viseći element za umivaonik | `sink-base` | 600 × 500 × 460 | 450, 600, 800 | `libraryHome.ts:26-38` |
| | Viseći ormarić | `wall-with-doors` | 600 × 700 × 250 | 300, 400, 600 | `libraryHome.ts:41-52` |
| | Ormarić sa ogledalom | `wall-with-doors` | 600 × 700 × 150 | 500, 600, 800 | `libraryHome.ts:53-64` |
| | Otvoreni kupatilski element | `open-shelf` | 350 × 1200 × 250 | 300, 350, 400 | `libraryHome.ts:79-91` |
| | Visoki kupatilski ormarić | `wardrobe` | 350 × 1800 × 320 | 300, 350, 400 | `libraryHome.ts:67-78` |
| Dodaci › Ploče i cokle | Radna ploča · Kompakt ploča | `worktop` | 1200 × 38 × 600 (po nizu korpusa) | — | `libraryKitchen.ts:141-148` |
| | Cokla · Bočni povrat cokle | `plinth` | 1200 (580) × 100 × 18 | — | `libraryKitchen.ts:149-153` |
| | Slobodna ploča / maska · Duplirana ploča | `free-panel`, `doubled-panel` | 600 × 720 × 18 (36) | — | `libraryKitchen.ts:159-162` |
| Dodaci › Strane i blende | Ukrasna strana · Noseća stranica · Blenda | `end-panel`, `filler-panel` | 580 × 820 (2100) × 18 · 100 × 720 × 18 | — | `libraryKitchen.ts:154-158` |
| Dodaci › Napravi od nule | Korpus po meri (+ radnja „Slobodna izrada“) | `custom-carcass` | 500 × 700 × 400 | — | `libraryHome.ts:141`, `libraryTabs.ts:109` |

Podebljano = modeli sa formulama u tački 4. Kupatilske stavke počinju na vodootpornoj iverici (`libraryHome.ts:8`). Šablon `corner-base-blind` (slepi ugaoni) postoji u registru (`templates/registry.ts:56`), ali ga biblioteka ne nudi.
Broj vrata pri dodavanju prati širinu ako stavka nije zakucala svoj: do 600 → 1, do 1200 → 2, do 1800 → 3, do 2400 → 4 (`src/domain/rules.ts:81-94`, `libraryPick.ts:177-188`); visoki je zakucan na 2 (`libraryKitchen.ts:109`). Kasnija promena širine NE menja broj vrata.

## 2. Mere i opcije koje korisnik zadaje, i granice

| Šta | Granice | Korak | Izvor |
|---|---|---|---|
| Širina (upis u polje) | 50 – 6000 | ceo mm | komanda `resizeElement`, `src/commands/elements.ts:274` |
| Visina (upis) | 10 – 4000 | ceo mm | `commands/elements.ts:275` |
| Dubina (upis, sa frontom) | 10 – 2000 | ceo mm | `commands/elements.ts:276` |
| Klizač Š / V / D u panelu | 100 – 2400 / 100 – 2600 / 100 – 1000 | 10 | `src/domain/dims/sliderSteps.ts:11`, `:99` |
| Mera u koju daske / frontovi ne staju (mera ≤ 0) | odbija se | — | `commands/elements.ts:338` |
| Broj vrata (krila) | 1 – 6 | 1 | komanda `setFronts`, `src/commands/fronts.ts:141`; „+“ u panelu do 6 `src/ui/focus/placeActions.ts:331` |
| Broj fioka | 1 – 5 | 1 | `commands/fronts.ts:142`; `placeActions.ts:327` |
| Broj polica | 0 – 12 | 1 | `commands/fronts.ts:143`; `placeActions.ts:314` |
| Uspravne pregrade (donji / gornji sa vratima, visoki) | 0 – 6, kolona bar 150 svetlo | 1 | `src/commands/dividers.ts:68`, `templates/carcassDividers.ts:35-38` |
| Unutrašnjost ormara | police · šipka · police + šipka · fioke · fioke + šipka · kombinovano | — | `commands/fronts.ts:145` |
| Otvaranje visećeg | na šarkama · klapna · podizni | — | `commands/fronts.ts:146` |
| Klizna vrata plakara | 2 – 4 | 1 | `commands/fronts.ts:147` |
| Visina fronta jedne fioke | 40 – 2000 (i pravilo sanduka) | ceo mm | `commands/fronts.ts:152` |
| Sanduk fioke | najniži 50 mm; stranice sistema M 85 · K 120 · C 150 · F 180 | — | `src/domain/drawers/box.ts:56`, `catalog/drawerSystems.ts:186` |
| Dužina šine fioke | samo kataloške 250 – 550 (GTV kuglični) | 50 | `catalog/drawerSystems.ts:178`, `:434-444` |
| Širina prečke (po elementu) | 40 – 300 | — | `src/commands/materials.ts:219` |
| Podešavanja: debljina ploče 8 – 60; leđa 1 – 20; umanjenje leđa 0 – 20; uvučenost police 0 – 100 | | 1 / 1 / 0,5 / 1 | `src/domain/settings/settingsDefsCarcass.ts:12-88` |
| Podešavanja: zazor po ivici i između frontova 0 – 20 | | 0,5 | `settings/settingsDefsFronts.ts:12-35` |
| Podešavanja: visina cokle (= nogica) 0 – 300; uvučenost cokle 0 – 100 (preporuka 40 – 70) | | 5 | `settings/settingsDefsHeights.ts:13-35`, `src/domain/catalog/feet.ts:46` |
| Podešavanja: visina donjih 300 – 1200; visina gornjih 200 – 1500; gornji od poda 1000 – 2600 | | 5 / 10 / 10 | `settings/settingsDefsHeights.ts:75-113` |
| Kant: debljine u ponudi | 0 · 0,4 · 0,45 · 0,8 · 1 · 2 | — | `src/domain/catalog/hardware.ts:96` |
| Najmanja / najveća širina po modelu (posebno) | **nije nađeno** — važe opšte granice gore | | |
| Najveće krilo 600 mm | samo pravilo predloga broja vrata pri dodavanju, nije zabrana | | `rules.ts:79-94` |

Napomena: stari brojači u detaljima panela imaju uže spiskove (vrata 1 – 2 za kuhinjske, ormar 1 – 4+, fioke 2 – 4 donji / 1 – 5 komoda, police 0 – 6 — `src/ui/props/FrontsFields.tsx:146`, `:155`, `:198`, `:362`, `:400`); redovi „− N +“ i komanda primaju granice iz tabele. Koji se od ta dva danas vidi kupcu — nije jasno bez pokretanja programa.

## 3. Vrste frontova

Šta korisnik bira (sve iz koda):
- **Dezen / materijal**: iverica 18 mm iz kataloga dezena, tabla 2800 × 2070 (`src/domain/catalog/materials.ts:16-39`); dezen frontova za projekat, po korpusu i po pojedinačnom frontu; **sopstveni dezen sa slike** (komanda `addCustomDecor`, `src/commands/customDecor.ts:23`). Lesonit u boji za leđa i dno fioke.
- **Ravna vrata na šarkama** — tri vrste šarke bez proizvođača: ravna (pun preklop), kolenasta (polupreklop), jako kolenasta = **upušten front**, zazor 2 mm (`src/domain/catalog/hingeTypes.ts:31-35`, `catalog/settings.ts:20`). Strana šarki levo / desno / gore / dole.
- **Viseći: klapna (horizontalno otvaranje) i podizni front** (`commands/fronts.ts:146`, `templates/wall-with-doors.ts:33-34`).
- **Fioke** (front fioke), fioka + vrata, unutrašnje fioke ormara.
- **Podela fronta** po visini i širini; deo je vrata, klapna, maska ili fioka (`src/domain/fronts/CLAUDE.md:15`).
- **Ručke**: štangla (razmak rupa 96 – 320), dugme, profilna na ivici, **bez ručke — otvaranje pritiskom (push)** (`src/domain/catalog/handles.ts:25`, `:35-39`).
- **Gola profil** („Kuhinja bez ručki (gola) za ceo projekat“, i po korpusu) — `src/i18n/sr/settings.ts:341-342`, `src/domain/gola/`.
- **Klizna krila** plakara (sistem PKM 80 podrazumevan), ručka udubljena ili profil (`catalog/handles.ts:42`, `:48`).
- **Kant fronta** 1 mm na sve četiri ivice, boja kanta po izboru.

Čega NEMA u kodu: **reljefni / ramski / glodani frontovi** (pretraga „reljef“, „ramsk“, „glodan“ — nije nađeno); **staklo i ogledalo kao materijal** („materijal staklo ili ogledalo NE postoji u programu“, `src/domain/fronts/CLAUDE.md:36`; „Ormarić sa ogledalom“ je samo naziv stavke); MDF farbani front kao posebna vrsta — nije nađeno.

## 4. Formule za mere dasaka

Svi šabloni zovu iste graditelje iz `src/domain/templates/helpers.ts`, pa kroz `src/domain/cutlist/derive.ts` (dno preko bokova, redosled). Redosled u listi: Krov / Prečke → Bok → Dno → Leđa → Pregrade → Police → Vrata → Fioke (`derive.ts:160-165`).
Kolona „mera“ je **dužina × širina kako red piše kartica Krojne mere** (`Panel.lengthMm × widthMm`); kartica „Po meri“ istu dasku piše sa merom duž goda prvom (vidi 5).

Zajedničko:

| Deo (naziv u listi) | Kom | Dužina | Širina | Deb. | Materijal | Kant | God | Izvor |
|---|---|---|---|---|---|---|---|---|
| Leđa | 1 | Š − r = Š − 3 | V − r = V − 3 | 3 | lesonit | bez | bez | `helpers.ts:99-115` |
| Polica | n | Š − 2t − zp = Š − 38 | Dk − u = Dk − 20 | 18 | korpus | 1 duža (prednja) 0,45 | ↔ | `helpers.ts:128-130`, `:171-190` |
| Front (vrata) | n | ⌊(Š − 2·ze − (n−1)·zf) / n⌋ = ⌊Š / n⌋ − 3 | V − 2·ze = V − 3 | 18 | front | 2 duže, 2 kraće, 1 mm | ↕ | `helpers.ts:368-397`, `frontLayout.ts:86-94` |
| Front (fioka) | n | Š − 2·ze = Š − 3 | Fv = ⌊(V − 2·ze − (n−1)·zf) / n⌋ = ⌊V / n⌋ − 3 | 18 | front | 2 duže, 2 kraće, 1 mm | ↕ | `src/domain/drawers/panels.ts:224-241` |

Vrata se u listi pišu red po strani šarki (2 krila = red „šarke LEVO“ + red „šarke DESNO“) — `src/domain/hinges/hingeLists.ts:58-117`.

### 4.1 Donji element sa vratima — „Element sa vratima“ (`base-with-doors`), `templates/base-with-doors.ts:28-42`

| Deo | Kom | Dužina | Širina | Deb. | Kant | God | Izvor |
|---|---|---|---|---|---|---|---|
| Prečka — prednja | 1 | Š − 2t = Š − 36 | p = 100 | 18 | 2 duže 0,45 | ↔ | `helpers.ts:240-265` |
| Prečka — zadnja | 1 | Š − 36 | 100 | 18 | 2 duže 0,45 | ↔ | `helpers.ts:209-218` |
| Bok | 2 | V − t = V − 18 | Dk = D − 21 | 18 | 1 duža 0,45 | ↕ | `helpers.ts:34-50`, `derive.ts:107-109` |
| Dno | 1 | Š (preko bokova) | Dk | 18 | 1 duža 0,45 | ↔ | `helpers.ts:52-69`, `derive.ts:100-106` |
| Leđa, Polica × n, Front (vrata) × n | | zajedničko | | | | | |

**Kontrolni primer 600 × 720 × 560, 1 vrata, 1 polica — današnji kod daje TAČNO ono sa snimka:** Prečka — prednja 564 × 100 i Prečka — zadnja 564 × 100 (2 duže), Bok 702 × 539 × 2 (1 duža), Dno 600 × 539, Leđa 597 × 717 (3 mm, bez kanta), Polica 562 × 519, Front (vrata) 597 × 717 (2 duže, 2 kraće); **8 dasaka, 2,34 m²** (2,3407), kant 7,5 m (0,45: 4,822 m; 1 mm: 2,628 m). Kartica „Po meri“ iste daske piše 717 × 597 (front i leđa) i spaja prečke u jedan red „Prečka — prednja / Prečka — zadnja“ × 2 — baš kao na snimku.

### 4.2 Donji element sa fiokama — „Element sa fiokama“ (`base-with-drawers`), `templates/base-with-drawers.ts:29-39`

Sanduk je isti kao 4.1 (prečke, Bok V − 18, Dno Š, Leđa); umesto polica i vrata idu fioke. Podrazumevano 3 fioke, drveni sanduk na GTV kugličnim klizačima, stranica M = 85.

| Deo | Kom | Dužina | Širina | Deb. | Kant | Izvor |
|---|---|---|---|---|---|---|
| Front (fioka) | n | Š − 3 | Fv = ⌊V / n⌋ − 3 | 18 (front) | 2 duže, 2 kraće, 1 mm | `drawers/panels.ts:224-241` |
| Bok fioke (leva i desna) | 2n | NL (dužina šine) | 85 | 18 (korpus) | 1 duža 0,45 | `drawers/panels.ts:78-91` |
| Prednja i zadnja strana fioke | 2n | Š − 2t − 2·13 − 2·18 = Š − 98 | 85 | 18 (korpus) | 1 duža 0,45 | `drawers/panels.ts:92-105`, `drawers/box.ts:186-208` |
| Dno fioke — lesonit (prikucano ispod) | n | (Š − 2t − 26) − 3 = Š − 65 | NL − 3 | 3 (lesonit) | bez | `drawers/panels.ts:108-125`, `drawers/box.ts:232-241` |

- **NL** = najduža od 250, 300, 350, 400, 450, 500, 550 za koju je NL ≤ (D − t − tl) − 10 = D − 31; ako nijedna ne staje, 250 uz napomenu „Korpus je preplitak…“ (`drawers/box.ts:188-190`, `catalog/drawerSystems.ts:178-179`, `:422-432`). D = 560 → NL 500; D = 450 → NL 400.
- **Visina sanduka** je 85, osim kad nema mesta (`src/domain/drawers/room.ts:52-66`, `drawers/box.ts:50-56`, `:85-87`): frontovi se slažu odozdo, sanduk počinje 20 iznad dna svog fronta; gornja fioka sme najviše 10 ispod prečki / krova: mesto = V − 49,5 − (n − 1)·(Fv + 3); ostale: mesto = Fv − 20. Mesto ≥ 85 → 85; 50 ≤ mesto < 85 → ⌊mesto⌋ (red u listi dobija broj fioke, npr. „Bok fioke 1“); mesto < 50 → fioka bez sanduka (program takvu radnju odbija). Za sajt: sve je 85 kad je Fv ≥ 132 (tačno: Fv ≥ 131,5 kod deljivih visina).
- Primer 600 × 720 × 560, 3 fioke: Front 597 × 237 × 3, Bok fioke 500 × 85 × 6, Prednja i zadnja 502 × 85 × 6, Dno fioke 535 × 497 × 3; 24 daske, 3,35 m².

### 4.3 Gornji (viseći) sa vratima — „Viseći element sa vratima“ (`wall-with-doors`), `templates/wall-with-doors.ts:30-50`

| Deo | Kom | Dužina | Širina | Kant | God | Izvor |
|---|---|---|---|---|---|---|
| Krov | 1 | Š − 36 | Dk = D − 21 | 1 duža 0,45 | ↔ | `helpers.ts:81-97` |
| Bok | 2 | V (dno i krov između) | Dk | 1 duža 0,45 | ↕ | `helpers.ts:34-50`, `elementSets.ts:256` |
| Dno | 1 | Š − 36 | Dk | 1 duža 0,45 | ↔ | `helpers.ts:52-69` |
| Leđa, Polica × n, Front (vrata) × n | | zajedničko | | | | |

Primer 600 × 720 × 320: Krov 564 × 299, Bok 720 × 299 × 2, Dno 564 × 299, Leđa 597 × 717, Polica 562 × 279, Front 597 × 717; 7 dasaka, 1,78 m².

### 4.4 Visoki element — „Visoki ostavinski element“ (`tall-unit`), `templates/tall-unit.ts:27-40`

Krov Š − 36 × Dk; **Bok (V − 18) × Dk × 2** (dno preko); **Dno Š × Dk**; Leđa; Polica × n (podrazumevano 4); Front (vrata) × 2 (dva uska krila i na 600). Primer 600 × 2000 × 560: Bok 1982 × 539, Dno 600 × 539, Krov 564 × 539, Leđa 597 × 1997, Polica 562 × 519 × 4, Front 297 × 1997 × 2; 11 dasaka, 6,31 m².

### 4.5 Plakar na krila — „Ormar“ (`wardrobe`), `templates/wardrobe.ts:33-45`, `templates/wardrobe-common.ts:138-255`

Sanduk kao visoki: Krov (Š − 36) × Dk, Bok (V − 18) × Dk × 2, Dno Š × Dk, Leđa; Dk = D − 21. Stoji na podu, bez nogica i cokle (`elementSets.ts:72`).

| Deo | Kom | Dužina | Širina | Kant | Izvor |
|---|---|---|---|---|---|
| Pregrada | broj pregrada | V − 2t = V − 36 | Dk | 1 duža 0,45 | `wardrobe-common.ts:151-177` |
| Fiksna polica iznad šipke | 1 po koloni sa šipkom | svetla širina kolone (bez zazora) | Dk − 20 | 1 duža 0,45 | `wardrobe-common.ts:196-215` |
| Polica | broj polica × broj kolona | ⌊kolona − 2⌋ | Dk − 20 | 1 duža 0,45 | `wardrobe-common.ts:206` |
| Front (vrata) | n | ⌊Š / n⌋ − 3 | V − 3 | 2 duže, 2 kraće, 1 mm | `src/domain/drawers/wardrobe.ts:93-97` |

- **Kolone i pregrade** (`src/domain/fronts/wardrobeLayout.ts:57-149`): krila se grupišu u kolone od 1 ili 2 krila (par); par je dozvoljen samo ako je svetla širina njegove kolone ≤ 1000 („Najveći raspon police“, `catalog/settings.ts:50`); bira se najmanje pregrada, pa simetrično, pa parovi levo. Pregrada stoji ispod spoja vrata: sredina = −Š/2 + ze + k·krilo + (k − 1)·zf + zf/2; kolona = od boka (t) do pregrade (± t/2). Bez pregrade kolona = Š − 36.
- Podrazumevano „police + šipka“: svaka kolona ima šipku (fiksna polica) i `police` pomičnih polica; „police“ → bez šipke; „šipka“ → bez polica (`wardrobe-common.ts:123-133`).
- Primeri: 1000 × 1900 × 550 (2 krila, bez pregrade): Fiksna polica 964 × 509, Polica 962 × 509 × 2, Front 497 × 1897 × 2; 10 dasaka, 8,28 m². 1200 (2 krila): kolona para bi bila 1164 > 1000 → raspored 1 + 1, Pregrada 1864 × 529, kolone 573 i 573. 1800 (3 krila): 2 + 1, jedna pregrada.

### 4.6 Komoda — „Komoda sa fiokama“ (`dresser`), `templates/dresser.ts:29-38`

Krov (Š − 36) × Dk; Bok (V − 18) × Dk × 2; Dno Š × Dk; Leđa; fioke tačno kao 4.2 (gornja fioka pod krovom — isto pravilo mesta). Dk = D − 21. Primer 800 × 800 × 450, 3 fioke: Krov 764 × 429, Bok 782 × 429, Dno 800 × 429, Leđa 797 × 797, Front (fioka) 797 × 263 × 3, Bok fioke 400 × 85 × 6, Prednja i zadnja 702 × 85 × 6, Dno fioke 735 × 397 × 3; 23 daske, 4,04 m².

### 4.7 Otvorena polica — „Otvoreni viseći element“ / „Zidna polica“ (`open-shelf`), `templates/open-shelf.ts:24-34`

Nema fronta, pa **Dk = D − 3**: Krov (Š − 36) × (D − 3); Bok V × (D − 3) × 2; Dno (Š − 36) × (D − 3); Leđa; Polica (Š − 38) × (D − 23) × n (podrazumevano 2). Primer 600 × 720 × 320: Krov i Dno 564 × 317, Bok 720 × 317, Polica 562 × 297 × 2; 7 dasaka, 1,58 m².

## 5. Kant

- Oznaka reda (`src/domain/cutlist/kant.ts:10-24`): broji se koliko je kantovanih ivica duž DUŽE i duž KRAĆE strane daske: „1 duža“, „2 duže“, „2 duže, 1 kraća“, „2 duže, 2 kraće“; bez kanta „—“ (na ekranu „bez kanta“). Kod kvadratne daske ivice duž dužine reda broje se kao „duže“.
- Koje ivice: bok, dno, krov, polica, pregrada, stranice fioke — samo prednja (vidljiva) ivica; položene prečke — obe duže; front, front fioke, cokla — sve četiri (`helpers.ts:46`, `:65`, `:77-79`, `:258-260`, `:388-393`; `templates/plinth.ts:39-44`).
- Dužina kanta daske = zbir dužina kantovanih ivica (ivica duž dužine = dužina, duž širine = širina) × komada (`kant.ts:43-60`, `:73-76`); zbraja se **po debljini trake** (i po boji za cenu).
- U redu korpusa u Krojnim merama piše se zbir **bez otpada**, jedna decimala: „8 dasaka · 2,34 m² · kant 7,5 m“ (`src/ui/CuttingListPanel.tsx:387-391`, `:419`).
- Kartica Materijali i cena dodaju **otpad 10 %** (podešavanje 0 – 100): metri × 1,10, red „ABS 0,45 mm“ / „ABS 1 mm“ (`src/ui/MaterialsPanel.tsx:22-28`, `:44-50`, `:97`; `src/domain/cutlist/pricing.ts:42`).
- **Mera u listi je gotova mera sa kantom — kant se NE odbija** (vlasnikovo pravilo, `helpers.ts:366-367`). Funkcija za „sirovu“ meru (`coreMm`) postoji, ali je lista ne koristi (`kant.ts:26-36`).
- Izuzetak jedne daske („Ova daska“): drugi materijal ili kant po ivici, tada red piše i debljinu („1 duža · 2 mm“) — `CuttingListPanel.tsx:444`.

## 6. Zbirovi

- **m² ploče** = Σ dužina × širina × komada / 1 000 000, čista površina bez otpada (`pricing.ts:34`, `CuttingListPanel.tsx:387-390`, `src/ui/ReportStats.tsx:28`). Po materijalu (svaka ploča i svaka boja lesonita svoj red): `pricing.ts:73-77`; „Po meri“ daje i broj dasaka i m² po ploči (`src/domain/cutlist/cutGroups.ts:93-112`).
- **Broj tabli je PROCENA**, ne krojni plan: ⌈m² / (površina table × 0,80)⌉ po materijalu (`MaterialsPanel.tsx:30-40`); tabla iverice 2800 × 2070 (`catalog/materials.ts:28-29`), lesonit 2750 × 1830 (`catalog/materials.ts:144`).
- **Broj dasaka** = zbir komada (red „Bok × 2“ su dve daske) — `CuttingListPanel.tsx:45-47`.
- **Okovi** (kartica Okovi: Šifra · Naziv · Količina, po grupama Šarke · Šine fioka · Ekscentri i spojevi · Nogice i cokla · Ručke · … — `src/ui/HardwarePanel.tsx:34-36`, `src/domain/settings/hardwareGroups.ts:14-21`):

| Okov | Pravilo | Izvor |
|---|---|---|
| Šarka (po vratima) | po dužini ivice sa šarkama: do 900 → 2, do 1600 → 3, do 2000 → 4, preko → 5 | `rules.ts:5-15`, `src/domain/hinges/hinges.ts:121-123` |
| | jedna vrata šira nego viša (kuhinjski korpus) → šarke gore, broji se po širini | `hinges/hinges.ts:179` |
| Ručka | 1 po vratima / fioci (štangla, razmak po veličini fronta) | `templates/base-with-doors.ts:48-54`, `src/domain/handles/handleLayout.ts:85-86` |
| Nogica podesiva | Š ≤ 800 → 4, šire → 6 (donji, visoki; komoda „niska“); viseći i ormar na podu nemaju | `rules.ts:59-67`, `derive.ts:219-238` |
| Nosač visećeg elementa | 2 | `templates/wall-with-doors.ts:75-81` |
| Ekscentar sa tiplom (set) | puna ploča (dno, krov, pregrada) 4, prečka 2: donji 8, gornji / visoki / komoda / otvoreni 8, ormar 4 × (2 + pregrade) | `helpers.ts:311-364`, `templates/wardrobe.ts:59` |
| Nosač police (pin) | 4 po pomičnoj polici | `helpers.ts:354-362` |
| Komplet šina fioke | 1 po fioci, šifra sa NL (npr. „… NL 500“) | `drawers/panels.ts:269-284` |
| Garderobna šipka + 2 nosača | po koloni sa šipkom, dužina = svetla širina kolone | `wardrobe-common.ts:284-310` |
| Zidni nosač protiv prevrtanja | 2 kad je V ≥ 1200 (visoki, ormar, komoda) | `wardrobe-common.ts:326-336` |
| Kopča cokle | na dasci cokle: max(2, ⌈dužina / 500⌉) | `templates/plinth.ts:67-75` |

- **Cena** (kartica Cena): materijal (m² × cena po m²) + kant (m × cena, + otpad) + okovi + rad (broj elemenata × 3000) = zbir, + marža 20 % (`pricing.ts:23-57`, `catalog/settings.ts:97-98`). Cene upisuje majstor; neupisana je 0.
- Cokla nije deo korpusa: posebna stavka „Cokla“, daska dužina × 100 × 18, kant na sve četiri ivice (`templates/plinth.ts:8-49`).

## 7. Šta program izvozi / prikazuje

Prozor „Izveštaji“ („ažurira se uživo“), kartice redom (`src/ui/ReportApp.tsx:26-36`): **Krojne mere · Po meri · Okovi · Materijali · Cena · Izveštaj / PDF**. Iznad kartica četiri broja: korpusa, dasaka, m² ploče, ukupna cena (`src/ui/ReportStats.tsx:36-43`).

| Šta | Tačno šta postoji | Izvor |
|---|---|---|
| Krojne mere | tabela po korpusu: # · Panel · Mera · Deb. · Materijal · Kant · Godovi (↕ / ↔ / —) · Kom; red korpusa sa zbirom „N dasaka · m² · kant m“; skica korpusa levo | `CuttingListPanel.tsx:363-382`, `:409-421` |
| Po meri | iste daske skupljene po meri, ploča po ploča (bela iverica, dekori, lesonit), najveće prvo; prva mera = pravac goda; strana šarki u redu | `cutlist/cutGroups.ts:244-300`, `CuttingListPanel.tsx:269-336` |
| Okovi · Materijali · Cena | vidi 6 | `HardwarePanel.tsx`, `MaterialsPanel.tsx`, `src/ui/PricePanel.tsx:25-57` |
| Izveštaj / PDF | sve kartice jedna ispod druge, za štampu | `ReportApp.tsx:54-61` |
| **Kopiraj** | „Po meri“ → tekst za poruku krojaču (mera u cm, „N kom“, kant; izbor „Za sečenje“ ili „Sečenje i šarke“); „Po korpusu“ → CSV u ostavu | `CuttingListPanel.tsx:166-172`, `cutGroups.ts:143-169`, `src/i18n/sr/list.ts:56-62` |
| **CSV** | datoteka `kroj-lista.csv`, kolone `Korpus;Element;Panel;Dužina (mm);Širina (mm);Debljina (mm);Materijal;Kant;Godovi;Komada;Napomena`; god „uzduž / popreko / svejedno“ | `CuttingListPanel.tsx:151-161`, `src/domain/cutlist/csvExport.ts:25-58`, `i18n/sr/list.ts:22-26` |
| **Štampaj / PDF** | štampa aktivne kartice kroz sistemski dijalog („Sačuvaj kao PDF“) | `ReportApp.tsx:168-175`, `i18n/sr/list.ts:64-65` |
| Meni Projekat | Nov projekat · Otvori projekat (.topica) · Sačuvaj · Sačuvaj kao · Poslednji projekti · **Izvoz PDF / CSV** · Podešavanja radionice · Izlaz · Prijavi problem · O programu | `src/ui/TopBar.tsx:231-240`, `src/i18n/sr/okvir.ts:11` |
| Ponuda za kupca (dokument) | **nije nađeno** — postoji samo kartica Cena | |
| Slika projekta | PNG sličica sobe uz datoteku projekta (za početni ekran); izvoz slike za klijenta — nije nađeno | `src/services/projectThumbs.ts:3-4` |

## 8. Provera tvrdnji za sajt

| Tvrdnja | Odgovor | Izvor |
|---|---|---|
| Probni period „14 dana“ | **NIJE NAĐENO** (nema „14 dana“, „trial“, probnog perioda; „Probne funkcije“ su razvojni prekidači) | pretraga `src`, `src-tauri`; `src/features.ts:1-7` |
| Licenciranje / aktivacija / „bez kartice“ | **NIJE NAĐENO** u kodu | pretraga `src`, `src-tauri/src`, `tauri.conf.json` |
| Jezik: srpski | **DA** (latinica, izvor svih tekstova) | `src/i18n/sr.ts`, `src/i18n/index.ts:1-6` |
| Jezik: engleski | **NE za kupca** — prevod postoji (`src/i18n/en.ts`), ali je izbor jezika isključen u kodu | `src/features.ts:97-103` |
| Jedinice mm / cm / inč | **DA** (prikaz i unos; unutra uvek mm) | `ARHITEKTURA.md:48` |
| Klizna vrata plakara | **DA** — „Plakar sa kliznim vratima“, „Veliki klizni plakar“, 2 – 4 krila | `libraryWardrobes.ts:49-57`, `commands/fronts.ts:147` |
| Garderober kao zaseban model | **NE** — nema stavke tog imena; postoje Ormar, Uski ormar, klizni plakar i garderobna šipka | `libraryWardrobes.ts:7-71` |
| Reljefni frontovi | **NE** (nije nađeno) | tačka 3 |
| Ugaoni elementi | **DA** — „Ugaoni element (L)“; slepi ugaoni postoji u kodu, ali nije u biblioteci | `libraryKitchen.ts:57`, `templates/registry.ts:56` |
| Sudopera / rerna / aspirator | **DA** — Element za sudoperu, Kućište rerne (donji), Element za rernu i ploču za kuvanje, Visoki sa rernom, Viseći element za aspirator, mašina za sudove, frižider | `libraryKitchen.ts:31-51`, `:90`, `:113-125` |
| Gola profil | **DA** | `i18n/sr/settings.ts:341-342` |
| Push (bez ručke) | **DA** — „Bez ručke, otvaranje pritiskom“ | `catalog/handles.ts:39` |
| Sopstveni dezen | **DA** — „Dodaj svoj dezen“ sa slike | `commands/customDecor.ts:1-5`, `:23` |
| 3D prikaz | **DA** (Three.js, isti model kao krojna lista) | `CLAUDE.md` „Šta je TOPICA“, `src/scene/` |
| CNC izvoz | **NE** (nije nađeno: DXF, G-kod, .mpr); CSV je „za Excel i mašinu / program za optimizaciju krojenja“ | `cutlist/csvExport.ts:1` |
| Optimizacija krojenja (nesting, krojni plan) | **NE** — „Optimizacija kroja, formati tabli i širina reza ne postoje.“; postoji samo procena broja tabli (80 %) | `src/i18n/sr/settings.ts:296`, `MaterialsPanel.tsx:30-40` |
| Prijava / nalog | **NE** (nije nađeno); „Prijavi problem“ samo snima datoteku prijave | `TopBar.tsx:239`, `src/ui/report/problemReport.ts:1` |
| Ažuriranja | **NE za kupca** — provera nove verzije je isključen prekidač, pravo izvođenje nije napravljeno | `src/features.ts:13-34`, `src/services/update/realUpdate.ts:1-2` |
| AI pomoćnik / fotorealistični render | **NE za kupca** (isključeni prekidači) | `src/features.ts:24-34` |
| Video / uputstvo u programu | **NE** (nije nađeno); postoji dugme „Gde je šta — pokaži šta se gde nalazi na ekranu“ i „O programu“ | `TopBar.tsx:210`, `i18n/sr/okvir.ts:16` |
| „EU standardi“ | Kod navodi: korpus bez okvira, **sistem 32**, **šarka sa šoljom Ø35**; razmak rupa štangle iz niza sistema 32 (96 – 320); „tipska niša po evropskom standardu“ za uređaje; zazori „evropska praksa“. Oznaka nekog zvaničnog standarda (EN …) u tekstu za kupca — nije nađena | `CLAUDE.md` (Odluke vlasnika), `rules.ts:21-25`, `catalog/handles.ts:24-25`, `src/domain/units/units.ts:41`, `src/i18n/sr/domain1.ts:35` |

## 9. Šta nije jasno / gde sam stao

- **Formule potvrđene kodom (0 razlika na mreži mera)**: Element sa vratima, Element sa fiokama, Viseći element sa vratima, Visoki ostavinski element, Ormar (unutrašnjost police + šipka, police, šipka; 1 – 4 krila), Komoda sa fiokama, Otvoreni viseći element. Važe za podrazumevana podešavanja i element koji stoji sam.
- **Nisu izvođene** (postoje u kodu, složenije): klizni plakar (sklop korpusa, šine, krila), ugaoni L, sudopera, kućište rerne, visoki za uređaje, vrata + fioke, izvlačni, ormar sa fiokama i „kombinovano“, aspirator, klapna i podizni front, uspravne pregrade u kuhinjskom korpusu, gola (menja mere frontova i bokova), kolenasta / jako kolenasta šarka (menja meru vrata), metalni sanduci fioka (druge formule — `drawers/panels.ts:129-158`).
- **Dva prikaza iste daske**: „Krojne mere“ pišu `dužina × širina` kako ih daje šablon (front 597 × 717), „Po meri“ okreće da prva mera bude pravac goda (717 × 597). Snimak iz zadatka je iz „Po meri“. U JSON-u su oba (`duzina / sirina` = Po meri, `krojneMere` = Krojne mere).
- **Nosači polica kod ormara sa pregradom**: program broji 4 × broj polica jedne kolone, iako su police u svakoj koloni (kod kuhinjskog korpusa sa pregradom množi sa brojem kolona — `templates/wardrobe.ts:50-55`, `:70`; `templates/carcassDividers.ts:138-140`). Moguća greška u programu; sajt neka prikaže ono što želi vlasnik.
- Fiksna polica iznad šipke ne ulazi u broj ekscentara (`templates/wardrobe.ts:59`).
- Tekst na kartici Cena kaže „Cene materijala i okova su početne — menjaju se u katalogu (za sada u kodu…)“ (`i18n/sr/list.ts:79`), a pravilo projekta kaže da cene upisuje majstor — za sajt ne navoditi cene.
- Granice broja vrata / fioka / polica postoje na dva mesta (tačka 2); najmanja širina po modelu nije definisana.
- U sobi sused i zid mogu da promene stranu šarki i napomene, ali ne mere dasaka (nije posebno proveravano za svaki slučaj).
- Primeri: `docs/modeli-primeri.json`; skripte kojima su izračunati su van programa, u privremenom folderu sesije (`…/scratchpad/modeli/`: `lib.ts`, `gen.ts`, `formule.mjs`, `verify.ts`) — nisu sačuvane u sajtu.

## 10. 3D prikaz — kako ga crta program i šta je preneto na sajt (Zadatak 5)

Program crta 3D **three.js-om 0.185.1** preko React Three Fiber-a (`package.json:22-29` u programu). To je web tehnologija, pa je na sajt **prenet isti način crtanja**, bez React-a: isti three.js (vendor/), iste vrednosti, ponovo napisano u običnim ES modulima (`src/skripte/tri-*.js`). Brojevi su na jednom mestu: `src/skripte/tri-podesavanja.js`.

| Šta | U programu | Na sajtu |
|---|---|---|
| Crtač | WebGLRenderer, antialias, PCF senke, NeutralToneMapping, ekspozicija 1, dpr 1–2, bez post-obrade (`Scene.tsx:226-233`, `RenderSetup.tsx:28-29`, `renderQuality.ts:10-15`) | isto (`tri-scena.js`) |
| Okolina | RoomEnvironment kroz PMREM (0,04), jačina 0,45 (`environment.ts:17-28`) | isto |
| Svetla | hemisfera, topao glavni `#fff2e0` sa senkom 2048, hladniji bočni `#dbe4ff`, slab prednji (`RoomLights.tsx:36-60`, `ShadowLight.tsx:111-126`) | iste boje i odnosi; jačine podignute za tamnu toplu scenu uzora + topao odsjaj iza elementa |
| Daska | `BoxGeometry` + `MeshStandardMaterial`, hrapavost iz kataloga, metal 0; ivice `EdgesGeometry` `#3c4354` 34 % (`PanelBox.tsx:147-156, 235-272`) | isto (`tri-element.js`, `tri-materijali.js`) |
| Dezen | slika 1024² (ambientCG, CC0) ili proceduralna „board" tekstura; UV u mm od ugla daske, pločica 900 mm drvo / 500 mm uni, god = V osa (`decorUv.ts:33-71`, `decorTexture.ts:108-134`) | iste slike za Hrast natur, Hrast sonoma, Orah; ista proceduralna tekstura (isti generator brojeva) za uni |
| Kant | prednja ivica u boji ploče, nekantovana ivica `#cbb48c` (`boardEdges.ts`, `materials.ts:213`) | isto |
| Frontovi | zazor 1,5 / 3 mm; vrata 110° oko ivice sa šarkama, 0,6 s smoothstep; fioka izlazi za NL (`frontPose.ts:41-74`, `openClock.ts:22`) | isto |
| Ručka | štangla 12 × 12, stubovi 10 × 10, 30 mm od lica, `#2a2a2a` metal 0,8; 50 mm od ivice; razmak 96–320 po pravilu; donji gore, viseći dole, visoki na 1050 mm (`handles.ts:51-57`, `handleLayout.ts:83-211`) | isto; dugme Ø30 |
| Nogica | LatheGeometry po profilu, `#35383e`, 60 mm od boka, 70 od leđa, 74 iza lica (`footProfile.ts`, `feet.ts:50-74`) | isto (4 nogice, kao u programu) |
| Šipka ormara | 26 × 26 mm, `#8f939b` metal 0,85, osa na max(V − 350, 0,6 V), fiksna polica 60 iznad (`wardrobe.ts:63-78`) | isto |
| Sanduk fioke | `#e3ddd2`, dno lesonit `#c9b896` (`frontBoxes.ts:140-161`) | isto |
| Kote | Line2 + HTML pločice (`DimLayer.tsx`, `dimLabels.tsx`) | valjci + sprite pločice u zlatnoj boji sajta (`tri-kote.js`) |

Nije preneto (zavisi od React-a / sobe programa ili nije potrebno za jedan element): pečena dodirna senka (zamenjena senkom glavnog svetla na podu), mreža poda, zidovi sobe sa malterom, izbor elementa i obrisi, rendgen, klizači fioka (profili šina), šarke (program ih ne crta u običnom prikazu).

Mere dasaka dolaze iz `src/skripte/proracun.js` (isti rezultat kao spisak za sečenje), položaji dasaka iz `src/skripte/korpus-model.js`. Okov u kartici „Okovi" računa `okovi()` u `proracun.js` (pravila iz tačke 6); test ga poredi sa okovom iz `docs/modeli-primeri.json`.
