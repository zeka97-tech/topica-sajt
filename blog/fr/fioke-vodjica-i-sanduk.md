---
naslov: Tiroirs : comment choisir la coulisse et calculer la caisse
opis: Coulisse à billes, à galets ou tiroir métallique : quel jeu par côté, comment choisir la longueur de coulisse et comment calculer la caisse de tiroir pour un caisson de 600 mm, avec les chiffres exacts.
datum: 2026-11-04
slika: ../slike/web/snimak-13-korpus-sa-fiokama-1600.webp
status: za-proveru
---

Un tiroir, c'est une façade plus une caisse plus une coulisse, et ces trois parties doivent s'accorder au millimètre. La façade se voit, mais la caisse et la coulisse décident si le tiroir glisse ou frotte. Une erreur de 2 mm par côté veut dire une caisse qui n'entre pas ou qui ballotte. Voici l'ordre dans lequel on calcule à l'atelier un tiroir pour un [caisson](../recnik/korpus.html) bas ordinaire de 600 mm de large, avec les trois types de coulisses qu'on achète le plus.

## D'abord le passage intérieur, puis tout le reste

Toutes les cotes du tiroir partent du **passage intérieur** : l'écart entre les faces intérieures des côtés. Pour un caisson de 600 mm avec des côtés en mélaminé de 18 mm, le passage est de 600 − 2 × 18 = **564 mm**. En profondeur, tu comptes avec la profondeur intérieure du caisson : un caisson de 560 de profond a des panneaux de 539 mm de profondeur, parce qu'on retire des 560 la façade (18) et le fond en isorel (3). Ne mesure pas le passage façade comprise et n'oublie pas le fond ; ce sont les deux erreurs les plus fréquentes avant que quoi que ce soit soit coupé.

## Trois types de coulisses et leur jeu

Le jeu est l'espace que la coulisse demande entre la caisse et le côté du caisson, de chaque côté séparément.

| Coulisse | Jeu par côté | Longueurs | Ce qu'elle porte |
|---|---|---|---|
| À billes télescopique | **13 mm** | 250–550, pas de 50 | caisse bois (côté 18 mm) |
| À galets | **12,5 mm** | 250–500 | caisse bois, tiroirs plus légers |
| Tiroir métallique (Modern Box, PRO) | selon la formule du catalogue | PRO : NL 300–550 | ses propres côtés, tu ne coupes que le fond et le dos |

Avec la caisse bois, tu fais toute la caisse : deux côtés, un devant et un dos et un fond en isorel 3 mm. Avec le tiroir métallique, les côtés sont d'usine, et tu ne coupes que **le fond et le dos** selon la formule du fabricant. Formules du catalogue pour le GTV Modern Box : largeur du fond = passage − 86, longueur du fond = NL − 24, dos = passage − 97, hauteurs de tiroir 68/83/146/210. Pour le Modern Box PRO : passage − 75, NL − 24, passage − 87, hauteurs 84/135/167/199.

## Longueur de coulisse : la plus grande qui tient

La règle est simple et le programme la tient telle quelle : **la coulisse est la plus grande longueur nominale qui tient dans la profondeur du caisson**. Pour une profondeur intérieure de 539 mm, une coulisse à billes de 550 ne tient pas, donc on prend **500**. Même logique pour la coulisse à galets (500) et pour le tiroir métallique (NL 500). Qui prend 550 parce qu'« il y a de la place jusqu'au mur » a oublié l'isorel et la façade ; la coulisse tape alors dans le fond ou pousse la façade vers l'extérieur.

## Exemple : caisson 600 × 720 × 560, trois tiroirs

Passage 564 mm, profondeur intérieure 539 mm, coulisse 500.

**À billes télescopique, caisse bois.** La largeur extérieure de la caisse est 564 − 2 × 13 = **538 mm**. Les côtés de la caisse sont en mélaminé 18 mm, aussi longs que la coulisse (500 mm, pratique courante). Le devant et le dos de la caisse vont entre les côtés : 538 − 36 = **502 mm**. Le fond en isorel 3 mm est, selon la règle du programme, 3 mm plus étroit et plus court que la caisse : **535 × 497 mm**.

| Pièce de la caisse | Cote (mm) | Ép. | Qté |
|---|---|---|---|
| Côté de caisse | 500 × hauteur | 18 | 2 |
| Devant / dos | 502 × hauteur | 18 | 2 |
| Fond | 535 × 497 | 3 | 1 |

**À galets.** Un jeu de 12,5 mm par côté donne une caisse de 564 − 25 = **539 mm**, donc le devant et le dos font 503 mm. Le reste comme ci-dessus.

**Modern Box.** Fond 564 − 86 = **478 mm** de large et 500 − 24 = **476 mm** de long ; dos 564 − 97 = **467 mm** de large. **Modern Box PRO** : fond **489 × 476**, dos **477** mm. La hauteur du dos suit la hauteur du tiroir que tu as acheté, selon le tableau du catalogue.

## Hauteur du côté de caisse

La hauteur du côté d'une caisse bois se choisit selon la hauteur de façade et selon ce qui va dans le tiroir : pour les coulisses à billes, les hauteurs courantes sont M 85, K 120, C 150 et F 180 mm, pour les galets 85/120/150. Le tiroir du haut sous la traverse reçoit en général la caisse la plus basse, celui du bas la plus haute. La règle que le programme ne laisse pas enfreindre : **la caisse ne traverse jamais le panneau au-dessus**. Sur un meuble bas sous plan de travail, au-dessus du tiroir du haut il y a deux traverses de 100 mm de haut, donc la caisse du haut doit tenir dessous, quelle que soit la hauteur de la façade. Les [tiroirs](../recnik/fioka-i-vodjica.html) se comptent depuis le haut, donc le « premier tiroir » est toujours celui sous la traverse.

## Erreurs fréquentes

- Jeu déduit une seule fois au lieu des deux côtés : caisse de 551 au lieu de 538, elle n'entre pas.
- Passage mesuré sur la largeur extérieure du caisson (600) au lieu d'entre les côtés (564).
- Longueur de coulisse choisie sur la profondeur extérieure du caisson (560) au lieu de l'intérieure (539).
- Formule du tiroir métallique appliquée à la largeur de la caisse, et pas au passage intérieur.
- [Jeu de façade](../recnik/zazor-fronta.html) oublié : 3 mm entre façades voisines et 1,5 mm par bord de meuble, et les façades de tiroirs frottent l'une contre l'autre.
- Chant : la façade de tiroir se plaque sur les quatre arêtes en bande de 1 mm, et les côtés de la caisse bois seulement sur l'arête haute en 0,45 mm ; qui plaque la caisse de tous les côtés en change la cote. Plus dans le guide [sur le chant](./kant-debljina-i-duzina.html).

## Comment TOPICA le gère

Dans le programme, tu ne calcules pas le tiroir : sur le caisson tu cliques « Tiroirs » avec plus et moins, tu saisis combien il y en a, et la caisse, le fond et la coulisse se déduisent du passage et de la profondeur selon les règles ci-dessus. La coulisse est GTV par défaut, la plus grande longueur qui tient ; quand tu passes la profondeur du caisson de 560 à 500, la coulisse et la caisse prennent de nouvelles cotes, et avec elles la [liste de débit](./krojna-lista.html).

![Meuble bas à trois tiroirs 600 × 720 × 560 mm dans le programme TOPICA : vue 3D contre le mur, panneau avec le nombre de tiroirs et le choix du chant, du matériau et des poignées](../slike/web/snimak-13-korpus-sa-fiokama-1600.webp "Trois tiroirs sur un caisson : tu changes le nombre d'un bouton, la caisse et la coulisse, le programme les calcule.")

Le tiroir est l'endroit le plus cher pour une erreur dans la cuisine, parce qu'elle ne se voit que quand les coulisses sont vissées et la façade accrochée. Donc on le calcule avant de couper, pas après.
