// kako-radi.js — tri koraka: dok se skroluje kroz zakačen odeljak, aktivan je jedan korak i jedan ekran
import { gsap, ScrollTrigger, smanjeno, mobilni } from "./kretanje.js";
export function pokreniKakoRadi() {
  const visina = document.getElementById("kako-visina");
  const koraci = [...document.querySelectorAll("#koraci .korak")];
  const ekrani = [...document.querySelectorAll(".kako-ekran")];
  const napredak = document.getElementById("kako-napredak");
  if (!visina || koraci.length < 3 || smanjeno || mobilni || !gsap) { ekrani.forEach((e, i) => { if (i) e.style.position = "relative"; e.style.opacity = 1; }); return; }
  let aktivan = 0;
  const postavi = (i) => {
    if (i === aktivan) return;
    aktivan = i;
    koraci.forEach((k, j) => k.classList.toggle("aktivan", j === i));
    ekrani.forEach((e, j) => gsap.to(e, { opacity: j === i ? 1 : 0, duration: 0.35, overwrite: true }));
  };
  ScrollTrigger.create({ trigger: visina, start: "top top", end: "bottom bottom", scrub: true,
    onUpdate: (st) => { const p = st.progress; postavi(p < 1 / 3 ? 0 : p < 2 / 3 ? 1 : 2); if (napredak) napredak.style.width = (p * 100).toFixed(1) + "%"; } });
  koraci.forEach((k, i) => k.addEventListener("click", () => {
    const y = visina.offsetTop + (visina.offsetHeight - window.innerHeight) * (i / 3 + 0.05);
    window.scrollTo({ top: y, behavior: "smooth" });
  }));
}
