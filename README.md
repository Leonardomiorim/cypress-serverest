## Testes de Produtos - Frontend
Este teste verifica o fluxo completo de pesquisa, adição à lista, navegação para a página inicial e logout no Serverest.

### Fluxos Testados:
1. **Pesquisar e Selecionar Produto**:
   - Pesquisa pelo produto "Fresh".
   - Seleciona o produto correto com o link `/detalhesProduto/0T0P0saRFIlij15Q`.

2. **Adicionar Produto na Lista**:
   - Após selecionar o produto, clica no botão "Adicionar na Lista".

3. **Limpar Carrinho**:
   - Após selecionar o produto na lista, clica no botão "Limpar Carrinho".
   - Valida a mensagem "Seu carrinho está vazio".

4. **Voltar à Página Inicial**:
   - Clica no botão "Página Inicial".
   - Valida que a URL é `https://front.serverest.dev/home`.

5. **Logout**:
   - Clica no botão "Logout".
   - Valida que o usuário foi redirecionado para a página de login.

### Como Executar:
- Abra o Cypress e selecione o arquivo `produtos.cy.js`:
  ```bash
  npx cypress open