---
naslov: Orla
opis: A orla é a fita ABS que cobre a aresta do aglomerado: 0,45 mm no corpo, 1 mm nas frentes, 2 mm nas arestas mais solicitadas. Que arestas se orlam e como se calcula o comprimento da orla.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

A **orla** é a fita ABS que se cola na aresta do aglomerado para cobrir o lado em bruto da placa, protegê-la da humidade e das pancadas e dar à peça um aspeto acabado. A orla não muda a medida na lista de corte quando se trabalha à medida líquida, mas muda o preço, o tempo e a lista de arestas que o marceneiro tem de trabalhar.

## Medidas padrão

- **0,45 mm**: arestas à vista do corpo e aresta da frente da prateleira; fina, barata, acompanha a cor da placa.
- **1 mm**: frentes, as quatro arestas.
- **2 mm**: portas de roupeiro, bancadas e outras arestas mais solicitadas; boleada, aguenta pancadas.
- A medida de corte é **líquida, depois da orla** (predefinido no programa): uma [frente](./front.html) de 597 com orla de 1 mm dos dois lados corta-se a 595. Quem trabalha à medida bruta corta a 597 e fica com 599.
- Comprimento da orla = soma das arestas orladas + **10 % de desperdício** (ajustável). Frente de 717 × 597 com quatro arestas: 2 × 717 + 2 × 597 = 2628 mm, com desperdício ≈ 2,9 m.

Mais sobre a escolha da espessura e a conta do comprimento no guia [Orla: espessura e comprimento](../blog/kant-debljina-i-duzina.html).

## Na oficina

O corpo orla-se à frente antes da montagem, a frente nos quatro lados antes da furação. Na orladora vão normalmente primeiro as arestas curtas, depois as compridas, para a junta no canto ficar virada para o lado que menos se vê. Erro frequente: orla esquecida na aresta de baixo da [travessa](./precka.html) ou na aresta da frente do fundo atrás da porta; outro é misturar medida líquida e bruta, e todas as frentes ficam 2 mm mais largas e a folga de 3 mm desaparece.

![Tabela “Por medida” na TOPICA: para cada peça a medida, a espessura, a orla (1 comprido, 2 compridos, 2 compridos e 2 curtos, nenhuma) e a quantidade, agrupadas por material](../slike/web/isecak-po-meri-tabela-1600.webp "A coluna “Orla” diz que arestas se orlam: a ilharga um lado comprido, a travessa dois, a frente os quatro, o platex nenhum.")

## Como funciona na TOPICA

Para cada peça o programa regista que arestas levam orla e com que espessura, soma o comprimento por espessura com o desperdício e conta o preço que escreveste ([funções](../#mogucnosti)). No 3D a orla só se marca; a medida fica líquida.

A orla é meio milímetro de plástico que decide se a cozinha parece um móvel ou um monte de tábuas.
