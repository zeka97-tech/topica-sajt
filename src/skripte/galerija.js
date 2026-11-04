// galerija.js — horizontalni red snimaka vezan za vertikalni skrol (na telefonu običan horizontalni skrol)
import { gsap, ScrollTrigger, smanjeno, mobilni } from "./kretanje.js";
export function pokreniGaleriju() {
  const visina = document.getElementById("galerija-visina");
  const traka = document.getElementById("galerija-traka");
  if (!visina || !traka || smanjeno || mobilni || !gsap) return;
  const pomak = () => Math.max(0, traka.scrollWidth - window.innerWidth + 48);
  gsap.to(traka, { x: () => -pomak(), ease: "none",
    scrollTrigger: { trigger: visina, start: "top top", end: "bottom bottom", scrub: 0.6, invalidateOnRefresh: true } });
}
