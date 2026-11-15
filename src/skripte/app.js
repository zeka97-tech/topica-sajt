// app.js — jedini ulaz: pokreće module po redu; bez globalnih promenljivih (ES moduli)
import { pokreniKretanje, smanjeno } from "./kretanje.js";
import { pokreniTraku } from "./traka.js";
import { pokreniJezik } from "./jezik.js";
import { pokreniKakoRadi } from "./kako-radi.js";
import { pokreniNiz } from "./niz.js";
import { pokreniGaleriju } from "./galerija.js";
import { pokreniObrasce } from "./obrazac.js";

const VENDOR = ["gsap.min.js", "ScrollTrigger.min.js", "lenis.min.js"];

/** Učitaj biblioteke iz vendor/ tek kad je stranica prikazana (ne usporavaju prvi prikaz). */
function ucitajVendor() {
  const koren = document.body.dataset.koren || "";
  return VENDOR.reduce((lanac, ime) => lanac.then(() => new Promise((ok) => {
    const s = document.createElement("script"); s.src = `${koren}vendor/${ime}`; s.onload = ok; s.onerror = ok; document.head.append(s);
  })), Promise.resolve());
}

const imaKonfigurator = () => !!document.getElementById("konfigurator");

/** Konfigurator i spisak postoje samo na početnoj, scena korpusa na stranici Mogućnosti; ostale stranice te module ne učitavaju. */
async function pocetna() {
  const [spisak, konfigurator, tri] = await Promise.all([import("./spisak.js"), import("./konfigurator.js"), import("./konf-3d.js")]);
  spisak.pokreniSpisak(); konfigurator.pokreniKonfigurator(); tri.pokreni3D();
}

function osnovno() {
  pokreniTraku(); pokreniJezik(); pokreniObrasce();
  if (imaKonfigurator()) pocetna();
  else if (smanjeno && document.getElementById("korpus")) import("./korpus.js").then((m) => m.pokreniKorpus());
}

async function pokreti() {
  if (smanjeno) return; // bez pokreta sajt je potpun: tekst, slike i raspored su u HTML-u
  await ucitajVendor();
  if (!window.gsap) return;
  pokreniKretanje();
  pokreniKakoRadi();
  if (document.getElementById("korpus")) (await import("./korpus.js")).pokreniKorpus();
  pokreniNiz();
  pokreniGaleriju();
  window.ScrollTrigger?.refresh();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", osnovno); else osnovno();
if (document.readyState === "complete") pokreti(); else window.addEventListener("load", () => setTimeout(pokreti, 50));
