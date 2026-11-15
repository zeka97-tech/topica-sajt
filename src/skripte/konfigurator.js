// konfigurator.js — „Kreiraj svoj element": izbor modela, Materijali · Dimenzije · Okovi, 2D crtež i opis.
// Svaka promena → proracun.js (daske, okov) → događaj "topica:element" (slušaju spisak.js, konf-3d.js, korpus.js).
import { MODELI, izracunaj, ogranici, okovi } from "./proracun.js";
import { crtezSvg } from "./crtez.js";
import { popuniRecenicu, okoviHtml } from "./spisak-prikaz.js";
import { izaberi, radioGrupa, jezicci } from "./konf-panel.js";

const POLJA = ["sirina", "visina", "dubina", "police", "vrata", "fioke"];
const stanje = { model: "base-with-doors", ulaz: {}, korpus: "mat-white", front: "mat-oak", rucka: "stangla" }; // podrazumevano u programu
let rezultat = null;

/** Poslednji rezultat (za module koji se pokrenu kasnije), sa izgledom za 3D. */
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
  for (const id of ["konf-rucke", "konf-rucka-naziv", "konf-frontovi", "konf-front-naziv"]) document.getElementById(id).hidden = !m.front; // otvoreni element nema front
}

let najava = 0;
function osvezi(koren, r, bezNajave) {
  stanje.ulaz = ogranici(stanje.model, stanje.ulaz);
  const izgled = { korpus: stanje.korpus, front: stanje.front, rucka: stanje.rucka }, u = stanje.ulaz;
  rezultat = { ...izracunaj(stanje.model, u), izgled, naziv: r[`model.${stanje.model}`], okovi: okovi(stanje.model, u, stanje.rucka) };
  postaviPolja(koren);
  const veliki = document.getElementById("konf-crtez-veliki");
  veliki.innerHTML = crtezSvg(rezultat.crtez, { kote: true, naslov: rezultat.naziv });
  Object.assign(veliki.firstElementChild.dataset, { front: stanje.front, korpus: stanje.korpus, rucka: stanje.rucka });
  document.getElementById("konf-okovi").innerHTML = okoviHtml(rezultat.okovi, r);
  for (const el of koren.querySelectorAll("[data-izabran]")) el.textContent = r[`dezen.${stanje[el.dataset.izabran]}`];
  const opis = document.getElementById("konf-opis");
  opis.textContent = popuniRecenicu(opis.dataset.sablon, { model: rezultat.naziv, s: u.sirina, v: u.visina, d: u.dubina, n: rezultat.zbir.komada, korpus: r[`dezen.${stanje.korpus}`], front: MODELI[stanje.model].front ? r[`dezen.${stanje.front}`] : "—" });
  document.dispatchEvent(new CustomEvent("topica:element", { detail: rezultat }));
  if (bezNajave) return;
  const uzivo = document.getElementById("konf-uzivo");
  clearTimeout(najava); // čitač ekrana čuje krajnju meru, ne svaki međukorak
  najava = setTimeout(() => { uzivo.textContent = popuniRecenicu(uzivo.dataset.sablon, { model: rezultat.naziv, s: u.sirina, v: u.visina, d: u.dubina, n: rezultat.zbir.komada }); }, 500);
}

export function pokreniKonfigurator() {
  const koren = document.getElementById("konfigurator");
  if (!koren) return;
  const r = recnik();
  radioGrupa(document.getElementById("konf-modeli"), (b) => { stanje.model = izaberi(b.parentElement, b, "model"); stanje.ulaz = {}; osvezi(koren, r); });
  radioGrupa(document.getElementById("konf-korpus"), (b) => { stanje.korpus = izaberi(b.parentElement, b, "korpus"); osvezi(koren, r); });
  radioGrupa(document.getElementById("konf-frontovi"), (b) => { stanje.front = izaberi(b.parentElement, b, "front"); osvezi(koren, r); });
  radioGrupa(document.getElementById("konf-rucke"), (b) => { stanje.rucka = izaberi(b.parentElement, b, "rucka"); osvezi(koren, r); });
  jezicci(koren.querySelector(".panel-jezicci"));
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
