/// <reference types="Cypress" />

describe('WebTable', () => {
    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/Register.html')
    })
    it('Visit WebTable', () => {
        cy.get('.nav > :nth-child(3) > a').click()
        cy.title('Web Table')
    })

    it('Select number of items per page', () => {
        cy.get('.nav > :nth-child(3) > a').click()
        cy.title('Web Table')
        cy.get('.ui-grid-pager-row-count-picker > .ng-pristine').select('30')
    })

})