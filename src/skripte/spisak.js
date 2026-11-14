// spisak.js — „Spisak za sečenje": tabela, zbirovi i krojni plan iz istog rezultata kao crtež; izmenjeni redovi kratko zasvetle
import { redoviHtml, zbirBrojevi, popuniRecenicu } from "./spisak-prikaz.js";
import { planSvg } from "./raspored.js";

export function pokreniSpisak() {
  const telo = document.getElementById("spisak-redovi");
  if (!telo) return;
  const r = {};
  document.querySelectorAll("#spisak-recnik li").forEach((li) => { r[li.dataset.k] = li.textContent; });
  const jezik = document.documentElement.lang;
  const fmt = (n, dec) => new Intl.NumberFormat(jezik, dec == null ? { maximumFractionDigits: 2 } : { minimumFractionDigits: dec, maximumFractionDigits: dec }).format(n);
  const opis = document.getElementById("spisak-opis"), plan = document.getElementById("spisak-plan");
  let prvi = true;
  document.addEventListener("topica:element", (e) => {
    const rez = e.detail, stari = new Map([...telo.rows].map((tr) => [tr.dataset.deo + "#" + [...telo.querySelectorAll(`[data-deo="${tr.dataset.deo}"]`)].indexOf(tr), tr.dataset.potpis]));
    telo.innerHTML = redoviHtml(rez.daske, r, fmt);
    if (!prvi) [...telo.rows].forEach((tr) => {
      const k = tr.dataset.deo + "#" + [...telo.querySelectorAll(`[data-deo="${tr.dataset.deo}"]`)].indexOf(tr);
      if (stari.get(k) !== tr.dataset.potpis) tr.classList.add("zasvetli");
    });
    prvi = false;
    const z = zbirBrojevi(rez.zbir, fmt), u = rez.ulaz;
    document.getElementById("zbir-ploca").textContent = z.ploca;
    document.getElementById("zbir-lesonit").textContent = z.lesonit;
    document.getElementById("zbir-kant").textContent = z.kant;
    opis.textContent = popuniRecenicu(opis.dataset.sablon, { model: rez.naziv, s: u.sirina, v: u.visina, d: u.dubina, n: z.komada });
    plan.innerHTML = planSvg(rez.daske, r, { ostatak: plan.dataset.ostatak });
  });
}
