describe('Interactions', () => {

    beforeEach(() => {
        cy.visit('/')
    })
    it('Digitar em um campo ', () => {

        cy.get('.form-control')
            .type('example@gmail.com')        
    })

    // Click normal 
    it("Click",() => {

        cy.get('.fa-user')
            .click()

        // Click duplo 
        cy.get('.fa-user')
            .dblclick()

        // Click com botão direito 
        cy.get('.fa-user')
            .rightclick()


        // Click por coordenada 
        cy.get('.fa-user')
            .click(100, 100, {force: true})
    })

    it("Apertar 'enter'",() => {

        cy.get('.form-control')
            .type('example@gmail.com{enter}')
    })

    it("Select",()=> {
        
        cy.get('.footer_one_widget')
            .contains('Checkout View Two')
            .click()

            cy.get('#country')
                .select('Colombia')

    })

    it("Checkbox e radio button",()=> {
        
        cy.get('.footer_one_widget')
            .contains('Checkout View One')
            .click()

            //checkbox
            cy.get('#materialUnchecked')
                .check()
                .uncheck()

            //radio
            cy.get('#css')
                .check()
            cy.get('#javascript')
                .check()
             
    })

    
}) 