---
naslov: Kolik stojí kuchyň na míru — jak truhlář počítá cenu
opis: Cena kuchyně na míru: materiál za m², hrana za metr, kování za kus, práce a marže. Co vstupuje do výpočtu, na co se zapomíná a jak program sčítá vaše ceny.
datum: 2026-11-04
slika: ../slike/web/snimak-37-cena-1600.webp
status: za-proveru
---

Cena kuchyně na míru není jedno číslo z hlavy, ale součet pěti položek: materiál, hrana, kování, práce a marže. Kdo počítá takhle, ví, proč je cena taková, a umí ji před zákazníkem obhájit. Kdo počítá „na běžný metr“ od oka, dobře dopadne na jednoduché kuchyni a prodělá na té se zásuvkami a vysokými skříňkami. Tady nejsou ceny v korunách ani v eurech, protože je každá dílna má své; tady je způsob, jak se ty ceny skládají.

## 1. Materiál: metry čtvereční desky, podle druhu

Nejdřív se spočítají metry čtvereční každého druhu desky zvlášť, protože se i kupují zvlášť: bílá [LTD](../recnik/iverica.html) 18 mm na korpusy, dekor 18 mm na dvířka, sololit 3 mm na záda a dna zásuvek, pracovní deska 38 mm na běžný metr. Plocha se bere z [nářezového plánu](./krojna-lista.html): délka × šířka × kusů, sečteno podle materiálu. Příklad z programu: jeden spodní korpus 600 × 720 × 560 má 8 dílců a 2,34 m² desky, z toho 1,48 m² bílého lamina, 0,43 m² dekoru na dvířka a 0,43 m² sololitu.

Ta plocha je čistá. Deska se nevyužije celá: běžné formáty desek jsou 2800 × 2070 mm nebo 2750 × 1830 mm a po nářezu zůstane odpad z řezů, okrajů a kusů, které se nikam nevejdou. Reálně je **využití desky asi 80 %**, takže čisté metry dělíte 0,8, abyste dostali, kolik desky opravdu kupujete. Kuchyň s 10 m² čistého bílého lamina chce asi 12,5 m² koupené desky. Kdo naúčtuje jen čisté metry, platí odpad z vlastní kapsy.

## 2. Hrana: běžné metry plus odpad

[Hrana](../recnik/kant.html) se počítá na běžný metr, zvlášť pro každou tloušťku, protože i ceny jsou různé: 0,45 mm na viditelné hrany korpusu a polic, 1 mm na dvířka na všechny čtyři hrany, 2 mm na více namáhané hrany. Délka je součet všech olepovaných hran z nářezového plánu plus **10 % odpadu** na začátek a konec pásky a na zmetky. Samotná dvířka 717 × 597 nesou 2,63 m hrany 1 mm; na dvaceti dvířkách je to přes 50 m, což není maličkost. Podrobnosti jsou v návodu [o tloušťce a délce hrany](./kant-debljina-i-duzina.html).

## 3. Kování: po kusech, ze seznamu

Kování se počítá, neodhaduje. Seznam pro běžnou kuchyň: závěsy (dvířka do výšky 900 mm nesou 2, do 1600 tři, do 2000 čtyři), výsuvy nebo kovové boxy na zásuvku, nožičky (4 kusy do šířky 800 mm, 6 nad ní), úchytky na dvířka, excentry a kolíky nebo konfirmáty na spoj, klipsy soklu, závěsy horních skříněk, podpěrky polic. Každá položka má cenu za kus z katalogu dodavatele a počet kusů z projektu. Zásuvky jsou tu nejdražší: jedna skříňka se třemi zásuvkami na kovových boxech stojí v kování víc než tři skříňky s dvířky.

## 4. Práce: za skříňku nebo za m² dvířek

Dva běžné způsoby. **Za skříňku**: každý korpus, spodní nebo horní, nese stejnou částku práce a složitější (zásuvky, rohová, trouba) příplatek. Jednoduché a rychlé, dobré pro kuchyně v řadě. **Za m² dvířek**: práce se počítá na plochu dvířek, takže velká šatní skříň nese víc než malá horní skříňka. Přesnější pro skříně a vysoké skříňky. Ať vyberete kterýkoli, do práce patří nářez, olepování, vrtání, montáž a zkouška v dílně. Montáž u zákazníka je zvláštní položka, viz níže.

## 5. Marže

Na součet materiálu, hrany, kování a práce jde **marže v procentech**. Není to výdělek truhláře, protože práce už je zaplacená; pokrývá to, co v projektu není vidět: nářadí, elektřinu, stroje, které se opotřebovávají, dny, kdy není práce, a riziko, že se něco pokazí. Dílna, která pracuje bez marže, pracuje za mzdu, ne pro sebe.

## Na co lidé zapomínají

- **Doprava**: desky od dodavatele do dílny, hotové skříňky k zákazníkovi, dvakrát dodávka.
- **Montáž**: den nebo dva u zákazníka, s nošením do patra, vyrovnáváním, výřezem pro dřez a varnou desku podle šablony výrobce.
- **Odpad**: těch 20 % desky a 10 % hrany; a sololit, na který všichni zapomenou, protože je levný.
- **Změny**: zákazník, který třikrát změní dekor nebo přidá zásuvku; každá změna je nový výpočet a, pokud je deska už nařezaná, nová deska.
- **Drobnosti**: vruty, kolíky, lepidlo, silikon, lišty pracovní desky, soklová lišta; jednotlivě nic, dohromady znát.
- **Služby**: nářez a olepení u někoho jiného, když nemáte vlastní stroje.
- **Spotřebiče a pracovní deska**: kdo je obstarává, kdo je montuje a kdo odpovídá, když výřez nesedí.

Kdo má seznam, nemá překvapení; kdo nemá, uvidí je na konci práce, kdy už je pozdě je naúčtovat.

## Jak to dělá TOPICA

Program nezná vaše ceny a nevymýšlí si je. V **Nastavení dílny**, pod „Materiály a ceny“, zapíšete cenu desek podle druhu, hranu za metr pro každou tloušťku (0,4; 0,45; 0,8; 1 a 2 mm), kování za kus, **práci za skříňku** a **marži** v procentech. Pole, které jste nevyplnili, píše „nezadáno“ a počítá se jako nula, bez upozornění, takže cena ve výkazu nikdy neobsahuje číslo, které jste nedali vy. Když jsou ceny jednou zadané, program pro každý projekt sečte metry čtvereční podle materiálu, metry hrany s odpadem, kování po kusech a práci za skříňku, přidá marži a ve Výkazech, karta „Cena“, dá cenu za projekt, vedle karet „Materiály“ a „Kování“, kde je vidět, z čeho se skládá. Změníte šířku skříňky nebo přidáte zásuvku a cena se změní v tu chvíli. Přehled toho, co všechno program dává, je v části [Funkce](../#mogucnosti).

![Nastavení dílny v programu TOPICA, část „Cena a nabídka“: pole pro práci za skříňku a marži v procentech, hranu za metr pro 0,4 až 2 mm a díly digestoře, nezadaná pole označená „nezadáno“](../slike/web/snimak-37-cena-1600.webp "Ceny zadává truhlář, jednou pro dílnu; nezadané je nula, program nic nepředpokládá.")

Cena kuchyně na míru je součet, který můžete ukázat na papíře, položku po položce. Když ho program sečte z vašich cen, zůstane vám jen to, co program nemůže: odhadnout zákazníka a rozhodnout, jak moc tu zakázku chcete.
