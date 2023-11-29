Feature: Login Valido Sem Cadastro
    Feature Description: Login no Gov BR

    Background: Login Valido Sem Cadastro
        Given que eu acesse a página de autenticação do gov para login válido sem cadastro

    Scenario Outline: Autenticação CPF Valido Sem Cadastro
        When eu digitar o usuário valido sem cadastro <cpf>
        And clicar em continuar para tentar login valido sem cadastro
        Then deve ser exibida a pagina de cadastro
        Examples:
            | cpf              |
            | "96287115475"    |
            | "48468532410"    |
            
