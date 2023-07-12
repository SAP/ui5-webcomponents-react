import 'cypress-real-events';
import '@cypress/code-coverage/support';
import '@testing-library/cypress/add-commands';
import './commands';
import '../../packages/cypress-commands/src/index.js';
import '../../packages/main/dist/Assets.js';

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
