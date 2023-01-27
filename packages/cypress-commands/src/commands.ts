declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * Types a value into a ui5-webcomponent that offers a typeable input field.
       * @param {string} text
       * @param {Partial<TypeOptions>} [options]
       * @example cy.get(['ui5-input']).typeIntoUi5Input('Hello World');
       */
      typeIntoUi5Input(text: string, options?: Partial<TypeOptions>): Chainable<Element>;
      /**
       * Types a value into an ui5-webcomponent that offers a typeable input field with a delay.
       *
       * __Note:__ Use this command if you render a component that should show suggestions while typing (e.g. `ComboBox`) but the corresponding popover does not open.
       * This command waits for the appropriate delay (in ms), giving the web component time to define all necessary customElements and boot web components.
       * The delay time can vary from environment to environment.
       *
       * @param {string} text
       * @param {number} [delay=500]
       * @param {Partial<TypeOptions>} [options]
       * @example cy.get(['ui5-input']).typeIntoUi5Input('Hello World');
       */
      typeIntoUi5InputWithDelay(text: string, delay?: number, options?: Partial<TypeOptions>): Chainable<Element>;

      /**
       * Types a value into `ui5-textarea`
       * @param {string} text
       * @param {Partial<TypeOptions>} [options]
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

Cypress.Commands.add(
  'typeIntoUi5InputWithDelay',
  { prevSubject: 'element' },
  (subject, text, delay = 500, options = {}) => {
    cy.wrap(subject)
      .findShadowInput()
      .wait(delay)
      .type(text, { force: true, ...options });
  }
);

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
