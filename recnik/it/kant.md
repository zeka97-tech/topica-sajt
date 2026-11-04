---
naslov: Bordo
opis: Il bordo è il nastro ABS sul lato del truciolare: 0,45 mm carcassa, 1 mm frontali, 2 mm lati sollecitati. Quali lati si bordano e come si calcola la lunghezza.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Il **bordo** è il nastro ABS che si incolla sul lato del truciolare per coprire la parte grezza del pannello, proteggerla da umidità e urti e far sembrare il pezzo finito. Il bordo non cambia la misura nella lista di taglio quando si lavora a misura netta, ma cambia il prezzo, il tempo e l'elenco dei lati che l'artigiano deve lavorare.

## Misure standard

- **0,45 mm**: lati a vista della carcassa e lato anteriore del ripiano; sottile, economico, segue il colore del pannello.
- **1 mm**: frontali, tutti e quattro i lati.
- **2 mm**: ante degli armadi, piani di lavoro e altri lati più sollecitati; arrotondato, regge gli urti.
- La misura di taglio è **netta dopo il bordo** (predefinito nel programma): un [frontale](./front.html) da 597 con bordo 1 mm su entrambi i lati si taglia a 595. Chi lavora a misura lorda taglia a 597 e ottiene 599.
- Lunghezza del bordo = somma dei lati bordati + **10 % di sfrido** (regolabile). Frontale 717 × 597 con quattro lati: 2 × 717 + 2 × 597 = 2628 mm, con lo sfrido ≈ 2,9 m.

Di più sulla scelta dello spessore e sul calcolo della lunghezza nella guida [Bordo: spessore e lunghezza](../blog/kant-debljina-i-duzina.html).

## In laboratorio

La carcassa si borda davanti prima del montaggio, il frontale su tutti e quattro i lati prima della foratura. Sulla bordatrice di solito vanno prima i lati corti, poi i lunghi, così la giunzione sull'angolo guarda verso il lato che si vede meno. Errore frequente: bordo dimenticato sul lato inferiore della [traversa](./precka.html) o sul lato anteriore del fondo dietro l'anta; un altro è mescolare misura netta e lorda, così tutti i frontali sono più larghi di 2 mm e il gioco di 3 mm sparisce.

![Tabella “Per misura” nel programma TOPICA: per ogni pannello misura, spessore, bordo (1 lungo, 2 lunghi, 2 lunghi e 2 corti, nessuno) e quantità, raggruppati per materiale](../slike/web/isecak-po-meri-tabela-1600.webp "La colonna “Bordo” dice quali lati si bordano: il fianco un lato lungo, la traversa due, il frontale tutti e quattro, la faesite niente.")

## Come lo fa TOPICA

Per ogni pannello il programma segna quali lati portano il bordo e di che spessore, somma la lunghezza per spessore con lo sfrido e conteggia il prezzo che hai inserito ([funzioni](../#mogucnosti)). Nel 3D il bordo è solo segnato; la misura resta netta.

Il bordo è mezzo millimetro di plastica che decide se la cucina sembra un mobile o un mucchio di pannelli.
