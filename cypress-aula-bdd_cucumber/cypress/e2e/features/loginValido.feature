Feature: Login Valido
    Feature Description: Login no Gov BR

    Background: Login Valido
        Given que eu acesse a página de autenticação do gov para deixar o login válido

    Scenario Outline: Autenticação CPF Valido
        When eu digitar o usuário valido <cpf>
        And clicar em continuar para tentar login valido
        Then deve ser exibida a pagina de senha
        Examples:
            | cpf              |
            | "10644985402"    |
            | "05716502440"    |
            
