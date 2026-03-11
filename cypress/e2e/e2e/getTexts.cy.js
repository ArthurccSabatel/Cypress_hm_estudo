describe('Get Texts', () => {

    beforeEach(() => {
        cy.visit('/')
    })
    it('Obter textos de um elemento ', () => {

        cy.get('.top_header_left > p')
            .then((element) =>{
                console.log(element.text())
                element.hide()
            })
        
    })
}) 