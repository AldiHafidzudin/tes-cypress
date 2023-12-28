describe('template spec', () => {
  it('Login gagal', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('#user-name').type('standard_user') //by id
    cy.get('[data-test="password"]').type('dummy') //find lecator by sugested selector
    cy.get('.btn_action').click() //find lecator by class
    //assert berdasarkan alert yang tampil contain (mendekati) text yang diinput
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service')
  })

  it('Login berhasil', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('#user-name').type('standard_user') //by id
    cy.get('[data-test="password"]').type('secret_sauce') //find lecator by sugested selector
    cy.get('.btn_action').click() //find lecator by class
    //assert berdasarkan pindah url ke url yang diinputkan
    cy.url().should('include', 'www.saucedemo.com/v1/inventory.html')
  })
})