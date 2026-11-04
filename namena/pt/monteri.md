---
naslov: Para montadores e para quem manda cortar fora
opis: Programa para montadores de cozinhas e quem manda cortar fora: lista de corte “Por medida” para copiar e enviar, ferragens à unidade, projeto num só ficheiro.
datum: 2026-11-04
slika: ../slike/web/isecak-po-meri-tabela-1600.webp
status: za-proveru
---

Cada vez mais marceneiros trabalham sem esquadrejadora própria: medem em casa do cliente, encomendam o corte e a orlagem num serviço de corte, e depois montam e instalam. Aí a lista de corte é o único papel que sai das tuas mãos para as de outro. Se estiver certa, o serviço não te liga; se não estiver, o erro só se vê na montagem. A TOPICA faz essa lista a partir do projeto, e não do teu caderno.

## Uma lista que o serviço de corte percebe

A vista “Por medida” dá as mesmas medidas numa linha, agrupadas por material e espessura, com a marca da [orla](../recnik/kant.html) e a quantidade, exatamente como se corta: primeiro o aglomerado branco de 18 mm, depois as frentes, depois o platex. A primeira medida é o sentido do veio, por isso as frentes estão escritas ao alto, e o platex leva a marca “sem veio”; o serviço não tem de adivinhar como está virado o desenho. As medidas são líquidas, depois da orla, o que é o predefinido no programa e vale a pena dizer ao serviço na primeira mensagem. A lista copia-se com um clique e envia-se por mensagem ou e-mail, ou imprime-se em PDF. O que quer dizer cada linha está no glossário em [lista de corte](../recnik/krojna-lista.html).

## Exemplo: o que vai na mensagem

Corpo inferior de 600 × 720 × 560 com porta e prateleira, oito peças:

| Peça | Medida (mm) | Esp. | Orla | Qtd. |
|---|---|---|---|---|
| Ilharga | 702 × 539 | 18 | 1 comprido | 2 |
| Fundo | 600 × 539 | 18 | 1 comprido | 1 |
| Prateleira | 562 × 519 | 18 | 1 comprido | 1 |
| Travessa | 564 × 100 | 18 | 2 compridos | 2 |
| Frente | 717 × 597 | 18 | 2 compridos, 2 curtos | 1 |
| Costas (platex) | 717 × 597 | 3 | nenhuma | 1 |

Uma cozinha de doze módulos é uma centena de linhas destas. O programa monta-as para todos os corpos juntos, e com elas dá o consumo total de placa em m² e o comprimento de orla com 10 % de desperdício, e assim sabes quantas placas e quantos metros de fita encomendar.

![Tabela “Por medida” da TOPICA: linhas de peças com medida em milímetros, espessura, marca de orla e quantidade, agrupadas por material](../slike/web/isecak-po-meri-tabela-1600.webp "É assim o que copias e envias para o corte.")

## Ferragens e material antes de ir à loja

O montador compra as ferragens ele próprio e compra-as uma vez. Junto com a lista de peças o programa dá também a lista de ferragens: [dobradiças](../recnik/sarka.html) pela altura da frente (até 900 mm duas, até 1600 três), [corrediças](../recnik/fioka-i-vodjica.html) como o maior comprimento nominal que cabe na profundidade do corpo, pés quatro por módulo até 800 mm de largura e seis acima disso, suportes de prateleira segundo o System 32. Nada disso copias do desenho.

## O projeto é um só ficheiro

Não há conta nem servidor: o projeto é um ficheiro no teu computador. Envia-lo ao colega que corta, leva-lo no portátil para a montagem e abres lá o 3D com cotas até à parede, ao vizinho e desde o chão, e mostras ao cliente onde fica cada coisa antes de fazeres o primeiro furo. Como se mede o espaço para a lista ficar certa está no guia [como medir uma cozinha](../blog/kako-izmeriti-kuhinju.html); o que mais o programa dá está nas [funções](../#mogucnosti).

## O que o programa não faz nesta versão

Não faz ficheiro para CNC nem plano de corte (nesting). Isso faz o serviço de corte no seu programa e na sua serra; ele precisa de uma lista exata, e é isso que recebes. O caminho todo da divisão até essa lista são [três passos](../#kako-radi).

Faz a próxima lista para o serviço de corte no programa, e compara com a do caderno.
