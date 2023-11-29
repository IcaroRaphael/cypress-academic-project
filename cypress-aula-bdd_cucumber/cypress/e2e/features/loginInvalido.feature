Feature: Login Invalido
    Feature Description: Login no Swag Labs

    Background: Login Invalido
        Given que eu acesse a página de autenticação do gov para deixar o login inválido

    Scenario Outline: Autenticação CPF Inválido
        When eu digitar o usuário invalido <cpf>
        And clicar em continuar para tentar login invalido
        Then deve ser exibida uma mensagem para login invalido
        Examples:
            | cpf              |
            | "12345678912"    |
            | "78945613215"    |
            | "15935574561"    |
            | "01278613509"    |
            | "75698413508"    |