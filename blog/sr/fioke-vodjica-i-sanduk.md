---
naslov: Fioke: kako izabrati vođicu i izračunati sanduk
opis: Kuglična, valjkasta ili metalna kutija — koliko je zazor po strani, kako se bira dužina vođice i kako se računa sanduk fioke za korpus od 600 mm, sa tačnim brojevima.
datum: 2026-11-04
slika: ../slike/web/snimak-13-korpus-sa-fiokama-1600.webp
---

Fioka je front plus sanduk plus vođica, i ta tri dela moraju da se slože u milimetar. Front se vidi, ali sanduk i vođica odlučuju da li fioka klizi ili struže. Greška od 2 mm po strani znači da kutija ne ulazi ili da se klati. Ovde je redosled kojim se u radionici računa fioka za običan donji [korpus](../recnik/korpus.html) širine 600 mm, sa tri vrste vođica koje se najčešće kupuju.

## Prvo svetli otvor, pa sve ostalo

Sve mere fioke polaze od **svetlog otvora**: razmaka između unutrašnjih strana bokova. Kod korpusa 600 mm sa bokovima od 18 mm iverice otvor je 600 − 2 × 18 = **564 mm**. Po dubini računaš sa unutrašnjom dubinom korpusa: korpus dubine 560 ima daske duboke 539 mm, jer se od 560 oduzmu front (18) i leđa od lesonita (3). Ne meri otvor preko fronta i ne zaboravi leđa; to su dve najčešće greške pre nego što je išta isečeno.

## Tri vrste vođica i njihov zazor

Zazor je prostor koji vođica traži između sanduka i boka korpusa, sa svake strane posebno.

| Vođica | Zazor po strani | Dužine | Šta nosi |
|---|---|---|---|
| Kuglična teleskopska | **13 mm** | 250–550, korak 50 | drvenu kutiju (bok 18 mm) |
| Valjkasta | **12,5 mm** | 250–500 | drvenu kutiju, lakše fioke |
| Metalna kutija (Modern Box, PRO) | po formuli iz kataloga | PRO: NL 300–550 | sopstvene bokove, ti sečeš samo dno i leđa |

Kod drvene kutije ti praviš ceo sanduk: dva boka, prednju i zadnju dasku i dno od lesonita 3 mm. Kod metalne kutije bokovi su fabrički, a ti sečeš samo **dno i leđa** po formuli proizvođača. Formule za GTV Modern Box iz kataloga: dno širina = svetli otvor − 86, dno dužina = NL − 24, leđa = otvor − 97, visine kutije 68/83/146/210. Za Modern Box PRO: otvor − 75, NL − 24, otvor − 87, visine 84/135/167/199.

## Dužina vođice: najveća koja staje

Pravilo je prosto i program ga drži isto: **vođica je najveća nominalna dužina koja staje u dubinu korpusa**. Za unutrašnju dubinu 539 mm kuglična vođica od 550 ne staje, pa ide **500**. Ista logika važi za valjkastu (500) i za metalnu kutiju (NL 500). Ko uzme 550 zato što „ima mesta do zida“ zaboravio je lesonit i front; vođica tada udara u leđa ili gura front napolje.

## Primer: korpus 600 × 720 × 560, tri fioke

Otvor 564 mm, unutrašnja dubina 539 mm, vođica 500.

**Kuglična teleskopska, drvena kutija.** Spoljna širina sanduka je 564 − 2 × 13 = **538 mm**. Bokovi kutije su od iverice 18 mm, dugi koliko i vođica (500 mm, uobičajena praksa). Prednja i zadnja daska kutije idu između bokova: 538 − 36 = **502 mm**. Dno od lesonita 3 mm je po pravilu programa 3 mm uže i kraće od kutije: **535 × 497 mm**.

| Daska sanduka | Mera (mm) | Deb. | Kom |
|---|---|---|---|
| Bok kutije | 500 × visina | 18 | 2 |
| Prednja / zadnja daska | 502 × visina | 18 | 2 |
| Dno | 535 × 497 | 3 | 1 |

**Valjkasta.** Zazor 12,5 mm po strani daje sanduk 564 − 25 = **539 mm**, pa su prednja i zadnja daska 503 mm. Ostalo kao gore.

**Modern Box.** Dno 564 − 86 = **478 mm** široko i 500 − 24 = **476 mm** dugo; leđa 564 − 97 = **467 mm** široka. **Modern Box PRO**: dno **489 × 476**, leđa **477** mm. Visina leđa ide po visini kutije koju si kupio, po tabeli iz kataloga.

## Visina boka sanduka

Visina boka drvene kutije bira se po visini fronta i po tome šta ide u fioku: za kuglične vođice uobičajene su M 85, K 120, C 150 i F 180 mm, za valjkaste 85/120/150. Gornja fioka ispod prečke obično dobija najniži sanduk, donja najviši. Pravilo koje program ne da da se prekrši: **sanduk nikad kroz dasku iznad**. Kod donjeg elementa pod radnom pločom iznad gornje fioke stoje dve prečke visoke 100 mm, pa gornji sanduk mora da stane ispod njih, bez obzira koliko je front visok. [Fioke](../recnik/fioka-i-vodjica.html) se broje odozgo, pa je „prva fioka“ uvek ona ispod prečke.

## Česte greške

- Zazor oduzet samo jednom umesto sa obe strane: sanduk 551 umesto 538, ne ulazi.
- Otvor meren preko spoljne širine korpusa (600) umesto između bokova (564).
- Dužina vođice birana po dubini korpusa spolja (560) umesto po unutrašnjoj (539).
- Formula metalne kutije primenjena na širinu sanduka, a ne na svetli otvor.
- Zaboravljen [zazor fronta](../recnik/zazor-fronta.html): 3 mm između susednih frontova i 1,5 mm po ivici elementa, pa frontovi fioka trljaju jedan o drugi.
- Kant: front fioke se kantuje na sve četiri ivice trakom 1 mm, a bokovi drvene kutije samo gornjom ivicom 0,45 mm; ko kantuje kutiju sa svih strana menja joj meru. Više u vodiču [o kantu](./kant-debljina-i-duzina.html).

## Kako to radi TOPICA

U programu fioku ne računaš: na korpusu klikneš „Fioke“ sa plus i minus, upišeš koliko ih je, a sanduk, dno i vođica se izvedu iz svetlog otvora i dubine po pravilima iznad. Vođica je GTV podrazumevano, najveća dužina koja staje; kad promeniš dubinu korpusa sa 560 na 500, vođica i sanduk dobiju nove mere, a sa njima i [krojna lista](./krojna-lista.html).

![Donji korpus sa tri fioke 600 × 720 × 560 mm u programu TOPICA: 3D prikaz uz zid, panel sa brojem fioka i izborom kanta, materijala i ručki](../slike/web/snimak-13-korpus-sa-fiokama-1600.webp "Tri fioke na jednom korpusu: broj menjaš dugmetom, sanduk i vođicu računa program.")

Fioka je najskuplje mesto za grešku u kuhinji, jer se greška vidi tek kad su vođice zavrnute i front obešen. Zato se računa pre sečenja, a ne posle.
