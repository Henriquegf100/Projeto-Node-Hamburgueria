# Hamburgueria Node.js

![Node.js](https://img.shields.io/badge/Node.js-Node.js-green?style=flat-square&logo=node.js)
![JavaScript](https://img.shields.io/badge/JavaScript-JavaScript-yellow?style=flat-square&logo=javascript)

Este projeto é uma aplicação simples de backend usando Node.js para gerenciar pedidos de uma hamburgueria.

## Tecnologias Utilizadas

- ![Node.js](https://img.shields.io/badge/Node.js-Node.js-green?style=for-the-badge&logo=node.js)
- ![JavaScript](https://img.shields.io/badge/JavaScript-JavaScript-yellow?style=for-the-badge&logo=javascript)
- Express: Framework Node.js para criação de APIs RESTful.
- uuid: Biblioteca para geração de IDs únicos.

## Funcionalidades

### 1. Consultar Todos os Pedidos

- **Método:** GET
- **Rota:** `/users`
- **Descrição:** Retorna todos os pedidos criados.

### 2. Criar Novos Pedidos

- **Método:** POST
- **Rota:** `/users`
- **Descrição:** Cria um novo pedido com os seguintes campos: `order`, `clienteName`, `price`, `status`.

### 3. Atualizar Pedido Pelo ID

- **Método:** PUT
- **Rota:** `/users/:id`
- **Descrição:** Atualiza um pedido existente pelo ID especificado.

### 4. Deletar Pedido Pelo ID

- **Método:** DELETE
- **Rota:** `/users/:id`
- **Descrição:** Deleta um pedido existente pelo ID especificado.

### 5. Consultar Pedido Pelo ID

- **Método:** GET
- **Rota:** `/users/:id`
- **Descrição:** Consulta um pedido existente pelo ID especificado.

### 6. Atualizar Status do Pedido Pelo ID

- **Método:** PATCH
- **Rota:** `/users/:id`
- **Descrição:** Atualiza o status de um pedido existente pelo ID especificado para "Pronto".

### 7. Demonstração da Aplicação

Assista ao vídeo abaixo para ver a aplicação em ação:



https://github.com/user-attachments/assets/4114e223-69cb-4d17-beec-1ddaa4c74227

)

Neste vídeo, você verá como utilizar as funcionalidades da aplicação de hamburgueria, incluindo a criação de pedidos, consulta, atualização de status, e muito mais.

## Como Testar a Aplicação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/hamburgueria-node.git

2. Instale as dependências:
   
   cd hamburgueria-node
   
   npm install
   
4. Inicie o servidor:
   
   npm start
6. Use o Insomnia (ou outro cliente HTTP) para testar as rotas disponíveis:

  - Importe o arquivo de workspace do Insomnia fornecido neste repositório (Insomnia_workspace.json).
  - Execute as requisições para criar, consultar, atualizar e deletar pedidos.

    ## Autor

- [Henrique Gualberto](https://github.com/Henriquegf100)

---

Para contribuir, sinta-se à vontade para abrir uma issue ou enviar um pull request.
