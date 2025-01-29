/// <reference types="cypress" />

describe('Testes de API - Cadastro e Login', () => {

    it('Deve realizar o cadastro de um novo usuário', () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: {
          nome: 'Mark',
          email: `novo${Date.now()}@serverest.dev`,
          password: 'mark123',
          administrador: 'false'
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.message).to.eq('Cadastro realizado com sucesso');
      });
    });
  
    it('Deve realizar login com sucesso', () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
          email: 'luanthomasnunes@testerest.com.br',
          password: '75uj0m7k'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('authorization');
      });
    });
  
    it('Deve retornar erro ao tentar logar com credenciais inválidas', () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        failOnStatusCode: false,
        body: {
          email: 'easter.egg@serverest.dev',
          password: 'senhaerrada'
        }
      }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body.message).to.eq('Email e/ou senha inválidos');
      });
    });
  
  });