/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { loginPage } from '../../pages/login.page';
const users = require('../../fixtures/login.json')


When("que eu acesse a página de autenticação do gov", () => {
    loginPage.acessarGovBr()
})

And("eu digitar o usuário {string}", (cpf) => {
    loginPage.digitarCPF(cpf)
})

And("clicar em continuar", () => {
    loginPage.clicarContinuarGov()
})

Then("deve ser exibida uma mensagem", () => {
    loginPage.validarLoginComTexto()
})