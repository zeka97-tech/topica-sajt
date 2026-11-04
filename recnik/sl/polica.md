---
naslov: Polica
opis: Polica je premična plošča v korpusu na štirih nosilcih po sistemu 32. Mere police, umik, rob 0,45 mm in razmik vrtin 32 mm v stranici.
datum: 2026-11-04
slika: ../slike/web/snimak-19-krupni-prikaz-1600.webp
status: za-proveru
---

**Polica** je vodoravna plošča znotraj korpusa, ki se naslanja na štiri nosilce v vrtinah [stranice](./bok.html). Za razliko od dna in pokrova polica ne veže ogrodja: lahko se vzame ven in prestavi po višini. Zato se tudi njene mere razlikujejo od mer dna.

## Standardne mere

- Iverka **18 mm**.
- Širina: notranja širina korpusa minus reža za nosilce. V primeru programa za element 600 je polica **562 × 519 mm**, torej 2 mm ožja od notranjih 564 in **umaknjena** od sprednjega roba stranice.
- Rob: **0,45 mm** na sprednjem robu.
- Nosilci polic: po [sistemu 32](../blog/sistem-32.html), vrtine Ø5 mm na razmiku **32 mm**, prva vrsta na **37 mm** od sprednjega roba stranice (os); isti niz vrtin služi tudi sponam in vodilom, po katalogu proizvajalca okovja.
- Široke police se upogibajo pod težo; običajno se element razdeli s [pregrado](./pregrada.html) ali pa se polica naredi debelejša.

## V delavnici

Vrtine za nosilce se vrtajo po šabloni sistema 32 pred sestavljanjem, v obeh stranicah od istega roba, da police ne stojijo postrani. Polica se reže malo krajša od notranje mere, da se vzame ven brez zatikanja, in umakne od sprednjega roba, da se ne vidi za režo vrat. Pogosta napaka: vrtine, vrtane od različnega roba na levi in desni stranici, zato vsaka polica stoji poševno; druga je polica na polno notranjo mero, ki se zagozdi in opraska rob.

![Korpus z odprtimi vrati v programu TOPICA: ena polica na sredini višine, kote do stene in od tal](../slike/web/snimak-52-ruka-jedna-vrata-1600.webp "Polica je umaknjena od sprednjega roba in krajša od notranje širine, da se da vzeti ven.")

## Kako to naredi TOPICA

Program za vse police v projektu drži en umik in sam računa širino po reži; število polic spremenite v korpusu, mere pa gredo naravnost v [razrezni seznam](../blog/krojna-lista.html) ([funkcije](../#mogucnosti)).

Polica je edina plošča v korpusu, ki se mora premikati, zato jo režite tako, da se lahko.
