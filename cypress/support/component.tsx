import '@cypress/code-coverage/support';
import '@testing-library/cypress/add-commands';
import { mount } from 'cypress/react18';
import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Cypress mount with ThemeProvider
       */
      mount: typeof mount;
      /**
       * Component: TabContainer
       * Usage: Click a tab by its name
       *
       * @param {string} tabName - tab to be clicked
       * @param {Object} [clickOptions] - click options, default: {force: true}
       */
      tabClickByText(tabName: string, clickOptions?: Record<string, any>);
      /**
       * Component: TabContainer
       * Usage: Click the arrow down button for opening the popover if a subsection is available
       *
       * @param {number} ariaPosinset - arrow down to be clicked
       * @param {Object} [clickOptions] - click options, default: {force: true}
       */
      tabExpandClickByPos(ariaPosinset: number, clickOptions?: Record<string, any>);
    }
  }
}
