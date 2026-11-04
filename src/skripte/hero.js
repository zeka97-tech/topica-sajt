// hero.js — veliki prozor programa se „podigne" dok se skroluje (objašnjava: ovo je program)
import { gsap, ScrollTrigger, smanjeno } from "./kretanje.js";
export function pokreniHero() {
  const prozor = document.querySelector("#hero-prozor .prozor");
  if (!prozor || smanjeno || !gsap) return;
  gsap.fromTo(prozor, { scale: 0.94, y: 40 }, { scale: 1, y: 0, ease: "none",
    scrollTrigger: { trigger: "#hero-prozor", start: "top 95%", end: "top 45%", scrub: 0.5 } });
}
