
describe('Desafio | Cadastro de usuário', () => {
    
    beforeEach(() => {
        cy.visit('/register')
    })
        it('Validar campo nome vazio',() => {
            cy.get('#user')
                .should('be.visible') 
                .should('have.text', '')

            cy.get('#btnRegister')
                .click()

            cy.get('#errorMessageFirstName')
                .should('have.text', 'O campo nome deve ser prenchido')
                            
        })


        it('Validar campo e-mail vazio',() => {
            cy.get('#user')
                .should('be.visible')
                .type('cliente teste')

            cy.get('#email')
                .should('be.visible') 
                .should('have.text', '')

            cy.get('#btnRegister')
                .click()

            cy.get('#errorMessageFirstName')
                .should('have.text', 'O campo e-mail deve ser prenchido corretamente')     
        })

        it('Validar campo e-mail inválido',() => {
            cy.get('#user')
                .should('be.visible')
                .type('cliente teste')

            cy.get('#email')
                .should('be.visible') 
                .type('asdfghjk')

            cy.get('#btnRegister')
                .click()

            cy.get('#errorMessageFirstName')
                .should('have.text', 'O campo e-mail deve ser prenchido corretamente')     
                    
        })

        it('Validar campo senha vazio',() => {
            cy.get('#user')
                .should('be.visible')
                .type('cliente teste')

            cy.get('#email')
                .should('be.visible') 
                .type('cliente@example.com')

            cy.get('#btnRegister')
                .click()

            cy.get('#errorMessageFirstName')
                .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')     
             
        })

        it('Validar campo senha inválido',() => {
            cy.get('#user')
                .should('be.visible')
                .type('cliente teste')

            cy.get('#email')
                .should('be.visible') 
                .type('cliente@example.com')

            cy.get('#password')
                .should('be.visible') 
                .type('12345')

            cy.get('#btnRegister')
                .click()

            cy.get('#errorMessageFirstName')
                .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')     
             
        })

        it('Validar cadastro completo',() => {
            cy.get('#user')
                .should('be.visible')
                .type('cliente teste')

            cy.get('#email')
                .should('be.visible') 
                .type('cliente@example.com')

            cy.get('#password')
                .should('be.visible') 
                .type('123456')

            cy.get('#btnRegister')
                .click()

            cy.get('#swal2-title')
                .should('have.text', 'Cadastro realizado!')
            
            cy.get('#swal2-html-container')
                .should('have.text', 'Bem-vindo cliente teste')    
             
        })
    
}) 