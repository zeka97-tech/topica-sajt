// konfigurator.js — tri kartice rade zajedno: izbor modela, mere (− / + i upis), živi crtež sa kotama.
// Svaka promena → proracun.js → događaj "topica:element" (slušaju spisak.js i korpus.js).
import { MODELI, izracunaj, ogranici } from "./proracun.js";
import { crtezSvg } from "./crtez.js";
import { popuniRecenicu } from "./spisak-prikaz.js";

const POLJA = ["sirina", "visina", "dubina", "police", "vrata", "fioke"];
const stanje = { model: "base-with-doors", ulaz: {}, front: "drvo" }; // kao u programu: korpus beo, front u dezenu drveta
let rezultat = null;

/** Poslednji rezultat proračuna (za module koji se pokrenu kasnije). */
export const trenutniElement = () => rezultat;

function recnik() {
  const r = {};
  document.querySelectorAll("#spisak-recnik li").forEach((li) => { r[li.dataset.k] = li.textContent; });
  return r;
}

function postaviPolja(koren) {
  const m = MODELI[stanje.model], g = { ...m.mere, ...m.opcije };
  for (const p of POLJA) {
    const red = koren.querySelector(`[data-polje="${p}"]`), input = red.querySelector("input");
    red.hidden = !g[p];
    if (!g[p]) continue;
    input.min = g[p].min; input.max = g[p].max; input.value = stanje.ulaz[p];
    red.querySelector('[data-korak="-1"]').disabled = stanje.ulaz[p] <= g[p].min;
    red.querySelector('[data-korak="1"]').disabled = stanje.ulaz[p] >= g[p].max;
  }
  koren.querySelector('[data-polje="front"]').hidden = !m.front;
}

function nacrtaj(r) {
  const mali = document.getElementById("konf-crtez-mali"), veliki = document.getElementById("konf-crtez-veliki");
  const naziv = r[`model.${stanje.model}`];
  mali.innerHTML = crtezSvg(rezultat.crtez);
  veliki.innerHTML = crtezSvg(rezultat.crtez, { kote: true, naslov: naziv });
  for (const svg of [mali.firstElementChild, veliki.firstElementChild]) svg.dataset.front = stanje.front;
}

let najava = 0;
function osvezi(koren, r, bezNajave) {
  stanje.ulaz = ogranici(stanje.model, stanje.ulaz);
  rezultat = { ...izracunaj(stanje.model, stanje.ulaz), front: stanje.front, naziv: r[`model.${stanje.model}`] };
  postaviPolja(koren);
  nacrtaj(r);
  document.dispatchEvent(new CustomEvent("topica:element", { detail: rezultat }));
  if (bezNajave) return;
  const uzivo = document.getElementById("konf-uzivo"), u = rezultat.ulaz;
  clearTimeout(najava); // čitač ekrana čuje krajnju meru, ne svaki međukorak
  najava = setTimeout(() => { uzivo.textContent = popuniRecenicu(uzivo.dataset.sablon, { model: rezultat.naziv, s: u.sirina, v: u.visina, d: u.dubina, n: rezultat.zbir.komada }); }, 500);
}

function izaberi(grupa, dugme, atribut) {
  grupa.querySelectorAll('[role="radio"]').forEach((b) => { const da = b === dugme; b.setAttribute("aria-checked", String(da)); b.tabIndex = da ? 0 : -1; });
  return dugme.dataset[atribut];
}

/** Strelice u grupi dugmadi (kao radio dugmad). */
function strelice(grupa, naIzbor) {
  grupa.addEventListener("keydown", (e) => {
    const d = [...grupa.querySelectorAll('[role="radio"]')], i = d.indexOf(document.activeElement);
    const korak = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!korak || i < 0) return;
    e.preventDefault();
    const sledece = d[(i + korak + d.length) % d.length];
    sledece.focus(); naIzbor(sledece);
  });
}

export function pokreniKonfigurator() {
  const koren = document.getElementById("konfigurator");
  if (!koren) return;
  const r = recnik(), modeli = document.getElementById("konf-modeli"), frontovi = document.getElementById("konf-frontovi");
  const biraModel = (b) => { stanje.model = izaberi(modeli, b, "model"); stanje.ulaz = {}; osvezi(koren, r); };
  const biraFront = (b) => { stanje.front = izaberi(frontovi, b, "front"); osvezi(koren, r); };
  modeli.addEventListener("click", (e) => { const b = e.target.closest(".konf-model"); if (b) biraModel(b); });
  frontovi.addEventListener("click", (e) => { const b = e.target.closest(".konf-front"); if (b) biraFront(b); });
  strelice(modeli, biraModel); strelice(frontovi, biraFront);
  for (const g of [modeli, frontovi]) g.querySelectorAll('[role="radio"]').forEach((b) => { b.tabIndex = b.getAttribute("aria-checked") === "true" ? 0 : -1; });
  const polja = document.getElementById("konf-polja");
  polja.addEventListener("click", (e) => {
    const b = e.target.closest("[data-korak]"); if (!b) return;
    const p = b.closest("[data-polje]").dataset.polje, g = { ...MODELI[stanje.model].mere, ...MODELI[stanje.model].opcije }[p];
    stanje.ulaz[p] = stanje.ulaz[p] + Number(b.dataset.korak) * g.korak;
    osvezi(koren, r);
  });
  // dok se kuca: računaj samo kad je broj u granicama; pri izlasku iz polja svedi na granice
  polja.addEventListener("input", (e) => {
    const p = e.target.closest("[data-polje]")?.dataset.polje, v = Number(e.target.value);
    if (!p || !e.target.value || v < Number(e.target.min) || v > Number(e.target.max)) return;
    stanje.ulaz[p] = v; osvezi(koren, r);
  });
  polja.addEventListener("change", (e) => { const p = e.target.closest("[data-polje]")?.dataset.polje; if (p) { stanje.ulaz[p] = e.target.value; osvezi(koren, r); } });
  osvezi(koren, r, true);
}
