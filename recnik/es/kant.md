---
naslov: Canto
opis: El canto es la cinta ABS que cubre el borde del tablero: 0,45 mm en el cuerpo, 1 mm en los frentes, 2 mm en bordes castigados. Qué bordes se cantean y el largo.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

El **canto** es la cinta ABS que se pega al borde del tablero de melamina para tapar la cara cruda del tablero, protegerlo de la humedad y los golpes y que la pieza parezca terminada. El canto no cambia la medida en la lista de corte cuando se trabaja a medida neta, pero cambia el precio, el tiempo y la relación de bordes que el carpintero tiene que procesar.

## Medidas estándar

- **0,45 mm**: bordes vistos del cuerpo y borde delantero de la balda; fino, barato, sigue el color del tablero.
- **1 mm**: frentes, los cuatro bordes.
- **2 mm**: puertas de armario, encimeras y otros bordes más castigados; redondeado, aguanta golpes.
- La medida de corte es **neta después del canto** (predeterminado en el programa): un [frente](./front.html) de 597 con canto de 1 mm por los dos lados se corta a 595. Quien trabaja a medida bruta corta a 597 y obtiene 599.
- Largo de canto = suma de los bordes canteados + **10 % de desperdicio** (ajustable). Frente de 717 × 597 con cuatro bordes: 2 × 717 + 2 × 597 = 2628 mm, con desperdicio ≈ 2,9 m.

Más sobre la elección de grosor y el cálculo del largo en la guía [Canto: grosor y largo](../blog/kant-debljina-i-duzina.html).

## En el taller

El cuerpo se cantea por delante antes de montar, el frente por los cuatro lados antes de taladrar. En la canteadora suelen ir primero los bordes cortos y luego los largos, para que la junta de la esquina mire al lado que menos se ve. Error frecuente: canto olvidado en el borde inferior del [travesaño](./precka.html) o en el borde delantero de la base detrás de la puerta; otro es mezclar medida neta y bruta, y todos los frentes salen 2 mm más anchos y la holgura de 3 mm desaparece.

![Tabla «Por medida» en el programa TOPICA: para cada pieza medida, grosor, canto (1 largo, 2 largos, 2 largos y 2 cortos, ninguno) y cantidad, agrupado por material](../slike/web/isecak-po-meri-tabela-1600.webp "La columna «Canto» dice qué bordes se cantean: el costado un largo, el travesaño dos, el frente los cuatro, el tablex ninguno.")

## Cómo lo hace TOPICA

Para cada pieza el programa anota qué bordes llevan canto y de qué grosor, suma el largo por grosor con el desperdicio y aplica el precio que has escrito ([funciones](../#mogucnosti)). En 3D el canto solo se marca; la medida queda neta.

El canto es medio milímetro de plástico que decide si la cocina parece un mueble o un montón de tableros.
