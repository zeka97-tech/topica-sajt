// raspored.js — ilustracija krojnog plana: delovi složeni u redove na tabli (prva mera = pravac goda = duža strana table).
// Ovo NIJE optimizacija krojenja (program je u ovoj verziji nema); služi da se vidi koliko table element zauzme.
export const TABLA = { duzina: 2800, sirina: 2070, rez: 4 };      // tabla iverice 18 mm i širina reza, mm
export const TABLA_LESONITA = { duzina: 2750, sirina: 1830, rez: 4 }; // tabla lesonita 3 mm

/** Svaki komad posebno: [{ deo, materijal, w (duž goda), h, red (indeks reda u spisku), i (redni komad u redu) }] */
export function komadiIz(daske, lesonit = false) {
  const k = [];
  daske.forEach((d, red) => { if ((d.materijal === "ledja") === lesonit) for (let i = 0; i < d.komada; i++) k.push({ deo: d.deo, materijal: d.materijal, w: d.duzina, h: d.sirina, red, i }); });
  return k;
}

/** Složi komade u redove; vrati table: [[{…komad, x, y}]]. Komad veći od table se preskače. */
export function rasporedi(komadi, tabla = TABLA) {
  const sorta = [...komadi].sort((a, b) => b.h - a.h || b.w - a.w);
  const table = [[]];
  let x = 0, y = 0, red = 0;
  for (const k of sorta) {
    if (k.w > tabla.duzina || k.h > tabla.sirina) continue;
    if (x + k.w > tabla.duzina) { x = 0; y += red + tabla.rez; red = 0; }
    if (y + k.h > tabla.sirina) { table.push([]); x = 0; y = 0; red = 0; }
    table[table.length - 1].push({ ...k, x, y });
    x += k.w + tabla.rez; red = Math.max(red, k.h);
  }
  return table;
}

/** SVG krojnog plana ploče 18 mm (string). recnik: { "deo.<deo>": naziv }, natpisi: { ostatak } */
export function planSvg(daske, recnik = {}, natpisi = {}, tabla = TABLA) {
  const table = rasporedi(komadiIz(daske), tabla);
  const razmak = 120, visina = table.length * tabla.sirina + (table.length - 1) * razmak;
  let s = `<svg class="plan" viewBox="-20 -20 ${tabla.duzina + 40} ${visina + 40}" role="img" aria-hidden="true">`;
  table.forEach((komadi, i) => {
    const oy = i * (tabla.sirina + razmak);
    s += `<rect class="plan-tabla" x="0" y="${oy}" width="${tabla.duzina}" height="${tabla.sirina}" rx="24"/>`;
    for (const k of komadi) {
      s += `<rect class="plan-deo plan-${k.materijal}" x="${k.x + 8}" y="${oy + k.y + 8}" width="${k.w - 4}" height="${k.h - 4}" rx="14"/>`;
      const naziv = recnik[`deo.${k.deo}`] || "";
      if (naziv && k.h >= 150 && naziv.length * 46 < k.w - 40) s += `<text class="plan-natpis" x="${k.x + k.w / 2}" y="${oy + k.y + k.h / 2 + 28}" text-anchor="middle" font-size="76">${naziv}</text>`;
    }
    if (natpisi.ostatak && i === table.length - 1) s += `<text class="plan-ostatak" x="${tabla.duzina - 50}" y="${oy + tabla.sirina - 60}" text-anchor="end" font-size="68">${natpisi.ostatak}</text>`;
  });
  return s + "</svg>";
}
