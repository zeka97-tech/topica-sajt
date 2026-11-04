// jezik.js — pamti izabrani jezik; prvi put predloži jezik pregledača ako postoji stranica na njemu
const KLJUC = "topica-jezik";
const citaj = () => { try { return localStorage.getItem(KLJUC); } catch { return null; } };
const pisi = (v) => { try { localStorage.setItem(KLJUC, v); } catch { /* privatni režim */ } };

export function pokreniJezik() {
  const kod = document.body.dataset.kod;
  const koren = document.body.dataset.koren || "";
  document.querySelectorAll("a[data-jezik]").forEach((a) => a.addEventListener("click", () => pisi(a.dataset.jezik)));
  const zapamcen = citaj();
  if (zapamcen) { if (zapamcen !== kod && !sessionStorage.getItem("topica-rucno")) return predlozi(zapamcen, koren, kod); return; }
  pisi(kod);
  const dostupni = [...document.querySelectorAll("a[data-jezik]")].map((a) => a.dataset.jezik);
  const zeljeni = (navigator.languages || [navigator.language || ""]).map((l) => l.toLowerCase().split("-")[0]).map((k) => (k === "nb" || k === "nn" ? "no" : k === "bs" ? "sr" : k)).find((k) => dostupni.includes(k));
  if (zeljeni && zeljeni !== kod) predlozi(zeljeni, koren, kod);
}

async function predlozi(ciljniKod, koren, kod) {
  const kutija = document.getElementById("jezik-predlog");
  const veza = document.querySelector(`a[data-jezik="${ciljniKod}"]`);
  if (!kutija || !veza) return;
  let podaci = null;
  try { podaci = (await (await fetch(koren + "jezik-predlog.json")).json())[ciljniKod]; } catch { return; }
  if (!podaci) return;
  kutija.hidden = false;
  kutija.innerHTML = `<span>${podaci.tekst}</span> <a href="${veza.getAttribute("href")}" lang="${ciljniKod}">${podaci.dugme} ›</a> <button type="button" aria-label="×">×</button>`;
  kutija.classList.add("vidljivo");
  kutija.querySelector("a").addEventListener("click", () => pisi(ciljniKod));
  kutija.querySelector("button").addEventListener("click", () => { kutija.classList.remove("vidljivo"); pisi(kod); sessionStorage.setItem("topica-rucno", "1"); });
}
