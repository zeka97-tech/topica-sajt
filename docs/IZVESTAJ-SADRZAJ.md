# Izveštaj — Zadatak 2 (sadržaj) i nastavak posle limita

Stanje: 4. 11. 2026, grana `main`, repozitorijum `zeka97-tech/topica-sajt`.

## Jezici × sadržaj (iz `npm run build` i provere ključeva)

Svaki jezik: 206/206 ključeva u `tekst/<kod>.json`, 0 nedostajućih; rečnik 28/28, vodiči 8/8, namena 5/5, pitanja 1/1 (20 pitanja); 48 stranica u `dist/<kod>/`; build OK. Status: sr, en, hr, de = pun; ostalih 19 = za proveru (stručnjak upisuje ime u `_jezik.proverio`).

| Jezik | Kod | Status | Ključeva | Rečnik | Vodiči | Namena | Pitanja | Stranica | Build |
|---|---|---|---|---|---|---|---|---|---|
| Srpski | sr | pun | 206/206 | 28 | 8 | 5 | 1 | 48 | OK |
| English | en | pun | 206/206 | 28 | 8 | 5 | 1 | 48 | OK |
| Hrvatski | hr | pun | 206/206 | 28 | 8 | 5 | 1 | 48 | OK |
| Deutsch | de | pun | 206/206 | 28 | 8 | 5 | 1 | 48 | OK |
| sl, hu, pl, ru, cs, sk, it, es, fr, ro, bg, nl, pt, el, sv, da, no, fi, uk | — | za proveru | 206/206 svaki | 28 | 8 | 5 | 1 | 48 | OK |

Ukupno: 1104 stranice (23 × 48), 1081 u `sitemap.xml` (bez `hvala.html`), hreflang na svakoj stranici za sve jezike + x-default = en.

## `npm run check` (svih 23 jezika, 1104 stranice)
- red u kodu (≤ 300 redova, boje/px samo u tokeni.css, šabloni bez golih reči): ✓
- prevodi (isti ključevi, bez praznih, rečenica o jeziku programa): ✓
- pregledač (1 H1, title, description, canonical, hreflang, JSON-LD, alt na slikama, nijedna slomljena slika/link, članak sa slikom i unutrašnjim linkom, bez JS grešaka): ✓ 1104/1104
- smanjeno kretanje: ✓ · snimci sr i de na 1440 i 390 px: `docs/snimci/` (81 fajl)
- Lighthouse (mobilni, uzorak): sr/ 92·100·100·100, en/ 93·100·100·100, de/ 93·100·100·100, sr/preuzimanje 99·100·100·100, en/blog/krojna-lista 99·100·100·100, sr/blog/ 100·100·100·100 (perf·a11y·seo·bp)
- Lighthouse SEO/pristupačnost na 10 stranica po jeziku (`--seo`): sr, en, de, pl, hr, uk — sve 100/100.

## Šta je ostalo nejasno (vlasnik potvrđuje)
- Izrazi koje su prevodioci označili kao nesigurne: po jeziku u izveštajima (npr. hr „lončić/čašica“, de „Oberboden/Mittelseite/Fuge“, pl „wieniec górny“, cs/sk „vrch/strop“, ru „крыша“, fi „tukirima“, el „περιθώριο“); nazivi dugmadi programa na jezicima koje program nema (prevodioci su ih preveli opisno).
- Struka (iz sr tekstova, označeno u njima kao „uobičajeno“/„po katalogu“): da li TOPICA sama uvlači coklu iz projekta; prepust radne ploče iz podešavanja; sudopera „bez zadnje prečke“ (snimak 14 pokazuje 2 prečke); gola profil (izrez boka, uklanjanje prečke) — da li današnja verzija to radi; „dno 3 mm uže i kraće“ kod drvene kutije fioke; minifix 24 mm za 16 mm ploču.
- `pitanja`: pretraga nije dala srpske forume za „people also ask“; pitanja su iz iskustva grupa.
- Tag `v0.1` i uključivanje Pages: samo vlasnik (vidi README).
