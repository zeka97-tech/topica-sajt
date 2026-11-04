---
naslov: Élzárás (élzáró)
opis: Az élzáró ABS szalag, amely a bútorlap élét fedi: 0,45 mm a korpuszra, 1 mm a frontokra, 2 mm az erősebb élekre. Mely éleket zárják, és hogyan számolják az élzáró hosszát.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Az **élzáró** ABS szalag, amelyet a bútorlap élére ragasztanak, hogy fedje a lap nyers oldalát, védje a nedvességtől és az ütéstől, és a lap késznek nézzen ki. Az élzárás nem változtatja meg a szabásjegyzék méretét, ha nettó méretre dolgoznak, de megváltoztatja az árat, az időt és az élek listáját, amelyeket a mesternek meg kell munkálnia.

## Szabványos méretek

- **0,45 mm**: a korpusz látszó élei és a polc elülső éle; vékony, olcsó, követi a lap színét.
- **1 mm**: frontok, mind a négy él.
- **2 mm**: gardróbajtók, munkalapok és más erősebben igénybe vett élek; lekerekített, bírja az ütést.
- A szabásméret **nettó, élzárás után** (a programban alapértelmezett): az 597-es [front](./front.html) 1 mm-es élzáróval mindkét oldalon 595-re szabódik. Aki bruttó méretre dolgozik, 597-re szab, és 599-et kap.
- Az élzáró hossza = az élzárt élek összege + **10 % hulladék** (állítható). 717 × 597-es front négy éllel: 2 × 717 + 2 × 597 = 2628 mm, hulladékkal ≈ 2,9 m.

Többet a vastagság kiválasztásáról és a hossz számításáról az [Élzárás: vastagság és hossz](../blog/kant-debljina-i-duzina.html) útmutatóban.

## A műhelyben

A korpuszt elöl élzárják összeszerelés előtt, a frontot mind a négy oldalon a fúrás előtt. Az élzárógépen általában először a rövidebb élek mennek, aztán a hosszabbak, hogy a sarokillesztés a kevésbé látszó oldalra nézzen. Gyakori hiba: elfelejtett élzárás a [heveder](./precka.html) alsó élén vagy a fenéklap elülső élén az ajtó mögött; a másik a nettó és bruttó méret keverése, így minden front 2 mm-rel szélesebb, és a 3 mm-es hézag eltűnik.

![„Méret szerint” táblázat a TOPICA programban: minden laphoz méret, vastagság, élzárás (1 hosszú, 2 hosszú, 2 hosszú és 2 rövid, nincs) és darabszám, anyag szerint csoportosítva](../slike/web/isecak-po-meri-tabela-1600.webp "Az „Élzárás” oszlop mondja meg, mely éleket zárják: oldal egy hosszút, heveder kettőt, front mind a négyet, farostlemez semmit.")

## Hogyan csinálja a TOPICA

A program minden laphoz beírja, mely élek kapnak élzárót és milyen vastagságban, vastagságonként összeadja a hosszt a hulladékkal, és beszámítja a beírt árat ([funkciók](../#mogucnosti)). A 3D-ben az élzárás csak jelölve van; a méret nettó marad.

Az élzáró fél milliméter műanyag, amely eldönti, hogy a konyha bútornak néz-e ki, vagy lapoknak.
