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
