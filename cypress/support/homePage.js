class homePage {
    elements = {
        signInBtn: () => cy.get(".header.links").contains(/sign in/i),
        createAnAccount: () => cy.get(".header.links").contains(/create an account/i),
        searchProdut: () => cy.get("#search"),
        shoppingCart: () => cy.get(".minicart-wrapper"),
        womenNavBar: () => cy.get('#ui-id-4').contains(/women/i),
        womenTopsNavBar: () => cy.get('#ui-id-9').contains(/tops/i),
        womenPantsNavBar: () => cy.get('#ui-id-10').contains(/bottoms/i),
        menNavBar: () => cy.get('#ui-id-5').contains(/men/i),
        gearNavBar: () => cy.get('#ui-id-6').contains(/gear/i),
        trainingNavBar: () => cy.get('#ui-id-7').contains(/training/i),
        saleNavBar: () => cy.get('#ui-id-8').contains(/sale/i),
    }

    clickOnSignin() {
        this.elements.signInBtn().click()
    }
    clickOnCreateAnAccount() {
        this.elements.createAnAccount().click()
    }
}
module.exports = new homePage();