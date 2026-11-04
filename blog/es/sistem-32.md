---
naslov: System 32: por qué el mueble europeo lleva taladros cada 32 mm
opis: El System 32 es una hilera de taladros Ø5 mm cada 32 mm, el primero a 37 mm del borde delantero del costado. De dónde viene, cómo salen de él baldas, bisagras y guías y cómo taladrar sin CNC.
datum: 2026-11-04
slika: ../slike/web/snimak-52-ruka-jedna-vrata-1600.webp
status: za-proveru
---

El System 32 es el acuerdo según el cual en el costado del cuerpo se taladran agujeros de 5 mm de diámetro en hilera, cada 32 mm, de modo que en los mismos agujeros encajen los soportes de balda, las bases de las bisagras y las guías de los cajones. No es una ley ni una norma con sello, sino una convención que respetan los fabricantes de herrajes (Blum, Hettich, Grass, GTV) y los fabricantes de taladradoras. Quien la respeta puede comprar el herraje a cualquiera de ellos y encajará en los agujeros que ya ha taladrado.

## Por qué justo 32 mm

La distancia no se eligió porque sea un número bonito. Cuando el mueble de tablero empezó a fabricarse en serie en Europa, se taladraba en taladradoras múltiples: una fila de husillos que de una bajada taladra toda la hilera. Los husillos se mueven con engranajes que se tocan entre sí, y la menor distancia entre ejes a la que entonces cabían los engranajes era 32 mm. La máquina dio el paso, y los fabricantes de herrajes apoyaron en él sus soportes, bases y guías. Así la distancia de los engranajes se convirtió en la distancia del mueble y ha quedado hasta hoy, también en las taladradoras CNC, que ya no necesitan ese motivo.

La medida de **37 mm** desde el borde delantero del [costado](../recnik/bok.html) hasta el eje de la primera hilera es la otra parte del acuerdo. Está ajustada a la base de la bisagra y al extremo delantero de la guía, así que la misma hilera sirve para baldas y para herraje. La hilera trasera va a 37 mm del borde trasero o a 37 + n·32 del delantero, para que la guía encaje en el paso por los dos extremos.

## Tres números que hay que recordar

- **Ø5 mm**: diámetro del agujero. El pivote del soporte de balda entra directo; la base de la bisagra y la guía se atornillan con eurotornillo previsto para agujero de 5 mm.
- **32 mm**: distancia entre ejes de agujeros contiguos de la hilera. Ni 30, ni 35; cualquier otra distancia significa que la balda queda torcida o que el herraje no encaja.
- **37 mm**: eje de la hilera delantera desde el borde delantero del costado. Se mide desde el borde del costado terminado, después del [canto](../recnik/kant.html).

## Qué sale del sistema

**Baldas.** El soporte de la [balda](../recnik/polica.html) entra en cualquier agujero de la hilera delantera y trasera, así que la balda se mueve en pasos de 32 mm. El cliente la cambia después él mismo, y queda recta porque los cuatro agujeros están a la misma altura.

**Bisagras.** La base de la [bisagra](../recnik/sarka.html) se atornilla en la hilera delantera, a 37 mm. La cazoleta Ø35 se taladra en el frente a 12,5–13 mm de profundidad, con el eje a 21,5–22,5 mm del borde del frente (distancia K de 3 a 6 mm, según el catálogo de la bisagra). El número de bisagras va por la altura del frente: hasta 900 mm dos, hasta 1600 tres, hasta 2000 cuatro, por encima cinco. Las cazoletas van a 100 mm del borde superior e inferior del frente, las demás repartidas entre medias.

**Guías.** El extremo delantero de la guía va en la hilera delantera, el trasero en la trasera. Por eso la hilera trasera tiene que estar en el paso de la delantera; si no, la guía queda inclinada y el [cajón](../recnik/fioka-i-vodjica.html) roza. La altura a la que se atornilla la guía depende del sistema de cajón y se toma de las instrucciones del fabricante, pero siempre es uno de los agujeros de la hilera.

## Cómo se taladra sin CNC

No necesitas una máquina, necesitas una plantilla. La más sencilla es un listón de madera dura o aluminio con agujeros Ø5 exactamente cada 32 mm y un tope que apoya en el borde delantero del costado de modo que la primera hilera caiga a 37 mm. También hay plantillas comerciales con casquillos de acero, que no se desgastan en unos meses como las de madera. El procedimiento es siempre el mismo:

1. Costado sobre el banco, cara interior arriba, borde delantero hacia ti.
2. Tope de la plantilla contra el borde delantero, plantilla alineada en altura de la misma manera para todos los costados del proyecto.
3. Taladra con tope de profundidad; el costado tiene 18 mm y no hay reserva.
4. El otro costado se taladra en espejo: borde delantero otra vez contra el tope, cara interior otra vez arriba.

El paso que más compensa: haz la plantilla más larga de lo que necesitas y taladra todo el costado de una vez, sin moverla. Cada cambio de posición es una ocasión para que la hilera se escape un milímetro.

![Mueble bajo de cocina 600 × 720 × 560 mm con una puerta y una balda en el programa TOPICA; a la derecha el panel con el número de puertas, la marca «Bisagras a la izquierda» y el número de baldas](../slike/web/snimak-52-ruka-jedna-vrata-1600.webp "Una puerta, una balda: el programa determina solo bisagras y bases según el System 32.")

## Errores frecuentes

- **Borde equivocado.** Hilera taladrada a 37 mm del borde trasero en vez del delantero. La balda cabe, la bisagra no.
- **Costados que no son espejo.** Los dos costados taladrados por el mismo lado, y uno tiene los agujeros por fuera. Regla: cara interior arriba, borde delantero contra el tope, sin excepción.
- **Sumar con el metro.** Quien mide 32, y otros 32, y otros 32, acumula medio milímetro de error por agujero. Se mide desde un solo cero o se usa plantilla.
- **Pieza atravesada.** Sin tope de profundidad, el agujero sale por la cara vista. Duele sobre todo en el [costado de terminación](../recnik/ukrasna-strana.html) en decor del frente.
- **Cero distinto en los dos costados.** Plantilla apoyada desde abajo en el costado izquierdo y desde arriba en el derecho. Los agujeros están cada 32 mm, pero no a la misma altura.

## Cómo lo hace TOPICA

El programa no taladra y no tiene exportación a CNC; su trabajo es que las medidas sean exactas antes de que llegues a la taladradora. Calcula las bisagras según la altura del frente, mantiene la posición de la base a 37 mm, elige la guía como el mayor largo nominal que cabe en el fondo del cuerpo, y todo eso sale en la lista de herrajes junto a la [lista de corte](./krojna-lista.html). Cómo se llega desde la estancia a esa lista se ve en el apartado [cómo funciona](../#kako-radi).

El System 32 no es teoría de escuela: es la razón por la que la balda que el cliente sube una hilera sigue recta, y la bisagra que compres dentro de dos años encaja en el agujero viejo. Tres números y una buena plantilla son todo el trabajo.
