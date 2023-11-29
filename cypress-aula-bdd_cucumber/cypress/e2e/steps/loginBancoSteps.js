/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("que eu acesse a página de autenticação do gov para logar com Banco", () => {
    cy.visit('https://sso.acesso.gov.br/login')
})

When("clicar em Login com seu banco", () => {
    cy.get('[onclick="showModal(\'modal-bancos-credenciados\')"] > a').click()
})

Then("ser exibida a pagina {string}", (text) => {
    cy.get('.modal-bancos-credenciados > .modal-content > h3').should('have.text', text)
})