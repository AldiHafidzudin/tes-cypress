describe('Choose Product', () => {

  beforeEach(() => {
    //Access Login
    cy.visit('/')
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('yongki@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Hartawan2')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
  
  })

  //Test 1
  it('Choose Poduct from Homepage', () => {
    cy.get('img[alt="Radiant Tee"]').click()
    cy.url().should('include', 'https://magento.softwaretestingboard.com/radiant-tee.html')
  })

  //Test 2
  it('Choose Poduct from Hovering Navbar Level 1', () => {
    cy.get('#ui-id-4').trigger('mouseover')
    cy.get('#ui-id-9').click()
    cy.url().should('include', 'https://magento.softwaretestingboard.com/women/tops-women.html')
    cy.get('img[alt="Breathe-Easy Tank"]').click()
    cy.url().should('include', 'https://magento.softwaretestingboard.com/breathe-easy-tank.html')

  })

  //Test 3
  it('Choose Poduct from Hovering Navbar Level 2', () => {
    cy.get('#ui-id-4').trigger('mouseover')
    cy.get('#ui-id-9').trigger('mouseover')
    cy.get('#ui-id-11').click()
    cy.url().should('include', 'https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html')
    cy.get('img[alt="Olivia 1/4 Zip Light Jacket"]').click()
    cy.url().should('include', 'https://magento.softwaretestingboard.com/olivia-1-4-zip-light-jacket.html')
  })

  //Test 4
  it('Add Product to Whistlist', () => {
    cy.get('#ui-id-4').trigger('mouseover')
    cy.get('#ui-id-9').trigger('mouseover')
    cy.get('#ui-id-11').click()
    cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.get('.product-addto-links > .towishlist').click()
  })
  
})