import { ThemeProvider } from '@ui5/webcomponents-react';
import { mount } from 'cypress/react18';

/**
 * Cypress mount with ThemeProvider
 */
Cypress.Commands.add('mount', (component, options) => {
  return mount(<ThemeProvider>{component}</ThemeProvider>, options);
});

/**
 * Component: TabContainer
 * Usage: Click a tab by its name
 */
Cypress.Commands.add('tabClickByText', (tabName, clickOptions = { force: true }) => {
  cy.get('[ui5-tabcontainer]').shadow().findByText(tabName).click(clickOptions);
});

/**
 * Component: TabContainer
 * Usage: Click the arrow down button for opening the popover if a sub-section is available
 */
Cypress.Commands.add('tabExpandClickByPos', (ariaPosinset: number, clickOptions = { force: true }) => {
  cy.get('[ui5-tabcontainer]').shadow().get(`[aria-posinset="${ariaPosinset}"] [ui5-button]`).click(clickOptions);
});
