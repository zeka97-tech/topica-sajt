// skripte/og.mjs — OG slike 1200×630 po jeziku (Topi + naslov) i favicon iz Topijeve glave. Pokretanje: npm run og
// Treba: npm install (sharp) i Playwright sa Chromium-om (npx playwright install chromium ako ga nema).
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";
const KOREN = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pw = await import(process.env.PLAYWRIGHT_PUTANJA || "playwright");
const chromium = pw.chromium || pw.default.chromium;

const jezici = JSON.parse(readFileSync(path.join(KOREN, "tekst", "jezici.json"), "utf8")).jezici;
const sablon = readFileSync(path.join(KOREN, "src", "sablon", "og.html"), "utf8");
mkdirSync(path.join(KOREN, "slike", "og"), { recursive: true });
mkdirSync(path.join(KOREN, "src", "sablon", "og-tmp"), { recursive: true });

// favicon: glava maskote (isečak iz topi-meri-korpus-isecen.png), 32 i 180 px, bela podloga sa blagim zaobljenjem
const glava = sharp(path.join(KOREN, "slike", "izvor", "topi-meri-korpus-isecen.png")).extract({ left: 0, top: 0, width: 720, height: 720 });
for (const v of [32, 180]) {
  const okrugao = Buffer.from(`<svg><rect x="0" y="0" width="${v}" height="${v}" rx="${Math.round(v * 0.22)}" ry="${Math.round(v * 0.22)}"/></svg>`);
  await glava.clone().resize(v, v, { fit: "cover" }).flatten({ background: "#ffffff" }).composite([{ input: okrugao, blend: "dest-in" }]).png().toFile(path.join(KOREN, "slike", `favicon-${v}.png`));
}
console.log("✓ favicon-32.png, favicon-180.png");

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const j of jezici) {
  const tp = path.join(KOREN, "tekst", `${j.kod}.json`);
  if (!existsSync(tp)) continue;
  const t = JSON.parse(readFileSync(tp, "utf8"));
  const naslov = t.hero.naslov;
  const velicina = naslov.length > 34 ? 50 : naslov.length > 26 ? 58 : 66;
  const html = sablon.replace("{{kod}}", j.kod).replace("{{naslov}}", naslov).replace("{{opis}}", t.meta.og_opis).replace("{{dugme}}", t.cta.glavno).replace("{{velicina}}", String(velicina));
  const tmp = path.join(KOREN, "src", "sablon", "og-tmp", `${j.kod}.html`);
  writeFileSync(tmp, html);
  await p.goto(pathToFileURL(tmp).href, { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts.ready);
  const png = await p.screenshot({ type: "png" });
  await sharp(png).webp({ quality: 86 }).toFile(path.join(KOREN, "slike", "og", `${j.kod}.webp`));
  if (j.kod === "sr") await sharp(png).webp({ quality: 86 }).toFile(path.join(KOREN, "slike", "og.webp"));
  console.log("✓ og", j.kod, naslov);
}
await b.close();
import("node:fs").then((fs) => fs.rmSync(path.join(KOREN, "src", "sablon", "og-tmp"), { recursive: true, force: true }));
