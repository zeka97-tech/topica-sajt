// skripte/posluzi.mjs — mali lokalni server za dist/ (npm run posluzi → http://localhost:8787/)
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const DIST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
const TIP = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".webp": "image/webp", ".png": "image/png", ".woff2": "font/woff2", ".xml": "application/xml", ".txt": "text/plain", ".svg": "image/svg+xml" };
export function pokreniServer(port = 8787) {
  const s = createServer(async (req, res) => {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (p.endsWith("/")) p += "index.html";
    const f = path.join(DIST, p);
    try {
      const st = await stat(f);
      const datoteka = st.isDirectory() ? path.join(f, "index.html") : f;
      res.writeHead(200, { "Content-Type": TIP[path.extname(datoteka)] || "application/octet-stream", "Cache-Control": "no-cache" });
      res.end(await readFile(datoteka));
    } catch { res.writeHead(404); res.end("404"); }
  });
  return new Promise((ok) => s.listen(port, () => ok(s)));
}
if (process.argv[1] === fileURLToPath(import.meta.url)) pokreniServer().then(() => console.log("http://localhost:8787/sr/"));
