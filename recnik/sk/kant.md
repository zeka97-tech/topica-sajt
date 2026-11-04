---
naslov: ABS hrana
opis: ABS hrana je páska, ktorá zakrýva hranu LTD: 0,45 mm na korpus, 1 mm na čelá, 2 mm na namáhané hrany. Ktoré hrany sa olepujú a ako sa počíta dĺžka hrany.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

**Hrana** (ABS hrana, hranovacia páska) je páska, ktorá sa lepí na hranu LTD, aby zakryla surovú stranu dosky, chránila ju pred vlhkosťou a nárazom a aby dielec vyzeral hotovo. Hrana nemení rozmer v nárezovom pláne, keď sa pracuje s čistým rozmerom, ale mení cenu, čas a zoznam hrán, ktoré musí majster opracovať.

## Štandardné rozmery

- **0,45 mm**: viditeľné hrany korpusu a predná hrana police; tenká, lacná, sleduje farbu dosky.
- **1 mm**: čelá, všetky štyri hrany.
- **2 mm**: dvere šatníka, pracovné dosky a iné viac namáhané hrany; zaoblená, znesie nárazy.
- Nárezový rozmer je **čistý po olepení** (v programe predvolené): [čelo](./front.html) 597 s hranou 1 mm z oboch strán sa reže na 595. Kto pracuje s hrubým rozmerom, reže na 597 a dostane 599.
- Dĺžka hrany = súčet olepených hrán + **10 % odpadu** (nastaviteľné). Čelo 717 × 597 so štyrmi hranami: 2 × 717 + 2 × 597 = 2628 mm, s odpadom ≈ 2,9 m.

Viac o výbere hrúbky a výpočte dĺžky v návode [Hrana: hrúbka a dĺžka](../blog/kant-debljina-i-duzina.html).

## V dielni

Korpus sa olepuje spredu pred zložením, čelo zo všetkých štyroch strán pred vŕtaním. Na olepovačke idú zvyčajne najprv kratšie hrany, potom dlhšie, aby spoj v rohu smeroval na stranu, ktorú vidno menej. Častá chyba: zabudnutá hrana na spodnej hrane [priečky](./precka.html) alebo na prednej hrane dna za dvierkami; druhá je miešanie čistého a hrubého rozmeru, takže sú všetky čelá o 2 mm širšie a škára 3 mm zmizne.

![Tabuľka „Podľa rozmeru“ v programe TOPICA: pre každý dielec rozmer, hrúbka, hrana (1 dlhá, 2 dlhé, 2 dlhé a 2 krátke, žiadna) a počet kusov, zoskupené podľa materiálu](../slike/web/isecak-po-meri-tabela-1600.webp "Stĺpec „Hrana“ hovorí, ktoré hrany sa olepujú: bok jednu dlhú, priečka dve, čelo všetky štyri, sololit žiadnu.")

## Ako to robí TOPICA

Pre každý dielec program zapíše, ktoré hrany nesú hranu a akej hrúbky, sčíta dĺžku podľa hrúbky s odpadom a započíta cenu, ktorú ste zadali ([funkcie](../#mogucnosti)). V 3D sa hrana len vyznačí; rozmer zostáva čistý.

Hrana je pol milimetra plastu, ktorý rozhoduje o tom, či kuchyňa vyzerá ako nábytok alebo ako dosky.
