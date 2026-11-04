// skripte/lib/markdown.mjs — mali Markdown → HTML pretvarač za tekstove (blog, rečnik, namena, pitanja).
// Podržava: # naslove, pasuse, * liste, 1. liste, **podebljano**, *kurziv*, [veza](url), ![alt](src "opis"),
// | tabele |, > napomene, prednji blok (--- ključ: vrednost ---).
export function prednjiBlok(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---\n?/);
  const meta = {};
  if (!m) return { meta, telo: md };
  for (const red of m[1].split("\n")) {
    const i = red.indexOf(":");
    if (i > 0) meta[red.slice(0, i).trim()] = red.slice(i + 1).trim().replace(/^"(.*)"$/, "$1");
  }
  return { meta, telo: md.slice(m[0].length) };
}

function inline(s) {
  return s
    .replace(/&(?![a-z#0-9]+;)/g, "&amp;")
    .replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"(.*)")?\)\s*$/g, (_, alt, src, opis) =>
      `<figure><div class="prozor"><div class="prozor-traka" aria-hidden="true"><i></i><i></i><i></i></div><img src="${src}" alt="${alt.replace(/"/g, "&quot;")}" loading="lazy" width="1366" height="768"></div>${opis ? `<figcaption>${opis}</figcaption>` : ""}</figure>`)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, "$1<em>$2</em>");
}

export function markdownUHtml(md) {
  const redovi = md.replace(/\r/g, "").split("\n");
  const out = [];
  let i = 0;
  const brojReci = md.replace(/[#*>|\-]/g, " ").split(/\s+/).filter(Boolean).length;
  while (i < redovi.length) {
    const r = redovi[i];
    if (!r.trim()) { i++; continue; }
    let m;
    if ((m = r.match(/^(#{1,4})\s+(.*)$/))) {
      const n = m[1].length; const t = inline(m[2]);
      const id = m[2].toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "");
      out.push(`<h${n} id="${id}">${t}</h${n}>`); i++; continue;
    }
    if (r.startsWith("![")) { out.push(inline(r)); i++; continue; }
    if (r.startsWith("|")) {
      const tab = [];
      while (i < redovi.length && redovi[i].startsWith("|")) tab.push(redovi[i++]);
      const celije = (l) => l.replace(/^\||\|$/g, "").split("|").map((c) => inline(c.trim()));
      const glava = celije(tab[0]);
      const telo = tab.slice(2).map((l) => `<tr>${celije(l).map((c) => `<td>${c}</td>`).join("")}</tr>`).join("");
      out.push(`<table><thead><tr>${glava.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${telo}</tbody></table>`);
      continue;
    }
    if (/^[-*]\s/.test(r)) {
      const li = [];
      while (i < redovi.length && /^[-*]\s/.test(redovi[i])) li.push(`<li>${inline(redovi[i++].slice(2))}</li>`);
      out.push(`<ul>${li.join("")}</ul>`); continue;
    }
    if (/^\d+\.\s/.test(r)) {
      const li = [];
      while (i < redovi.length && /^\d+\.\s/.test(redovi[i])) li.push(`<li>${inline(redovi[i++].replace(/^\d+\.\s/, ""))}</li>`);
      out.push(`<ol>${li.join("")}</ol>`); continue;
    }
    if (r.startsWith(">")) {
      const p = [];
      while (i < redovi.length && redovi[i].startsWith(">")) p.push(redovi[i++].replace(/^>\s?/, ""));
      out.push(`<p class="napomena">${inline(p.join(" "))}</p>`); continue;
    }
    const p = [];
    while (i < redovi.length && redovi[i].trim() && !/^(#|!\[|\||[-*]\s|\d+\.\s|>)/.test(redovi[i])) p.push(redovi[i++]);
    out.push(`<p>${inline(p.join(" "))}</p>`);
  }
  return { html: out.join("\n"), brojReci };
}
