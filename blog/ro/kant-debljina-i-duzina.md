---
naslov: Cant: ce grosime unde merge (0,45 / 1 / 2 mm) și cum se calculează lungimea
opis: Cantul de 0,45 mm merge pe corp, 1 mm pe fronturi, 2 mm pe muchiile mai solicitate. Ce înseamnă dimensiune netă după cant și cum se calculează lungimea benzii cu 10 % deșeu, pe exemplul unui corp de 600 × 720 × 560.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Cantul este banda, cel mai des ABS, cu care se închide muchia tăiată a PAL-ului ca să nu se vadă miezul plăcii și ca umezeala să nu intre în ea. Grosimea benzii nu e chestiune de gust: banda subțire pe ușă se dezlipește la prima lovitură, iar banda groasă pe polița interioară e bani aruncați. Ghidul ăsta spune ce grosime unde merge, ce muchii se cantuiesc de fapt, ce înseamnă „dimensiune netă după cant” și cum calculezi câți metri de bandă să comanzi.

## Trei grosimi și unde merge fiecare

| Bandă | Unde merge | De ce |
|---|---|---|
| **0,45 mm** | muchiile vizibile ale [corpului](../recnik/korpus.html) și muchia din față a [poliței](../recnik/polica.html) | muchiile nu se lovesc, banda doar închide placa |
| **1 mm** | [fronturi](../recnik/front.html), toate cele patru muchii | muchia se apucă cu mâna și se lovește, are nevoie de corp |
| **2 mm** | fronturi unde se cere muchie mai tare, [blaturi](../recnik/radna-ploca.html), uși de dulap | muchiile cele mai solicitate, bandă rotunjită și rezistentă |

Banda de 2 mm e mai bună și pe fronturile obișnuite când clientul vrea o muchie mai moale, rotunjită; prețul e mai mare și trebuie mașină care s-o lipească. Pe corp 2 mm e greșeală: înăuntru nu se vede, iar îmbinarea cu frontul primește o muchie pe care n-a cerut-o nimeni.

## Ce muchii se cantuiesc și care nu

Regula e simplă: se cantuiește muchia care se vede sau se atinge cu mâna. Muchia de la perete, muchia de sub blat și muchia din îmbinarea cu altă piesă nu se cantuiesc, pentru că banda acolo ar încurca doar asamblarea și ar consuma timp. Pe un corp inferior obișnuit arată așa:

- **Laterală**: o muchie lungă, cea din față. Cea din spate e la perete, cea de sus sub blat, cea de jos pe podea.
- **Fund**: una lungă, cea din față.
- **Poliță**: una lungă, cea din față. Polița e retrasă, se vede doar din față.
- **Traversă**: două lungi. Traversa din față se vede de jos când se deschide ușa, așa că le primește pe amândouă.
- **Front**: două lungi și două scurte, toate patru.
- **Spate** din HDF de 3 mm: fără cant.

## Dimensiune netă după cant

În [lista de debitare](./krojna-lista.html) dimensiunea piesei este **netă după cant**: e dimensiunea piesei finite cu banda lipită, așa cum intră în corp. La banda de 0,45 mm diferența e sub o jumătate de milimetru și în practică nu se scade. La 1 mm și 2 mm se scade: frontul care în listă apare ca 717 × 597 cu bandă de 1 mm pe toate cele patru muchii se taie la 715 × 595, și după cant are exact 717 × 597. Cine uită asta primește un front cu 2 mm mai mare pe fiecare parte, iar rostul de 3 mm dintre uși dispare.

Convenția „net după cant” e implicită în program și se poate schimba dacă atelierul lucrează invers, dar despre asta trebuie să știe și cine debitează, și cine lipește.

## Cum se calculează lungimea benzii

Lungimea cantului pentru o grosime este **suma tuturor muchiilor cantuite de grosimea aceea, mărită cu 10 % deșeu**. Zece procente acoperă începutul și sfârșitul benzii pe mașină, bucățile care se taie și câte o muchie care se cantuiește de două ori. Procentul e reglabil; atelierul cu aparat manual merge de obicei mai sus.

Exemplu: corp inferior 600 × 720 × 560, o ușă, o poliță, două traverse.

| Piesă | Dimensiune (mm) | Cant | Buc. | Lungime bandă |
|---|---|---|---|---|
| Laterală | 702 × 539 | 1 lungă · 0,45 | 2 | 2 × 702 = 1404 |
| Fund | 600 × 539 | 1 lungă · 0,45 | 1 | 600 |
| Poliță | 562 × 519 | 1 lungă · 0,45 | 1 | 562 |
| Traversă | 564 × 100 | 2 lungi · 0,45 | 2 | 2 × 2 × 564 = 2256 |
| Front | 717 × 597 | 2 lungi, 2 scurte · 1 mm | 1 | 2 × 717 + 2 × 597 = 2628 |
| Spate | 717 × 597 | fără cant | 1 | 0 |

Suma pentru banda de **0,45 mm**: 1404 + 600 + 562 + 2256 = **4822 mm**; cu 10 % deșeu 5304 mm, adică vreo **5,3 m**. Suma pentru banda de **1 mm**: **2628 mm**; cu deșeu 2891 mm, vreo **2,9 m**. Pentru un corp în total cam 8,2 m de bandă, două grosimi, două decoruri. O bucătărie de douăsprezece corpuri cu sertare și rând de sus trece ușor de o sută de metri, și acolo estimarea „din ochi” greșește cu o rolă.

## Marcajele cantului în lista de debitare

Cine debitează nu trebuie să știe unde merge piesa, îi ajunge marcajul muchiilor. Programul folosește patru:

- **1 lungă**: doar una din cele două muchii lungi ale piesei.
- **2 lungi**: ambele muchii lungi, cele scurte rămân goale.
- **2 lungi, 2 scurte**: toate patru, tipic frontul.
- **fără cant**: spatele și fundurile de sertar din HDF.

„Lungă” se referă la latura mai lungă a piesei, nu la prima dimensiune din listă. Prima dimensiune e direcția fibrei și la PAL-ul alb nu contează, iar muchia lungă e întotdeauna cea mai mare dintre cele două. La laterala 702 × 539 cea lungă e 702, adică muchia verticală din față; la fundul 600 × 539 cea lungă e 600, cea orizontală din față.

![Tabelul „După dimensiune” în programul TOPICA pentru un corp: șase piese de PAL alb, front în decor stejar și spate din HDF, cu coloana Cant în care scrie „1 lungă”, „2 lungi”, „2 lungi, 2 scurte” și „fără cant”](../slike/web/isecak-po-meri-tabela-1600.webp "Coloana Cant din lista de debitare: marcajul muchiilor, grupat pe material.")

## Cum face TOPICA

Grosimea cantului o setezi o dată pentru corp și o dată pentru fronturi în setările proiectului (implicit 0,45 și 1 mm, decor „ca placa”), iar programul trece la fiecare piesă ce muchii se cantuiesc și adună lungimea pe grosime și decor, cu deșeul pe care l-ai setat. Prețul metrului de bandă îl introduci tu; neintrodus e zero, programul nu-l inventează. Lista de materiale cu cant face parte din aceeași vedere ca lista de debitare, vezi secțiunea [funcții](../#mogucnosti) și termenul [cant](../recnik/kant.html) din glosar.

Cantul e un fleac cât timp îl ai destul. Când se termină la ultimele două fronturi, iar decorul e din alt lot, fleacul devine încă un drum la furnizor.
