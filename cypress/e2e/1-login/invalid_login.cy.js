/// <reference types="cypress" />
describe('Invalid Login', () => {
    it('Checking login alert information if username or password alert wrong', () => {
        cy.visit('http://zero.webappsecurity.com/');
        cy.get('#signin_button').click()
        cy.url().should('include',"login.html")
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password1")
        cy.get('.btn').click()
        cy.get('.alert').should('contain.text',"Login and/or password are wrong.")
    });
  });