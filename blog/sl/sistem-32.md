---
naslov: Sistem 32: zakaj ima evropsko pohištvo vrtine na 32 mm
opis: Sistem 32 je niz vrtin Ø5 mm na razmiku 32 mm, prva na 37 mm od sprednjega roba stranice. Od kod izvira, kako se iz njega določijo police, spone in vodila in kako se vrta brez CNC-ja.
datum: 2026-11-04
slika: ../slike/web/snimak-52-ruka-jedna-vrata-1600.webp
status: za-proveru
---

Sistem 32 je dogovor, po katerem se na stranici korpusa vrtajo vrtine premera 5 mm v nizu, na razmiku 32 mm, tako da v iste vrtine ležejo nosilci polic, podložke spon in vodila predalov. Ni zakon niti standard z žigom, temveč konvencija, ki se je držijo proizvajalci okovja (Blum, Hettich, Grass, GTV) in proizvajalci vrtalnih strojev. Kdor jo spoštuje, lahko kupi okovje pri kateremkoli od njih in leglo bo v vrtine, ki jih je že izvrtal.

## Od kod ravno 32 mm

Razmik ni bil izbran, ker je lepa številka. Ko je ploskovno pohištvo v Evropi šlo v serijo, se je vrtalo na večvretenskih vrtalnih strojih: vrsta vreten, ki z enim spustom izvrta celoten niz vrtin. Vretena poganjajo zobniki, ki se dotikajo, najmanjši razmik osi, na katerega so se zobniki takrat dali zložiti, pa je bil 32 mm. Stroj je dal raster, proizvajalci okovja pa so nanj naslonili svoje nosilce, podložke in vodila. Tako je razmik zobnikov postal razmik pohištva in ostal do danes, tudi na CNC vrtalnih strojih, ki tega razloga ne potrebujejo več.

Mera **37 mm** od sprednjega roba [stranice](../recnik/bok.html) do osi prve vrste je drugi del dogovora. Usklajena je s podložko spone in sprednjim koncem vodila, zato ista vrsta vrtin služi policam in okovju. Zadnja vrsta je 37 mm od zadnjega roba ali na 37 + n·32 od sprednjega, da vodilo leže v raster na obeh koncih.

## Tri številke, ki si jih velja zapomniti

- **Ø5 mm**: premer vrtine. Trn nosilca police gre neposredno vanjo, podložka spone in vodilo se privijeta z euro vijakom, predvidenim za vrtino 5 mm.
- **32 mm**: razmik med osema sosednjih vrtin v vrsti. Ne 30, ne 35; vsak drug razmik pomeni, da polica stoji postrani ali da okovje ne leže.
- **37 mm**: os sprednje vrste od sprednjega roba stranice. Meri se od roba končane stranice, po [robu](../recnik/kant.html).

## Kaj se iz sistema izpelje

**Police.** Nosilec [police](../recnik/polica.html) gre v katerokoli vrtino sprednje in zadnje vrste, zato se polica premika v koraku 32 mm. Stranka pozneje sama prestavi polico in ta ostane ravna, ker so vse štiri vrtine na isti višini.

**Spone.** Podložka [spone](../recnik/sarka.html) se privije v sprednjo vrsto, na 37 mm. Lonček Ø35 se vrta v fronto na globino 12,5–13 mm, z osjo 21,5–22,5 mm od roba fronte (razdalja K od 3 do 6 mm, po katalogu spone). Število spon gre po višini fronte: do 900 mm dve, do 1600 tri, do 2000 štiri, nad tem pet. Lončki so 100 mm od zgornjega in spodnjega roba fronte, ostali enakomerno vmes.

**Vodila.** Sprednji konec vodila gre v sprednjo vrsto, zadnji v zadnjo. Zato mora biti zadnja vrsta v rastru s sprednjo; če ni, vodilo stoji poševno in [predal](../recnik/fioka-i-vodjica.html) drgne. Višina, na kateri se vodilo privije, je odvisna od predalnega sistema in se vzame iz navodil proizvajalca, a je vedno ena od vrtin v nizu.

## Kako se vrta brez CNC-ja

Ne potrebujete stroja, potrebujete šablono. Najpreprostejša je letev iz trdega lesa ali aluminija z vrtinami Ø5 na točno 32 mm in prislonom, ki nalega na sprednji rob stranice tako, da prva vrsta pade na 37 mm. Obstajajo tudi kupljene šablone z jeklenimi pušami, ki se v nekaj mesecih ne razvrtajo kot lesene. Postopek je vedno enak:

1. Stranica na mizo, notranja stran zgoraj, sprednji rob proti vam.
2. Prislon šablone ob sprednji rob, šablono poravnajte po višini na enak način za vse stranice v projektu.
3. Vrtajte z omejevalnikom globine; stranica je 18 mm in nima rezerve.
4. Drugo stranico vrtajte zrcalno: sprednji rob spet ob prislonu, notranja stran spet zgoraj.

Korak, ki se najbolj izplača: naredite šablono daljšo, kot jo potrebujete, in vrtajte celotno stranico naenkrat, brez prestavljanja. Vsako prestavljanje je priložnost, da vrsta uide za milimeter.

![Spodnji kuhinjski korpus 600 × 720 × 560 mm z enimi vrati in eno polico v programu TOPICA; desno plošča s številom vrat, oznako „Spone levo“ in številom polic](../slike/web/snimak-52-ruka-jedna-vrata-1600.webp "Ena vrata, ena polica: program sam določi spone in podložke po sistemu 32.")

## Pogoste napake

- **Napačen rob.** Vrsta, izvrtana 37 mm od zadnjega roba namesto od sprednjega. Polica gre noter, spona ne.
- **Stranici nista zrcalni.** Obe stranici, vrtani z iste strani, zato ima ena vrtine zunaj. Pravilo: notranja stran zgoraj, sprednji rob ob prislonu, brez izjeme.
- **Seštevanje z metrom.** Kdor meri 32, pa še 32, pa še 32, nabere napako pol milimetra na vrtino. Meri se od ene ničle ali se uporabi šablona.
- **Prevrtana plošča.** Brez omejevalnika globine vrtina pride ven na lepi strani. Posebej boli na [zaključni stranici](../recnik/ukrasna-strana.html) v dekorju fronte.
- **Različna ničla na dveh stranicah.** Šablona na levi stranici prislonjena od dna, na desni od vrha. Vrtine so na 32 mm, a ne na isti višini.

## Kako to naredi TOPICA

Program ne vrta in nima izvoza za CNC; njegovo delo je, da so mere pravilne, preden pridete do vrtalnika. Spone računa po višini fronte, položaj podložke drži na 37 mm, vodilo izbere kot največjo nazivno dolžino, ki gre v globino korpusa, vse to pa pride v seznam okovja ob [razreznem seznamu](./krojna-lista.html). Kako se iz prostora pride do tega seznama, je prikazano v razdelku [kako deluje](../#kako-radi).

Sistem 32 ni teorija za šolo: je razlog, da polica, ki jo stranka prestavi za eno vrsto, ostane ravna, spona, ki jo kupite čez dve leti, pa leže v staro vrtino. Tri številke in ena dobra šablona so celotno delo.
