---
naslov: Za montere i one koji kroje kod drugog
opis: Program za montere kuhinja i majstore koji kroje ploče u servisu: krojna lista „Po meri“ za kopiranje i slanje, okovi po komadu, projekat kao jedan fajl. Windows.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
---

Sve više majstora radi bez sopstvene formatne testere: izmere kod mušterije, naruče krojenje i kantovanje u servisu, pa sklapaju i montiraju. Tu je krojna lista jedini papir koji ide iz tvojih ruku u tuđe. Ako je tačna, servis je ne zove; ako nije, greška se vidi tek na montaži. TOPICA pravi tu listu iz projekta, a ne iz tvoje sveske.

## Lista koju servis razume

Prikaz „Po meri“ daje iste mere u jednom redu, grupisane po materijalu i debljini, sa oznakom [kanta](../recnik/kant.html) i brojem komada, baš onako kako se kroji: prvo bela iverica 18 mm, pa frontovi, pa lesonit. Prva mera je pravac goda, pa su frontovi upisani uspravno, a lesonit nosi oznaku „bez goda“; servis ne mora da pogađa kako je okrenuta šara. Mere su neto, posle kanta, što je podrazumevano u programu i vredi reći servisu u prvoj poruci. Listu kopiraš jednim klikom i pošalješ porukom ili mejlom, ili je odštampaš u PDF. Šta svaki red znači, piše u rečniku pod [krojna lista](../recnik/krojna-lista.html).

## Primer: šta ode u poruku

Donji korpus 600 × 720 × 560 sa vratima i policom, osam dasaka:

| Daska | Mera (mm) | Deb. | Kant | Kom |
|---|---|---|---|---|
| Bok | 702 × 539 | 18 | 1 duža | 2 |
| Dno | 600 × 539 | 18 | 1 duža | 1 |
| Polica | 562 × 519 | 18 | 1 duža | 1 |
| Prečka | 564 × 100 | 18 | 2 duže | 2 |
| Front | 717 × 597 | 18 | 2 duže, 2 kraće | 1 |
| Leđa (lesonit) | 717 × 597 | 3 | bez kanta | 1 |

Kuhinja od dvanaest elemenata je stotinak takvih redova. Program ih složi za sve korpuse zajedno, a uz njih da ukupnu potrošnju ploča u m² i dužinu kanta sa 10 % otpada, pa znaš koliko tabli i koliko metara trake da naručiš.

![Tabela „Po meri“ iz programa TOPICA: redovi dasaka sa merom u milimetrima, debljinom, oznakom kanta i brojem komada, grupisani po materijalu](../slike/web/isecak-po-meri-tabela-1600.webp "Ovako izgleda ono što kopiraš i šalješ na krojenje.")

## Okovi i materijal pre odlaska u radnju

Monter kupuje okov sam i kupuje ga jednom. Program uz listu dasaka da i spisak okova: [šarke](../recnik/sarka.html) po visini fronta (do 900 mm dve, do 1600 tri), [vođice](../recnik/fioka-i-vodjica.html) kao najveću nominalnu dužinu koja staje u dubinu korpusa, nogice četiri po elementu do 800 mm širine i šest preko, nosače polica po sistemu 32. Ništa od toga ne prepisuješ sa crteža.

## Projekat je jedan fajl

Nema naloga ni servera: projekat je fajl na tvom računaru. Pošalješ ga kolegi koji kroji, poneseš na laptopu na montažu i tamo otvoriš 3D sa kotama do zida, do suseda i od poda, pa mušteriji pokažeš gde šta staje pre nego što izbušiš prvu rupu. Kako se prostor izmeri da bi lista bila tačna, piše u vodiču [kako izmeriti kuhinju](../blog/kako-izmeriti-kuhinju.html); šta još program daje je u [mogućnostima](../#mogucnosti).

## Šta program ne radi u ovoj verziji

Ne pravi CNC fajl ni krojni plan (nesting). To radi servis na svom programu i na svojoj testeri; njemu treba tačna lista, i to je ono što dobijaš. Ceo put od sobe do te liste je [tri koraka](../#kako-radi).

Sledeću listu za servis napravi u programu, pa uporedi sa onom iz sveske.
