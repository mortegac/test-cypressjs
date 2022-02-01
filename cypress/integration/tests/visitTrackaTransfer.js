describe('Test to track a tranfer', ()=>{
    it('Track a transfer by entering the order', ()=>{
        cy.visit("https://app.riamoneytransfer.com/en-us/track-a-transfer")
        cy.get('.boYfBb').click()
    })

    it('entering the order', ()=>{
        cy.get('input')
            .type('US752044216', { force: true })
            .type('{enter}')
        
        cy.get('.details-handler')
            .click()
    })
})

