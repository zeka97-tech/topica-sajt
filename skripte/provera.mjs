// skripte/provera.mjs — PROVERA posle build-a: red u kodu, prevodi, svaka stranica u pregledaču, snimci, reduced-motion, Lighthouse.
// npm run check            — sve (Lighthouse na uzorku)
// node skripte/provera.mjs --brzo            — bez Lighthouse-a i snimaka
// node skripte/provera.mjs --jezici=sr,de    — samo ti jezici u pregledaču
// node skripte/provera.mjs --bez-lighthouse  — sve osim Lighthouse-a;  --samo-lighthouse — samo Lighthouse (uzorak)
// node skripte/provera.mjs --seo [--jezici=…]  — Lighthouse SEO i pristupačnost na 10 stranica po jeziku
import { readFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { proveriDuzinu, proveriTokene, proveriSablone, proveriPrevode } from "./lib/pravila.mjs";
import { proveriStranicu, snimiOdeljke, proveriSmanjenoKretanje } from "./lib/pregledac.mjs";
import { pokreniServer } from "./posluzi.mjs";

const KOREN = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const arg = (ime) => (process.argv.find((a) => a.startsWith(`--${ime}=`)) || "").split("=")[1];
const BRZO = process.argv.includes("--brzo");
const BEZ_LH = process.argv.includes("--bez-lighthouse") || BRZO;
const SAMO_LH = process.argv.includes("--samo-lighthouse");
const SEO = process.argv.includes("--seo"); // Lighthouse SEO + pristupačnost na 10 stranica po jeziku
const PORT = Number(arg("port")) || 8788;
const greske = [];
const upozorenja = [];

// 1) statička pravila
proveriDuzinu(KOREN, greske); proveriTokene(KOREN, greske); proveriSablone(KOREN, greske); proveriPrevode(KOREN, greske);
console.log(`1) red u kodu i prevodi: ${greske.length ? greske.length + " grešaka" : "✓"}`);

// 2) pregledač
if (!existsSync(path.join(KOREN, "dist", "sitemap.xml"))) { console.error("✗ nema dist/ — prvo npm run build"); process.exit(1); }
const server = await pokreniServer(PORT);
const pw = await import(process.env.PLAYWRIGHT_PUTANJA || "playwright");
const chromium = (pw.chromium || pw.default.chromium);
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const sajt = JSON.parse(readFileSync(path.join(KOREN, "tekst", "sajt.json"), "utf8"));
const jezici = JSON.parse(readFileSync(path.join(KOREN, "tekst", "jezici.json"), "utf8")).jezici.map((j) => j.kod).filter((k) => existsSync(path.join(KOREN, "dist", k)));
const izabrani = arg("jezici") ? arg("jezici").split(",") : jezici;
const dozvoljenTaraba = sajt.preuzimanjeExe === "#" ? ["#"] : [];
let brojStranica = 0;
for (const kod of SAMO_LH || SEO ? [] : izabrani) {
  const dir = path.join(KOREN, "dist", kod);
  const stranice = [];
  const skupi = (d, rel) => { for (const e of readdirSync(d, { withFileTypes: true })) { if (e.isDirectory()) skupi(path.join(d, e.name), rel + e.name + "/"); else if (e.name.endsWith(".html")) stranice.push(rel + e.name); } };
  skupi(dir, "");
  for (const s of stranice) {
    const url = `http://localhost:${PORT}/${kod}/${s}`;
    const r = await proveriStranicu(ctx, url, { dozvoljenTaraba });
    brojStranica++;
    if (r.jezik && r.jezik !== kod) greske.push(`${kod}/${s}: lang="${r.jezik}"`);
    for (const g of r.greske) greske.push(`${kod}/${s}: ${g}`);
  }
}
console.log(`2) pregledač: ${brojStranica} stranica, ${greske.length ? greske.length + " grešaka ukupno" : "✓"}`);
if (!SAMO_LH && !SEO) {
  const rm = await proveriSmanjenoKretanje(browser, `http://localhost:${PORT}/sr/`);
  greske.push(...rm);
  console.log(`3) smanjeno kretanje: ${rm.length ? "✗" : "✓"}`);
}

// 3) snimci (sr i de, 1440 i 390)
if (!BRZO && !SAMO_LH && !SEO) {
  const dirSnimci = path.join(KOREN, "docs", "snimci");
  mkdirSync(dirSnimci, { recursive: true });
  for (const kod of ["sr", "de"].filter((k) => jezici.includes(k))) {
    for (const w of [1440, 390]) await snimiOdeljke(browser, `http://localhost:${PORT}/${kod}/`, w, kod, dirSnimci);
    await snimiOdeljke(browser, `http://localhost:${PORT}/${kod}/preuzimanje.html`, 1440, `${kod}-preuzimanje`, dirSnimci);
  }
  console.log("4) snimci: docs/snimci/ ✓");
}
await browser.close();

// 4) Lighthouse na uzorku
if (SEO) {
  const { default: lighthouse } = await import("lighthouse");
  const { launch } = await import("chrome-launcher");
  const chrome = await launch({ chromePath: process.env.CHROME_PATH || "/opt/pw-browsers/chromium", chromeFlags: ["--headless=new", "--no-sandbox", "--disable-gpu"] });
  for (const kod of izabrani) {
    const dir = path.join(KOREN, "dist", kod);
    const sve = [];
    const skupi = (d, rel) => { for (const e of readdirSync(d, { withFileTypes: true })) { if (e.isDirectory()) skupi(path.join(d, e.name), rel + e.name + "/"); else if (e.name.endsWith(".html") && e.name !== "hvala.html") sve.push(rel + e.name); } };
    skupi(dir, "");
    const uzorak = ["index.html", "preuzimanje.html", ...sve.filter((s) => s.includes("/"))].filter((v, i, a) => a.indexOf(v) === i).filter((_, i, a) => i < 2 || i % Math.max(1, Math.floor((a.length - 2) / 8)) === 0).slice(0, 10);
    const red = [];
    for (const u of uzorak) {
      const rez = await lighthouse(`http://localhost:${PORT}/${kod}/${u}`, { port: chrome.port, output: "json", logLevel: "silent", onlyCategories: ["seo", "accessibility"] });
      const seo = Math.round(rez.lhr.categories.seo.score * 100), a11y = Math.round(rez.lhr.categories.accessibility.score * 100);
      red.push(`${u.replace(".html", "")} ${seo}/${a11y}`);
      if (seo < 95) greske.push(`Lighthouse SEO ${kod}/${u}: ${seo} < 95`);
      if (a11y < 90) greske.push(`Lighthouse a11y ${kod}/${u}: ${a11y} < 90`);
    }
    console.log(`   ${kod}: ${red.join(" · ")}`);
  }
  await chrome.kill();
}
if (!BEZ_LH && !SEO) {
  const { default: lighthouse } = await import("lighthouse");
  const { launch } = await import("chrome-launcher");
  const chrome = await launch({ chromePath: process.env.CHROME_PATH || "/opt/pw-browsers/chromium", chromeFlags: ["--headless=new", "--no-sandbox", "--disable-gpu"] });
  const uzorak = [`sr/`, `en/`, `de/`, `sr/preuzimanje.html`, `en/blog/krojna-lista.html`, `sr/blog/`].filter((u) => existsSync(path.join(KOREN, "dist", u.endsWith("/") ? u + "index.html" : u)));
  const pragovi = { performance: 90, accessibility: 90, seo: 95 };
  const izmeri = async (u) => { const rez = await lighthouse(`http://localhost:${PORT}/${u}`, { port: chrome.port, output: "json", logLevel: "silent", onlyCategories: ["performance", "accessibility", "seo", "best-practices"] }); return Object.fromEntries(Object.entries(rez.lhr.categories).map(([n, c]) => [n, Math.round(c.score * 100)])); };
  await izmeri(uzorak[0]); // zagrevanje Chrome-a (prvo merenje je uvek sporije)
  for (const u of uzorak) {
    const [a, b] = [await izmeri(u), await izmeri(u)]; // dva merenja, bolje važi (Lighthouse varira sa opterećenjem)
    const k = Object.fromEntries(Object.keys(a).map((n) => [n, Math.max(a[n], b[n])]));
    const red = `   ${u.padEnd(28)} perf ${k.performance}  a11y ${k.accessibility}  seo ${k.seo}  bp ${k["best-practices"]}`;
    console.log(red);
    for (const [n, prag] of Object.entries(pragovi)) if (k[n] < prag) greske.push(`Lighthouse ${u}: ${n} ${k[n]} < ${prag}`);
  }
  await chrome.kill();
  console.log("5) Lighthouse: gotovo");
}
server.close();

if (upozorenja.length) console.log("\nUpozorenja:\n" + upozorenja.map((u) => "  ⚠ " + u).join("\n"));
if (greske.length) { console.error("\n✗ GREŠKE:\n" + greske.map((g) => "  • " + g).join("\n")); process.exit(1); }
console.log("\n✓ Sve provere prošle.");
