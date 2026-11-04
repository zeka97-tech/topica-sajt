// obrazac.js — obrasci: „javi mi kad izađe cena" i e-mail pre preuzimanja (opciono).
// Ako Formspree nije podešen (prazan data-formspree), poruka ide kao mailto na e-mail vlasnika.
async function posalji(obrazac) {
  const id = obrazac.dataset.formspree;
  const podaci = new FormData(obrazac);
  if (!id) {
    const email = podaci.get("email");
    const predmet = podaci.get("_subject") || "TOPICA";
    const za = obrazac.dataset.email || "";
    window.location.href = `mailto:${za}?subject=${encodeURIComponent(predmet)}&body=${encodeURIComponent(email || "")}`;
    return true;
  }
  const odg = await fetch(`https://formspree.io/f/${id}`, { method: "POST", body: podaci, headers: { Accept: "application/json" } });
  return odg.ok;
}

export function pokreniObrasce() {
  const cena = document.getElementById("obrazac");
  cena?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const poruka = document.getElementById("obrazac-poruka");
    try { poruka.textContent = (await posalji(cena)) ? poruka.dataset.hvala : poruka.dataset.greska; cena.reset(); }
    catch { poruka.textContent = poruka.dataset.greska; }
  });
  const preuzmi = document.getElementById("preuzmi-obrazac");
  preuzmi?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = preuzmi.querySelector('input[type="email"]').value.trim();
    if (email && preuzmi.dataset.formspree) { try { await posalji(preuzmi); } catch { /* preuzimanje ide svejedno */ } }
    const exe = preuzmi.dataset.exe;
    if (exe && exe !== "#") { const a = document.createElement("a"); a.href = exe; a.download = ""; document.body.append(a); a.click(); a.remove(); }
    window.location.href = preuzmi.dataset.hvala;
  });
  const hvala = document.getElementById("hvala-direktno");
  if (hvala && hvala.getAttribute("href") !== "#") setTimeout(() => { hvala.click(); }, 600);
}
