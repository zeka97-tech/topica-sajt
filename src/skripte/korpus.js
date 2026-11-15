// korpus.js — zakačena animacija: sklopljen element → daske se razmaknu sa kotama → legnu na table → spisak.
// Crta element iz konfiguratora (isti rezultat proracun.js kao tabela) i ponovo se gradi kad se mere promene.
import { gsap, ScrollTrigger, smanjeno, mobilni } from "./kretanje.js";
import { komadiElementa, napraviKomad, razmera } from "./korpus-model.js";
import { komadiIz, rasporedi, TABLA, TABLA_LESONITA } from "./raspored.js";
import { redoviHtml, popuniRecenicu } from "./spisak-prikaz.js";
import { trenutniElement } from "./konfigurator.js";
import { izracunaj } from "./proracun.js";

const KAMERA = { cx: -20, cy: -35 }; // isto kao --korpus-cx / --korpus-cy u tokeni.css
const SCENA = { w: 1100, h: 560 }, RAZMAK_TABLI = 150;
let tok = null; // tekuća GSAP vremenska linija

/** Table (18 mm pa lesonit) jedna do druge i mesto svakog komada na njima, u mm. */
function plan(rez) {
  const table = [], mesta = new Map();
  let x = 0;
  for (const [lesonit, T] of [[false, TABLA], [true, TABLA_LESONITA]]) for (const komadi of rasporedi(komadiIz(rez.daske, lesonit), T)) {
    if (!komadi.length) continue;
    table.push({ x, w: T.duzina, h: T.sirina });
    for (const k of komadi) mesta.set(`${k.red}#${k.i}`, { x: x + k.x + k.w / 2, y: k.y + k.h / 2, w: k.w });
    x += T.duzina + RAZMAK_TABLI;
  }
  return { table, mesta, sirina: x - RAZMAK_TABLI, visina: TABLA.sirina };
}

const postavi = (el, p) => { el.style.transform = `translate3d(${p.x}px, ${p.y}px, ${p.z}px) rotateY(${p.ry || 0}deg) rotateX(${p.rx || 0}deg)`; };

function izgradi(rez, d) {
  if (tok) { tok.scrollTrigger?.kill(); tok.kill(); tok = null; }
  d.svet.replaceChildren(); d.table.replaceChildren();
  d.redovi.innerHTML = redoviHtml(rez.daske, d.recnik, d.fmt);
  const u = rez.ulaz;
  d.natpisi[0].textContent = popuniRecenicu(d.natpisi[0].dataset.sablon, { model: rez.naziv, s: u.sirina, v: u.visina, d: u.dubina, n: rez.zbir.komada });
  const MM = razmera(rez.ulaz), komadi = komadiElementa(rez), p = plan(rez);
  const pm = Math.min((SCENA.w - 60) / p.sirina, (SCENA.h - 80) / p.visina), sk = pm / MM;
  const el = komadi.map((k) => { const e = napraviKomad(k, MM, `${rez.daske[k.red].duzina} × ${rez.daske[k.red].sirina}`, d.recnik[`deo.${k.deo}`], KAMERA, rez.izgled?.front || "mat-oak"); d.svet.append(e); return e; });
  const sklopljen = (k) => ({ x: k.x * MM, y: k.y * MM, z: k.z * MM, rx: k.rotX, ry: k.rotY });
  const razmaknut = (k) => ({ x: k.x * MM + (k.eks.x || 0), y: k.y * MM + (k.eks.y || 0), z: k.z * MM + (k.eks.z || 0), rx: k.rotX, ry: k.rotY });
  for (const t of p.table) { const o = document.createElement("div"); o.className = "plan-okvir"; o.style.cssText = `left:${SCENA.w / 2 + (t.x - p.sirina / 2) * pm}px;top:${SCENA.h / 2 - (p.visina / 2) * pm}px;width:${t.w * pm}px;height:${t.h * pm}px`; d.table.append(o); }
  const kote = d.svet.querySelectorAll(".kota");
  d.scena.style.setProperty("--cx", `${KAMERA.cx}deg`); d.scena.style.setProperty("--cy", `${KAMERA.cy}deg`); d.scena.style.setProperty("--sk", "1");

  if (smanjeno || !window.gsap) { // bez pokreta: razmaknut element sa kotama, spisak ispod
    komadi.forEach((k, i) => postavi(el[i], razmaknut(k)));
    return;
  }
  komadi.forEach((k, i) => gsap.set(el[i], { ...gs(sklopljen(k)), rotation: 0, opacity: 1 }));
  gsap.set(kote, { opacity: 0 }); gsap.set([d.omot, d.lista], { clearProps: "all" }); gsap.set(d.table, { opacity: 0 });
  d.natpisi.forEach((n, i) => gsap.set(n, { opacity: i ? 0 : 1 }));
  tok = gsap.timeline({ defaults: { ease: "power1.inOut" }, scrollTrigger: { trigger: "#korpus-visina", start: "top top", end: "bottom bottom", scrub: 0.6 } });
  tok.to({}, { duration: 0.8 }).add("eks");
  komadi.forEach((k, i) => tok.to(el[i], { ...gs(razmaknut(k)), duration: 2 }, "eks"));
  tok.to(d.natpisi[0], { opacity: 0, duration: 0.4 }, "eks").to(d.natpisi[1], { opacity: 1, duration: 0.4 }, "eks+=0.4")
    .to(kote, { opacity: 1, duration: 0.6, stagger: 0.08 }, "eks+=0.8").to({}, { duration: 1.6 }).add("plan")
    .to(kote, { opacity: 0, duration: 0.5 }, "plan").to(d.scena, { "--cx": "0deg", "--cy": "0deg", "--sk": sk, duration: 2.4 }, "plan");
  komadi.forEach((k, i) => {
    const m = p.mesta.get(`${k.red}#${k.i}`);
    if (!m) return tok.to(el[i], { opacity: 0, duration: 1 }, "plan");
    tok.to(el[i], { x: (m.x - p.sirina / 2) * MM, y: (m.y - p.visina / 2) * MM, z: 0, rotationX: 0, rotationY: 0, rotation: Math.abs(k.w - m.w) > 0.5 ? 90 : 0, duration: 2.4 }, "plan");
  });
  tok.to(d.table, { opacity: 1, duration: 1.2 }, "plan+=1").to(d.natpisi[1], { opacity: 0, duration: 0.4 }, "plan").to(d.natpisi[2], { opacity: 1, duration: 0.4 }, "plan+=0.5").to({}, { duration: 1 }).add("lista");
  if (mobilni) tok.to(d.scena, { opacity: 0, duration: 1 }, "lista").fromTo(d.lista, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, "lista+=0.3");
  else tok.to(d.omot, { x: -330, scale: 0.42, duration: 1.4 }, "lista").fromTo(d.lista, { x: 420, opacity: 0 }, { x: 250, opacity: 1, duration: 1.4 }, "lista");
  tok.to(d.natpisi[2], { opacity: 0, duration: 0.4 }, "lista").to(d.natpisi[3], { opacity: 1, duration: 0.4 }, "lista+=0.5").to({}, { duration: 1.2 });
  // visina odeljaka iznad se menja sa brojem redova spiska: izmeri ponovo kad se raspored smiri (ne usred događaja)
  requestAnimationFrame(() => requestAnimationFrame(() => ScrollTrigger.refresh()));
}
const gs = (p) => ({ x: p.x, y: p.y, z: p.z, rotationX: p.rx || 0, rotationY: p.ry || 0 });

export function pokreniKorpus() {
  const scena = document.getElementById("korpus-scena");
  if (!scena) return;
  const recnik = {};
  document.querySelectorAll("#spisak-recnik li").forEach((li) => { recnik[li.dataset.k] = li.textContent; });
  const jezik = document.documentElement.lang;
  const d = { scena, svet: document.getElementById("svet"), table: document.getElementById("plan-table"), omot: document.getElementById("korpus-omot"), lista: document.getElementById("krojna-lista"),
    redovi: document.getElementById("korpus-redovi"), natpisi: [...document.querySelectorAll("#korpus-natpisi .natpis")], recnik,
    fmt: (n, dec) => new Intl.NumberFormat(jezik, dec == null ? { maximumFractionDigits: 2 } : { minimumFractionDigits: dec, maximumFractionDigits: dec }).format(n) };
  const skaliraj = () => { const o = scena.parentElement; scena.style.transform = `translate(-50%, -50%) scale(${Math.min(0.94, (o.clientWidth + 120) / SCENA.w, (o.clientHeight - 8) / SCENA.h).toFixed(3)})`; };
  skaliraj(); window.addEventListener("resize", skaliraj);
  // na početnoj crta element iz konfiguratora; na stranici Mogućnosti podrazumevani element iz programa
  izgradi(trenutniElement() || { ...izracunaj("base-with-doors", {}), naziv: recnik["model.base-with-doors"], izgled: { front: "mat-oak" } }, d);
  document.addEventListener("topica:element", (e) => izgradi(e.detail, d));
}
