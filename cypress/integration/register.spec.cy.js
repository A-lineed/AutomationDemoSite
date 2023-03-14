/// <reference types="Cypress" />

describe('Home', () => {
    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/')
    })

    it('Fill in the fields and register', () => {
        cy.get('#email').type('alineedvania2018@outlook.com')
        cy.get('#enterimg').click()
        cy.get('input[type="text"][ng-model="FirstName"').type('Aline Edvania')
        cy.get('input[type="text"][ng-model="LastName"').type('de França')
        cy.get('textarea[ng-model="Adress"').type('Rua trezentos e vinte, nº 123 - Resende / RJ')
        cy.get('input[type="email"][ng-model="EmailAdress"').type('alineedvania2018@outlook.com')
        cy.get('input[type="tel"][ng-model="Phone"').type(5589526256)
        cy.get('input[type="radio"][value="FeMale"').check()
        cy.get('input[type="checkbox"][value="Movies"').check()
        cy.get('#Skills').select('Programming')
        cy.get('#countries').select('Select Country')
        cy.get('.select2-selection').type('United States of America{enter}')
        cy.get('#yearbox').select('2000')
        cy.get(':nth-child(11) > :nth-child(3) > .form-control').select('May')
        cy.get('#daybox').select('29')
        cy.get('#firstpassword').type(1234)
        cy.get('#secondpassword').type(1234)
        cy.get('#imagesrc')
            .should('not.have.value')
            .selectFile('cypress/fixtures/minha foto.jpeg')
        cy.get('#submitbtn').click()
    })
})