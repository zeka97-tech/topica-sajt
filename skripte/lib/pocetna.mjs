// skripte/lib/pocetna.mjs — delovi početne koje build računa unapred (da tekst i crteži budu u HTML-u i bez JS-a)
import { crtezSvg } from "../../src/skripte/crtez.js";

/** Statični crteži za kartice po nameni (plakar, komoda) — isti crtač kao u konfiguratoru. */
export function crteziPocetne(t) {
  const plakar = { sirina: 1000, visina: 2100, dubina: 600, cokla: 100, frontovi: [{ x: 2, y: 2, w: 497, h: 2096, vrsta: "vrata", rucka: "desno", ruckaDole: true }, { x: 501, y: 2, w: 497, h: 2096, vrsta: "vrata", rucka: "levo", ruckaDole: true }] };
  const komoda = { sirina: 1000, visina: 800, dubina: 450, cokla: 100, frontovi: [0, 1, 2, 3].map((i) => ({ x: 2, y: 2 + i * 199.5, w: 996, h: 197, vrsta: "fioka" })) };
  return { crtezPlakar: crtezSvg(plakar, { naslov: t.namene.plakari.alt }), crtezKomoda: crtezSvg(komoda, { naslov: t.namene.komode.alt }) };
}
