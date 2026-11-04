---
naslov: Combien coûte une cuisine sur mesure : comment l'artisan calcule le prix
opis: Prix d'une cuisine sur mesure : matériau au m², chant au mètre, quincaillerie à la pièce, main-d'œuvre et marge. Ce qu'on oublie et le calcul.
datum: 2026-11-04
slika: ../slike/web/snimak-37-cena-1600.webp
status: za-proveru
---

Le prix d'une cuisine sur mesure n'est pas un chiffre sorti de la tête mais la somme de cinq postes : matériau, chant, quincaillerie, main-d'œuvre et marge. Qui calcule comme ça sait pourquoi le prix est ce qu'il est et peut le défendre devant le client. Qui calcule « au mètre linéaire » à l'œil s'en sort bien sur une cuisine simple, et perd sur celle avec tiroirs et colonnes. Il n'y a ici ni prix en dinars ni en euros, parce que chaque atelier a les siens ; il y a la façon dont ces prix s'assemblent.

## 1. Matériau : les mètres carrés de panneau, par type

On compte d'abord les mètres carrés de chaque type de panneau séparément, parce qu'ils s'achètent séparément : [mélaminé](../recnik/iverica.html) blanc 18 mm pour les caissons, décor 18 mm pour les façades, isorel 3 mm pour les fonds et les fonds de tiroir, plan de travail 38 mm au mètre linéaire. La surface vient de la [liste de débit](./krojna-lista.html) : longueur × largeur × quantité, additionné par matériau. Exemple du programme : un caisson bas 600 × 720 × 560 a 8 pièces et 2,34 m² de panneau, dont 1,48 m² de mélaminé blanc, 0,43 m² de décor pour la façade et 0,43 m² d'isorel.

Cette surface est nette. La plaque ne s'utilise pas entièrement : les formats courants sont 2800 × 2070 mm ou 2750 × 1830 mm, et après le débit il reste la chute des coupes, des rives et des morceaux qui ne tiennent nulle part. En réalité, **le rendement d'une plaque est d'environ 80 %**, donc tu divises les mètres carrés nets par 0,8 pour avoir ce que tu achètes vraiment. Une cuisine de 10 m² nets de mélaminé blanc demande environ 12,5 m² de panneau acheté. Qui ne facture que le net paie la chute de sa poche.

## 2. Chant : les mètres linéaires plus la chute

Le [chant](../recnik/kant.html) se compte au mètre linéaire, séparément pour chaque épaisseur, parce que les prix sont différents aussi : 0,45 mm pour les arêtes visibles du caisson et des tablettes, 1 mm pour les façades sur les quatre arêtes, 2 mm pour les arêtes plus sollicitées. La longueur est la somme de toutes les arêtes plaquées de la liste de débit plus **10 % de chute** pour le début et la fin de la bande et pour le rebut. Une façade de 717 × 597 porte à elle seule 2,63 m de chant de 1 mm ; sur vingt façades ça fait plus de 50 m, ce qui n'est pas rien. Les détails sont dans le guide [sur l'épaisseur et la longueur du chant](./kant-debljina-i-duzina.html).

## 3. Quincaillerie : à la pièce, d'après la liste

La quincaillerie se compte, elle ne s'estime pas. La liste pour une cuisine ordinaire : charnières (une façade jusqu'à 900 mm de haut en porte 2, jusqu'à 1600 trois, jusqu'à 2000 quatre), coulisses ou tiroirs métalliques par tiroir, pieds (4 pièces jusqu'à 800 mm de large, 6 au-delà), poignées par façade, excentriques et tourillons ou vis Confirmat par assemblage, clips de plinthe, suspensions de meubles hauts, taquets de tablettes. Chaque poste a un prix à la pièce du catalogue du fournisseur et une quantité tirée du projet. Les tiroirs sont là les plus chers : un meuble à trois tiroirs sur tiroirs métalliques coûte plus en quincaillerie que trois meubles à portes.

## 4. Main-d'œuvre : par élément ou par m² de façade

Deux méthodes courantes. **Par élément** : chaque caisson, bas ou haut, porte le même montant de main-d'œuvre, et les plus complexes (tiroirs, angle, four) un supplément. Simple et rapide, bon pour les cuisines en ligne. **Par m² de façade** : la main-d'œuvre se calcule sur la surface des façades, donc un grand placard porte plus qu'un petit meuble haut. Plus juste pour les placards et les colonnes. Quelle que soit celle que tu choisis, la main-d'œuvre comprend le débit, le plaquage, le perçage, l'assemblage et l'essai à l'atelier. La pose chez le client est un poste à part, voir plus bas.

## 5. Marge

Sur la somme du matériau, du chant, de la quincaillerie et de la main-d'œuvre vient **la marge en pourcentage**. Ce n'est pas le gain de l'artisan, puisque le travail est déjà payé ; elle couvre ce qui ne se voit pas dans le projet : l'outillage, l'électricité, les machines qui s'usent, les jours sans travail et le risque que quelque chose tourne mal. Un atelier qui travaille sans marge travaille pour un salaire, pas pour lui-même.

## Ce que les gens oublient

- **Transport** : les panneaux du fournisseur à l'atelier, les meubles finis chez le client, deux fois la camionnette.
- **Pose** : un jour ou deux chez le client, avec le portage à l'étage, le nivellement, la découpe pour l'évier et la plaque de cuisson au gabarit du fabricant.
- **Chute** : ces 20 % de plaque et 10 % de chant ; et l'isorel, que tout le monde oublie parce qu'il est bon marché.
- **Modifications** : le client qui change trois fois de décor ou ajoute un tiroir ; chaque modification est un nouveau calcul et, si le panneau est déjà coupé, un nouveau panneau.
- **Petites fournitures** : vis, tourillons, colle, silicone, profils de plan de travail, profil mural ; rien un par un, sensible une fois réuni.
- **Sous-traitance** : la coupe et le plaquage chez un autre si tu n'as pas tes machines.
- **Appareils et plan de travail** : qui les fournit, qui les pose et qui répond si la découpe ne correspond pas.

Qui a une liste n'a pas de surprises ; qui n'en a pas les voit à la fin du chantier, quand il est trop tard pour les facturer.

## Comment TOPICA le gère

Le programme ne connaît pas tes prix et ne les invente pas. Dans les **Réglages de l'atelier**, sous « Matériaux et prix », tu saisis le prix des panneaux par type, le chant au mètre pour chaque épaisseur (0,4 ; 0,45 ; 0,8 ; 1 et 2 mm), la quincaillerie à la pièce, **la main-d'œuvre par élément** et **la marge** en pourcentage. Un champ que tu n'as pas rempli indique « non renseigné » et compte pour zéro, sans avertissement, de sorte que le prix du rapport ne contient jamais un chiffre que tu n'as pas donné. Une fois les prix saisis, le programme additionne pour chaque projet les mètres carrés par matériau, les mètres de chant avec la chute, la quincaillerie à la pièce et la main-d'œuvre par élément, ajoute la marge et donne dans les Rapports, onglet « Prix », le prix par projet, à côté des onglets « Matériaux » et « Quincaillerie » où l'on voit de quoi il est fait. Tu changes la largeur d'un meuble ou tu ajoutes un tiroir, le prix change à l'instant. Le tour de ce que le programme donne est dans la section [Fonctions](../#mogucnosti).

![Réglages de l'atelier dans le programme TOPICA, section « Prix et devis » : champs pour la main-d'œuvre par élément et la marge en pourcentage, le chant au mètre de 0,4 à 2 mm et les pièces de hotte, champs vides marqués « non renseigné »](../slike/web/snimak-37-cena-1600.webp "Les prix, c'est l'artisan qui les saisit, une fois pour l'atelier ; non renseigné vaut zéro, le programme ne suppose rien.")

Le prix d'une cuisine sur mesure est une somme que tu peux montrer sur papier, poste par poste. Quand le programme l'additionne à partir de tes prix, il ne te reste que ce que le programme ne peut pas faire : jauger le client et décider à quel point tu veux ce chantier.
