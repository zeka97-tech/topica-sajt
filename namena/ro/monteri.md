---
naslov: Pentru montatori și cei care debitează la terți
opis: Program pentru montatori de bucătării și cei care debitează la terți: listă de debitare „După dimensiune” de copiat și trimis, feronerie pe bucată, un fișier.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Tot mai mulți meseriași lucrează fără circular de formatizat propriu: măsoară la client, comandă debitarea și cantuirea la un serviciu, apoi asamblează și montează. Acolo lista de debitare e singura hârtie care pleacă din mâinile tale în ale altcuiva. Dacă e corectă, serviciul nu te sună; dacă nu e, greșeala se vede abia la montaj. TOPICA face lista aceea din proiect, nu din caietul tău.

## Lista pe care serviciul o înțelege

Vederea „După dimensiune” dă aceleași dimensiuni pe un singur rând, grupate pe material și grosime, cu marcajul de [cant](../recnik/kant.html) și numărul de bucăți, exact cum se debitează: întâi PAL-ul alb de 18 mm, apoi fronturile, apoi HDF-ul. Prima dimensiune e direcția fibrei, așa că fronturile sunt scrise pe verticală, iar HDF-ul poartă marcajul „fără fibră”; serviciul nu trebuie să ghicească cum e întors desenul. Dimensiunile sunt nete, după cant, ceea ce e implicit în program și merită spus serviciului în primul mesaj. Lista o copiezi cu un clic și o trimiți prin mesaj sau e-mail, sau o tipărești în PDF. Ce înseamnă fiecare rând scrie în glosar la [listă de debitare](../recnik/krojna-lista.html).

## Exemplu: ce pleacă în mesaj

Corp inferior 600 × 720 × 560 cu ușă și poliță, opt piese:

| Piesă | Dimensiune (mm) | Gros. | Cant | Buc. |
|---|---|---|---|---|
| Laterală | 702 × 539 | 18 | 1 lungă | 2 |
| Fund | 600 × 539 | 18 | 1 lungă | 1 |
| Poliță | 562 × 519 | 18 | 1 lungă | 1 |
| Traversă | 564 × 100 | 18 | 2 lungi | 2 |
| Front | 717 × 597 | 18 | 2 lungi, 2 scurte | 1 |
| Spate (HDF) | 717 × 597 | 3 | fără cant | 1 |

O bucătărie de douăsprezece corpuri înseamnă vreo sută de asemenea rânduri. Programul le pune laolaltă pentru toate corpurile, iar pe lângă ele dă consumul total de plăci în m² și lungimea cantului cu 10 % deșeu, ca să știi câte plăci și câți metri de bandă să comanzi.

![Tabelul „După dimensiune” din programul TOPICA: rânduri de piese cu dimensiune în milimetri, grosime, marcaj de cant și număr de bucăți, grupate pe material](../slike/web/isecak-po-meri-tabela-1600.webp "Așa arată ce copiezi și trimiți la debitare.")

## Feroneria și materialul înainte de drumul la magazin

Montatorul cumpără feroneria singur și o cumpără o singură dată. Programul dă pe lângă lista de piese și lista de feronerie: [balamale](../recnik/sarka.html) după înălțimea frontului (până la 900 mm două, până la 1600 trei), [glisiere](../recnik/fioka-i-vodjica.html) ca cea mai mare lungime nominală care încape în adâncimea corpului, picioare patru pe corp până la 800 mm lățime și șase peste, suporți de poliță pe sistem 32. Nimic din astea nu copiezi de pe desen.

## Proiectul e un singur fișier

Fără cont și fără server: proiectul e un fișier pe calculatorul tău. Îl trimiți colegului care debitează, îl iei pe laptop la montaj și acolo deschizi 3D-ul cu cote până la perete, până la vecin și de la podea, și îi arăți clientului unde intră ce înainte să dai prima gaură. Cum se măsoară spațiul ca lista să fie corectă scrie în ghidul [cum se măsoară bucătăria](../blog/kako-izmeriti-kuhinju.html); ce mai dă programul e la [funcții](../#mogucnosti).

## Ce nu face programul în această versiune

Nu face fișier CNC și nici plan de debitare (nesting). Asta o face serviciul pe programul lui și pe circularul lui; lui îi trebuie lista exactă, și asta e ce primești. Tot drumul de la cameră la lista aceea sunt [trei pași](../#kako-radi).

Următoarea listă pentru serviciu fă-o în program, apoi compar-o cu cea din caiet.
