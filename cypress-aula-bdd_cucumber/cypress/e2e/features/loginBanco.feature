Feature: Login Banco
    Feature Description: Login no Gov BR

    Background: Login Banco
        Given que eu acesse a página de autenticação do gov para logar com Banco

    Scenario Outline: Autenticação Login Banco
        When clicar em Login com seu banco
        Then ser exibida a pagina <text>
    Examples:
        | text                  |
        | 'Bancos Credenciados' |
