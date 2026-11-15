// proracun.js — JEDINO mesto formula na sajtu: mere dasaka, kant i zbirovi za modele iz programa TOPICA.
// Formule su prepisane iz programa (izvori: docs/MODELI.md) i proveravaju se u `npm run check`
// prema docs/modeli-primeri.json (primeri izračunati samim kodom programa). Čist modul, bez DOM-a.

/** Podrazumevana podešavanja radionice u programu (mm). */
export const P = {
  t: 18, ledja: 3, umanjenjeLedja: 3, zazorPolice: 2, uvucenostPolice: 20,
  zazorIvica: 1.5, zazorIzmedju: 3, precka: 100, kantKorpus: 0.45, kantFront: 1,
  zazorKlizaca: 13, bokFioke: 18, sandukVisina: 85, sandukNajmanje: 50, dnoFiokeManje: 3, klizaci: [250, 300, 350, 400, 450, 500, 550],
  klizacIza: 10, podizanjeSanduka: 20, razmakSandukaOdPrecke: 10,
};

const mera = (pod, min, max, korak = 10) => ({ pod, min, max, korak });
const broj = (pod, min, max) => ({ pod, min, max, korak: 1 });

/** Modeli (id = tip šablona u programu). vrh: "precke" | "krov"; dnoPreko: dno ide preko bokova; cokla: visina nogica za crtež. */
export const MODELI = {
  "base-with-doors": { mere: { sirina: mera(600, 300, 1200), visina: mera(720, 600, 900), dubina: mera(560, 400, 650) }, opcije: { police: broj(1, 0, 4), vrata: broj(1, 1, 2) }, vrh: "precke", dnoPreko: true, front: "vrata", cokla: 100 },
  "base-with-drawers": { mere: { sirina: mera(600, 300, 1200), visina: mera(720, 600, 900), dubina: mera(560, 400, 650) }, opcije: { fioke: broj(3, 2, 5) }, vrh: "precke", dnoPreko: true, front: "fioke", cokla: 100 },
  "wall-with-doors": { mere: { sirina: mera(600, 300, 1200), visina: mera(720, 300, 1000), dubina: mera(320, 250, 400) }, opcije: { police: broj(1, 0, 4), vrata: broj(1, 1, 2) }, vrh: "krov", dnoPreko: false, front: "vrata", cokla: 0 },
  "open-shelf": { mere: { sirina: mera(600, 300, 1200), visina: mera(720, 300, 1000), dubina: mera(320, 200, 400) }, opcije: { police: broj(2, 0, 5) }, vrh: "krov", dnoPreko: false, front: null, cokla: 0 },
  "tall-unit": { mere: { sirina: mera(600, 300, 1000), visina: mera(2000, 1600, 2400), dubina: mera(560, 400, 650) }, opcije: { police: broj(4, 0, 8), vrata: broj(2, 1, 2) }, vrh: "krov", dnoPreko: true, front: "vrata", cokla: 100 },
  "wardrobe": { mere: { sirina: mera(1000, 400, 1000), visina: mera(1900, 1600, 2400), dubina: mera(550, 450, 650) }, opcije: { police: broj(2, 0, 6), vrata: broj(2, 1, 2) }, vrh: "krov", dnoPreko: true, front: "vrata", sipka: true, cokla: 0 },
  "dresser": { mere: { sirina: mera(800, 400, 1200), visina: mera(800, 450, 1200), dubina: mera(450, 350, 600) }, opcije: { fioke: broj(3, 2, 5) }, vrh: "krov", dnoPreko: true, front: "fioke", cokla: 60 },
};

/** Svedi ulaz na dozvoljene granice modela (ceo milimetar, ceo broj komada). */
export function ogranici(id, ulaz = {}) {
  const m = MODELI[id], out = {};
  for (const [k, g] of Object.entries({ ...m.mere, ...m.opcije })) {
    const v = Number.isFinite(+ulaz[k]) && ulaz[k] !== "" && ulaz[k] != null ? Math.round(+ulaz[k]) : g.pod;
    out[k] = Math.min(g.max, Math.max(g.min, v));
  }
  // fioka čiji sanduk ne bi stao (niži od 50 mm) u programu ostaje bez sanduka — na sajtu se broj fioka tada smanji
  if (out.fioke) while (out.fioke > 1 && sandukGornje(out.visina, out.fioke, frontFioke(out.visina, out.fioke)) < P.sandukNajmanje) out.fioke--;
  return out;
}

/** Jedan red spiska. a = prva mera (pravac goda), b = druga; kantA / kantB = broj kantovanih ivica dužine a / b. */
function daska(deo, komada, a, b, debljina, materijal, kantA = 0, kantB = 0, traka = 0) {
  const duze = a >= b ? kantA : kantB, krace = a >= b ? kantB : kantA;
  return { deo, komada, duzina: a, sirina: b, debljina, materijal, kant: { duze, krace, traka: kantA + kantB ? traka : 0 }, kantMm: komada * (kantA * a + kantB * b) };
}
const lesonit = (deo, komada, a, b) => daska(deo, komada, Math.max(a, b), Math.min(a, b), P.ledja, "ledja");

/** Najduži klizač koji staje u dubinu korpusne daske. */
export const klizacZa = (dubinaDaske) => [...P.klizaci].reverse().find((nl) => nl + P.klizacIza <= dubinaDaske) ?? P.klizaci[0];

/** Visina fronta fioke (svi isti, ceo mm naniže). */
const frontFioke = (H, n) => Math.floor((H - 2 * P.zazorIvica - (n - 1) * P.zazorIzmedju) / n);
/** Mesto za sanduk gornje fioke: frontovi se slažu odozdo, sanduk počinje 20 iznad dna svog fronta i staje 10 ispod prečke / krova. */
const sandukGornje = (H, n, vf) => Math.min(P.sandukVisina, Math.floor(H - P.t - P.razmakSandukaOdPrecke - (P.zazorIvica + (n - 1) * (vf + P.zazorIzmedju) + P.podizanjeSanduka) + 1e-6));
const sandukOstale = (vf) => Math.min(P.sandukVisina, Math.floor(vf - P.podizanjeSanduka));

/** Spisak dasaka za model i mere. Vraća { ulaz, daske, zbir, crtez }. */
export function izracunaj(id, ulazSirov) {
  const m = MODELI[id], u = ogranici(id, ulazSirov);
  const { sirina: W, visina: H, dubina: D } = u, t = P.t;
  const db = D - (m.front ? t : 0) - P.ledja;           // dubina korpusne daske (dubina elementa je ukupna, sa frontom)
  const unutra = W - 2 * t, kk = P.kantKorpus;
  const d = [];
  if (m.vrh === "precke") d.push(daska("precka", 2, unutra, P.precka, t, "korpus", 2, 0, kk));
  else d.push(daska("krov", 1, unutra, db, t, "korpus", 1, 0, kk));
  d.push(daska("bok", 2, m.dnoPreko ? H - t : H, db, t, "korpus", 1, 0, kk));
  d.push(daska("dno", 1, m.dnoPreko ? W : unutra, db, t, "korpus", 1, 0, kk));
  d.push(lesonit("ledja", 1, H - P.umanjenjeLedja, W - P.umanjenjeLedja));
  if (m.sipka) d.push(daska("fiksna_polica", 1, unutra, db - P.uvucenostPolice, t, "korpus", 1, 0, kk));
  if (u.police > 0) d.push(daska("polica", u.police, unutra - P.zazorPolice, db - P.uvucenostPolice, t, "korpus", 1, 0, kk));
  const frontovi = [];
  let sanduci = null;
  if (m.front === "vrata") {
    const n = u.vrata, sv = Math.floor((W - 2 * P.zazorIvica - (n - 1) * P.zazorIzmedju) / n), vv = H - 2 * P.zazorIvica;
    d.push(daska("front_vrata", n, vv, sv, t, "front", 2, 2, P.kantFront));
    for (let i = 0; i < n; i++) frontovi.push({ x: P.zazorIvica + i * (sv + P.zazorIzmedju), y: P.zazorIvica, w: sv, h: vv, vrsta: "vrata", rucka: n === 1 || i === 0 ? "desno" : "levo", ruckaDole: m.cokla === 0 && !m.sipka });
    if (n === 1) frontovi[0].rucka = "desno";
  }
  if (m.front === "fioke") {
    const n = u.fioke, vf = frontFioke(H, n), sf = W - 2 * P.zazorIvica;
    const nl = klizacZa(db), sanduk = unutra - 2 * P.zazorKlizaca;
    d.push(daska("front_fioka", n, vf, sf, t, "front", 2, 2, P.kantFront));
    const visine = new Map(); // visina sanduka → broj fioka (gornja može biti snižena)
    sanduci = { klizac: nl, sirina: sanduk, visine: [] }; // visine odozgo nadole
    for (let i = 0; i < n; i++) { const v = i === 0 ? sandukGornje(H, n, vf) : sandukOstale(vf); visine.set(v, (visine.get(v) || 0) + 1); sanduci.visine.push(v); }
    for (const [v, k] of visine) {
      d.push(daska("bok_fioke", 2 * k, nl, v, P.bokFioke, "korpus", 1, 0, kk));
      d.push(daska("celo_fioke", 2 * k, sanduk - 2 * P.bokFioke, v, P.bokFioke, "korpus", 1, 0, kk));
    }
    d.push(lesonit("dno_fioke", n, sanduk - P.dnoFiokeManje, nl - P.dnoFiokeManje));
    for (let i = 0; i < n; i++) frontovi.push({ x: P.zazorIvica, y: P.zazorIvica + i * (vf + P.zazorIzmedju), w: sf, h: vf, vrsta: "fioka" });
  }
  const police = m.front ? [] : Array.from({ length: u.police }, (_, i) => Math.round(((i + 1) * H) / (u.police + 1)));
  return { id, ulaz: u, daske: d, zbir: zbir(d), sanduci, dubinaDaske: db, crtez: { sirina: W, visina: H, dubina: D, cokla: m.cokla, frontovi, police } };
}

/** Okov koji program izračuna za element (docs/MODELI.md, tačka 6; rules.ts, hinges.ts, handleLayout.ts, drawers/panels.ts).
 *  rucka: "stangla" (podrazumevana u programu) | "dugme" | "bez" (otvaranje pritiskom: ručka se ne broji).
 *  Vraća [{ k, komada, mera? }] — k je ključ naziva u tekstu sajta (okov.<k>), mera je razmak rupa / NL / dužina u mm. */
export const RAZMACI_RUCKE = [96, 128, 160, 192, 224, 256, 320];
const sarkiZa = (ivica) => (ivica <= 900 ? 2 : ivica <= 1600 ? 3 : ivica <= 2000 ? 4 : 5);
export const razmakRucke = (sirinaFronta, duzinaHoda) => [...RAZMACI_RUCKE].reverse().find((r) => r <= Math.min(sirinaFronta, duzinaHoda) - 100) ?? RAZMACI_RUCKE[0];
export function okovi(id, ulazSirov, rucka = "stangla") {
  const m = MODELI[id], rez = izracunaj(id, ulazSirov), u = rez.ulaz, out = [];
  const dodaj = (k, komada, mera) => { if (!komada) return; const r = out.find((x) => x.k === k && x.mera === mera); if (r) r.komada += komada; else out.push(mera == null ? { k, komada } : { k, komada, mera }); };
  const vrata = rez.crtez.frontovi.filter((f) => f.vrsta === "vrata"), fioke = rez.crtez.frontovi.filter((f) => f.vrsta === "fioka");
  for (const f of vrata) {
    const ivica = vrata.length === 1 && f.w > f.h && m.cokla > 0 ? f.w : f.h; // jedna vrata šira nego viša: šarke gore
    dodaj(f.rucka === "desno" ? "sarka_levo" : "sarka_desno", sarkiZa(ivica));
  }
  if (rez.sanduci) for (let i = 0; i < fioke.length; i++) dodaj("klizac", 1, rez.sanduci.klizac);
  if (rucka !== "bez") for (const f of [...vrata, ...fioke]) {
    if (rucka === "dugme") dodaj("rucka_dugme", 1);
    else dodaj("rucka_stangla", 1, f.vrsta === "vrata" ? razmakRucke(f.w, f.h) : razmakRucke(f.w, f.w));
  }
  if (m.sipka) { dodaj("sipka", 1, u.sirina - 2 * P.t); dodaj("nosac_sipke", 2); }
  if (m.cokla > 0) dodaj(id === "dresser" ? "nogica_niska" : "nogica", u.sirina <= 800 ? 4 : 6);
  if (!m.dnoPreko) dodaj("nosac_viseceg", 2);
  dodaj("ekscentar", 8);                                   // dno 4 + krov 4 (ili dve prečke po 2); bez pregrada
  dodaj("nosac_police", 4 * (u.police || 0));
  if (m.dnoPreko && u.visina >= 1200) dodaj("protiv_prevrtanja", 2);
  return out;
}

/** Zbirovi: m² po materijalu (čista površina), metri kanta po traci (bez otpada), broj dasaka. */
export function zbir(daske) {
  const m2 = { korpus: 0, front: 0, ledja: 0 }, kant = {};
  let komada = 0;
  for (const x of daske) {
    m2[x.materijal] += (x.komada * x.duzina * x.sirina) / 1e6;
    if (x.kantMm) kant[x.kant.traka] = (kant[x.kant.traka] || 0) + x.kantMm / 1000;
    komada += x.komada;
  }
  const z = (n) => Math.round(n * 1000) / 1000;
  const m2z = { korpus: z(m2.korpus), front: z(m2.front), ledja: z(m2.ledja) };
  m2z.ukupno = z(m2.korpus + m2.front + m2.ledja);
  for (const k of Object.keys(kant)) kant[k] = z(kant[k]);
  return { m2: m2z, kant, kantUkupno: z(Object.values(kant).reduce((a, b) => a + b, 0)), komada };
}
