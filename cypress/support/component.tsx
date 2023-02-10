import '@cypress/code-coverage/support';
import '@testing-library/cypress/add-commands';
import { mount } from 'cypress/react18';
import './commands';
import '@ui5/webcomponents-cypress-commands';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Cypress mount with ThemeProvider
       */
      mount: typeof mount;

      /**
       * Assert that the subject is not clickable.
       *
       * @param done The Mocha `done` callback.
       * @param [clickOptions] Options passed to `.click()`. By default, the timeout is 100 ms.
       *
       * @example
       it("should not be clickable", (done) => {
         cy.get('[ui5-button]').shouldNotBeClickable(done);
       });
       */
      shouldNotBeClickable(
        done: Mocha.Done,
        clickOptions?: Partial<Cypress.ClickOptions> & {
          position?: Cypress.PositionType;
        }
      ): Chainable<Element>;
    }
  }
}

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;

Cypress.on(
  'uncaught:exception',
  /**
   *
   * @param err
   * @returns {boolean}
   */ (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
      return false;
    }
  }
);
