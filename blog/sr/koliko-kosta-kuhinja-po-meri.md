---
naslov: Koliko košta kuhinja po meri — kako majstor računa cenu
opis: Cena kuhinje po meri se sastavlja iz materijala po m², kanta po metru, okova po komadu, rada i marže. Šta ulazi u račun, šta se zaboravlja i kako program sabira iz cena koje upiše majstor.
datum: 2026-11-04
slika: ../slike/web/snimak-37-cena-1600.webp
---

Cena kuhinje po meri nije jedan broj iz glave nego zbir pet stavki: materijal, kant, okovi, rad i marža. Ko tako računa, zna zašto je cena tolika i može da je brani pred mušterijom. Ko računa „po dužnom metru“ od oka, dobro prođe na prostoj kuhinji, a izgubi na onoj sa fiokama i visokim elementima. Ovde nema cena u dinarima ni evrima, jer ih svaka radionica ima svoje; ovde je način na koji se te cene slažu.

## 1. Materijal: kvadrati ploče, po vrsti

Prvo se izbroje kvadratni metri svake vrste ploče posebno, jer se i kupuju posebno: bela [iverica](../recnik/iverica.html) 18 mm za korpuse, dekor 18 mm za frontove, lesonit 3 mm za leđa i dno fioka, radna ploča 38 mm po dužnom metru. Kvadratura se dobija iz [krojne liste](./krojna-lista.html): dužina × širina × komada, sabrano po materijalu. Primer iz programa: jedan donji korpus 600 × 720 × 560 ima 8 dasaka i 2,34 m² ploče, od toga 1,48 m² bele iverice, 0,43 m² dekora za front i 0,43 m² lesonita.

Ta kvadratura je neto. Tabla se ne iskoristi cela: uobičajene mere tabli su 2800 × 2070 mm ili 2750 × 1830 mm, a posle krojenja ostane otpad od rezova, ivica i komada koji nigde ne stanu. Realno **iskorišćenje table je oko 80 %**, pa neto kvadrate deliš sa 0,8 da dobiješ koliko ploče stvarno kupuješ. Kuhinja od 10 m² neto bele iverice traži oko 12,5 m² kupljene ploče. Ko naplati samo neto, otpad plaća iz svog džepa.

## 2. Kant: dužni metri plus otpad

[Kant](../recnik/kant.html) se računa po dužnom metru, posebno za svaku debljinu, jer su i cene različite: 0,45 mm za vidljive ivice korpusa i police, 1 mm za frontove na sve četiri ivice, 2 mm za jače opterećene ivice. Dužina je zbir svih kantovanih ivica iz krojne liste plus **10 % otpada** na početak i kraj trake i na škart. Front 717 × 597 sam nosi 2,63 m kanta od 1 mm; na dvadeset frontova to je više od 50 m, što nije sitnica. Detalji su u vodiču [o debljini i dužini kanta](./kant-debljina-i-duzina.html).

## 3. Okovi: po komadu, iz spiska

Okovi se broje, ne procenjuju. Spisak za običnu kuhinju: šarke (front do 900 mm visine nosi 2, do 1600 tri, do 2000 četiri), vođice ili metalne kutije po fioci, nogice (4 komada do 800 mm širine, 6 preko), ručke po frontu, ekscentri i tiplovi ili konfirmati po spoju, kopče cokle, vešalice gornjih elemenata, polični nosači. Svaka stavka ima cenu po komadu iz kataloga dobavljača i broj komada iz projekta. Fioke su tu najskuplje: jedan element sa tri fioke na metalnim kutijama košta u okovu više nego tri elementa sa vratima.

## 4. Rad: po elementu ili po kvadratu fronta

Dva uobičajena načina. **Po elementu**: svaki korpus, donji ili gornji, nosi isti iznos rada, a složeniji (fioke, ugaoni, rerna) dodatak. Prosto i brzo, dobro za kuhinje u nizu. **Po m² fronta**: rad se računa na kvadraturu frontova, pa veliki plakar nosi više od malog gornjeg elementa. Tačnije za plakare i visoke elemente. Koji god izabereš, u rad ulazi krojenje, kantovanje, bušenje, sklapanje i proba u radionici. Montaža kod mušterije je posebna stavka, vidi dole.

## 5. Marža

Na zbir materijala, kanta, okova i rada ide **marža u procentima**. Ona nije zarada majstora, jer je rad već plaćen; ona pokriva ono što se ne vidi u projektu: alat, struju, mašine koje se troše, dane kad nema posla i rizik da nešto krene naopako. Radionica koja radi bez marže radi za platu, ne za sebe.

## Šta ljudi zaboravljaju

- **Transport**: ploče od dobavljača do radionice, gotovi elementi do mušterije, dva puta kombi.
- **Montaža**: dan ili dva kod mušterije, sa nošenjem na sprat, nivelisanjem, izrezom za sudoperu i ploču za kuvanje po šablonu proizvođača.
- **Otpad**: onih 20 % table i 10 % kanta; i lesonit, koji svi zaborave jer je jeftin.
- **Izmene**: mušterija koja tri puta promeni dezen ili doda fioku; svaka izmena je novi račun i, ako je ploča već sečena, nova ploča.
- **Sitnice**: vijci, tiplovi, lepak, silikon, lajsne radne ploče, zidna lajsna; pojedinačno ništa, zajedno primetno.
- **Usluge**: sečenje i kantovanje kod drugog ako nemaš svoje mašine.
- **Uređaji i radna ploča**: ko ih nabavlja, ko ih ugrađuje i ko odgovara ako izrez ne odgovara.

Ko ima spisak, nema iznenađenja; ko nema, vidi ih na kraju posla, kad je kasno da se naplate.

## Kako to radi TOPICA

Program ne zna tvoje cene i ne izmišlja ih. U **Podešavanjima radionice**, pod „Materijali i cene“, upisuješ cenu ploča po vrsti, kant po metru za svaku debljinu (0,4; 0,45; 0,8; 1 i 2 mm), okove po komadu, **rad po elementu** i **maržu** u procentima. Polje koje nisi popunio piše „nije upisana“ i računa se kao nula, bez upozorenja, pa cena u izveštaju nikad ne sadrži broj koji nisi ti dao. Kad su cene jednom upisane, program za svaki projekat sabere kvadrate po materijalu, metre kanta sa otpadom, okove po komadu i rad po elementu, doda maržu i u Izveštajima, kartica „Cena“, da cenu po projektu, pored kartica „Materijali“ i „Okovi“ gde se vidi od čega je sastavljena. Promeniš širinu elementa ili dodaš fioku, cena se promeni istog trena. Pregled šta sve program daje stoji u odeljku [Mogućnosti](../#mogucnosti).

![Podešavanja radionice u programu TOPICA, odeljak „Cena i ponuda“: polja za rad po elementu i maržu u procentima, kant po metru za 0,4 do 2 mm i delove aspiratora, neupisana polja označena sa „nije upisana“](../slike/web/snimak-37-cena-1600.webp "Cene upisuje majstor, jednom za radionicu; neupisano je nula, program ništa ne pretpostavlja.")

Cena kuhinje po meri je zbir koji možeš da pokažeš na papiru, stavku po stavku. Kad ga program sabere iz tvojih cena, ostaje ti samo ono što program ne može: da proceniš mušteriju i odlučiš koliko hoćeš taj posao.
