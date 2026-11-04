---
naslov: Pre montérov a tých, ktorí si dávajú rezať
opis: Program pre montérov kuchýň a majstrov, ktorí si dávajú rezať v nárezovom centre: plán „Podľa rozmeru“ na kopírovanie, kovanie za kus, projekt ako jeden súbor.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Čoraz viac majstrov pracuje bez vlastnej formátovacej píly: zamerajú u zákazníka, objednajú nárez a olepenie v nárezovom centre a potom skladajú a montujú. Tu je nárezový plán jediný papier, ktorý ide z vašich rúk do cudzích. Keď je správny, centrum vám nevolá; keď nie je, chyba sa ukáže až pri montáži. TOPICA robí tento plán z projektu, a nie z vášho zošita.

## Plán, ktorému nárezové centrum rozumie

Pohľad „Podľa rozmeru“ dá rovnaké rozmery v jednom riadku, zoskupené podľa materiálu a hrúbky, s označením [hrany](../recnik/kant.html) a počtom kusov, presne tak, ako sa reže: najprv biela LTD 18 mm, potom čelá, potom sololit. Prvý rozmer je smer kresby, takže čelá sú zapísané nastojato a sololit nesie označenie „bez smeru“; centrum nemusí hádať, ako je kresba otočená. Rozmery sú čisté, po olepení, čo je v programe predvolené a oplatí sa to centru povedať v prvej správe. Plán skopírujete jedným kliknutím a pošlete správou alebo e-mailom, alebo ho vytlačíte do PDF. Čo znamená každý riadok, je v slovníku pod heslom [nárezový plán](../recnik/krojna-lista.html).

## Príklad: čo odíde v správe

Spodný korpus 600 × 720 × 560 s dvierkami a policou, osem dielcov:

| Dielec | Rozmer (mm) | Hr. | Hrana | Ks |
|---|---|---|---|---|
| Bok | 702 × 539 | 18 | 1 dlhá | 2 |
| Dno | 600 × 539 | 18 | 1 dlhá | 1 |
| Polica | 562 × 519 | 18 | 1 dlhá | 1 |
| Priečka | 564 × 100 | 18 | 2 dlhé | 2 |
| Čelo | 717 × 597 | 18 | 2 dlhé, 2 krátke | 1 |
| Chrbát (sololit) | 717 × 597 | 3 | žiadna | 1 |

Kuchyňa s dvanástimi skrinkami je stovka takýchto riadkov. Program ich zostaví pre všetky korpusy spolu a k nim dá celkovú spotrebu dosiek v m² a dĺžku hrany s 10 % odpadu, takže viete, koľko dosiek a koľko metrov pásky objednať.

![Tabuľka „Podľa rozmeru“ z programu TOPICA: riadky dielcov s rozmerom v milimetroch, hrúbkou, označením hrany a počtom kusov, zoskupené podľa materiálu](../slike/web/isecak-po-meri-tabela-1600.webp "Takto vyzerá to, čo kopírujete a posielate na pílu.")

## Kovanie a materiál pred cestou do predajne

Montér kupuje kovanie sám a kupuje ho raz. Program k zoznamu dielcov dá aj zoznam kovania: [závesy](../recnik/sarka.html) podľa výšky čela (do 900 mm dva, do 1600 tri), [výsuvy](../recnik/fioka-i-vodjica.html) ako najväčšiu nominálnu dĺžku, ktorá sa zmestí do hĺbky korpusu, nožičky štyri na skrinku do šírky 800 mm a šesť nad ňu, podperky políc podľa System 32. Nič z toho neopisujete z výkresu.

## Projekt je jeden súbor

Žiadny účet ani server: projekt je súbor vo vašom počítači. Pošlete ho kolegovi, ktorý reže, vezmete si ho na notebooku na montáž a tam otvoríte 3D s kótami k stene, k susedovi a od podlahy, a zákazníkovi ukážete, kam čo príde, skôr než vyvŕtate prvý otvor. Ako sa priestor zameria, aby bol plán správny, je v návode [ako zamerať kuchyňu](../blog/kako-izmeriti-kuhinju.html); čo ešte program dáva, je vo [funkciách](../#mogucnosti).

## Čo program v tejto verzii nerobí

Nevytvára CNC súbor ani optimalizáciu nárezu (nesting). To robí nárezové centrum vo svojom programe a na svojej píle; ono potrebuje presný plán, a ten dostávate. Celá cesta od miestnosti k tomuto plánu sú [tri kroky](../#kako-radi).

Najbližší plán pre nárezové centrum urobte v programe a porovnajte ho s tým zo zošita.
