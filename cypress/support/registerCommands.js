Cypress.Commands.add('accessRegisterPage', () => {
    cy.visit('/register')
})


Cypress.Commands.add('register', () => {
    cy.get('#btnRegister')
        .click()
})

Cypress.Commands.add('fillName', (name) => {
    cy.get('#user')
        .should('be.visible')
        .type(name)
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get('#email')
        .should('be.visible')
        .type(email)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get('#password')
        .should('be.visible')
        .type(password)
})

Cypress.Commands.add('verifyMessage', (Message) => {
    cy.get('#errorMessageFirstName')
        .should('have.text', Message)

})

Cypress.Commands.add('successPopup', (name) => {
    cy.get('#swal2-title')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('have.text', `Bem-vindo ${name}`)

})

Cypress.Commands.add('verifyEmpty', (id) => {
    cy.get(id)
        .should('be.visible')
        .should('have.text','')
})
        