Feature: Login Branco
    Feature Description: Login no Gov BR

    Background: Login Branco
        Given que eu acesse a página de autenticação do gov para deixar o login em branco

    Scenario Outline: Autenticação CPF Vazio
        When eu deixar o campo <cpf> vazio
        And clicar em continuar para tentar login vazio
        Then deve ser exibida uma mensagem para login vazio
        Examples:
        | cpf   |
        | ""    |