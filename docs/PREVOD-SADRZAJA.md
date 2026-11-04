# Translation brief — Task 2 content (glossary, guides, use cases, FAQ)

Working folder: /home/user/topica-sajt. Source of truth is Serbian (sr). Translate into YOUR language code K (given in your task).

## Sources (Serbian)
- recnik/sr/*.md — 28 glossary pages
- blog/sr/{sistem-32,kant-debljina-i-duzina,kako-izmeriti-kuhinju,standardne-mere-kuhinje,fioke-vodjica-i-sanduk,od-prostora-do-krojne-liste-10-minuta,koliko-kosta-kuhinja-po-meri}.md — 7 guides
- namena/sr/*.md — 5 use-case pages
- pitanja/sr/index.md — 20 questions and answers (FAQ)
- Vocabulary already used on this site in your language: tekst/K.json (and tekst/en.json as English reference); trade glossary per language: docs/PREVODJENJE.md; the numbers and rules behind the texts: docs/CINJENICE-STRUKA.md (numbers must stay identical).

## What to write
1. recnik/K/<same slug>.md (28), blog/K/<same slug>.md (7), namena/K/<same slug>.md (5), pitanja/K/index.md (1). Create the folders. File names (slugs) are IDENTICAL to Serbian — never translate a file name.
2. Front matter: keep the keys `naslov`, `opis`, `datum`, `slika` (and `tip: pitanja` in the FAQ); translate `naslov` and `opis` (opis ≤ 160 characters, contains the search phrase people type in your language). If your language is not sr/en/hr/de, add the line `status: za-proveru`.
3. Body: translate everything incl. image alt texts (inside `![...]`) and captions (inside the quotes after the path). Keep unchanged: image paths, link targets (`./kant.html`, `../recnik/korpus.html`, `../blog/sistem-32.html`, `../#kako-radi`, `../preuzimanje.html`), numbers, units, tables' structure, the `## ` heading structure. In the FAQ keep exactly the pattern `## question` followed by one paragraph (FAQ JSON-LD is built from it) and 20 questions; phrase questions the way people in your country actually search.
4. Edit the EXISTING blog/K/krojna-lista.md: add the same three internal links as blog/sr/krojna-lista.md now has (word for edging → `../recnik/kant.html`, word for carcass/cabinet → `../recnik/korpus.html`, and one sentence before the final paragraph linking `./kant-debljina-i-duzina.html` and `./sistem-32.html`).
5. tekst/K.json: add three sections `recnik`, `namena`, `pitanja_strane`, each with keys `meta_naslov`, `meta_opis`, `nadnaslov`, `naslov`, `tekst`, `poziv` — translate the values from tekst/sr.json (English reference in tekst/en.json). Keep the file's compact formatting (a simple object on one line). Verify: `node -e "JSON.parse(require('fs').readFileSync('tekst/K.json','utf8'))"`.

## Style
Tradesman to tradesman, informal address unless your market expects formal (cs/sk/sl/de letters are the exceptions already decided for marketing; for these articles use the register you used in tekst/K.json). Terms cabinet makers really use (catalogs of Egger / Blum / Hettich / Häfele in your language). No marketing fluff. Honest: the program is in Serbian and English today; no CNC export or nesting.

## Do not
- Do NOT run `node skripte/jezici.mjs` (another process builds; concurrent builds collide). Do NOT git commit. Do not touch other languages.

## Verify before reporting
`ls recnik/K | wc -l` = 28, `ls namena/K | wc -l` = 5, blog/K has 8 files, pitanja/K/index.md exists, every file starts with `---`, JSON parses. Report in ≤ 8 lines: files written, terms you were unsure about.
