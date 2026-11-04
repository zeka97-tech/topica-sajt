---
naslov: Hrana (ABS)
opis: Hrana je ABS páska, která kryje řeznou hranu LTD: 0,45 mm na korpus, 1 mm na dvířka, 2 mm na namáhané hrany. Které hrany se olepují a jak se počítá délka hrany.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

**Hrana** (ABS hrana, hranovací páska) je páska, která se lepí na řeznou hranu LTD, aby zakryla surovou stranu desky, chránila ji před vlhkostí a nárazem a aby dílec vypadal hotově. Hrana nemění rozměr v nářezovém plánu, když se pracuje s čistým rozměrem, ale mění cenu, čas a seznam hran, které musí truhlář zpracovat.

## Standardní rozměry

- **0,45 mm**: viditelné hrany korpusu a přední hrana police; tenká, levná, sleduje barvu desky.
- **1 mm**: dvířka, všechny čtyři hrany.
- **2 mm**: dveře šatních skříní, pracovní desky a další více namáhané hrany; zaoblená, snese nárazy.
- Nářezový rozměr je **čistý po olepení** (v programu výchozí): [dvířka](./front.html) 597 s hranou 1 mm z obou stran se řežou na 595. Kdo pracuje s hrubým rozměrem, řeže na 597 a dostane 599.
- Délka hrany = součet olepovaných hran + **10 % odpadu** (nastavitelné). Dvířka 717 × 597 se čtyřmi hranami: 2 × 717 + 2 × 597 = 2628 mm, s odpadem ≈ 2,9 m.

Více o volbě tloušťky a výpočtu délky v návodu [Hrana: tloušťka a délka](../blog/kant-debljina-i-duzina.html).

## V dílně

Korpus se olepuje zepředu před montáží, dvířka ze všech čtyř stran před vrtáním. Na olepovačce jdou obvykle nejdřív kratší hrany, pak delší, aby spoj v rohu směřoval na stranu, která je méně vidět. Častá chyba: zapomenutá hrana na spodní hraně [příčky](./precka.html) nebo na přední hraně dna za dvířky; druhá je míchání čistého a hrubého rozměru, takže jsou všechna dvířka o 2 mm širší a spára 3 mm zmizí.

![Tabulka „Podle rozměru" v programu TOPICA: pro každý dílec rozměr, tloušťka, hrana (1 dlouhá, 2 dlouhé, 2 dlouhé a 2 krátké, žádná) a počet kusů, seskupeno podle materiálu](../slike/web/isecak-po-meri-tabela-1600.webp "Sloupec „Hrana" říká, které hrany se olepují: bok jednu dlouhou, příčka dvě, dvířka všechny čtyři, sololit nic.")

## Jak to dělá TOPICA

Pro každý dílec program zapíše, které hrany nesou pásku a jaké tloušťky, sečte délku podle tloušťky s odpadem a započítá cenu, kterou jste zadali ([funkce](../#mogucnosti)). Ve 3D se hrana jen označí; rozměr zůstává čistý.

Hrana je půl milimetru plastu, který rozhoduje, jestli kuchyň vypadá jako nábytek, nebo jako prkna.
