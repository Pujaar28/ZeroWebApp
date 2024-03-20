/// <reference types="cypress" />
describe('Invalid Login', () => {
    it('Checking login alert information if username or password alert wrong', () => {
        cy.visit('http://zero.webappsecurity.com/');
        cy.get('#signin_button').click()
        cy.get('.offset3 > a').should('contain.text',"Forgot your password ?")
        cy.get('.offset3 > a').click()
        cy.get('#user_email').should('exist').and('be.visible')
        cy.get('#user_email').should('be.enabled')
        cy.get('#user_email').type("adit@gmail.com")
        cy.get('.btn').click()
    });
  });