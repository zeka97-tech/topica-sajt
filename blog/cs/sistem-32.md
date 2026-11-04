---
naslov: System 32: proč má evropský nábytek otvory po 32 mm
opis: System 32: řada otvorů Ø5 mm po 32 mm, první 37 mm od přední hrany boku. Odkud pochází, jak z něj plynou police, závěsy a výsuvy a jak se vrtá bez CNC.
datum: 2026-11-04
slika: ../slike/web/snimak-52-ruka-jedna-vrata-1600.webp
status: za-proveru
---

System 32 je dohoda, podle které se na boku korpusu vrtají otvory průměru 5 mm v řadě, v rozteči 32 mm, tak aby do stejných otvorů zapadly podpěrky polic, podložky závěsů i výsuvy zásuvek. Není to zákon ani norma s razítkem, ale konvence, kterou drží výrobci kování (Blum, Hettich, Grass, GTV) a výrobci vrtaček. Kdo ji dodržuje, může koupit kování od kteréhokoli z nich a zapadne do otvorů, které už vyvrtal.

## Odkud zrovna 32 mm

Rozteč nebyla vybraná proto, že je to hezké číslo. Když se deskový nábytek v Evropě rozjel do sérií, vrtal se na vícevřetenových vrtačkách: řada vřeten, která jedním spuštěním vyvrtá celou řadu otvorů. Vřetena pohánějí ozubená kola, která se dotýkají, a nejmenší rozteč os, na kterou se tehdy dala ozubená kola poskládat, byla 32 mm. Stroj dal rastr a výrobci kování na něj posadili své podpěrky, podložky a výsuvy. Tak se z rozteče ozubených kol stala rozteč nábytku a zůstala dodnes, i na CNC vrtačkách, které ten důvod už nepotřebují.

Rozměr **37 mm** od přední hrany [boku](../recnik/bok.html) k ose první řady je druhá část dohody. Je sladěný s podložkou závěsu a předním koncem výsuvu, takže stejná řada otvorů slouží policím i kování. Zadní řada je 37 mm od zadní hrany nebo na 37 + n·32 od přední, aby výsuv zapadl do rastru oběma konci.

## Tři čísla, která si zapamatovat

- **Ø5 mm**: průměr otvoru. Trn podpěrky police jde rovnou dovnitř, podložka závěsu a výsuv se šroubují eurošroubem určeným pro otvor 5 mm.
- **32 mm**: rozteč mezi osami sousedních otvorů v řadě. Ne 30, ne 35; každá jiná rozteč znamená, že police stojí nakřivo nebo kování nesedne.
- **37 mm**: osa přední řady od přední hrany boku. Měří se od hrany hotového boku, po [olepení](../recnik/kant.html).

## Co se ze systému odvozuje

**Police.** Podpěrka [police](../recnik/polica.html) jde do kteréhokoli otvoru přední a zadní řady, takže se police přestavuje po 32 mm. Zákazník si ji později přestaví sám a zůstane rovná, protože jsou všechny čtyři otvory ve stejné výšce.

**Závěsy.** Podložka [závěsu](../recnik/sarka.html) se šroubuje do přední řady, na 37 mm. Miska Ø35 se vrtá do dvířek do hloubky 12,5–13 mm, s osou 21,5–22,5 mm od hrany dvířek (odstup K od 3 do 6 mm, podle katalogu závěsu). Počet závěsů jde podle výšky dvířek: do 900 mm dva, do 1600 tři, do 2000 čtyři, nad to pět. Misky jsou 100 mm od horní a spodní hrany dvířek, ostatní rovnoměrně mezi nimi.

**Výsuvy.** Přední konec výsuvu jde do přední řady, zadní do zadní. Proto musí být zadní řada v rastru od přední; když není, výsuv stojí šikmo a [zásuvka](../recnik/fioka-i-vodjica.html) drhne. Výška, na které se výsuv šroubuje, závisí na systému zásuvky a bere se z návodu výrobce, ale vždy je to některý z otvorů v řadě.

## Jak se vrtá bez CNC

Nepotřebujete stroj, potřebujete šablonu. Nejjednodušší je lať z tvrdého dřeva nebo hliníku s otvory Ø5 přesně po 32 mm a dorazem, který dosedne na přední hranu boku tak, aby první řada padla na 37 mm. Existují i kupované šablony s ocelovými pouzdry, které se za pár měsíců nevyvrtají jako dřevěné. Postup je vždy stejný:

1. Bok na stůl, vnitřní strana nahoru, přední hrana k vám.
2. Doraz šablony k přední hraně, šablonu výškově srovnejte stejným způsobem pro všechny boky v projektu.
3. Vrtejte s hloubkovým dorazem; bok má 18 mm a žádnou rezervu.
4. Druhý bok vrtejte zrcadlově: přední hrana zase k dorazu, vnitřní strana zase nahoru.

Krok, který se vyplatí nejvíc: udělejte šablonu delší, než potřebujete, a vrtejte celý bok najednou, bez přesouvání. Každé přesunutí je příležitost, aby řada utekla o milimetr.

![Spodní kuchyňský korpus 600 × 720 × 560 mm s jedněmi dvířky a jednou policí v programu TOPICA; vpravo panel s počtem dvířek, označením „Závěsy vlevo“ a počtem polic](../slike/web/snimak-52-ruka-jedna-vrata-1600.webp "Jedna dvířka, jedna police: program sám určí závěsy a podložky podle System 32.")

## Časté chyby

- **Špatná hrana.** Řada vyvrtaná 37 mm od zadní hrany místo od přední. Police sedne, závěs ne.
- **Boky nejsou zrcadlové.** Oba boky vrtané ze stejné strany, takže jeden má otvory zvenku. Pravidlo: vnitřní strana nahoru, přední hrana k dorazu, bez výjimky.
- **Sčítání metrem.** Kdo měří 32, pak dalších 32, pak dalších 32, nasbírá chybu půl milimetru na otvor. Měří se od jedné nuly nebo se použije šablona.
- **Provrtaný dílec.** Bez hloubkového dorazu otvor vyjde na pohledové straně. Zvlášť to bolí na [krycím boku](../recnik/ukrasna-strana.html) v dekoru dvířek.
- **Různá nula na dvou bocích.** Šablona na levém boku opřená ode dna, na pravém od vrchu. Otvory jsou po 32 mm, ale ne ve stejné výšce.

## Jak to dělá TOPICA

Program nevrtá a nemá CNC export; jeho práce je, aby rozměry byly správně, než dojdete k vrtačce. Závěsy počítá podle výšky dvířek, polohu podložky drží na 37 mm, výsuv volí jako největší jmenovitou délku, která se vejde do hloubky korpusu, a to všechno vyjde v seznamu kování vedle [nářezového plánu](./krojna-lista.html). Jak se z místnosti dojde k tomu seznamu, je vidět v části [jak funguje](../#kako-radi).

System 32 není teorie do školy: je to důvod, proč police, kterou zákazník přestaví o jednu řadu, zůstane rovná, a závěs, který koupíte za dva roky, zapadne do staré díry. Tři čísla a jedna dobrá šablona jsou celá práce.
