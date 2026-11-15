// tri-prikaz.js — ulaz u 3D (učitava se tek kad konfigurator uđe u ekran): scena + element iz proračuna + kote.
import { napraviScenu } from "./tri-scena.js";
import { napraviElement } from "./tri-element.js";
import { napraviKote } from "./tri-kote.js";
import { podesiMaterijale } from "./tri-materijali.js";
import { DASKA } from "./tri-podesavanja.js";

/** rez = detalj događaja topica:element (rezultat proracun.js + izgled { korpus, front, rucka }). */
export function pokreniPrikaz(platno, rez) {
  const s = napraviScenu(platno);
  podesiMaterijale(Math.min(DASKA.anizotropija, s.anizotropija), s.zatrazi);
  let imaFrontove = false;
  const prikazi = (r) => { const el = napraviElement(r, r.izgled); imaFrontove = el.imaFrontove; if (!imaFrontove) s.otvori(false); s.postavi(el, napraviKote(el.kutija, r.ulaz)); };
  prikazi(rez);
  return { ...s, prikazi, imaFrontove: () => imaFrontove };
}
