// traka.js — gornja traka: malo dugme „Preuzmi" ispod hero-a, meni na telefonu, glatko do sidra
import { skrolujDo } from "./kretanje.js";
export function pokreniTraku() {
  const traka = document.getElementById("traka");
  if (!traka) return;
  const hero = document.getElementById("vrh");
  const osvezi = () => traka.classList.toggle("skrolovano", !hero || window.scrollY > hero.offsetHeight * 0.5);
  osvezi();
  window.addEventListener("scroll", osvezi, { passive: true });
  const dugme = traka.querySelector(".meni-dugme");
  dugme?.addEventListener("click", () => {
    const otvoreno = traka.classList.toggle("otvoreno");
    dugme.setAttribute("aria-expanded", String(otvoreno));
  });
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href*="#"]');
    if (!a) return;
    const hash = a.getAttribute("href").split("#")[1];
    const istaStrana = a.pathname === location.pathname || a.getAttribute("href").startsWith("#");
    if (!hash || !istaStrana) return;
    const cilj = document.getElementById(hash);
    if (!cilj) return;
    e.preventDefault();
    traka.classList.remove("otvoreno");
    dugme?.setAttribute("aria-expanded", "false");
    history.pushState(null, "", "#" + hash);
    skrolujDo(cilj);
  });
  const jezik = document.getElementById("jezik");
  document.addEventListener("click", (e) => { if (jezik?.open && !jezik.contains(e.target)) jezik.open = false; });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && jezik) jezik.open = false; });
}
