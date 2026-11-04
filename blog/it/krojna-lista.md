---
naslov: Cos'è una lista di taglio e come si legge
opis: La lista di taglio è l'elenco di tutti i pannelli di un mobile con misure esatte, spessore, bordo e quantità. Com'è fatta, cosa significa “prima misura = senso vena” e come TOPICA la genera da sola.
datum: 2026-11-04
slika: ../slike/web/snimak-33-po-meri-1600.webp
---

La lista di taglio (o distinta di taglio) è il foglio di carta, o la tabella, che va dal laboratorio alla sezionatrice. Contiene ogni pannello di un mobile: quanto è lungo, quanto è largo, di che spessore, di che materiale, dove va il bordo e quanti pezzi servono. Chi taglia i pannelli non ha bisogno di sapere com'è fatto il mobile; gli basta la lista. Per questo la lista di taglio è il documento più importante tra il progetto e il mobile finito: se è giusta, tutto combacia; se sulla carta mancano 18 mm, mancano anche in cucina.

## Cosa contiene una lista di taglio

Per i mobili in pannello (cucine, armadi, mobili in nobilitato) una riga della lista porta di solito sei informazioni:

- **Nome del pannello** e a quale mobile appartiene: fianco, fondo, ripiano, traversa, frontale, schienale.
- **Lunghezza × larghezza** in millimetri, la misura netta del pannello finito.
- **Spessore**: 18 mm per carcassa e frontali, 3 mm di faesite per gli schienali, 8–10 mm per i fondi dei cassetti.
- **Materiale**: nobilitato bianco, decoro rovere, faesite colorata.
- **[Bordo](../recnik/kant.html)**: quali lati ricevono la bordatura e con quale bordo (0,45 mm per la carcassa, 1 o 2 mm per i frontali).
- **Quantità**: due fianchi, un fondo, due traverse.

Una buona lista è raggruppata per materiale e spessore, perché è così che si sezionano le lastre: prima tutto il nobilitato bianco da 18 mm, poi i frontali, poi la faesite.

## La prima misura è il senso vena

Con i decori venati (rovere, noce, sonoma) conta come il pannello sta sulla lastra. Le liste di taglio seguono quindi una convenzione: **la prima misura corre sempre lungo la vena**. Un frontale 717 × 597 ha la vena verticale, come deve essere un'anta. Scritto 597 × 717, la vena correrebbe in orizzontale. Per il nobilitato bianco e la faesite non ha importanza, per questo il programma segna lo schienale come “senza vena”.

## Esempio: una base da 600 × 720 × 560

Una normale base da cucina ([carcassa](../recnik/korpus.html)) con un'anta e un ripiano ha otto pannelli. Il fondo appoggia sopra i fianchi (larghezza piena 600), quindi i fianchi sono alti 702, non 720. La profondità della carcassa è 539, perché dai 560 si tolgono il frontale (18) e lo schienale (3).

| Pannello | Misura (mm) | Sp. | Bordo | Pz |
|---|---|---|---|---|
| Fianco | 702 × 539 | 18 | 1 lungo | 2 |
| Fondo | 600 × 539 | 18 | 1 lungo | 1 |
| Ripiano | 562 × 519 | 18 | 1 lungo | 1 |
| Traversa | 564 × 100 | 18 | 2 lunghi | 2 |
| Frontale (anta) | 717 × 597 | 18 | 2 lunghi, 2 corti | 1 |
| Schienale (faesite) | 717 × 597 | 3 | nessuno | 1 |

Ognuno di questi numeri qualcuno lo deve calcolare. Per un mobile sono dieci minuti con la matita. Per una cucina di dodici elementi è un'ora e almeno un errore.

## Come TOPICA costruisce la lista di taglio

Nel programma la lista di taglio non la scrivi: viene calcolata dai mobili che hai messo nella stanza. Porta un elemento da 600 a 450 di larghezza e tutti e otto i pannelli prendono le nuove misure in quell'istante, insieme a bordo, ferramenta e prezzo. La vista “Per misura” mette le misure uguali su una riga, raggruppate per materiale, con il segno del bordo e la quantità, esattamente come va alla sezionatrice. Quella vista si copia con un clic e si manda come messaggio o si stampa in PDF.

![La lista di taglio “Per misura” in TOPICA per una base da 600 × 720 × 560 mm: otto pannelli raggruppati per materiale, con misura, spessore, bordo e quantità](../slike/web/snimak-33-po-meri-1600.webp "La vista “Per misura” di un mobile: otto pannelli, tre materiali, 2,34 m² di pannello.")

Il programma rispetta da solo la regola “prima misura = senso vena”: un frontale è sempre scritto in verticale, e la faesite porta il segno “senza vena”. Se più tardi cambi lo spessore dello schienale o il bordo dei frontali nelle impostazioni del laboratorio, la modifica passa su ogni pannello del progetto, compresi quelli che avevi già guardato.

Dove va ogni bordo lo spiega la guida [Bordo: quale spessore dove](./kant-debljina-i-duzina.html), e lo schema dei fori la guida [System 32](./sistem-32.html).

Una lista di taglio non è complicata. Complicato è farla giusta ogni volta, per ogni elemento, dopo che il cliente ha cambiato idea tre volte. Il programma serve a questo.
