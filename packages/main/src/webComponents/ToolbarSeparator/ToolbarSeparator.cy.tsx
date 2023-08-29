import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ToolbarSeparator } from './index';

describe('ToolbarSeparator', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ToolbarSeparator />);
    cy.get('[ui5-toolbar-separator]').should('exist');
  });

  cypressPassThroughTestsFactory(ToolbarSeparator);
});
