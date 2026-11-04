---
naslov: Što je krojna lista i kako se čita
opis: Krojna lista (lista rezanja) popis je svih dijelova jednog komada namještaja s točnim mjerama, debljinom, rubnom trakom i količinom. Kako izgleda, što znači „prva mjera = smjer vlakana“ i kako je TOPICA radi sama.
datum: 2026-11-04
slika: ../slike/web/snimak-33-po-meri-1600.webp
---

Krojna lista je papir (ili tablica) koji iz radionice ide na rezanje. Na njoj je svaki dio jednog komada namještaja: koliko je dug, koliko širok, koje je debljine, od kojeg materijala, gdje ide rubna traka i koliko komada treba. Tko reže ploče ne mora znati kako komad izgleda; dovoljna mu je lista. Zato je krojna lista najvažniji dokument između projekta i gotovog namještaja: ako je točna, sve se sklopi; ako u njoj fali 18 mm, fali ih i u kuhinji.

## Što sve piše u krojnoj listi

Za pločasti namještaj (kuhinje, ormari, komode od iverice) jedan redak liste obično ima šest podataka:

- **Naziv dijela** i kojem korpusu pripada: bok, dno, polica, prečka, fronta, leđa.
- **Dužina × širina** u milimetrima, neto mjera gotovog dijela.
- **Debljina**: 18 mm za korpus i frontu, 3 mm lesonit za leđa, 8–10 mm za dno ladice.
- **Materijal**: bijela iverica (iveral), dekor hrast, lesonit u boji.
- **[Rubna traka](../recnik/kant.html)**: koji se rubovi kantiraju i kojom trakom (ABS 0,45 mm za korpus, 1 ili 2 mm za frontu).
- **Komada**: bokova su dva, dno jedno, prečke dvije.

Dobra lista grupirana je po materijalu i debljini, jer se tako i reže: prvo sva bijela iverica 18 mm, pa fronte, pa lesonit.

## Prva mjera je smjer vlakana

Kod dekora s teksturom (hrast, orah, sonoma) nije svejedno kako je dio okrenut na ploči. U krojnoj listi zato vrijedi dogovor: **prva mjera uvijek ide u smjeru vlakana**. Fronta od 717 × 597 ima teksturu po visini, uspravno, kako i treba na vratima. Da piše 597 × 717, tekstura bi išla vodoravno. Kod bijele iverice i lesonita to nije bitno, pa program leđa označi s „bez smjera“.

## Primjer: donji korpus 600 × 720 × 560

Običan donji [korpus](../recnik/korpus.html) s jednim vratima i jednom policom ima osam dijelova. Dno ide preko bokova (puna širina 600), pa su bokovi visoki 702, a ne 720. Dubina korpusa je 539, jer se od 560 oduzmu fronta (18) i leđa (3).

| Dio | Mjera (mm) | Deb. | Rub | Kom |
|---|---|---|---|---|
| Bok | 702 × 539 | 18 | 1 duža | 2 |
| Dno | 600 × 539 | 18 | 1 duža | 1 |
| Polica | 562 × 519 | 18 | 1 duža | 1 |
| Prečka | 564 × 100 | 18 | 2 duže | 2 |
| Fronta (vrata) | 717 × 597 | 18 | 2 duže, 2 kraće | 1 |
| Leđa (lesonit) | 717 × 597 | 3 | bez ruba | 1 |

Svaki od ovih brojeva netko mora izračunati. Kod jednog korpusa to je deset minuta s olovkom. Kod kuhinje od dvanaest elemenata to je sat vremena i barem jedna greška.

## Kako krojnu listu radi TOPICA

U programu krojnu listu ne pišeš: ona se računa iz korpusa koje si složio u prostoriji. Kad promijeniš širinu elementa sa 600 na 450, svih osam dijelova istog trena dobije nove mjere, a s njima i rubna traka, okov i cijena. Prikaz „Po mjeri“ daje iste mjere u jednom retku, grupirane po materijalu, s oznakom ruba i brojem komada, baš kako ide na rezanje. Taj se prikaz kopira jednim klikom i šalje porukom ili ispisuje u PDF.

![Krojna lista „Po mjeri“ u programu TOPICA za donji korpus 600 × 720 × 560 mm: osam dijelova grupiranih po materijalu, s mjerom, debljinom, rubnom trakom i brojem komada](../slike/web/snimak-33-po-meri-1600.webp "Prikaz „Po mjeri“ za jedan korpus: osam dijelova, tri materijala, 2,34 m² ploče.")

Pravilo „prva mjera = smjer vlakana“ program drži sam: fronta je uvijek upisana uspravno, a lesonit nosi oznaku „bez smjera“. Ako poslije u postavkama radionice promijeniš debljinu leđa ili rubnu traku fronti, promjena se odrazi na sve dijelove u projektu, i na one koje si već pogledao.

Više o tome gdje koja traka ide piše u vodiču [Rubna traka: koja debljina gdje ide](./kant-debljina-i-duzina.html), a o rasporedu rupa u [Sustav 32](./sistem-32.html).

Krojna lista nije komplicirana. Komplicirano je da bude točna svaki put, za svaki element, i nakon što je kupac tri puta promijenio mišljenje. Za to služi program.
