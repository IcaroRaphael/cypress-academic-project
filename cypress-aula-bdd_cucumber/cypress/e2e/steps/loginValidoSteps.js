/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("que eu acesse a página de autenticação do gov para deixar o login válido", () => {
    cy.visit('https://sso.acesso.gov.br/login')
})

When("eu digitar o usuário valido {string}", (cpf) => {
    cy.get('#accountId').type(cpf, {log: false})
})

And("clicar em continuar para tentar login valido", () => {
    cy.get('[value="enter-account-id"]').click()
})

Then("deve ser exibida a pagina de senha", () => {
    cy.get('h3').contains("Digite sua senha")
})