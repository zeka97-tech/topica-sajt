---
naslov: LTD 18 mm (laminovaná drevotrieska)
opis: LTD 18 mm (laminovaná drevotrieska) je základná doska plošného nábytku. Hrúbky, bežné formáty dosiek, nárez a časté chyby pri výpočte materiálu.
datum: 2026-11-04
slika: ../slike/web/snimak-46-izbliza-front-1600.webp
status: za-proveru
---

Drevotrieska je doska z lisovaných drevných triesok a lepidla; laminovaná drevotrieska (LTD) má z oboch strán zalisovaný dekoračný papier, takže je hotová na korpus aj čelo bez lakovania. Je to základný materiál plošného nábytku: sú z nej boky, dno, police, priečky a čelá a hrany sa uzatvárajú [ABS hranou](./kant.html).

## Štandardné rozmery

- Hrúbka **18 mm** na korpus a čelo; varianty 16, 19 a 25 mm.
- Bežné formáty dosiek: **2800 × 2070 mm** (Egger) alebo **2750 × 1830 mm** (Kronospan, Kastamonu); prvý je približne 5,8 m², druhý približne 5,0 m².
- Chrbát nie je LTD, ale **sololit (HDF) 3 mm**.
- Hrana **0,45 mm** na viditeľných hranách korpusu, **1 mm** na čele.

## V dielni

Doska sa reže podľa nárezového plánu a potom sa olepujú hrany. Dekor s kresbou má smer, takže dielce s dekorom sa na doske ukladajú len jedným smerom, biela LTD tak, aby bol menší odpad. Rez bez predrezu trhá dekor na spodnej strane; preto sa reže formátovacou pílou s predrezom, a ak nie je, viditeľná strana sa otočí nahor. Častá chyba: spotreba sa počíta podľa m² dielcov bez odpadu, takže nakoniec chýba pol dosky; aký je odpad, závisí od toho, ako dobre sa rozmery dielcov skladajú pozdĺž dlhej hrany dosky. Druhá: dosky dvoch výrobcov v „rovnakej“ bielej, ktoré na svetle rovnaké nie sú.

![Čelo z laminovanej drevotriesky zblízka v 3D pohľade programu TOPICA, s viditeľným dekorom a hranou](../slike/web/snimak-46-izbliza-front-1600.webp "Dekor a hrana tak, ako budú stáť na hotovom čele.")

## Ako to robí TOPICA

Program vedie materiál podľa hrúbky a dekoru, sčíta m² všetkých dielcov v [nárezovom pláne](./krojna-lista.html) a vynásobí ich cenou, ktorú ste zadali ([funkcie](../#mogucnosti)); rozmiestnenie dielcov na doske (nesting) v tejto verzii nerobí.

Doska je pre všetkých rovnaká; rozdiel je v tom, koľko z nej skončí v korpuse a koľko v odpade.
