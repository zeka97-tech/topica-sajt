// skripte/lib/pocetna.mjs — delovi početne koje build računa unapred, da crtež, spisak, okov i zbirovi budu u HTML-u i bez JS-a.
// Koristi iste module kao pregledač: proracun.js (formule i okov), crtez.js (2D crtež), raspored.js (plan), spisak-prikaz.js (redovi).
import { crtezSvg } from "../../src/skripte/crtez.js";
import { izracunaj, okovi, MODELI } from "../../src/skripte/proracun.js";
import { planSvg } from "../../src/skripte/raspored.js";
import { redoviHtml, zbirBrojevi, recnikIz, popuniRecenicu, okoviHtml } from "../../src/skripte/spisak-prikaz.js";

export const PODRAZUMEVANI_MODEL = "base-with-doors";
export const PODRAZUMEVANO = { korpus: "mat-white", front: "mat-oak", rucka: "stangla" };

/** Broj kao tekst na jeziku stranice (decimalni zarez ili tačka). */
export const formatBroja = (kod) => (n, decimala) => new Intl.NumberFormat(kod, decimala == null ? { maximumFractionDigits: 2 } : { minimumFractionDigits: decimala, maximumFractionDigits: decimala }).format(n);

/** Sve {{sistem.*}} vrednosti početne za jezik `kod` i njegov tekst `t`. */
export function sistemPocetne(t, kod) {
  const fmt = formatBroja(kod), r = recnikIz(t.spisak, t.konf);
  const rez = izracunaj(PODRAZUMEVANI_MODEL, {});
  const z = zbirBrojevi(rez.zbir, fmt);
  const u = rez.ulaz, recenica = { model: t.konf.model[PODRAZUMEVANI_MODEL], s: u.sirina, v: u.visina, d: u.dubina, n: z.komada };
  const svg = (s) => s.replace('class="crtez"', `class="crtez" data-front="${PODRAZUMEVANO.front}" data-korpus="${PODRAZUMEVANO.korpus}"`);
  return {
    konfCrtezVeliki: svg(crtezSvg(rez.crtez, { kote: true })),
    konfOpis: popuniRecenicu(t.konf.opis_platna, { ...recenica, korpus: t.konf.dezen[PODRAZUMEVANO.korpus], front: t.konf.dezen[PODRAZUMEVANO.front] }),
    konfOkovi: okoviHtml(okovi(PODRAZUMEVANI_MODEL, {}, PODRAZUMEVANO.rucka), r),
    spisakOpis: popuniRecenicu(t.spisak.primer, recenica),
    spisakRedovi: redoviHtml(rez.daske, r, fmt),
    zbirPloca: z.ploca, zbirLesonit: z.lesonit, zbirKant: z.kant,
    planSvg: planSvg(rez.daske, r, { ostatak: t.spisak.plan.ostatak }),
    recnikHtml: Object.entries(r).map(([k, v]) => `<li data-k="${k}">${v}</li>`).join(""),
    modeliBroj: String(Object.keys(MODELI).length),
  };
}
