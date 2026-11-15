// tri-materijali.js — materijali ploča kao u programu: MeshStandardMaterial, dezen kao slika (drvo, ambientCG CC0) ili
// proceduralna „board" tekstura (uni dezeni), UV u milimetrima od ugla daske, god = V osa (decorUv.ts, decorTexture.ts).
import * as THREE from "../vendor/three.module.min.js";
import { DASKA, DEZENI, PLOCE, OKOV } from "./tri-podesavanja.js";

const css = (ime) => getComputedStyle(document.documentElement).getPropertyValue(ime).trim();
const kes = new Map();
let anizotropija = 1, osvezi = () => {};
export function podesiMaterijale(a, naUcitavanje) { anizotropija = a; osvezi = naUcitavanje; }

/** Proceduralna „board" tekstura programa (decorTexture.ts:108-134): sive tačke i tanke uspravne linije, množi se sa bojom. */
function teksturaPloce() {
  if (kes.has("board")) return kes.get("board");
  const v = 512, c = document.createElement("canvas"); c.width = c.height = v;
  const x = c.getContext("2d"); x.fillStyle = "#ffffff"; x.fillRect(0, 0, v, v);
  let s = 19911104; const r = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  for (let i = 0; i < 12000; i++) { x.fillStyle = r() < 0.5 ? `rgba(58,54,48,${0.05 + r() * 0.09})` : "rgba(255,255,255,0.6)"; x.fillRect(r() * v, r() * v, 1, 1); }
  for (let i = 0; i < 90; i++) { const px = r() * v, w = 0.6 + r() * 1; x.fillStyle = `rgba(80,76,68,${0.015 + r() * 0.025})`; for (const d of [0, -v, v]) x.fillRect(px + d, 0, w, v); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = anizotropija;
  kes.set("board", t); return t;
}

function teksturaSlike(ime) {
  const k = "slika:" + ime;
  if (kes.has(k)) return kes.get(k);
  const koren = document.body.dataset.koren || "";
  const t = new THREE.TextureLoader().load(`${koren}slike/dezeni/${ime}`, () => osvezi());
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = anizotropija;
  kes.set(k, t); return t;
}

/** Materijal lica daske za dezen (id iz programa). */
export function materijalDezena(id) {
  const k = "dezen:" + id;
  if (kes.has(k)) return kes.get(k);
  const d = DEZENI[id];
  const m = new THREE.MeshStandardMaterial({ color: d.slika ? "#ffffff" : css(`--c-dezen-${id}`), map: d.slika ? teksturaSlike(d.slika) : teksturaPloce(), roughness: d.hrapavost, metalness: 0 });
  m.userData.plocica = d.plocica; m.userData.taman = !d.slika && new THREE.Color(css(`--c-dezen-${id}`)).getHSL({}).l < DASKA.tamnoIspod;
  kes.set(k, m); return m;
}

/** Ostali materijali: sirova ivica, lesonit, sanduk fioke, okov. */
export function materijal(ime) {
  if (kes.has(ime)) return kes.get(ime);
  const o = { sirovo: { color: DASKA.sirovaIvica, roughness: DASKA.sirovaHrapavost }, ledja: { color: PLOCE.ledja.boja, roughness: PLOCE.ledja.hrapavost, map: teksturaPloce() },
    sanduk: { color: PLOCE.sanduk.boja, roughness: PLOCE.sanduk.hrapavost, metalness: PLOCE.sanduk.metal }, rucka: { color: OKOV.rucka.boja, roughness: OKOV.rucka.hrapavost, metalness: OKOV.rucka.metal },
    nogica: { color: OKOV.nogica.boja, roughness: OKOV.nogica.hrapavost, metalness: OKOV.nogica.metal }, sipka: { color: OKOV.sipka.boja, roughness: OKOV.sipka.hrapavost, metalness: OKOV.sipka.metal } }[ime];
  const m = new THREE.MeshStandardMaterial(o); m.userData.plocica = 500;
  kes.set(ime, m); return m;
}

/** UV u pločicama dezena: (položaj − ugao daske) × 1000 / pločica; god duž V; osa goda 0 = x, 1 = y (decorUv.ts:33-71). */
export function uvUMilimetrima(geo, velicina, plocica, osaGoda) {
  const p = geo.attributes.position, n = geo.attributes.normal, uv = geo.attributes.uv, k = 1000 / plocica;
  const lo = velicina.map((v) => -v / 2), hi = velicina.map((v) => v / 2);
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i), nx = n.getX(i), ny = n.getY(i), nz = n.getZ(i);
    let u, v, osaV, osaN;
    if (Math.abs(nx) > 0.5) { u = nx > 0 ? hi[2] - z : z - lo[2]; v = y - lo[1]; osaV = 1; osaN = 0; }
    else if (Math.abs(ny) > 0.5) { u = x - lo[0]; v = ny > 0 ? hi[2] - z : z - lo[2]; osaV = 2; osaN = 1; }
    else { u = nz > 0 ? x - lo[0] : hi[0] - x; v = y - lo[1]; osaV = 1; osaN = 2; }
    if (osaGoda !== osaN && osaGoda !== osaV) [u, v] = [v, u]; // god leži u ravni lica, a nije V osa → zameni u i v
    uv.setXY(i, u * k, v * k);
  }
  uv.needsUpdate = true;
}

/** Tanke ivice daske (PanelBox.tsx:147-156): tamne na svetloj, svetle na tamnoj ploči. */
export function ivice(geo, taman) {
  const k = taman ? "ivica:svetla" : "ivica:tamna";
  if (!kes.has(k)) kes.set(k, new THREE.LineBasicMaterial({ color: taman ? DASKA.linijaNaTamnom : DASKA.linija, transparent: true, opacity: DASKA.linijaProvidnost, depthWrite: false }));
  return new THREE.LineSegments(new THREE.EdgesGeometry(geo), kes.get(k));
}
