Feature: Login Geral
    Feature Description: Login no Swag Labs

    Background: Background name (opcional)
        Given que eu acesse a página de autenticação do gov

    Scenario Outline: Autenticação CPF Inválido
        When eu digitar o usuário <cpf>
        And clicar em continuar
        Then deve ser exibida uma mensagem
        Examples:
            | cpf              |
            | "12312312312"    |
            | "12345678912"    |
            | "78945678915"    |
            | "78945678915"    |
            | "78945678915"    |