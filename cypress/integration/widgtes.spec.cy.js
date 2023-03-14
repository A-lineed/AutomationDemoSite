/// <reference types="Cypress" />

describe('Widgtes', () => {
    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get(':nth-child(5) > .dropdown-menu > :nth-child(1) > a').click()
    })

    it('Expands the collapsible group 1', () => {
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a > b').click()
        cy.get('#collapse1 > .panel-body').should('be.visible')
    })
    it('Expands the collapsible group 2', () => {
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a > b').click()
        cy.get('#collapse2 > .panel-body').should('be.visible')
    })
    it('Expands the collapsible group 3', () => {
        cy.get(':nth-child(3) > .panel-heading > .panel-title > a > b').click()
        cy.get('#collapse3 > .panel-body').should('be.visible')
    })
    it('Expands the collapsible group 4', () => {
        cy.get(':nth-child(4) > .panel-heading > .panel-title > a > b').click()
        cy.get('#collapse4 > .panel-body').should('be.visible')
    })

})
describe('AutoComplete', () => {

    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get(':nth-child(5) > .dropdown-menu > :nth-child(2) > a').click()
    })

    it('Tests autocomplete functionality', () => {
        cy.get('#searchbox')
            .type('Brazil{downArrow}{enter}', { delay: 100 })
    })
})

describe.only('Datepicker', () => {
    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get(':nth-child(5) > .dropdown-menu > :nth-child(3) > a').click()
    })

    it('Open date picker', () => {
        cy.get('input#datepicker1').click()
        cy.get('div#ui-datepicker-div').should('be.visible');
    })

    it.only('Select date', () => {
        cy.get('input#datepicker1').click()
        cy.selectYear(2022)
        cy.selectMonth('January')
        cy.selectDay(17)
    })
})