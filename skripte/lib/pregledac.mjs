// skripte/lib/pregledac.mjs — provere u pregledaču (Playwright): slomljene slike, H1, meta, alt, linkovi, snimci, smanjeno kretanje
export async function proveriStranicu(ctx, url, opcije = {}) {
  const greske = [];
  const p = await ctx.newPage();
  const konzola = [];
  p.on("pageerror", (e) => konzola.push("JS greška: " + e.message));
  p.on("console", (m) => { if (m.type() === "error") konzola.push("console: " + m.text()); });
  const odg = await p.goto(url, { waitUntil: "networkidle" });
  if (!odg || odg.status() !== 200) { greske.push(`HTTP ${odg?.status()} za ${url}`); await p.close(); return { greske }; }
  await p.evaluate(async () => {
    document.querySelectorAll("img[loading=lazy]").forEach((i) => { i.loading = "eager"; });
    for (let y = 0; y < document.documentElement.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); }
    window.scrollTo(0, 0);
    await Promise.all([...document.images].map((i) => i.complete ? null : new Promise((r) => { i.onload = i.onerror = r; })));
  });
  const r = await p.evaluate(() => {
    const html = document.documentElement.outerHTML;
    const slike = [...document.images];
    return {
      neprevedeno: (html.match(/\{\{[a-zA-Z0-9_.]+\}\}/g) || []).slice(0, 5),
      h1: document.querySelectorAll("h1").length,
      naslov: document.title, opis: document.querySelector('meta[name="description"]')?.content || "",
      kanon: !!document.querySelector('link[rel="canonical"]'), hreflang: document.querySelectorAll('link[rel="alternate"][hreflang]').length,
      ld: !!document.querySelector('script[type="application/ld+json"]')?.textContent?.includes('"@type"'),
      bezAlta: slike.filter((i) => !i.hasAttribute("alt")).map((i) => i.currentSrc || i.src),
      slomljene: slike.filter((i) => i.complete && i.naturalWidth === 0 && i.getAttribute("src")).map((i) => i.getAttribute("src")),
      linkovi: [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")),
      jezik: document.documentElement.lang,
    };
  });
  if (r.neprevedeno.length) greske.push(`neprevedeni ključevi: ${r.neprevedeno.join(", ")}`);
  if (r.h1 !== 1) greske.push(`H1: ${r.h1} (mora tačno 1)`);
  if (!r.naslov || r.naslov.length < 10) greske.push("nema <title>");
  if (!r.opis || r.opis.length < 50) greske.push("meta description prekratak ili nedostaje");
  if (!r.kanon) greske.push("nema canonical");
  if (r.hreflang < 2 && !url.includes("hvala")) greske.push("nema hreflang");
  if (!r.ld) greske.push("nema JSON-LD");
  if (r.bezAlta.length) greske.push(`slike bez alt atributa: ${r.bezAlta.length}`);
  if (r.slomljene.length) greske.push(`slomljene slike: ${r.slomljene.join(", ")}`);
  const dozvoljenTaraba = new Set(opcije.dozvoljenTaraba || []);
  for (const h of r.linkovi) {
    if (h === "#" ) { if (!dozvoljenTaraba.has("#")) greske.push("link sa href=\"#\" (dozvoljen samo za .exe placeholder)"); continue; }
    if (/^(mailto:|tel:|https?:)/.test(h) || h.startsWith("#")) continue;
    const cilj = new URL(h.split("#")[0] || ".", url).href;
    const o = await ctx.request.get(cilj).catch(() => null);
    if (!o || o.status() !== 200) greske.push(`unutrašnji link ne radi: ${h} → ${o?.status() || "greška"}`);
  }
  if (konzola.length) greske.push(...konzola.slice(0, 3));
  await p.close();
  return { greske: [...new Set(greske)], jezik: r.jezik };
}

/** Snimci svakog odeljka (i više kadrova za zakačene odeljke) u docs/snimci/. */
export async function snimiOdeljke(browser, url, sirina, prefix, dir) {
  const vh = sirina > 600 ? 900 : 844;
  const kod = url.match(/\/([a-z]{2})\//)?.[1] || "en";
  const ctx = await browser.newContext({ viewport: { width: sirina, height: vh }, deviceScaleFactor: 1, locale: kod });
  const p = await ctx.newPage();
  await p.goto(url, { waitUntil: "networkidle" });
  await p.waitForTimeout(400);
  await p.screenshot({ path: `${dir}/${prefix}-${sirina}-00-hero.png` });
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < H; y += 400) { await p.evaluate((y) => window.scrollTo(0, y), y); await p.waitForTimeout(30); }
  const sekcije = await p.evaluate(() => [...document.querySelectorAll("section[id]")].map((s) => ({ id: s.id, top: s.offsetTop, h: s.offsetHeight })));
  let n = 1;
  for (const s of sekcije) {
    const pin = s.h > vh * 2;
    for (const f of pin ? [0.08, 0.3, 0.62, 0.95] : [0]) {
      await p.evaluate((y) => window.scrollTo(0, y), s.top + Math.max(0, s.h - vh) * f);
      await p.waitForTimeout(pin ? 900 : 500);
      await p.screenshot({ path: `${dir}/${prefix}-${sirina}-${String(n).padStart(2, "0")}-${s.id}${pin ? "-" + Math.round(f * 100) : ""}.png` });
    }
    n++;
  }
  await ctx.close();
}

/** Sa prefers-reduced-motion: nema zakačenih odeljaka, kote i krojna lista vidljive odmah. */
export async function proveriSmanjenoKretanje(browser, url) {
  const ctx = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  await p.goto(url, { waitUntil: "networkidle" });
  await p.waitForTimeout(500);
  const r = await p.evaluate(() => ({
    pin: document.querySelectorAll(".pin-spacer").length,
    kota: getComputedStyle(document.querySelector(".kota") || document.body).opacity,
    lenis: document.documentElement.classList.contains("lenis"),
    visina: getComputedStyle(document.getElementById("korpus-visina")).height,
  }));
  await ctx.close();
  const greske = [];
  if (r.pin) greske.push("reduced-motion: postoji pin-spacer");
  if (r.kota !== "1") greske.push(`reduced-motion: kote nisu vidljive odmah (opacity ${r.kota})`);
  if (r.lenis) greske.push("reduced-motion: Lenis je uključen");
  return greske;
}
