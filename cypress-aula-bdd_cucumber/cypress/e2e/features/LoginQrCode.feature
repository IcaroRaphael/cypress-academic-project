Feature: Login Qr Code
    Feature Description: Login no Gov BR

    Background: Login Qr Code
        Given que eu acesse a página de autenticação do gov para logar com QR Code

    Scenario Outline: Autenticação Login Qr Code
        When clicar em Login com QR code
        Then ser exibida a pagina QR <text>
    Examples:
        | text                          |
        | 'Login sem senha com QR code' |
