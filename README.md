# Burger Queen

## Índice

* [1. Preâmbulo](#1-preâmbulo)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios de aceitação mínima do
  projeto](#5-critérios-de-aceitação-mínima-do-projeto)
* [6. Dicas e leituras complementares](#7-dicas-e-leituras-complementares)

***

## 1. Preâmbulo

[React](https://reactjs.org/) _bibliotecas_ de
JavaScript 




Como desenvolvedora Front-end, estes kits de desenvolvimento podem resultar em
uma grande ajuda para implementar rapidamente _features_ dos projetos em que
você for trabalhar.

## 2. Resumo do projeto

Desta vez temos um projeto 100% por demanda. Você sempre pode (e deve) fazer
sugestões de melhora e mudança, mas muitas vezes trabalhará em um projeto em que
primeiro deve se assegurar de cumprir os requisitos.

Um pequeno restaurante de hambúrgueres, que está crescendo, necessita uma
interface em que se possa realizar pedidos utilizando um _tablet_, e enviá-los
para a cozinha para que sejam preparados de forma ordenada e eficiente (através
de um _backend_ que os detalhes serão dados mais adiante).

![burger-queen]()

Estas são as informações que temos do cliente:

> Somos **Burger Queen**, um fast food 24hrs.
>
>A nossa proposta de serviço 24 horas foi muito bem recebida e, para continuar a
>crescer, precisamos de um sistema que nos ajude a receber pedidos de nossos
>clientes.
>
>Nós temos 2 menus. Um muito simples para o café da manhã:
>
>| Ítem                      |Preço R$|
>|---------------------------|------|
>| Café americano            |    5 |
>| Café com leite            |    7 |
>| Sanduíche de presunto e queijo|   10 |
>| Suco de fruta natural     |    7 |
>
>E outro menu para o resto do dia:
>
>| Ítem                      |Preço |
>|---------------------------|------|
>|**Hambúrgueres**           |   **R$**   |
>|Hambúrguer simples         |    10|
>|Hambúrguer duplo           |    15|
>|**Acompanhamentos**        |   **R$**   |
>|Batata frita               |     5|
>|Anéis de cebola            |     5|
>|**Bebidas**                |   **R$**   |
>|Água 500ml                 |     5|
>|Água 750ml                 |     7|
>|Bebida gaseificada 500ml   |     7|
>|Bebida gaseificada 750ml   |    10|
>
>**Importante:** Os clientes podem escolher entre hambúrgueres de carne bovina,
>frango ou vegetariano. Além disso, por um adicional de R$ 1,00 , eles podem
>adicionar queijo ou ovo.
>
>Nossos clientes são bastante indecisos, por isso é muito comum que eles mudem o
>seu pedido várias vezes antes de finalizar.

A interface deve mostrar os dois menus (café da manhã e restante do dia), cada
um com todos os seus _produtos_. O usuário deve poder escolher que _produtos_
adicionar e a interface deve mostrar o _resumo do pedido_ com o custo total.
 
## 4. Considerações gerais

Este projeto é individual.

Trabalhe integralmente uma história de usuário antes de passar para a próxima. Cumpra todas as histórias possíveis dentro do tempo especificado.

A lógica do projeto deve ser totalmente implementada em JavaScript (ES6 +), HTML e CSS e empacotada de forma automatizada. Neste projeto você deve usar [React](https://reactjs.org/).

O aplicativo deve ser um _Single Page App_. Os pedidos serão enviados por meio de um _tablet_, mas **não queremos um aplicativo nativo**, mas sim um aplicativo Web que seja **responsivo** e possa funcionar **offline**.

Precisamos pensar bem sobre o UX para aqueles que vão receber os pedidos, o tamanho e a aparência dos botões, a visibilidade do estado atual do pedido, etc.

O aplicativo deve usar scripts `npm-scripts` e ter` start`, ` build` e `deploy`, que são responsáveis por iniciar, empacotar e implantar o aplicativo, respectivamente.

Este projeto inclui um _boilerplate_ com o código necessário para começar. A parte de back-end já foi resolvida. O _boilerplate_ inclui os seguintes arquivos/pastas com configurações do Firebase(hosting, firestore e functions):

```text
./04-burger-queen/
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── functions
│   ├── index.js
│   ├── package.json
└── README.md
```

A parte da interface não está incluída, então, você deve definir a estrutura das
pastas e arquivos que considera necessários. Você pode estruturá-los de acordo
com as convenções do React. Portanto, os _setups_ necessários para
executá-los serão feitos por você.

Para iniciar este projeto você terá que fazer um _fork_ e _clone_ deste repositório.

## 5. Critérios mínimos de aceitação do projeto

### Definição do produto

O [_Product Owner_](https://www.youtube.com/watch?v=7lhnYbmovb4) nos apresentou
este _backlog_ que é o resultado do seu trabalho com o cliente até hoje
***

#### [História de usuário 1] Usuário deve ter seu perfil (login/senha) para acessar o sistema.

Eu como funcionário do restaurante quero entrar na plataforma e ver apenas a
tela imporante para o meu trabalho.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

* Criar login e senha.
* Criar tipo de usuário (cozinha / salão).
* Entrar na tela correta para cada usuário.

##### Definição de pronto

O acordado abaixo deve acontecer para dizer que a história está terminada:

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

#### [História de usuário 2] Garçom/Garçonete deve ser capaz de anotar o pedido do cliente

Eu como garçom/garçonete quero poder anotar o pedido de um cliente para não
depender da minha memória, saber quanto cobrar e poder enviar os pedidos para a
cozinha para serem preparados em ordem.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

* Anotar o nome do cliente.
* Adicionar o nome do garçom/garçonete ao pedido
* Adicionar produtos aos pedidos.
* Excluir produtos.
* Ver resumo e o total da compra.
* Enviar o pedido para a cozinha (guardar em algum banco de dados).
* Funcionar bem e se adequar a um _tablet_.

##### Definição de pronto

O acordado abaixo deve acontecer para dizer que a história está terminada:

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

#### [História de usuário 3] Chefe de cozinha deve ver os pedidos

Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido está pronto para ser entregue ao cliente.

##### Critérios de aceitação

* Ver os pedidos à medida em que são feitos.
* Marcar os pedidos que foram preparados e estão prontos para serem servidos.
* Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado como concluído.

##### Definição de pronto

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

#### [História de usuário 4] Garçom/Garçonete deve ver os pedidos prontos para servir

Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes.

##### Critérios de aceitação

* Ver a lista de pedidos prontos para servir.
* Marque os pedidos que foram entregues.

##### Definição de pronto

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).
* Os dados devem ser mantidos intactos, mesmo depois que um pedido terminado. Tudo isso para poder ter estatísticas no futuro.

***



## Checklist

### Geral

* [ ] O produto final segue as diretrizes.

### `README.md`

* [ ] Processo de design de documentos.
* [ ] Inclui informações para desenvolvedores (deps, instalação, uso, implantação, teste,
   ...)

#### HU

#### HU 1: Perfil de usuário

* [ ] Criar login e senha.
* [ ] Criar tipo de usuário (cozinha / salão).
* [ ] Entrar na tela correta para cada usuário.

#### HU 2: Anotar pedidos

* [ ] Digite o nome do cliente.
* [ ] Filtre _menu_ para _café da manhã_ e _almoço/jantar_.
* [ ] Adicionar item ao pedido.
* [ ] Excluir item do pedido.
* [ ] Mostra _resumo_ do pedido com todos os itens e o total.
* [ ] Enviar para a cozinha (isso deve salvar o pedido).

#### HU 3: Ver pedidos na cozinha

* [ ] Visualização de pedidos pendentes para produção.
* [ ] Marcar pedido como como pronto para entrega.
* [ ] Ver histórico dos pedidos.

#### HU 4: Entrega de pedidos

* [ ] Visualização de pedidos pendentes para entrega.
* [ ] Marcar pedido como entregue ao cliente.

### UX

* [ ] É bem e funciona bem em tablets.
* [ ] Você pode _adicionar a tela inicial_ como um aplicativo da web (ele tem um manifesto,
  ícones, ...) em iOS e Android.
* [ ] Fácil utilização em telas sensíveis ao toque (telas sensíveis ao toque).
* [ ] Status atual do pedido sempre visível enquanto fazemos um pedido.

### Testes (Se quiserem fazer)

* [ ] 70% ou mais em cobertura de _statements_.
* [ ] 70% ou mais em cobertura de _functions_.
* [ ] 70% ou mais em cobertura de _lines_.
* [ ] 70% ou mais em cobertura de _branches_.
