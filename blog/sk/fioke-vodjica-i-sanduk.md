---
naslov: Zásuvky: ako vybrať výsuv a vypočítať box
opis: Guľôčkový, kolieskový alebo kovový box — aká je vôľa na stranu, ako sa volí dĺžka výsuvu a ako sa počíta box zásuvky pre korpus 600 mm, s presnými číslami.
datum: 2026-11-04
slika: ../slike/web/snimak-13-korpus-sa-fiokama-1600.webp
status: za-proveru
---

Zásuvka je čelo plus box plus výsuv a tieto tri časti musia sedieť na milimeter. Čelo vidno, ale box a výsuv rozhodujú, či zásuvka kĺže alebo drie. Chyba 2 mm na stranu znamená, že box nevojde alebo sa kýve. Tu je poradie, v akom sa v dielni počíta zásuvka pre bežný spodný [korpus](../recnik/korpus.html) šírky 600 mm, s tromi typmi výsuvov, ktoré sa kupujú najčastejšie.

## Najprv svetlý otvor, potom všetko ostatné

Všetky rozmery zásuvky vychádzajú zo **svetlého otvoru**: vzdialenosti medzi vnútornými stranami bokov. Pri korpuse 600 mm s bokmi z LTD 18 mm je otvor 600 − 2 × 18 = **564 mm**. Do hĺbky počítate s vnútornou hĺbkou korpusu: korpus hĺbky 560 má dielce hlboké 539 mm, pretože sa od 560 odpočíta čelo (18) a chrbát zo sololitu (3). Nemerajte otvor cez čelo a nezabudnite na chrbát; to sú dve najčastejšie chyby ešte predtým, než sa čokoľvek odreže.

## Tri typy výsuvov a ich vôľa

Vôľa je priestor, ktorý výsuv potrebuje medzi boxom a bokom korpusu, z každej strany zvlášť.

| Výsuv | Vôľa na stranu | Dĺžky | Čo nesie |
|---|---|---|---|
| Guľôčkový teleskopický | **13 mm** | 250–550, krok 50 | drevený box (bok 18 mm) |
| Kolieskový (rolničkový) | **12,5 mm** | 250–500 | drevený box, ľahšie zásuvky |
| Kovový box (Modern Box, PRO) | podľa vzorca z katalógu | PRO: NL 300–550 | vlastné bočnice, vy režete len dno a chrbát |

Pri drevenom boxe robíte celý box vy: dva boky, predný a zadný dielec a dno zo sololitu 3 mm. Pri kovovom boxe sú bočnice z výroby a vy režete len **dno a chrbát** podľa vzorca výrobcu. Vzorce pre GTV Modern Box z katalógu: šírka dna = svetlý otvor − 86, dĺžka dna = NL − 24, chrbát = otvor − 97, výšky boxu 68/83/146/210. Pre Modern Box PRO: otvor − 75, NL − 24, otvor − 87, výšky 84/135/167/199.

## Dĺžka výsuvu: najväčšia, ktorá sa zmestí

Pravidlo je jednoduché a program ho drží rovnako: **výsuv je najväčšia nominálna dĺžka, ktorá sa zmestí do hĺbky korpusu**. Pre vnútornú hĺbku 539 mm sa guľôčkový výsuv 550 nezmestí, takže ide **500**. Rovnaká logika platí pre kolieskový (500) aj pre kovový box (NL 500). Kto vezme 550, lebo „je miesto až po stenu“, zabudol na sololit a čelo; výsuv potom naráža do chrbta alebo tlačí čelo von.

## Príklad: korpus 600 × 720 × 560, tri zásuvky

Otvor 564 mm, vnútorná hĺbka 539 mm, výsuv 500.

**Guľôčkový teleskopický, drevený box.** Vonkajšia šírka boxu je 564 − 2 × 13 = **538 mm**. Boky boxu sú z LTD 18 mm, dlhé ako výsuv (500 mm, bežná prax). Predný a zadný dielec boxu idú medzi boky: 538 − 36 = **502 mm**. Dno zo sololitu 3 mm je podľa pravidla programu o 3 mm užšie a kratšie než box: **535 × 497 mm**.

| Dielec boxu | Rozmer (mm) | Hr. | Ks |
|---|---|---|---|
| Bok boxu | 500 × výška | 18 | 2 |
| Predný / zadný dielec | 502 × výška | 18 | 2 |
| Dno | 535 × 497 | 3 | 1 |

**Kolieskový.** Vôľa 12,5 mm na stranu dáva box 564 − 25 = **539 mm**, takže predný a zadný dielec sú 503 mm. Ostatné ako vyššie.

**Modern Box.** Dno 564 − 86 = **478 mm** široké a 500 − 24 = **476 mm** dlhé; chrbát 564 − 97 = **467 mm** široký. **Modern Box PRO**: dno **489 × 476**, chrbát **477** mm. Výška chrbta ide podľa výšky boxu, ktorý ste kúpili, podľa tabuľky z katalógu.

## Výška boku boxu

Výška boku dreveného boxu sa volí podľa výšky čela a podľa toho, čo ide do zásuvky: pre guľôčkové výsuvy sú bežné M 85, K 120, C 150 a F 180 mm, pre kolieskové 85/120/150. Horná zásuvka pod priečkou dostáva zvyčajne najnižší box, spodná najvyšší. Pravidlo, ktoré program nedovolí porušiť: **box nikdy cez dielec nad ním**. Pri spodnej skrinke pod pracovnou doskou stoja nad hornou zásuvkou dve priečky vysoké 100 mm, takže horný box sa musí zmestiť pod ne, bez ohľadu na to, aké vysoké je čelo. [Zásuvky](../recnik/fioka-i-vodjica.html) sa počítajú zhora, takže „prvá zásuvka“ je vždy tá pod priečkou.

## Časté chyby

- Vôľa odpočítaná len raz namiesto z oboch strán: box 551 namiesto 538, nevojde.
- Otvor meraný cez vonkajšiu šírku korpusu (600) namiesto medzi bokmi (564).
- Dĺžka výsuvu volená podľa vonkajšej hĺbky korpusu (560) namiesto vnútornej (539).
- Vzorec kovového boxu použitý na šírku boxu, a nie na svetlý otvor.
- Zabudnutá [škára čela](../recnik/zazor-fronta.html): 3 mm medzi susednými čelami a 1,5 mm na hranu skrinky, takže sa čelá zásuviek odierajú o seba.
- Hrana: čelo zásuvky sa olepuje na všetkých štyroch hranách páskou 1 mm a boky dreveného boxu len na hornej hrane 0,45 mm; kto olepí box zo všetkých strán, zmení mu rozmer. Viac v návode [o hrane](./kant-debljina-i-duzina.html).

## Ako to robí TOPICA

V programe zásuvku nepočítate: na korpuse kliknete „Zásuvky“ s plus a mínus, zadáte, koľko ich je, a box, dno a výsuv sa odvodia zo svetlého otvoru a hĺbky podľa pravidiel vyššie. Výsuv je predvolene GTV, najväčšia dĺžka, ktorá sa zmestí; keď zmeníte hĺbku korpusu z 560 na 500, výsuv a box dostanú nové rozmery a s nimi aj [nárezový plán](./krojna-lista.html).

![Spodný korpus s tromi zásuvkami 600 × 720 × 560 mm v programe TOPICA: 3D pohľad pri stene, panel s počtom zásuviek a výberom hrany, materiálu a úchytiek](../slike/web/snimak-13-korpus-sa-fiokama-1600.webp "Tri zásuvky na jednom korpuse: počet meníte tlačidlom, box a výsuv počíta program.")

Zásuvka je najdrahšie miesto na chybu v kuchyni, pretože chybu vidno, až keď sú výsuvy priskrutkované a čelo zavesené. Preto sa počíta pred rezaním, nie po ňom.
