---
naslov: Vad kostar ett platsbyggt kök — så räknar snickaren fram priset
opis: Priset på ett platsbyggt kök sätts ihop av material per m², kantlist per meter, beslag per styck, arbete och påslag. Vad som ingår, vad som glöms och hur programmet summerar ur de priser snickaren lägger in.
datum: 2026-11-04
slika: ../slike/web/snimak-37-cena-1600.webp
status: za-proveru
---

Priset på ett platsbyggt kök är inte ett tal ur huvudet utan summan av fem poster: material, kantlist, beslag, arbete och påslag. Den som räknar så vet varför priset är vad det är och kan försvara det inför kunden. Den som räknar ”per löpmeter” på en höft klarar sig bra på ett enkelt kök och förlorar på det med lådor och högskåp. Här finns inga priser i kronor eller euro, eftersom varje verkstad har sina egna; här är sättet de priserna läggs ihop på.

## 1. Material: kvadratmeter skiva, per sort

Först räknas kvadratmetrarna av varje skivsort för sig, eftersom de också köps för sig: vit [spånskiva](../recnik/iverica.html) 18 mm till stommar, dekor 18 mm till fronter, hardboard 3 mm till rygg och lådbottnar, bänkskiva 38 mm per löpmeter. Ytan fås ur [kaplistan](./krojna-lista.html): längd × bredd × antal, summerat per material. Exempel ur programmet: en bänkstomme 600 × 720 × 560 har 8 skivor och 2,34 m² skiva, varav 1,48 m² vit spånskiva, 0,43 m² dekor till fronten och 0,43 m² hardboard.

Den ytan är netto. Plattan utnyttjas inte helt: vanliga skivformat är 2800 × 2070 mm eller 2750 × 1830 mm, och efter kapningen blir det spill från snitt, kanter och bitar som inte passar någonstans. Realistiskt **utnyttjas plattan till cirka 80 %**, så du delar nettokvadratmetrarna med 0,8 för att få hur mycket skiva du faktiskt köper. Ett kök med 10 m² netto vit spånskiva kräver cirka 12,5 m² köpt skiva. Den som bara tar betalt för netto betalar spillet ur egen ficka.

## 2. Kantlist: löpmeter plus spill

[Kantlist](../recnik/kant.html) räknas per löpmeter, för varje tjocklek för sig, eftersom priserna också skiljer sig: 0,45 mm för stommens och hyllplanens synliga kanter, 1 mm för fronter på alla fyra kanterna, 2 mm för hårt belastade kanter. Längden är summan av alla kantade kanter ur kaplistan plus **10 % spill** för bandets början och slut och för kassationer. En front 717 × 597 bär ensam 2,63 m kantlist på 1 mm; på tjugo fronter är det över 50 m, vilket inte är någon småsak. Detaljerna finns i guiden [om kantlistens tjocklek och längd](./kant-debljina-i-duzina.html).

## 3. Beslag: per styck, ur listan

Beslag räknas, uppskattas inte. Listan för ett vanligt kök: gångjärn (en front upp till 900 mm hög bär 2, upp till 1600 tre, upp till 2000 fyra), lådskenor eller metallådor per låda, ben (4 stycken upp till 800 mm bredd, 6 däröver), handtag per front, excenterbeslag och pluggar eller konfirmatskruv per förband, sockelclips, upphängningsbeslag för väggskåp, hyllbärare. Varje post har ett styckpris ur leverantörens katalog och ett antal ur projektet. Lådorna är dyrast här: ett skåp med tre lådor på metallådor kostar mer i beslag än tre skåp med luckor.

## 4. Arbete: per skåp eller per kvadratmeter front

Två vanliga sätt. **Per skåp**: varje stomme, bänk- eller väggskåp, bär samma belopp i arbete, och de mer komplicerade (lådor, hörn, ugn) ett tillägg. Enkelt och snabbt, bra för kök på rad. **Per m² front**: arbetet räknas på fronternas yta, så en stor garderob bär mer än ett litet väggskåp. Mer träffsäkert för garderober och högskåp. Vilket du än väljer ingår kapning, kantning, borrning, montering och provmontering i verkstaden i arbetet. Monteringen hos kunden är en egen post, se nedan.

## 5. Påslag

På summan av material, kantlist, beslag och arbete läggs **påslag i procent**. Det är inte snickarens förtjänst, eftersom arbetet redan är betalt; det täcker det som inte syns i projektet: verktyg, el, maskiner som slits, dagar utan jobb och risken att något går snett. En verkstad som arbetar utan påslag arbetar för lön, inte för sig själv.

## Vad folk glömmer

- **Transport**: skivor från leverantören till verkstaden, färdiga skåp till kunden, två gånger skåpbil.
- **Montering**: en eller två dagar hos kunden, med bärande upp trappor, nivellering, urtag för diskho och häll efter tillverkarens mall.
- **Spill**: de 20 % av plattan och 10 % kantlist; och hardboarden, som alla glömmer för att den är billig.
- **Ändringar**: kunden som byter dekor tre gånger eller lägger till en låda; varje ändring är en ny beräkning och, om skivan redan är kapad, en ny skiva.
- **Småsaker**: skruv, pluggar, lim, silikon, bänkskivelister, vägglist; var för sig ingenting, tillsammans märkbart.
- **Tjänster**: kapning och kantning hos någon annan om du inte har egna maskiner.
- **Vitvaror och bänkskiva**: vem skaffar dem, vem monterar dem och vem ansvarar om urtaget inte stämmer.

Den som har en lista får inga överraskningar; den som inte har en ser dem i slutet av jobbet, när det är för sent att ta betalt.

## Så gör TOPICA

Programmet känner inte dina priser och hittar inte på dem. I **Verkstadsinställningar**, under ”Material och priser”, lägger du in skivpris per sort, kantlist per meter för varje tjocklek (0,4; 0,45; 0,8; 1 och 2 mm), beslag per styck, **arbete per skåp** och **påslag** i procent. Ett fält du inte fyllt i säger ”inte angivet” och räknas som noll, utan varning, så priset i rapporten innehåller aldrig ett tal du inte själv har gett. När priserna väl är inlagda summerar programmet för varje projekt kvadratmeter per material, meter kantlist med spill, beslag per styck och arbete per skåp, lägger på påslaget och ger i Rapporter, fliken ”Pris”, priset per projekt, bredvid flikarna ”Material” och ”Beslag” där man ser vad det består av. Ändrar du ett skåps bredd eller lägger till en låda ändras priset i samma stund. En översikt över allt programmet ger finns i avsnittet [Funktioner](../#mogucnosti).

![Verkstadsinställningar i programmet TOPICA, avsnittet ”Pris och offert”: fält för arbete per skåp och påslag i procent, kantlist per meter för 0,4 till 2 mm och fläktens delar, tomma fält märkta ”inte angivet”](../slike/web/snimak-37-cena-1600.webp "Priserna lägger snickaren in, en gång för verkstaden; tomt är noll, programmet antar ingenting.")

Priset på ett platsbyggt kök är en summa du kan visa på papper, post för post. När programmet har summerat den ur dina priser återstår bara det programmet inte kan: att bedöma kunden och bestämma hur gärna du vill ha det jobbet.
