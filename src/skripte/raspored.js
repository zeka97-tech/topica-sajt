// raspored.js — ilustracija krojnog plana: delovi od ploče 18 mm složeni u redove na tabli (prva mera = pravac goda = duža strana table).
// Ovo NIJE optimizacija krojenja (program je u ovoj verziji nema); služi da se vidi koliko table element zauzme.
export const TABLA = { duzina: 2800, sirina: 2070, rez: 4 }; // uobičajena tabla iverice i širina reza testere, mm

/** daske: [{ deo, komada, duzina, sirina, materijal }] → { table: [[{deo, materijal, x, y, w, h}]], zauzeto: udeo prve table } */
export function rasporedi(daske, tabla = TABLA) {
  const komadi = [];
  for (const d of daske) {
    if (d.materijal === "ledja") continue; // lesonit 3 mm ide sa druge table
    for (let i = 0; i < d.komada; i++) komadi.push({ deo: d.deo, materijal: d.materijal, w: d.duzina, h: d.sirina });
  }
  komadi.sort((a, b) => b.h - a.h || b.w - a.w);
  const table = [[]];
  let x = 0, y = 0, red = 0;
  for (const k of komadi) {
    if (k.w > tabla.duzina || k.h > tabla.sirina) continue; // deo veći od table se ne crta
    if (x + k.w > tabla.duzina) { x = 0; y += red + tabla.rez; red = 0; }
    if (y + k.h > tabla.sirina) { table.push([]); x = 0; y = 0; red = 0; }
    table[table.length - 1].push({ ...k, x, y });
    x += k.w + tabla.rez; red = Math.max(red, k.h);
  }
  const povrsina = table[0].reduce((s, k) => s + k.w * k.h, 0);
  return { table, zauzeto: povrsina / (tabla.duzina * tabla.sirina) };
}

/** SVG krojnog plana (string). recnik: { [deo]: naziv }, natpisi: { ostatak } */
export function planSvg(daske, recnik = {}, natpisi = {}, tabla = TABLA) {
  const { table } = rasporedi(daske, tabla);
  const razmak = 120, visina = table.length * tabla.sirina + (table.length - 1) * razmak;
  let s = `<svg class="plan" viewBox="-20 -20 ${tabla.duzina + 40} ${visina + 40}" role="img" aria-hidden="true">`;
  table.forEach((komadi, i) => {
    const oy = i * (tabla.sirina + razmak);
    s += `<rect class="plan-tabla" x="0" y="${oy}" width="${tabla.duzina}" height="${tabla.sirina}" rx="24"/>`;
    for (const k of komadi) {
      s += `<rect class="plan-deo plan-${k.materijal}" x="${k.x + 8}" y="${oy + k.y + 8}" width="${k.w - 4}" height="${k.h - 4}" rx="14"/>`;
      if (k.h >= 150 && k.w >= 300) s += `<text class="plan-natpis plan-natpis-${k.materijal}" x="${k.x + k.w / 2}" y="${oy + k.y + k.h / 2 + 28}" text-anchor="middle" font-size="76">${recnik[k.deo] || k.deo}</text>`;
    }
    if (natpisi.ostatak && i === table.length - 1) s += `<text class="plan-ostatak" x="${tabla.duzina - 50}" y="${oy + tabla.sirina - 60}" text-anchor="end" font-size="68">${natpisi.ostatak}</text>`;
  });
  return s + "</svg>";
}
