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

### Como Executar:

- Abra o Cypress e selecione o arquivo `produtos.cy.js`:
```bash
npx cypress open
