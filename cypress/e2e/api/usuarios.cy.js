describe('Testes de API - Login', () => {
  
  before(() => {
    // Cadastrar o usuário antes de executar os testes
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: 'Thomass Cláudio Nunes',
        email: 'thomasnunes@testerest.com.br',
        password: '75uj0m7k',
        administrador: 'false'
      }
    }).then((response) => {
      // Valida o sucesso do cadastro
      expect(response.status).to.eq(201);
    });
  });

  it('Deve realizar login com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: 'thomasnunes@testerest.com.br',
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
