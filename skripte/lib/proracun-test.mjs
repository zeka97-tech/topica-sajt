// skripte/lib/proracun-test.mjs — test formula: src/skripte/proracun.js mora da da isto što i program (docs/modeli-primeri.json)
import { readFileSync } from "node:fs";
import path from "node:path";
import { izracunaj, MODELI } from "../../src/skripte/proracun.js";

const kljuc = (duz, sir, deb, mat, duze, krace) => `${duz}x${sir}/${deb}/${mat}/${duze}${krace}`;

/** Vrati listu grešaka (prazna = sve se slaže). Primeri van granica konfiguratora se preskaču i broje. */
export function testirajProracun(koren) {
  const primeri = JSON.parse(readFileSync(path.join(koren, "docs", "modeli-primeri.json"), "utf8")).primeri;
  const greske = []; let provereno = 0, preskoceno = 0;
  for (const p of primeri) {
    const m = MODELI[p.model];
    if (!m) { preskoceno++; continue; }
    const u = { sirina: p.ulaz.sirina, visina: p.ulaz.visina, dubina: p.ulaz.dubina, police: p.ulaz.police, vrata: p.ulaz.vrata, fioke: p.ulaz.fioke };
    const g = { ...m.mere, ...m.opcije };
    const van = Object.entries(g).some(([k, o]) => u[k] != null && (u[k] < o.min || u[k] > o.max)) || (p.ulaz.unutrasnjost && p.ulaz.unutrasnjost !== "police-sipka");
    if (van) { preskoceno++; continue; }
    const r = izracunaj(p.model, u);
    const ocekivano = new Map(), dobijeno = new Map();
    for (const x of p.daske) { const k = kljuc(x.duzina, x.sirina, x.debljina, x.materijal, x.kant.duze, x.kant.krace); ocekivano.set(k, (ocekivano.get(k) || 0) + x.komada); }
    for (const x of r.daske) { const k = kljuc(x.duzina, x.sirina, x.debljina, x.materijal, x.kant.duze, x.kant.krace); dobijeno.set(k, (dobijeno.get(k) || 0) + x.komada); }
    const ime = `${p.model} ${JSON.stringify(p.ulaz)}`;
    for (const [k, n] of ocekivano) if (dobijeno.get(k) !== n) greske.push(`PRORAČUN ${ime}: program ${n}× ${k}, sajt ${dobijeno.get(k) || 0}×`);
    for (const [k, n] of dobijeno) if (!ocekivano.has(k)) greske.push(`PRORAČUN ${ime}: sajt ima višak ${n}× ${k}`);
    if (Math.abs(r.zbir.m2.ukupno - p.m2.ukupno) > 0.0015) greske.push(`PRORAČUN ${ime}: m² ${r.zbir.m2.ukupno} ≠ ${p.m2.ukupno}`);
    for (const [traka, metara] of Object.entries(p.kantMetara)) if (Math.abs((r.zbir.kant[traka] || 0) - metara) > 0.0015) greske.push(`PRORAČUN ${ime}: kant ${traka} mm ${r.zbir.kant[traka]} ≠ ${metara}`);
    provereno++;
  }
  return { greske, provereno, preskoceno };
}
