---
naslov: Bordo: quale spessore dove (0,45 / 1 / 2 mm) e come si calcola la lunghezza
opis: Il bordo da 0,45 mm va sulla carcassa, 1 mm sui frontali, 2 mm sui lati più sollecitati. Cosa significa misura netta dopo il bordo e come si calcola la lunghezza del nastro con il 10 % di sfrido, sull'esempio di una base 600 × 720 × 560.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Il bordo è il nastro, il più delle volte ABS, con cui si chiude il lato tagliato del truciolare perché non si veda l'interno del pannello e l'umidità non ci entri. Lo spessore del nastro non è questione di gusto: un nastro sottile su un'anta si stacca al primo urto, e un nastro spesso su un ripiano interno è denaro buttato. Questa guida dice quale spessore va dove, quali lati si bordano in generale, cosa significa “misura netta dopo il bordo” e come calcolare quanti metri di nastro ordinare.

## Tre spessori e dove va ognuno

| Nastro | Dove va | Perché |
|---|---|---|
| **0,45 mm** | lati a vista della [carcassa](../recnik/korpus.html) e lato anteriore del [ripiano](../recnik/polica.html) | i lati non prendono urti, il nastro chiude solo il pannello |
| **1 mm** | [frontali](../recnik/front.html), tutti e quattro i lati | il lato si prende in mano e prende urti, gli serve corpo |
| **2 mm** | frontali dove si chiede un lato più robusto, [piani di lavoro](../recnik/radna-ploca.html), ante degli armadi | i lati più sollecitati, nastro arrotondato e resistente |

Il nastro da 2 mm è migliore anche sui frontali normali quando il cliente vuole uno spigolo più morbido, arrotondato; il prezzo è più alto e serve una macchina che lo incolli. Sulla carcassa il 2 mm è un errore: dentro non si vede, e la giunzione con il frontale prende uno spigolo che nessuno ha chiesto.

## Quali lati si bordano e quali no

La regola è semplice: si borda il lato che si vede o si tocca con la mano. Il lato contro la parete, il lato sotto il piano di lavoro e il lato nella giunzione con un altro pannello non si bordano, perché lì il nastro darebbe solo fastidio al montaggio e farebbe perdere tempo. Su una normale base è così:

- **Fianco**: un lato lungo, quello anteriore. Quello posteriore è contro la parete, quello superiore sotto il piano, quello inferiore a terra.
- **Fondo**: un lato lungo, quello anteriore.
- **Ripiano**: un lato lungo, quello anteriore. Il ripiano è arretrato, si vede solo davanti.
- **Traversa**: due lati lunghi. La traversa anteriore si vede da sotto quando si apre l'anta, quindi li riceve entrambi.
- **Frontale**: due lunghi e due corti, tutti e quattro.
- **Schienale** in faesite 3 mm: nessun bordo.

## Misura netta dopo il bordo

Nella [lista di taglio](./krojna-lista.html) la misura del pannello è **netta dopo il bordo**: è la misura del pannello finito con il nastro incollato, così come entra nella carcassa. Con il nastro da 0,45 mm la differenza è sotto il mezzo millimetro e in pratica non si sottrae. Con 1 mm e 2 mm si sottrae: un frontale che nella lista è 717 × 597 con nastro da 1 mm su tutti e quattro i lati si taglia a 715 × 595, e dopo il bordo è esattamente 717 × 597. Chi lo dimentica ottiene un frontale più grande di 2 mm per lato e il gioco di 3 mm tra le ante sparisce.

L'accordo “netta dopo il bordo” è predefinito nel programma e si può cambiare se il laboratorio lavora al contrario, ma deve saperlo sia chi taglia sia chi incolla.

## Come si calcola la lunghezza del nastro

La lunghezza del bordo per uno spessore è **la somma di tutti i lati bordati di quello spessore, aumentata del 10 % di sfrido**. Il dieci per cento copre l'inizio e la fine del nastro sulla macchina, i pezzi che si tagliano via e qualche lato che si borda due volte. La percentuale è regolabile; un laboratorio con la bordatrice manuale di solito va più in alto.

Esempio: base 600 × 720 × 560, un'anta, un ripiano, due traverse.

| Pannello | Misura (mm) | Bordo | Pz | Lunghezza del nastro |
|---|---|---|---|---|
| Fianco | 702 × 539 | 1 lungo · 0,45 | 2 | 2 × 702 = 1404 |
| Fondo | 600 × 539 | 1 lungo · 0,45 | 1 | 600 |
| Ripiano | 562 × 519 | 1 lungo · 0,45 | 1 | 562 |
| Traversa | 564 × 100 | 2 lunghi · 0,45 | 2 | 2 × 2 × 564 = 2256 |
| Frontale | 717 × 597 | 2 lunghi, 2 corti · 1 mm | 1 | 2 × 717 + 2 × 597 = 2628 |
| Schienale | 717 × 597 | nessuno | 1 | 0 |

Somma per il nastro da **0,45 mm**: 1404 + 600 + 562 + 2256 = **4822 mm**; con il 10 % di sfrido 5304 mm, cioè circa **5,3 m**. Somma per il nastro da **1 mm**: **2628 mm**; con lo sfrido 2891 mm, circa **2,9 m**. Per un mobile in tutto circa 8,2 m di nastro, due spessori, due decori. Una cucina di dodici mobili con cassetti e fila dei pensili supera facilmente i cento metri, e lì la stima “a occhio” sbaglia di un rotolo.

## I segni del bordo nella lista di taglio

Chi taglia non deve sapere dove va il pannello, gli basta il segno dei lati. Il programma ne usa quattro:

- **1 lungo**: solo uno dei due lati lunghi del pannello.
- **2 lunghi**: entrambi i lati lunghi, i corti restano nudi.
- **2 lunghi, 2 corti**: tutti e quattro, tipicamente il frontale.
- **nessuno**: schienali e fondi dei cassetti in faesite.

“Lungo” si riferisce al lato lungo del pannello, non alla prima misura della lista. La prima misura è il senso vena e nel nobilitato bianco non conta, mentre il lato lungo è sempre il maggiore dei due. Nel fianco 702 × 539 il lungo è 702, il lato anteriore verticale; nel fondo 600 × 539 il lungo è 600, quello anteriore orizzontale.

![Tabella “Per misura” nel programma TOPICA per un mobile: sei pannelli di nobilitato bianco, frontale in decoro rovere e schienale in faesite, con la colonna Bordo in cui c'è scritto “1 lungo”, “2 lunghi”, “2 lunghi, 2 corti” e “nessuno”](../slike/web/isecak-po-meri-tabela-1600.webp "Colonna Bordo nella lista di taglio: segno dei lati, raggruppato per materiale.")

## Come lo fa TOPICA

Lo spessore del bordo lo imposti una volta per la carcassa e una per i frontali nelle impostazioni del progetto (predefiniti 0,45 e 1 mm, decoro “come il pannello”), e il programma scrive su ogni pannello quali lati si bordano e somma la lunghezza per spessore e decoro, con lo sfrido che hai impostato. Il prezzo al metro del nastro lo inserisci tu; non inserito è zero, il programma non lo inventa. L'elenco dei materiali con il bordo fa parte della stessa vista della lista di taglio, vedi la sezione [funzioni](../#mogucnosti) e la voce [bordo](../recnik/kant.html) nel glossario.

Il bordo è un dettaglio finché ce n'è abbastanza. Quando finisce sugli ultimi due frontali, e il decoro è di un altro lotto, il dettaglio diventa un altro viaggio dal fornitore.
