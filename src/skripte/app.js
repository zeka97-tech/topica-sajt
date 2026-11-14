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

/** Konfigurator, spisak i scena korpusa postoje samo na početnoj: ostale stranice te module ne učitavaju. */
async function pocetna() {
  const [spisak, konfigurator] = await Promise.all([import("./spisak.js"), import("./konfigurator.js")]);
  spisak.pokreniSpisak(); konfigurator.pokreniKonfigurator();
  if (smanjeno) (await import("./korpus.js")).pokreniKorpus();
}

function osnovno() { pokreniTraku(); pokreniJezik(); pokreniObrasce(); if (imaKonfigurator()) pocetna(); }

async function pokreti() {
  if (smanjeno) return; // bez pokreta sajt je potpun: tekst, slike i raspored su u HTML-u
  await ucitajVendor();
  if (!window.gsap) return;
  pokreniKretanje();
  pokreniKakoRadi();
  if (imaKonfigurator()) (await import("./korpus.js")).pokreniKorpus();
  pokreniNiz();
  pokreniGaleriju();
  window.ScrollTrigger?.refresh();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", osnovno); else osnovno();
if (document.readyState === "complete") pokreti(); else window.addEventListener("load", () => setTimeout(pokreti, 50));
