// skripte/slike.mjs — pravi slike/web/ iz slike/izvor/
// Pokretanje:  npm install  →  npm run slike
// Svaka slika iz izvor/ postaje WebP u dve širine (800 i do 1600 px, bez uvećavanja);
// PNG sa providnošću (maskota) zadržava providnost. Isečci (crops) su u listi ISECCI.
import sharp from "sharp";
import { readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const koren = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const IZVOR = path.join(koren, "slike", "izvor");
const WEB = path.join(koren, "slike", "web");
const SIRINE = [800, 1600];

// Isečci iz postojećih izvora: ime → { iz, left, top, width, height }
const ISECCI = {
  // tabela „Po meri" bez okvira programa — za krojnu listu pored rastavljenog korpusa
  "isecak-po-meri-tabela": { iz: "snimak-33-po-meri.png", left: 332, top: 254, width: 1018, height: 440 },
  // kartice sa brojevima iznad tabele (1 korpus · 8 dasaka · 2,34 m² · cena)
  "isecak-po-meri-kartice": { iz: "snimak-33-po-meri.png", left: 16, top: 56, width: 1334, height: 76 },
  // korpus sa kotama 600 / 720 / 560 — za karticu „Mere u milimetar"
  "isecak-kote": { iz: "snimak-12-korpus-sa-vratima.png", left: 480, top: 200, width: 520, height: 330 },
  // izbliza front — pozadina kartice „Pravi dezeni"
  "isecak-front": { iz: "snimak-46-izbliza-front.png", left: 560, top: 140, width: 500, height: 380 },
  // izbor dezena — kartica „Pravi dezeni"
  "isecak-dezeni": { iz: "snimak-47-svoj-dezen.png", left: 1028, top: 360, width: 290, height: 300 },
  // cena i ponuda — kartica „Cena po projektu"
  "isecak-cena": { iz: "snimak-37-cena.png", left: 328, top: 100, width: 676, height: 180 },
  // hrastov front iz krupnog prikaza — tekstura za vrata nacrtanog korpusa
  "tekstura-hrast": { iz: "snimak-19-krupni-prikaz.png", left: 372, top: 290, width: 130, height: 200 },
};

async function obradi(ime, ulaz, meta) {
  const osnova = ime.replace(/\.[a-z]+$/i, "");
  const izlazi = [];
  for (const s of SIRINE) {
    const w = Math.min(s, meta.width);
    const out = path.join(WEB, `${osnova}-${s}.webp`);
    await ulaz.clone().resize({ width: w, withoutEnlargement: true }).webp({ quality: 82, effort: 5 }).toFile(out);
    izlazi.push({ datoteka: path.basename(out), sirina: w });
  }
  return [osnova, izlazi];
}

async function main() {
  await mkdir(WEB, { recursive: true });
  const manifest = {};
  const datoteke = (await readdir(IZVOR)).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
  for (const f of datoteke) {
    if (/-isecen\.png$/.test(f) === false && /^topi-.*\.png$/.test(f)) continue; // original maskote sa belom pozadinom se ne objavljuje
    const ulaz = sharp(path.join(IZVOR, f));
    const meta = await ulaz.metadata();
    const [k, v] = await obradi(f, ulaz, meta);
    manifest[k] = v;
    console.log("✓", f, "→", v.map((x) => `${x.datoteka} (${x.sirina}px)`).join(", "));
  }
  for (const [ime, c] of Object.entries(ISECCI)) {
    const ulaz = sharp(path.join(IZVOR, c.iz)).extract({ left: c.left, top: c.top, width: c.width, height: c.height });
    const [k, v] = await obradi(ime, ulaz, { width: c.width });
    manifest[k] = v;
    console.log("✓ isečak", ime, "←", c.iz);
  }
  await writeFile(path.join(WEB, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
  console.log("Gotovo:", Object.keys(manifest).length, "slika u slike/web/");
}
main().catch((e) => { console.error(e); process.exit(1); });
