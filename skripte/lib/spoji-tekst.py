# skripte/lib/spoji-tekst.py — pomoćna skripta za prevode: python3 skripte/lib/spoji-tekst.py <izmene.json> <kod>
# izmene.json: { "set": { "a.b.c": "tekst" }, "del": ["a.b"] }; menja samo navedene ključeve u tekst/<kod>.json.
import json, sys
izm = json.load(open(sys.argv[1], encoding="utf8")); kod = sys.argv[2]
p = f"tekst/{kod}.json"; t = json.load(open(p, encoding="utf8"))
for k, v in izm.get("set", {}).items():
    o = t; delovi = k.split(".")
    for d in delovi[:-1]: o = o.setdefault(d, {})
    o[delovi[-1]] = v
for k in izm.get("del", []):
    o = t; delovi = k.split(".")
    for d in delovi[:-1]: o = o.get(d, {})
    o.pop(delovi[-1], None)
json.dump(t, open(p, "w", encoding="utf8"), ensure_ascii=False, indent=1)
print("✓", p)
