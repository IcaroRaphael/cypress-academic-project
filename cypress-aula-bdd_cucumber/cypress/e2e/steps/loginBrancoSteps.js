/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("que eu acesse a página de autenticação do gov para deixar o login em branco", () => {
    cy.visit('https://sso.acesso.gov.br/login')
})

When("eu deixar o campo {string} vazio", (cpf) => {
    cy.get('#accountId')
})

And("clicar em continuar para tentar login vazio", () => {
    cy.get('[value="enter-account-id"]').click()
})

Then("deve ser exibida uma mensagem para login vazio", () => {
    cy.get('.erro > p').contains("CPF deve ser informado. (ERL0000200)")
})