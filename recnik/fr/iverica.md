---
naslov: Panneau de particules mélaminé 18 mm
opis: Le panneau de particules mélaminé 18 mm est le matériau de base du meuble en panneaux. Épaisseurs, formats courants de plaques, débit et erreurs fréquentes dans le calcul du matériau.
datum: 2026-11-04
slika: ../slike/web/snimak-46-izbliza-front-1600.webp
status: za-proveru
---

Le panneau de particules (aggloméré) est une plaque de particules de bois pressées avec de la colle ; le panneau mélaminé porte sur ses deux faces un papier décor cuit, prêt pour le caisson et la façade sans peinture. C'est le matériau de base du meuble en panneaux : côtés, dessous, tablettes, traverses et façades en sont faits, et les arêtes se ferment avec un [chant](./kant.html).

## Cotes standard

- Épaisseur **18 mm** pour le caisson et la façade ; variantes 16, 19 et 25 mm.
- Formats courants de plaques : **2800 × 2070 mm** (Egger) ou **2750 × 1830 mm** (Kronospan, Kastamonu) ; la première fait environ 5,8 m², la seconde environ 5,0 m².
- Le fond n'est pas en particules mais en **isorel (HDF) 3 mm**.
- Chant **0,45 mm** sur les arêtes visibles du caisson, **1 mm** sur la façade.

## À l'atelier

La plaque se débite d'après la liste de débit, puis les arêtes se plaquent. Un décor veiné a un sens du fil, donc les pièces au décor se placent sur la plaque dans une seule direction, et le mélaminé blanc comme il fait le moins de chute. Une coupe sans inciseur arrache le décor en sous-face ; on débite donc à la scie à format avec inciseur, et à défaut on tourne la face visible vers le haut. Erreur fréquente : la consommation calculée en m² de pièces sans chute, et à la fin il manque une demi-plaque ; la chute dépend de la façon dont les cotes des pièces s'alignent le long du grand côté de la plaque. Autre erreur : plaques de deux fabricants dans le « même » blanc, qui ne sont pas les mêmes sous la lumière.

![Façade en mélaminé de près en vue 3D dans le programme TOPICA, avec le décor et le chant visibles](../slike/web/snimak-46-izbliza-front-1600.webp "Décor et chant tels qu'ils seront sur la façade finie.")

## Comment TOPICA le gère

Le programme suit le matériau par épaisseur et par décor, additionne les m² de toutes les pièces de la [liste de débit](./krojna-lista.html) et multiplie par le prix que tu as saisi ([fonctions](../#mogucnosti)) ; le placement des pièces sur la plaque (nesting) n'existe pas dans cette version.

La plaque est la même pour tout le monde ; la différence, c'est ce qui en part dans le caisson et ce qui part en chute.
