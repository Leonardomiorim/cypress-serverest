## Testes de Cadastro - Frontend
Este teste realiza o fluxo de cadastro no Serverest.

### Fluxo Testado:
1. Acessar a página de login.
2. Clicar no link "Cadastre-se".
3. Preencher os campos com:
   - Nome: 
   - Email: 
   - Senha: 
4. Confirmar o cadastro clicando no botão "Cadastrar".
5. Validar a mensagem "Cadastro realizado com sucesso".

### Como Executar:
- Abra o Cypress e execute o teste `cadastro.cy.js`:
  npx cypress open