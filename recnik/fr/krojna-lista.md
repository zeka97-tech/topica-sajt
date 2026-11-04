---
naslov: Liste de débit
opis: Liste de débit : tous les panneaux d'un meuble avec cote, épaisseur, matériau, chant et quantité. Règles de cote, de sens du fil et de chant.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

La liste de débit est la liste de tous les panneaux d'un meuble avec la cote exacte, l'épaisseur, le matériau, le chant et la quantité. Elle part de l'atelier vers la scie à panneaux : celui qui coupe les plaques n'a pas besoin de savoir à quoi ressemble le meuble, la liste lui suffit. Si elle est juste, tout s'assemble ; s'il manque 18 mm, il en manque aussi dans la cuisine.

## Cotes standard

- La cote est **finie, chant compris** (par défaut dans le programme) : un côté de 702 × 539 est le panneau fini, le chant ne s'ajoute pas.
- **Première cote = sens du fil** : une façade de 717 × 597 a le fil vertical ; l'isorel est « sans fil ».
- Épaisseurs : **18 mm** caisson et façade, **3 mm** isorel pour le fond.
- [Chant](./kant.html) : **0,45 mm** arêtes visibles du caisson, **1 mm** façades, **2 mm** arêtes très sollicitées ; longueur de bande = somme des arêtes plaquées + **10 % de chute**.

## À l'atelier

La liste se groupe par matériau et par épaisseur, parce que c'est comme ça qu'on débite : d'abord le mélaminé blanc 18, puis les façades au décor, puis l'isorel. Chaque ligne porte aussi le caisson auquel la pièce appartient, pour ne pas les mélanger après la coupe. Erreur fréquente : on écrit la cote brute dans la liste et on ajoute le chant une deuxième fois, ou on inverse les cotes d'une façade et le veinage part à l'horizontale. L'exemple avec les huit panneaux d'un meuble bas 600 × 720 × 560 et l'explication de chaque chiffre sont dans le guide [Qu'est-ce qu'une liste de débit et comment la lire](../blog/krojna-lista.html).

![Tableau « Par cote » dans le programme TOPICA : pièces avec cote, épaisseur, chant et quantité, groupées par matériau](../slike/web/isecak-po-meri-tabela-1600.webp "La vue « Par cote » : la même liste, une ligne par pièce.")

## Comment TOPICA le gère

La liste de débit, tu ne l'écris pas : le programme la déduit des caissons dans la pièce, et la vue « Par cote » met les cotes identiques sur une même ligne, par matériau, prête à copier ou à sortir en PDF ([comment ça marche](../#kako-radi)). Tu changes la largeur du [caisson](./korpus.html), la liste change toute seule.

La liste est courte quand elle est juste.
