// tri-podesavanja.js — JEDINO mesto za brojeve 3D prikaza. Vrednosti su prepisane iz programa TOPICA 0.1.66
// (docs/MODELI.md, odeljak „3D prikaz": fajl i red u programu); boje dezena su u tokeni.css (--c-dezen-…).

/** Svetlo: tri svetla kao u programu (topao glavni sa senkom, hladniji bočni, slab prednji — RoomLights.tsx:36-60),
 *  okolina RoomEnvironment (environment.ts:17-28), Neutral tone mapping (RenderSetup.tsx:28-29). Topla scena (pod, zid) po uzoru vlasnika. */
export const SVETLO = {
  nebo: "#ffffff", tlo: "#b9bec9", rasuto: 0.35,
  glavnoBoja: "#fff2e0", glavno: 1.9, senkaMapa: 2048, senkaRadijus: 4, senkaBias: -0.0003, senkaNormalBias: 0.02,
  bocnoBoja: "#dbe4ff", bocno: 0.45, prednjeBoja: "#ffffff", prednje: 0.3,
  toploBoja: "#ffb45e", toplo: 1.1,                    // zlatni odsjaj iza elementa, kao sjaj u uzoru
  okolina: 0.45, ekspozicija: 1,
  pod: "#3a2c22", podHrapavost: 0.85, zid: "#2a2320", zidHrapavost: 0.95,
};

/** Kamera: fov stola (42), pogled kao dupli klik u sobi: 35° u stranu, 20° odozgo (focusFrame.ts:20-32). */
export const KAMERA = { fov: 42, ugao: 30, nagib: 16, ugaoMax: 80, nagibMin: 2, nagibMax: 60, vazduh: 1.38, zumMin: 0.6, zumMax: 1.8, korakOkreni: 45, prigusenje: 0.18 };

/** Daska: MeshStandardMaterial; ivične linije kao u programu (PanelBox.tsx:147-156). */
export const DASKA = { linija: "#3c4354", linijaNaTamnom: "#aab3c3", linijaProvidnost: 0.34, tamnoIspod: 0.3, sirovaIvica: "#cbb48c", sirovaHrapavost: 0.95, anizotropija: 16 };

/** Dezeni koje sajt nudi (id, hrapavost i pločica iz src/domain/catalog/decors.ts:84-119). slika = datoteka u slike/dezeni/. */
export const DEZENI = {
  "mat-white": { hrapavost: 0.55, plocica: 500 },
  "mat-cashmere": { hrapavost: 0.58, plocica: 500 },
  "mat-anthracite": { hrapavost: 0.6, plocica: 500 },
  "mat-oak": { hrapavost: 0.6, plocica: 900, slika: "mat-oak.webp" },
  "mat-sonoma": { hrapavost: 0.62, plocica: 900, slika: "mat-sonoma.webp" },
  "mat-walnut": { hrapavost: 0.58, plocica: 900, slika: "mat-walnut.webp" },
};
export const KORPUS_DEZEN = "mat-white", FRONT_DEZEN = "mat-oak";
/** Ostale ploče: leđa (lesonit), sanduk fioke — materials.ts:138-152, frontBoxes.ts:140-161. */
export const PLOCE = { ledja: { boja: "#c9b896", hrapavost: 0.8 }, sanduk: { boja: "#e3ddd2", hrapavost: 0.8, metal: 0.02 } };

/** Okov koji se crta: ručka štangla (handles.ts:51-57, frontBoxes.ts:258), nogica (FootLeg.tsx, footProfile.ts), klizač, šipka. */
export const OKOV = {
  rucka: { boja: "#2a2a2a", hrapavost: 0.3, metal: 0.8, presek: 12, stub: 10, odLica: 30, prepust: 20, odIvice: 50, razmaci: [96, 128, 160, 192, 224, 256, 320], visokaNa: 1050, donjiDo: 1400, viseciOd: 1000 },
  nogica: { boja: "#35383e", hrapavost: 0.72, metal: 0.04, odBoka: 60, odLedja: 70, odLica: 74, ploca: [58, 4, 44],
    profil: [[0, 0], [22.5, 0], [22.5, 11], [19.5, 14], [12, 16], [12, 37], [17.5, 37], [17.5, 40], [15.5, 40], [15.5, 76], [19.5, 76], [22, 96], [0, 96]] },
  klizac: { boja: "#9aa1ab", hrapavost: 0.35, metal: 0.8, korpus: [7, 45], fioka: [5, 36], iznadDna: 22.5 },
  sipka: { boja: "#8f939b", hrapavost: 0.3, metal: 0.85, presek: 26, kraca: 10, policaIznad: 60 },
};

/** Otvaranje: vrata 110° oko ivice sa šarkama, fioka napolje po dužini klizača, 0,6 s (frontPose.ts:41-74, openClock.ts:22). */
export const OTVARANJE = { ugao: 110, trajanje: 600 };

/** Gde stoji element: viseći visi 1400 iznad poda (settings.ts:116-117); na sajtu se crta podignut samo toliko da se vidi senka. */
export const POLOZAJ = { viseciPod: 1400, viseciCrtez: 420, odZida: 2 };

/** Kote: 40 mm od elementa (dims.ts:99-103); pločica u boji sajta. */
export const KOTE = { odmak: 0.07, debljina: 0.0018, visinaPlocice: 0.034 };
