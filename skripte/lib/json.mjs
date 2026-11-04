// skripte/lib/json.mjs — zapis JSON-a tako da objekti sa samo prostim vrednostima stanu u jedan red
// (tekst/<kod>.json ostaje čitljiv, a ispod 300 redova). Koristi: node skripte/formatiraj.mjs
export function zapisiSazeto(obj, uvlaka = 0) {
  const pad = "  ".repeat(uvlaka);
  if (Array.isArray(obj)) return JSON.stringify(obj);
  if (obj && typeof obj === "object") {
    const prost = Object.values(obj).every((v) => v === null || typeof v !== "object");
    if (prost) return JSON.stringify(obj).replace(/":"/g, '": "').replace(/","/g, '", "');
    const redovi = Object.entries(obj).map(([k, v]) => `${pad}  ${JSON.stringify(k)}: ${zapisiSazeto(v, uvlaka + 1)}`);
    return `{\n${redovi.join(",\n")}\n${pad}}`;
  }
  return JSON.stringify(obj);
}
