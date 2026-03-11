const validUserData = require('../fixtures/desafioValidData.json')
const invalidUserData = require('../fixtures/desafioInvalidData.json')

describe('Desafio | Cadastro de usuário', () => {

    beforeEach(() => {
        cy.visit('/register')
    })

    it('Validar campo nome vazio', () => {
        cy.get('#user')
            .should('be.visible')
            .should('have.value', '')

        cy.get('#btnRegister').click()

        cy.get('#errorMessageFirstName')
            .should('have.text', invalidUserData.nameErrorMessage)
    })

    it('Validar campo e-mail vazio', () => {
        cy.get('#user')
            .should('be.visible')
            .type(validUserData.userNameValid)

        cy.get('#email')
            .should('be.visible')
            .should('have.value', '')

        cy.get('#btnRegister').click()

        cy.get('#errorMessageFirstName')
            .should('have.text', invalidUserData.emailErrorMessage)
    })

    it('Validar campo e-mail inválido', () => {
        cy.get('#user')
            .should('be.visible')
            .type(validUserData.userNameValid)

        cy.get('#email')
            .should('be.visible')
            .type(invalidUserData.userEmailInvalid)

        cy.get('#btnRegister').click()

        cy.get('#errorMessageFirstName')
            .should('have.text', invalidUserData.emailErrorMessage)
    })

    it('Validar campo senha vazio', () => {
        cy.get('#user')
            .should('be.visible')
            .type(validUserData.userNameValid)

        cy.get('#email')
            .should('be.visible')
            .type(validUserData.userEmailValid)

        cy.get('#btnRegister').click()

        cy.get('#errorMessageFirstName')
            .should('have.text', invalidUserData.passwordErrorMessage)
    })

    it('Validar campo senha inválido', () => {
        cy.get('#user')
            .should('be.visible')
            .type(validUserData.userNameValid)

        cy.get('#email')
            .should('be.visible')
            .type(validUserData.userEmailValid)

        cy.get('#password')
            .should('be.visible')
            .type(invalidUserData.userPasswordInvalid)

        cy.get('#btnRegister').click()

        cy.get('#errorMessageFirstName')
            .should('have.text', invalidUserData.passwordErrorMessage)
    })

    it('Validar cadastro completo', () => {
        cy.get('#user')
            .should('be.visible')
            .type(validUserData.userNameValid)

        cy.get('#email')
            .should('be.visible')
            .type(validUserData.userEmailValid)

        cy.get('#password')
            .should('be.visible')
            .type(validUserData.userPasswordValid)

        cy.get('#btnRegister').click()

        cy.get('#swal2-title')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('have.text', `Bem-vindo ${validUserData.userNameValid}`)
    })

})