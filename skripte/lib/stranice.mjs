// skripte/lib/stranice.mjs — sastavljanje jedne stranice: glava, traka, sadržaj, podnožje, JSON-LD, hreflang
import path from "node:path";
import { existsSync } from "node:fs";
import { popuni, ucitaj, escapeHtml } from "./sablon.mjs";

export class Graditelj {
  constructor({ koren, sajt, jezici, tekstovi, sabloniDir }) {
    this.koren = koren; this.sajt = sajt; this.jezici = jezici; this.tekstovi = tekstovi;
    this.sabloni = {};
    this.sabloniDir = sabloniDir;
    this.greske = [];
  }
  sablon(ime) {
    if (!this.sabloni[ime]) this.sabloni[ime] = ucitaj(path.join(this.sabloniDir, ime + ".html"));
    return this.sabloni[ime];
  }
  /** Koji jezici imaju ovu stranicu (relativna putanja unutar /<kod>/), za hreflang i prekidač. */
  jeziciSaStranicom(putanja, postoji) {
    return this.jezici.jezici.filter((j) => this.tekstovi[j.kod] && postoji(j.kod, putanja));
  }
  ogSlika(kod) {
    const p = path.join(this.koren, "slike", "og", `${kod}.webp`);
    return existsSync(p) ? `slike/og/${kod}.webp` : "slike/og.webp";
  }
  /**
   * Sastavi stranicu. opcije: { kod, putanja ('index.html' | 'blog/x.html'), naslov, opis, ogNaslov, ogOpis,
   * sadrzaj (HTML sa {{ključevima}}), ldJson (objekat), ogTip, postoji(kod, putanja) }
   */
  stranica(o) {
    const jezik = this.jezici.jezici.find((j) => j.kod === o.kod);
    const tekst = this.tekstovi[o.kod];
    const dubina = o.putanja.split("/").length; // index.html → 1, blog/x.html → 2
    const koren = "../".repeat(dubina);
    const pocetna = "../".repeat(dubina - 1);
    const url = this.sajt.url + o.kod + "/" + (o.putanja === "index.html" ? "" : o.putanja);
    const dostupni = this.jeziciSaStranicom(o.putanja, o.postoji);
    const hreflang = dostupni.map((j) => `<link rel="alternate" hreflang="${j.kod}" href="${this.sajt.url}${j.kod}/${o.putanja === "index.html" ? "" : o.putanja}">`);
    const xd = dostupni.find((j) => j.kod === this.jezici.xDefault) || dostupni[0];
    if (xd) hreflang.push(`<link rel="alternate" hreflang="x-default" href="${this.sajt.url}${xd.kod}/${o.putanja === "index.html" ? "" : o.putanja}">`);
    const jezikLista = this.jezici.jezici.filter((j) => this.tekstovi[j.kod]).map((j) => {
      const ima = dostupni.some((d) => d.kod === j.kod);
      const href = `${koren}${j.kod}/${ima && o.putanja !== "index.html" ? o.putanja : ""}`;
      const sada = j.kod === o.kod ? ' aria-current="page"' : "";
      return `<li><a href="${href}" hreflang="${j.kod}" lang="${j.kod}" data-jezik="${j.kod}"${sada}>${j.ime}${j.status === "za-proveru" ? " <small>*</small>" : ""}</a></li>`;
    }).join("");
    const sistem = {
      kod: o.kod, koren, pocetna, putanja: o.putanja, url,
      naslov: escapeHtml(o.naslov), opis: escapeHtml(o.opis),
      ogNaslov: escapeHtml(o.ogNaslov || o.naslov), ogOpis: escapeHtml(o.ogOpis || o.opis), ogTip: o.ogTip || "website",
      ogSlika: this.sajt.url + this.ogSlika(o.kod), ogLocale: jezik.ogLocale,
      hreflang: hreflang.join("\n"), ldJson: JSON.stringify(o.ldJson || {}),
      formspreeUrl: this.sajt.formspreeId ? `https://formspree.io/f/${this.sajt.formspreeId}` : "",
      jezikLista, trakaKlasa: o.putanja === "index.html" ? "" : " uvek-cta",
      preload: o.putanja === "index.html" ? `<link rel="preload" as="image" href="${koren}slike/web/topi-meri-korpus-isecen-800.webp" imagesrcset="${koren}slike/web/topi-meri-korpus-isecen-400.webp 400w, ${koren}slike/web/topi-meri-korpus-isecen-800.webp 800w" imagesizes="(max-width: 860px) 260px, 440px" fetchpriority="high">` : "",
      // placeholder linkovi (#) se prikazuju kao običan tekst dok ih vlasnik ne upiše u tekst/sajt.json
      usloviHtml: this.sajt.usloviLink && this.sajt.usloviLink !== "#" ? `<a href="${this.sajt.usloviLink}">${tekst.dno.uslovi}</a>` : `<span>${tekst.dno.uslovi}</span>`,
      privatnostHtml: this.sajt.privatnostLink && this.sajt.privatnostLink !== "#" ? `<a href="${this.sajt.privatnostLink}">${tekst.dno.privatnost}</a>` : `<span>${tekst.dno.privatnost}</span>`,
      ...(o.sistem || {}),
    };
    const izvori = { tekst, sajt: this.sajt, sistem };
    const greske = [];
    sistem.traka = popuni(this.sablon("traka"), izvori, greske);
    sistem.podnozje = popuni(this.sablon("podnozje"), izvori, greske);
    sistem.skripte = popuni(this.sablon("skripte"), izvori, greske);
    sistem.napomenaJezika = jezik.programNaJeziku ? "" : popuni(this.sablon("napomena-jezika"), izvori, greske);
    sistem.sadrzaj = popuni(o.sadrzaj, izvori, greske);
    let html = popuni(this.sablon("stranica"), izvori, greske);
    // još jedan prolaz: sistem.* vrednosti su mogle da unesu {{ključeve}} (npr. clanakTelo)
    html = popuni(html, izvori, greske);
    if (greske.length) this.greske.push({ kod: o.kod, putanja: o.putanja, kljucevi: [...new Set(greske)] });
    return html;
  }
}

/** JSON-LD za početnu: SoftwareApplication bez izmišljenih ocena. */
export function ldSoftver(sajt, tekst, kod, jezici) {
  return {
    "@context": "https://schema.org", "@type": "SoftwareApplication",
    name: "TOPICA", operatingSystem: "Windows 10, Windows 11", applicationCategory: "DesignApplication",
    applicationSubCategory: "Cabinet and furniture design", description: tekst.meta.ld_opis,
    inLanguage: ["sr", "en"], url: sajt.url + kod + "/", downloadUrl: sajt.url + kod + "/preuzimanje.html",
    screenshot: sajt.url + "slike/web/snimak-41-kuhinja-sonoma-bela-laminat-1600.webp",
    image: sajt.url + "slike/og.webp",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: tekst.cena.naslov, availability: "https://schema.org/InStock" },
    featureList: [tekst.cinjenice["1"].naslov, tekst.cinjenice["2"].naslov, tekst.cinjenice["3"].naslov, tekst.mogucnosti["4"].naslov, tekst.mogucnosti["6"].naslov],
  };
}

export function ldClanak(sajt, kod, putanja, meta, tekst) {
  return {
    "@context": "https://schema.org", "@type": "Article", headline: meta.naslov, description: meta.opis,
    inLanguage: kod, url: sajt.url + kod + "/" + putanja, datePublished: meta.datum || sajt.godina + "-01-01",
    image: meta.slika ? sajt.url + meta.slika.replace(/^(\.\.\/)+/, "") : sajt.url + "slike/og.webp",
    author: { "@type": "Organization", name: "TOPICA" }, publisher: { "@type": "Organization", name: "TOPICA", url: sajt.url },
  };
}

export function ldStrana(sajt, kod, putanja, naslov, opis, tip = "WebPage") {
  return { "@context": "https://schema.org", "@type": tip, name: naslov, description: opis, inLanguage: kod, url: sajt.url + kod + "/" + putanja, isPartOf: { "@type": "WebSite", name: "TOPICA", url: sajt.url } };
}

export function ldPitanja(parovi) {
  return { "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: parovi.map(([p, o]) => ({ "@type": "Question", name: p, acceptedAnswer: { "@type": "Answer", text: o } })) };
}
