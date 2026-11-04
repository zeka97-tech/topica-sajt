---
naslov: Logiciel pour cuisines sur mesure
opis: Logiciel de cuisine sur mesure pour menuisiers : pièce, caissons du catalogue, 3D, liste de débit au millimètre, quincaillerie et prix. Windows.
datum: 2026-11-04
slika: ../slike/web/snimak-41-kuhinja-sonoma-bela-laminat-1600.webp
status: za-proveru
---

La cuisine est le travail le plus exigeant du meuble en panneaux : le plus d'éléments, le plus de types (sous-évier, four, angle, hotte) et un client qui change d'avis jusqu'au jour de la pose. TOPICA est faite justement pour ce travail. Tu dessines la pièce, tu alignes les caissons le long du mur, et le programme garde la construction, la liste de débit et le prix justes pendant que tu parles avec le client.

## La pièce d'abord, puis la rangée le long du mur

Tu saisis les murs, la hauteur sous plafond, la fenêtre et où sont l'eau et l'électricité. Puis tu poses les caissons du catalogue : ils viennent se coller au mur et au voisin, et tu changes les cotes en direct, au millimètre. Les cotes standard sont déjà dans le programme : meuble bas de **720** de haut sur pieds de **100 mm**, de **560** de profondeur sous un plan de travail de 600, rangée haute avec le bord inférieur à **1400 mm du sol**. Si l'atelier travaille autrement, tu changes une fois dans les réglages du projet, pas sur chaque caisson. Comment mesurer la pièce avant est dans le guide [comment mesurer une cuisine](../blog/kako-izmeriti-kuhinju.html), et les chiffres sont réunis dans les [cotes standard de la cuisine](../blog/standardne-mere-kuhinje.html).

## Les meubles particuliers que chaque cuisine a

Une cuisine n'est pas une rangée de caisses identiques. Le programme a dans son catalogue les meubles qui se font autrement à l'atelier :

- [Meuble sous-évier](../recnik/sudopera-element.html) : sans traverse arrière, pour que le siphon ait sa place ; la traverse avant reste.
- [Meuble pour four](../recnik/element-za-rernu.html) : la niche pour four encastrable demande au moins 568 mm ; le programme prévient si la niche ne tient pas.
- [Meuble d'angle](../recnik/ugaoni-element.html) : en L à deux bras, avec tablette et support.
- [Hotte](../recnik/aspirator.html) : bord inférieur à 650 mm au-dessus de la plaque de cuisson en électrique, 750 au gaz, selon la notice du fabricant.
- [Plinthe](../recnik/cokla.html) et [plan de travail](../recnik/radna-ploca.html) : se créent sur les caissons sélectionnés, sur une seule ligne, et voyagent avec eux quand tu les déplaces. La plinthe est en retrait et toujours devant le lave-vaisselle.

## Exemple : une rangée basse de 3200 mm

Le mur fait 3200 de long. Tu poses un sous-évier de 800, un meuble pour four de 600, des tiroirs de 600 et deux meubles à porte de 600 chacun. Au-dessus, quatre meubles hauts de 800. Pour chaque caisson, le programme déduit les panneaux : côtés, dessous sous les côtés, deux traverses sous le plan de travail, fond en isorel 3 mm, façade avec chant de 1 mm. Il répartit les charnières selon la hauteur de façade (jusqu'à 900 mm, deux), prend les coulisses selon la profondeur du caisson, les pieds par quatre par meuble jusqu'à 800 mm de large.

Puis le client dit que les tiroirs feront 450, et la porte d'à côté 750. Tu changes deux largeurs. Chaque panneau de ces deux caissons prend sa nouvelle cote, le chant et la quincaillerie se recalculent, le plan de travail et la plinthe restent sur une seule ligne de 3200. Il n'y a pas de commande « recalculer » ; [le programme fonctionne comme ça](../#kako-radi) depuis le début.

![Cuisine en 3D dans le programme TOPICA : rangée basse et haute le long du mur avec façades décor sonoma et caissons blancs, stratifié gris au sol](../slike/web/snimak-41-kuhinja-sonoma-bela-laminat-1600.webp "Le même projet qui donne la liste de débit, montré comme le client le comprend.")

## Ce que tu obtiens à la fin

Pour tout le projet : la liste de débit par caisson et par matériau, la vue « Par cote » à copier et à envoyer au débit, la liste de quincaillerie, la consommation de panneaux et le prix d'après tes prix de panneaux, de chant, de quincaillerie et de main-d'œuvre. Tout peut sortir en PDF. Comment se lit la liste et pourquoi la première cote est le sens du fil, c'est expliqué dans le texte sur la [liste de débit](../blog/krojna-lista.html) ; la liste complète de ce que fait le programme est dans les [fonctions](../#mogucnosti).

La cuisine se fait toujours à la main. Le programme veille seulement à ce que chacun de ces cent chiffres soit juste quand tu pars au débit.
