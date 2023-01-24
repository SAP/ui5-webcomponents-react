import '@cypress/code-coverage/support';
import '@testing-library/cypress/add-commands';
import { ThemeProvider } from '@ui5/webcomponents-react';
import { mount } from 'cypress/react18';
import './commands';
import '../../packages/cypress-commands';

declare global {
  namespace Cypress {
    interface Chainable {
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
