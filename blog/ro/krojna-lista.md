---
naslov: Ce este lista de debitare și cum se citește
opis: Lista de debitare este lista tuturor pieselor dintr-o piesă de mobilier, cu dimensiuni exacte, grosime, cant și cantitate. Cum arată, ce înseamnă „prima dimensiune = direcția fibrei“ și cum o generează TOPICA automat.
datum: 2026-11-04
slika: ../slike/web/snimak-33-po-meri-1600.webp
---

Lista de debitare este foaia de hârtie (sau tabelul) care pleacă din atelier spre circularul de formatizat. Conține fiecare piesă dintr-o piesă de mobilier: cât de lungă, cât de lată, cât de groasă, din ce material, unde merge cantul și câte bucăți sunt necesare. Cel care taie plăcile nu trebuie să știe cum arată mobila; lista îi ajunge. De aceea lista de debitare este cel mai important document dintre proiect și mobila gata: dacă e corectă, totul se potrivește; dacă lipsesc 18 mm pe hârtie, lipsesc și în bucătărie.

## Ce conține o listă de debitare

Pentru mobilierul din PAL (bucătării, dulapuri, comode) un rând din listă poartă de obicei șase informații:

- **Numele piesei** și corpul din care face parte: laterală, fund, poliță, traversă, front, spate.
- **Lungime × lățime** în milimetri, dimensiunea netă a piesei finite.
- **Grosimea**: 18 mm pentru corp și fronturi, 3 mm HDF pentru spate, 8–10 mm pentru fundurile de sertar.
- **Materialul**: PAL alb, decor stejar, HDF colorat.
- **[Cantul](../recnik/kant.html)**: care muchii se cantuiesc și cu ce bandă (0,45 mm pentru corp, 1 sau 2 mm pentru fronturi).
- **Cantitatea**: două laterale, un fund, două traverse.

O listă bună este grupată pe material și grosime, pentru că așa se taie plăcile: întâi tot PAL-ul alb de 18 mm, apoi fronturile, apoi HDF-ul.

## Prima dimensiune este direcția fibrei

La decorurile cu desen (stejar, nuc, sonoma) contează cum stă piesa pe placă. De aceea listele de debitare respectă o convenție: **prima dimensiune merge întotdeauna pe fibră**. Un front de 717 × 597 are fibra pe verticală, așa cum trebuie la o ușă. Scris 597 × 717, fibra ar merge pe orizontală. La PAL alb și HDF nu contează, așa că programul marchează spatele cu „fără fibră“.

## Exemplu: un corp inferior de 600 × 720 × 560

Un [corp](../recnik/korpus.html) inferior obișnuit de bucătărie, cu o ușă și o poliță, are opt piese. Fundul stă peste laterale (lățime totală 600), deci lateralele au 702 înălțime, nu 720. Adâncimea corpului este 539, pentru că din 560 se scad frontul (18) și spatele (3).

| Piesă | Dimensiune (mm) | Gros. | Cant | Buc. |
|---|---|---|---|---|
| Laterală | 702 × 539 | 18 | 1 lungă | 2 |
| Fund | 600 × 539 | 18 | 1 lungă | 1 |
| Poliță | 562 × 519 | 18 | 1 lungă | 1 |
| Traversă | 564 × 100 | 18 | 2 lungi | 2 |
| Front (ușă) | 717 × 597 | 18 | 2 lungi, 2 scurte | 1 |
| Spate (HDF) | 717 × 597 | 3 | fără | 1 |

Cineva trebuie să calculeze fiecare dintre aceste numere. Pentru un corp înseamnă zece minute cu creionul. Pentru o bucătărie cu douăsprezece corpuri înseamnă o oră și cel puțin o greșeală.

## Cum construiește TOPICA lista de debitare

În program nu scrii lista de debitare: se calculează din corpurile pe care le-ai așezat în cameră. Schimbi un corp de la 600 la 450 lățime și toate cele opt piese primesc dimensiuni noi pe loc, împreună cu cantul, feroneria și prețul. Vederea „După dimensiune“ pune dimensiunile identice pe un singur rând, grupate pe material, cu marcajul de cant și cantitatea, exact cum pleacă la circular. Vederea asta se copiază cu un clic și se trimite ca mesaj sau se tipărește în PDF.

![Lista de debitare „După dimensiune“ în TOPICA pentru un corp inferior de 600 × 720 × 560 mm: opt piese grupate pe material, cu dimensiune, grosime, cant și cantitate](../slike/web/snimak-33-po-meri-1600.webp "Vederea „După dimensiune“ pentru un corp: opt piese, trei materiale, 2,34 m² de placă.")

Regula „prima dimensiune = direcția fibrei“ programul o ține singur: un front este scris întotdeauna pe verticală, iar HDF-ul poartă marcajul „fără fibră“. Dacă mai târziu schimbi grosimea spatelui sau cantul fronturilor din setările atelierului, schimbarea trece prin fiecare piesă din proiect, inclusiv prin cele la care te-ai uitat deja.

Mai multe despre ce bandă unde merge scrie în ghidul [Cant: ce grosime unde merge](./kant-debljina-i-duzina.html), iar despre așezarea găurilor în [Sistem 32](./sistem-32.html).

O listă de debitare nu e complicată. Complicat e să iasă corect de fiecare dată, pentru fiecare corp, după ce clientul s-a răzgândit de trei ori. Pentru asta e programul.
