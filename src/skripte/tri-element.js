// tri-element.js — jedan element u 3D iz rezultata proracun.js (iste daske kao spisak za sečenje), položaji iz korpus-model.js.
// Kao u programu: svaka daska je kutija 18 mm, front u dezenu, ručka štangla / dugme, nogice, šipka, sanduci fioka; vrata se okreću
// oko ivice sa šarkama (110°), fioka izlazi za dužinu klizača. Mere u metrima, pod je y = 0, front gleda ka +z.
import * as THREE from "../vendor/three.module.min.js";
import { MODELI, P, razmakRucke } from "./proracun.js";
import { komadiElementa, sipkaOdDna } from "./korpus-model.js";
import { materijalDezena, materijal, uvUMilimetrima, ivice } from "./tri-materijali.js";
import { OKOV, OTVARANJE, POLOZAJ } from "./tri-podesavanja.js";

const M = 0.001;
const KORPUS_DELOVI = new Set(["bok", "dno", "krov", "precka", "polica", "fiksna_polica"]);

/** Kutija sa materijalima po licu (+x, −x, +y, −y, +z, −z), UV u mm i tankim ivicama. velicina u mm. */
function kutija(velicina, lica, osaGoda, sIvicama = true) {
  const v = velicina.map((x) => x * M), geo = new THREE.BoxGeometry(...v);
  uvUMilimetrima(geo, v, lica[0].userData.plocica || 500, osaGoda);
  const mesh = new THREE.Mesh(geo, lica); mesh.castShadow = mesh.receiveShadow = true;
  if (sIvicama) mesh.add(ivice(geo, lica[4].userData.taman));
  return mesh;
}

/** Lica daske: velika lica u dezenu, prednja ivica kantovana (isti dezen), ostale ivice sirove (#cbb48c) — boardEdges.ts. */
function licaDaske(k, mat) {
  const sir = materijal("sirovo"), osaDebljine = k.rotY ? 0 : k.rotX ? 1 : 2, l = [sir, sir, sir, sir, sir, sir];
  l[osaDebljine * 2] = l[osaDebljine * 2 + 1] = mat;
  l[4] = mat;                                            // prednja ivica (ka gledaocu) je kantovana
  if (k.deo === "precka") l[5] = mat;                    // položena prečka: kant na obe duže ivice
  return l;
}

/** Ručka za front f (mm, x od leve ivice elementa, y od poda), vraća grupu sa središtem u ravni lica fronta. */
function rucka(vrsta, f, kraj, podY, vodoravna) {
  const g = new THREE.Group(), mat = materijal("rucka"), r = OKOV.rucka, dno = podY + f.y, vrh = dno + f.h;
  let x, y, razmak;
  if (vodoravna) { razmak = razmakRucke(f.w, f.w); x = f.x + f.w / 2; y = f.h < 100 ? dno + f.h / 2 : vrh - r.odIvice; }
  else {
    razmak = razmakRucke(f.w, f.h); x = kraj === "desno" ? f.x + f.w - r.odIvice : f.x + r.odIvice;
    const pola = razmak / 2, min = dno + r.odIvice + pola, max = vrh - r.odIvice - pola;
    y = dno >= r.viseciOd ? dno + r.odIvice + pola : vrh <= r.donjiDo ? vrh - r.odIvice - pola : Math.min(max, Math.max(min, r.visokaNa));
    if (vrsta === "dugme") y = dno >= r.viseciOd ? dno + r.odIvice : vrh <= r.donjiDo ? vrh - r.odIvice : Math.min(max, Math.max(min, r.visokaNa));
  }
  if (vrsta === "dugme") {
    const glava = new THREE.Mesh(new THREE.CylinderGeometry(15 * M, 15 * M, 8 * M, 40), mat), stub = new THREE.Mesh(new THREE.CylinderGeometry(5 * M, 5 * M, 18 * M, 16), mat);
    for (const [d, z] of [[glava, 22], [stub, 9]]) { d.rotation.x = Math.PI / 2; d.position.z = z * M; d.castShadow = true; g.add(d); }
  } else {
    const duz = razmak + 2 * r.prepust, bar = new THREE.Mesh(new THREE.BoxGeometry(...(vodoravna ? [duz, r.presek, r.presek] : [r.presek, duz, r.presek]).map((v) => v * M)), mat);
    bar.position.z = r.odLica * M; bar.castShadow = true; g.add(bar);
    for (const s of [-1, 1]) {
      const stub = new THREE.Mesh(new THREE.BoxGeometry(r.stub * M, r.stub * M, (r.odLica - r.presek / 2) * M), mat);
      stub.position.set(vodoravna ? (s * razmak) / 2 * M : 0, vodoravna ? 0 : (s * razmak) / 2 * M, ((r.odLica - r.presek / 2) / 2) * M); g.add(stub);
    }
  }
  g.position.set(x * M, y * M, 0);
  return g;
}

/** Nogica kao u programu: telo iz profila (LatheGeometry) + pločica; visina zone = cokla (profil je za 100 mm). */
function nogica(visina) {
  const n = OKOV.nogica, s = visina / 100, g = new THREE.Group(), mat = materijal("nogica");
  const telo = new THREE.Mesh(new THREE.LatheGeometry(n.profil.map(([r, y]) => new THREE.Vector2(r * M, y * s * M)), 18), mat);
  const ploca = new THREE.Mesh(new THREE.BoxGeometry(...n.ploca.map((v) => v * M)), mat);
  ploca.position.y = (96 * s + 2) * M; telo.castShadow = ploca.castShadow = true; g.add(telo, ploca);
  return g;
}

/** Ceo element. opcije: { korpus, front, rucka } (id dezena, "stangla" | "dugme" | "bez"). Vraća { grupa, kutija (m), otvori(t) }. */
export function napraviElement(rez, opcije) {
  const m = MODELI[rez.id], { sirina: W, visina: H, dubina: D } = rez.ulaz;
  const podnozje = m.cokla > 0 ? m.cokla : m.dnoPreko ? 0 : POLOZAJ.viseciCrtez; // nogice / na podu / visi na zidu
  const podZaPravilo = m.dnoPreko ? podnozje : POLOZAJ.viseciPod;               // pravilo ručke računa visinu od poda u sobi
  const grupa = new THREE.Group(), korpus = materijalDezena(opcije.korpus), front = materijalDezena(opcije.front);
  const fr = rez.crtez.frontovi, nFioka = fr.filter((f) => f.vrsta === "fioka").length;
  const vrata = [], fioke = Array.from({ length: nFioka }, () => new THREE.Group());
  fioke.forEach((g) => grupa.add(g));
  const polozi = (mesh, k) => mesh.position.set(k.x * M, (H / 2 - k.y + podnozje) * M, k.z * M);
  for (const k of komadiElementa(rez)) {
    const vel = k.rotY ? [k.t, k.h, k.w] : k.rotX ? [k.w, k.t, k.h] : [k.w, k.h, k.t], osaGoda = k.rotX ? 0 : 1;
    if (k.deo === "front_vrata") {
      const f = fr[k.i], sarkeLevo = f.rucka === "desno", pivot = new THREE.Group();
      const mesh = kutija(vel, [front, front, front, front, front, front], 1);
      pivot.position.set(((sarkeLevo ? f.x : f.x + f.w) - W / 2) * M, 0, k.z * M);
      mesh.position.set((sarkeLevo ? f.w / 2 : -f.w / 2) * M, (H / 2 - k.y + podnozje) * M, 0);
      pivot.add(mesh);
      if (opcije.rucka !== "bez") { const r = rucka(opcije.rucka, f, f.rucka, podZaPravilo, false); r.position.x -= (sarkeLevo ? f.x : f.x + f.w) * M; r.position.y += (podnozje - podZaPravilo) * M; r.position.z = (P.t / 2) * M; pivot.add(r); }
      vrata.push({ pivot, znak: sarkeLevo ? -1 : 1 }); grupa.add(pivot); continue;
    }
    let mesh;
    if (k.deo === "front_fioka") {
      mesh = kutija(vel, [front, front, front, front, front, front], 1);
      const j = nFioka - 1 - k.i, f = fr[k.i];
      if (opcije.rucka !== "bez") { const r = rucka(opcije.rucka, f, null, podZaPravilo, true); r.position.x -= (W / 2) * M; r.position.y += (podnozje - podZaPravilo) * M; r.position.z = (k.z + P.t / 2) * M; fioke[j].add(r); }
      polozi(mesh, k); fioke[j].add(mesh); continue;
    }
    if (k.deo === "ledja" || k.deo === "dno_fioke") mesh = kutija(vel, Array(6).fill(materijal("ledja")), 1, false);
    else if (KORPUS_DELOVI.has(k.deo)) mesh = kutija(vel, licaDaske(k, korpus), osaGoda);
    else mesh = kutija(vel, Array(6).fill(materijal("sanduk")), 1);
    polozi(mesh, k);
    if (k.deo === "ledja") mesh.position.z += 0.6 * M;  // leđa 0,6 mm napred, kao u programu (protiv treperenja)
    (k.fioka != null ? fioke[k.fioka] : grupa).add(mesh);
  }
  if (m.sipka) {
    const s = OKOV.sipka, sipka = new THREE.Mesh(new THREE.BoxGeometry((W - 2 * P.t - s.kraca) * M, s.presek * M, s.presek * M), materijal("sipka"));
    sipka.position.set(0, (podnozje + sipkaOdDna(H)) * M, (-(P.ledja + (m.front ? P.t : 0)) / 2) * M); sipka.castShadow = true; grupa.add(sipka);
  }
  if (m.cokla > 0) {
    const n = OKOV.nogica, dk = rez.dubinaDaske, zLice = D / 2 - (m.front ? P.t : 0);
    for (const sx of [-1, 1]) for (const z of [zLice - n.odLica, zLice - dk + n.odLedja]) { const l = nogica(m.cokla); l.position.set(sx * (W / 2 - n.odBoka) * M, 0, z * M); grupa.add(l); }
  }
  const nl = rez.sanduci?.klizac || 0;
  const otvori = (t) => {
    const e = t * t * (3 - 2 * t);                     // smoothstep, kao openClock.ts
    for (const v of vrata) v.pivot.rotation.y = v.znak * THREE.MathUtils.degToRad(OTVARANJE.ugao) * e;
    for (const g of fioke) g.position.z = nl * M * e;
  };
  return { grupa, otvori, imaFrontove: fr.length > 0, kutija: { w: W * M, h: H * M, d: D * M, dno: podnozje * M } };
}
