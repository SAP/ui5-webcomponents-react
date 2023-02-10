import { mount } from 'cypress/react18';
import { ThemeProvider } from '@ui5/webcomponents-react';

/**
 * Cypress mount with ThemeProvider
 */
Cypress.Commands.add('mount', (component, options) => {
  return mount(<ThemeProvider>{component}</ThemeProvider>, options);
});

// copied from https://github.com/cypress-io/cypress/discussions/21150#discussioncomment-2620947 and edited slightly
Cypress.Commands.add(
  'shouldNotBeClickable',
  { prevSubject: 'element' },
  (subject, done, { position, timeout = 100, ...clickOptions } = {}) => {
    cy.once('fail', (err) => {
      expect(err.message).to.include('`cy.click()` failed because this element');
      expect(err.message).to.include('is being covered by another element');
      done();
    });

    const chainable = position
      ? cy.wrap(subject).click(position, { timeout, ...clickOptions })
      : cy.wrap(subject).click({ timeout, ...clickOptions });

    chainable.then(() => done(new Error('Expected element NOT to be clickable, but click() succeeded')));
  }
);
