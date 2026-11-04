---
naslov: Koliko stane kuhinja po meri — kako mojster izračuna ceno
opis: Cena kuhinje po meri se sestavi iz materiala po m², roba po metru, okovja po kosu, dela in marže. Kaj gre v račun, kaj se pozabi in kako program sešteva iz cen, ki jih vpiše mojster.
datum: 2026-11-04
slika: ../slike/web/snimak-37-cena-1600.webp
status: za-proveru
---

Cena kuhinje po meri ni ena številka iz glave, temveč vsota petih postavk: material, rob, okovje, delo in marža. Kdor tako računa, ve, zakaj je cena tolikšna, in jo lahko zagovarja pred stranko. Kdor računa „na tekoči meter“ na oko, dobro odnese pri preprosti kuhinji, izgubi pa pri tisti s predali in visokimi elementi. Tukaj ni cen v evrih, ker jih ima vsaka delavnica svoje; tukaj je način, kako se te cene sestavijo.

## 1. Material: kvadrati plošče, po vrsti

Najprej se preštejejo kvadratni metri vsake vrste plošče posebej, ker se tudi kupujejo posebej: bela [iverka](../recnik/iverica.html) 18 mm za korpuse, dekor 18 mm za fronte, lesonit 3 mm za hrbtišče in dna predalov, delovni pult 38 mm po tekočem metru. Kvadratura se dobi iz [razreznega seznama](./krojna-lista.html): dolžina × širina × kosi, sešteto po materialu. Primer iz programa: en spodnji korpus 600 × 720 × 560 ima 8 plošč in 2,34 m² plošče, od tega 1,48 m² bele iverke, 0,43 m² dekorja za fronto in 0,43 m² lesonita.

Ta kvadratura je neto. Format se ne izkoristi v celoti: običajne mere formatov so 2800 × 2070 mm ali 2750 × 1830 mm, po razrezu pa ostane odpadek od rezov, robov in kosov, ki nikamor ne gredo. Realno je **izkoristek formata približno 80 %**, zato neto kvadrate delite z 0,8, da dobite, koliko plošče zares kupujete. Kuhinja z 10 m² neto bele iverke zahteva približno 12,5 m² kupljene plošče. Kdor zaračuna samo neto, odpadek plača iz svojega žepa.

## 2. Rob: tekoči metri plus odpadek

[Rob](../recnik/kant.html) se računa po tekočem metru, posebej za vsako debelino, ker so tudi cene različne: 0,45 mm za vidne robove korpusa in police, 1 mm za fronte na vseh štirih robovih, 2 mm za bolj obremenjene robove. Dolžina je vsota vseh obrobljenih robov iz razreznega seznama plus **10 % odpadka** za začetek in konec traku ter za izmet. Fronta 717 × 597 sama nosi 2,63 m roba 1 mm; na dvajsetih frontah je to več kot 50 m, kar ni malenkost. Podrobnosti so v vodniku [o debelini in dolžini roba](./kant-debljina-i-duzina.html).

## 3. Okovje: po kosu, s seznama

Okovje se šteje, ne ocenjuje. Seznam za običajno kuhinjo: spone (fronta do višine 900 mm nosi 2, do 1600 tri, do 2000 štiri), vodila ali kovinske škatle na predal, nogice (4 kosi do širine 800 mm, 6 nad njo), ročaji na fronto, ekscentri in mozniki ali konfirmati na spoj, sponke podnožja, obešala zgornjih elementov, nosilci polic. Vsaka postavka ima ceno na kos iz kataloga dobavitelja in število kosov iz projekta. Predali so tukaj najdražji: en element s tremi predali na kovinskih škatlah stane v okovju več kot trije elementi z vrati.

## 4. Delo: na element ali na kvadrat fronte

Dva običajna načina. **Na element**: vsak korpus, spodnji ali zgornji, nosi enak znesek dela, zahtevnejši (predali, kotni, pečica) pa dodatek. Preprosto in hitro, dobro za kuhinje v nizu. **Na m² fronte**: delo se računa na kvadraturo front, zato velika omara nosi več kot majhen zgornji element. Natančnejše za omare in visoke elemente. Katerega koli izberete, v delo gredo razrez, robljenje, vrtanje, sestavljanje in preizkus v delavnici. Montaža pri stranki je posebna postavka, glejte spodaj.

## 5. Marža

Na vsoto materiala, roba, okovja in dela gre **marža v odstotkih**. Ta ni zaslužek mojstra, ker je delo že plačano; pokriva tisto, kar se v projektu ne vidi: orodje, elektriko, stroje, ki se obrabljajo, dneve brez dela in tveganje, da gre kaj narobe. Delavnica, ki dela brez marže, dela za plačo, ne zase.

## Kaj ljudje pozabijo

- **Prevoz**: plošče od dobavitelja do delavnice, končani elementi do stranke, dvakrat kombi.
- **Montaža**: dan ali dva pri stranki, z nošenjem v nadstropje, niveliranjem, izrezom za korito in kuhalno ploščo po šabloni proizvajalca.
- **Odpadek**: tistih 20 % formata in 10 % roba; in lesonit, ki ga vsi pozabijo, ker je poceni.
- **Spremembe**: stranka, ki trikrat spremeni dekor ali doda predal; vsaka sprememba je nov račun in, če je plošča že rezana, nova plošča.
- **Malenkosti**: vijaki, mozniki, lepilo, silikon, letve delovnega pulta, stenska letev; posamezno nič, skupaj opazno.
- **Storitve**: razrez in robljenje pri drugem, če nimate svojih strojev.
- **Aparati in delovni pult**: kdo jih nabavi, kdo jih vgradi in kdo odgovarja, če se izrez ne ujema.

Kdor ima seznam, nima presenečenj; kdor ga nima, jih vidi na koncu dela, ko je prepozno, da bi jih zaračunal.

## Kako to naredi TOPICA

Program ne pozna vaših cen in si jih ne izmišlja. V **Nastavitvah delavnice**, pod „Materiali in cene“, vpišete ceno plošč po vrsti, rob na meter za vsako debelino (0,4; 0,45; 0,8; 1 in 2 mm), okovje po kosu, **delo na element** in **maržo** v odstotkih. V polju, ki ga niste izpolnili, piše „ni vpisana“ in se računa kot nič, brez opozorila, zato cena v poročilu nikoli ne vsebuje številke, ki je niste dali vi. Ko so cene enkrat vpisane, program za vsak projekt sešteje kvadrate po materialu, metre roba z odpadkom, okovje po kosu in delo na element, doda maržo in v Poročilih, zavihek „Cena“, da ceno na projekt, ob zavihkih „Materiali“ in „Okovje“, kjer se vidi, iz česa je sestavljena. Spremenite širino elementa ali dodate predal, cena se spremeni v istem trenutku. Pregled vsega, kar program da, je v razdelku [Funkcije](../#mogucnosti).

![Nastavitve delavnice v programu TOPICA, razdelek „Cena in ponudba“: polja za delo na element in maržo v odstotkih, rob na meter za 0,4 do 2 mm in dele nape, nevpisana polja označena z „ni vpisana“](../slike/web/snimak-37-cena-1600.webp "Cene vpiše mojster, enkrat za delavnico; nevpisano je nič, program ničesar ne predpostavlja.")

Cena kuhinje po meri je vsota, ki jo lahko pokažete na papirju, postavko za postavko. Ko jo program sešteje iz vaših cen, vam ostane samo tisto, česar program ne zmore: oceniti stranko in se odločiti, koliko si želite to delo.
