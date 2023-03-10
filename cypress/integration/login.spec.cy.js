/// <reference types="Cypress" />

describe('Login', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/')
    })
    it('Pular login', () => {
        cy.get('#btn2').click()
        cy.title('be.equal', ' Register')
    })
})