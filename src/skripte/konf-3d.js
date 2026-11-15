// konf-3d.js — 3D prikaz u konfiguratoru: biblioteka se učitava tek kad konfigurator uđe u ekran (do tada poster),
// bez WebGL-a ili sa smanjenim kretanjem ostaje 2D crtež. Prekidač 2D / 3D, okretanje mišem i prstom, ↻ − + i ceo ekran.
import { smanjeno } from "./kretanje.js";
import { trenutniElement } from "./konfigurator.js";

function imaWebGL() {
  try { const c = document.createElement("canvas"); return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl"))); } catch { return false; }
}

export function pokreni3D() {
  const prikaz = document.getElementById("konf-prikaz");
  if (!prikaz) return;
  const prekidac = [...prikaz.querySelectorAll(".pogled-prekidac button")], kontrole = document.getElementById("konf-kontrole");
  const radnja = (ime) => kontrole.querySelector(`[data-radnja="${ime}"]`);
  let s = null;
  const postaviPogled = (p) => {
    prikaz.dataset.pogled = p;
    prekidac.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.pogled === p)));
    for (const ime of ["otvori", "okreni", "udalji", "priblizi"]) radnja(ime).disabled = p === "2d" || !s || (ime === "otvori" && !s.imaFrontove());
  };
  if (smanjeno || !imaWebGL()) { // 2D crtež sa kotama je potpun prikaz; dugme 3D se gasi
    prikaz.dataset.poster = "ne"; postaviPogled("2d");
    prekidac.find((b) => b.dataset.pogled === "3d").disabled = true;
    return;
  }
  prikaz.dataset.ucitava = "da"; postaviPogled("3d");
  prekidac.forEach((b) => b.addEventListener("click", () => { postaviPogled(b.dataset.pogled); s?.zatrazi(); }));
  document.addEventListener("topica:element", (e) => { if (s) { s.prikazi(e.detail); postaviPogled(prikaz.dataset.pogled); osveziOpis(); } else prikaz.dataset.poster = "ne"; });
  radnja("ekran").addEventListener("click", () => { if (document.fullscreenElement) document.exitFullscreen(); else prikaz.requestFullscreen?.(); });

  let platno;
  const osveziOpis = () => { if (platno) platno.setAttribute("aria-label", document.getElementById("konf-opis").textContent); };
  async function ucitaj() {
    const { pokreniPrikaz } = await import("./tri-prikaz.js");
    platno = document.createElement("canvas");
    platno.setAttribute("role", "img"); platno.tabIndex = 0; platno.setAttribute("aria-describedby", "konf-opis");
    document.getElementById("konf-3d").append(platno);
    s = pokreniPrikaz(platno, trenutniElement());
    osveziOpis();
    requestAnimationFrame(() => requestAnimationFrame(() => { prikaz.dataset.poster = "ne"; delete prikaz.dataset.ucitava; }));
    postaviPogled(prikaz.dataset.pogled);
    radnja("otvori").addEventListener("click", () => { const da = !s.otvoreno(); s.otvori(da); radnja("otvori").setAttribute("aria-pressed", String(da)); });
    radnja("okreni").addEventListener("click", () => { const c = s.pogled.cilj; c.ugao = c.ugao >= 70 ? -60 : Math.min(80, c.ugao + 45); s.zatrazi(); });
    radnja("udalji").addEventListener("click", () => s.zumiraj(1.15));
    radnja("priblizi").addEventListener("click", () => s.zumiraj(1 / 1.15));
    // mišem i prstom: vodoravno okreće, uspravno menja visinu pogleda (stranica i dalje skroluje uspravnim prevlačenjem prstom)
    let x0 = null, y0 = 0;
    platno.addEventListener("pointerdown", (e) => { x0 = e.clientX; y0 = e.clientY; platno.setPointerCapture(e.pointerId); });
    platno.addEventListener("pointermove", (e) => { if (x0 == null) return; s.okreni(-(e.clientX - x0) * 0.35, e.pointerType === "mouse" ? (e.clientY - y0) * 0.25 : 0); x0 = e.clientX; y0 = e.clientY; });
    const pusti = () => { x0 = null; };
    platno.addEventListener("pointerup", pusti); platno.addEventListener("pointercancel", pusti);
    platno.addEventListener("keydown", (e) => {
      const k = { ArrowLeft: [8, 0], ArrowRight: [-8, 0], ArrowUp: [0, 5], ArrowDown: [0, -5] }[e.key];
      if (k) { e.preventDefault(); s.okreni(...k); } else if (e.key === "+" || e.key === "=") s.zumiraj(1 / 1.15); else if (e.key === "-") s.zumiraj(1.15);
    });
  }
  const posmatrac = new IntersectionObserver((stavke) => { if (stavke.some((x) => x.isIntersecting)) { posmatrac.disconnect(); ucitaj(); } }, { rootMargin: "200px" });
  posmatrac.observe(prikaz);
}
