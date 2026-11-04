// skripte/jezici.mjs — BUILD: šabloni (src/sablon) + tekst (tekst/<kod>.json) + tekstovi (blog/<kod>/*.md …) → dist/
// Pokretanje: npm run build. Bez zavisnosti (radi i u GitHub Actions bez npm install).
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Graditelj, ldSoftver, ldClanak, ldPitanja, ldStrana } from "./lib/stranice.mjs";
import { markdownUHtml, prednjiBlok } from "./lib/markdown.mjs";
import { ucitaj } from "./lib/sablon.mjs";

const KOREN = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(KOREN, "dist");
const ODELJCI = ["hero", "cinjenice", "kako-radi", "korpus", "niz", "mogucnosti", "galerija", "zakoga", "cena", "pitanja", "dno-poziv"];
// zbirke tekstova: folder u korenu (po jeziku) → stranice /<kod>/<folder>/; tekst.<kljuc> daje naslove indeksa
const ZBIRKE = [
  { folder: "blog", kljuc: "blog" }, { folder: "recnik", kljuc: "recnik" },
  { folder: "namena", kljuc: "namena" }, { folder: "pitanja", kljuc: "pitanja_strane" },
];

const json = (p) => JSON.parse(readFileSync(p, "utf8"));
const jezici = json(path.join(KOREN, "tekst", "jezici.json"));
const sajt = json(path.join(KOREN, "tekst", "sajt.json"));
const tekstovi = {};
for (const j of jezici.jezici) {
  const p = path.join(KOREN, "tekst", `${j.kod}.json`);
  if (existsSync(p)) tekstovi[j.kod] = json(p); else console.warn(`⚠ nema tekst/${j.kod}.json — jezik se preskače`);
}
const aktivni = jezici.jezici.filter((j) => tekstovi[j.kod]);

// 1) čisto dist + statika
rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
for (const d of ["slike/web", "slike/og", "fontovi", "vendor"]) if (existsSync(path.join(KOREN, d))) cpSync(path.join(KOREN, d), path.join(DIST, d), { recursive: true });
for (const f of readdirSync(path.join(KOREN, "slike"))) if (/^favicon-.*\.png$/.test(f) || f === "og.webp") cpSync(path.join(KOREN, "slike", f), path.join(DIST, "slike", f));
cpSync(path.join(KOREN, "src", "skripte"), path.join(DIST, "skripte"), { recursive: true });
// CSS: tokeni, osnova, ostali po abecedi, animacije poslednje → jedan stil.css
const stilDir = path.join(KOREN, "src", "stil");
const ostali = readdirSync(stilDir).filter((f) => f.endsWith(".css") && !["tokeni.css", "osnova.css", "animacije.css"].includes(f)).sort();
const css = ["tokeni.css", "osnova.css", ...ostali, "animacije.css"].map((f) => `/* == ${f} == */\n` + readFileSync(path.join(stilDir, f), "utf8")).join("\n");
writeFileSync(path.join(DIST, "stil.css"), css.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\n\s*\n/g, "\n").replace(/^\s+/gm, ""));

// 2) stranice po jeziku
const g = new Graditelj({ koren: KOREN, sajt, jezici, tekstovi, sabloniDir: path.join(KOREN, "src", "sablon") });
const sitemap = [];
const pisi = (kod, putanja, html) => {
  const p = path.join(DIST, kod, putanja);
  mkdirSync(path.dirname(p), { recursive: true });
  writeFileSync(p, html);
  sitemap.push({ kod, putanja });
};
const clanciPoJeziku = {}; // kod → { folder → [ {slug, meta, reci} ] }
function ucitajZbirku(kod, folder) {
  const dir = path.join(KOREN, folder, kod);
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((f) => f.endsWith(".md")).sort().map((f) => {
    const { meta, telo } = prednjiBlok(readFileSync(path.join(dir, f), "utf8"));
    const { html, brojReci } = markdownUHtml(telo);
    return { slug: f.replace(/\.md$/, ""), meta, html: html.replace(/(src|href)="(\.\.\/)+slike\//g, '$1="{{sistem.koren}}slike/'), brojReci, folder };
  });
}
for (const j of aktivni) {
  clanciPoJeziku[j.kod] = {};
  for (const z of ZBIRKE) clanciPoJeziku[j.kod][z.folder] = ucitajZbirku(j.kod, z.folder);
}
const postoji = (kod, putanja) => {
  if (["index.html", "preuzimanje.html", "hvala.html"].includes(putanja)) return true;
  const [folder, fajl] = putanja.split("/");
  const z = clanciPoJeziku[kod]?.[folder];
  if (!z) return false;
  if (fajl === "index.html") return z.length > 0 && !!tekstovi[kod][ZBIRKE.find((x) => x.folder === folder).kljuc];
  return z.some((c) => c.slug + ".html" === fajl);
};

for (const j of aktivni) {
  const kod = j.kod; const t = tekstovi[kod];
  // početna
  const sadrzaj = ODELJCI.map((o) => g.sablon(o)).join("\n");
  pisi(kod, "index.html", g.stranica({ kod, putanja: "index.html", naslov: t.meta.naslov, opis: t.meta.opis, ogNaslov: t.meta.og_naslov, ogOpis: t.meta.og_opis, sadrzaj, ldJson: ldSoftver(sajt, t, kod, jezici), postoji }));
  // preuzimanje i hvala
  pisi(kod, "preuzimanje.html", g.stranica({ kod, putanja: "preuzimanje.html", naslov: t.preuzimanje.meta_naslov, opis: t.preuzimanje.meta_opis, sadrzaj: g.sablon("preuzimanje"), ldJson: ldSoftver(sajt, t, kod, jezici), postoji }));
  pisi(kod, "hvala.html", g.stranica({ kod, putanja: "hvala.html", naslov: t.hvala.meta_naslov, opis: t.hvala.meta_opis, sadrzaj: g.sablon("hvala"), postoji, ldJson: ldStrana(sajt, kod, "hvala.html", t.hvala.meta_naslov, t.hvala.meta_opis) }));
  // zbirke
  for (const z of ZBIRKE) {
    const clanci = clanciPoJeziku[kod][z.folder];
    const tz = t[z.kljuc];
    if (!clanci.length || !tz) continue;
    for (const c of clanci) {
      const putanja = `${z.folder}/${c.slug}.html`;
      const minuta = Math.max(1, Math.round(c.brojReci / 200));
      const ld = c.meta.tip === "pitanja" && c.meta.parovi ? ldPitanja(JSON.parse(c.meta.parovi)) : ldClanak(sajt, kod, putanja, c.meta, t);
      pisi(kod, putanja, g.stranica({ kod, putanja, naslov: c.meta.naslov + " — TOPICA", opis: c.meta.opis, ogNaslov: c.meta.naslov, ogOpis: c.meta.opis, ogTip: "article", sadrzaj: g.sablon("clanak"), ldJson: ld, postoji,
        sistem: { clanakNadnaslov: c.meta.nadnaslov || tz.nadnaslov, clanakNaslov: c.meta.naslov, clanakMeta: `${minuta} ${t.clanak.citanje}`, clanakTelo: c.html, clanakPoziv: c.meta.poziv || tz.poziv } }));
    }
    const stavke = clanci.map((c) => `<a href="${c.slug}.html">${c.meta.naslov}<small>${c.meta.opis}</small></a>`).join("");
    pisi(kod, `${z.folder}/index.html`, g.stranica({ kod, putanja: `${z.folder}/index.html`, naslov: tz.meta_naslov, opis: tz.meta_opis, sadrzaj: g.sablon("spisak"), postoji, ldJson: ldStrana(sajt, kod, `${z.folder}/`, tz.meta_naslov, tz.meta_opis, "CollectionPage"),
      sistem: { spisakNadnaslov: tz.nadnaslov, spisakNaslov: tz.naslov, spisakTekst: tz.tekst, spisakStavke: stavke } }));
  }
}

// 3) koren: preusmerenje po jeziku, sitemap, robots, podaci za predlog jezika
const spisakKodova = aktivni.map((j) => j.kod);
writeFileSync(path.join(DIST, "index.html"), ucitaj(path.join(KOREN, "src", "sablon", "koren.html"))
  .replace("{{xDefault}}", jezici.xDefault).replace("{{kodovi}}", JSON.stringify(spisakKodova)).replace("{{podrazumevani}}", jezici.podrazumevani));
writeFileSync(path.join(DIST, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
  sitemap.filter((s) => s.putanja !== "hvala.html").map((s) => {
    const loc = `${sajt.url}${s.kod}/${s.putanja === "index.html" ? "" : s.putanja}`;
    const alt = sitemap.filter((x) => x.putanja === s.putanja).map((x) => `    <xhtml:link rel="alternate" hreflang="${x.kod}" href="${sajt.url}${x.kod}/${x.putanja === "index.html" ? "" : x.putanja}"/>`).join("\n");
    return `  <url>\n    <loc>${loc}</loc>\n${alt}\n  </url>`;
  }).join("\n") + "\n</urlset>\n");
writeFileSync(path.join(DIST, "robots.txt"), `User-agent: *\nAllow: /\nDisallow: /*/hvala.html\nSitemap: ${sajt.url}sitemap.xml\n`);
writeFileSync(path.join(DIST, "jezik-predlog.json"), JSON.stringify(Object.fromEntries(aktivni.map((j) => [j.kod, { ime: j.ime, tekst: tekstovi[j.kod].jezik.predlog_tekst, dugme: tekstovi[j.kod].jezik.predlog_dugme }]))));
writeFileSync(path.join(DIST, ".nojekyll"), "");

if (g.greske.length) {
  console.error("✗ Nedostaju ključevi u prevodu:");
  for (const e of g.greske) console.error(`  ${e.kod}/${e.putanja}: ${e.kljucevi.join(", ")}`);
  process.exit(1);
}
console.log(`✓ build: ${sitemap.length} stranica, ${aktivni.length} jezika (${spisakKodova.join(", ")}) → dist/`);
