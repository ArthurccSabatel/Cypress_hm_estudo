const valid = require('../fixtures/desafioValidData.json')
const invalid = require('../fixtures/desafioInvalidData.json')

describe('Desafio | Cadastro de usuário', () => {

    beforeEach(() => {
        cy.accessRegisterPage()
    })

    it('Validar campo nome vazio', () => {

        cy.verifyEmpty('#user')
        cy.register()
        cy.verifyMessage(invalid.nameErrorMessage)

    })

    it('Validar campo e-mail vazio', () => {

        cy.fillName(valid.name)
        cy.verifyEmpty('#email')
        cy.register()
        cy.verifyMessage(invalid.emailErrorMessage)

    })

    it('Validar campo e-mail inválido', () => {
        
        cy.fillName(valid.name)
        cy.fillEmail(invalid.email)
        cy.register()
        cy.verifyMessage(invalid.emailErrorMessage)

       })

    it('Validar campo senha vazio', () => {
        
        cy.fillName(valid.name)
        cy.fillEmail(valid.email)
        cy.register()
        cy.verifyMessage(invalid.passwordErrorMessage)

    })

    it('Validar campo senha inválido', () => {
        
        cy.fillName(valid.name)
        cy.fillEmail(valid.email)
        cy.fillPassword(invalid.password)
        cy.register()
        cy.verifyMessage(invalid.passwordErrorMessage)
    
    })

    it('Validar cadastro completo', () => {
        
        cy.fillName(valid.name)
        cy.fillEmail(valid.email)
        cy.fillPassword(valid.password)
        cy.register()
        cy.successPopup(valid.name)

    })

})