/// <reference types="cypress" />


describe('Testes de Cadastro - Frontend', () => {
    it('Deve acessar a página de cadastro com sucesso', () => {
      // Acesse a página de login
      cy.visit('/login');
  
      // Clique no link "Cadastre-se"
      cy.get('#root > div > div > form > small > a').click();
  
      // Verifique se a URL é a esperada
      cy.url().should('eq', 'https://front.serverest.dev/cadastrarusuarios');
    });
  
    it('Deve realizar um cadastro com sucesso', () => {
      // Acesse a página de login e vá para o cadastro
      cy.visit('/login');
      cy.get('#root > div > div > form > small > a').click();
  
      // Preencha os campos do formulário de cadastro
      cy.get('#nome').type('Luan Thomas Cláudio Nunes'); // Preenche o nome
      cy.get('#email').type('luanthomasnunes@testerest.com.br'); // Preenche o e-mail
      cy.get('#password').type('75uj0m7k'); // Preenche a senha
  
      // Clique no botão de cadastrar (com `data-testid` para maior estabilidade)
      cy.get('[data-testid="cadastrar"]').click();
  
      // Verifique se aparece uma mensagem de sucesso
      cy.contains('Cadastro realizado com sucesso').should('be.visible');
    });
});
  