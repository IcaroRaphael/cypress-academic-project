/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { loginPage } from '../../pages/loginValido.page';

Given("que eu acesse a página de autenticação do gov", () => {
    loginPage.acessarGovBr()
})

When("eu digitar o usuário {string}", (cpf) => {
    loginPage.digitarCPF(cpf)
})

And("clicar em continuar", () => {
    loginPage.clicarContinuarGov()
})

Then("deve ser exibida a pagina de senha", () => {
    loginPage.validarLoginComTexto()
})