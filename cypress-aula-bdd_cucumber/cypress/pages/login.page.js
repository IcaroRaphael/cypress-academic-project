
class LoginPage {
    // Pode ser feito por "fluxo": elementos + ações

    acessarGovBr() {
        cy.visit('https://sso.acesso.gov.br/login')
    }

    digitarCPF(cpf) {
        cy.get('#accountId').type(cpf)
    }

    clicarContinuarGov() {
        cy.get('[value="enter-account-id"]').click()
    }

    validarLoginComTexto() {
        cy.get('.erro > p').contains("CPF informado inválido. (ERL0000400)")
    }

}

export const loginPage = new LoginPage()