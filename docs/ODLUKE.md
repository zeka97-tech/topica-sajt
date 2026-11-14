# Odluke donete samostalno tokom izrade (noćna sesija 4. 11. 2026)

Zadatak je rekao: odluke donosi sam i zapiši ih. Ovo je spisak, od najvažnijih.

1. **Generisane stranice idu u `dist/` (u .gitignore), ne u koren repozitorijuma.** GitHub Actions gradi sajt pri svakom push-u (`.github/workflows/pages.yml`) i objavljuje `dist/`. Vlasnik menja JSON i gura; ništa ne mora da pokreće lokalno. Build nema zavisnosti (čist Node), pa je CI brz i ne može da padne zbog paketa.
2. **Tekst je u HTML-u, a ne učitava se skriptom.** Svaki jezik je prava stranica (`/sr/`, `/en/`…), generisana iz `tekst/<kod>.json` + šablona. Razlog: SEO (hreflang, title/description po jeziku), rad bez JS-a i brzina. Jedini runtime JS za jezik je pamćenje izbora i predlog jezika pregledača.
3. **GSAP, ScrollTrigger i Lenis su u `vendor/`, font Manrope u `fontovi/`,** umesto CDN-a: CDN-ovi su bili blokirani u sesiji, a lokalne kopije su i brže (bez trećeg domena) i rade offline. Verzije: gsap 3.12.5, lenis 1.1.18, @fontsource/manrope 5.1.0. Licence su pored fajlova.
4. **Nema fotografija sa Unsplash/Pexels/Pixabay/Poly Haven.** Svi ti servisi su vraćali 403 kroz mrežnu politiku. Umesto lažnog rešenja, galerija ima 6 pravih snimaka programa; u `slike/IZVORI.md` je uputstvo kako vlasnik dodaje fotografije. Nijedna slika nije izmišljena ni skinuta bez licence.
5. **Korpus koji se rastavlja je nacrtan CSS 3D-om (bez WebGL-a),** sa merama iz prave krojne liste programa (snimak 33: bok 702×539, dno 600×539, polica 562×519, prečka 564×100, front 717×597, leđa 717×597). Front nosi teksturu isečenu iz snimka programa (19), ne tuđu sliku. Kamera je fiksna tokom razmicanja (kote su „bilbordi“), rotacija ide samo u ravan pri slaganju na ploču — bez „momenta ludila“.
6. **Krojni plan prikazuje deo table širine 2800 mm visine 1200 mm**, ne celu 2800×2070, jer jedan korpus zauzme trećinu table i cela tabla je izgledala prazno. Natpis sa merom table je uklonjen da ne tvrdi ništa netačno.
7. **Snimci programa su WebP u širinama 800 i izvornoj 1366 (fajl se zove -1600 radi doslednosti, ali se ne uvećava).** `srcset` navodi stvarnu širinu (1366w).
8. **Dva WebP-a maskote (isečena pozadina) umesto originala sa belom pozadinom;** pozadina isečena ImageMagick-om (flood fill + blago omekšana ivica).
9. **„Po meri“ se u prevodima prevodi** (en „By size“, de „Nach Maß“, hr „Po mjeri“) iako program danas ima samo srpski/engleski natpis; svaka ne-sr/en stranica nosi rečenicu da je program na srpskom i engleskom.
10. **Placeholder linkovi (`#`) u podnožju (uslovi, privatnost) prikazuju se kao običan tekst** dok ih vlasnik ne upiše u `tekst/sajt.json` — da nijedan link na sajtu ne vodi u prazno. Jedini `#` je link za .exe na stranici preuzimanja.
11. **E-mail obrasci rade i bez servisa:** ako `formspreeId` u `tekst/sajt.json` nije upisan, dugme otvara mailto na e-mail vlasnika sa upisanom adresom u telu. Sa Formspree ID-jem šalju se u pozadini (fetch) bez napuštanja stranice.
12. **Obrazac na stranici preuzimanja traži e-mail opciono** (nije obavezno, piše jasno) i vodi na `hvala.html`; `hvala.html` je `noindex` (robots.txt) i nije u sitemap-u.
13. **Koren sajta (`/`) je mala stranica koja preusmerava** na zapamćen jezik → jezik pregledača → `en` (x-default). Nije indeksirana (`noindex`); indeksiraju se jezičke stranice.
14. **23 jezika: sr, en, hr, de pun kvalitet; ostalih 19 „za proveru“** (`_jezik.status` u svakom JSON-u, zvezdica u prekidaču jezika). Prevodi su rađeni po pravilima u `docs/PREVODJENJE.md` sa stručnim rečnikom; stručnjak za svaki jezik upisuje svoje ime u `_jezik.proverio` kad proveri.
15. **Ćirilični i grčki jezici (ru, uk, bg, el) koriste sistemski font**, jer Manrope nema ta pisma; ostaje isti raspored, boje i veličine.
16. **Navigacija sadrži stavku „Saveti“ (blog)** pored pet zadatih, jer je to prvi tekst koji Google ima zašto da pokaže.
17. **Cena nije napisana nigde**; u JSON-LD `offers` nosi `price: 0` sa opisom „probna verzija je besplatna“ (to je istina), bez ocena i recenzija.
18. **Lighthouse ciljevi (perf ≥ 90, a11y ≥ 90, SEO ≥ 95) mere se u `npm run check`** na uzorku stranica; prag važi i za telefon (Lighthouse podrazumevano meri mobilni).
19. **Jedan 3D prikaz je prikazan u prozoru sa tri tačke** (Apple stil), ali snimci zadržavaju i traku samog programa — iskreno pokazuje kako program izgleda.
20. **Prečice u šablonima:** ključevi se pišu `{{deo.kljuc}}`, podaci sajta `{{sajt.x}}`, a vrednosti koje računa build `{{sistem.x}}`. Prazna vrednost je dozvoljena samo za `sajt.*` i `sistem.*`; prazan prevod obara build.

## Zadatak 2 i 3 (sadržaj i marketing)

21. **Tekstovi su Markdown sa zaglavljem** (`blog/<kod>/`, `recnik/<kod>/`, `namena/<kod>/`, `pitanja/<kod>/index.md`), ne JSON: duži tekst se lakše piše i prevodi, a build ih pretvara u stranice sa istim okvirom (traka, podnožje, JSON-LD, hreflang, dugme). Naslovi indeksa zbirki su u `tekst/<kod>.json` (`recnik`, `namena`, `pitanja_strane`).
22. **Pitanja su jedna stranica** (`pitanja/<kod>/index.html`) sa 20 pitanja kao H2 + odgovor; iz toga build pravi FAQ JSON-LD. Dvadeset zasebnih stranica bi bilo tanko za Google i naporno za čitanje.
23. **Rečnik ima 28 pojmova** (zadatih 27 + „prepust radne ploče“ koji je bio u spisku kao poslednji); slugovi su isti u svim jezicima da hreflang radi.
24. **Brojevi struke su na jednom mestu** (`docs/CINJENICE-STRUKA.md`): podrazumevane vrednosti programa + evropska praksa; tekstovi smeju da navode samo te brojeve ili da kažu „po katalogu proizvođača“. Tako prevodi ne mogu da „poprave“ broj.
25. **Vodič 1 je postojeći „Šta je krojna lista“** (već pokriva „prva mera = pravac goda“); nije dupliran.
26. **Provera za članke:** svaka stranica članka mora da ima bar jedan unutrašnji link u tekstu i bar jednu sliku; `--seo` režim meri Lighthouse SEO i pristupačnost na 10 stranica po jeziku (SEO-only audit je brz; pun Lighthouse na 1000+ stranica bi trajao satima).
27. **Marketing tekstovi su u prvom licu vlasnika i bez brojeva** koje ne znamo; sve što nije provereno u `gde-su-majstori.md` nosi oznaku „proveriti“. Wikipedia se ne prijavljuje.
28. **Sličice za YouTube** prave se iz istog šablona kao OG slika (Topi + naslov), 1280 × 720, `marketing/youtube/`.
29. **Tag `v0.1` je napravljen lokalno**, ali proxy sesije ne dozvoljava `git push --tags` ni API za tagove; vlasnik ga gura komandom iz README (jedna linija).
30. **`dist/` je uklonjen iz git-a** (bio je greškom ubačen u ranom commitu pre pravila u .gitignore); gradi ga samo GitHub Actions i lokalni `npm run build`.
31. **Provera ima `--port=N`** da bi dva merenja mogla da idu istovremeno (npr. `--seo` i puna provera) bez sudara na istom portu.
32. **Prevodi koji su pali na limitu (el, sv, fi, uk) nisu rađeni ponovo:** nastavljeni su od sačuvanog stanja, samo fajlovi koji su falili; provera ključeva (`tabela.mjs` u izveštaju) potvrđuje 206/206 ključeva u svim 23 JSON-a.

## Zadatak 4 (novi dizajn početne: modeli, konfiguracija, spisak za sečenje)

Vlasnik nije bio tu. Pravilo: nejasno se rešava najopreznije (tvrdnja se izostavi, ništa se ne izmišlja).

33. **Konfigurator ima 7 modela, onih čije su formule potvrđene pokretanjem koda programa (0.1.66):** Element sa vratima, Element sa fiokama, Viseći element sa vratima, Otvoreni viseći element, Visoki ostavinski element, Ormar, Komoda sa fiokama. Klizni plakar, ugaoni L, sudopera, rerna, aspirator i ostali postoje u programu, ali im formule nisu izvođene, pa ih u konfiguratoru nema (`docs/MODELI.md`, tačka 9).
34. **Granice mera u konfiguratoru su uže od granica programa.** Program dozvoljava širinu 50 – 6000, visinu 10 – 4000, dubinu 10 – 2000 za svaki model; po modelu granice nisu definisane. Sajt nudi samo raspon u kome su formule proverene i element ima smisla (npr. donji 300 – 1200 × 600 – 900 × 400 – 650). Brojevi su u `src/skripte/proracun.js` (`MODELI`). Korak je 10 mm kao klizač u programu; u polje se upisuje bilo koji ceo broj.
35. **Ormar je ograničen na širinu 1000 mm** jer program preko toga dodaje uspravnu pregradu, a ta formula nije proverena na sajtu. Unutrašnjost ormara je „police + šipka“ (podrazumevana u programu).
36. **Broj fioka se sam smanji kad sanduk ne bi stao** (najmanja visina sanduka 50 mm), kao što bi program javio upozorenje. Sajt ne prikazuje element koji program ne bi napravio bez upozorenja.
37. **Podešavanja su podrazumevana i ne menjaju se na sajtu:** ploča 18 mm, leđa 3 mm prikucana spolja, kant 0,45 mm korpus i 1 mm front, GTV kuglični klizači sa drvenim sandukom fioke. To piše ispod polja („Na sajtu važe podrazumevana podešavanja…“).
38. **Izbor fronta = izbor dezena (bela, siva, drvo, crna).** Program nema vrste frontova u smislu reljefa ili rama (`docs/MODELI.md`, tačka 3), ima dezen po frontu. Zato četiri sličice menjaju samo boju crteža, ne mere. Podrazumevano je „drvo“ jer je korpus u programu beo, a front u dezenu.
39. **Krojni plan je ILUSTRACIJA, ne optimizacija krojenja.** Program nema optimizaciju kroja (samo procenu broja tabli sa iskorišćenjem 80 %). Sajt slaže delove red po red na tablu 2800 × 2070 (lesonit 2750 × 1830) i ispod piše: „Ovo je ilustracija rasporeda, ne optimizacija krojenja.“ Broj tabli i iskorišćenje se ne prikazuju.
40. **Zbir kanta je bez otpada, m² je čista površina,** kao u redu korpusa u kartici „Krojne mere“. Otpad 10 % program dodaje tek u kartici Materijali; sajt to ne prikazuje.
41. **Mera u tabeli se piše kao u kartici „Po meri“** (prva mera = pravac goda, npr. front 717 × 597), jer je tako i na snimku programa koji je već na sajtu.
42. **Okov i cena nisu u tabeli na sajtu.** Program ih računa, ali pravila okova zavise od podešavanja radionice, a cene upisuje majstor (neupisana je nula). Sajt kaže da ih program daje (lista sa štiklama), bez brojeva.
43. **Animacija „korpus → krojni plan“ crta element iz konfiguratora.** Stara scena sa upisanim merama jednog korpusa je zamenjena scenom koja se gradi iz istog rezultata kao tabela. Prvi natpis pod scenom je rečenica sa stvarnim merama.
44. **Sadržaj postoji i bez JavaScript-a:** build crta podrazumevani element (crtež, tabelu, zbirove, krojni plan) u HTML, isti modul (`proracun.js`) koji radi u pregledaču.
45. **Odeljak „tri činjenice“ je uklonjen sa početne.** Njegovo mesto su preuzele četiri prednosti u vrhu i traka mogućnosti; isti sadržaj dvaput bi bio ponavljanje.
46. **Meni: Mogućnosti, Modeli, Saveti, Pitanja + jezik + dugme.** „Kako radi“, „Galerija“ i „Cena“ su izašli iz menija (odeljci su ostali na stranici). „Cena“ nije u meniju jer cena nije objavljena. Dugme „Preuzmi“ je u meniju vidljivo stalno (ranije se na početnoj pojavljivalo tek kad dugme iz vrha izađe sa ekrana), kao u uzoru.
47. **Gornja traka je tamna samo na početnoj;** na ostalim stranicama (rečnik, vodiči, namena, pitanja, preuzimanje) ostala je svetla.
48. **Tvrdnje iz uzora koje nisu potvrđene su izostavljene** (spisak i razlog u `docs/IZVESTAJ-DIZAJN.md`): 14 dana, bez kartice, EU standardi, podrška na evropskim jezicima, Prijava, Cene, video, znak ®, garderoberi, reljefni frontovi. Klizna vrata postoje u programu, ali nisu u konfiguratoru (tačka 33); pominju se samo tamo gde su već bila u tekstovima po nameni.
49. **„Windows · srpski i engleski“ je ostavljeno jer je to vlasnik napisao u zadatku,** iako je u verziji 0.1.66 izbor jezika isključen za kupca (`src/features.ts:97-103` u programu). Pitanje je u izveštaju; ako engleski ne ide u prodaju, menja se jedan ključ (`hero.sitno`) i rečenica o jeziku programa.
50. **Kartice „Šta možeš da projektuješ“: kuhinje, plakari, komode.** Kuhinja ima pravi snimak programa. Za plakar i komodu nema snimka u `slike/izvor/`, pa su crteži iz istog crtača kao konfigurator. „Male radionice“ i „monteri“ su linkovi ispod kartica (to su ciljne grupe, ne nameštaj).
51. **Natpis „This page is also available in English“** se ne nudi na srpskoj i hrvatskoj stranici (`bezPredloga` u `tekst/jezici.json`).
52. **Pravilo „fajl ≤ 300 redova“ ne važi za `docs/`.** `docs/modeli-primeri.json` (primeri iz programa za test formula) ima 15 hiljada redova i nije kod.
53. **Kartice konfiguratora idu jedna ispod druge ispod 1180 px,** ne ispod 960 px: u ruskom, mađarskom i finskom polja ne staju u tri uske kartice.
54. **Na telefonu tabela ne prikazuje kolonu debljine** (vidi se iz naziva dela: „Leđa (lesonit)“, „Dno fioke (lesonit)“), da bi cela tabela stala u ekran bez prevlačenja.
55. **Dugačke reči u naslovima se lome** (`hyphens: auto`). Nemački, finski i holandski naslov odeljka mogućnosti je na telefonu širio stranicu; greška je postojala i pre ovog zadatka.
