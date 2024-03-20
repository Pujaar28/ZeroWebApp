/// <reference types="cypress" />
describe('Working with payment bills',()=>{
    it('Checking payment bills function', () => {
        cy.visit('/login.html');
        cy.login('username', 'password');
        cy.get('#pay_bills_tab > a').click()
    
        cy.fixture('paymen').then((paymen) => {
        const randomPayee = paymen.listPayment[Math.floor(Math.random() * paymen.listPayment.length)];
        const randomAccount = paymen.Account[Math.floor(Math.random() * paymen.Account.length)];
        const randomAmount = Math.floor(Math.random()*1000)+1;
 
        cy.paymentBills(randomPayee, randomAccount);
        cy.get('#sp_amount').type(randomAmount)
        cy.get('#sp_date').type("2023-12-18",{ force: true })
        cy.get('#sp_description', { timeout: 20000 }).type("huahahahaha",{ force: true });
        cy.get('#pay_saved_payees').click()
     
    });     
    cy.get('#alert_container').should('contain.text',"The payment was successfully submitted.")
    });
});
    