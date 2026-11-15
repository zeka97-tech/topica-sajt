// tri-scena.js — three.js scena za JEDAN element, podešena kao program (svetla, okolina, senke, Neutral tone mapping),
// topla pozadina po uzoru (pod i zid). Kamera kruži oko elementa; crta se samo kad nešto treba da se promeni.
import * as THREE from "../vendor/three.module.min.js";
import { RoomEnvironment } from "../vendor/RoomEnvironment.js";
import { SVETLO, KAMERA, OTVARANJE, POLOZAJ } from "./tri-podesavanja.js";

const rad = THREE.MathUtils.degToRad;

export function napraviScenu(platno) {
  const crtac = new THREE.WebGLRenderer({ canvas: platno, antialias: true, alpha: true, preserveDrawingBuffer: true });
  crtac.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  crtac.shadowMap.enabled = true; crtac.shadowMap.type = THREE.PCFSoftShadowMap;
  crtac.toneMapping = THREE.NeutralToneMapping; crtac.toneMappingExposure = SVETLO.ekspozicija; crtac.outputColorSpace = THREE.SRGBColorSpace;
  const scena = new THREE.Scene();
  scena.environment = new THREE.PMREMGenerator(crtac).fromScene(new RoomEnvironment(), 0.04).texture;
  scena.environmentIntensity = SVETLO.okolina;
  scena.add(new THREE.HemisphereLight(SVETLO.nebo, SVETLO.tlo, SVETLO.rasuto));
  const glavno = new THREE.DirectionalLight(SVETLO.glavnoBoja, SVETLO.glavno);
  glavno.castShadow = true; glavno.shadow.mapSize.set(SVETLO.senkaMapa, SVETLO.senkaMapa); glavno.shadow.radius = SVETLO.senkaRadijus;
  glavno.shadow.bias = SVETLO.senkaBias; glavno.shadow.normalBias = SVETLO.senkaNormalBias;
  const bocno = new THREE.DirectionalLight(SVETLO.bocnoBoja, SVETLO.bocno), prednje = new THREE.DirectionalLight(SVETLO.prednjeBoja, SVETLO.prednje);
  const toplo = new THREE.PointLight(SVETLO.toploBoja, SVETLO.toplo, 0, 1.6);
  scena.add(glavno, glavno.target, bocno, prednje, toplo);
  const pod = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), new THREE.MeshStandardMaterial({ color: SVETLO.pod, roughness: SVETLO.podHrapavost }));
  pod.rotation.x = -Math.PI / 2; pod.receiveShadow = true;
  const zid = new THREE.Mesh(new THREE.PlaneGeometry(12, 6), new THREE.MeshStandardMaterial({ color: SVETLO.zid, roughness: SVETLO.zidHrapavost }));
  zid.position.y = 3; zid.receiveShadow = true;
  scena.add(pod, zid);
  const kamera = new THREE.PerspectiveCamera(KAMERA.fov, 1, 0.02, 40);
  const pogled = { ugao: KAMERA.ugao, nagib: KAMERA.nagib, zum: 1, cilj: { ugao: KAMERA.ugao, nagib: KAMERA.nagib, zum: 1 } };
  let element = null, kote = null, k = { w: 1, h: 1, d: 1, dno: 0 }, otvorenost = 0, ciljOtvorenost = 0, poslednje = 0, zakazano = 0;

  function postavi(el, grupaKota) {
    for (const g of [element?.grupa, kote]) if (g) { scena.remove(g); g.traverse((o) => o.geometry?.dispose()); }
    element = el; kote = grupaKota; k = el.kutija;
    scena.add(el.grupa); if (kote) scena.add(kote);
    el.otvori(otvorenost);
    zid.position.z = -k.d / 2 - POLOZAJ.odZida * 0.001;
    const r = Math.hypot(k.w, k.h + k.dno, k.d), c = (k.h + k.dno) / 2;
    glavno.position.set(r * 1.2, c + r * 2.2, r * 1.6); glavno.target.position.set(0, c, 0);
    bocno.position.set(-r * 1.4, c + r, r * 1.2); prednje.position.set(0, c, r * 2.5); toplo.position.set(k.w * 0.9, k.h + k.dno + r * 0.3, -k.d / 2 + 0.05);
    const s = glavno.shadow.camera; s.left = s.bottom = -r * 1.3; s.right = s.top = r * 1.3; s.near = 0.1; s.far = r * 6; s.updateProjectionMatrix();
    zatrazi();
  }

  function namesti() {
    const w = platno.clientWidth, h = platno.clientHeight;
    if (!w || !h) return false;
    if (platno.width !== Math.round(w * crtac.getPixelRatio()) || platno.height !== Math.round(h * crtac.getPixelRatio())) crtac.setSize(w, h, false);
    const c = (k.h + k.dno) / 2, r = Math.hypot(k.w, k.h + k.dno, k.d) / 2 + (otvorenost ? k.w * 0.15 : 0), odnos = w / h;
    const vfov = rad(KAMERA.fov), hfov = 2 * Math.atan(Math.tan(vfov / 2) * odnos);
    const d = ((r * KAMERA.vazduh) / Math.sin(Math.min(vfov, hfov) / 2)) * pogled.zum, a = rad(pogled.ugao), n = rad(pogled.nagib);
    kamera.aspect = odnos; kamera.position.set(Math.sin(a) * Math.cos(n) * d, c + Math.sin(n) * d, Math.cos(a) * Math.cos(n) * d);
    kamera.lookAt(0, c * 0.92, 0); kamera.updateProjectionMatrix();
    return true;
  }

  function korak(vreme) {
    zakazano = 0;
    const dt = poslednje ? Math.min(64, vreme - poslednje) : 16; poslednje = vreme;
    let jos = false;
    if (otvorenost !== ciljOtvorenost) {
      const s = dt / OTVARANJE.trajanje;
      otvorenost = ciljOtvorenost > otvorenost ? Math.min(ciljOtvorenost, otvorenost + s) : Math.max(ciljOtvorenost, otvorenost - s);
      element?.otvori(otvorenost); jos = true;
    }
    for (const p of ["ugao", "nagib", "zum"]) {
      const razlika = pogled.cilj[p] - pogled[p];
      if (Math.abs(razlika) > (p === "zum" ? 0.001 : 0.05)) { pogled[p] += razlika * KAMERA.prigusenje; jos = true; } else pogled[p] = pogled.cilj[p];
    }
    if (element && namesti()) crtac.render(scena, kamera);
    if (jos) zatrazi(); else poslednje = 0;
  }
  function zatrazi() { if (!zakazano) zakazano = requestAnimationFrame(korak); }
  new ResizeObserver(zatrazi).observe(platno);

  return {
    postavi, zatrazi, pogled,
    okreni(du, dn) { pogled.cilj.ugao = THREE.MathUtils.clamp(pogled.cilj.ugao + du, -KAMERA.ugaoMax, KAMERA.ugaoMax); pogled.cilj.nagib = THREE.MathUtils.clamp(pogled.cilj.nagib + dn, KAMERA.nagibMin, KAMERA.nagibMax); zatrazi(); },
    zumiraj(f) { pogled.cilj.zum = THREE.MathUtils.clamp(pogled.cilj.zum * f, KAMERA.zumMin, KAMERA.zumMax); zatrazi(); },
    otvori(da) { ciljOtvorenost = da ? 1 : 0; zatrazi(); },
    otvoreno: () => ciljOtvorenost === 1,
    anizotropija: crtac.capabilities.getMaxAnisotropy(),
  };
}

/** Radi li WebGL u ovom pregledaču (bez pravljenja cele scene). */
export function imaWebGL() {
  try { const c = document.createElement("canvas"); return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl"))); } catch { return false; }
}
