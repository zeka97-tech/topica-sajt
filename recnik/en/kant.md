---
naslov: Edge banding
opis: Edge banding is the ABS tape on the edge of chipboard: 0.45 mm carcass, 1 mm fronts, 2 mm hard-working edges. Which edges get edged and how length is counted.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
---

**Edge banding** (edging) is the ABS tape glued to the edge of chipboard to cover the raw core of the board, protect it from moisture and knocks, and make the panel look finished. Edging does not change the size in the cut list when you work to net sizes, but it changes the price, the time and the list of edges the tradesman has to process.

## Standard sizes

- **0.45 mm**: visible carcass edges and the front edge of a shelf; thin, cheap, matches the board colour.
- **1 mm**: fronts, all four edges.
- **2 mm**: wardrobe doors, worktops and other heavily used edges; rounded, takes knocks.
- The cut size is **net after edging** (program default): a [front](./front.html) of 597 with 1 mm edging on both sides is cut at 595. Whoever works to gross sizes cuts at 597 and ends up with 599.
- Edging length = the sum of the edged edges + **10 % waste** (adjustable). A 717 × 597 front with four edges: 2 × 717 + 2 × 597 = 2628 mm, with waste ≈ 2.9 m.

More on choosing the thickness and working out the length in the guide [Edge banding: thickness and length](../blog/kant-debljina-i-duzina.html).

## In the workshop

The carcass is edged on the front before assembly, the front on all four sides before drilling. On the edgebander the short edges usually go first, then the long ones, so the corner joint faces the side that is seen less. Common mistake: forgotten edging on the bottom edge of the [rail](./precka.html) or on the front edge of the bottom behind the door; another is mixing net and gross sizes, so every front is 2 mm wider and the 3 mm gap disappears.

![The “By size” table in TOPICA: for every panel the size, thickness, edging (1 long, 2 long, 2 long and 2 short, none) and quantity, grouped by material](../slike/web/isecak-po-meri-tabela-1600.webp "The “Edging” column says which edges are banded: the side one long, the rail two, the front all four, the hardboard none.")

## How TOPICA handles it

For every panel the program writes which edges carry edging and in which thickness, adds up the length per thickness with waste and applies the price you entered ([features](../#mogucnosti)). In 3D the edging is only marked; the size stays net.

Edging is half a millimetre of plastic that decides whether a kitchen looks like furniture or like boards.
