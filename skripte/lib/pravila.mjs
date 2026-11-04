// skripte/lib/pravila.mjs — statičke provere reda u kodu (bez pregledača)
import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { spisakKljuceva } from "./sablon.mjs";

const DOZVOLJENE_RECI = new Set(["TOPICA", "Topi", "3D", "PDF", "mm", "EN", "Windows", "RSD", "CSV", "HDF", "ABS", "Formspree", "Paddle", "Lemon", "Squeezy", "Kupi", "DUGME", "KUPI", "Belo", "nikad", "drugo", "narandžasto", "uključiti", "kad", "cena", "bude", "objavljena", "ili", "skripta", "u", "skripte", "html"]);

export function sviFajlovi(dir, filter) {
  const out = [];
  for (const f of readdirSync(dir)) {
    const p = path.join(dir, f);
    if (statSync(p).isDirectory()) { if (!["node_modules", "dist", ".git"].includes(f)) out.push(...sviFajlovi(p, filter)); }
    else if (filter(p)) out.push(p);
  }
  return out;
}

/** Nijedan izvorni fajl preko 300 redova. */
export function proveriDuzinu(koren, greske) {
  for (const f of sviFajlovi(koren, (p) => /\.(mjs|js|css|html|json)$/.test(p) && !p.includes("/vendor/") && !p.includes("package-lock") && !p.includes("/slike/web/"))) {
    const n = readFileSync(f, "utf8").split("\n").length;
    if (n > 300) greske.push(`DUŽINA ${path.relative(koren, f)}: ${n} redova (najviše 300)`);
  }
}

/** Boje, px i font-size samo u tokeni.css (osim @media prelomova). */
export function proveriTokene(koren, greske) {
  const dir = path.join(koren, "src", "stil");
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".css") && x !== "tokeni.css")) {
    const redovi = readFileSync(path.join(dir, f), "utf8").split("\n");
    redovi.forEach((r, i) => {
      const bezMedia = r.replace(/@media[^{]*\{/g, "").replace(/@font-face[^}]*\}/g, "").replace(/url\([^)]*\)/g, "");
      if (f === "osnova.css" && r.includes("@font-face")) return;
      if (/#[0-9a-fA-F]{3,8}\b/.test(bezMedia) || /\b\d*\.?\d+px\b/.test(bezMedia) || /font-size\s*:\s*\d/.test(bezMedia)) greske.push(`TOKEN src/stil/${f}:${i + 1}: broj ili boja van tokeni.css → ${r.trim().slice(0, 80)}`);
    });
  }
}

/** Šabloni ne smeju da sadrže gole reči van {{ključeva}} (tekst je u JSON-u). */
export function proveriSablone(koren, greske) {
  const dir = path.join(koren, "src", "sablon");
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".html") && !["koren.html", "og.html"].includes(x))) {
    const html = readFileSync(path.join(dir, f), "utf8").replace(/<!--[\s\S]*?-->/g, "").replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "");
    const tekst = html.replace(/<[^>]+>/g, " ").replace(/\{\{[^}]+\}\}/g, " ");
    const reci = tekst.match(/\p{L}{2,}/gu) || [];
    const lose = [...new Set(reci.filter((w) => !DOZVOLJENE_RECI.has(w)))];
    if (lose.length) greske.push(`ŠABLON src/sablon/${f}: gole reči van JSON-a → ${lose.join(", ")}`);
  }
}

/** Svi tekst/<kod>.json imaju iste ključeve kao sr.json i nijednu praznu vrednost. */
export function proveriPrevode(koren, greske) {
  const dir = path.join(koren, "tekst");
  const sr = JSON.parse(readFileSync(path.join(dir, "sr.json"), "utf8"));
  const osnova = new Set(spisakKljuceva(sr));
  const jezici = JSON.parse(readFileSync(path.join(dir, "jezici.json"), "utf8")).jezici;
  for (const j of jezici) {
    const p = path.join(dir, `${j.kod}.json`);
    let t; try { t = JSON.parse(readFileSync(p, "utf8")); } catch (e) { greske.push(`PREVOD ${j.kod}: ${e.message.includes("ENOENT") ? "fajl ne postoji" : "neispravan JSON"}`); continue; }
    const k = new Set(spisakKljuceva(t));
    const fale = [...osnova].filter((x) => !k.has(x)); const visak = [...k].filter((x) => !osnova.has(x));
    if (fale.length) greske.push(`PREVOD ${j.kod}: nedostaju ključevi → ${fale.slice(0, 8).join(", ")}${fale.length > 8 ? "…" : ""}`);
    if (visak.length) greske.push(`PREVOD ${j.kod}: višak ključeva → ${visak.slice(0, 8).join(", ")}`);
    const prazni = spisakKljuceva(t).filter((x) => { const v = x.split(".").reduce((o, kk) => o?.[kk], t); return typeof v === "string" && !v.trim(); });
    if (prazni.length) greske.push(`PREVOD ${j.kod}: prazne vrednosti → ${prazni.join(", ")}`);
    if (j.kod !== "sr" && j.kod !== "en" && t.jezik && !/srp|serb|serbi|сербск|сръб|серб|szerb|srb|сербська|σερβ|servi|serbe|serbio|sérvio|servisch|serbisk|serbia/i.test(t.jezik.napomena_program)) greske.push(`PREVOD ${j.kod}: jezik.napomena_program ne pominje srpski (iskrenost o jeziku programa)`);
    for (const k2 of Object.keys(t.nav || {})) if (t.nav[k2].length > 16) greske.push(`PREVOD ${j.kod}: nav.${k2} predugačko (${t.nav[k2].length} > 16)`);
  }
}
