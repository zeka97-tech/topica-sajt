// kretanje.js — zajednički pristup GSAP-u, ScrollTrigger-u i Lenis-u; poštuje prefers-reduced-motion
export const smanjeno = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
export const mobilni = window.matchMedia("(max-width: 860px)").matches;
export const gsap = new Proxy({}, { get: (_, k) => window.gsap?.[k] });
export const ScrollTrigger = new Proxy({}, { get: (_, k) => window.ScrollTrigger?.[k] });

let lenis = null;
export function pokreniKretanje() {
  if (smanjeno || !window.gsap || !window.ScrollTrigger) return null;
  window.gsap.registerPlugin(window.ScrollTrigger);
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
