# Izveštaj — početna po uzoru vlasnika i pravi 3D konfigurator (Zadatak 5)

Datum: 15. 11. 2026. Program TOPICA nije menjan; iz njega je samo čitano (0.1.66).

## Ukratko

- Početna ima raspored, boje, font i kartice iz uzora (`docs/predlog-dizajna/uzor-2/`), na računaru i na telefonu.
- Konfigurator je pravi: 7 modela iz programa, 3D crtan istim three.js-om i po istim pravilima kao program, 2D crtež sa kotama, kartice Materijali · Dimenzije · Okovi. Sve se računa iz `src/skripte/proracun.js`.
- Okov je dodat u proračun i u test: 44 primera iz programa se slažu (daske, kant, m² i okov).
- Animacija korpusa, galerija i ostale sekcije koje uzor nema su na novoj stranici „Mogućnosti".
- Sva 23 jezika imaju nove tekstove (sr, hr, en, de pun kvalitet; ostalih 19 „za proveru").

## Šta je preuzeto iz uzora

| Iz uzora | Na sajtu |
|---|---|
| Boje (#0a0b0e, #1d1c1d, #eeba60, #ffca68, #05e968), linije, senke, prelivi | prepisano u `tokeni.css`, blok „Zadatak 5" |
| Font Inter | Inter 5.3.0, hostovan lokalno (`fontovi/`), sa ćirilicom i grčkim |
| Meni (logo, pilule, jezik, zlatno dugme, meni iza dugmeta na telefonu) | isto, bez „Prijava", „Cene" i ® |
| Vrh: naslov „Od ideje do krojne liste — brzo, precizno i jednostavno.", 4 prednosti, zeleno i tamno dugme | isto; zeleno dugme je „Preuzmi probnu verziju" |
| Slika vrha (Topi + laptop) | pozadina i Topi iz uzora, ekran laptopa = PRAVI snimak programa u perspektivi |
| Traka sa 7 ikonica | 5 iz uzora + „Kant i okov" i „Cena po projektu" |
| „Šta sve možeš da projektuješ?" — 5 kartica sa slikom i strelicom | Kuhinje, Plakari, Ormari, Komode, Slobodna izrada; slike iz uzora |
| „Kreiraj svoj element direktno u pretraživaču" (tri kolone) | isto, sve kontrole rade |
| Pregled sa 2D / 3D i ↻ − + ⛶ | prekidač radi; dodato dugme „Otvori / zatvori frontove" |
| Kartice Materijali · Dimenzije · Okovi | isto, sa pravim sadržajem iz programa |
| „Kako funkcioniše?" — tri koraka | isto |
| Završni poziv „Projektovanje koje prati tvoj način rada." | isto |

## Šta NIJE preuzeto i zašto

| U uzoru | Zašto ne |
|---|---|
| „Probaj besplatno", „Probaj Topic-u besplatno" | nije potvrđeno u `tekst/sajt.json`; dugme ostaje „Preuzmi probnu verziju" |
| „Prijava", „Cene" u meniju, znak ® | nije potvrđeno (program nema nalog; cena nije objavljena; registracija žiga nije potvrđena) |
| „Ažuriranja i podrška", „Brz i jednostavan rad" (traka) | ažuriranja su u programu isključena za kupca; „brz" je nemerljivo obećanje |
| „EU standardi" (stari uzor) | program navodi sistem 32 i šolju Ø35, ne zvaničan standard |
| „Garderoberi" | u programu nema takvog modela → kartica „Ormari" (Ormar sa policama i šipkom) |
| „Custom" | u programu je to „Korpus po meri" / „Slobodna izrada" → kartica „Slobodna izrada" |
| „Korpus / Front / Police" kao izbor elementa | to nisu modeli programa; levo je 7 pravih modela |
| „Tip fronta": rebrasti, rezbareni MDF, ram | program nema vrste frontova, samo dezen → „Dezen fronta" |
| Zlatne ručke | program crta ručku `#2a2a2a`; vrste: štangla, dugme, bez ručke |
| Mere u cm | program radi u mm |
| AI slika komode u konfiguratoru | zamenjena živim 3D-om; ne objavljuje se |
| Izmišljen ekran programa u slici vrha | prekriven pravim snimkom; original se ne objavljuje |
| „Pogledaj video (2 min)" | video ne postoji; tamno dugme je „Pogledaj kako radi" (vodi na tri koraka) |
| „koncept dizajna sajta, spreman za integraciju", „Ovo je vizuelni šablon…" | obrisano |

Iz starijih tekstova uklonjeno: „bez kartice" (cena, preuzimanje, pitanja) i „nove verzije izlaze redovno" (pitanje o ažuriranju), na svih 23 jezika.

## Šta je preneto iz programa

Program crta 3D three.js-om (React Three Fiber). Na sajt je prenet isti način crtanja, bez React-a, sa istim brojevima. Detalji sa fajlom i redom u programu: `docs/MODELI.md`, tačka 10.

- Crtač: PCF senke, Neutral tone mapping, okolina RoomEnvironment, svetla u istim bojama.
- Daska 18 mm: `MeshStandardMaterial`, dezen kao UV u milimetrima od ugla daske, god duž daske, tanke tamne ivice, nekantovana ivica u boji iverice.
- Frontovi sa zazorom 1,5 / 3 mm; vrata se otvaraju 110° oko ivice sa šarkama, fioke izlaze za dužinu klizača (0,6 s).
- Ručka štangla po pravilu programa (razmak 96–320, donji gore, viseći dole, visoki na 1050 mm), nogice po profilu programa, garderobna šipka, sanduci fioka.
- Mere dasaka iz `proracun.js`; ista lista ide u spisak za sečenje, 2D crtež i 3D. Okov iz `okovi()` u `proracun.js`.

Šta nije preneto: pečena dodirna senka, mreža poda i zidovi sobe sa malterom, izbor i obrisi, rendgen, profili šina fioka. Šarke se ne crtaju ni u programu.

## Teksture i fotografije

| Šta | Izvor | Licenca |
|---|---|---|
| Hrast natur, Hrast sonoma, Orah | iste datoteke kao u programu; ambientCG Wood049, Wood014, Wood013 | CC0 1.0 |
| Uni dezeni (Bela mat, Kašmir, Antracit) | proceduralna tekstura, isti algoritam kao u programu | — |
| 5 slika kartica, pozadina vrha | ilustracija iz uzora, obezbedio vlasnik | dozvola vlasnika; na sajtu piše da nisu snimci programa |
| Ekran laptopa u vrhu | snimak programa `snimak-41` | vlasništvo vlasnika |

Sve je upisano u `slike/IZVORI.md`. Unsplash, Pexels, Pixabay, ambientCG i Poly Haven nisu bili dostupni iz sesije; nijedna slika nije preuzeta sa interneta.

## Provera

`npm run build`: 1127 stranica, 23 jezika (nova stranica „Mogućnosti" na svakom jeziku). `npm run check` prolazi bez greške:

- red u kodu, tokeni i prevodi (isti ključevi u 23 jezika): ✓
- formule i okov: 44 primera iz programa se slažu (daske, kant, m², okov); 3 su van granica konfiguratora
- pregledač: 1127 stranica bez greške
- konfigurator: 7 modela na 1440 i 390; tabela i lista okova uvek iste kao proračun; 3D se učitava i platno ima tekstualni opis; sa smanjenim kretanjem ostaje 2D bez 3D-a; strelice na tastaturi i najava za čitač ekrana rade
- smanjeno kretanje na stranici Mogućnosti: bez zakačenih scena

Pomeranje sadržaja (CLS):

| | Po Lighthouse pravilu | Odmah posle klika |
|---|---|---|
| 1440 | 0,000 | 0,12 |
| 390 | 0,000 | 0,14 |

Pomeranje odmah posle klika nastaje kad se promeni kartica desno ili model, pa panel promeni visinu. Lighthouse ga ne računa (promena koju je izazvao korisnik).

Lighthouse (mobilni, bolje od dva merenja):

| Stranica | Performanse pre | Performanse posle | Pristupačnost | SEO | Dobra praksa |
|---|---|---|---|---|---|
| sr/ | 92 | 94 | 100 | 100 | 100 |
| en/ | 94 | 96 | 100 | 100 | 100 |
| de/ | 95 | 96 | 100 | 100 | 100 |
| sr/preuzimanje | 96 | 98 | 100 | 100 | 100 |
| en/blog/krojna-lista | 97 | 99 | 100 | 100 | 100 |
| sr/blog/ | 97 | 99 | 100 | 100 | 100 |

Nijedna stranica nije pala. Šta je pomoglo:

- three.js (370 KB) se učitava tek kad konfigurator uđe u ekran; do tada stoji poster.
- Početna više ne učitava GSAP i Lenis (79 KB), jer nema zakačenih scena.
- Deo fonta Inter za č, ć, š, ž sužen je sa 85 KB na 15 KB. To je bio razlog što je srpska početna u prvom merenju imala 89.
- Konfigurator se pokreće tek kad se stranica učita; crtež, spisak i okov su već u HTML-u.

## Snimci

`docs/snimci/` (1440 i 390):

- cela početna: `sr-1440-cela.png`, `sr-390-cela.png`, `de-…-cela.png`
- konfigurator, svaki model: `sr-<širina>-3d-<model>.png`, `sr-<širina>-3d-otvoren-<model>.png`, `sr-<širina>-2d-<model>.png`
- tri kartice desno: `sr-<širina>-kartica-materijali.png`, `-dimenzije`, `-okovi`
- spisak za sečenje: `sr-<širina>-spisak.png`
- stranica Mogućnosti: `sr-mogucnosti-1440-…`, preuzimanje: `sr-preuzimanje-1440-…`

Snimci su poređeni sa `SITE_PREVIEW_desktop.png` i `SITE_PREVIEW_mobile.png`. Raspored sekcija, kartice i boje se poklapaju. Razlike su namerne: spisak za sečenje, pitanja i cena su dodati posle konfiguratora, a na telefonu je 3D prikaz viši (400 px) da stane ceo element.

## Šta nije urađeno

- Klizni plakar, ugaoni, sudopera i ostali modeli nisu u konfiguratoru: formule nisu izvođene (isto kao u Zadatku 4).
- Iz programa je preneto 6 od 28 dezena (po četiri u redu, kao u uzoru).
- Šine fioka i šarke se ne crtaju u 3D.
- Prevodi 19 jezika nije čitao izvorni govornik.
- Sajt nije gledan na pravom telefonu, samo u Chromium-u (390 px).

## Pitanja za vlasnika

1. **Slike kartica i vrha.** Slike iz uzora izgledaju kao AI ilustracije. Na sajtu stoje kao „ilustracija prostora". Da li imaš pravo da ih koristiš za prodaju, i da li ih zadržavamo ili menjamo pravim fotografijama radova?
2. **Otvaranje pritiskom.** Kod izbora „bez ručke" sajt ne broji ručke. Da li program tada dodaje push mehanizam u okov? Ako da, dodaću ga po pravilu iz programa.
3. **Jezik programa.** Na vrhu i dalje piše „srpski i engleski", a u 0.1.66 je izbor jezika isključen za kupca. Da li engleski izlazi sa prodajom?
