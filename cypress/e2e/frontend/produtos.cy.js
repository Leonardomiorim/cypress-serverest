describe('Testes de Produtos - Frontend', () => {
    beforeEach(() => {
      cy.visit('/login');
      cy.get('#email').type('luanthomasnunes@testerest.com.br');
      cy.get('#password').type('75uj0m7k');
      cy.get('[data-testid="entrar"]').click();
      cy.url().should('eq', 'https://front.serverest.dev/home');
    });
    it('Deve adicionar um produto à lista, limpar a lista e fazer logout', () => {
      cy.get('[data-testid="pesquisar"]').type('Fresh');
      cy.get('[data-testid="botaoPesquisar"]').click();
      cy.get('[data-testid="product-detail-link"]')
        .filter('[href="/detalhesProduto/0T0P0saRFIlij15Q"]') 
        .first()
        .click();
      cy.url().should('include', '/detalhesProduto/0T0P0saRFIlij15Q');
      cy.get('[data-testid="adicionarNaLista"]').click();
      cy.visit('/minhaListaDeProdutos');
      cy.url().should('eq', 'https://front.serverest.dev/minhaListaDeProdutos');
      cy.get('[data-testid="limparLista"]').click();
      cy.contains('Seu carrinho está vazio').should('be.visible');
      cy.get('[data-testid="paginaInicial"]').click();
      cy.url().should('eq', 'https://front.serverest.dev/home');
      cy.get('[data-testid="logout"]').click();
      cy.url().should('eq', 'https://front.serverest.dev/login');
    });
  });
  
  
  