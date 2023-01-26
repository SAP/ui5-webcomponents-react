import '@cypress/code-coverage/support';
import '@testing-library/cypress/add-commands';
import './commands';
import '@ui5/webcomponents-cypress-commands';

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
