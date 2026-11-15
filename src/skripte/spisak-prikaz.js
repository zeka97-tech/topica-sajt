// spisak-prikaz.js — čiste funkcije koje iz rezultata proračuna prave HTML redove spiska (koriste ih i build i pregledač)
const RED_MATERIJALA = { korpus: 0, front: 1, ledja: 2 };

/** Oznaka kanta kao u programu: „1 duža", „2 duže, 2 kraće", „bez kanta"; r = rečnik { "kant.d1": … }, fmt = broj → tekst */
export function kantOznaka(kant, r, fmt) {
  const d = [];
  if (kant.duze) d.push(r[`kant.d${kant.duze}`]);
  if (kant.krace) d.push(r[`kant.k${kant.krace}`]);
  return d.length ? `${d.join(", ")} · ${fmt(kant.traka)}` : r["kant.bez"];
}

/** Redovi po materijalu (ploča korpusa, front, lesonit), unutar toga kako ih daje proračun. */
export function poredjaj(daske) {
  return daske.map((d, i) => ({ d, i })).sort((a, b) => RED_MATERIJALA[a.d.materijal] - RED_MATERIJALA[b.d.materijal] || a.i - b.i).map((x) => x.d);
}

export function redoviHtml(daske, r, fmt) {
  return poredjaj(daske).map((d) => {
    const kant = kantOznaka(d.kant, r, fmt);
    const potpis = `${d.komada}|${d.duzina}|${d.sirina}|${d.debljina}|${kant}`;
    return `<tr data-deo="${d.deo}" data-potpis="${potpis}"><td>${r[`deo.${d.deo}`] || d.deo}</td><td class="broj">${d.komada}</td><td class="broj mera">${d.duzina} × ${d.sirina}</td><td class="broj tiho">${d.debljina}</td><td class="tiho">${kant}</td></tr>`;
  }).join("");
}

/** Brojevi za tri kućice zbira: m² ploče 18 mm (korpus + front), m² lesonita, metri kanta (bez otpada). */
export function zbirBrojevi(zbir, fmt) {
  return { ploca: fmt(zbir.m2.korpus + zbir.m2.front, 2), lesonit: fmt(zbir.m2.ledja, 2), kant: fmt(zbir.kantUkupno, 1), komada: String(zbir.komada) };
}

/** Rečnik (deo.*, kant.*) iz teksta jezika — build ga čita iz JSON-a, pregledač iz skrivene liste u HTML-u. */
export function recnikIz(spisak, konf = {}) {
  const r = {};
  for (const [k, v] of Object.entries(spisak.deo)) r[`deo.${k}`] = v;
  for (const [k, v] of Object.entries(spisak.kant)) r[`kant.${k}`] = v;
  for (const grupa of ["model", "okov", "dezen"]) for (const [k, v] of Object.entries(konf[grupa] || {})) r[`${grupa}.${k}`] = v;
  return r;
}

/** Redovi liste okova: naziv (sa merom) i broj komada. */
export function okoviHtml(spisak, r) {
  return spisak.map((o) => `<li><span>${popuniRecenicu(r[`okov.${o.k}`] || o.k, { mera: o.mera })}</span><b>${o.komada} ${r["okov.kom"] || ""}</b></li>`).join("");
}

/** Popuni {model}, {s}, {v}, {d}, {n} u rečenici. */
export const popuniRecenicu = (sablon, p) => sablon.replace(/\{(\w+)\}/g, (_, k) => p[k] ?? "");
