/// <reference types="cypress" />

// Working with Navigation Test Suite
describe('Working with Navigation', () => {
  beforeEach(() => {
    // Common setup before each test: visit login page and log in
    cy.visit('/login.html');
    cy.login('username', 'password');
  });

  // Test: Should navigate from login to account summary
  it('Should navigate from login to account summary', () => {
    cy.url().should('include', 'bank/account-summary.html');
  });

  // Test: Should navigate from account summary to account activity
  it('Should navigate from account summary to account activity', () => {
    cy.get('#account_activity_tab > a').click();
    cy.url().should('include', '/bank/account-activity.html');
  });

  // Test: Should navigate from account activity to transfer funds
  it('Should navigate from account activity to transfer funds', () => {
    cy.get('#transfer_funds_tab > a').click();
    cy.url().should('include', '/bank/transfer-funds.html');
  });

  it('Should navigate from transfer funds to pay bills', () => {
    cy.get('#pay_bills_tab > a').click()
    cy.url().should('include', '/bank/pay-bills.html');
  });

  it('Should navigate from pay bills to my money map', () => {
    cy.get('#money_map_tab > a').click()
    cy.url().should('include', 'bank/money-map.html');
  });

  it('Should navigate from my money map to online stamement', () => {
    cy.get('#online_statements_tab > a').click()
    cy.url().should('include', '/bank/online-statements.html');
  });
  
});
