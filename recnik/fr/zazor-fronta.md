---
naslov: Jeu de façade
opis: Le jeu de façade est l'écart entre façades voisines (3 mm) et au bord du meuble (1,5 mm). Comment se calcule la cote de façade, exemple 600 → 597, et erreurs fréquentes.
datum: 2026-11-04
slika: ../slike/web/isecak-front-1600.webp
status: za-proveru
---

Le jeu de façade est l'écart entre deux façades voisines, et entre la façade et le bord du meuble, qui laisse la place aux portes et aux tiroirs pour s'ouvrir sans frotter. Sans jeu, les façades se touchent, et chaque millimètre de sol de travers se voit dans le joint.

## Cotes standard

- **3 mm** entre deux façades voisines (programme).
- **1,5 mm** par bord de meuble, de sorte que deux caissons voisins redonnent 3 mm entre leurs façades.
- Exemple : [caisson](./korpus.html) de 600 de large avec une porte → façade de **597 mm** (600 − 2 × 1,5) ; hauteur 720 → façade de **717 mm**.
- Deux vantaux sur 800 : 800 − 2 × 1,5 − 3 = 794, soit **397 mm** par vantail.
- Avec un [profil Gola](./gola-rucka.html) c'est le profil qui dicte le jeu, avec le [push-to-open](./push-sistem.html) il augmente de la course du poussoir (environ 2–3 mm).

## À l'atelier

Le jeu se débite dans la façade, il ne se laisse pas à la pose : la façade est toujours plus petite que le caisson du jeu, et la porte se règle ensuite sur la charnière en profondeur, latéralement et en hauteur pour que les joints soient égaux. Erreur fréquente : façade à la pleine cote du caisson (600 × 720), et les portes des meubles voisins frottent et doivent être recoupées, ce qui enlève le chant. Autre erreur : jeu de 3 mm plus l'épaisseur du chant en prime ; la cote de la liste de débit est la cote finie chant compris, donc 597 veut dire 597 avec le chant. Troisième : jeu différent sur la rangée haute et la rangée basse, et les lignes de joints ne tombent pas l'une au-dessus de l'autre.

![Détail d'une façade dans le programme TOPICA avec les cotes et le jeu par rapport au bord du caisson](../slike/web/isecak-front-1600.webp "La façade est plus petite que le caisson du jeu de chaque côté.")

## Comment TOPICA le gère

Le jeu est à un seul endroit dans les réglages (3 / 1,5 mm) et le programme le compte dans la cote de chaque [façade](./front.html) et dans la liste de débit ; quand tu changes la division de la façade, les jeux se recalculent ([comment ça marche](../#kako-radi)).

Trois millimètres, c'est une petite cote, tant qu'ils y sont.
