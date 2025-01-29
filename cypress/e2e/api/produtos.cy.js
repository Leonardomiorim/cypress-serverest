/// <reference types="cypress" />

describe('Testes de API - Produtos', () => {
    it('Deve listar produtos cadastrados', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/produtos'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.produtos).to.be.an('array');
      });
    });
    it('Deve buscar um produto pelo ID', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/produtos'
      }).then((response) => {
        const idProduto = response.body.produtos[0]._id;
        cy.request({
          method: 'GET',
          url: `https://serverest.dev/produtos/${idProduto}`
        }).then((res) => {
          expect(res.status).to.eq(200);
          expect(res.body).to.have.property('_id', idProduto);
        });
      });
    });
  });
  