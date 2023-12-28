//const randomRegister = require('../../../fixtures/randomRegister.json')
//const validRegister = require('../../../fixtures/validRegister.json')

describe('Tes Fitur Login', () => {
    beforeEach(() => {
        cy.visit('/')
        
    })

    //POSITIVE
    //Case 1
    it('Login Sukses', () => {
        //read json file fixture
        cy.readFile('cypress/fixtures/randomRegister.json').then((random) => {
            // login berhasil
            cy.contains('Sign In').click()
            cy.get('#email').type(random.email)
            cy.get('#pass').type(random.password)
            cy.get('#send2').click()
            //assert berdasarkan nama depan dan nama belakang tampil pada kanan atas halaman
            cy.contains(random.firstName + ' ' + random.lastName).should('be.visible')
        })
        
    })

    //POSITIVE
    //Case 2
    it('Login Gagal - Field tidak terisi', () => {
        // gagal login kosong
        cy.contains('Sign In').click()
        cy.get('#send2').click()
        //assert berdasarkan alert yang tampil
        cy.get('[data-hasrequired="* Required Fields"]').should('be.visible')
    })

    //Case 3
    it('Login Gagal - email tidak terdaftar', () => {
        // gagal login tidak terdaftar
        cy.contains('Sign In').click()
        cy.get('#email').type('dummy@domain.com')
        cy.get('#pass').type('dummy')
        cy.get('#send2').click()
        //assert berdasarkan alert yang tampil
        cy.get('[data-ui-id="message-error"]').should('be.visible')
    })

    //Case 4
    it.only('Login Gagal - format email tidak sesuai', () => {
        // gagal login salah format --> sering gagal test karena popup muncul di skip atau only test
        cy.contains('Sign In').click()
        cy.get('#email').type('dummygmail')
        cy.get('#pass').type('dummy')
        cy.get('#send2').click()
        cy.contains('Please enter a valid email address (Ex: johndoe@domain.com).').should('be.visible')
    })  

    //Case 5
    it('Forgot Password', () => {
        cy.readFile('cypress/fixtures/randomRegister.json').then((random) => {
        // reset password
        cy.contains('Sign In').click()
        cy.contains('Forgot Your Password?').click()
        cy.get('#email_address').type(random.email)
        cy.contains('Reset My Password').click()
        cy.contains('If there is an account associated with ' + random.email + ' you will receive an email with a link to reset your password.').should('be.visible')
        })
    })

    //Case 6
    it('Forgot Password - format email salah', () => {
        // gagal reset password
        cy.contains('Sign In').click()
        cy.contains('Forgot Your Password?').click()
        cy.get('#email_address').type('dummy')
        cy.contains('Reset My Password').click()
        cy.contains('Please enter a valid email address (Ex: johndoe@domain.com).').should('be.visible')
    })   
})

//tambahkan only pada it untuk pengujian 1 test case saja