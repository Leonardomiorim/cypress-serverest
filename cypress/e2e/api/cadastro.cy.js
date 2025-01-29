/// <reference types="cypress" />

describe('Testes de API - Usuários', () => {
    it('Deve listar usuários cadastrados', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/usuarios'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.quantidade).to.be.greaterThan(0);
        expect(response.body.usuarios).to.be.an('array');
      });
    });
    it('Deve cadastrar um novo usuário', () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: {
          nome: 'Mark',
          email: `teste${Date.now()}@serverest.dev`,
          password: '123456',
          administrador: 'true'
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.message).to.eq('Cadastro realizado com sucesso');
      });
    });
    it('Deve buscar um usuário pelo ID', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/usuarios'
      }).then((response) => {
        const idUsuario = response.body.usuarios[0]._id;
        cy.request({
          method: 'GET',
          url: `https://serverest.dev/usuarios/${idUsuario}`
        }).then((res) => {
          expect(res.status).to.eq(200);
          expect(res.body).to.have.property('_id', idUsuario);
        });
      });
    });
  });
  