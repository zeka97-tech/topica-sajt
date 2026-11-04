---
naslov: Qu'est-ce qu'une liste de débit et comment la lire
opis: La liste de débit est la liste de tous les panneaux d'un meuble avec cotes exactes, épaisseur, chant et quantité. À quoi elle ressemble, ce que veut dire « première cote = sens du fil » et comment TOPICA la génère toute seule.
datum: 2026-11-04
slika: ../slike/web/snimak-33-po-meri-1600.webp
---

La liste de débit (ou feuille de débit) est la feuille de papier, ou le tableau, qui part de l'atelier vers la scie à panneaux. Elle contient chaque panneau d'un meuble : sa longueur, sa largeur, son épaisseur, son matériau, où va le chant et combien de pièces il faut. Celui qui débite les panneaux n'a pas besoin de savoir à quoi ressemble le meuble ; la liste lui suffit. C'est ce qui fait de la liste de débit le document le plus important entre la conception et le meuble fini : si elle est juste, tout s'assemble ; s'il manque 18 mm sur le papier, il en manque aussi dans la cuisine.

## Ce que contient une liste de débit

Pour le meuble en panneaux (cuisines, placards, meubles en mélaminé), une ligne de la liste porte en général six informations :

- **Nom du panneau** et le caisson auquel il appartient : côté, dessous, tablette, traverse, façade, fond.
- **Longueur × largeur** en millimètres, la cote finie du panneau.
- **Épaisseur** : 18 mm pour le caisson et les façades, 3 mm d'isorel pour les fonds, 8–10 mm pour les fonds de tiroir.
- **Matériau** : mélaminé blanc, décor chêne, isorel de couleur.
- **Chant** : quels côtés reçoivent un chant et lequel (0,45 mm pour le caisson, 1 ou 2 mm pour les façades).
- **Quantité** : deux côtés, un dessous, deux traverses.

Une bonne liste est groupée par matériau et par épaisseur, parce que c'est comme ça qu'on débite les panneaux : d'abord tout le mélaminé blanc de 18 mm, puis les façades, puis l'isorel.

## La première cote est le sens du fil

Avec les décors veinés (chêne, noyer, sonoma), la façon dont le panneau est posé sur la plaque compte. Les listes de débit suivent donc une convention : **la première cote court toujours dans le sens du fil**. Une façade de 717 × 597 a le fil vertical, comme une porte doit l'avoir. Écrite 597 × 717, le fil courrait à l'horizontale. Pour le mélaminé blanc et l'isorel, ça n'a pas d'importance, et le programme marque donc le fond « sans fil ».

## Exemple : un meuble bas de 600 × 720 × 560

Un meuble bas de cuisine ordinaire, avec une porte et une tablette, compte huit panneaux. Le dessous repose sur les côtés (pleine largeur 600), donc les côtés font 702 de haut, pas 720. La profondeur du caisson est de 539, parce qu'on retire la façade (18) et le fond (3) des 560.

| Panneau | Cote (mm) | Ép. | Chant | Qté |
|---|---|---|---|---|
| Côté | 702 × 539 | 18 | 1 long | 2 |
| Dessous | 600 × 539 | 18 | 1 long | 1 |
| Tablette | 562 × 519 | 18 | 1 long | 1 |
| Traverse | 564 × 100 | 18 | 2 longs | 2 |
| Façade (porte) | 717 × 597 | 18 | 2 longs, 2 courts | 1 |
| Fond (isorel) | 717 × 597 | 3 | aucun | 1 |

Chacun de ces chiffres, quelqu'un doit le calculer. Pour un caisson, c'est dix minutes au crayon. Pour une cuisine de douze éléments, c'est une heure et au moins une erreur.

## Comment TOPICA construit la liste de débit

Dans le programme, la liste de débit ne s'écrit pas : elle se calcule à partir des caissons que tu as posés dans la pièce. Passe un élément de 600 à 450 de large et les huit panneaux reçoivent leurs nouvelles cotes à l'instant, avec le chant, la quincaillerie et le prix. La vue « Par cote » met les cotes identiques sur une même ligne, groupées par matériau, avec le repère de chant et la quantité, exactement comme ça part à la scie. Cette vue se copie en un clic et s'envoie en message ou s'imprime en PDF.

![La liste de débit « Par cote » dans TOPICA pour un meuble bas de 600 × 720 × 560 mm : huit panneaux groupés par matériau, avec cote, épaisseur, chant et quantité](../slike/web/snimak-33-po-meri-1600.webp "La vue « Par cote » pour un caisson : huit panneaux, trois matériaux, 2,34 m² de panneau.")

Le programme respecte tout seul la règle « première cote = sens du fil » : une façade est toujours écrite debout, et l'isorel porte le repère « sans fil ». Si tu changes plus tard l'épaisseur du fond ou le chant des façades dans les réglages de l'atelier, la modification se propage à chaque panneau du projet, y compris ceux que tu avais déjà regardés.

Une liste de débit, ce n'est pas compliqué. Ce qui est compliqué, c'est qu'elle soit juste à chaque fois, pour chaque élément, après que le client a changé d'avis trois fois. C'est à ça que sert le programme.
