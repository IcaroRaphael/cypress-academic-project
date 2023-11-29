Feature: Login Certificado Na Nuvem
    Feature Description: Login no Gov BR

    Background: Login Certificado Na Nuvem
        Given que eu acesse a página de autenticação do gov para logar com Certificado na Nuvem

    Scenario Outline: Autenticação Login Certificado Na Nuvem
        When clicar em Seu certificado digital em nuvem
        Then ser exibida a pagina das nuvens <text>
    Examples:
        | text                                  |
        | 'Provedores de Certificados em Nuvem' |
