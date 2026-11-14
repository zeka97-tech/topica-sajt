// skripte/lib/pocetna.mjs — delovi početne koje build računa unapred, da crteži, spisak i zbirovi budu u HTML-u i bez JS-a.
// Koristi iste module kao pregledač: proracun.js (formule), crtez.js (crtež), raspored.js (plan), spisak-prikaz.js (redovi).
import { crtezSvg } from "../../src/skripte/crtez.js";
import { izracunaj, MODELI } from "../../src/skripte/proracun.js";
import { planSvg } from "../../src/skripte/raspored.js";
import { redoviHtml, zbirBrojevi, recnikIz, popuniRecenicu } from "../../src/skripte/spisak-prikaz.js";

export const PODRAZUMEVANI_MODEL = "base-with-doors";

/** Broj kao tekst na jeziku stranice (decimalni zarez ili tačka). */
export const formatBroja = (kod) => (n, decimala) => new Intl.NumberFormat(kod, decimala == null ? { maximumFractionDigits: 2 } : { minimumFractionDigits: decimala, maximumFractionDigits: decimala }).format(n);

/** Sve {{sistem.*}} vrednosti početne za jezik `kod` i njegov tekst `t`. */
export function sistemPocetne(t, kod) {
  const fmt = formatBroja(kod), r = recnikIz(t.spisak);
  const rez = izracunaj(PODRAZUMEVANI_MODEL, {});
  const z = zbirBrojevi(rez.zbir, fmt);
  const u = rez.ulaz, recenica = { model: t.konf.model[PODRAZUMEVANI_MODEL], s: u.sirina, v: u.visina, d: u.dubina, n: z.komada };
  const plakar = izracunaj("wardrobe", {}).crtez, komoda = izracunaj("dresser", {}).crtez;
  return {
    crtezPlakar: crtezSvg(plakar, { naslov: t.namene.plakari.alt }),
    crtezKomoda: crtezSvg(komoda, { naslov: t.namene.komode.alt }),
    konfCrtezMali: crtezSvg(rez.crtez).replace('class="crtez"', 'class="crtez" data-front="drvo"'),
    konfCrtezVeliki: crtezSvg(rez.crtez, { kote: true }).replace('class="crtez"', 'class="crtez" data-front="drvo"'),
    spisakOpis: popuniRecenicu(t.spisak.primer, recenica),
    spisakRedovi: redoviHtml(rez.daske, r, fmt),
    zbirPloca: z.ploca, zbirLesonit: z.lesonit, zbirKant: z.kant,
    planSvg: planSvg(rez.daske, r, { ostatak: t.spisak.plan.ostatak }),
    recnikHtml: Object.entries(r).map(([k, v]) => `<li data-k="${k}">${v}</li>`).join("") + Object.entries(t.konf.model).map(([k, v]) => `<li data-k="model.${k}">${v}</li>`).join(""),
    modeliBroj: String(Object.keys(MODELI).length),
  };
}
