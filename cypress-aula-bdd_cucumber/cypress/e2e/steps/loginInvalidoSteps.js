/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("que eu acesse a página de autenticação do gov para deixar o login inválido", () => {
    cy.visit('https://sso.acesso.gov.br/login')
})

When("eu digitar o usuário invalido {string}", (cpf) => {
    cy.get('#accountId').type(cpf)
})

And("clicar em continuar para tentar login invalido", () => {
    cy.get('[value="enter-account-id"]').click()
})

Then("deve ser exibida uma mensagem para login invalido", () => {
    cy.get('.erro > p').contains("CPF informado inválido. (ERL0000400)")
})