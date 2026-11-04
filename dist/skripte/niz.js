// niz.js — kratak primer: tri korpusa se priljube jedan uz drugi, pa radna ploča legne preko njih (1 s pri ulasku)
import { gsap, ScrollTrigger, smanjeno } from "./kretanje.js";
export function pokreniNiz() {
  const scena = document.getElementById("niz-scena");
  if (!scena || smanjeno || !gsap) return;
  const korpusi = scena.querySelectorAll(".niz-korpus");
  const ploca = scena.querySelector(".niz-ploca");
  const mera = scena.querySelector(".niz-mera");
  const cokla = scena.querySelector(".niz-cokla");
  const tl = gsap.timeline({ paused: true, defaults: { ease: "power2.out" } });
  tl.to(korpusi, { "--od": "0px", duration: 0.55 })
    .to(ploca, { "--od-gore": "0px", "--vidljivo": 1, duration: 0.4 }, "-=0.1")
    .to(cokla, { "--vidljivo": 1, duration: 0.3 }, "-=0.2")
    .to(mera, { "--vidljivo": 1, duration: 0.3 }, "-=0.1");
  ScrollTrigger.create({ trigger: scena, start: "top 75%", onEnter: () => tl.play(), onLeaveBack: () => tl.reverse() });
}
