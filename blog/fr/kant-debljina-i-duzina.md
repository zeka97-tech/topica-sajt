---
naslov: Chant : quelle épaisseur où (0,45 / 1 / 2 mm) et comment calculer la longueur
opis: Le chant 0,45 mm va sur le caisson, 1 mm sur les façades, 2 mm sur les arêtes sollicitées. Ce que veut dire cote finie chant compris et comment calculer la longueur de bande avec 10 % de chute, sur l'exemple d'un caisson 600 × 720 × 560.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Le chant est la bande, le plus souvent en ABS, qui ferme l'arête coupée du panneau de particules pour qu'on ne voie pas le cœur du panneau et que l'humidité n'y entre pas. L'épaisseur de la bande n'est pas une affaire de goût : une bande fine sur une porte se décolle au premier choc, et une bande épaisse sur une tablette intérieure est de l'argent jeté. Ce guide dit quelle épaisseur va où, quelles arêtes se plaquent, ce que veut dire « cote finie chant compris » et comment calculer combien de mètres de bande commander.

## Trois épaisseurs et où va chacune

| Bande | Où elle va | Pourquoi |
|---|---|---|
| **0,45 mm** | arêtes visibles du [caisson](../recnik/korpus.html) et chant avant de la [tablette](../recnik/polica.html) | les arêtes ne prennent pas de coups, la bande ne fait que fermer le panneau |
| **1 mm** | [façades](../recnik/front.html), les quatre arêtes | l'arête se prend en main et prend des coups, il lui faut du corps |
| **2 mm** | façades où l'on veut une arête plus robuste, [plans de travail](../recnik/radna-ploca.html), portes de placard | arêtes les plus sollicitées, bande arrondie et résistante |

La bande de 2 mm est aussi meilleure sur des façades ordinaires quand le client veut un bord plus doux, arrondi ; le prix est plus élevé et il faut une machine qui la colle. Sur le caisson, 2 mm est une erreur : à l'intérieur ça ne se voit pas, et le joint avec la façade prend une arête que personne n'a demandée.

## Quelles arêtes se plaquent, et lesquelles non

La règle est simple : on plaque l'arête qui se voit ou qu'on touche de la main. L'arête contre le mur, l'arête sous le plan de travail et l'arête dans l'assemblage avec un autre panneau ne se plaquent pas, car la bande n'y ferait que gêner l'assemblage et perdre du temps. Sur un meuble bas ordinaire, ça donne ceci :

- **Côté** : une arête longue, l'avant. L'arrière est contre le mur, le haut sous le plan, le bas au sol.
- **Dessous** : une longue, l'avant.
- **Tablette** : une longue, l'avant. La tablette est en retrait, on ne la voit que de face.
- **Traverse** : deux longues. La traverse avant se voit par en dessous quand on ouvre la porte, elle reçoit donc les deux.
- **Façade** : deux longues et deux courtes, les quatre.
- **Fond** en isorel 3 mm : aucun chant.

## Cote finie chant compris

Dans la [liste de débit](./krojna-lista.html), la cote d'un panneau est **la cote finie, chant compris** : c'est la cote du panneau fini avec la bande collée, tel qu'il entre dans le caisson. Avec une bande de 0,45 mm, la différence est sous le demi-millimètre et en pratique on ne la déduit pas. Avec 1 mm et 2 mm, on la déduit : une façade qui figure dans la liste à 717 × 597 avec une bande de 1 mm sur les quatre arêtes se coupe à 715 × 595, et après le chant elle fait exactement 717 × 597. Qui l'oublie obtient une façade plus grande de 2 mm de chaque côté, et le jeu de 3 mm entre les portes disparaît.

La convention « cote finie chant compris » est celle par défaut dans le programme et peut se changer si l'atelier travaille à l'envers, mais celui qui débite et celui qui plaque doivent tous les deux le savoir.

## Comment se calcule la longueur de bande

La longueur de chant pour une épaisseur est **la somme de toutes les arêtes plaquées de cette épaisseur, majorée de 10 % de chute**. Les dix pour cent couvrent le début et la fin de la bande sur la machine, les morceaux qu'on coupe et l'arête qu'on replaque une deuxième fois. Le pourcentage est réglable ; un atelier avec une plaqueuse manuelle monte en général plus haut.

Exemple : meuble bas 600 × 720 × 560, une porte, une tablette, deux traverses.

| Pièce | Cote (mm) | Chant | Qté | Longueur de bande |
|---|---|---|---|---|
| Côté | 702 × 539 | 1 long · 0,45 | 2 | 2 × 702 = 1404 |
| Dessous | 600 × 539 | 1 long · 0,45 | 1 | 600 |
| Tablette | 562 × 519 | 1 long · 0,45 | 1 | 562 |
| Traverse | 564 × 100 | 2 longs · 0,45 | 2 | 2 × 2 × 564 = 2256 |
| Façade | 717 × 597 | 2 longs, 2 courts · 1 mm | 1 | 2 × 717 + 2 × 597 = 2628 |
| Fond | 717 × 597 | aucun | 1 | 0 |

Total pour la bande de **0,45 mm** : 1404 + 600 + 562 + 2256 = **4822 mm** ; avec 10 % de chute 5304 mm, soit environ **5,3 m**. Total pour la bande de **1 mm** : **2628 mm** ; avec la chute 2891 mm, environ **2,9 m**. Pour un caisson, environ 8,2 m de bande au total, deux épaisseurs, deux décors. Une cuisine de douze éléments avec tiroirs et rangée haute dépasse facilement la centaine de mètres, et là l'estimation « à l'œil » se trompe d'un rouleau.

## Les repères de chant dans la liste de débit

Celui qui débite n'a pas besoin de savoir où va le panneau, le repère des arêtes lui suffit. Le programme en utilise quatre :

- **1 long** : une seule des deux arêtes longues du panneau.
- **2 longs** : les deux arêtes longues, les courtes restent nues.
- **2 longs, 2 courts** : les quatre, typiquement une façade.
- **aucun** : fond et fonds de tiroir en isorel.

« Long » se rapporte au grand côté du panneau, pas à la première cote de la liste. La première cote est le sens du fil et n'a pas d'importance sur le mélaminé blanc, tandis que l'arête longue est toujours la plus grande des deux. Sur un côté de 702 × 539 la longue est 702, c'est l'arête avant verticale ; sur un dessous de 600 × 539 la longue est 600, l'arête avant horizontale.

![Tableau « Par cote » dans le programme TOPICA pour un caisson : six pièces en mélaminé blanc, une façade décor chêne et un fond en isorel, avec la colonne Chant où l'on lit « 1 long », « 2 longs », « 2 longs, 2 courts » et « aucun »](../slike/web/isecak-po-meri-tabela-1600.webp "La colonne Chant dans la liste de débit : repère des arêtes, groupé par matériau.")

## Comment TOPICA le gère

Tu règles l'épaisseur de chant une fois pour le caisson et une fois pour les façades dans les réglages du projet (par défaut 0,45 et 1 mm, décor « comme le panneau »), et le programme note pour chaque pièce quelles arêtes se plaquent et additionne la longueur par épaisseur et par décor, avec la chute que tu as réglée. Le prix du mètre de bande, c'est toi qui le saisis ; non renseigné vaut zéro, le programme ne l'invente pas. La liste de matériaux avec le chant fait partie de la même vue que la liste de débit, voir la section [fonctions](../#mogucnosti) et le terme [chant](../recnik/kant.html) dans le glossaire.

Le chant est un détail tant qu'il y en a assez. Quand il en manque pour les deux dernières façades et que le décor vient d'un autre lot, le détail devient un aller-retour de plus chez le fournisseur.
