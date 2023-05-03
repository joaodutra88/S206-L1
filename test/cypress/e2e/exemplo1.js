/// <reference types="cypress"/>

describe('Criando cenário de teste para o site globalsqa'), () => {

  it('Caso de teste: Registrando um usário no site com sucesso'), () => {

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    
  }
}