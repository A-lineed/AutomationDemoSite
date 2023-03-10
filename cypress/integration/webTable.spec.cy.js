/// <reference types="Cypress" />

describe('WebTable', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/Register.html')
    })
    it('Visita WebTable', () => {
        cy.get('.nav > :nth-child(3) > a').click()
        cy.title('Web Table')
    })

    it('Seleciona quantidade de itens por página', () => {
        cy.get('.nav > :nth-child(3) > a').click()
        cy.title('Web Table')
        cy.get('.ui-grid-pager-row-count-picker > .ng-pristine').select('30')
    })

})