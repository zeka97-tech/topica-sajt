// traka.js — gornja traka: meni na telefonu, glatko do sidra, zatvaranje liste jezika
import { skrolujDo } from "./kretanje.js";
export function pokreniTraku() {
  const traka = document.getElementById("traka");
  if (!traka) return;
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
