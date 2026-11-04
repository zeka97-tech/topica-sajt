// skripte/lib/sablon.mjs — popunjavanje {{ključeva}} u šablonima (bez zavisnosti)
import { readFileSync } from "node:fs";

export function ucitaj(putanja) { return readFileSync(putanja, "utf8"); }

/** Vrati vrednost ugnježdenog ključa "a.b.c" iz objekta, ili undefined. */
export function uzmi(obj, kljuc) {
  return kljuc.split(".").reduce((o, k) => (o && typeof o === "object" ? o[k] : undefined), obj);
}

/**
 * Popuni šablon. izvori = { tekst, sajt, sistem }. Ključ bez prefiksa traži se u tekstu;
 * "sajt.x" u sajt.json; "sistem.x" u podacima koje daje build. Nedostajući ključ → greška u listi.
 */
export function popuni(sablon, izvori, greske = []) {
  return sablon.replace(/\{\{([a-zA-Z0-9_.@-]+)\}\}/g, (ceo, kljuc) => {
    let v;
    if (kljuc.startsWith("sajt.")) v = uzmi(izvori.sajt, kljuc.slice(5));
    else if (kljuc.startsWith("sistem.")) v = uzmi(izvori.sistem, kljuc.slice(7));
    else v = uzmi(izvori.tekst, kljuc);
    const sme_prazno = kljuc.startsWith("sajt.") || kljuc.startsWith("sistem.");
    if (v === undefined || v === null || (!sme_prazno && typeof v === "string" && v.trim() === "")) {
      greske.push(kljuc);
      return `{{${kljuc}}}`;
    }
    return String(v);
  });
}

/** Sve ključeve "list" oblika iz ugnježdenog objekta (a.b.c), bez onih koji počinju sa "_". */
export function spisakKljuceva(obj, prefiks = "") {
  const out = [];
  for (const [k, v] of Object.entries(obj)) {
    if (k.startsWith("_")) continue;
    const p = prefiks ? `${prefiks}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) out.push(...spisakKljuceva(v, p));
    else out.push(p);
  }
  return out;
}

export function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
