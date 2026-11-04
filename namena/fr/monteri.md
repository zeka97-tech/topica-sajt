---
naslov: Pour les poseurs et ceux qui font débiter ailleurs
opis: Logiciel pour poseurs de cuisines et artisans qui font débiter leurs panneaux chez un prestataire : liste de débit « Par cote » à copier et envoyer, quincaillerie à la pièce, projet en un seul fichier. Windows.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

De plus en plus d'artisans travaillent sans scie à format : ils mesurent chez le client, commandent la coupe et le plaquage chez un prestataire, puis assemblent et posent. Là, la liste de débit est le seul papier qui passe de tes mains à d'autres. Si elle est juste, le prestataire ne t'appelle pas ; si elle ne l'est pas, l'erreur se voit à la pose. TOPICA fait cette liste à partir du projet, pas de ton carnet.

## Une liste que le prestataire comprend

La vue « Par cote » donne les cotes identiques sur une ligne, groupées par matériau et par épaisseur, avec le repère de [chant](../recnik/kant.html) et la quantité, exactement comme on débite : d'abord le mélaminé blanc 18 mm, puis les façades, puis l'isorel. La première cote est le sens du fil, donc les façades sont écrites debout, et l'isorel porte le repère « sans fil » ; le prestataire n'a pas à deviner comment le veinage est orienté. Les cotes sont finies, chant compris, ce qui est le réglage par défaut du programme et vaut la peine d'être dit au prestataire dans le premier message. Tu copies la liste d'un clic et tu l'envoies par message ou par e-mail, ou tu l'imprimes en PDF. Ce que veut dire chaque ligne est dans le glossaire sous [liste de débit](../recnik/krojna-lista.html).

## Exemple : ce qui part dans le message

Caisson bas 600 × 720 × 560 avec porte et tablette, huit pièces :

| Pièce | Cote (mm) | Ép. | Chant | Qté |
|---|---|---|---|---|
| Côté | 702 × 539 | 18 | 1 long | 2 |
| Dessous | 600 × 539 | 18 | 1 long | 1 |
| Tablette | 562 × 519 | 18 | 1 long | 1 |
| Traverse | 564 × 100 | 18 | 2 longs | 2 |
| Façade | 717 × 597 | 18 | 2 longs, 2 courts | 1 |
| Fond (isorel) | 717 × 597 | 3 | aucun | 1 |

Une cuisine de douze éléments, c'est une centaine de lignes comme ça. Le programme les assemble pour tous les caissons ensemble, et donne avec elles la consommation totale de panneaux en m² et la longueur de chant avec 10 % de chute, donc tu sais combien de plaques et combien de mètres de bande commander.

![Tableau « Par cote » du programme TOPICA : lignes de pièces avec la cote en millimètres, l'épaisseur, le repère de chant et la quantité, groupées par matériau](../slike/web/isecak-po-meri-tabela-1600.webp "Voilà à quoi ressemble ce que tu copies et envoies à la coupe.")

## Quincaillerie et matériau avant d'aller au magasin

Le poseur achète sa quincaillerie lui-même et l'achète une fois. Le programme donne avec la liste des pièces la liste de quincaillerie : [charnières](../recnik/sarka.html) selon la hauteur de façade (jusqu'à 900 mm deux, jusqu'à 1600 trois), [coulisses](../recnik/fioka-i-vodjica.html) comme la plus grande longueur nominale qui tient dans la profondeur du caisson, pieds par quatre par meuble jusqu'à 800 mm de large et six au-delà, taquets de tablettes au System 32. Rien de tout ça ne se recopie depuis le plan.

## Le projet est un seul fichier

Pas de compte ni de serveur : le projet est un fichier sur ton ordinateur. Tu l'envoies au collègue qui débite, tu l'emportes sur le portable à la pose et tu y ouvres la 3D avec les cotes jusqu'au mur, au voisin et au sol, pour montrer au client où va quoi avant de percer le premier trou. Comment mesurer l'espace pour que la liste soit juste est dans le guide [comment mesurer une cuisine](../blog/kako-izmeriti-kuhinju.html) ; ce que le programme donne d'autre est dans les [fonctions](../#mogucnosti).

## Ce que le programme ne fait pas dans cette version

Il ne fait ni fichier CNC ni plan de débit (nesting). Ça, le prestataire le fait sur son programme et sur sa scie ; ce qu'il lui faut, c'est une liste juste, et c'est ce que tu obtiens. Tout le chemin de la pièce à cette liste, ce sont [trois étapes](../#kako-radi).

Fais la prochaine liste pour le prestataire dans le programme, puis compare-la avec celle du carnet.
