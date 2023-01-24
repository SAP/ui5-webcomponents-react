import { mount } from 'cypress/react18';
import { ThemeProvider } from '@ui5/webcomponents-react';

/**
 * Cypress mount with ThemeProvider
 */
Cypress.Commands.add('mount', (component, options) => {
  return mount(<ThemeProvider>{component}</ThemeProvider>, options);
});
