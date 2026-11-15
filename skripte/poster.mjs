// skripte/poster.mjs — poster konfiguratora: slika podrazumevanog elementa iz istog 3D prikaza, dok se three.js ne učita.
// Pokretanje (kad se promeni 3D prikaz): npm run build && node skripte/poster.mjs  → slike/izvor/konf-poster.png, pa npm run slike
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pokreniServer } from "./posluzi.mjs";
const KOREN = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pw = await import(process.env.PLAYWRIGHT_PUTANJA || "playwright");
const chromium = pw.chromium || pw.default.chromium;
const PORT = 8795, server = await pokreniServer(PORT);
const b = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader"] });
const p = await b.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
await p.goto(`http://localhost:${PORT}/sr/`, { waitUntil: "networkidle" });
await p.evaluate(() => {
  const s = document.createElement("style");
  s.textContent = "#konf-prikaz{position:fixed!important;left:0;top:0;width:1200px!important;height:900px!important;z-index:999;border:0!important;border-radius:0!important}.prikaz-gore,.prikaz-dole,.prikaz-poster{display:none!important}";
  document.head.append(s); document.getElementById("konfigurator").scrollIntoView();
});
await p.waitForFunction(() => document.querySelector("#konf-3d canvas") && !document.getElementById("konf-prikaz").dataset.ucitava, null, { timeout: 30000 });
await p.waitForTimeout(2500); // teksture dezena
await (await p.$("#konf-prikaz")).screenshot({ path: path.join(KOREN, "slike", "izvor", "konf-poster.png") });
console.log("✓ slike/izvor/konf-poster.png");
await b.close(); server.close();
