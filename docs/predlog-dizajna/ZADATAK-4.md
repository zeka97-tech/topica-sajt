ZADATAK 4 — NOVI DIZAJN POČETNE: MODELI, KONFIGURACIJA, SPISAK ZA SEČENJE
Repozitorijum: zeka97-tech/topica-sajt (grana main). Program se NE menja.
Najviše 3 agenta istovremeno. Važe sva pravila iz README (fajl ≤ 300 redova,
sav tekst iz tekst/<kod>.json, brojevi samo u tokeni.css, ništa izmišljeno).

PRILOZI (folder predlog-dizajna/, stavi ga u docs/predlog-dizajna/)
  01-tok.png, 02-modeli.png, 03-konfiguracija.png, 04-spisak-za-secenje.png
     + svg/ — stil crteža i boje koje hoćemo (tamno plava, narandžasta).
  05-uzor-vlasnika.png — uzor za RASPORED strane. Iz njega se uzima
     struktura, NE uzimaju se slike, zlatna boja ni tekstovi obećanja.

ŠTA SE UZIMA IZ UZORA (05)
  - Tamna tema vrha, veliki naslov u tri reči, spisak 4 prednosti sa
    štiklama, Topi + laptop sa programom desno.
  - Traka sa 6–7 ikonica mogućnosti odmah ispod vrha.
  - Tri kartice sa brojevima: 1 Izaberi element → 2 Podesi i konfiguriši
    → 3 Dobij rezultat, sa strelicama između.
  - Polja za mere sa dugmadima − i + i jedinicom, izbor fronta sličicama.
  - Red kartica „Šta možeš da projektuješ" (kuhinje, plakari, komode…).
  - Gornji meni sa stavkama i dugmetom desno.
ŠTA SE NE UZIMA
  - Fotorealistične slike enterijera i nameštaja (AI). Na sajtu smeju da
    stoje samo pravi snimci programa iz slike/izvor/ i crteži (SVG).
  - Zlatna/crna boja. Ostaju #0b1b3a, #2563eb, #f97316, Manrope.
  - Zeleno dugme. Jedna glavna akcija: narandžasto „Preuzmi probnu verziju".
  - Tvrdnje koje nisu potvrđene: „14 dana besplatno", „bez kartice",
    „EU standardi", „podrška na evropskim jezicima", „Prijava", „Cene",
    „video 2 min", znak ®, klizna vrata, garderoberi, reljefni frontovi.
    Svaku takvu stavku ubaci SAMO ako je nađeš u programu (korak 0) ili
    je vlasnik upisao u tekst/sajt.json. Inače je izostavi i navedi u
    izveštaju.
  - Topi nacrtan AI-jem. Koriste se postojeće dve slike Topija.

0. PRE POČETKA (samo čitanje)
   Pročitaj zeka97-tech/TOPICA i zapiši u docs/MODELI.md: koji modeli
   elemenata postoje (tačni nazivi), koje mere i opcije korisnik zadaje
   i u kojim granicama, vrste frontova, formule za mere dasaka i kant,
   šta program izvozi (krojna lista, kant, okov, cena, PDF…).
   Ako repozitorijum nije dostupan ili formula nije jasna: STANI na tom
   delu, zapiši šta fali, ne izmišljaj. Radi samo ono što si potvrdio.

1. VRH (hero) — tamna tema
   Pozadina tamno plava sa blagim sjajem (kao 01-tok.png). Levo: nadnaslov,
   naslov „Projektuj. Konfiguriši. Izradi." (treća reč narandžasta),
   jedna rečenica, 4 prednosti sa štiklama (samo potvrđene u koraku 0),
   glavno dugme, ispod sitno: Windows · srpski i engleski.
   Desno: Topi (postojeća slika) i okvir laptopa nacrtan u CSS/SVG, u
   njemu PRAVI snimak programa iz slike/izvor/. LCP slika sa preload.

2. TRAKA MOGUĆNOSTI
   Jedan red ikonica (SVG linije, isti stil) sa natpisima: 3D prikaz,
   korpusi i elementi, konfiguracija, krojna lista, kant, okov i cena —
   samo ono što je potvrđeno. Na telefonu vodoravno prevlačenje.

3. „KONFIGURIŠI NAMEŠTAJ PO MERI" — tri kartice, živi prikaz
   Kartica 1 „Izaberi element": spisak modela iz docs/MODELI.md, pored
   crtež izabranog (SVG iz istog modela podataka kao animacija korpusa).
   Kartica 2 „Podesi": širina, visina, dubina sa − / + i unosom broja,
   broj polica / vrata / fioka gde model to ima, izbor fronta ako ga
   program ima. Granice i koraci kao u programu.
   Kartica 3 „Dobij rezultat": crtež sa kotama + štiklirana lista onoga
   što program daje + dugme „Pogledaj spisak za sečenje" (skrol na 4).
   Sve tri kartice rade zajedno: promena u 1 ili 2 odmah menja crtež.
   Tastatura i čitač ekrana: label, aria-live za promenu mere.

4. „SPISAK ZA SEČENJE"
   Tabela iz istih mera: deo, komada, dužina × širina, kant po stranama;
   zbir m² ploče i metara kanta; pored krojni plan ploče (stil kao
   04-spisak-za-secenje.png). Izmenjeni redovi kratko zasvetle.
   Postojeća animacija „korpus → krojni plan" ostaje i koristi mere iz
   konfiguratora. Formule u jednom fajlu src/skripte/proracun.js sa
   testom u npm run check prema primerima iz docs/MODELI.md.
   NAPOMENA: mere i raspored na slikama 03 i 04 su primer, ne uzimaj ih
   kao tačne — važe samo formule iz programa.

5. „ŠTA MOŽEŠ DA PROJEKTUJEŠ"
   Red kartica po nameni (kuhinje, plakari, komode… samo potvrđeno),
   svaka vodi na postojeću stranicu /<kod>/namena/…. Slika u kartici:
   pravi snimak programa ako postoji u slike/izvor/, inače SVG crtež
   modela. Bez slika sa interneta i bez AI slika.

6. OSTALO
   - Gornji meni: Mogućnosti, Modeli, Saveti, Pitanja + jezik + dugme.
   - Tamna tema samo za vrh i sekcije 2–4; rečnik, vodiči i ostale
     stranice za čitanje ostaju svetle. Kontrast teksta ≥ 4,5:1.
   - Natpis „This page is also available in English" ne prikazuj kad je
     jezik stranice sr ili hr.
   - Galerija: ako u slike/izvor/ nema novih snimaka, ne diraj je i u
     izveštaju navedi koji snimci nedostaju.

7. JEZICI
   Novi tekstovi: sr, hr, en, de pun kvalitet; ostalih 19 „za proveru".

8. PROVERA I IZVEŠTAJ
   npm run build, npm run check. Lighthouse na sr/en/de: SEO ≥ 95,
   performanse ne ispod sadašnjih, CLS < 0,1 dok se mere menjaju.
   Snimci u docs/snimci na 1440 i 390: vrh, svaka nova sekcija, svaki
   model. Izveštaj docs/IZVESTAJ-DIZAJN.md: urađeni modeli i odakle su
   formule (fajl i red u programu), koje tvrdnje iz uzora su izostavljene
   i zašto, Lighthouse brojke, snimci koji nedostaju, pitanja za vlasnika.
