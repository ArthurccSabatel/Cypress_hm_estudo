// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//<reference types="cypress" />

Cypress.Commands.add('accessLoginPage',() => {
    cy.visit('/')
    cy.viewport(1920, 1080)
        
    cy.get('#top_header')
        .should('be.visible')

    cy.get('.fa-user')
        .click()

})