/// <reference types="cypress"/>

describe('Criando cenário de teste para o site globalsqa', () => {

  it('Caso de teste: Registrando um usuário no site com sucesso', () => {
    //visitando a pagina inicial de test
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    //registrando
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Primeiro nome')
    cy.get('#Text1').type('Sobrenome')
    cy.get('#username').type('Usuario')
    cy.get('#password').type('senha')
    cy.get('.btn-primary').click()

    cy.get('.ng-binding').should('contain.text','Registration successful')

  })
  it('Caso de teste: Registrando um usuário no site com falha (senha em branco)', () => {
    //visitando a pagina inicial de test
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    //registrando
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Primeiro nome')
    cy.get('#Text1').type('Sobrenome')
    cy.get('#username').type('Usuario')
    cy.get('#password').type('senha')
    cy.get('#password').clear()
    cy.get('.has-error > .help-block').should('contain.text', 'Password is required')
    cy.get('.btn-primary').should('be.disabled')

  })
  it('Caso de teste: Realizando login com sucesso', () => {
    let info = criarUsuario()
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()

    cy.get('div.ng-scope > :nth-child(2)').should('contain.text', "You're logged in!!")
  })
})


function criarUsuario(){
  let horas = new Date().getHours().toString()
  let min = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let username = 'login' + horas + min + seg
  let password = 'pass' + horas + min + seg

  let userinfo = [username, password]
  
  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(username)
  cy.get('#Text1').type(username)
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text','Registration successful')

  return userinfo
}