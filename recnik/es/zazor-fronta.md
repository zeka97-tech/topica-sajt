---
naslov: Holgura del frente
opis: La holgura del frente es la separación entre frentes contiguos (3 mm) y respecto al borde del módulo (1,5 mm). Cómo se calcula la medida del frente, ejemplo 600 → 597 y errores frecuentes.
datum: 2026-11-04
slika: ../slike/web/isecak-front-1600.webp
status: za-proveru
---

La holgura del frente es la separación entre dos frentes contiguos, y entre el frente y el borde del módulo, que deja sitio para que puertas y cajones abran sin rozar. Sin holgura los frentes se tocan, y cada milímetro de suelo torcido se ve en la junta.

## Medidas estándar

- **3 mm** entre dos frentes contiguos (programa).
- **1,5 mm** por borde del módulo, así dos cuerpos contiguos vuelven a dar 3 mm entre sus frentes.
- Ejemplo: [cuerpo](./korpus.html) de 600 de ancho con una puerta → frente de **597 mm** (600 − 2 × 1,5); altura 720 → frente de **717 mm**.
- Dos hojas en 800: 800 − 2 × 1,5 − 3 = 794, por hoja **397 mm**.
- Con [perfil gola](./gola-rucka.html) la holgura la dicta el perfil, con [push-to-open](./push-sistem.html) es mayor por la carrera del expulsor (unos 2–3 mm).

## En el taller

La holgura se corta en el frente, no se deja para el montaje: el frente es siempre menor que el cuerpo en la holgura, y la puerta se ajusta después en la bisagra en fondo, lado y altura para que las juntas sean iguales. Error frecuente: frente a la medida completa del cuerpo (600 × 720), y las puertas de módulos contiguos rozan y hay que cortarlas, y el corte se lleva el canto. Otro: holgura de 3 mm y encima el grosor del canto; la medida en la lista de corte es neta después del canto, así que 597 significa 597 con canto. Tercero: holgura distinta en la fila de altos y la de bajos, y las líneas de las juntas no van una sobre otra.

![Detalle de un frente del programa TOPICA con medidas y holgura respecto al borde del cuerpo](../slike/web/isecak-front-1600.webp "El frente es menor que el cuerpo en la holgura por cada lado.")

## Cómo lo hace TOPICA

La holgura está en un solo sitio en los ajustes (3 / 1,5 mm) y el programa la cuenta en la medida de cada [frente](./front.html) y en la lista de corte; cuando cambias la división del frente, las holguras se recalculan ([cómo funciona](../#kako-radi)).

Tres milímetros son una medida pequeña, hasta que faltan.
