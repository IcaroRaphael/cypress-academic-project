/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("que eu acesse a página de autenticação do gov para logar com QR Code", () => {
    cy.visit('https://sso.acesso.gov.br/login')
})

When("clicar em Login com QR code", () => {
    cy.contains('Login com QR code').click()
})

Then("ser exibida a pagina QR {string}", (text) => {
    cy.get('.modal-qrcode > .modal-content > h3').should('have.text', text)
})