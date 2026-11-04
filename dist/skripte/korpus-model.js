// korpus-model.js — podaci i crtanje donjeg korpusa 600 × 720 × 560 (mm) od CSS 3D „dasaka"
// Mere dasaka su iste kao u krojnoj listi programa (snimak 33): bok 702×539, dno 600×539, polica 562×519,
// prečka 564×100 ×2, front 717×597, leđa 717×597 (3 mm). 1 mm = --korpus-mm px (0,5).
export const MM = 0.5;

// pozicije su centri dasaka u mm, koordinatni početak u sredini korpusa; y raste nadole, z ka gledaocu
export const DASKE = [
  { id: "bok-l", naziv: "bok", w: 539, h: 702, t: 18, mat: "bela", rotY: 90, x: -291, y: -9, z: -7.5, mera: "702 × 539", eks: { x: -240 }, kota: { x: -40, y: -190 }, plan: { x: 381, y: 309.5, rot: 90 } },
  { id: "bok-d", naziv: "bok", w: 539, h: 702, t: 18, mat: "bela", rotY: 90, x: 291, y: -9, z: -7.5, mera: "702 × 539", eks: { x: 240 }, plan: { x: 1113, y: 309.5, rot: 90 } },
  { id: "dno", naziv: "dno", w: 600, h: 539, t: 18, mat: "bela", rotX: 90, x: 0, y: 351, z: -7.5, mera: "600 × 539", eks: { y: 200 }, kota: { x: 130, y: 20 }, plan: { x: 330, y: 878.5 } },
  { id: "polica", naziv: "polica", w: 562, h: 519, t: 18, mat: "bela", rotX: 90, x: 0, y: 0, z: -17.5, mera: "562 × 519", eks: { z: 120, y: 40 }, kota: { x: 120, y: 10 }, plan: { x: 941, y: 868.5 } },
  { id: "precka-p", naziv: "precka", w: 564, h: 100, t: 18, mat: "bela", x: 0, y: -310, z: 253, mera: "564 × 100", eks: { y: -140 }, plan: { x: 1534, y: 659 } },
  { id: "precka-z", naziv: "precka", w: 564, h: 100, t: 18, mat: "bela", x: 0, y: -310, z: -268, mera: "564 × 100", eks: { y: -140, z: -40 }, plan: { x: 1534, y: 789 } },
  { id: "front", naziv: "front", w: 597, h: 717, t: 18, mat: "hrast", x: 0, y: -1.5, z: 271, mera: "717 × 597", eks: { z: 300 }, plan: { x: 1792.5, y: 398.5 } },
  { id: "ledja", naziv: "ledja", w: 597, h: 717, t: 3, mat: "lesonit", x: 0, y: -1.5, z: -278.5, mera: "717 × 597", eks: { z: -240 }, kota: { x: 30, y: -90 }, plan: { x: 2419.5, y: 398.5 } },
];
export const PLOCA = { w: 2800, h: 1200 }; // deo table 2800 mm širine koji ove daske zauzmu (visina za prikaz), mm

function lice(klasa, w, h, transform, left = 0, top = 0) {
  const d = document.createElement("div");
  d.className = "lice " + klasa;
  d.style.cssText = `width:${w}px;height:${h}px;left:${left}px;top:${top}px;transform:${transform}`;
  return d;
}

/** Napravi DOM jedne daske: 6 lica oko centra, plus kota (lebdeća) i kota-plan (ravna). */
export function napraviDasku(d, nazivi, kamera) {
  const w = d.w * MM, h = d.h * MM, t = d.t * MM;
  const el = document.createElement("div");
  el.className = "daska";
  el.dataset.id = d.id;
  el.style.cssText = `width:${w}px;height:${h}px;left:${-w / 2}px;top:${-h / 2}px`;
  const m = d.mat;
  el.append(
    lice(`lice-${m}`, w, h, `translateZ(${t / 2}px)`),
    lice(`lice-${m}`, w, h, `rotateY(180deg) translateZ(${t / 2}px)`),
    lice(`lice-${m}-ivica`, w, t, `rotateX(90deg) translateZ(${h / 2}px)`, 0, (h - t) / 2),
    lice(`lice-${m}-ivica`, w, t, `rotateX(-90deg) translateZ(${h / 2}px)`, 0, (h - t) / 2),
    lice(`lice-${m}-ivica`, t, h, `rotateY(-90deg) translateZ(${w / 2}px)`, (w - t) / 2, 0),
    lice(`lice-${m}-ivica`, t, h, `rotateY(90deg) translateZ(${w / 2}px)`, (w - t) / 2, 0),
  );
  const naziv = nazivi[d.naziv] || d.naziv;
  const kota = document.createElement("div");
  kota.className = "kota";
  kota.innerHTML = `${d.mera}<small>${naziv}</small>`;
  // „bilbord": poništi rotaciju daske i kamere da natpis uvek gleda u ekran
  const inv = d.rotY ? `rotateY(${-d.rotY}deg)` : d.rotX ? `rotateX(${-d.rotX}deg)` : "";
  kota.style.transform = `${inv} rotateY(${-kamera.cy}deg) rotateX(${-kamera.cx}deg) translateZ(260px) translate(${d.kota?.x || 0}px, ${d.kota?.y || 0}px) translate(-50%, -50%)`;
  const plan = document.createElement("div");
  plan.className = "kota-plan";
  plan.innerHTML = `${d.mera}<small>${naziv}</small>`;
  plan.style.transform = `translateZ(${t / 2 + 2}px) translate(-50%, -50%) rotate(${-(d.plan.rot || 0)}deg)`;
  el.append(kota, plan);
  return el;
}

/** Pročitaj nazive dasaka iz skrivene liste (prevedeni u HTML-u). */
export function naziviDasaka() {
  const n = {};
  document.querySelectorAll("#nazivi-dasaka li").forEach((li) => { n[li.dataset.daska] = li.textContent.trim(); });
  return n;
}
