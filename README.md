# socket-demo

## Sumário

- [socket-demo](#socket-demo)
  - [Sumário](#sumário)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Motivação

Este repositório de código é composto por duas aplicações. Em primeiro lugar, temos uma API Express que atua como um servidor web socket, encarregado de armazenar e gerenciar as mensagens trocadas em um ambiente de chat. Em segundo lugar, um cliente foi desenvolvido para consumir essa API e, de maneira diligente, escutar as interações provenientes do servidor web socket.

A API Express fornece uma base robusta para o desenvolvimento, permitindo que outros desenvolvedores explorem e ampliem suas funcionalidades, independentemente do propósito final, seja ele um chat básico, um sistema de leilão, ou outras aplicações.

O cliente, por sua vez, é projetado para se integrar com a API, recebendo e processando as mensagens provenientes do servidor web socket. Sua implementação simples o torna uma ferramenta versátil, pronta para ser personalizada e adaptada de acordo com as necessidades específicas de cada projeto.

Apesar de batizada como `auctions-api`, a API Express se posiciona como um exemplo genérico, pronta para ser utilizada por outros desenvolvedores como uma base sólida para sistemas de comunicação em tempo real. Seja para construir um chat simples ou explorar possibilidades mais avançadas, este repositório se apresenta como uma plataforma flexível, aguardando a contribuição e inovação da comunidade de desenvolvedores. Que esses códigos sirvam como uma fundação sólida para diversas aplicações e inspirem futuras iterações digitais.

Este foi o quinto repositório de código apresentado no [Curso Superior de TSI do IFMS](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) como requisito para obtenção da nota parcial das atividades da unidade curricular Linguagem de Programação IV.

| [&larr; Repositório anterior](https://github.com/mdccg/colorama) | [Próximo repositório &rarr;](https://github.com/mdccg/react-socket) |
|-|-|

## Pilha de tecnologia

As seguintes tecnologias foram utilizadas para desenvolver este app:

| Papel | Tecnologia |
|-|-|
| Ambiente de execução | [Node](https://nodejs.org/en/) |
| Linguagem de programação<sup>1</sup> | [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) |
| Linguagem de programação<sup>2</sup> | [TypeScript](https://www.typescriptlang.org/) |
| Biblioteca orientada a eventos | [Socket.IO](https://socket.io/) |
| Servidor HTTP estático | [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) |

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional);
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) ou quaisquer servidores HTTP estáticos.

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);
   
3. Entre no diretório `auctions-api`;

4. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

5. Execute o seguinte comando para iniciar a API:

Para npm:

```console
$ npm run start
```

Para Yarn:

```console
$ yarn start
```

6. Entre no diretório `exemplo-socket-frontend`;

7. Inicie o servidor HTTP estático;

8. Descubra o endereço IP interno da sua máquina e chame um amigo para conversar com você em sua rede local. ;)

Por exemplo: http://192.168.0.2:5500