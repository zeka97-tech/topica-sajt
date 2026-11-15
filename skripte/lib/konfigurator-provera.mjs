// skripte/lib/konfigurator-provera.mjs — konfigurator u pregledaču: svaki model, tabela i okov = proracun.js, 3D (i 2D sa smanjenim kretanjem), CLS
// dok se mere menjaju, tastatura, najava za čitač ekrana, smanjeno kretanje; snimci svakog modela u docs/snimci/.
import { MODELI, izracunaj, ogranici, okovi } from "../../src/skripte/proracun.js";
import { poredjaj } from "../../src/skripte/spisak-prikaz.js";

const ocekivano = (id, ulaz) => poredjaj(izracunaj(id, ulaz).daske).map((d) => `${d.deo}|${d.komada}|${d.duzina} × ${d.sirina}`).join("\n");
const tabela = (p, sel) => p.$$eval(`${sel} tr`, (r) => r.map((tr) => `${tr.dataset.deo}|${tr.cells[1].textContent}|${tr.cells[2].textContent}`).join("\n"));
const naVrh = (p, sel, pomak = 0) => p.evaluate(([s, d]) => { const e = document.querySelector(s); window.scrollTo(0, e.getBoundingClientRect().top + scrollY + d); }, [sel, pomak]);

async function otvori(browser, url, sirina, smanjeno) {
  const ctx = await browser.newContext({ viewport: { width: sirina, height: sirina > 600 ? 900 : 844 }, reducedMotion: smanjeno ? "reduce" : "no-preference", locale: "sr" });
  const p = await ctx.newPage();
  const js = [];
  p.on("pageerror", (e) => js.push("JS greška: " + e.message));
  p.on("console", (m) => { if (m.type() === "error") js.push("console: " + m.text()); });
  await p.goto(url, { waitUntil: "networkidle" });
  await p.waitForTimeout(1200); // biblioteke za pokret stižu posle load-a
  return { ctx, p, js };
}

/** Lista grešaka (prazna = dobro) + izmereno pomeranje sadržaja po širini. */
export async function proveriKonfigurator(browser, url) {
  const greske = [], cls = {};
  for (const [sirina, smanjeno] of [[1440, false], [390, false], [1440, true]]) {
    const ime = `konfigurator ${sirina}${smanjeno ? " (smanjeno kretanje)" : ""}`;
    const { ctx, p, js } = await otvori(browser, url, sirina, smanjeno);
    if (await tabela(p, "#spisak-redovi") !== ocekivano("base-with-doors", {})) greske.push(`${ime}: spisak pri otvaranju nije isti kao proracun.js`);
    await p.evaluate(() => { window.__cls = { sve: 0, bezUnosa: 0 }; new PerformanceObserver((l) => { for (const e of l.getEntries()) { window.__cls.sve += e.value; if (!e.hadRecentInput) window.__cls.bezUnosa += e.value; } }).observe({ type: "layout-shift" }); });
    for (const id of Object.keys(MODELI)) {
      await naVrh(p, "#konfigurator", sirina > 600 ? 200 : 40);
      await p.click(`.konf-model[data-model="${id}"]`);
      await p.click("#jezicak-dimenzije"); // mere su u kartici „Dimenzije"
      const ulaz = ogranici(id, {});
      if (await tabela(p, "#spisak-redovi") !== ocekivano(id, ulaz)) greske.push(`${ime}: ${id} — spisak nije isti kao proracun.js`);
      const m = MODELI[id], polja = ["sirina", "visina", "dubina", ...Object.keys(m.opcije)];
      for (const [i, polje] of polja.entries()) { // svaka mera i opcija: tri koraka gore ili dole
        const g = { ...m.mere, ...m.opcije }[polje], smer = i % 2 ? -1 : 1;
        await p.locator(`[data-polje="${polje}"] .korak-polje`).scrollIntoViewIfNeeded();
        for (let k = 0; k < 3; k++) { const b = p.locator(`[data-polje="${polje}"] [data-korak="${smer}"]`); if (await b.isEnabled()) { await b.click(); ulaz[polje] += smer * g.korak; Object.assign(ulaz, ogranici(id, ulaz)); } }
      }
      const posle = ogranici(id, ulaz);
      if (await tabela(p, "#spisak-redovi") !== ocekivano(id, posle)) greske.push(`${ime}: ${id} posle − / + — spisak nije isti kao proracun.js (${JSON.stringify(posle)})`);
      await p.click("#jezicak-okovi");
      const okov = await p.$$eval("#konf-okovi li", (l) => l.length);
      if (okov !== okovi(id, posle).length) greske.push(`${ime}: ${id} — lista okova (${okov}) nije ista kao proracun.js (${okovi(id, posle).length})`);
      const kota = await p.$$eval("#konf-crtez-veliki text", (t) => t.map((x) => x.textContent).join(" "));
      for (const k of ["sirina", "visina", "dubina"]) if (!kota.includes(String(posle[k]))) greske.push(`${ime}: ${id} — kota ${k} ${posle[k]} nije na crtežu`);
    }
    // upis broja van granica se svodi na granicu
    await p.click("#jezicak-dimenzije");
    await p.fill("#konf-sirina", "99999"); await p.press("#konf-sirina", "Tab");
    const upisano = await p.inputValue("#konf-sirina"), maks = String(MODELI[Object.keys(MODELI).at(-1)].mere.sirina.max);
    if (upisano !== maks) greske.push(`${ime}: upis 99999 u širinu dao ${upisano}, treba ${maks}`);
    // tastatura: strelica u spisku modela bira sledeći model
    const red = await p.$$eval(".konf-model", (e) => e.map((x) => x.dataset.model)), pre = await p.getAttribute('.konf-model[aria-checked="true"]', "data-model");
    await p.focus('.konf-model[aria-checked="true"]'); await p.keyboard.press("ArrowDown");
    const izabran = await p.getAttribute('.konf-model[aria-checked="true"]', "data-model");
    if (izabran !== red[(red.indexOf(pre) + 1) % red.length]) greske.push(`${ime}: strelica nije izabrala sledeći model (${izabran})`);
    await p.waitForTimeout(700);
    if (!(await p.textContent("#konf-uzivo")).trim()) greske.push(`${ime}: nema najave za čitač ekrana (aria-live)`);
    const bezNaziva = await p.$$eval("#konfigurator input, #konfigurator button", (e) => e.filter((x) => !(x.labels?.length || x.getAttribute("aria-label") || x.textContent.trim())).length);
    if (bezNaziva) greske.push(`${ime}: ${bezNaziva} polja / dugmadi bez naziva`);
    const r = await p.evaluate(() => ({ cls: window.__cls, pin: document.querySelectorAll(".pin-spacer").length, platno: !!document.querySelector("#konf-3d canvas"), pogled: document.getElementById("konf-prikaz").dataset.pogled, opis: document.querySelector("#konf-3d canvas")?.getAttribute("aria-label") || "" }));
    cls[`${sirina}${smanjeno ? "-smanjeno" : ""}`] = r.cls;
    if (r.cls.bezUnosa >= 0.1) greske.push(`${ime}: CLS dok se mere menjaju ${r.cls.bezUnosa.toFixed(3)} ≥ 0,1`);
    if (smanjeno && r.pin) greske.push(`${ime}: postoji zakačen odeljak`);
    if (smanjeno && (r.platno || r.pogled !== "2d")) greske.push(`${ime}: sa smanjenim kretanjem mora da ostane 2D crtež (bez 3D-a)`);
    if (!smanjeno && (!r.platno || !r.opis)) greske.push(`${ime}: 3D prikaz se nije učitao ili platno nema tekstualni opis`);
    greske.push(...js.slice(0, 3).map((g) => `${ime}: ${g}`));
    await ctx.close();
  }
  return { greske, cls };
}

/** Snimci: svaki model u 3D (zatvoren i otvoren) i 2D, tri kartice desno, spisak za sečenje (1440 i 390). */
export async function snimiModele(browser, url, sirina, prefix, dir) {
  const { ctx, p } = await otvori(browser, url, sirina, false);
  const prikaz = await p.$("#konf-prikaz");
  await naVrh(p, "#konfigurator", -70); await p.waitForTimeout(2500);
  for (const id of Object.keys(MODELI)) {
    await p.click(`.konf-model[data-model="${id}"]`); await p.waitForTimeout(900);
    await prikaz.scrollIntoViewIfNeeded(); await prikaz.screenshot({ path: `${dir}/${prefix}-${sirina}-3d-${id}.png` });
    const otv = await p.$('[data-radnja="otvori"]:not([disabled])');
    if (otv) { await otv.click(); await p.waitForTimeout(1300); await prikaz.screenshot({ path: `${dir}/${prefix}-${sirina}-3d-otvoren-${id}.png` }); await otv.click(); await p.waitForTimeout(800); }
    await p.click('.pogled-prekidac [data-pogled="2d"]'); await p.waitForTimeout(300);
    await prikaz.screenshot({ path: `${dir}/${prefix}-${sirina}-2d-${id}.png` });
    await p.click('.pogled-prekidac [data-pogled="3d"]'); await p.waitForTimeout(300);
  }
  await p.click('.konf-model[data-model="base-with-doors"]'); await p.waitForTimeout(500);
  for (const tab of ["materijali", "dimenzije", "okovi"]) { await p.click(`#jezicak-${tab}`); await p.waitForTimeout(250); await (await p.$(".urednik-panel")).screenshot({ path: `${dir}/${prefix}-${sirina}-kartica-${tab}.png` }); }
  await naVrh(p, "#spisak", -70); await p.waitForTimeout(600);
  await p.screenshot({ path: `${dir}/${prefix}-${sirina}-spisak.png` });
  await ctx.close();
}
