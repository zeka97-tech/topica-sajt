---
naslov: Gavetas: como escolher a corrediça e calcular a caixa
opis: Corrediça de esferas, de rodízios ou caixa metálica — qual é a folga por lado, como se escolhe o comprimento da corrediça e como se calcula a caixa da gaveta para um corpo de 600 mm, com números exatos.
datum: 2026-11-04
slika: ../slike/web/snimak-13-korpus-sa-fiokama-1600.webp
status: za-proveru
---

Uma gaveta é frente mais caixa mais corrediça, e essas três partes têm de encaixar ao milímetro. A frente vê-se, mas a caixa e a corrediça decidem se a gaveta desliza ou roça. Um erro de 2 mm por lado quer dizer que a caixa não entra ou que abana. Aqui está a ordem pela qual na oficina se calcula uma gaveta para um [corpo](../recnik/korpus.html) inferior normal com 600 mm de largura, com os três tipos de corrediças que mais se compram.

## Primeiro o vão interior, depois tudo o resto

Todas as medidas da gaveta partem do **vão interior**: a distância entre as faces interiores das ilhargas. Num corpo de 600 mm com ilhargas de aglomerado de 18 mm o vão é 600 − 2 × 18 = **564 mm**. Na profundidade contas com a profundidade interior do corpo: um corpo com 560 de profundidade tem peças com 539 mm de fundo, porque aos 560 se tiram a frente (18) e as costas em platex (3). Não meças o vão por cima da frente e não te esqueças das costas; são os dois erros mais frequentes antes de se cortar o que quer que seja.

## Três tipos de corrediças e a sua folga

A folga é o espaço que a corrediça pede entre a caixa e a ilharga do corpo, de cada lado em separado.

| Corrediça | Folga por lado | Comprimentos | O que leva |
|---|---|---|---|
| Telescópica de esferas | **13 mm** | 250–550, passo 50 | caixa de madeira (ilharga 18 mm) |
| De rodízios | **12,5 mm** | 250–500 | caixa de madeira, gavetas mais leves |
| Caixa metálica (Modern Box, PRO) | pela fórmula do catálogo | PRO: NL 300–550 | ilhargas próprias, tu só cortas fundo e costas |

Na caixa de madeira fazes a caixa toda: duas ilhargas, peça da frente e de trás e fundo em platex de 3 mm. Na caixa metálica as ilhargas vêm de fábrica, e tu cortas só **o fundo e as costas** pela fórmula do fabricante. Fórmulas para a GTV Modern Box do catálogo: largura do fundo = vão interior − 86, comprimento do fundo = NL − 24, costas = vão − 97, alturas da caixa 68/83/146/210. Para a Modern Box PRO: vão − 75, NL − 24, vão − 87, alturas 84/135/167/199.

## Comprimento da corrediça: a maior que cabe

A regra é simples e o programa segue-a tal e qual: **a corrediça é o maior comprimento nominal que cabe na profundidade do corpo**. Para uma profundidade interior de 539 mm a corrediça de esferas de 550 não cabe, por isso vai a de **500**. A mesma lógica vale para a de rodízios (500) e para a caixa metálica (NL 500). Quem pega na de 550 porque “há espaço até à parede” esqueceu-se do platex e da frente; a corrediça bate então nas costas ou empurra a frente para fora.

## Exemplo: corpo de 600 × 720 × 560, três gavetas

Vão 564 mm, profundidade interior 539 mm, corrediça 500.

**Telescópica de esferas, caixa de madeira.** A largura exterior da caixa é 564 − 2 × 13 = **538 mm**. As ilhargas da caixa são em aglomerado de 18 mm, compridas como a corrediça (500 mm, prática habitual). As peças da frente e de trás da caixa vão entre as ilhargas: 538 − 36 = **502 mm**. O fundo em platex de 3 mm é, pela regra do programa, 3 mm mais estreito e mais curto do que a caixa: **535 × 497 mm**.

| Peça da caixa | Medida (mm) | Esp. | Qtd. |
|---|---|---|---|
| Ilharga da caixa | 500 × altura | 18 | 2 |
| Peça da frente / de trás | 502 × altura | 18 | 2 |
| Fundo | 535 × 497 | 3 | 1 |

**De rodízios.** A folga de 12,5 mm por lado dá uma caixa de 564 − 25 = **539 mm**, e as peças da frente e de trás ficam com 503 mm. O resto como acima.

**Modern Box.** Fundo com 564 − 86 = **478 mm** de largura e 500 − 24 = **476 mm** de comprimento; costas com 564 − 97 = **467 mm** de largura. **Modern Box PRO**: fundo **489 × 476**, costas **477** mm. A altura das costas vai pela altura da caixa que compraste, segundo a tabela do catálogo.

## Altura da ilharga da caixa

A altura da ilharga da caixa de madeira escolhe-se pela altura da frente e pelo que vai dentro da gaveta: para corrediças de esferas são habituais M 85, K 120, C 150 e F 180 mm, para as de rodízios 85/120/150. A gaveta de cima, debaixo da travessa, leva normalmente a caixa mais baixa, a de baixo a mais alta. Regra que o programa não deixa quebrar: **a caixa nunca passa pela peça de cima**. Num módulo inferior debaixo da bancada, por cima da gaveta de cima estão duas travessas com 100 mm de altura, por isso a caixa de cima tem de caber debaixo delas, seja qual for a altura da frente. As [gavetas](../recnik/fioka-i-vodjica.html) contam-se de cima para baixo, por isso a “primeira gaveta” é sempre a que fica debaixo da travessa.

## Erros frequentes

- Folga descontada só uma vez em vez de dos dois lados: caixa de 551 em vez de 538, não entra.
- Vão medido pela largura exterior do corpo (600) em vez de entre as ilhargas (564).
- Comprimento da corrediça escolhido pela profundidade exterior do corpo (560) em vez da interior (539).
- Fórmula da caixa metálica aplicada à largura da caixa, e não ao vão interior.
- [Folga da frente](../recnik/zazor-fronta.html) esquecida: 3 mm entre frentes vizinhas e 1,5 mm por aresta do módulo, e as frentes das gavetas roçam umas nas outras.
- Orla: a frente da gaveta orla-se nas quatro arestas com fita de 1 mm, e as ilhargas da caixa de madeira só na aresta de cima com 0,45 mm; quem orla a caixa a toda a volta muda-lhe a medida. Mais no guia [sobre a orla](./kant-debljina-i-duzina.html).

## Como funciona na TOPICA

No programa a gaveta não se calcula: no corpo clicas em “Gavetas” com mais e menos, escreves quantas são, e a caixa, o fundo e a corrediça derivam-se do vão interior e da profundidade pelas regras acima. A corrediça é GTV por predefinição, o maior comprimento que cabe; quando mudas a profundidade do corpo de 560 para 500, a corrediça e a caixa recebem medidas novas, e com elas a [lista de corte](./krojna-lista.html).

![Corpo inferior com três gavetas de 600 × 720 × 560 mm na TOPICA: vista 3D junto à parede, painel com o número de gavetas e a escolha de orla, material e puxadores](../slike/web/snimak-13-korpus-sa-fiokama-1600.webp "Três gavetas num corpo: o número mudas com um botão, a caixa e a corrediça calcula-as o programa.")

A gaveta é o sítio mais caro para errar numa cozinha, porque o erro só se vê com as corrediças aparafusadas e a frente pendurada. Por isso calcula-se antes de cortar, e não depois.
