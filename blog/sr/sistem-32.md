---
naslov: Sistem 32: zašto evropski nameštaj ima rupe na 32 mm
opis: Sistem 32 je niz rupa Ø5 mm na razmaku 32 mm, prva na 37 mm od prednje ivice boka. Odakle potiče, kako se iz njega vade police, šarke i vođice i kako se buši bez CNC-a.
datum: 2026-11-04
slika: ../slike/web/snimak-52-ruka-jedna-vrata-1600.webp
---

Sistem 32 je dogovor po kom se na boku korpusa buše rupe prečnika 5 mm u nizu, na razmaku od 32 mm, tako da u iste rupe legnu nosači polica, podloške šarki i vođice fioka. Nije zakon ni standard sa pečatom, nego konvencija koju drže proizvođači okova (Blum, Hettich, Grass, GTV) i proizvođači bušilica. Ko je poštuje, može da kupi okov od bilo kog od njih i on će leći u rupe koje je već izbušio.

## Odakle baš 32 mm

Razmak nije izabran zato što je lep broj. Kad je pločasti nameštaj u Evropi krenuo u seriju, bušio se na višvretenim bušilicama: red vretena koji jednim spuštanjem izbuši ceo niz rupa. Vretena se pokreću zupčanicima koji se dodiruju, a najmanji razmak osa na koji su se zupčanici tada mogli spakovati bio je 32 mm. Mašina je dala raster, a proizvođači okova su na njega naslonili svoje nosače, podloške i vođice. Tako je razmak zupčanika postao razmak nameštaja i ostao do danas, i na CNC bušilicama kojima taj razlog više ne treba.

Mera **37 mm** od prednje ivice [boka](../recnik/bok.html) do ose prvog reda je drugi deo dogovora. Usklađena je sa podloškom šarke i prednjim krajem vođice, pa isti red rupa služi i policama i okovu. Zadnji red je 37 mm od zadnje ivice ili na 37 + n·32 od prednje, da bi vođica legla u raster oba kraja.

## Tri broja koja treba zapamtiti

- **Ø5 mm**: prečnik rupe. Trn nosača police ulazi direktno, podloška šarke i vođica se šrafe euro-šrafom predviđenim za rupu 5 mm.
- **32 mm**: razmak između osa susednih rupa u redu. Ne 30, ne 35; svaki drugi razmak znači da polica stoji nakrivo ili da okov ne legne.
- **37 mm**: osa prednjeg reda od prednje ivice boka. Meri se od ivice gotovog boka, posle [kanta](../recnik/kant.html).

## Šta se iz sistema izvodi

**Police.** Nosač [police](../recnik/polica.html) ide u bilo koju rupu prednjeg i zadnjeg reda, pa se polica pomera u koraku od 32 mm. Mušterija kasnije sama premesti policu, a ona ostane ravna jer su sve četiri rupe na istoj visini.

**Šarke.** Podloška [šarke](../recnik/sarka.html) se šrafi u prednji red, na 37 mm. Šolja Ø35 buši se u frontu na dubinu 12,5–13 mm, sa osom 21,5–22,5 mm od ivice fronta (rastojanje K od 3 do 6 mm, po katalogu šarke). Broj šarki ide po visini fronta: do 900 mm dve, do 1600 tri, do 2000 četiri, iznad toga pet. Šolje su 100 mm od gornje i donje ivice fronta, ostale ravnomerno između.

**Vođice.** Prednji kraj vođice ide u prednji red, zadnji u zadnji red. Zato zadnji red mora da bude u rasteru od prednjeg; ako nije, vođica stoji koso i [fioka](../recnik/fioka-i-vodjica.html) struže. Visina na kojoj se vođica šrafi zavisi od sistema fioke i uzima se iz uputstva proizvođača, ali je uvek neka od rupa u nizu.

## Kako se buši bez CNC-a

Nije ti potrebna mašina, potreban ti je šablon. Najprostiji je letva od tvrdog drveta ili aluminijuma sa rupama Ø5 na tačno 32 mm i graničnikom koji nalegne na prednju ivicu boka tako da prvi red padne na 37 mm. Postoje i kupovni šabloni sa čeličnim čaurama, koji se ne izbuše za nekoliko meseci kao drveni. Postupak je uvek isti:

1. Bok na sto, unutrašnja strana gore, prednja ivica ka tebi.
2. Graničnik šablona uz prednju ivicu, šablon poravnaj po visini na isti način za sve bokove u projektu.
3. Buši sa graničnikom dubine; bok je 18 mm i nema rezerve.
4. Drugi bok buši u ogledalu: prednja ivica opet uz graničnik, unutrašnja strana opet gore.

Korak koji se najviše isplati: šablon pravi duži nego što ti treba i buši ceo bok odjednom, bez premeštanja. Svako premeštanje je prilika da red pobegne za milimetar.

![Donji kuhinjski korpus 600 × 720 × 560 mm sa jednim vratima i jednom policom u programu TOPICA; desno panel sa brojem vrata, oznakom „Šarke levo“ i brojem polica](../slike/web/snimak-52-ruka-jedna-vrata-1600.webp "Jedna vrata, jedna polica: program sam odredi šarke i podloške po sistemu 32.")

## Česte greške

- **Pogrešna ivica.** Red izbušen 37 mm od zadnje ivice umesto od prednje. Polica stane, šarka ne.
- **Bokovi nisu u ogledalu.** Oba boka bušena sa iste strane, pa jedan ima rupe spolja. Pravilo: unutrašnja strana gore, prednja ivica uz graničnik, bez izuzetka.
- **Sabiranje metrom.** Ko meri 32, pa još 32, pa još 32, skupi grešku od pola milimetra po rupi. Meri se od jedne nule ili se koristi šablon.
- **Probijena daska.** Bez graničnika dubine, rupa izađe na ukrasnoj strani. Posebno boli na [ukrasnoj strani](../recnik/ukrasna-strana.html) u dezenu fronta.
- **Različita nula na dva boka.** Šablon na levom boku naslonjen od dna, na desnom od vrha. Rupe su na 32 mm, ali ne na istoj visini.

## Kako to radi TOPICA

Program ne buši i nema CNC izvoz; njegov posao je da mere budu tačne pre nego što dođeš do bušilice. Šarke računa po visini fronta, položaj podloške drži na 37 mm, vođicu bira kao najveću nominalnu dužinu koja staje u dubinu korpusa, a sve to izađe u spisku okova pored [krojne liste](./krojna-lista.html). Kako se iz sobe stiže do tog spiska vidi se u odeljku [kako radi](../#kako-radi).

Sistem 32 nije teorija za školu: to je razlog što polica koju mušterija pomeri za jedan red ostane ravna, a šarka koju kupiš za dve godine legne u staru rupu. Tri broja i jedan dobar šablon su ceo posao.
