---
naslov: Quanto costa una cucina su misura — come l'artigiano calcola il prezzo
opis: Il prezzo di una cucina su misura si compone di materiale al m², bordo al metro, ferramenta al pezzo, manodopera e margine. Cosa entra nel conto, cosa si dimentica e come il programma somma dai prezzi che inserisce l'artigiano.
datum: 2026-11-04
slika: ../slike/web/snimak-37-cena-1600.webp
status: za-proveru
---

Il prezzo di una cucina su misura non è un numero a mente ma la somma di cinque voci: materiale, bordo, ferramenta, manodopera e margine. Chi calcola così sa perché il prezzo è quello e può difenderlo davanti al cliente. Chi calcola “al metro lineare” a occhio se la cava sulla cucina semplice, e ci perde su quella con cassetti e colonne. Qui non ci sono prezzi in euro, perché ogni laboratorio ha i suoi; qui c'è il modo in cui quei prezzi si mettono insieme.

## 1. Materiale: metri quadri di pannello, per tipo

Prima si contano i metri quadri di ogni tipo di pannello separatamente, perché si comprano separatamente: [nobilitato](../recnik/iverica.html) bianco 18 mm per le carcasse, decoro 18 mm per i frontali, faesite 3 mm per schienali e fondi dei cassetti, piano di lavoro 38 mm al metro lineare. I metri quadri si ricavano dalla [lista di taglio](./krojna-lista.html): lunghezza × larghezza × pezzi, sommato per materiale. Esempio dal programma: una base 600 × 720 × 560 ha 8 pannelli e 2,34 m² di pannello, di cui 1,48 m² di nobilitato bianco, 0,43 m² di decoro per il frontale e 0,43 m² di faesite.

Quei metri quadri sono netti. La lastra non si usa tutta: le misure consuete delle lastre sono 2800 × 2070 mm o 2750 × 1830 mm, e dopo il taglio resta lo sfrido di tagli, bordi e pezzi che non stanno da nessuna parte. Realisticamente la **resa della lastra è circa l'80 %**, quindi i metri quadri netti li dividi per 0,8 per avere quanto pannello compri davvero. Una cucina da 10 m² netti di nobilitato bianco chiede circa 12,5 m² di pannello comprato. Chi fattura solo il netto, lo sfrido lo paga di tasca sua.

## 2. Bordo: metri lineari più sfrido

Il [bordo](../recnik/kant.html) si calcola al metro lineare, separatamente per ogni spessore, perché anche i prezzi sono diversi: 0,45 mm per i lati a vista di carcassa e ripiani, 1 mm per i frontali su tutti e quattro i lati, 2 mm per i lati più sollecitati. La lunghezza è la somma di tutti i lati bordati dalla lista di taglio più il **10 % di sfrido** per inizio e fine del nastro e per gli scarti. Un frontale 717 × 597 da solo porta 2,63 m di bordo da 1 mm; su venti frontali sono più di 50 m, che non è poco. I dettagli sono nella guida [sullo spessore e la lunghezza del bordo](./kant-debljina-i-duzina.html).

## 3. Ferramenta: al pezzo, dall'elenco

La ferramenta si conta, non si stima. L'elenco per una cucina normale: cerniere (un frontale fino a 900 mm di altezza ne porta 2, fino a 1600 tre, fino a 2000 quattro), guide o cassetti metallici per cassetto, piedini (4 pezzi fino a 800 mm di larghezza, 6 oltre), maniglie per frontale, eccentrici e spine o confirmat per giunzione, clip dello zoccolo, reggipensili, reggipiano. Ogni voce ha un prezzo al pezzo dal catalogo del fornitore e una quantità dal progetto. I cassetti sono la parte più cara: un mobile con tre cassetti su cassetti metallici costa in ferramenta più di tre mobili con anta.

## 4. Manodopera: per mobile o per metro quadro di frontale

Due modi consueti. **Per mobile**: ogni carcassa, base o pensile, porta lo stesso importo di manodopera, e quelle più complesse (cassetti, angolo, forno) un supplemento. Semplice e veloce, buono per le cucine in linea. **Per m² di frontale**: la manodopera si calcola sui metri quadri dei frontali, quindi un armadio grande porta più di un piccolo pensile. Più preciso per armadi e colonne. Qualunque scegli, nella manodopera entrano taglio, bordatura, foratura, montaggio e prova in laboratorio. La posa dal cliente è una voce a parte, vedi sotto.

## 5. Margine

Sulla somma di materiale, bordo, ferramenta e manodopera va il **margine in percentuale**. Non è il guadagno dell'artigiano, perché la manodopera è già pagata; copre quello che nel progetto non si vede: attrezzi, corrente, macchine che si consumano, giorni senza lavoro e il rischio che qualcosa vada storto. Un laboratorio che lavora senza margine lavora per lo stipendio, non per sé.

## Cosa la gente dimentica

- **Trasporto**: pannelli dal fornitore al laboratorio, mobili finiti dal cliente, due volte il furgone.
- **Posa**: uno o due giorni dal cliente, con il trasporto al piano, la messa in bolla, il foro per lavello e piano cottura secondo la dima del produttore.
- **Sfrido**: quel 20 % di lastra e 10 % di bordo; e la faesite, che tutti dimenticano perché costa poco.
- **Modifiche**: il cliente che cambia tre volte decoro o aggiunge un cassetto; ogni modifica è un nuovo conto e, se il pannello è già tagliato, un nuovo pannello.
- **Minuterie**: viti, spine, colla, silicone, profili del piano di lavoro, alzatina; una per una niente, insieme si sentono.
- **Servizi**: taglio e bordatura da altri se non hai le macchine.
- **Elettrodomestici e piano di lavoro**: chi li procura, chi li monta e chi risponde se il foro non corrisponde.

Chi ha l'elenco non ha sorprese; chi non ce l'ha le vede a fine lavoro, quando è tardi per farsele pagare.

## Come lo fa TOPICA

Il programma non conosce i tuoi prezzi e non li inventa. Nelle **Impostazioni del laboratorio**, sotto “Materiali e prezzi”, inserisci il prezzo dei pannelli per tipo, il bordo al metro per ogni spessore (0,4; 0,45; 0,8; 1 e 2 mm), la ferramenta al pezzo, la **manodopera per mobile** e il **margine** in percentuale. Il campo che non hai compilato dice “non inserito” e conta come zero, senza avvisi, così il prezzo nel report non contiene mai un numero che non hai dato tu. Quando i prezzi sono inseriti una volta, il programma per ogni progetto somma i metri quadri per materiale, i metri di bordo con lo sfrido, la ferramenta al pezzo e la manodopera per mobile, aggiunge il margine e nei Report, scheda “Prezzo”, dà il prezzo per progetto, accanto alle schede “Materiali” e “Ferramenta” dove si vede da cosa è composto. Cambi la larghezza di un mobile o aggiungi un cassetto, e il prezzo cambia all'istante. La panoramica di tutto quello che dà il programma è nella sezione [Funzioni](../#mogucnosti).

![Impostazioni del laboratorio nel programma TOPICA, sezione “Prezzo e preventivo”: campi per manodopera per mobile e margine in percentuale, bordo al metro da 0,4 a 2 mm e parti della cappa, campi vuoti segnati con “non inserito”](../slike/web/snimak-37-cena-1600.webp "I prezzi li inserisce l'artigiano, una volta per il laboratorio; non inserito è zero, il programma non presume nulla.")

Il prezzo di una cucina su misura è una somma che puoi mostrare sulla carta, voce per voce. Quando il programma la somma dai tuoi prezzi, ti resta solo quello che il programma non può fare: valutare il cliente e decidere quanto vuoi quel lavoro.
