describe('Get elements', () => {
    
    beforeEach(() => {
        cy.visit('/')
    })
    it('Encontrar elementos', () => {
        //get()
        cy.get('.header-logo')

        //as() - alias
        cy.get('#top_header').as('cabeça')

        //contains()
        cy.get('#top_header')
            .contains('Login')

        //find ()
        cy.get('@cabeça')
            .find('.fa-user')
        
    })
}) 