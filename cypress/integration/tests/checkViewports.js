describe('Nav Menus', () => {
    context('720p resolution', () => {
      beforeEach(() => {
        // cy.viewport(1280, 720)
        cy.viewport('iphone-5')
        cy.visit("https://app.riamoneytransfer.com")
        cy.get('.boYfBb').click()
      })
  
      it('displays responsive menu', () => {
        cy.get('#gatsby-focus-wrapper > div > div > svg').should('be.visible')
        cy.get('#gatsby-focus-wrapper > div > div > svg').click()
        cy.get('#gatsby-focus-wrapper > div > div > div.NavbarStyle__LeftWrap-sc-fwd1ik-2.dcvFEA').should('not.be.visible')

        cy.get('#gatsby-focus-wrapper > div > div > div.NavbarStyle__MobileNavContainer-sc-fwd1ik-3.iRwwtx.on > ul').should('be.visible')
        cy.get('#gatsby-focus-wrapper > div > div > div.NavbarStyle__MobileNavContainer-sc-fwd1ik-3.iRwwtx.on > div.button-wrapper > a > button').should('be.visible')
        cy.get('#gatsby-focus-wrapper > div > div > svg').click()
      })

         
     
      


    })

})








 




    // context('iphone-5 resolution', () => {
    //   beforeEach(() => {
    //     // run these tests as if in a mobile browser
    //     // and ensure our responsive UI is correct
    //     cy.viewport('iphone-5')
    //   })
  
    //   it('displays mobile menu on click', () => {
    //     cy.get('.NavbarStyle__SectionContainer-sc-fwd1ik-1').should('not.be.visible')
    //     cy.get('.NavbarStyle__SectionContainer-sc-fwd1ik-1')
    //       .should('be.visible')
    //       .find('i.hamburger')
    //       .click()
  
    //     cy.get('ul.slideout-menu').should('be.visible')
    //   })
    // })
 