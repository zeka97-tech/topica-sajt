---
naslov: Cant
opis: Cantul este banda ABS de pe muchia PAL-ului: 0,45 mm pentru corp, 1 mm pentru fronturi, 2 mm pentru muchii solicitate. Ce muchii se cantuiesc și lungimea.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

**Cantul** este banda ABS care se lipește pe muchia PAL-ului ca să acopere partea brută a plăcii, s-o apere de umezeală și de lovituri și ca piesa să arate finisată. Cantul nu schimbă dimensiunea din lista de debitare când se lucrează la dimensiune netă, dar schimbă prețul, timpul și lista de muchii pe care meseriașul trebuie să le prelucreze.

## Dimensiuni standard

- **0,45 mm**: muchiile vizibile ale corpului și muchia din față a poliței; subțire, ieftin, urmează culoarea plăcii.
- **1 mm**: fronturi, toate cele patru muchii.
- **2 mm**: uși de dulap, blaturi și alte muchii mai solicitate; rotunjit, rezistă la lovituri.
- Dimensiunea de debitare este **netă, după cant** (implicit în program): un [front](./front.html) de 597 cu cant de 1 mm pe ambele părți se debitează la 595. Cine lucrează la dimensiune brută debitează la 597 și obține 599.
- Lungimea cantului = suma muchiilor cantuite + **10 % deșeu** (reglabil). Front 717 × 597 cu patru muchii: 2 × 717 + 2 × 597 = 2628 mm, cu deșeu ≈ 2,9 m.

Mai multe despre alegerea grosimii și calculul lungimii în ghidul [Cant: grosime și lungime](../blog/kant-debljina-i-duzina.html).

## În atelier

Corpul se cantuiește în față înainte de asamblare, frontul pe toate cele patru părți înainte de găurire. La mașina de cantuit merg de obicei întâi muchiile scurte, apoi cele lungi, ca îmbinarea din colț să privească spre partea care se vede mai puțin. Greșeală frecventă: cant uitat pe muchia de jos a [traversei](./precka.html) sau pe muchia din față a fundului din spatele ușii; a doua este amestecul dimensiunii nete cu cea brută, și toate fronturile sunt mai late cu 2 mm, iar rostul de 3 mm dispare.

![Tabelul „După dimensiune” în programul TOPICA: pentru fiecare piesă dimensiune, grosime, cant (1 lungă, 2 lungi, 2 lungi și 2 scurte, fără cant) și număr de bucăți, grupat pe material](../slike/web/isecak-po-meri-tabela-1600.webp "Coloana „Cant” spune ce muchii se cantuiesc: laterala una lungă, traversa două, frontul toate patru, HDF-ul nimic.")

## Cum face TOPICA

Pentru fiecare piesă programul trece ce muchii poartă cant și de ce grosime, adună lungimea pe grosime cu deșeu și socotește prețul pe care l-ai introdus ([funcții](../#mogucnosti)). În 3D cantul doar se marchează; dimensiunea rămâne netă.

Cantul e o jumătate de milimetru de plastic care hotărăște dacă bucătăria arată a mobilă sau a scânduri.
