import ProcessToCheckOut from "../../support/page-object/ProcessToCheckOut";
import randomInput from "../../support/page-object/randomInput";

describe('Process to Checkout on Magento', () => {
    beforeEach(() => {
        //Access URL 
        cy.visit('/') 
    })

    //Case 1
    // pertama kali checkout product
    it('First time checkout Product', () => { //Note jika belum pernah melakukan checkout dan ada product di chart
        ProcessToCheckOut.SignIn()

        //read json file fixture
        cy.readFile('cypress/fixtures/validAkun.json').then((akun) => {
        ProcessToCheckOut.InputEmail(akun.email)
        ProcessToCheckOut.InputPass(akun.password)
        ProcessToCheckOut.BtnLogin()
        cy.wait(6000)
        })

        ProcessToCheckOut.BtnChart()
        ProcessToCheckOut.BtnCheckout1()
        cy.wait(6000)

        // Generate random string
        const company = 'PT. ' + randomInput.generateRandomString(8);
        const add1 = 'Jl. ' + randomInput.generateRandomString(8);
        const add2 = 'RT ' + randomInput.generateRandomString(8);
        const add3 = 'RW ' + randomInput.generateRandomString(8);
        const city = 'Kota ' + randomInput.generateRandomString(8);
        const Post = randomInput.generateRandomInt(6);
        const Phone = randomInput.generateRandomInt(12);

        ProcessToCheckOut.Fill_Comp(company)
        ProcessToCheckOut.Fill_Add1(add1)
        ProcessToCheckOut.Fill_Add2(add2)
        ProcessToCheckOut.Fill_Add3(add3)
        ProcessToCheckOut.Fill_City(city)
        ProcessToCheckOut.Fill_Reg1('Alabama')
        ProcessToCheckOut.Fill_Post(Post)
        ProcessToCheckOut.Fill_Reg2('United States')
        ProcessToCheckOut.Fill_Phone(Phone)
        ProcessToCheckOut.Radio_Btn1()
        ProcessToCheckOut.Next_Btn()
        cy.wait(6000)
        ProcessToCheckOut.Pay_Btn()

        //assert berdasarkan notifikasi yang tampil
        cy.contains('Thank you for your purchase!').should('be.visible')
    })

    //Case 2
    //sudah pernah melakukan checkout
    it('Have checked out before', () => { 
        ProcessToCheckOut.SignIn()

        //read json file fixture
        cy.readFile('cypress/fixtures/validAkun.json').then((akun) => {
            ProcessToCheckOut.InputEmail(akun.email)
            ProcessToCheckOut.InputPass(akun.password)
            ProcessToCheckOut.BtnLogin()
            cy.wait(6000)
            })

        ProcessToCheckOut.BtnChart()
        ProcessToCheckOut.BtnCheckout1()
        cy.wait(10000)
        ProcessToCheckOut.Radio_Btn1()
        ProcessToCheckOut.Next_Btn()
        cy.wait(10000)
        ProcessToCheckOut.Pay_Btn()
        
        //assert berdasarkan notifikasi yang tampil
        cy.contains('Thank you for your purchase!').should('be.visible')
    })
})
