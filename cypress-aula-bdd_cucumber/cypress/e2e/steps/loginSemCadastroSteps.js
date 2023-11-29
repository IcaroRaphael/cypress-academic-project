/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("que eu acesse a página de autenticação do gov para login válido sem cadastro", () => {
    cy.visit('https://sso.acesso.gov.br/login')
})

When("eu digitar o usuário valido sem cadastro {string}", (cpf) => {
    cy.get('#accountId').type(cpf, {log: false})
})

And("clicar em continuar para tentar login valido sem cadastro", () => {
    cy.get('[value="enter-account-id"]').click()
})

Then("deve ser exibida a pagina de cadastro", () => {
    cy.contains('Vamos criar sua conta gov.br')
})