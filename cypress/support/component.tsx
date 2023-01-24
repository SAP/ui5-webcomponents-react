import '@cypress/code-coverage/support';
import '@testing-library/cypress/add-commands';
import { mount } from 'cypress/react18';
import { ThemeProvider } from '@ui5/webcomponents-react';
import './commands';
import '../../packages/cypress-commands/src';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Cypress mount with ThemeProvider
       */
      mount: typeof mount;
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

Cypress.Commands.add('mount', (component, options) => {
  return mount(<ThemeProvider>{component}</ThemeProvider>, options);
});
