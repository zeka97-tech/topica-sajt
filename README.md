# TOPICA — sajt

Statičan sajt za prodaju programa **TOPICA** (Windows program za stolare: soba u 3D, korpusi iz kataloga, krojna lista u milimetar, okovi, cena). Bez React-a, bez build alata sa zavisnostima: čist HTML, CSS i JS koje jedna Node skripta slaže iz šablona i tekstova po jeziku.

- Objavljen sajt: `https://zeka97-tech.github.io/topica-sajt/` (čim se uključi Pages, vidi dole).
- Repozitorijum: `zeka97-tech/topica-sajt`, grana `main`, verzija `v0.1`.

## Kako je složeno

```
src/sablon/        HTML šabloni: stranica.html (okvir), traka, podnozje, po jedan fajl po odeljku, preuzimanje, hvala, clanak, spisak
src/stil/          CSS: tokeni.css (JEDINO mesto za boje, razmake, veličine), osnova.css, po odeljku po jedan fajl, animacije.css
src/skripte/       JS moduli: app.js (ulaz), kretanje (Lenis+GSAP), traka, jezik, hero, kako-radi, korpus(+model), niz, galerija, obrazac
tekst/<kod>.json   SAV tekst sajta, jedan fajl po jeziku, isti ključevi;  tekst/jezici.json (spisak jezika), tekst/sajt.json (e-mail, linkovi…)
blog/<kod>/*.md    tekstovi po jeziku (Markdown sa zaglavljem); recnik/, namena/, pitanja/ po istom principu
slike/izvor/       originali;  slike/web/ WebP (pravi skripte/slike.mjs);  slike/og/ slike za deljenje;  slike/IZVORI.md poreklo i licence
skripte/           jezici.mjs (BUILD), slike.mjs, og.mjs, provera.mjs (CHECK), posluzi.mjs (lokalni server), lib/
dist/              GENERISAN sajt (nije u git-u; GitHub Actions ga pravi i objavljuje)
docs/              snimci/ (provera), ODLUKE.md, PREVODJENJE.md
```

Komande (`npm install` jednom, samo za slike/og/provere; sam build nema zavisnosti):

| Šta | Komanda |
|---|---|
| izgradi sajt u `dist/` | `npm run build` |
| pogledaj lokalno | `npm run posluzi` → http://localhost:8787/sr/ |
| slike iz `slike/izvor/` u WebP | `npm run slike` |
| OG slike i favicon | `npm run og` |
| puna provera (red u kodu, prevodi, svaka stranica, snimci, Lighthouse) | `npm run check` |
| brza provera bez Lighthouse-a | `node skripte/provera.mjs --brzo` |

## Kako se menja tekst

Sav tekst je u `tekst/<kod>.json` (npr. `tekst/sr.json`). Nađi rečenicu, promeni je, sačuvaj, `git push`. GitHub Actions izgradi i objavi sajt za oko minut. Lokalno: `npm run build` pa `npm run posluzi`.

Pravila: ključeve ne menjaj (šabloni ih traže po imenu); ista promena ide u sve jezike koje održavaš (bar `sr`, `en`, `hr`, `de`); build pada ako neki ključ fali ili je prazan, i kaže koji.

Podaci koji se menjaju na jednom mestu su u `tekst/sajt.json`:

| Ključ | Šta je | Sada |
|---|---|---|
| `url` | adresa sajta (canonical, sitemap, og) | GitHub Pages adresa; promeni kad bude domen |
| `kontaktEmail` | e-mail u podnožju i za mailto obrasce | **placeholder** `kontakt@primer.rs` |
| `vlasnikIme` | ime u odeljku „Za koga“ | **placeholder** |
| `preuzimanjeExe` | link na instalaciju (.exe) | **placeholder** `#` |
| `verzijaExe`, `velicinaExe` | ispisuju se pored dugmeta | 0.1 (probna), ~15 MB |
| `formspreeId` | ID Formspree obrasca (prazno = mailto) | prazno |
| `usloviLink`, `privatnostLink` | linkovi u podnožju (dok su `#`, prikazuju se kao tekst) | `#` |
| `youtubeLink` | snimak „Od sobe do krojne liste“ na stranici hvala | `#` |
| `godina` | godina u podnožju | 2026 |

Fotografija vlasnika: stavi `slike/izvor/vlasnik.jpg`, pokreni `npm run slike`, pa u `src/sablon/zakoga.html` zameni SVG siluetu sa `<img src="{{sistem.koren}}slike/web/vlasnik-800.webp" alt="{{sajt.vlasnikIme}}">`.

## Kako se dodaje jezik

1. Dodaj red u `tekst/jezici.json` (kod, ime jezika NA TOM JEZIKU, ogLocale, status `za-proveru`, `programNaJeziku: false`).
2. Kopiraj `tekst/en.json` u `tekst/<kod>.json` i prevedi vrednosti (pravila i rečnik: `docs/PREVODJENJE.md`).
3. Napravi `blog/<kod>/krojna-lista.md` (prevod članka).
4. `npm run og` (slika za deljenje na tom jeziku), `npm run build`, `npm run check`.
Jezik se sam pojavi u prekidaču, hreflang-u i sitemap-u. Kad stručnjak proveri prevod, upiši ime u `_jezik.proverio` i status `pun`.

### Jezici i status

| Jezik | Kod | Status | Ko proverava |
|---|---|---|---|
| Srpski | sr | pun (original) | — |
| English | en | pun | |
| Hrvatski | hr | pun | |
| Deutsch | de | pun | |
| Slovenščina | sl | za proveru | |
| Magyar | hu | za proveru | |
| Polski | pl | za proveru | |
| Русский | ru | za proveru | |
| Čeština | cs | za proveru | |
| Slovenčina | sk | za proveru | |
| Italiano | it | za proveru | |
| Español | es | za proveru | |
| Français | fr | za proveru | |
| Română | ro | za proveru | |
| Български | bg | za proveru | |
| Nederlands | nl | za proveru | |
| Português | pt | za proveru | |
| Ελληνικά | el | za proveru | |
| Svenska | sv | za proveru | |
| Dansk | da | za proveru | |
| Norsk | no | za proveru | |
| Suomi | fi | za proveru | |
| Українська | uk | za proveru | |

Program je danas na srpskom i engleskom; sve druge jezičke verzije sajta to kažu u traci ispod zaglavlja.

## Kako se dodaje slika

1. Original u `slike/izvor/` (PNG/JPG; snimci programa 1366 px, fotografije što veće). Samo sopstvene slike ili slobodna licenca (Unsplash, Pexels, Pixabay, Poly Haven, ambientCG) — upiši red u `slike/IZVORI.md`.
2. `npm run slike` → `slike/web/<ime>-800.webp` i `<ime>-1600.webp` (bez uvećavanja). Isečci se definišu u listi `ISECCI` u `skripte/slike.mjs`.
3. U šablon: `<img src="{{sistem.koren}}slike/web/<ime>-800.webp" srcset="… 800w, … 1600w" sizes="…" width="…" height="…" loading="lazy" alt="{{kljuc.alt}}">` i `alt` tekst u sve JSON-ove.

## Kako se dodaje odeljak

1. `src/sablon/<ime>.html` — HTML samo sa `{{ključevima}}` (nijedna gola reč; `npm run check` to proverava).
2. `src/stil/<ime>.css` — samo `var(--…)` iz `tokeni.css`; nov broj ili boja ide prvo u tokene.
3. Ključevi u `tekst/*.json` (svi jezici).
4. Ime odeljka u listu `ODELJCI` u `skripte/jezici.mjs` na mestu gde treba.
5. Ako ima pokret: `src/skripte/<ime>.js` sa jednom `pokreni…()` funkcijom, pozvanom iz `app.js`; pokret vezan za skrol, isključen pri `prefers-reduced-motion`.

## Kako se dodaje tekst (blog, rečnik, namena, pitanja)

Napravi `blog/<kod>/<slug>.md` (isti `<slug>` u svim jezicima da hreflang radi):

```
---
naslov: Naslov teksta
opis: Jedna rečenica za Google (do 160 znakova)
datum: 2026-12-01
slika: ../slike/web/snimak-….webp
---
Tekst u Markdown-u: ## naslovi, * liste, | tabele |, ![alt](../slike/web/….webp "potpis"), [veza](../preuzimanje.html).
```

Isto važi za `recnik/`, `namena/` i `pitanja/` (indeks i naslovi su u `tekst/<kod>.json` pod `recnik`, `namena`, `pitanja_strane`). Svaki tekst dobija jedan H1, meta, JSON-LD, hreflang i dugme „Preuzmi probnu verziju“ na kraju.

## Uključivanje GitHub Pages

1. GitHub → repozitorijum → **Settings → Pages → Build and deployment → Source: „GitHub Actions“**.
2. Pri sledećem push-u na `main` pokreće se `.github/workflows/pages.yml` (build bez zavisnosti) i sajt je na `https://zeka97-tech.github.io/topica-sajt/`.
3. Sopstveni domen: Settings → Pages → Custom domain; zatim promeni `url` u `tekst/sajt.json` (canonical, sitemap i og slike koriste tu adresu) i `git push`.

## Link za preuzimanje i dugme za kupovinu

- **Preuzimanje:** upiši adresu `.exe` fajla u `tekst/sajt.json` → `preuzimanjeExe` (npr. GitHub Release: `https://github.com/zeka97-tech/TOPICA/releases/latest/download/TOPICA-proba.exe`). Svako dugme „Preuzmi probnu verziju“ vodi na stranicu preuzimanja, a ona na taj fajl (sa opcionim e-mailom, pa na `hvala.html`).
- **Lista e-mailova:** napravi obrazac na formspree.io (besplatno do 50 poruka mesečno), kopiraj ID (npr. `xabcdefg`) u `formspreeId`. Dok je prazno, dugmad otvaraju mailto na `kontaktEmail`. Poruke stižu na tvoj e-mail; za pravu listu (Buttondown, MailerLite) vidi `marketing/`.
- **Dugme „Kupi“:** u `src/sablon/cena.html` je zakomentarisan blok. Kad cena bude objavljena: (a) Lemon Squeezy ili Paddle nalog, proizvod TOPICA, kopiraj checkout link; (b) odkomentariši `<a class="dugme dugme-belo" …>` i upiši link; (c) promeni `cena.uskoro`/`cena.uskoro_tekst`/`cena.tekst` u svim JSON-ovima (npr. „99 €“ / „jednokratno“). Pravilo: „Kupi“ je belo dugme, narandžasto ostaje samo „Preuzmi probnu verziju“.

## Kako se menja cena

Cena se ne nalazi u kodu. Kad je objaviš: `cena.uskoro` (npr. `99 €`), `cena.uskoro_tekst` (npr. `jednokratno, za jedan računar`), `cena.tekst`, i FAQ odgovor ako treba — u svakom `tekst/<kod>.json`. U `skripte/lib/stranice.mjs` (`ldSoftver`) promeni `offers.price` i `priceCurrency` da i Google vidi tačnu cenu.

## Kako se sajt penje (SEO)

Sajt već ima: jedan H1 po stranici, title i description po jeziku, canonical, hreflang za sve jezike (x-default = en), `sitemap.xml` sa svim jezicima, `robots.txt`, JSON-LD (SoftwareApplication, Article, FAQPage), og/twitter slike po jeziku, alt tekst na svakoj slici, tekst u HTML-u (ne u skripti), brzina (Lighthouse ≥ 90).

1. **Google Search Console** (search.google.com/search-console): „Dodaj svojstvo“ → URL prefix `https://zeka97-tech.github.io/topica-sajt/` (ili domen) → potvrda: HTML tag — stavi ga u `src/sablon/stranica.html` u `<head>`, push, „Verify“. Zatim **Sitemaps → dodaj `sitemap.xml`**. Za 2–7 dana vidiš upite i klikove.
2. **Bing Webmaster Tools** (bing.com/webmasters): „Uvezi iz Google Search Console“ (jedan klik) ili dodaj sajt ručno i pošalji isti sitemap. Bing pokriva i DuckDuckGo i Yahoo.
3. **Novi tekstovi:** jedan mesečno u `blog/<kod>/` (teme u `marketing/plan-30-dana.md`), uvek sa interno povezanim rečnikom i dugmetom za preuzimanje. Google nagrađuje redovnost, ne količinu.
4. **Deljenje:** link sajta u stolarskim grupama (Facebook, forumi) nosi og-sliku (Topi + naslov na jeziku grupe): deli `https://…/hr/` u hrvatskoj grupi, `/de/` u nemačkoj. Tekstovi objava su u `marketing/objave/`.
5. **Bez trikova:** nema skrivenog teksta, kupljenih linkova, nagomilanih ključnih reči, lažnih recenzija. Jedini pravi signal su tekstovi koje majstori čitaju do kraja i linkovi koje sami podele.

## Provera

`npm run check` = build + `skripte/provera.mjs`: nijedan fajl preko 300 redova, nijedna boja/px van `tokeni.css`, nijedna gola reč u šablonu, isti ključevi u svim JSON-ovima (i rečenica o jeziku programa), svaka stranica u pregledaču (1 H1, title, description, canonical, hreflang, JSON-LD, alt na slikama, nijedna slomljena slika ni link, bez JS grešaka), `prefers-reduced-motion` (nema pokreta), snimci `sr` i `de` na 1440 i 390 px u `docs/snimci/`, Lighthouse na uzorku (performanse ≥ 90, pristupačnost ≥ 90, SEO ≥ 95).

Lokalno treba Chromium (Playwright): `npx playwright install chromium` jednom.

## Odluke i izvori

- `docs/ODLUKE.md` — šta je odlučeno samostalno i zašto.
- `slike/IZVORI.md` — poreklo i licenca svake slike.
- `docs/PREVODJENJE.md` — pravila i rečnik za prevodioce.

## Tag v0.1 (vlasnik gura)

Tag postoji u repozitorijumu lokalno u sesiji, ali okruženje nije smelo da ga pošalje. Na svom računaru:

```bash
git fetch origin && git tag -a v0.1 -m "Sajt TOPICA v0.1" origin/main && git push origin v0.1
```
