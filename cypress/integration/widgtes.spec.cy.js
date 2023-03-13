/// <reference types="Cypress" />

describe('Widgtes', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get(':nth-child(5) > .dropdown-menu > :nth-child(1) > a').click()
    })

    it('Expande o grupo recolhivel 1', () => {
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a > b').click()
        cy.get('#collapse1 > .panel-body').should('be.visible')
    })
    it('Expande o grupo recolhivel 2', () => {
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a > b').click()
        cy.get('#collapse2 > .panel-body').should('be.visible')
    })
    it('Expande o grupo recolhivel 3', () => {
        cy.get(':nth-child(3) > .panel-heading > .panel-title > a > b').click()
        cy.get('#collapse3 > .panel-body').should('be.visible')
    })
    it('Expande o grupo recolhivel 4', () => {
        cy.get(':nth-child(4) > .panel-heading > .panel-title > a > b').click()
        cy.get('#collapse4 > .panel-body').should('be.visible')
    })

})
describe.only('AutoComplete', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get(':nth-child(5) > .dropdown-menu > :nth-child(2) > a').click()
    })

    it('Expande o grupo recolhivel 1', () => {
        cy.get('#searchbox')
            .type('Brazil{downArrow}{enter}', { delay: 100 })
    })
})