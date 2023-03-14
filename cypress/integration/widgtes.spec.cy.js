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

describe('Datepicker1', () => {
    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get(':nth-child(5) > .dropdown-menu > :nth-child(3) > a').click()
    })

    it('Open date picker', () => {
        cy.get('input#datepicker1').click()
        cy.get('div#ui-datepicker-div').should('be.visible');
    })

    it('Select date', () => {
        cy.get('input#datepicker1').click()
        cy.selectYear(2022)
        cy.selectMonth('January')
        cy.selectDay(17)
    })
})

describe('Datepicker2', () => {
    beforeEach(() => {
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get(':nth-child(5) > .dropdown-menu > :nth-child(3) > a').click()
    })

    it('Open date picker', () => {
        cy.get('input#datepicker2').click()
        cy.get('div.datepick-month').should('be.visible');
    })
    it('Clear data', () => {
        cy.get('input#datepicker2').click()
        cy.get('div.datepick-month-header select.datepick-month-year[title="Change the month"]').select('February')
        cy.get('div.datepick-month-header select[title="Change the year"]').select('2023')
        cy.get('div.datepick-ctrl a[title="Clear all the dates"]').click()
    })

    it('Close picker', () => {
        cy.get('input#datepicker2').click()
        cy.get('div.datepick-ctrl a[title="Close the datepicker"]').click()
    })

})
