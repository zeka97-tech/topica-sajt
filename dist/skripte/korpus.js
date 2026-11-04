// korpus.js — zakačena animacija: sastavljen korpus → daske se razmaknu sa kotama → legnu na ploču → krojna lista
import { gsap, ScrollTrigger, smanjeno, mobilni } from "./kretanje.js";
import { DASKE, MM, PLOCA, napraviDasku, naziviDasaka } from "./korpus-model.js";

const KAMERA = { cx: -20, cy: -35 }; // isto kao --korpus-cx / --korpus-cy u tokeni.css
const SK_PLAN = 0.55;
const SK_LISTA = 0.42;

export function pokreniKorpus() {
  const scena = document.getElementById("korpus-scena");
  const svet = document.getElementById("svet");
  if (!scena || !svet) return;
  const nazivi = naziviDasaka();
  const elementi = DASKE.map((d) => { const el = napraviDasku(d, nazivi, KAMERA); svet.append(el); return el; });
  const senka = document.createElement("div"); senka.className = "senka-korpusa"; svet.prepend(senka);
  // početni (sastavljen) položaj
  DASKE.forEach((d, i) => gsap.set(elementi[i], { x: d.x * MM, y: d.y * MM, z: d.z * MM, rotationX: d.rotX || 0, rotationY: d.rotY || 0, rotation: 0 }));
  gsap.set(senka, { z: -300 * MM, rotationX: 90, y: 400 * MM });
  skalirajScenu(scena);
  window.addEventListener("resize", () => skalirajScenu(scena));

  const natpisi = [...document.querySelectorAll("#korpus-natpisi .natpis")];
  const kote = scena.querySelectorAll(".kota");
  const kotePlan = scena.querySelectorAll(".kota-plan");
  const ploca = document.getElementById("ploca-podloga");
  const krojna = document.getElementById("krojna-lista");
  const kamera = scena.querySelector(".kamera");

  if (smanjeno || !gsap) { // bez animacije: rastavljen korpus sa kotama i krojna lista pored
    DASKE.forEach((d, i) => gsap.set(elementi[i], { x: (d.x + (d.eks.x || 0)) * MM, y: (d.y + (d.eks.y || 0)) * MM, z: (d.z + (d.eks.z || 0)) * MM }));
    gsap.set(kote, { opacity: 1 }); gsap.set(kamera, { x: mobilni ? 0 : -370 }); gsap.set(krojna, { opacity: 1, x: mobilni ? 0 : 300 });
    return;
  }
  const tl = gsap.timeline({ defaults: { ease: "power1.inOut" },
    scrollTrigger: { trigger: "#korpus-visina", start: "top top", end: "bottom bottom", scrub: 0.6 } });
  // a) 0–1: korpus stoji, natpis 1 (kratko zadržavanje)
  tl.to({}, { duration: 0.8 });
  // b) 1–3: razmakni daske, kote
  tl.add("eks");
  DASKE.forEach((d, i) => tl.to(elementi[i], { x: (d.x + (d.eks.x || 0)) * MM, y: (d.y + (d.eks.y || 0)) * MM, z: (d.z + (d.eks.z || 0)) * MM, duration: 2 }, "eks"));
  tl.to(senka, { opacity: 0, duration: 1 }, "eks");
  tl.to(natpisi[0], { opacity: 0, duration: 0.4 }, "eks").to(natpisi[1], { opacity: 1, duration: 0.4 }, "eks+=0.4");
  tl.to(kote, { opacity: 1, duration: 0.6, stagger: 0.12 }, "eks+=0.8");
  tl.to({}, { duration: 1.6 });
  // c) legnu na ploču: kamera u ravan, daske u krojni plan
  tl.add("plan");
  tl.to(kote, { opacity: 0, duration: 0.5 }, "plan");
  tl.to(scena, { "--cx": "0deg", "--cy": "0deg", "--sk": SK_PLAN, duration: 2.4 }, "plan");
  DASKE.forEach((d, i) => tl.to(elementi[i], { x: (d.plan.x - PLOCA.w / 2) * MM, y: (d.plan.y - PLOCA.h / 2) * MM, z: 0, rotationX: 0, rotationY: 0, rotation: d.plan.rot || 0, duration: 2.4 }, "plan"));
  tl.to(ploca, { opacity: 1, duration: 1.2 }, "plan+=1");
  tl.to(kotePlan, { opacity: 1, duration: 0.8, stagger: 0.08 }, "plan+=1.8");
  tl.to(natpisi[1], { opacity: 0, duration: 0.4 }, "plan").to(natpisi[2], { opacity: 1, duration: 0.4 }, "plan+=0.5");
  tl.to({}, { duration: 1 });
  // d) krojna lista pored plana
  tl.add("lista");
  if (mobilni) { // na telefonu plan se povuče, lista dođe preko cele širine
    tl.to(scena, { opacity: 0, duration: 1 }, "lista");
    tl.fromTo(krojna, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, "lista+=0.3");
  } else {
    tl.to([kamera, ploca], { x: -370, duration: 1.4 }, "lista");
    tl.to(scena, { "--sk": SK_LISTA, duration: 1.4 }, "lista");
    tl.fromTo(krojna, { x: 460, opacity: 0 }, { x: 300, opacity: 1, duration: 1.4 }, "lista");
  }
  tl.to(natpisi[2], { opacity: 0, duration: 0.4 }, "lista").to(natpisi[3], { opacity: 1, duration: 0.4 }, "lista+=0.5");
  tl.to({}, { duration: 1.2 });
}

/** Scena je crtana za 1100 × 560 px; na manjem ekranu se smanji cela. */
function skalirajScenu(scena) {
  const okvir = scena.parentElement;
  const s = Math.min(0.94, (okvir.clientWidth + 120) / 1100, (okvir.clientHeight - 8) / 560);
  scena.style.transform = `translate(-50%, -50%) scale(${s.toFixed(3)})`;
}
