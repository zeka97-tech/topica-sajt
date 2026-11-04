# Uputstvo za prevod sajta TOPICA (za prevodioce i proveru)

Izvor: `tekst/sr.json` (srpski, original) i `tekst/en.json` (engleski, proveren). Prevod ide u `tekst/<kod>.json`
sa ISTIM ključevima, i `blog/<kod>/krojna-lista.md` (prevod članka iz `blog/sr/` i `blog/en/`).

Pravila:
1. Ključevi se ne menjaju, ne dodaju i ne brišu. Vrednosti su tekst, bez HTML-a.
2. `_jezik.ime` = ime jezika na tom jeziku; `_jezik.status` = "pun" ili "za-proveru"; `_jezik.proverio` = prazno dok stručnjak ne proveri.
3. Ne prevoditi: TOPICA, Topi, Windows, brojeve, mere (600 × 720 × 560), nazive fajlova (TOPICA-proba.exe → sme lokalizovano ime, npr. TOPICA-trial.exe), „System 32“ (ostaje System 32 / Sistem 32 po jeziku).
4. Stručni izrazi: koristiti reči koje stolari u toj zemlji STVARNO koriste (kataloške reči Egger / Blum / Hettich / Häfele na tom jeziku), ne bukvalne prevode.
   - krojna lista: hr „krojna lista / lista rezanja“, de „Schnittliste / Zuschnittliste“, en „cut list“, pl „lista cięcia / rozkrój“, cs „nářezový plán / kusovník“, it „lista di taglio“, es „lista de corte / despiece“, fr „liste de débit“, hu „szabásjegyzék“, sl „razrez / kosovnica“, ro „listă de debitare“, ru „карта раскроя / деталировка“.
   - korpus: hr „korpus“, de „Korpus“, en „carcass / cabinet“; kant: hr „rubna traka / kant“, de „Kante / Umleimer“, en „edge banding / edging“; okov: hr „okov“, de „Beschläge“, en „hardware / fittings“; šarka šolja 35: de „Topfband (35 mm Topf)“, en „35 mm cup hinge“; iverica: hr „iverica / iveral“, de „Spanplatte (melaminbeschichtet)“, en „chipboard / melamine board“; lesonit: hr „lesonit“, de „Hartfaserplatte / HDF-Rückwand“, en „hardboard / HDF back“; cokla: hr „sokl / cokla“, de „Sockel / Sockelblende“, en „plinth“; radna ploča: hr „radna ploča“, de „Arbeitsplatte“, en „worktop / countertop“; prečka: hr „prečka / letvica“, de „Traverse“, en „rail / stretcher“; fioka: hr „ladica“, de „Schublade“, en „drawer“; vođica/klizač: hr „vodilica“, de „Schubladenführung / Auszug“, en „drawer runner / slide“; ukrasna strana: hr „završna / ukrasna stranica“, de „Wange / Abschlusswange“, en „end panel“.
5. SEO reči prirodno u naslovima i tekstu (ne nabrajanje): program za kuhinje / stolare, krojna lista, projektovanje nameštaja, dizajn kuhinje 3D, plakar po meri — na tom jeziku izrazi koje majstori kucaju u Google.
6. Dužina: stavke menija (`nav.*`) najviše 14 slova; dugmad (`cta.*`, `*.dugme`) kratko; naslovi (`*.naslov`) 3–6 reči.
7. Iskreno: `jezik.napomena_program` mora da kaže da je program danas na srpskom i engleskom i da taj jezik dolazi. Ne obećavati program na tom jeziku. `jezik.predlog_tekst` i `predlog_dugme` su na TOM jeziku („Ova stranica postoji i na hrvatskom.“ / „Prijeđi na hrvatski“).
8. Navodnici i tipografija po pravopisu tog jezika („…“ sr/hr/de, “…” en, «…» fr/ru…).
9. Blog: front-matter polja `naslov`, `opis`, `datum`, `slika` ostaju; prevesti naslov, opis i tekst; putanje slika i tabela ostaju; 400–600 reči.
10. Provera: `node -e "JSON.parse(require('fs').readFileSync('tekst/<kod>.json','utf8'))"` i `npm run build` moraju proći.
