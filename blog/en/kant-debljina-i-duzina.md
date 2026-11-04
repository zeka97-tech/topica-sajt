---
naslov: Edge banding: which thickness goes where (0.45 / 1 / 2 mm) and how to work out the length
opis: 0.45 mm edging on the carcass, 1 mm on fronts, 2 mm on hard-working edges. Net size after edging and tape length with 10 % waste, on a 600 × 720 × 560 carcass.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
---

Edge banding is the tape, usually ABS, that closes the cut edge of chipboard so the core of the board doesn't show and moisture doesn't get in. The tape thickness is not a matter of taste: thin tape on a door peels off at the first knock, and thick tape on an inside shelf is money thrown away. This guide says which thickness goes where, which edges get edged at all, what “net size after edging” means and how to work out how many metres of tape to order.

## Three thicknesses and where each one goes

| Tape | Where it goes | Why |
|---|---|---|
| **0.45 mm** | visible edges of the [carcass](../recnik/korpus.html) and the front edge of the [shelf](../recnik/polica.html) | the edges take no knocks, the tape only closes the board |
| **1 mm** | [fronts](../recnik/front.html), all four edges | the edge is grabbed by hand and knocked, it needs some body |
| **2 mm** | fronts where a stronger edge is wanted, [worktops](../recnik/radna-ploca.html), wardrobe doors | the hardest-working edges, the tape rounded and tough |

2 mm tape is better on ordinary fronts too when the customer wants a softer, rounded edge; the price is higher and it needs a machine to apply it. On the carcass 2 mm is a mistake: inside it isn't seen, and the joint with the front gets an edge nobody asked for.

## Which edges get edged, and which don't

The rule is simple: an edge that is seen or touched by hand gets edged. An edge against the wall, an edge under the worktop and an edge in a joint with another panel are not edged, because there the tape would only get in the way of the assembly and waste time. On an ordinary base carcass it looks like this:

- **Side**: one long edge, the front. The rear is against the wall, the top under the worktop, the bottom on the floor.
- **Bottom**: one long edge, the front.
- **Shelf**: one long edge, the front. The shelf is set back; only the front shows.
- **Rail**: two long edges. The front rail is seen from below when the door is open, so it gets both.
- **Front**: two long and two short, all four.
- **Back** in 3 mm hardboard: no edging.

## Net size after edging

In the [cut list](./krojna-lista.html) the panel size is **net after edging**: that is the size of the finished panel with the tape glued on, as it goes into the carcass. With 0.45 mm tape the difference is under half a millimetre and in practice is not deducted. With 1 mm and 2 mm it is: a front that stands in the list as 717 × 597 with 1 mm tape on all four edges is cut at 715 × 595, and after edging measures exactly 717 × 597. Whoever forgets that gets a front 2 mm bigger each way and the 3 mm gap between the doors disappears.

The “net after edging” convention is the program default and can be changed if the workshop works the other way round, but both the person cutting and the person edging have to know about it.

## How to work out the tape length

The edging length for one thickness is **the sum of all edged edges of that thickness, plus 10 % waste**. Ten per cent covers the start and end of the tape on the machine, the pieces that get cut off and the odd edge that gets edged twice. The percentage is adjustable; a workshop with a hand-held edger usually goes higher.

Example: a 600 × 720 × 560 base carcass, one door, one shelf, two rails.

| Panel | Size (mm) | Edging | Qty | Tape length |
|---|---|---|---|---|
| Side | 702 × 539 | 1 long · 0.45 | 2 | 2 × 702 = 1404 |
| Bottom | 600 × 539 | 1 long · 0.45 | 1 | 600 |
| Shelf | 562 × 519 | 1 long · 0.45 | 1 | 562 |
| Rail | 564 × 100 | 2 long · 0.45 | 2 | 2 × 2 × 564 = 2256 |
| Front | 717 × 597 | 2 long, 2 short · 1 mm | 1 | 2 × 717 + 2 × 597 = 2628 |
| Back | 717 × 597 | none | 1 | 0 |

Total for **0.45 mm** tape: 1404 + 600 + 562 + 2256 = **4822 mm**; with 10 % waste 5304 mm, so about **5.3 m**. Total for **1 mm** tape: **2628 mm**; with waste 2891 mm, about **2.9 m**. For one carcass that is about 8.2 m of tape in all, two thicknesses, two decors. A twelve-unit kitchen with drawers and a wall run easily passes a hundred metres, and there a guess “by eye” is a whole roll out.

## Edging marks in the cut list

Whoever cuts doesn't need to know where the panel goes; the edge marks are enough. The program uses four:

- **1 long**: only one of the panel's two long edges.
- **2 long**: both long edges, the short ones stay bare.
- **2 long, 2 short**: all four, typically a front.
- **none**: backs and drawer bottoms in hardboard.

“Long” refers to the longer side of the panel, not to the first dimension in the list. The first dimension is the grain direction and on white chipboard it doesn't matter, while the long edge is always the larger of the two. On a 702 × 539 side the long one is 702, the front upright edge; on a 600 × 539 bottom the long one is 600, the front horizontal edge.

![The “By size” table in TOPICA for one carcass: six panels of white chipboard, a front in oak decor and a hardboard back, with the Edging column reading “1 long”, “2 long”, “2 long, 2 short” and “none”](../slike/web/isecak-po-meri-tabela-1600.webp "The Edging column in the cut list: edge marks, grouped by material.")

## How TOPICA handles it

You set the edging thickness once for the carcass and once for the fronts in the project settings (default 0.45 and 1 mm, decor “as board”), and the program writes for every panel which edges get edged and adds up the length per thickness and decor, with the waste you set. The price per metre of tape is yours to enter; left blank it is zero, the program doesn't invent it. The material list with edging is part of the same view as the cut list; see the section [features](../#mogucnosti) and the term [edge banding](../recnik/kant.html) in the glossary.

Edging is a small thing while there is enough of it. When it runs out on the last two fronts, and the decor is from another batch, the small thing becomes another trip to the supplier.
