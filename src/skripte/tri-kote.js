// tri-kote.js — kote u 3D: tri zlatne linije (širina, visina, dubina) sa pločicom na kojoj piše mera; uvek vidljive, iste veličine na ekranu.
import * as THREE from "../vendor/three.module.min.js";
import { KOTE } from "./tri-podesavanja.js";

/** Pločica sa brojem kao tekstura (boje dolaze iz CSS tokena, da 3D i sajt imaju istu zlatnu). */
function plocica(tekst, boje) {
  const c = document.createElement("canvas"), v = 64, ctx = c.getContext("2d");
  ctx.font = `800 ${v * 0.56}px ${boje.font}`;
  const s = Math.ceil(ctx.measureText(tekst).width + v * 0.9);
  c.width = s; c.height = v;
  ctx.fillStyle = boje.zlatna; ctx.beginPath(); ctx.roundRect(0, 0, s, v, v / 2); ctx.fill();
  ctx.font = `800 ${v * 0.56}px ${boje.font}`; ctx.fillStyle = boje.crna; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillText(tekst, s / 2, v / 2 + v * 0.03);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const sprajt = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false, sizeAttenuation: false }));
  sprajt.scale.set((KOTE.visinaPlocice * s) / v, KOTE.visinaPlocice, 1); sprajt.renderOrder = 12;
  return sprajt;
}

/** Linija od a do b (tanak valjak) sa kuglicama na krajevima. */
function linija(a, b, r, mat) {
  const g = new THREE.Group(), d = new THREE.Vector3().subVectors(b, a), duz = d.length();
  const valjak = new THREE.Mesh(new THREE.CylinderGeometry(r, r, duz, 8), mat);
  valjak.position.copy(a).addScaledVector(d, 0.5);
  valjak.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize());
  g.add(valjak);
  for (const p of [a, b]) { const k = new THREE.Mesh(new THREE.SphereGeometry(r * 2.6, 12, 8), mat); k.position.copy(p); g.add(k); }
  g.traverse((o) => { o.renderOrder = 11; });
  return g;
}

/** kutija = { w, h, d, dno } u metrima; mere = { sirina, visina, dubina } u mm (ono što piše na pločicama). */
export function napraviKote(kutija, mere) {
  const cs = getComputedStyle(document.documentElement), boje = { zlatna: cs.getPropertyValue("--c-zlatna").trim(), crna: cs.getPropertyValue("--c-crna").trim(), font: cs.getPropertyValue("--font").trim() };
  const g = new THREE.Group(), { w, h, d, dno } = kutija, o = Math.max(w, h, d) * KOTE.odmak, r = Math.hypot(w, h, d) * KOTE.debljina;
  const mat = new THREE.MeshBasicMaterial({ color: boje.zlatna, depthTest: false });
  const v = (x, y, z) => new THREE.Vector3(x, y, z);
  const kota = (a, b, tekst) => { const p = plocica(tekst, boje); p.position.copy(a).add(b).multiplyScalar(0.5); g.add(linija(a, b, r, mat), p); };
  kota(v(-w / 2, dno, d / 2 + o), v(w / 2, dno, d / 2 + o), String(mere.sirina));
  kota(v(-w / 2 - o, dno, d / 2), v(-w / 2 - o, dno + h, d / 2), String(mere.visina));
  kota(v(w / 2 + o, dno, -d / 2), v(w / 2 + o, dno, d / 2), String(mere.dubina));
  return g;
}
