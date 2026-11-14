// crtez.js — izometrijski SVG crtež elementa (stil predloga dizajna): čista funkcija, radi i u pregledaču i u build-u.
// Ulaz (spec) dolazi iz proracun.js: { sirina, visina, dubina, cokla, frontovi: [{x, y, w, h, vrsta, rucka}], police: [y…] } u mm.
// Boje i debljine linija su CSS klase (.crt-*) iz src/stil/crtez.css — ovde nema nijedne boje.
const C = Math.cos(Math.PI / 6), S = 0.5;
/** mm (x udesno po širini, y naviše, z u dubinu) → tačka na ekranu */
const tacka = (x, y, z) => [(x + z) * C, (x - z) * S - y];
const put = (tacke) => tacke.map((t) => t.map((n) => n.toFixed(1)).join(",")).join(" ");
const poli = (klasa, tacke) => `<polygon class="${klasa}" points="${put(tacke)}"/>`;
const linija = (klasa, a, b) => `<line class="${klasa}" x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}"/>`;

/** Kvadar: tri vidljive strane (gore, čelo levo, bok desno). */
function kvadar(x, y, z, w, h, d, k) {
  return poli(k + "-gore", [tacka(x, y + h, z), tacka(x + w, y + h, z), tacka(x + w, y + h, z + d), tacka(x, y + h, z + d)])
    + poli(k + "-bok", [tacka(x + w, y, z), tacka(x + w, y, z + d), tacka(x + w, y + h, z + d), tacka(x + w, y + h, z)])
    + poli(k + "-lice", [tacka(x, y, z), tacka(x + w, y, z), tacka(x + w, y + h, z), tacka(x, y + h, z)]);
}

function kota(a, b, pomak, tekst, m) {
  const p = [a[0] + pomak[0] * m, a[1] + pomak[1] * m], q = [b[0] + pomak[0] * m, b[1] + pomak[1] * m];
  const s = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2], r = 5 * m, w = 92 * m, h = 36 * m;
  return `<g class="crt-kota">${linija("crt-kota-linija", p, q)}<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${r.toFixed(1)}"/><circle cx="${q[0].toFixed(1)}" cy="${q[1].toFixed(1)}" r="${r.toFixed(1)}"/>`
    + `<rect x="${(s[0] - w / 2).toFixed(1)}" y="${(s[1] - h / 2).toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" rx="${(h / 2).toFixed(1)}"/><text x="${s[0].toFixed(1)}" y="${(s[1] + 7 * m).toFixed(1)}" font-size="${(20 * m).toFixed(1)}" text-anchor="middle">${tekst}</text></g>`;
}

function rucka(f) {
  if (f.rucka === "nema") return "";
  if (f.vrsta === "fioka") { const y = f.y + f.h / 2, d = Math.min(180, f.w * 0.3); return linija("crt-rucka", tacka(f.x + f.w / 2 - d / 2, y, 0), tacka(f.x + f.w / 2 + d / 2, y, 0)); }
  const x = f.rucka === "levo" ? f.x + 40 : f.x + f.w - 40;
  const d = Math.min(160, f.h * 0.25), y = f.ruckaDole ? f.y + 60 : f.y + f.h - 60 - d;
  return linija("crt-rucka", tacka(x, y, 0), tacka(x, y + d, 0));
}

/** Vrati SVG (string). opcije: { kote: bool, naslov: string (za čitač ekrana) } */
export function crtezSvg(spec, opcije = {}) {
  const { sirina: W, visina: H, dubina: D, cokla = 0 } = spec;
  const delovi = [];
  if (cokla > 0) delovi.push(kvadar(30, 0, 40, W - 60, cokla, D - 80, "crt-cokla"));
  delovi.push(kvadar(0, cokla, 0, W, H, D, "crt"));
  for (const y of spec.police || []) delovi.push(linija("crt-polica", tacka(18, cokla + y, 0), tacka(W - 18, cokla + y, 0)));
  for (const f of spec.frontovi || []) {
    const g = { ...f, y: f.y + cokla };
    delovi.push(poli("crt-front", [tacka(g.x, g.y, 0), tacka(g.x + g.w, g.y, 0), tacka(g.x + g.w, g.y + g.h, 0), tacka(g.x, g.y + g.h, 0)]) + rucka(g));
  }
  const uk = H + cokla;
  // m: koliko mm crteža staje u jedan „piksel" kote, da natpisi budu iste veličine za mali i veliki element
  const m = Math.max((W + D) * C, uk + (W + D) * S) / 330;
  if (opcije.kote) {
    delovi.push(kota(tacka(0, 0, 0), tacka(W, 0, 0), [-30, 40], W, m));
    delovi.push(kota(tacka(0, cokla, 0), tacka(0, uk, 0), [-44, 0], H, m));
    delovi.push(kota(tacka(W, 0, 0), tacka(W, 0, D), [30, 40], D, m));
  }
  const rub = (opcije.kote ? 96 : 14) * m;
  const minX = -rub, maxX = (W + D) * C + rub, minY = -D * S - uk - 14 * m, maxY = W * S + rub;
  const naslov = opcije.naslov ? `<title>${opcije.naslov}</title>` : "";
  return `<svg class="crtez" viewBox="${minX.toFixed(0)} ${minY.toFixed(0)} ${(maxX - minX).toFixed(0)} ${(maxY - minY).toFixed(0)}" role="img" ${opcije.naslov ? "" : 'aria-hidden="true"'}>${naslov}`
    + `<ellipse class="crt-senka" cx="${((W + D) * C / 2).toFixed(0)}" cy="${((W - D) * S / 2 + 10).toFixed(0)}" rx="${((W + D) * C * 0.46).toFixed(0)}" ry="${((W + D) * S * 0.5).toFixed(0)}"/>${delovi.join("")}</svg>`;
}
