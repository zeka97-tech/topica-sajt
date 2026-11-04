---
naslov: Orla: que espessura vai onde (0,45 / 1 / 2 mm) e como se calcula o comprimento
opis: A orla de 0,45 mm vai no corpo, 1 mm nas frentes, 2 mm nas arestas mais solicitadas. O que é a medida líquida depois da orla e como se calcula o comprimento da fita com 10 % de desperdício, no exemplo de um corpo de 600 × 720 × 560.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

A orla é a fita, quase sempre ABS, com que se fecha a aresta cortada do aglomerado para não se ver o miolo da placa e a humidade não entrar nela. A espessura da fita não é questão de gosto: uma fita fina numa porta descola à primeira pancada, e uma fita grossa numa prateleira interior é dinheiro deitado fora. Este guia diz que espessura vai onde, que arestas se orlam de todo, o que quer dizer “medida líquida depois da orla” e como calcular quantos metros de fita encomendar.

## Três espessuras e onde vai cada uma

| Fita | Onde vai | Porquê |
|---|---|---|
| **0,45 mm** | arestas à vista do [corpo](../recnik/korpus.html) e aresta da frente da [prateleira](../recnik/polica.html) | as arestas não levam pancadas, a fita só fecha a placa |
| **1 mm** | [frentes](../recnik/front.html), as quatro arestas | a aresta agarra-se com a mão e leva pancadas, precisa de corpo |
| **2 mm** | frentes onde se pede aresta mais forte, [bancadas](../recnik/radna-ploca.html), portas de roupeiro | as arestas mais solicitadas, fita boleada e resistente |

A fita de 2 mm também é melhor em frentes normais quando o cliente quer um bordo mais suave, boleado; o preço é mais alto e é precisa uma máquina que a cole. No corpo, 2 mm é um erro: por dentro não se vê, e a junta com a frente ganha uma aresta que ninguém pediu.

## Que arestas se orlam e quais não

A regra é simples: orla-se a aresta que se vê ou se toca com a mão. A aresta junto à parede, a aresta debaixo da bancada e a aresta na junta com outra peça não se orlam, porque aí a fita só atrapalhava a montagem e gastava tempo. Num corpo inferior normal fica assim:

- **Ilharga**: uma aresta comprida, a da frente. A de trás está junto à parede, a de cima debaixo da bancada, a de baixo no chão.
- **Fundo**: uma comprida, a da frente.
- **Prateleira**: uma comprida, a da frente. A prateleira está recuada, só se vê de frente.
- **Travessa**: duas compridas. A travessa da frente vê-se por baixo quando se abre a porta, por isso leva as duas.
- **Frente**: duas compridas e duas curtas, as quatro.
- **Costas** em platex de 3 mm: sem orla.

## Medida líquida depois da orla

Na [lista de corte](./krojna-lista.html) a medida da peça é **líquida, depois da orla**: é a medida da peça acabada com a fita colada, tal como entra no corpo. Com fita de 0,45 mm a diferença é inferior a meio milímetro e na prática não se desconta. Com 1 mm e 2 mm desconta-se: uma frente que na lista está como 717 × 597 com fita de 1 mm nas quatro arestas corta-se a 715 × 595, e depois da orla fica exatamente com 717 × 597. Quem se esquece disto fica com uma frente 2 mm maior de cada lado, e a folga de 3 mm entre portas desaparece.

A convenção “líquida depois da orla” é a predefinida no programa e pode mudar-se se a oficina trabalhar ao contrário, mas disso têm de saber tanto quem corta como quem cola.

## Como se calcula o comprimento da fita

O comprimento de orla para uma espessura é **a soma de todas as arestas orladas dessa espessura, acrescida de 10 % de desperdício**. Os dez por cento cobrem o início e o fim da fita na máquina, os pedaços que se cortam e uma ou outra aresta que se orla duas vezes. A percentagem é ajustável; uma oficina com orladora manual costuma ir mais alto.

Exemplo: corpo inferior de 600 × 720 × 560, uma porta, uma prateleira, duas travessas.

| Peça | Medida (mm) | Orla | Qtd. | Comprimento de fita |
|---|---|---|---|---|
| Ilharga | 702 × 539 | 1 comprido · 0,45 | 2 | 2 × 702 = 1404 |
| Fundo | 600 × 539 | 1 comprido · 0,45 | 1 | 600 |
| Prateleira | 562 × 519 | 1 comprido · 0,45 | 1 | 562 |
| Travessa | 564 × 100 | 2 compridos · 0,45 | 2 | 2 × 2 × 564 = 2256 |
| Frente | 717 × 597 | 2 compridos, 2 curtos · 1 mm | 1 | 2 × 717 + 2 × 597 = 2628 |
| Costas | 717 × 597 | nenhuma | 1 | 0 |

Soma para a fita de **0,45 mm**: 1404 + 600 + 562 + 2256 = **4822 mm**; com 10 % de desperdício 5304 mm, ou seja, cerca de **5,3 m**. Soma para a fita de **1 mm**: **2628 mm**; com desperdício 2891 mm, cerca de **2,9 m**. Para um corpo, no total cerca de 8,2 m de fita, duas espessuras, dois decors. Uma cozinha de doze módulos com gavetas e linha superior passa facilmente os cem metros, e aí a estimativa “a olho” falha por um rolo.

## Marcas de orla na lista de corte

Quem corta não precisa de saber para onde vai a peça, chega-lhe a marca das arestas. O programa usa quatro:

- **1 comprido**: só uma das duas arestas compridas da peça.
- **2 compridos**: as duas arestas compridas, as curtas ficam nuas.
- **2 compridos, 2 curtos**: as quatro, tipicamente a frente.
- **nenhuma**: costas e fundos de gaveta em platex.

“Comprido” refere-se ao lado comprido da peça, não à primeira medida da lista. A primeira medida é o sentido do veio e no aglomerado branco não interessa, e a aresta comprida é sempre a maior das duas. Na ilharga de 702 × 539 a comprida é 702, a aresta vertical da frente; no fundo de 600 × 539 a comprida é 600, a aresta horizontal da frente.

![Tabela “Por medida” na TOPICA para um corpo: seis peças de aglomerado branco, frente em decor carvalho e costas em platex, com a coluna Orla onde se lê “1 comprido”, “2 compridos”, “2 compridos, 2 curtos” e “nenhuma”](../slike/web/isecak-po-meri-tabela-1600.webp "Coluna Orla na lista de corte: marca das arestas, agrupada por material.")

## Como funciona na TOPICA

A espessura da orla defines uma vez para o corpo e uma vez para as frentes nas definições do projeto (predefinido 0,45 e 1 mm, decor “como a placa”), e o programa regista em cada peça que arestas se orlam e soma o comprimento por espessura e decor, com o desperdício que ajustaste. O preço do metro de fita escreve-lo tu; não escrito é zero, o programa não o inventa. A lista de materiais com a orla faz parte da mesma vista que a lista de corte; vê a secção [funções](../#mogucnosti) e o termo [orla](../recnik/kant.html) no glossário.

A orla é um pormenor enquanto há que chegue. Quando acaba nas últimas duas frentes, e o decor é de outro lote, o pormenor passa a ser mais uma ida ao fornecedor.
