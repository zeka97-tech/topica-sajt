# Izveštaj — novi dizajn početne (Zadatak 4)

Datum: 14. 11. 2026. Program nije menjan; iz njega je samo čitano (verzija 0.1.66).

## Šta je urađeno

| Deo zadatka | Stanje | Gde |
|---|---|---|
| 0. Čitanje programa | urađeno | `docs/MODELI.md`, `docs/modeli-primeri.json` |
| 1. Vrh, tamna tema | urađeno | `src/sablon/hero.html`, `src/stil/hero.css` |
| 2. Traka mogućnosti | urađeno, 7 ikonica | `src/sablon/traka-mogucnosti.html` |
| 3. Konfigurator, tri kartice | urađeno, 7 modela | `src/sablon/konfigurator.html`, `src/skripte/konfigurator.js` |
| 4. Spisak za sečenje | urađeno | `src/sablon/spisak-secenje.html`, `src/skripte/proracun.js` |
| 5. Šta možeš da projektuješ | urađeno, 3 kartice | `src/sablon/namene.html` |
| 6. Meni, tamna tema, natpis o engleskom | urađeno | `src/sablon/traka.html`, `tekst/jezici.json` |
| 7. Jezici | sr, hr, en, de pun kvalitet; 19 „za proveru“ | `tekst/<kod>.json` |
| 8. Provera i snimci | urađeno | `docs/snimci/`, brojke ispod |

Galerija nije dirana: u `slike/izvor/` nema novih snimaka.

## Modeli u konfiguratoru i odakle su formule

Svi nazivi su tačno kao u biblioteci programa. Putanje su u repozitorijumu programa, pod `src/domain/`.

| Model na sajtu | Šablon u programu (fajl i red) | Šta korisnik zadaje na sajtu |
|---|---|---|
| Element sa vratima | `templates/base-with-doors.ts:28-42` | širina, visina, dubina, police 0 – 4, vrata 1 – 2 |
| Element sa fiokama | `templates/base-with-drawers.ts:29-39` | širina, visina, dubina, fioke 2 – 5 |
| Viseći element sa vratima | `templates/wall-with-doors.ts:30-50` | širina, visina, dubina, police 0 – 4, vrata 1 – 2 |
| Otvoreni viseći element | `templates/open-shelf.ts:24-34` | širina, visina, dubina, police 0 – 5 |
| Visoki ostavinski element | `templates/tall-unit.ts:27-40` | širina, visina, dubina, police 0 – 8, vrata 1 – 2 |
| Ormar | `templates/wardrobe.ts:33-45`, `templates/wardrobe-common.ts:138-255` | širina, visina, dubina, police 0 – 6, vrata 1 – 2 |
| Komoda sa fiokama | `templates/dresser.ts:29-38` | širina, visina, dubina, fioke 2 – 5 |

Zajedničke formule i njihov izvor:

| Formula | Izvor u programu |
|---|---|
| ploča 18, leđa 3, umanjenje leđa 3, zazor police 2, uvučenost police 20, zazor fronta 1,5, razmak frontova 3, prečka 100 | `catalog/settings.ts:9-17`, `:79` |
| dubina dasaka = dubina − 21 (otvoreni viseći: dubina − 3), leđa prikucana spolja | `elementSets.ts:53-90`, `:396-398`, `:433-438` |
| dno donjih, visokih, ormara i komoda preko bokova; visećih između | `elementSets.ts:248-271`, `cutlist/derive.ts:77-112` |
| dve prečke umesto krova pod radnom pločom | `elementSets.ts:281-287`, `templates/helpers.ts:209-218` |
| leđa, polica, front vrata | `templates/helpers.ts:99-115`, `:128-130`, `:171-190`, `:368-397`, `fronts/frontLayout.ts:86-94` |
| front fioke i sanduk fioke (klizač, bok, prednja i zadnja strana, dno) | `drawers/panels.ts:224-241`, `catalog/drawerSystems.ts:171-190` |
| oznaka i dužina kanta (duža / kraća ivica, 0,45 i 1 mm) | `cutlist/kant.ts:10-24`, `:43-60`, `catalog/settings.ts:58-59` |
| m² (čista površina) i zbir kanta bez otpada | `cutlist/pricing.ts:34`, `src/ui/CuttingListPanel.tsx:387-391` |
| mere tabli 2800 × 2070 i 2750 × 1830 | `catalog/materials.ts:28-29`, `:144` |

Kako je potvrđeno da sajt računa isto što i program:

- 47 primera je izračunao sam kod programa. `npm run check` poredi sa njima svaku dasku, m² i kant.
- 44 primera su u granicama konfiguratora i svi se slažu. Tri su van granica (ormar sa pregradom i drugom unutrašnjošću) i preskaču se.
- Dodatno je jednom upoređeno 188.766 kombinacija mera sa formulama izvedenim iz programa, bez razlike.

Modeli koji postoje u programu, a NISU u konfiguratoru, jer im formule nisu izvođene: klizni plakar, ugaoni L, sudopera, kućište rerne, visoki za uređaje, vrata + fioke, izvlačni, aspirator, klapna, gola profil, metalni sanduci fioka.

## Tvrdnje iz uzora: šta je ušlo, šta nije

| Tvrdnja u uzoru | Na sajtu | Zašto |
|---|---|---|
| „14 dana besplatno“ | izostavljeno | u programu nema probnog perioda ni reči „14 dana“; nema ga ni u `tekst/sajt.json` |
| „bez kartice“ | izostavljeno | u programu nema licenciranja ni plaćanja |
| „EU standardi“ | izostavljeno | program navodi sistem 32, šolju Ø35 i korpus bez okvira, ali ne i oznaku nekog zvaničnog standarda |
| „podrška na evropskim jezicima“ | izostavljeno | program je na srpskom; sajt je preveden, podrška nije potvrđena |
| „Prijava“ | izostavljeno | program nema nalog ni prijavu |
| „Cene“ u meniju | izostavljeno | cena nije objavljena |
| „video 2 min“ | izostavljeno | video ne postoji |
| znak ® | izostavljeno | registracija žiga nije potvrđena |
| klizna vrata | nije u konfiguratoru | postoje u programu (2 – 4 krila), ali formule kliznog plakara nisu izvođene |
| garderoberi | izostavljeno | u biblioteci nema modela tog imena (postoje Ormar, Uski ormar, klizni plakar) |
| reljefni frontovi | izostavljeno | program ima dezen fronta, ne reljef |
| zelena dugmad, zlatna i crna boja | nije uzeto | ostale su #0b1b3a, #2563eb, #f97316 i Manrope; jedna glavna akcija, narandžasta |
| AI slike enterijera i Topija | nije uzeto | samo pravi snimci programa, SVG crteži i dve postojeće slike Topija |

Četiri prednosti u vrhu su potvrđene u programu: 3D prikaz sa dezenima, krojna lista i kant, mere u milimetar, okov i cena po projektu. Sedam stavki trake: 3D prikaz, korpusi i elementi, konfiguracija, krojna lista, kant, okov, cena.

## Provera

`npm run build`: 1104 stranice, 23 jezika. `npm run check` prolazi bez greške:

- red u kodu i prevodi (isti ključevi u sva 23 jezika): ✓
- formule: 44 primera iz programa se slažu, 3 su van granica konfiguratora
- pregledač: 1104 stranice bez greške (naslov, opis, linkovi, slike, JS)
- konfigurator: 7 modela na širinama 1440 i 390 i sa smanjenim kretanjem; tabela je uvek ista kao proračun; strelice na tastaturi, upis van granica i najava za čitač ekrana rade
- smanjeno kretanje: nema zakačenih odeljaka, element je odmah rastavljen sa kotama

Pomeranje sadržaja dok se mere menjaju (CLS, cilj ispod 0,1):

| Širina | CLS po Lighthouse pravilu | Sa pomeranjima odmah posle klika |
|---|---|---|
| 1440 | 0,000 | 0,012 |
| 390 | 0,000 | 0,000 |

Lighthouse (mobilni, bolje od dva merenja):

| Stranica | Performanse | Pristupačnost | SEO | Dobra praksa | Performanse pre zadatka |
|---|---|---|---|---|---|
| sr/ | 92 | 100 | 100 | 100 | 92 |
| en/ | 94 | 100 | 100 | 100 | 93 |
| de/ | 95 | 100 | 100 | 100 | 93 |
| sr/preuzimanje | 96 | 100 | 100 | 100 | 99 |
| en/blog/krojna-lista | 97 | 100 | 100 | 100 | 99 |
| sr/blog/ | 97 | 100 | 100 | 100 | – |

Početna: LCP 3,0 s, CLS 0, blokiranje 0 ms. Kontrast teksta u tamnim sekcijama prolazi Lighthouse proveru (pristupačnost 100).

Stranice članaka su pale sa 99 na 96 – 97. Uzrok nije izmeren do kraja; najverovatnije je veći zajednički CSS (lokalni server ga šalje nesažetog, GitHub Pages ga sažima). Moduli konfiguratora se na tim stranicama ne učitavaju.

## Snimci

`docs/snimci/`, širine 1440 i 390:

- vrh i svaki odeljak početne: `sr-1440-…`, `sr-390-…`, `de-1440-…`, `de-390-…`
- svaki model u konfiguratoru: `sr-<širina>-model-<model>.png`
- spisak za sečenje za svaki model: `sr-<širina>-spisak-<model>.png`
- rastavljen element i krojni plan iz animacije (1440): `sr-1440-rastavljen-<model>.png`, `sr-1440-plan-<model>.png`

## Snimci programa koji nedostaju

U `slike/izvor/` nema nijednog novog snimka, pa galerija nije menjana, a dve kartice po nameni nose crtež. Treba (1366 × 768 ili veće, kao postojeći):

1. plakar (Ormar) u sobi, vrata zatvorena, i isti sa otvorenim vratima;
2. komoda sa fiokama u sobi;
3. klizni plakar sa krilima;
4. kartica „Okovi“ i kartica „Materijali“ iz prozora Izveštaji;
5. visoki element i viseći red iznad donjeg, izbliza.

Kad se snimci dodaju u `slike/izvor/` i pokrene `npm run slike`, kartice „Plakari“ i „Komode“ mogu da dobiju snimak umesto crteža (`src/sablon/namene.html`).

## Pitanja za vlasnika

1. **Jezik programa.** Na sajtu piše „Windows 10/11 · srpski i engleski“, kako stoji u zadatku. U verziji 0.1.66 izbor jezika je isključen za kupca. Da li engleski izlazi sa prodajom, ili da piše samo „srpski“?
2. **Probna verzija.** Dugme kaže „Preuzmi probnu verziju“, a program nema ograničenje probe. Koliko traje proba i šta je u njoj ograničeno? Tek tada sme da stoji „14 dana“ ili slično.
3. **Okov u konfiguratoru.** Program broji šarke, nogice, klizače i ekscentre po pravilima iz `docs/MODELI.md` (tačka 6). Da li da se i spisak okova prikaže na sajtu, ili ostaje samo u programu?

## Šta nije provereno

- Prevodi 19 jezika „za proveru“ nije čitao izvorni govornik. Nazivi delova i modela na tim jezicima su najbolja procena (spisak nesigurnih pojmova: nosač za vešalice, ostavinski element, prednja i zadnja strana fioke).
- U ruskom i ukrajinskom tekst piše „мм“, a jedinica u poljima konfiguratora je „mm“.
- Sajt nije gledan na pravom telefonu, samo u Chromium-u na širini 390.
