---
naslov: ABS rob (robni trak)
opis: ABS rob je robni trak, ki pokrije rob iverke: 0,45 mm za korpus, 1 mm za fronte, 2 mm za bolj obremenjene robove. Kateri robovi se obrobijo in kako se računa dolžina roba.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

**ABS rob** (robni trak) je trak, ki se nalepi na rob iverke, da pokrije surovo stran plošče, jo zaščiti pred vlago in udarci ter da plošča izgleda dokončano. Rob ne spremeni mere v razreznem seznamu, kadar se dela po neto meri, spremeni pa ceno, čas in seznam robov, ki jih mora mojster obdelati.

## Standardne mere

- **0,45 mm**: vidni robovi korpusa in sprednji rob police; tanek, poceni, sledi barvi plošče.
- **1 mm**: fronte, vsi štirje robovi.
- **2 mm**: vrata omar, delovni pulti in drugi bolj obremenjeni robovi; zaobljen, prenese udarce.
- Razrezna mera je **neto po robu** (privzeto v programu): [fronta](./front.html) 597 z robom 1 mm na obeh straneh se reže na 595. Kdor dela z bruto mero, reže na 597 in dobi 599.
- Dolžina roba = vsota obrobljenih robov + **10 % odpadka** (nastavljivo). Fronta 717 × 597 s štirimi robovi: 2 × 717 + 2 × 597 = 2628 mm, z odpadkom ≈ 2,9 m.

Več o izbiri debeline in računu dolžine v vodniku [ABS rob: debelina in dolžina](../blog/kant-debljina-i-duzina.html).

## V delavnici

Korpus se obrobi spredaj pred sestavljanjem, fronta z vseh štirih strani pred vrtanjem. Na robilnem stroju gredo običajno najprej krajši robovi, nato daljši, da spoj v vogalu gleda na stran, ki se manj vidi. Pogosta napaka: pozabljen rob na spodnjem robu [prečke](./precka.html) ali na sprednjem robu dna za vrati; druga je mešanje neto in bruto mere, zato so vse fronte širše za 2 mm in reža 3 mm izgine.

![Tabela „Po meri" v programu TOPICA: za vsako ploščo mera, debelina, rob (1 dolga, 2 dolgi, 2 dolgi in 2 kratki, brez) in število kosov, združeno po materialu](../slike/web/isecak-po-meri-tabela-1600.webp "Stolpec „Rob" pove, kateri robovi se obrobijo: stranica en dolg, prečka dva, fronta vse štiri, lesonit nič.")

## Kako to naredi TOPICA

Za vsako ploščo program vpiše, kateri robovi nosijo rob in katere debeline, sešteje dolžino po debelini z odpadkom in upošteva ceno, ki ste jo vpisali ([funkcije](../#mogucnosti)). V 3D se rob samo označi; mera ostane neto.

Rob je pol milimetra plastike, ki odloči, ali kuhinja izgleda kot pohištvo ali kot plošče.
