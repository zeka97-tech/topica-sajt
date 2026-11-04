---
naslov: Chant (bande de chant)
opis: Le chant est la bande ABS qui couvre l'arête du mélaminé : 0,45 mm pour le caisson, 1 mm pour les façades, 2 mm pour les arêtes sollicitées. Quelles arêtes plaquer et comment calculer la longueur.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Le **chant** est la bande ABS collée sur l'arête du panneau de particules pour couvrir le bord brut, le protéger de l'humidité et des chocs et donner au panneau un aspect fini. Le chant ne change pas la cote de la liste de débit quand on travaille en cote finie, mais il change le prix, le temps et la liste des arêtes que l'artisan doit traiter.

## Cotes standard

- **0,45 mm** : arêtes visibles du caisson et chant avant de la tablette ; fin, bon marché, suit la couleur du panneau.
- **1 mm** : façades, les quatre arêtes.
- **2 mm** : portes de placard, plans de travail et autres arêtes très sollicitées ; arrondi, encaisse les chocs.
- La cote de débit est **la cote finie, chant compris** (par défaut dans le programme) : une [façade](./front.html) de 597 avec un chant de 1 mm des deux côtés se coupe à 595. Qui travaille en cote brute coupe à 597 et obtient 599.
- Longueur de chant = somme des arêtes plaquées + **10 % de chute** (réglable). Façade 717 × 597 à quatre arêtes : 2 × 717 + 2 × 597 = 2628 mm, avec la chute ≈ 2,9 m.

Plus sur le choix de l'épaisseur et le calcul de la longueur dans le guide [Chant : épaisseur et longueur](../blog/kant-debljina-i-duzina.html).

## À l'atelier

Le caisson se plaque à l'avant avant l'assemblage, la façade sur les quatre côtés avant le perçage. Sur la plaqueuse, on passe d'habitude d'abord les arêtes courtes, puis les longues, pour que le joint d'angle regarde vers le côté qui se voit le moins. Erreur fréquente : chant oublié sur l'arête inférieure de la [traverse](./precka.html) ou sur le chant avant du dessous derrière la porte ; autre erreur : mélange de cote finie et de cote brute, et toutes les façades sont plus larges de 2 mm et le jeu de 3 mm disparaît.

![Tableau « Par cote » dans le programme TOPICA : pour chaque pièce la cote, l'épaisseur, le chant (1 long, 2 longs, 2 longs et 2 courts, aucun) et la quantité, groupés par matériau](../slike/web/isecak-po-meri-tabela-1600.webp "La colonne « Chant » dit quelles arêtes sont plaquées : le côté un long, la traverse deux, la façade les quatre, l'isorel aucun.")

## Comment TOPICA le gère

Pour chaque pièce, le programme note quelles arêtes portent un chant et de quelle épaisseur, additionne la longueur par épaisseur avec la chute et compte le prix que tu as saisi ([fonctions](../#mogucnosti)). En 3D le chant est seulement repéré ; la cote reste la cote finie.

Le chant, c'est un demi-millimètre de plastique qui décide si la cuisine ressemble à un meuble ou à des planches.
