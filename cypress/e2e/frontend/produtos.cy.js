describe('Testes de Produtos - Frontend', () => {
    beforeEach(() => {
      // Realiza o login antes de cada teste
      cy.visit('/login');
      cy.get('#email').type('luanthomasnunes@testerest.com.br'); // Email de login
      cy.get('#password').type('75uj0m7k'); // Senha de login
      cy.get('[data-testid="entrar"]').click();
  
      // Valida que está na página inicial após o login
      cy.url().should('eq', 'https://front.serverest.dev/home');
    });
  
    it('Deve adicionar um produto à lista, limpar a lista e fazer logout', () => {
      // Digite no campo de pesquisa
      cy.get('[data-testid="pesquisar"]').type('Fresh');
  
      // Clique no botão de pesquisar
      cy.get('[data-testid="botaoPesquisar"]').click();
  
      // Clique no primeiro elemento válido com o seletor correto
      cy.get('[data-testid="product-detail-link"]')
        .filter('[href="/detalhesProduto/0T0P0saRFIlij15Q"]') // Filtra o produto correto
        .first() // Seleciona o primeiro da lista, caso haja mais de um
        .click(); // Clica no produto
  
      // Verifica se foi direcionado para a página do produto
      cy.url().should('include', '/detalhesProduto/0T0P0saRFIlij15Q');
  
      // Clique no botão "Adicionar na Lista"
      cy.get('[data-testid="adicionarNaLista"]').click();
  
      // Navega para a página da lista de produtos
      cy.visit('/minhaListaDeProdutos');
  
      // Valida que a URL está correta
      cy.url().should('eq', 'https://front.serverest.dev/minhaListaDeProdutos');
  
      // Clique no botão "Limpar Lista"
      cy.get('[data-testid="limparLista"]').click();
  
      // Valide se a mensagem "Seu carrinho está vazio" é exibida
      cy.contains('Seu carrinho está vazio').should('be.visible');
  
      // Volte para a página inicial
      cy.get('[data-testid="paginaInicial"]').click();
      cy.url().should('eq', 'https://front.serverest.dev/home'); // Valida a navegação de volta à página inicial
  
      // Faça logout
      cy.get('[data-testid="logout"]').click();
  
      // Valide se foi redirecionado para a página de login
      cy.url().should('eq', 'https://front.serverest.dev/login');
    });
  });
  
  
  