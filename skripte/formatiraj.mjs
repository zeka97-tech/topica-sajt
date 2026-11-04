// skripte/formatiraj.mjs — preformatira sve tekst/*.json u sažet oblik (isti sadržaj, manje redova)
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { zapisiSazeto } from "./lib/json.mjs";
const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "tekst");
for (const f of readdirSync(dir).filter((x) => x.endsWith(".json"))) {
  const p = path.join(dir, f);
  const d = JSON.parse(readFileSync(p, "utf8"));
  writeFileSync(p, zapisiSazeto(d) + "\n");
  console.log("✓", f, readFileSync(p, "utf8").split("\n").length, "redova");
}
