## Testes de Cadastro e Login - Frontend

Este teste verifica os fluxos de cadastro, login, adição de produto à lista, limpeza da lista e logout no Serverest.

### Fluxos Testados:

1. **Acessar Página de Cadastro**:
   - Acesse a página de login.
   - Clique no link "Cadastre-se".
   - Valide que a URL é `https://front.serverest.dev/cadastrarusuarios`.

2. **Cadastro de Novo Usuário**:
   - Acesse a página de cadastro.
   - Preencha os campos com:
     - Nome: `Luan Thomass Cláudio Nunes`
     - E-mail: `luanthomasnunes@testerest.com`
     - Senha: `75uj0m7k`
   - Clique no botão "Cadastrar".
   - Valide a mensagem "Cadastro realizado com sucesso".

3. **Login com Sucesso**:
   - Acesse a página de login.
   - Preencha os campos com:
     - E-mail: `luanthomasnunes@testerest.com.br`
     - Senha: `75uj0m7k`
   - Clique no botão "Entrar".
   - Valide que o usuário foi redirecionado para `https://front.serverest.dev/home`.

4. **Erro de Login com Credenciais Inválidas**:
   - Acesse a página de login.
   - Preencha os campos com:
     - E-mail: `usuario.invalido@testerest.com.br`
     - Senha: `senhaerrada`
   - Clique no botão "Entrar".
   - Valide a mensagem "Email e/ou senha inválidos".

5. **Adicionar Produto à Lista e Limpar Lista**:
   - Realize o login.
   - Pesquise pelo produto "Fresh".
   - Clique no produto correto com o link `/detalhesProduto/0T0P0saRFIlij15Q`.
   - Clique no botão "Adicionar na Lista".
   - Navegue para `/minhaListaDeProdutos`.
   - Clique no botão "Limpar Lista".
   - Valide a mensagem "Seu carrinho está vazio".

6. **Voltar à Página Inicial**:
   - Clique no botão "Página Inicial".
   - Valide que a URL é `https://front.serverest.dev/home`.

7. **Logout**:
   - Clique no botão "Logout".
   - Valide que o usuário foi redirecionado para a página de login.

## Fluxos Testados - API

### Testes de Cadastro e Login

1. **Cadastro de Novo Usuário**:
   - Realiza uma requisição `POST` para `/usuarios` com o seguinte payload:
     ```json
     {
       "nome": "Mark",
       "email": "novo<timestamp>@serverest.dev",
       "password": "mark123",
       "administrador": "false"
     }
     ```
   - Valida o código de status `201` e a mensagem `Cadastro realizado com sucesso`.

2. **Login com Sucesso**:
   - Realiza uma requisição `POST` para `/login` com:
     ```json
     {
       "email": "luanthomasnunes@testerest.com.br",
       "password": "75uj0m7k"
     }
     ```
   - Valida o código de status `200` e a propriedade `authorization` no corpo da resposta.

3. **Erro de Login com Credenciais Inválidas**:
   - Realiza uma requisição `POST` para `/login` com:
     ```json
     {
       "email": "easter.egg@serverest.dev",
       "password": "senhaerrada"
     }
     ```
   - Valida o código de status `401` e a mensagem `Email e/ou senha inválidos`.

---

### Testes de Usuários

1. **Listar Usuários Cadastrados**:
   - Realiza uma requisição `GET` para `/usuarios`.
   - Valida o código de status `200`, que o campo `quantidade` é maior que 0, e que `usuarios` é um array.

2. **Cadastrar Novo Usuário**:
   - Realiza uma requisição `POST` para `/usuarios` com:
     ```json
     {
       "nome": "Mark",
       "email": "teste<timestamp>@serverest.dev",
       "password": "123456",
       "administrador": "true"
     }
     ```
   - Valida o código de status `201` e a mensagem `Cadastro realizado com sucesso`.

3. **Buscar Usuário pelo ID**:
   - Busca o ID do primeiro usuário cadastrado com uma requisição `GET` para `/usuarios`.
   - Realiza uma requisição `GET` para `/usuarios/<idUsuario>` para validar o usuário.

---

### Testes de Produtos

1. **Listar Produtos Cadastrados**:
   - Realiza uma requisição `GET` para `/produtos`.
   - Valida o código de status `200` e que `produtos` é um array.

2. **Buscar Produto pelo ID**:
   - Busca o ID do primeiro produto cadastrado com uma requisição `GET` para `/produtos`.
   - Realiza uma requisição `GET` para `/produtos/<idProduto>` para validar o produto.

---

### Como Executar todos os testes:
   - npx cypress run

### Como Executar testes específicos:   
   - Abra o Cypress e selecione o arquivo `Frontend` `produtos.cy.js` `cadastro.cy.js` `login.cy.js` `API` `usuarios.cy.js` `cadastro.cy.js` `produtos.cy.js` :
   - npx cypress open

### Pré-requisitos
   - Certifique-se de que o Cypress está instalado no projeto:
   - npm install cypress --save-dev    