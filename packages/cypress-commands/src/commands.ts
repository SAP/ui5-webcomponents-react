declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * Types a value into `ui5-input`
       * @param text='Hello World'
       * @example cy.get(['ui5-input']).typeIntoUi5Input('Hello World');
       */
      typeIntoUi5Input(text: string, options?: Partial<TypeOptions>): Chainable<Element>;

      /**
       * Types a value into `ui5-textarea`
       * @param {string} text
       * @example cy.get(['ui5-textarea]).typeIntoUi5TextArea('Hello World');
       */
      typeIntoUi5TextArea(text: string, options?: Partial<TypeOptions>): Chainable<Element>;

      /**
       * Toggles the state of a `ui5-checkbox`
       * @example cy.get('[ui5-checkbox]').toggleUi5Checkbox();
       */
      toggleUi5Checkbox(): Chainable<Element>;

      /**
       * Toggles the state of a `ui5-switch`
       * @example cy.get('[ui5-switch]').toggleUi5Switch();
       */
      toggleUi5Switch(): Chainable<Element>;

      /**
       * Click on a `ui5-radio-button`
       * @example cy.get('[ui5-radio-button]').clickUi5RadioButton();
       */
      clickUi5RadioButton(): Chainable<Element>;
    }
  }
}

Cypress.Commands.add('typeIntoUi5Input', { prevSubject: 'element' }, (subject, text, options = {}) => {
  cy.wrap(subject)
    .findShadowInput()
    .type(text, { force: true, ...options });
});

Cypress.Commands.add('typeIntoUi5TextArea', { prevSubject: 'element' }, (subject, text, options = {}) => {
  cy.wrap(subject)
    .shadow()
    .find('textarea')
    .type(text, { force: true, ...options });
});

Cypress.Commands.add('toggleUi5Checkbox', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).findShadowInput().click({ force: true });
});

Cypress.Commands.add('toggleUi5Switch', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).findShadowInput().click({ force: true });
});

Cypress.Commands.add('clickUi5RadioButton', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).findShadowInput().click({ force: true });
});

export {};
