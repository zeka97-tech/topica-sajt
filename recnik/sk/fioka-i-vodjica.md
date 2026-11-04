---
naslov: Zásuvka a výsuv
opis: Zásuvka je box na výsuvoch za čelom: drevený box s vôľou 13 mm na stranu alebo kovový box podľa katalógu. Rozmery, dĺžky výsuvov a vôle.
datum: 2026-11-04
slika: ../slike/web/snimak-13-korpus-sa-fiokama-1600.webp
status: za-proveru
---

**Zásuvka** je pohyblivý box v korpuse a **výsuv** je kovanie, po ktorom sa posúva. Zásuvku tvorí čelo ([front](./front.html)), box (dva bočné dielce, zadný dielec a dno) a pár výsuvov na bokoch korpusu. Zásuvka bez boxu neexistuje: samotné čelo je len front.

## Štandardné rozmery

- **Drevený box na guľôčkových teleskopických výsuvoch**: vôľa **13 mm na stranu** (vnútorná šírka korpusu − 26 = vonkajšia šírka boxu), dĺžky výsuvov 250–550 v kroku 50, bok boxu 18 mm, dno sololit 3 mm (o 3 mm užšie a kratšie než box), výšky boku M 85 / K 120 / C 150 / F 180.
- Kolieskové (rolničkové) výsuvy: vôľa **12,5 mm**, dĺžky 250–500, výšky 85/120/150.
- **Kovový box** (GTV Modern Box, v programe predvolený): dno = svetlý otvor − 86 na šírku a NL − 24 na dĺžku, chrbát = otvor − 97, výšky 68/83/146/210 mm; Modern Box PRO má vlastné odpočty (−75 / −24 / −87). Všetko podľa katalógu výrobcu.
- Výsuv = najväčšia nominálna dĺžka, ktorá sa zmestí do hĺbky korpusu: do korpusu hlbokého 539 ide výsuv **500**.
- Čelá zásuviek: škára **3 mm** medzi susednými, hrana 1 mm.

## V dielni

Najprv sa volí výsuv, potom sa podľa neho reže box; naopak to nejde. Výsuvy sa vŕtajú podľa [System 32](../blog/sistem-32.html) na oboch bokoch od tej istej hrany, potom sa zavesí čelo, nastavené podľa škáry so susedmi. Častá chyba: box hornej zásuvky narezaný bez započítania [priečky](./precka.html) nad ním, takže do nej naráža; druhá je vôľa 13 mm odpočítaná len z jednej strany, takže box nevojde. Celý výpočet je v návode [Zásuvky: výsuv a box](../blog/fioke-vodjica-i-sanduk.html).

![Spodný korpus s tromi zásuvkami 600 × 720 × 560 v programe TOPICA, vedľa korpusu s dvierkami, s kótami k stene a k podlahe](../slike/web/snimak-13-korpus-sa-fiokama-1600.webp "Tri zásuvky v jednom korpuse: program ich počíta zhora a každej odvodí box a výsuv.")

## Ako to robí TOPICA

Vyberiete typ výsuvu a počet zásuviek a program odvodí box, dno a čelo podľa katalógu, vezme najdlhší výsuv, ktorý sa zmestí, a stráži, aby box neprešiel cez dielec nad ním ([funkcie](../#mogucnosti)).

Zásuvka sa začína od výsuvu; čelo je posledné, čo sa vešia.
