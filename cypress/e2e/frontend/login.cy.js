/// <reference types="cypress" />

describe('Testes de Login - Frontend', () => {
    it('Deve realizar login com sucesso', () => {
      cy.visit('/login');
      cy.get('#email').type('luanthomasnunes@testerest.com.br');
      cy.get('#password').type('75uj0m7k');
      cy.get('[data-testid="entrar"]').click();
    });
    it('Deve exibir mensagem de erro para credenciais inválidas', () => {
        cy.visit('/login');
        cy.get('#email').type('usuario.invalido@testerest.com.br');
        cy.get('#password').type('senhaerrada');
        cy.get('[data-testid="entrar"]').click();
        cy.contains('Email e/ou senha inválidos').should('be.visible');
      });
});