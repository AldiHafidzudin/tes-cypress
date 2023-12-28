cypress.Commands.add('login', (email, password) => {

})

cypress.Commands.add('register', (firstName, lastName, email, password) => {
    cy.get('#firstname').type(firstName)
    cy.get('#lastname').type(lastName)
    cy.get('#email_address').type(email)
    cy.get('#password').type(password)
    cy.get('#password-confirmation').type(password)
    cy.get('.action.submit.primary').click()
})

  