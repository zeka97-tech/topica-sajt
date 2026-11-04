---
naslov: Koľko stojí kuchyňa na mieru — ako majster počíta cenu
opis: Cena kuchyne na mieru sa skladá z materiálu za m², hrany za meter, kovania za kus, práce a marže. Čo vstupuje do výpočtu, na čo sa zabúda a ako program sčítava z cien, ktoré zadá majster.
datum: 2026-11-04
slika: ../slike/web/snimak-37-cena-1600.webp
status: za-proveru
---

Cena kuchyne na mieru nie je jedno číslo z hlavy, ale súčet piatich položiek: materiál, hrana, kovanie, práca a marža. Kto počíta takto, vie, prečo je cena taká, aká je, a dokáže ju pred zákazníkom obhájiť. Kto počíta „na bežný meter“ od oka, pochodí dobre na jednoduchej kuchyni a prerobí na tej so zásuvkami a vysokými skrinkami. Tu nie sú ceny v dinároch ani v eurách, pretože ich má každá dielňa vlastné; tu je spôsob, akým sa tieto ceny skladajú.

## 1. Materiál: metre štvorcové dosky, podľa druhu

Najprv sa spočítajú metre štvorcové každého druhu dosky zvlášť, pretože sa aj kupujú zvlášť: biela [LTD](../recnik/iverica.html) 18 mm na korpusy, dekor 18 mm na čelá, sololit 3 mm na chrbát a dná zásuviek, pracovná doska 38 mm na bežný meter. Plocha sa získa z [nárezového plánu](./krojna-lista.html): dĺžka × šírka × kusy, sčítané podľa materiálu. Príklad z programu: jeden spodný korpus 600 × 720 × 560 má 8 dielcov a 2,34 m² dosky, z toho 1,48 m² bielej LTD, 0,43 m² dekoru na čelo a 0,43 m² sololitu.

Táto plocha je čistá. Doska sa nevyužije celá: bežné formáty dosiek sú 2800 × 2070 mm alebo 2750 × 1830 mm a po náreze zostane odpad z rezov, okrajov a kusov, ktoré sa nikam nezmestia. Reálne **využitie dosky je približne 80 %**, takže čisté metre štvorcové delíte 0,8, aby ste dostali, koľko dosky naozaj kupujete. Kuchyňa s 10 m² čistej bielej LTD žiada približne 12,5 m² kúpenej dosky. Kto účtuje len čisté, platí odpad z vlastného vrecka.

## 2. Hrana: bežné metre plus odpad

[Hrana](../recnik/kant.html) sa počíta na bežný meter, zvlášť pre každú hrúbku, pretože aj ceny sú rôzne: 0,45 mm na viditeľné hrany korpusu a políc, 1 mm na čelá na všetky štyri hrany, 2 mm na viac namáhané hrany. Dĺžka je súčet všetkých olepených hrán z nárezového plánu plus **10 % odpadu** na začiatok a koniec pásky a na nepodarky. Čelo 717 × 597 nesie samo 2,63 m hrany 1 mm; na dvadsiatich čelách je to viac než 50 m, čo nie je maličkosť. Podrobnosti sú v návode [o hrúbke a dĺžke hrany](./kant-debljina-i-duzina.html).

## 3. Kovanie: za kus, zo zoznamu

Kovanie sa počíta, neodhaduje. Zoznam pre bežnú kuchyňu: závesy (čelo do výšky 900 mm nesie 2, do 1600 tri, do 2000 štyri), výsuvy alebo kovové boxy na zásuvku, nožičky (4 kusy do šírky 800 mm, 6 nad ňu), úchytky na čelo, excentre a kolíky alebo konfirmáty na spoj, spony sokla, závesné kovanie horných skriniek, podperky políc. Každá položka má cenu za kus z katalógu dodávateľa a počet kusov z projektu. Zásuvky sú tu najdrahšie: jedna skrinka s tromi zásuvkami na kovových boxoch stojí v kovaní viac než tri skrinky s dvierkami.

## 4. Práca: za skrinku alebo za meter štvorcový čela

Dva bežné spôsoby. **Za skrinku**: každý korpus, spodný alebo horný, nesie rovnakú sumu práce a zložitejšie (zásuvky, rohové, rúra) príplatok. Jednoduché a rýchle, dobré pre kuchyne v rade. **Za m² čela**: práca sa počíta na plochu čiel, takže veľký šatník nesie viac než malá horná skrinka. Presnejšie pre šatníky a vysoké skrinky. Nech vyberiete ktorýkoľvek, do práce vstupuje nárez, olepovanie, vŕtanie, skladanie a skúška v dielni. Montáž u zákazníka je samostatná položka, pozri nižšie.

## 5. Marža

Na súčet materiálu, hrany, kovania a práce ide **marža v percentách**. Nie je to zárobok majstra, pretože práca je už zaplatená; pokrýva to, čo v projekte nevidno: náradie, elektrinu, stroje, ktoré sa opotrebúvajú, dni bez práce a riziko, že sa niečo pokazí. Dielňa, ktorá pracuje bez marže, pracuje za mzdu, nie pre seba.

## Na čo ľudia zabúdajú

- **Doprava**: dosky od dodávateľa do dielne, hotové skrinky k zákazníkovi, dvakrát dodávka.
- **Montáž**: deň alebo dva u zákazníka, s nosením na poschodie, vyrovnávaním, výrezom pre drez a varnú dosku podľa šablóny výrobcu.
- **Odpad**: tých 20 % dosky a 10 % hrany; a sololit, na ktorý všetci zabudnú, lebo je lacný.
- **Zmeny**: zákazník, ktorý trikrát zmení dekor alebo pridá zásuvku; každá zmena je nový výpočet a, ak je doska už narezaná, nová doska.
- **Drobnosti**: skrutky, kolíky, lepidlo, silikón, lišty pracovnej dosky, soklová lišta; jednotlivo nič, spolu citeľné.
- **Služby**: rezanie a olepovanie u iného, ak nemáte vlastné stroje.
- **Spotrebiče a pracovná doska**: kto ich obstaráva, kto ich zabudováva a kto zodpovedá, ak výrez nesedí.

Kto má zoznam, nemá prekvapenia; kto ho nemá, vidí ich na konci práce, keď je neskoro ich účtovať.

## Ako to robí TOPICA

Program nepozná vaše ceny a nevymýšľa si ich. V **Nastaveniach dielne**, pod „Materiály a ceny“, zadávate cenu dosiek podľa druhu, hranu za meter pre každú hrúbku (0,4; 0,45; 0,8; 1 a 2 mm), kovanie za kus, **prácu za skrinku** a **maržu** v percentách. Pole, ktoré ste nevyplnili, píše „nie je zadaná“ a počíta sa ako nula, bez upozornenia, takže cena vo výkaze nikdy neobsahuje číslo, ktoré ste nedali vy. Keď sú ceny raz zadané, program pre každý projekt sčíta metre štvorcové podľa materiálu, metre hrany s odpadom, kovanie za kus a prácu za skrinku, pridá maržu a vo Výkazoch, karta „Cena“, dá cenu za projekt, vedľa kariet „Materiály“ a „Kovanie“, kde vidno, z čoho je zložená. Zmeníte šírku skrinky alebo pridáte zásuvku, cena sa zmení v tej chvíli. Prehľad, čo všetko program dáva, je v časti [Funkcie](../#mogucnosti).

![Nastavenia dielne v programe TOPICA, časť „Cena a ponuka“: polia pre prácu za skrinku a maržu v percentách, hranu za meter pre 0,4 až 2 mm a diely digestora, nezadané polia označené „nie je zadaná“](../slike/web/snimak-37-cena-1600.webp "Ceny zadáva majster, raz pre dielňu; nezadané je nula, program nič nepredpokladá.")

Cena kuchyne na mieru je súčet, ktorý môžete ukázať na papieri, položku po položke. Keď ho program sčíta z vašich cien, zostáva vám len to, čo program nedokáže: odhadnúť zákazníka a rozhodnúť, ako veľmi tú zákazku chcete.
