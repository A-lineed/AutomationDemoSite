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

    it('Realiza login com usuário inválido', () => {
        cy.get('#btn1').click()
        cy.title('be.equal', ' SignIn')
        cy.get('input[type="Text"][ng-model="Email"]').type('aline@gmail.com')
        cy.get('input[type="Password"][ng-model="Password"]').type('1234')
        cy.get('#enterbtn').click()
        cy.get('#errormsg').should('exist')
    })
})