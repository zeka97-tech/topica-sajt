# Levak na sajtu: od preuzimanja do prvog projekta

## Šta već radi na sajtu
1. **Stranica preuzimanja** (`/<kod>/preuzimanje.html`): polje za e-mail je opciono (jasno piše „nije obavezno“), dugme „Preuzmi probnu verziju“ pokreće .exe i vodi na `hvala.html`; link „preuzmi direktno“ zaobilazi polje.
2. **Stranica hvala** (`/<kod>/hvala.html`): tri koraka za početak + link na snimak (`youtubeLink` u `tekst/sajt.json`). Nije u sitemap-u, `noindex`.
3. **„Javi mi kad izađe cena“** u odeljku Cena: isti mehanizam.

## Šta vlasnik uključuje (10 minuta)
- **Formspree** (najjednostavnije): formspree.io → New form → kopiraj ID (`xabcdefg`) u `tekst/sajt.json` → `formspreeId`. Besplatno do 50 poruka mesečno; svaki e-mail stiže kao poruka na tvoj mejl. Izvoz liste: Formspree → Submissions → CSV.
- **Buttondown** (prava lista sa slanjem poruka): buttondown.com → nalog → Settings → Embedding → forma. Umesto Formspree-a, u `src/sablon/preuzimanje.html` i `cena.html` zameni `action` na `https://buttondown.com/api/emails/embed-subscribe/TVOJ-NALOG` i polje `name="email"` ostaje. Besplatno do 100 pretplatnika.
- Dok ništa nije uključeno, dugmad otvaraju mailto na `kontaktEmail` — radi, ali zavisi od toga da li posetilac ima podešen mejl program. Zato uključi Formspree prvog dana.

## Poruka posle 7 dana (šalje se ručno dok nema servisa; kasnije Buttondown automation)
**Predmet:** Kako ide sa TOPICOM — šta ti fali?

Zdravo,

pre nedelju dana si preuzeo probnu verziju programa TOPICA. Pišem lično, nije automat (još): da li si stigao da napraviš prvi korpus i izvučeš krojnu listu?

Ako jesi — šta ti je prvo zasmetalo? Ako nisi — šta te je zaustavilo (instalacija, Windows upozorenje, nije jasno gde se šta klikće)? Odgovori na ovaj mejl u dve rečenice, čitam sve i popravljam po redu.

Tri minuta snimka, ako pomaže: [youtubeLink].

Hvala,
[Ime], stolar, Beograd

## Evidencija (dok nema servisa)
Tabela `marketing/prvi-korisnici.csv` (napravi je): datum preuzimanja · e-mail · jezik · poslata poruka posle 7 dana (da/ne) · odgovor · šta fali. Jedan red po čoveku. Svaki odgovor je zadatak za program ili za sajt.
