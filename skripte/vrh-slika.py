# skripte/vrh-slika.py — slika vrha: pozadina sa Topijem i laptopom (obezbedio vlasnik, slike/izvor/uzor-vrh.webp)
# + PRAVI snimak programa (slike/izvor/snimak-41-…png) postavljen u perspektivi preko ekrana laptopa.
# Pokretanje (jednom, kad se promeni snimak): python3 skripte/vrh-slika.py  → slike/izvor/vrh-topi-laptop.png, pa npm run slike
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

KOREN = Path(__file__).resolve().parent.parent
POZADINA = KOREN / "slike/izvor/uzor-vrh.webp"
SNIMAK = KOREN / "slike/izvor/snimak-41-kuhinja-sonoma-bela-laminat.png"
IZLAZ = KOREN / "slike/izvor/vrh-topi-laptop.png"
UVECANJE = 2  # pozadina 947 × 344 → 1894 × 688, da snimak bude čitljiv
# uglovi stakla ekrana na pozadini 947 × 344: gore levo, gore desno, dole desno, dole levo
UGLOVI = [(433.5, 62.0), (769.0, 46.5), (763.0, 276.0), (409.5, 274.5)]

def koeficijenti(cilj, izvor):
    """8 koeficijenata za Image.transform(PERSPECTIVE): tačka na izlazu → tačka na snimku."""
    import numpy as np
    a = []
    for (x, y), (u, v) in zip(cilj, izvor):
        a.append([x, y, 1, 0, 0, 0, -u * x, -u * y]); a.append([0, 0, 0, x, y, 1, -v * x, -v * y])
    b = [c for p in izvor for c in p]
    return np.linalg.solve(np.array(a, float), np.array(b, float)).tolist()

poz = Image.open(POZADINA).convert("RGB")
poz = poz.resize((poz.width * UVECANJE, poz.height * UVECANJE), Image.LANCZOS)
sn = Image.open(SNIMAK).convert("RGB")
cilj = [(x * UVECANJE, y * UVECANJE) for x, y in UGLOVI]
izvor = [(0, 0), (sn.width, 0), (sn.width, sn.height), (0, sn.height)]
iskrivljen = sn.transform(poz.size, Image.PERSPECTIVE, koeficijenti(cilj, izvor), Image.BICUBIC)
maska = Image.new("L", poz.size, 0)
ImageDraw.Draw(maska).polygon(cilj, fill=255)
maska = maska.filter(ImageFilter.GaussianBlur(0.8))
# blago zatamnjenje snimka da prati svetlo scene (ekran je u senci laptopa, ne svetli jače od pozadine)
iskrivljen = Image.blend(iskrivljen, Image.new("RGB", poz.size, (20, 18, 16)), 0.12)
poz.paste(iskrivljen, (0, 0), maska)
poz.save(IZLAZ)
print("✓", IZLAZ.relative_to(KOREN), poz.size)
