// app.js — jedini ulaz: pokreće module po redu; bez globalnih promenljivih (ES moduli)
import { pokreniKretanje, smanjeno } from "./kretanje.js";
import { pokreniTraku } from "./traka.js";
import { pokreniJezik } from "./jezik.js";
import { pokreniHero } from "./hero.js";
import { pokreniKakoRadi } from "./kako-radi.js";
import { pokreniKorpus } from "./korpus.js";
import { pokreniNiz } from "./niz.js";
import { pokreniGaleriju } from "./galerija.js";
import { pokreniObrasce } from "./obrazac.js";

function start() {
  pokreniKretanje();
  pokreniTraku();
  pokreniJezik();
  pokreniObrasce();
  if (!window.gsap) return; // bez GSAP-a sajt je i dalje potpun, samo bez pokreta
  pokreniHero();
  pokreniKakoRadi();
  pokreniKorpus();
  pokreniNiz();
  pokreniGaleriju();
  if (!smanjeno) window.ScrollTrigger?.refresh();
}
// skripte iz vendor/ su "defer", a ovaj modul se izvršava posle njih (moduli su takođe odloženi)
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
