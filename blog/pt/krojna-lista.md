---
naslov: O que é uma lista de corte e como se lê
opis: A lista de corte é a relação de todas as peças de um móvel com medidas exatas, espessura, orla e quantidade. Como é, o que quer dizer “primeira medida = sentido do veio” e como a TOPICA a gera sozinha.
datum: 2026-11-04
slika: ../slike/web/snimak-33-po-meri-1600.webp
---

A lista de corte é a folha de papel, ou a tabela, que vai da oficina para a seccionadora. Tem todas as peças de um móvel: o comprimento, a largura, a espessura, o material, onde leva orla e quantas unidades são precisas. Quem corta as placas não precisa de saber como é o móvel; chega-lhe a lista. É por isso que a lista de corte é o documento mais importante entre o projeto e o móvel acabado: se estiver certa, tudo encaixa; se faltarem 18 mm no papel, faltam também na cozinha.

## O que tem uma lista de corte

No mobiliário em placa (cozinhas, roupeiros, móveis em aglomerado) uma linha da lista costuma levar seis dados:

- **Nome da peça** e a que módulo pertence: ilharga, fundo, prateleira, travessa, frente, costas.
- **Comprimento × largura** em milímetros, a medida líquida da peça acabada.
- **Espessura**: 18 mm para corpo e frentes, 3 mm de platex para as costas, 8–10 mm para fundos de gaveta.
- **Material**: aglomerado branco, decor carvalho, platex de cor.
- **[Orla](../recnik/kant.html)**: que lados levam orla e qual (0,45 mm no corpo, 1 ou 2 mm nas frentes).
- **Quantidade**: duas ilhargas, um fundo, duas travessas.

Uma boa lista está agrupada por material e espessura, porque é assim que se cortam as placas: primeiro todo o aglomerado branco de 18 mm, depois as frentes, depois o platex.

## A primeira medida é o sentido do veio

Com decors de veio (carvalho, nogueira, sonoma) importa como a peça assenta na placa. Por isso as listas de corte seguem uma convenção: **a primeira medida vai sempre ao longo do veio**. Uma frente de 717 × 597 tem o veio na vertical, como uma porta deve ter. Escrita 597 × 717, o veio ficaria na horizontal. No aglomerado branco e no platex isso não interessa, por isso o programa marca as costas como “sem veio”.

## Exemplo: um módulo inferior de 600 × 720 × 560

Um [módulo](../recnik/korpus.html) inferior de cozinha normal, com uma porta e uma prateleira, tem oito peças. O fundo assenta sobre as ilhargas (largura total 600), por isso as ilhargas têm 702 de altura, não 720. A profundidade do corpo é 539, porque aos 560 se tiram a frente (18) e as costas (3).

| Peça | Medida (mm) | Esp. | Orla | Qtd. |
|---|---|---|---|---|
| Ilharga | 702 × 539 | 18 | 1 comprido | 2 |
| Fundo | 600 × 539 | 18 | 1 comprido | 1 |
| Prateleira | 562 × 519 | 18 | 1 comprido | 1 |
| Travessa | 564 × 100 | 18 | 2 compridos | 2 |
| Frente (porta) | 717 × 597 | 18 | 2 compridos, 2 curtos | 1 |
| Costas (platex) | 717 × 597 | 3 | nenhuma | 1 |

Cada um destes números tem de ser calculado por alguém. Para um módulo são dez minutos de lápis. Para uma cozinha de doze módulos é uma hora e, pelo menos, um erro.

## Como a TOPICA monta a lista de corte

No programa a lista de corte não se escreve: é calculada a partir dos módulos que colocaste na divisão. Muda um módulo de 600 para 450 de largura e as oito peças recebem as medidas novas nesse instante, juntamente com a orla, as ferragens e o preço. A vista “Por medida” põe as medidas iguais numa linha, agrupadas por material, com a marca da orla e a quantidade, exatamente como vai para a seccionadora. Essa vista copia-se com um clique e envia-se como mensagem ou imprime-se em PDF.

![A lista de corte “Por medida” na TOPICA para um módulo inferior de 600 × 720 × 560 mm: oito peças agrupadas por material, com medida, espessura, orla e quantidade](../slike/web/snimak-33-po-meri-1600.webp "A vista “Por medida” de um módulo: oito peças, três materiais, 2,34 m² de placa.")

O programa cumpre sozinho a regra “primeira medida = sentido do veio”: uma frente é sempre escrita ao alto, e o platex leva a marca “sem veio”. Se mais tarde mudares a espessura das costas ou a orla das frentes nas definições da oficina, a alteração passa para todas as peças do projeto, incluindo as que já tinhas visto.

Mais sobre que fita vai onde está no guia [Orla: que espessura vai onde](./kant-debljina-i-duzina.html), e sobre a disposição dos furos em [System 32](./sistem-32.html).

Uma lista de corte não é complicada. Complicado é acertá-la sempre, em todos os módulos, depois de o cliente ter mudado de ideias três vezes. É para isso que serve o programa.
