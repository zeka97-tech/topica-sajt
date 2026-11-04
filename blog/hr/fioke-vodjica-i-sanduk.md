---
naslov: Ladice: kako odabrati vodilicu i izračunati kutiju
opis: Kuglična, valjkasta ili metalna kutija — koliki je zazor po strani, kako se bira dužina vodilice i kako se računa kutija ladice za korpus od 600 mm, s točnim brojevima.
datum: 2026-11-04
slika: ../slike/web/snimak-13-korpus-sa-fiokama-1600.webp
---

Ladica je fronta plus kutija plus vodilica, i ta se tri dijela moraju složiti u milimetar. Fronta se vidi, ali kutija i vodilica odlučuju klizi li ladica ili struže. Greška od 2 mm po strani znači da kutija ne ulazi ili da se klima. Ovdje je redoslijed kojim se u radionici računa ladica za običan donji [korpus](../recnik/korpus.html) širine 600 mm, s tri vrste vodilica koje se najčešće kupuju.

## Prvo svijetli otvor, pa sve ostalo

Sve mjere ladice polaze od **svijetlog otvora**: razmaka između unutarnjih strana bokova. Kod korpusa 600 mm s bokovima od 18 mm iverice otvor je 600 − 2 × 18 = **564 mm**. Po dubini računaš s unutarnjom dubinom korpusa: korpus dubine 560 ima dijelove duboke 539 mm, jer se od 560 oduzmu fronta (18) i leđa od lesonita (3). Ne mjeri otvor preko fronte i ne zaboravi leđa; to su dvije najčešće greške prije nego što je išta rezano.

## Tri vrste vodilica i njihov zazor

Zazor je prostor koji vodilica traži između kutije i boka korpusa, sa svake strane posebno.

| Vodilica | Zazor po strani | Dužine | Što nosi |
|---|---|---|---|
| Kuglična teleskopska | **13 mm** | 250–550, korak 50 | drvenu kutiju (stranica 18 mm) |
| Valjkasta | **12,5 mm** | 250–500 | drvenu kutiju, lakše ladice |
| Metalna kutija (Modern Box, PRO) | po formuli iz kataloga | PRO: NL 300–550 | vlastite stranice, ti režeš samo dno i leđa |

Kod drvene kutije ti radiš cijelu kutiju: dvije stranice, prednju i stražnju ploču i dno od lesonita 3 mm. Kod metalne kutije stranice su tvorničke, a ti režeš samo **dno i leđa** po formuli proizvođača. Formule za GTV Modern Box iz kataloga: dno širina = svijetli otvor − 86, dno dužina = NL − 24, leđa = otvor − 97, visine kutije 68/83/146/210. Za Modern Box PRO: otvor − 75, NL − 24, otvor − 87, visine 84/135/167/199.

## Dužina vodilice: najveća koja stane

Pravilo je jednostavno i program ga drži isto: **vodilica je najveća nazivna dužina koja stane u dubinu korpusa**. Za unutarnju dubinu 539 mm kuglična vodilica od 550 ne stane, pa ide **500**. Ista logika vrijedi za valjkastu (500) i za metalnu kutiju (NL 500). Tko uzme 550 zato što „ima mjesta do zida“ zaboravio je lesonit i frontu; vodilica tada udara u leđa ili gura frontu van.

## Primjer: korpus 600 × 720 × 560, tri ladice

Otvor 564 mm, unutarnja dubina 539 mm, vodilica 500.

**Kuglična teleskopska, drvena kutija.** Vanjska širina kutije je 564 − 2 × 13 = **538 mm**. Stranice kutije su od iverice 18 mm, duge koliko i vodilica (500 mm, uobičajena praksa). Prednja i stražnja ploča kutije idu između stranica: 538 − 36 = **502 mm**. Dno od lesonita 3 mm po pravilu je programa 3 mm uže i kraće od kutije: **535 × 497 mm**.

| Dio kutije | Mjera (mm) | Deb. | Kom |
|---|---|---|---|
| Stranica kutije | 500 × visina | 18 | 2 |
| Prednja / stražnja ploča | 502 × visina | 18 | 2 |
| Dno | 535 × 497 | 3 | 1 |

**Valjkasta.** Zazor 12,5 mm po strani daje kutiju 564 − 25 = **539 mm**, pa su prednja i stražnja ploča 503 mm. Ostalo kao gore.

**Modern Box.** Dno 564 − 86 = **478 mm** široko i 500 − 24 = **476 mm** dugo; leđa 564 − 97 = **467 mm** široka. **Modern Box PRO**: dno **489 × 476**, leđa **477** mm. Visina leđa ide po visini kutije koju si kupio, po tablici iz kataloga.

## Visina stranice kutije

Visina stranice drvene kutije bira se po visini fronte i po tome što ide u ladicu: za kuglične vodilice uobičajene su M 85, K 120, C 150 i F 180 mm, za valjkaste 85/120/150. Gornja ladica ispod prečke obično dobiva najnižu kutiju, donja najvišu. Pravilo koje program ne da prekršiti: **kutija nikad kroz ploču iznad**. Kod donjeg elementa pod radnom pločom iznad gornje ladice stoje dvije prečke visoke 100 mm, pa gornja kutija mora stati ispod njih, bez obzira na to koliko je fronta visoka. [Ladice](../recnik/fioka-i-vodjica.html) se broje odozgo, pa je „prva ladica“ uvijek ona ispod prečke.

## Česte greške

- Zazor oduzet samo jednom umjesto s obje strane: kutija 551 umjesto 538, ne ulazi.
- Otvor mjeren preko vanjske širine korpusa (600) umjesto između bokova (564).
- Dužina vodilice birana po dubini korpusa izvana (560) umjesto po unutarnjoj (539).
- Formula metalne kutije primijenjena na širinu kutije, a ne na svijetli otvor.
- Zaboravljen [zazor fronte](../recnik/zazor-fronta.html): 3 mm između susjednih fronti i 1,5 mm po rubu elementa, pa fronte ladica trljaju jedna o drugu.
- Rubna traka: fronta ladice kantira se na sva četiri ruba trakom 1 mm, a stranice drvene kutije samo gornjim rubom 0,45 mm; tko kantira kutiju sa svih strana mijenja joj mjeru. Više u vodiču [o rubnoj traci](./kant-debljina-i-duzina.html).

## Kako to radi TOPICA

U programu ladicu ne računaš: na korpusu klikneš „Ladice“ s plusom i minusom, upišeš koliko ih je, a kutija, dno i vodilica izvedu se iz svijetlog otvora i dubine po pravilima iznad. Vodilica je GTV zadano, najveća dužina koja stane; kad promijeniš dubinu korpusa sa 560 na 500, vodilica i kutija dobiju nove mjere, a s njima i [krojna lista](./krojna-lista.html).

![Donji korpus s tri ladice 600 × 720 × 560 mm u programu TOPICA: 3D prikaz uz zid, panel s brojem ladica i odabirom rubne trake, materijala i ručki](../slike/web/snimak-13-korpus-sa-fiokama-1600.webp "Tri ladice na jednom korpusu: broj mijenjaš gumbom, kutiju i vodilicu računa program.")

Ladica je najskuplje mjesto za grešku u kuhinji, jer se greška vidi tek kad su vodilice pričvršćene i fronta obješena. Zato se računa prije rezanja, a ne poslije.
