---
naslov: Škára čela
opis: Škára čela je medzera medzi susednými čelami (3 mm) a od hrany skrinky (1,5 mm). Ako sa počíta rozmer čela, príklad 600 → 597, a časté chyby.
datum: 2026-11-04
slika: ../slike/web/isecak-front-1600.webp
status: za-proveru
---

Škára čela je medzera medzi dvoma susednými čelami a medzi čelom a hranou skrinky, ktorá necháva miesto, aby sa dvierka a zásuvky otvárali bez odierania. Bez škáry sa čelá dotýkajú a každý milimeter krivej podlahy vidno na špáre.

## Štandardné rozmery

- **3 mm** medzi dvoma susednými čelami (program).
- **1,5 mm** na hranu skrinky, takže dva susedné korpusy dajú opäť 3 mm medzi svojimi čelami.
- Príklad: [korpus](./korpus.html) šírky 600 s jednými dvierkami → čelo **597 mm** (600 − 2 × 1,5); výška 720 → čelo **717 mm**.
- Dve krídla na 800: 800 − 2 × 1,5 − 3 = 794, na krídlo **397 mm**.
- Pri [Gola profile](./gola-rucka.html) škáru diktuje profil, pri [push systéme](./push-sistem.html) je väčšia o zdvih vyhadzovača (približne 2–3 mm).

## V dielni

Škára sa reže do čela, nenecháva sa na montáž: čelo je vždy menšie než korpus o škáru a dvierka sa potom na závese nastavia do hĺbky, do strany a do výšky, aby boli špáry rovnaké. Častá chyba: čelo v plnom rozmere korpusu (600 × 720), takže sa dvierka susedných skriniek odierajú a musia sa rezať, a rezanie odoberie hranu. Druhá: škára 3 mm a k tomu ešte hrúbka hrany navyše; rozmer v nárezovom pláne je čistý po olepení, takže 597 znamená 597 s hranou. Tretia: iná škára v hornom a spodnom rade, takže línie špár nejdú nad sebou.

![Výrez čela z programu TOPICA s rozmermi a škárou k hrane korpusu](../slike/web/isecak-front-1600.webp "Čelo je menšie než korpus o škáru z každej strany.")

## Ako to robí TOPICA

Škára stojí na jednom mieste v nastaveniach (3 / 1,5 mm) a program ju započíta do rozmeru každého [čela](./front.html) a do nárezového plánu; keď zmeníte delenie čela, škáry sa prepočítajú ([ako funguje](../#kako-radi)).

Tri milimetre sú malý rozmer, kým chýbajú.
