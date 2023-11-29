Feature: Login Valido
    Feature Description: Login no Swag Labs

    Background: Login Valido
        Given que eu acesse a página de autenticação do gov

    Scenario Outline: Autenticação CPF Inválido
        When eu digitar o usuário <cpf>
        And clicar em continuar
        Then deve ser exibida a pagina de senha
        Examples:
            | cpf              |
            | "13049495405"    |