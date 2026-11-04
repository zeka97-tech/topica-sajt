---
naslov: Quanto custa uma cozinha por medida — como o marceneiro calcula o preço
opis: O preço de uma cozinha por medida: material ao m², orla ao metro, ferragens à unidade, mão de obra e margem. O que entra na conta e como o programa soma.
datum: 2026-11-04
slika: ../slike/web/snimak-37-cena-1600.webp
status: za-proveru
---

O preço de uma cozinha por medida não é um número de cabeça, mas a soma de cinco parcelas: material, orla, ferragens, mão de obra e margem. Quem conta assim sabe porque é que o preço é aquele e consegue defendê-lo perante o cliente. Quem conta “ao metro linear” a olho sai-se bem numa cozinha simples e perde numa com gavetas e colunas. Aqui não há preços em euros, porque cada oficina tem os seus; aqui está a forma como esses preços se juntam.

## 1. Material: metros quadrados de placa, por tipo

Primeiro contam-se os metros quadrados de cada tipo de placa em separado, porque também se compram em separado: [aglomerado](../recnik/iverica.html) branco de 18 mm para os corpos, decor de 18 mm para as frentes, platex de 3 mm para as costas e fundos de gaveta, bancada de 38 mm ao metro linear. Os metros quadrados saem da [lista de corte](./krojna-lista.html): comprimento × largura × quantidade, somado por material. Exemplo do programa: um corpo inferior de 600 × 720 × 560 tem 8 peças e 2,34 m² de placa, dos quais 1,48 m² de aglomerado branco, 0,43 m² de decor para a frente e 0,43 m² de platex.

Esses metros quadrados são líquidos. A placa não se aproveita toda: as medidas habituais das placas são 2800 × 2070 mm ou 2750 × 1830 mm, e depois do corte fica o desperdício dos cortes, das arestas e dos pedaços que não cabem em lado nenhum. Realisticamente **o aproveitamento da placa anda pelos 80 %**, por isso divides os metros quadrados líquidos por 0,8 para saber quanta placa compras de facto. Uma cozinha com 10 m² líquidos de aglomerado branco pede cerca de 12,5 m² de placa comprada. Quem cobra só o líquido paga o desperdício do próprio bolso.

## 2. Orla: metros lineares mais desperdício

A [orla](../recnik/kant.html) conta-se ao metro linear, em separado para cada espessura, porque os preços também são diferentes: 0,45 mm para as arestas à vista do corpo e das prateleiras, 1 mm para as frentes nas quatro arestas, 2 mm para as arestas mais solicitadas. O comprimento é a soma de todas as arestas orladas da lista de corte mais **10 % de desperdício** para o início e o fim da fita e para o refugo. Uma frente de 717 × 597 leva sozinha 2,63 m de orla de 1 mm; em vinte frentes são mais de 50 m, o que não é pouco. Os detalhes estão no guia [sobre a espessura e o comprimento da orla](./kant-debljina-i-duzina.html).

## 3. Ferragens: à unidade, a partir da lista

As ferragens contam-se, não se estimam. Lista para uma cozinha normal: dobradiças (uma frente até 900 mm de altura leva 2, até 1600 três, até 2000 quatro), corrediças ou caixas metálicas por gaveta, pés (4 unidades até 800 mm de largura, 6 acima disso), puxadores por frente, excêntricos e cavilhas ou confirmats por união, clips do rodapé, suspensores dos módulos superiores, suportes de prateleira. Cada item tem preço à unidade do catálogo do fornecedor e quantidade do projeto. As gavetas são aqui o mais caro: um módulo com três gavetas em caixas metálicas custa em ferragens mais do que três módulos com porta.

## 4. Mão de obra: por módulo ou por metro quadrado de frente

Duas formas habituais. **Por módulo**: cada corpo, inferior ou superior, leva o mesmo valor de mão de obra, e os mais complexos (gavetas, canto, forno) um acréscimo. Simples e rápido, bom para cozinhas em linha. **Por m² de frente**: a mão de obra conta-se sobre os metros quadrados de frentes, e assim um roupeiro grande leva mais do que um módulo superior pequeno. Mais exato para roupeiros e colunas. Seja qual for a que escolhes, na mão de obra entram corte, orlagem, furação, montagem e prova na oficina. A montagem em casa do cliente é parcela à parte, vê abaixo.

## 5. Margem

Sobre a soma de material, orla, ferragens e mão de obra vai a **margem em percentagem**. Ela não é o ganho do marceneiro, porque a mão de obra já está paga; cobre o que não se vê no projeto: ferramentas, eletricidade, máquinas que se gastam, dias sem trabalho e o risco de alguma coisa correr mal. Uma oficina que trabalha sem margem trabalha por um salário, não para si.

## O que as pessoas esquecem

- **Transporte**: placas do fornecedor para a oficina, módulos prontos para o cliente, duas vezes a carrinha.
- **Montagem**: um dia ou dois em casa do cliente, com carregar para o andar, nivelar, recorte para o lava-loiça e a placa pelo gabarito do fabricante.
- **Desperdício**: aqueles 20 % da placa e 10 % da orla; e o platex, de que todos se esquecem porque é barato.
- **Alterações**: o cliente que muda três vezes de decor ou acrescenta uma gaveta; cada alteração é uma conta nova e, se a placa já está cortada, uma placa nova.
- **Miudezas**: parafusos, cavilhas, cola, silicone, perfis da bancada, rodapé de parede; cada um nada, todos juntos nota-se.
- **Serviços**: corte e orlagem noutro sítio se não tens máquinas próprias.
- **Eletrodomésticos e bancada**: quem os compra, quem os instala e quem responde se o recorte não bate certo.

Quem tem lista não tem surpresas; quem não tem, vê-as no fim do trabalho, quando é tarde para as cobrar.

## Como funciona na TOPICA

O programa não sabe os teus preços e não os inventa. Nas **Definições da oficina**, em “Materiais e preços”, escreves o preço das placas por tipo, a orla por metro para cada espessura (0,4; 0,45; 0,8; 1 e 2 mm), as ferragens à unidade, a **mão de obra por módulo** e a **margem** em percentagem. Um campo que não preencheste diz “não introduzido” e conta como zero, sem aviso, por isso o preço no relatório nunca contém um número que não foste tu a dar. Com os preços introduzidos uma vez, o programa soma para cada projeto os metros quadrados por material, os metros de orla com desperdício, as ferragens à unidade e a mão de obra por módulo, acrescenta a margem e, nos Relatórios, separador “Preço”, dá o preço por projeto, ao lado dos separadores “Materiais” e “Ferragens” onde se vê de que é composto. Mudas a largura de um módulo ou acrescentas uma gaveta, e o preço muda nesse instante. Um resumo de tudo o que o programa dá está na secção [Funções](../#mogucnosti).

![Definições da oficina na TOPICA, secção “Preço e orçamento”: campos para mão de obra por módulo e margem em percentagem, orla por metro de 0,4 a 2 mm e peças do exaustor, campos vazios marcados com “não introduzido”](../slike/web/snimak-37-cena-1600.webp "Os preços escreve-os o marceneiro, uma vez para a oficina; o que não está escrito é zero, o programa não presume nada.")

O preço de uma cozinha por medida é uma soma que podes mostrar no papel, parcela por parcela. Quando o programa a soma a partir dos teus preços, fica-te só o que o programa não consegue: avaliar o cliente e decidir quanto queres aquele trabalho.
