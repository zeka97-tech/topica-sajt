---
naslov: Para instaladores y para quien corta fuera
opis: Programa para instaladores de cocinas y carpinteros que cortan los tableros en un centro de corte: lista de corte «Por medida» para copiar y enviar, herrajes por unidad, el proyecto como un solo archivo. Windows.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Cada vez más carpinteros trabajan sin escuadradora propia: miden en casa del cliente, encargan el corte y el canteado en un centro de corte, y luego montan e instalan. Ahí la lista de corte es el único papel que sale de tus manos a las de otro. Si es exacta, el centro de corte no te llama; si no lo es, el error se ve solo en el montaje. TOPICA hace esa lista a partir del proyecto, y no de tu libreta.

## Una lista que el centro de corte entiende

La vista «Por medida» da las mismas medidas en una línea, agrupadas por material y grosor, con la marca de [canto](../recnik/kant.html) y la cantidad, exactamente como se corta: primero la melamina blanca de 18 mm, luego los frentes, luego el tablex. La primera medida es el sentido de la veta, así que los frentes están escritos en vertical, y el tablex lleva la marca «sin veta»; el centro de corte no tiene que adivinar cómo va la veta. Las medidas son netas, después del canto, que es lo predeterminado en el programa y conviene decírselo al centro de corte en el primer mensaje. La lista la copias con un clic y la mandas por mensaje o correo, o la imprimes en PDF. Qué significa cada línea está en el glosario bajo [lista de corte](../recnik/krojna-lista.html).

## Ejemplo: lo que va en el mensaje

Mueble bajo de 600 × 720 × 560 con puerta y balda, ocho piezas:

| Pieza | Medida (mm) | Gr. | Canto | Ud. |
|---|---|---|---|---|
| Costado | 702 × 539 | 18 | 1 largo | 2 |
| Base | 600 × 539 | 18 | 1 largo | 1 |
| Balda | 562 × 519 | 18 | 1 largo | 1 |
| Travesaño | 564 × 100 | 18 | 2 largos | 2 |
| Frente | 717 × 597 | 18 | 2 largos, 2 cortos | 1 |
| Trasera (tablex) | 717 × 597 | 3 | ninguno | 1 |

Una cocina de doce módulos es un centenar de líneas así. El programa las compone para todos los cuerpos juntos, y con ellas da el consumo total de tablero en m² y el largo de canto con 10 % de desperdicio, así que sabes cuántos tableros y cuántos metros de cinta pedir.

![Tabla «Por medida» del programa TOPICA: líneas de piezas con medida en milímetros, grosor, marca de canto y cantidad, agrupadas por material](../slike/web/isecak-po-meri-tabela-1600.webp "Así es lo que copias y mandas al corte.")

## Herrajes y material antes de ir a la tienda

El instalador compra el herraje él mismo y lo compra una vez. El programa da, junto a la lista de piezas, la lista de herrajes: [bisagras](../recnik/sarka.html) según la altura del frente (hasta 900 mm dos, hasta 1600 tres), [guías](../recnik/fioka-i-vodjica.html) como el mayor largo nominal que cabe en el fondo del cuerpo, patas cuatro por módulo hasta 800 mm de ancho y seis por encima, soportes de balda según System 32. Nada de eso lo copias del plano.

## El proyecto es un solo archivo

No hay cuenta ni servidor: el proyecto es un archivo en tu ordenador. Se lo mandas al compañero que corta, lo llevas en el portátil al montaje y allí abres el 3D con cotas a la pared, al vecino y al suelo, y le enseñas al cliente dónde va cada cosa antes de taladrar el primer agujero. Cómo se mide el espacio para que la lista sea exacta está en la guía [cómo medir una cocina](../blog/kako-izmeriti-kuhinju.html); qué más da el programa está en [funciones](../#mogucnosti).

## Lo que el programa no hace en esta versión

No hace archivo CNC ni plano de corte (nesting). Eso lo hace el centro de corte con su programa y su sierra; lo que necesita es una lista exacta, y eso es lo que obtienes. Todo el camino desde la estancia hasta esa lista son [tres pasos](../#kako-radi).

La próxima lista para el centro de corte hazla en el programa, y compárala con la de la libreta.
