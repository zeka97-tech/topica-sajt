// skripte/lib/proracun-test.mjs — test formula: src/skripte/proracun.js mora da da iste daske, kant, m² i OKOV kao program (docs/modeli-primeri.json)
import { readFileSync } from "node:fs";
import path from "node:path";
import { izracunaj, okovi, MODELI } from "../../src/skripte/proracun.js";

/** Šifra okova iz programa → ključ na sajtu (+ ":mera" za razmak rupa, NL klizača, dužinu šipke). */
function kljucOkova(o) {
  const s = o.sifra, n = o.naziv;
  if (s === "HINGE-RAVNA") return n.includes("LEVO") ? "sarka_levo" : "sarka_desno";
  if (s.startsWith("HANDLE-STANGLA-")) return "rucka_stangla:" + s.split("-")[2];
  if (s.includes("-NL")) return "klizac:" + s.split("NL")[1];
  if (s === "GENERIC-FOOT") return n.includes("niska") ? "nogica_niska" : "nogica";
  if (s === "GENERIC-WARDROBE-RAIL") return "sipka:" + (n.match(/(\d+) mm/) || [])[1];
  return { "GENERIC-CAM-DOWEL": "ekscentar", "GENERIC-SHELF-PIN": "nosac_police", "GENERIC-HANGER": "nosac_viseceg", "GENERIC-RAIL-MOUNT": "nosac_sipke", "GENERIC-ANTI-TIP": "protiv_prevrtanja" }[s] || "nepoznato:" + s;
}

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
    const okP = {}, okS = {};
    for (const o of p.okovi || []) okP[kljucOkova(o)] = (okP[kljucOkova(o)] || 0) + o.komada;
    for (const o of okovi(p.model, u)) okS[o.k + (o.mera != null ? ":" + o.mera : "")] = o.komada;
    for (const k of new Set([...Object.keys(okP), ...Object.keys(okS)])) if (okP[k] !== okS[k]) greske.push(`OKOV ${ime}: ${k} program ${okP[k] || 0}, sajt ${okS[k] || 0}`);
    provereno++;
  }
  return { greske, provereno, preskoceno };
}
