/// <reference types="Cypress" />

describe('Alerts', () => {
    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get(':nth-child(4) > .dropdown-menu > :nth-child(1) > a').click()
    })

    it('Validates a simple alert', () => {
        cy.get('.active > .analystic').click()
        cy.get('#OKTab > .btn').click()
        cy.on('window:alert', alert => {
            expect(alert).to.be.equal('I am an alert box!')
        })
    })

    it('Validate alert with confirmation', () => {
        cy.get(':nth-child(2) > .analystic').click()
        cy.get('#CancelTab > .btn').click()
        cy.on('window:confirm', confirm => {
            expect(confirm).to.be.equal('OK')
        })
    })

})