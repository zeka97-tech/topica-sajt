---
naslov: Cât costă o bucătărie la comandă — cum calculează meseriașul prețul
opis: Prețul unei bucătării la comandă se compune din material pe m², cant pe metru, feronerie pe bucată, manoperă și adaos. Ce intră în calcul, ce se uită și cum adună programul din prețurile introduse de meseriaș.
datum: 2026-11-04
slika: ../slike/web/snimak-37-cena-1600.webp
status: za-proveru
---

Prețul unei bucătării la comandă nu e un număr din cap, ci suma a cinci poziții: material, cant, feronerie, manoperă și adaos. Cine calculează așa știe de ce prețul e atât și poate să-l apere în fața clientului. Cine calculează „pe metru liniar” din ochi iese bine la o bucătărie simplă și pierde la una cu sertare și coloane. Aici nu sunt prețuri în lei sau în euro, pentru că fiecare atelier le are pe ale lui; aici e felul în care se adună prețurile acelea.

## 1. Materialul: metri pătrați de placă, pe tip

Întâi se numără metrii pătrați din fiecare tip de placă separat, pentru că se și cumpără separat: [PAL](../recnik/iverica.html) alb de 18 mm pentru corpuri, decor de 18 mm pentru fronturi, HDF de 3 mm pentru spate și fundurile de sertar, blat de 38 mm pe metru liniar. Suprafața se scoate din [lista de debitare](./krojna-lista.html): lungime × lățime × bucăți, adunat pe material. Exemplu din program: un corp inferior de 600 × 720 × 560 are 8 piese și 2,34 m² de placă, din care 1,48 m² PAL alb, 0,43 m² decor pentru front și 0,43 m² HDF.

Suprafața aceea e netă. Placa nu se folosește toată: dimensiunile uzuale ale plăcilor sunt 2800 × 2070 mm sau 2750 × 1830 mm, iar după debitare rămâne deșeu din tăieturi, margini și bucăți care nu încap nicăieri. Realist, **randamentul plăcii e cam 80 %**, așa că metrii pătrați neți îi împarți la 0,8 ca să afli câtă placă cumperi de fapt. O bucătărie cu 10 m² neți de PAL alb cere cam 12,5 m² de placă cumpărată. Cine facturează doar netul plătește deșeul din buzunarul lui.

## 2. Cantul: metri liniari plus deșeu

[Cantul](../recnik/kant.html) se calculează pe metru liniar, separat pentru fiecare grosime, pentru că și prețurile sunt diferite: 0,45 mm pentru muchiile vizibile ale corpului și polițelor, 1 mm pentru fronturi pe toate cele patru muchii, 2 mm pentru muchiile mai solicitate. Lungimea e suma tuturor muchiilor cantuite din lista de debitare plus **10 % deșeu** pentru începutul și sfârșitul benzii și pentru rebut. Un front de 717 × 597 poartă singur 2,63 m de cant de 1 mm; la douăzeci de fronturi sunt peste 50 m, ceea ce nu e un fleac. Detaliile sunt în ghidul [despre grosimea și lungimea cantului](./kant-debljina-i-duzina.html).

## 3. Feroneria: pe bucată, din listă

Feroneria se numără, nu se estimează. Lista pentru o bucătărie obișnuită: balamale (frontul până la 900 mm înălțime poartă 2, până la 1600 trei, până la 2000 patru), glisiere sau cutii metalice pe sertar, picioare (4 bucăți până la 800 mm lățime, 6 peste), mânere pe front, excentrici și dibluri sau confirmaturi pe îmbinare, cleme de plintă, agățători pentru corpurile suspendate, suporți de poliță. Fiecare poziție are preț pe bucată din catalogul furnizorului și număr de bucăți din proiect. Sertarele sunt aici cele mai scumpe: un corp cu trei sertare pe cutii metalice costă în feronerie mai mult decât trei corpuri cu uși.

## 4. Manopera: pe corp sau pe metru pătrat de front

Două feluri obișnuite. **Pe corp**: fiecare corp, inferior sau suspendat, poartă aceeași sumă de manoperă, iar cele mai complicate (sertare, colț, cuptor) un supliment. Simplu și rapid, bun pentru bucătării în linie. **Pe m² de front**: manopera se calculează pe suprafața fronturilor, așa că un dulap mare poartă mai mult decât un suspendat mic. Mai exact pentru dulapuri și coloane. Oricare ai alege, în manoperă intră debitarea, cantuirea, găurirea, asamblarea și proba în atelier. Montajul la client e poziție separată, vezi mai jos.

## 5. Adaosul

Peste suma materialului, cantului, feroneriei și manoperei merge **adaosul în procente**. El nu e câștigul meseriașului, pentru că manopera e deja plătită; el acoperă ce nu se vede în proiect: sculele, curentul, mașinile care se uzează, zilele fără lucru și riscul ca ceva să meargă prost. Atelierul care lucrează fără adaos lucrează pe salariu, nu pentru el.

## Ce uită lumea

- **Transportul**: plăcile de la furnizor la atelier, corpurile gata la client, de două ori duba.
- **Montajul**: o zi sau două la client, cu cărat la etaj, nivelat, decupaj pentru chiuvetă și plită după șablonul producătorului.
- **Deșeul**: cei 20 % de placă și 10 % de cant; și HDF-ul, pe care îl uită toți pentru că e ieftin.
- **Modificările**: clientul care schimbă de trei ori decorul sau adaugă un sertar; fiecare modificare e un calcul nou și, dacă placa e deja tăiată, o placă nouă.
- **Mărunțișurile**: șuruburi, dibluri, adeziv, silicon, baghete de blat, baghetă de perete; fiecare în parte nimic, împreună se simt.
- **Serviciile**: debitarea și cantuirea la terți dacă nu ai mașinile tale.
- **Aparatele și blatul**: cine le procură, cine le montează și cine răspunde dacă decupajul nu se potrivește.

Cine are lista nu are surprize; cine nu are le vede la sfârșitul lucrării, când e târziu să le mai factureze.

## Cum face TOPICA

Programul nu îți știe prețurile și nu le inventează. În **Setările atelierului**, la „Materiale și prețuri”, introduci prețul plăcilor pe tip, cantul pe metru pentru fiecare grosime (0,4; 0,45; 0,8; 1 și 2 mm), feroneria pe bucată, **manopera pe corp** și **adaosul** în procente. Câmpul pe care nu l-ai completat scrie „neintrodus” și se socotește zero, fără avertisment, așa că prețul din raport nu conține niciodată un număr pe care nu l-ai dat tu. Odată ce prețurile sunt introduse, programul adună pentru fiecare proiect metrii pătrați pe material, metrii de cant cu deșeu, feroneria pe bucată și manopera pe corp, adaugă adaosul și în Rapoarte, fila „Preț”, dă prețul pe proiect, lângă filele „Materiale” și „Feronerie” unde se vede din ce e compus. Schimbi lățimea unui corp sau adaugi un sertar, prețul se schimbă pe loc. O privire de ansamblu asupra a tot ce dă programul e în secțiunea [Funcții](../#mogucnosti).

![Setările atelierului în programul TOPICA, secțiunea „Preț și ofertă”: câmpuri pentru manopera pe corp și adaosul în procente, cant pe metru de la 0,4 la 2 mm și piesele hotei, câmpurile neintroduse marcate cu „neintrodus”](../slike/web/snimak-37-cena-1600.webp "Prețurile le introduce meseriașul, o dată pentru atelier; neintrodus e zero, programul nu presupune nimic.")

Prețul unei bucătării la comandă e o sumă pe care o poți arăta pe hârtie, poziție cu poziție. Când programul o adună din prețurile tale, îți rămâne doar ce programul nu poate: să-ți cântărești clientul și să hotărăști cât de mult vrei lucrarea aia.
