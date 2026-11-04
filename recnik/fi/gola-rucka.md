---
naslov: Gola-profiili (vedinprofiili)
opis: Gola-profiili on runkoon upotettu alumiininen C- tai L-profiili vetimen sijasta. Mikä muuttuu ovessa, sivussa ja allaskaapissa, yleiset virheet ja miten ohjelma käsittelee profiilin.
datum: 2026-11-04
slika: ../slike/web/snimak-13-korpus-sa-fiokama-1600.webp
status: za-proveru
---

Gola-profiili on C- tai L-kirjaimen muotoinen alumiiniprofiili, joka upotetaan runkoon vetimen sijasta: sormet menevät profiilin uraan ja vetävät oven auki. Ovi pysyy sileänä, ja keittiö saa vaakalinjan läpi koko rivin.

## Vakiomitat

- **C**-profiili (yhdelle ovi- tai etusarjariville, yleensä heti työtason alle) tai **L**-profiili (kahden rivin väliin, esim. laatikko laatikon päällä); profiilin mitat valmistajan luettelosta.
- Ovet sahataan **matalammiksi tai kapeammiksi** profiilin verran; [rungon](./korpus.html) sivuun tehdään lovi, johon profiili asettuu.
- Allaskaappi menettää etutukiriman, koska profiili ottaa sen paikan.
- Rako profiilin vieressä ei ole tavallinen 3 mm vaan profiilin antama — katso [ovirako](./zazor-fronta.html).

## Verstaalla

Profiili katkaistaan rivin pituuteen ja ruuvataan sivuihin loveen, ja vasta sitten kiinnitetään ovet; siksi sivun lovi tehdään ennen rungon kokoamista valmistajan piirustuksen mukaan. Yleinen virhe: ovet sahattu tavalliseen mittaan ja lyhennetty jälkikäteen profiilin korkeuden verran, jolloin yhdestä reunasta katoaa reunanauha. Toinen: profiili viedään naapurirungon sivun läpi sen sijaan, että jokaisessa rungossa olisi oma lovensa; profiili ei koskaan kulje levyn läpi. Kolmas: profiili eri värissä kuin oven reunanauha, jolloin linja katkeaa joka kaapin kohdalla.

![Laatikosto TOPICA-ohjelman 3D-näkymässä, laatikoiden etusarjat päällekkäin](../slike/web/snimak-13-korpus-sa-fiokama-1600.webp "Laatikkorivi: kahden rivin väliin tulee L-profiili, työtason alle C-profiili.")

## Näin TOPICA tekee sen

Profiilin ja sen mitat syötät valmistajan lehdeltä yhteen paikkaan, ja ohjelma lyhentää ovet, lisää loven sivuun ja poistaa allaskaapin etutukiriman ([ominaisuudet](../#mogucnosti)).

Ilman vedintä on vähemmän heloja, mutta enemmän mittaamista.
