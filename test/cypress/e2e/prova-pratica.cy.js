/// <reference types="cypress"/>

describe("Criando cenário de teste para o site demoqa", () => {
   it("Caso de teste: Registrando um usuário no site com sucesso", () => {
      let info = criarUsuario();
   });
   it("Caso de teste: Realizando login com sucesso", () => {
      let info = criarUsuario();
      cy.get("#login2").click();
      cy.wait(800);
      cy.get("#loginusername").type(info[0]);
      cy.wait(800);
      cy.get("#loginpassword").type(info[1]);
      cy.wait(500);
      cy.get(
         "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
      ).click();
      cy.wait(1000);
      cy.get("#nameofuser").should("contain.text", `Welcome ${info[0]}`);
   });
   it("Caso de teste: Registrando um usuário no site com falha (senha em branco)", () => {
      cy.visit("https://www.demoblaze.com/index.html");
      cy.viewport(1280, 720);
      cy.wait(200);
      cy.get("#signin2").click();
      cy.wait(800);
      cy.get("#sign-username").type("teste senha em branco");
      cy.wait(800);
      cy.get(
         "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
      ).click();
      // Verificamos se realmente o site não aceitou o cadastro de um usuário com senha em branco
      cy.on("window:alert", (message) => {
         expect(message).to.equal("Please fill out Username and Password.");
      });
   });
   it("Caso de teste: Realizando login no site com falha (senha em branco)", () => {
      let info = criarUsuario();
      cy.get("#login2").click();
      cy.wait(800);
      cy.get("#loginusername").type(info[0]);
      cy.wait(800);
      cy.get("#loginpassword").type(info[1]);
      cy.wait(500);
      cy.get(
         "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
      ).click();
      cy.wait(1000);
      cy.get("#nameofuser").should("contain.text", `Welcome ${info[0]}`);

      // add item carrinho
      cy.get(
         ":nth-child(1) > .card > .card-block > .card-title > .hrefch"
      ).click();
      cy.wait(2000);
      cy.get(".col-sm-12 > .btn").click();
      cy.wait(2000);
      cy.get("#cartur").click();
      cy.wait(6000);
      cy.get(".success > :nth-child(2)").should(
         "contain.text",
         `Samsung galaxy s6`
      );
   });
});

function criarUsuario() {
   let horas = new Date().getHours().toString();
   let min = new Date().getMinutes().toString();
   let seg = new Date().getSeconds().toString();
   let username = "login" + horas + min + seg;
   let password = "pass" + horas + min + seg;

   let userinfo = [username, password];

   cy.visit("https://www.demoblaze.com/index.html");
   cy.viewport(1280, 720);
   cy.wait(200);
   cy.get("#signin2").click();
   cy.wait(800);
   cy.get("#sign-username").type(username);
   cy.wait(800);
   cy.get("#sign-password").type(password);
   cy.wait(500);
   cy.get(
      "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
   ).click();

   return userinfo;
}
