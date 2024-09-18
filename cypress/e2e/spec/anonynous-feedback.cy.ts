import { expect } from 'chai';

describe('Anonymous Feedback Suite', () => {
  it('notifies failure if submitting feedback fails', () => {
    cy.visit('https://anonymous-feedback-f9a50211e30c.herokuapp.com/');
    cy.get('#question').type('This is a test feedback, please delete it.');
    cy.intercept('POST', /.*anonymous-feedback.*herokuapp\.com/, {
      statusCode: 500,
    }).as('submitFeedbackHttp');
    cy.get('#form button').click();
    cy.wait('@submitFeedbackHttp');
    cy.get('#notification').should(
      'have.text',
      'Failed to submit Feedback. Try again.',
    );
    cy.getByTestSelector;
  });
  it('sends feedback', () => {
    cy.visit('https://anonymous-feedback-f9a50211e30c.herokuapp.com/');
    cy.get('#question').type('This is a test feedback, please delete it.');
    cy.intercept('POST', /.*anonymous-feedback.*herokuapp\.com/).as(
      'submitFeedbackHttp',
    );
    cy.get('#form button').click();
    cy.wait('@submitFeedbackHttp').then(({ response }) => {
      expect(response.statusCode).equals(200);
    });
    cy.get('#notification').should('have.text', 'Feedback submitted!');
  });
});
