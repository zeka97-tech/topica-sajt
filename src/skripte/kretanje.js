// kretanje.js — zajednički pristup GSAP-u, ScrollTrigger-u i Lenis-u; poštuje prefers-reduced-motion
export const smanjeno = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
export const mobilni = window.matchMedia("(max-width: 860px)").matches;
export const gsap = window.gsap;
export const ScrollTrigger = window.ScrollTrigger;

let lenis = null;
export function pokreniKretanje() {
  if (smanjeno || !gsap || !ScrollTrigger) return null;
  gsap.registerPlugin(ScrollTrigger);
  if (window.Lenis) {
    lenis = new window.Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  return lenis;
}
export function skrolujDo(cilj) {
  if (lenis) lenis.scrollTo(cilj, { offset: -56 });
  else cilj.scrollIntoView({ behavior: smanjeno ? "auto" : "smooth" });
}
