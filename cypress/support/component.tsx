import '@cypress/code-coverage/support';
import '@testing-library/cypress/add-commands';
import { ThemeProvider } from '@ui5/webcomponents-react';
import { mount } from 'cypress/react18';
import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', (component, options) => {
  return mount(<ThemeProvider>{component}</ThemeProvider>, options);
});
