---
naslov: Qué es una lista de corte y cómo se lee
opis: La lista de corte es la relación de todas las piezas de un mueble con medidas exactas, grosor, canto y cantidad. Cómo es, qué significa “primera medida = sentido de la veta” y cómo TOPICA la genera sola.
datum: 2026-11-04
slika: ../slike/web/snimak-33-po-meri-1600.webp
---

La lista de corte (el despiece) es el papel, o la tabla, que va del taller a la seccionadora. Lleva todas las piezas de un mueble: cuánto mide de largo, cuánto de ancho, qué grosor tiene, de qué material es, dónde va el canto y cuántas unidades hacen falta. Quien corta los tableros no necesita saber cómo es el mueble; le basta con la lista. Por eso la lista de corte es el documento más importante entre el diseño y el mueble terminado: si está bien, todo encaja; si en el papel faltan 18 mm, también faltan en la cocina.

## Qué contiene una lista de corte

En el mueble de tablero (cocinas, armarios, muebles de melamina) una línea de la lista suele llevar seis datos:

- **Nombre de la pieza** y a qué módulo pertenece: costado, base, balda, travesaño, frente, trasera.
- **Largo × ancho** en milímetros, la medida neta de la pieza terminada.
- **Grosor**: 18 mm para cuerpo y frentes, 3 mm de tablex para traseras, 8–10 mm para fondos de cajón.
- **Material**: melamina blanca, decor roble, tablex de color.
- **Canto**: qué lados se cantean y con qué canto (0,45 mm para el cuerpo, 1 o 2 mm para los frentes).
- **Cantidad**: dos costados, una base, dos travesaños.

Una buena lista va agrupada por material y grosor, porque así se cortan los tableros: primero toda la melamina blanca de 18 mm, luego los frentes, luego el tablex.

## La primera medida es el sentido de la veta

Con decors de veta (roble, nogal, sonoma) importa cómo se coloca la pieza en el tablero. Por eso las listas de corte siguen una convención: **la primera medida va siempre a lo largo de la veta**. Un frente de 717 × 597 tiene la veta en vertical, como debe ir una puerta. Escrito 597 × 717, la veta iría en horizontal. En la melamina blanca y el tablex da igual, así que el programa marca la trasera como “sin veta”.

## Ejemplo: un mueble bajo de 600 × 720 × 560

Un mueble bajo de cocina normal, con una puerta y una balda, tiene ocho piezas. La base apoya sobre los costados (ancho completo, 600), así que los costados miden 702 de alto, no 720. El fondo del cuerpo es 539, porque a los 560 se les quitan el frente (18) y la trasera (3).

| Pieza | Medida (mm) | Gr. | Canto | Ud. |
|---|---|---|---|---|
| Costado | 702 × 539 | 18 | 1 largo | 2 |
| Base | 600 × 539 | 18 | 1 largo | 1 |
| Balda | 562 × 519 | 18 | 1 largo | 1 |
| Travesaño | 564 × 100 | 18 | 2 largos | 2 |
| Frente (puerta) | 717 × 597 | 18 | 2 largos, 2 cortos | 1 |
| Trasera (tablex) | 717 × 597 | 3 | ninguno | 1 |

Alguien tiene que calcular cada uno de estos números. Para un módulo son diez minutos con el lápiz. Para una cocina de doce módulos es una hora y, como mínimo, un error.

## Cómo construye TOPICA la lista de corte

En el programa la lista de corte no se escribe: se calcula a partir de los módulos que has colocado en la estancia. Cambia un módulo de 600 a 450 de ancho y las ocho piezas reciben sus nuevas medidas en ese instante, junto con el canto, los herrajes y el precio. La vista “Por medida” pone las medidas iguales en una línea, agrupadas por material, con la marca de canto y la cantidad, exactamente como va a la seccionadora. Esa vista se copia con un clic y se manda como mensaje o se imprime en PDF.

![La lista de corte “Por medida” en TOPICA para un mueble bajo de 600 × 720 × 560 mm: ocho piezas agrupadas por material, con medida, grosor, canto y cantidad](../slike/web/snimak-33-po-meri-1600.webp "La vista “Por medida” de un módulo: ocho piezas, tres materiales, 2,34 m² de tablero.")

El programa respeta solo la regla “primera medida = sentido de la veta”: un frente siempre se escribe en vertical, y el tablex lleva la marca “sin veta”. Si más tarde cambias el grosor de la trasera o el canto de los frentes en los ajustes del taller, el cambio pasa a todas las piezas del proyecto, incluidas las que ya habías mirado.

Una lista de corte no es complicada. Lo complicado es que salga bien cada vez, en cada módulo, después de que el cliente haya cambiado de idea tres veces. Para eso está el programa.
