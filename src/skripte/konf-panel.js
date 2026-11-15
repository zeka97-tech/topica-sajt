// konf-panel.js — pomoćne funkcije konfiguratora: grupe dugmadi kao radio dugmad (strelice), jezičci (tabovi) desnog panela.

/** Izaberi dugme u radio grupi; vrati vrednost data-<atribut>. */
export function izaberi(grupa, dugme, atribut) {
  grupa.querySelectorAll('[role="radio"]').forEach((b) => { const da = b === dugme; b.setAttribute("aria-checked", String(da)); b.tabIndex = da ? 0 : -1; });
  return dugme.dataset[atribut];
}

/** Radio grupa: klik i strelice biraju; naIzbor(dugme) javlja izbor. */
export function radioGrupa(grupa, naIzbor) {
  const dugmad = () => [...grupa.querySelectorAll('[role="radio"]')];
  dugmad().forEach((b) => { b.tabIndex = b.getAttribute("aria-checked") === "true" ? 0 : -1; });
  grupa.addEventListener("click", (e) => { const b = e.target.closest('[role="radio"]'); if (b) naIzbor(b); });
  grupa.addEventListener("keydown", (e) => {
    const d = dugmad(), i = d.indexOf(document.activeElement), korak = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!korak || i < 0) return;
    e.preventDefault();
    const sledece = d[(i + korak + d.length) % d.length];
    sledece.focus(); naIzbor(sledece);
  });
}

/** Jezičci: klik ili strelice levo / desno prikazuju svoj panel (role="tab" / "tabpanel"). */
export function jezicci(lista) {
  const tabovi = [...lista.querySelectorAll('[role="tab"]')];
  const pokazi = (t) => tabovi.forEach((x) => {
    const da = x === t; x.setAttribute("aria-selected", String(da)); x.tabIndex = da ? 0 : -1;
    document.getElementById(x.getAttribute("aria-controls")).hidden = !da;
  });
  lista.addEventListener("click", (e) => { const t = e.target.closest('[role="tab"]'); if (t) pokazi(t); });
  lista.addEventListener("keydown", (e) => {
    const i = tabovi.indexOf(document.activeElement), korak = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!korak || i < 0) return;
    e.preventDefault(); const t = tabovi[(i + korak + tabovi.length) % tabovi.length]; t.focus(); pokazi(t);
  });
}
