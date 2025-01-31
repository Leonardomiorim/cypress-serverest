/// <reference types="cypress" />


describe('Testes de Cadastro - Frontend', () => {
    it('Deve acessar a página de cadastro com sucesso', () => {
      cy.visit('/login');
      cy.get('#root > div > div > form > small > a').click();
      cy.url().should('eq', 'https://front.serverest.dev/cadastrarusuarios');
    });
    it('Deve realizar um cadastro com sucesso', () => {
      cy.visit('/login');
      cy.get('#root > div > div > form > small > a').click();
      cy.get('#nome').type('Luan Mark Thomass Cláudio Nunes');
      cy.get('#email').type('mark@testerest.com');
      cy.get('#password').type('75uj0m7k');
      cy.get('[data-testid="cadastrar"]').click();
      cy.contains('Cadastro realizado com sucesso').should('be.visible');
    });
});
  