---
naslov: Sustav 32: zašto europski namještaj ima rupe na 32 mm
opis: Sustav 32 je niz rupa Ø5 mm na razmaku 32 mm, prva na 37 mm od prednjeg ruba boka. Odakle potječe, kako se izvode police, šarke i vodilice i kako se buši bez CNC-a.
datum: 2026-11-04
slika: ../slike/web/snimak-52-ruka-jedna-vrata-1600.webp
---

Sustav 32 dogovor je po kojem se na boku korpusa buše rupe promjera 5 mm u nizu, na razmaku od 32 mm, tako da u iste rupe legnu nosači polica, podložne pločice šarki i vodilice ladica. Nije zakon ni norma s pečatom, nego konvencija koje se drže proizvođači okova (Blum, Hettich, Grass, GTV) i proizvođači bušilica. Tko je poštuje, može kupiti okov od bilo kojeg od njih i on će leći u rupe koje je već izbušio.

## Odakle baš 32 mm

Razmak nije izabran zato što je lijep broj. Kad je pločasti namještaj u Europi krenuo u seriju, bušio se na viševretenim bušilicama: red vretena koji jednim spuštanjem izbuši cijeli niz rupa. Vretena pokreću zupčanici koji se dodiruju, a najmanji razmak osi na koji su se zupčanici tada mogli složiti bio je 32 mm. Stroj je dao raster, a proizvođači okova na njega su naslonili svoje nosače, pločice i vodilice. Tako je razmak zupčanika postao razmak namještaja i ostao do danas, i na CNC bušilicama kojima taj razlog više ne treba.

Mjera **37 mm** od prednjeg ruba [boka](../recnik/bok.html) do osi prvog reda drugi je dio dogovora. Usklađena je s podložnom pločicom šarke i prednjim krajem vodilice, pa isti red rupa služi i policama i okovu. Stražnji red je 37 mm od stražnjeg ruba ili na 37 + n·32 od prednjeg, da bi vodilica legla u raster na oba kraja.

## Tri broja koja treba zapamtiti

- **Ø5 mm**: promjer rupe. Trn nosača police ulazi izravno, podložna pločica šarke i vodilica pričvršćuju se euro-vijkom predviđenim za rupu 5 mm.
- **32 mm**: razmak između osi susjednih rupa u redu. Ne 30, ne 35; svaki drugi razmak znači da polica stoji nakrivo ili da okov ne legne.
- **37 mm**: os prednjeg reda od prednjeg ruba boka. Mjeri se od ruba gotovog boka, nakon [rubne trake](../recnik/kant.html).

## Što se iz sustava izvodi

**Police.** Nosač [police](../recnik/polica.html) ide u bilo koju rupu prednjeg i stražnjeg reda, pa se polica pomiče u koraku od 32 mm. Kupac kasnije sam premjesti policu, a ona ostane ravna jer su sve četiri rupe na istoj visini.

**Šarke.** Podložna pločica [šarke](../recnik/sarka.html) pričvršćuje se u prednji red, na 37 mm. Lončić Ø35 buši se u fronti na dubinu 12,5–13 mm, s osi 21,5–22,5 mm od ruba fronte (razmak K od 3 do 6 mm, po katalogu šarke). Broj šarki ide po visini fronte: do 900 mm dvije, do 1600 tri, do 2000 četiri, iznad toga pet. Lončići su 100 mm od gornjeg i donjeg ruba fronte, ostali ravnomjerno između.

**Vodilice.** Prednji kraj vodilice ide u prednji red, stražnji u stražnji red. Zato stražnji red mora biti u rasteru s prednjim; ako nije, vodilica stoji koso i [ladica](../recnik/fioka-i-vodjica.html) struže. Visina na kojoj se vodilica pričvršćuje ovisi o sustavu ladice i uzima se iz uputa proizvođača, ali je uvijek neka od rupa u nizu.

## Kako se buši bez CNC-a

Ne treba ti stroj, treba ti šablona. Najjednostavnija je letva od tvrdog drva ili aluminija s rupama Ø5 na točno 32 mm i graničnikom koji nalegne na prednji rub boka tako da prvi red padne na 37 mm. Postoje i kupovne šablone s čeličnim čahurama, koje se ne izbuše za nekoliko mjeseci kao drvene. Postupak je uvijek isti:

1. Bok na stol, unutarnja strana gore, prednji rub prema tebi.
2. Graničnik šablone uz prednji rub, šablonu poravnaj po visini na isti način za sve bokove u projektu.
3. Buši s graničnikom dubine; bok je 18 mm i nema rezerve.
4. Drugi bok buši zrcalno: prednji rub opet uz graničnik, unutarnja strana opet gore.

Korak koji se najviše isplati: šablonu napravi dužu nego što ti treba i buši cijeli bok odjednom, bez premještanja. Svako premještanje prilika je da red pobjegne za milimetar.

![Donji kuhinjski korpus 600 × 720 × 560 mm s jednim vratima i jednom policom u programu TOPICA; desno panel s brojem vrata, oznakom „Šarke lijevo“ i brojem polica](../slike/web/snimak-52-ruka-jedna-vrata-1600.webp "Jedna vrata, jedna polica: program sam odredi šarke i podložne pločice po sustavu 32.")

## Česte greške

- **Pogrešan rub.** Red izbušen 37 mm od stražnjeg ruba umjesto od prednjeg. Polica stane, šarka ne.
- **Bokovi nisu zrcalni.** Oba boka bušena s iste strane, pa jedan ima rupe izvana. Pravilo: unutarnja strana gore, prednji rub uz graničnik, bez iznimke.
- **Zbrajanje metrom.** Tko mjeri 32, pa još 32, pa još 32, skupi grešku od pola milimetra po rupi. Mjeri se od jedne nule ili se koristi šablona.
- **Probijena ploča.** Bez graničnika dubine rupa izađe na vidljivoj strani. Posebno boli na [završnoj stranici](../recnik/ukrasna-strana.html) u dekoru fronte.
- **Različita nula na dva boka.** Šablona na lijevom boku naslonjena od dna, na desnom od vrha. Rupe su na 32 mm, ali ne na istoj visini.

## Kako to radi TOPICA

Program ne buši i nema CNC izvoz; njegov je posao da mjere budu točne prije nego što dođeš do bušilice. Šarke računa po visini fronte, položaj podložne pločice drži na 37 mm, vodilicu bira kao najveću nazivnu dužinu koja stane u dubinu korpusa, a sve to izađe u popisu okova pokraj [krojne liste](./krojna-lista.html). Kako se iz prostorije stiže do tog popisa vidi se u odjeljku [kako radi](../#kako-radi).

Sustav 32 nije teorija za školu: to je razlog što polica koju kupac pomakne za jedan red ostane ravna, a šarka koju kupiš za dvije godine legne u staru rupu. Tri broja i jedna dobra šablona cijeli su posao.
