
// Suite de pruebas
describe('Test to track a tranfer', ()=>{
    // Caso 1
    // it es similar a describe
    // Caso 2
    // it('Accept cookies', ()=>{
    //     cy.get('.boYfBb').click()
    // })
    // it('Track a transfer using URL', ()=>{
    it('Track a transfer by entering the order', ()=>{
        //step 1
        //step ...
        cy.visit("https://app.riamoneytransfer.com/en-us/track-a-transfer")
        cy.get('.boYfBb').click()
    })
    // it('Accept Cookies', ()=>{
    // })

    it('entering the order', ()=>{
    // it.on ly('entering the order', ()=>{
        
        cy.get('input')
            .type('US752044216', { force: true })
            .type('{enter}')
        
        cy.get('.details-handler')
            .click()
    })
    
    
    // it('Track a transfer by entering the order', ()=>{

})

