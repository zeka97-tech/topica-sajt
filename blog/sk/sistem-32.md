---
naslov: System 32: prečo má európsky nábytok otvory po 32 mm
opis: System 32 je rad otvorov Ø5 mm s rozstupom 32 mm, prvý 37 mm od prednej hrany boku. Odkiaľ pochádza, ako z neho idú police, závesy a výsuvy, vŕtanie bez CNC.
datum: 2026-11-04
slika: ../slike/web/snimak-52-ruka-jedna-vrata-1600.webp
status: za-proveru
---

System 32 je dohoda, podľa ktorej sa na boku korpusu vŕtajú otvory priemeru 5 mm v rade, s rozstupom 32 mm, tak, aby do rovnakých otvorov sadli podperky políc, podložky závesov a výsuvy zásuviek. Nie je to zákon ani norma s pečiatkou, ale konvencia, ktorú dodržiavajú výrobcovia kovania (Blum, Hettich, Grass, GTV) a výrobcovia vŕtačiek. Kto ju dodržiava, môže kúpiť kovanie od ktoréhokoľvek z nich a sadne do otvorov, ktoré už vyvŕtal.

## Odkiaľ práve 32 mm

Rozstup nebol vybraný preto, že je to pekné číslo. Keď sa plošný nábytok v Európe rozbehol v sérii, vŕtal sa na viacvretenových vŕtačkách: rad vretien, ktorý jedným spustením vyvŕta celý rad otvorov. Vretená poháňajú ozubené kolesá, ktoré sa dotýkajú, a najmenší rozstup osí, na aký sa dali ozubené kolesá vtedy zmestiť, bol 32 mm. Stroj dal raster a výrobcovia kovania naň oprel svoje podperky, podložky a výsuvy. Tak sa rozstup ozubených kolies stal rozstupom nábytku a zostal dodnes, aj na CNC vŕtačkách, ktoré tento dôvod už nepotrebujú.

Rozmer **37 mm** od prednej hrany [boku](../recnik/bok.html) po os prvého radu je druhá časť dohody. Je zladený s podložkou závesu a predným koncom výsuvu, takže ten istý rad otvorov slúži aj policiam, aj kovaniu. Zadný rad je 37 mm od zadnej hrany alebo na 37 + n·32 od prednej, aby výsuv sadol do rastra oboma koncami.

## Tri čísla, ktoré si treba zapamätať

- **Ø5 mm**: priemer otvoru. Tŕň podperky police vojde priamo, podložka závesu a výsuv sa skrutkujú euroskrutkou určenou pre otvor 5 mm.
- **32 mm**: rozstup medzi osami susedných otvorov v rade. Nie 30, nie 35; každý iný rozstup znamená, že polica stojí nakrivo alebo kovanie nesadne.
- **37 mm**: os predného radu od prednej hrany boku. Meria sa od hrany hotového boku, po [olepení](../recnik/kant.html).

## Čo sa zo systému odvodzuje

**Police.** Podperka [police](../recnik/polica.html) ide do ktoréhokoľvek otvoru predného a zadného radu, takže sa polica prestavuje v kroku 32 mm. Zákazník si neskôr policu prestaví sám a zostane rovná, pretože sú všetky štyri otvory v rovnakej výške.

**Závesy.** Podložka [závesu](../recnik/sarka.html) sa skrutkuje do predného radu, na 37 mm. Miska Ø35 sa vŕta do čela do hĺbky 12,5–13 mm, s osou 21,5–22,5 mm od hrany čela (vzdialenosť K od 3 do 6 mm, podľa katalógu závesu). Počet závesov ide podľa výšky čela: do 900 mm dva, do 1600 tri, do 2000 štyri, nad to päť. Misky sú 100 mm od hornej a dolnej hrany čela, ostatné rovnomerne medzi nimi.

**Výsuvy.** Predný koniec výsuvu ide do predného radu, zadný do zadného. Preto musí byť zadný rad v rastri od predného; ak nie je, výsuv stojí šikmo a [zásuvka](../recnik/fioka-i-vodjica.html) drie. Výška, v ktorej sa výsuv skrutkuje, závisí od systému zásuvky a berie sa z návodu výrobcu, ale vždy je to niektorý z otvorov v rade.

## Ako sa vŕta bez CNC

Nepotrebujete stroj, potrebujete šablónu. Najjednoduchšia je lišta z tvrdého dreva alebo hliníka s otvormi Ø5 presne po 32 mm a s dorazom, ktorý dosadne na prednú hranu boku tak, aby prvý rad padol na 37 mm. Existujú aj kupované šablóny s oceľovými puzdrami, ktoré sa za pár mesiacov nevyvŕtajú ako drevené. Postup je vždy rovnaký:

1. Bok na stôl, vnútorná strana hore, predná hrana k vám.
2. Doraz šablóny k prednej hrane, šablónu zarovnajte po výške rovnakým spôsobom pri všetkých bokoch v projekte.
3. Vŕtajte s hĺbkovým dorazom; bok má 18 mm a nemá rezervu.
4. Druhý bok vŕtajte zrkadlovo: predná hrana opäť pri doraze, vnútorná strana opäť hore.

Krok, ktorý sa najviac oplatí: šablónu urobte dlhšiu, než potrebujete, a vŕtajte celý bok naraz, bez prekladania. Každé prekladanie je príležitosť, aby rad ušiel o milimeter.

![Spodný kuchynský korpus 600 × 720 × 560 mm s jednými dvierkami a jednou policou v programe TOPICA; vpravo panel s počtom dvierok, označením „Závesy vľavo“ a počtom políc](../slike/web/snimak-52-ruka-jedna-vrata-1600.webp "Jedny dvierka, jedna polica: program sám určí závesy a podložky podľa System 32.")

## Časté chyby

- **Nesprávna hrana.** Rad vyvŕtaný 37 mm od zadnej hrany namiesto od prednej. Polica sadne, záves nie.
- **Boky nie sú zrkadlové.** Oba boky vŕtané z rovnakej strany, takže jeden má otvory zvonka. Pravidlo: vnútorná strana hore, predná hrana pri doraze, bez výnimky.
- **Sčítavanie metrom.** Kto meria 32, potom ešte 32, potom ešte 32, nazbiera chybu pol milimetra na otvor. Meria sa od jednej nuly alebo sa použije šablóna.
- **Prevŕtaný dielec.** Bez hĺbkového dorazu otvor vyjde na pohľadovej strane. Zvlášť to bolí na [krycom boku](../recnik/ukrasna-strana.html) v dekore čela.
- **Rôzna nula na dvoch bokoch.** Šablóna na ľavom boku opretá od dna, na pravom od vrchu. Otvory sú po 32 mm, ale nie v rovnakej výške.

## Ako to robí TOPICA

Program nevŕta a nemá CNC export; jeho úlohou je, aby boli rozmery správne skôr, než prídete k vŕtačke. Závesy počíta podľa výšky čela, polohu podložky drží na 37 mm, výsuv volí ako najväčšiu nominálnu dĺžku, ktorá sa zmestí do hĺbky korpusu, a všetko to vyjde v zozname kovania vedľa [nárezového plánu](./krojna-lista.html). Ako sa z miestnosti dostanete k tomuto zoznamu, vidno v časti [ako funguje](../#kako-radi).

System 32 nie je teória pre školu: je to dôvod, prečo polica, ktorú zákazník prestaví o jeden rad, zostane rovná, a záves, ktorý kúpite o dva roky, sadne do starého otvoru. Tri čísla a jedna dobrá šablóna sú celá práca.
