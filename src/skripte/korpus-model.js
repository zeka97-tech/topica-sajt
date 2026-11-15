// korpus-model.js — gde svaka daska stoji u sklopljenom elementu (za animaciju „korpus → krojni plan").
// Ulaz je rezultat proracun.js (iste mere kao spisak); izlaz su komadi sa položajem u mm:
// početak u sredini elementa, x udesno, y NADOLE, z ka gledaocu. Položaji polica su ilustracija (mere nisu).
import { P, MODELI } from "./proracun.js";

/** Pomeranje pri razmicanju, u pikselima scene (isto za mali i veliki element). */
const RAZMAK = { bok: 120, dno: 100, vrh: -78, ledja: -120, polica: 60, front: 165, sanduk: 85 };
/** Pomak kote (px) da je ne zakloni daska ispred nje. */
const KOTA = { bok: [-40, -190], dno: [130, 20], polica: [120, 10], fiksna_polica: [120, -10], ledja: [30, -90], krov: [0, -20], bok_fioke: [150, 0], celo_fioke: [0, -40], dno_fioke: [150, 40] };

/** Osa garderobne šipke od dna ormara: max(V − 350, 0,6 · V); fiksna polica 60 iznad nje (jointShelves.ts:91-96). Police ormara su ispod šipke (ilustracija). */
export const sipkaOdDna = (H) => Math.max(H - 350, 0.6 * H);

/** Svi komadi elementa: { deo, red, i, w, h, t (mm, u svojoj ravni), rotX, rotY, x, y, z, eks: {x, y, z} px, mat, uz: mera duž w } */
export function komadiElementa(rez) {
  const m = MODELI[rez.id], { sirina: W, visina: H, dubina: D } = rez.ulaz, t = P.t;
  const f = m.front ? t : 0, db = rez.dubinaDaske, zc = (P.ledja - f) / 2, zFront = D / 2 - t / 2;
  const out = [];
  const dodaj = (red, i, d, o) => out.push({ deo: d.deo, red, i, mat: d.materijal, t: d.debljina, rotX: 0, rotY: 0, x: 0, y: 0, z: zc, eks: {}, ...o });
  rez.daske.forEach((d, red) => {
    for (let i = 0; i < d.komada; i++) {
      const fr = rez.crtez.frontovi;
      if (d.deo === "bok") dodaj(red, i, d, { w: d.sirina, h: d.duzina, rotY: 90, x: (i ? 1 : -1) * (W / 2 - t / 2), y: m.dnoPreko ? -t / 2 : 0, eks: { x: (i ? 1 : -1) * RAZMAK.bok } });
      else if (d.deo === "dno") dodaj(red, i, d, { w: d.duzina, h: d.sirina, rotX: 90, y: H / 2 - t / 2, eks: { y: RAZMAK.dno } });
      else if (d.deo === "krov") dodaj(red, i, d, { w: d.duzina, h: d.sirina, rotX: 90, y: -H / 2 + t / 2, eks: { y: RAZMAK.vrh } });
      else if (d.deo === "precka") dodaj(red, i, d, { w: d.duzina, h: d.sirina, rotX: 90, y: -H / 2 + t / 2, z: zc + (i ? -1 : 1) * (db / 2 - d.sirina / 2), eks: { y: RAZMAK.vrh, z: i ? -30 : 0 } });
      else if (d.deo === "ledja") dodaj(red, i, d, { w: W - P.umanjenjeLedja, h: H - P.umanjenjeLedja, z: -D / 2 + P.ledja / 2, eks: { z: RAZMAK.ledja } });
      else if (d.deo === "polica") dodaj(red, i, d, { w: d.duzina, h: d.sirina, rotX: 90, y: H / 2 - ((i + 1) * (m.sipka ? sipkaOdDna(H) - 250 : H)) / (d.komada + 1), z: zc - P.uvucenostPolice / 2, eks: { z: RAZMAK.polica } });
      else if (d.deo === "fiksna_polica") dodaj(red, i, d, { w: d.duzina, h: d.sirina, rotX: 90, y: H / 2 - (sipkaOdDna(H) + 60), z: zc - P.uvucenostPolice / 2, eks: { z: RAZMAK.polica } });
      else if (d.deo === "front_vrata") dodaj(red, i, d, { w: d.sirina, h: d.duzina, x: fr[i].x + fr[i].w / 2 - W / 2, z: zFront, eks: { z: RAZMAK.front, x: d.komada > 1 ? (i ? 14 : -14) : 0 } });
      else if (d.deo === "front_fioka") dodaj(red, i, d, { w: d.sirina, h: d.duzina, y: H / 2 - (fr[i].y + fr[i].h / 2), z: zFront, eks: { z: RAZMAK.front } });
    }
  });
  if (rez.sanduci) sanduci(rez, out, H, D);
  return out;
}

/** Sanduci fioka: dva boka, prednja i zadnja strana, dno — odmah iza fronta, 20 iznad dna fronta. */
function sanduci(rez, out, H, D) {
  const { klizac: nl, sirina: s, visine } = rez.sanduci, fr = rez.crtez.frontovi, n = fr.length, t = P.bokFioke;
  const zPred = D / 2 - P.t, brojac = {};
  const red = (deo, v) => rez.daske.findIndex((d) => d.deo === deo && (v == null || d.sirina === v));
  const dodaj = (deo, v, o) => { const r = red(deo, v), i = (brojac[r] = (brojac[r] ?? -1) + 1); out.push({ deo, red: r, i, mat: rez.daske[r].materijal, t: rez.daske[r].debljina, rotX: 0, rotY: 0, x: 0, eks: { z: RAZMAK.sanduk }, fioka: tekuca, ...o }); };
  let tekuca = 0;                                  // kojoj fioci komad pripada (0 = gornja), za izvlačenje u 3D prikazu
  visine.forEach((v, j) => {                       // j = 0 je gornja fioka; frontovi su odozdo nagore
    tekuca = j;
    const dnoFronta = fr[n - 1 - j].y, y = H / 2 - (dnoFronta + P.podizanjeSanduka + v / 2);
    for (const strana of [-1, 1]) dodaj("bok_fioke", v, { w: nl, h: v, rotY: 90, x: strana * (s / 2 - t / 2), y, z: zPred - nl / 2 });
    for (const kraj of [0, 1]) dodaj("celo_fioke", v, { w: s - 2 * t, h: v, y, z: zPred - (kraj ? nl - t / 2 : t / 2) });
    dodaj("dno_fioke", null, { w: s - P.dnoFiokeManje, h: nl - P.dnoFiokeManje, rotX: 90, y: y + v / 2 + P.ledja / 2, z: zPred - nl / 2 });
  });
}

/** Razmera scene: koliko piksela je jedan milimetar, da i komoda i ormar stanu u isti okvir. */
export const razmera = (u) => Math.min(0.5, 360 / u.visina, 500 / (u.sirina + u.dubina * 0.5));

function lice(klasa, w, h, transform, left = 0, top = 0) {
  const d = document.createElement("div");
  d.className = "lice " + klasa;
  d.style.cssText = `width:${w}px;height:${h}px;left:${left}px;top:${top}px;transform:${transform}`;
  return d;
}

/** DOM jednog komada: šest lica oko centra + kota (lebdi, gleda u ekran) na prvom komadu svakog reda spiska. */
export function napraviKomad(k, MM, mera, naziv, kamera, front) {
  const w = k.w * MM, h = k.h * MM, t = Math.max(1.5, k.t * MM);
  const el = document.createElement("div");
  el.className = "daska";
  el.style.cssText = `width:${w}px;height:${h}px;left:${-w / 2}px;top:${-h / 2}px`;
  const m = k.mat === "ledja" ? "lesonit" : k.mat === "front" ? `front lice-front-${front}` : "bela", iv = k.mat === "ledja" ? "lesonit-ivica" : k.mat === "front" ? `front-ivica lice-front-${front}` : "bela-ivica";
  el.append(lice(`lice-${m}`, w, h, `translateZ(${t / 2}px)`), lice(`lice-${m}`, w, h, `rotateY(180deg) translateZ(${t / 2}px)`),
    lice(`lice-${iv}`, w, t, `rotateX(90deg) translateZ(${h / 2}px)`, 0, (h - t) / 2), lice(`lice-${iv}`, w, t, `rotateX(-90deg) translateZ(${h / 2}px)`, 0, (h - t) / 2),
    lice(`lice-${iv}`, t, h, `rotateY(-90deg) translateZ(${w / 2}px)`, (w - t) / 2, 0), lice(`lice-${iv}`, t, h, `rotateY(90deg) translateZ(${w / 2}px)`, (w - t) / 2, 0));
  if (k.i === 0) {
    const kota = document.createElement("div");
    kota.className = "kota";
    kota.innerHTML = `${mera}<small>${naziv}</small>`;
    const inv = k.rotY ? `rotateY(${-k.rotY}deg)` : k.rotX ? `rotateX(${-k.rotX}deg)` : "";
    kota.style.transform = `${inv} rotateY(${-kamera.cy}deg) rotateX(${-kamera.cx}deg) translateZ(260px) translate(${KOTA[k.deo]?.[0] || 0}px, ${KOTA[k.deo]?.[1] || 0}px) translate(-50%, -50%)`;
    el.append(kota);
  }
  return el;
}
