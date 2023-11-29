/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("que eu acesse a página de autenticação do gov para logar com Certificado na Nuvem", () => {
    cy.visit('https://sso.acesso.gov.br/login')
})

When("clicar em Seu certificado digital em nuvem", () => {
    cy.get('#cert-digital-cloud-a').click()
})

Then("ser exibida a pagina das nuvens {string}", (text) => {
    cy.contains(text)
})