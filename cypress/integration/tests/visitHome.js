const addContext = require('mochawesome/addContext');

// Suite de pruebas

// context('Primer conjunto de casos de pruebas', ()=>{})
// cy.get('[href="/login"]').click()
// cy.get('[name="session[username_or_email]"]').should('be visited')

Cypress.on("test:after:run", (test, runnable) => {
    if (test.state === "failed") {
        const imageUrl = "?";
        addContext({ test }, imageUrl);
    }
});

describe('Test in Home Page', ()=>{
    // Caso 1
    // it es similar a describe
    it('Enter the Web Site', ()=>{

        cy.viewport('iphone-x')
        cy.visit("https://app.riamoneytransfer.com")
    })
    
    // Caso 2
    it('Cookies accept', ()=>{
        cy.get('.boYfBb').click()
    })
    
    it('Test Page in Iphone-X', ()=>{
        cy.viewport('iphone-x')
        cy.visit("https://app.riamoneytransfer.com")
        
    })

})
describe('Primer conjunto de casos de pruebas', ()=>{
    // Caso 1
    // it es similar a describe
    it('Ingresar a la Web de Ria', ()=>{
        //step 1
        //step ...

        cy.visit("https://app.riamoneytransfer.com/en-us/track-a-transfer")
    })
    
    // Caso 2
    it('Aceptar cookies', ()=>{
        cy.get('.boYfBb').click()
    })

})
