import poRegister from "../../support/page-object/poRegister";

describe('Register with 3 Test Cases', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  //Positive
  //Case 1
  it('Berhasil registrasi', () => {
    cy.contains('Create an Account').should('be.visible').click()

    // Generate random string
    const firstName = poRegister.generateRandomName(8);
    const lastName = poRegister.generateRandomName(8);
    const email = lastName + '@gmail.com';
    const password = firstName + '123';

    cy.get('#firstname').type(firstName)
    cy.get('#lastname').type(lastName)
    cy.get('#email_address').type(email)
    cy.get('#password').type(password)
    cy.get('#password-confirmation').type(password)
    cy.get('.action.submit.primary').click()
    
    //assert berdasarkan nama user yang tampil
    cy.contains(firstName).should('be.visible')

    // Save the credentials to a JSON file
    cy.writeFile('cypress/fixtures/randomRegister.json', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });
  })
  
  //Negative
  //Case 2
  it('Registrasi tanpa mengisi field', () => {
    cy.contains('Create an Account').click()
    cy.get('button[title=\'Create an Account\'] span').click()
    //assert berdasarkan isi alert yang tampil
    cy.contains('This is a required field.').should('be.visible')
  })

  //Case 3
  it('User create account with invalid format email', () => {
    cy.contains('Create an Account').click()

    // Generate random string
    const firstName = poRegister.generateRandomName(8);
    const lastName = poRegister.generateRandomName(8);
    const password = poRegister.generateRandomName(8);

    cy.get('#firstname').type(firstName)
    cy.get('#lastname').type(lastName)
    cy.get('#email_address').type('dummygmail')
    cy.get('#password').type(password)
    cy.get('#password-confirmation').type(password)
    cy.get('button[title=\'Create an Account\'] span').click()
    //assert berdasarkan alert gagal yang tampil
    cy.contains('Please enter a valid email address (Ex: johndoe@domain.com).').should('be.visible')
  })
})