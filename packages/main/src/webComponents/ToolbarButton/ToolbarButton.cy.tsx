import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ToolbarButton } from './index';

describe('ToolbarButton', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ToolbarButton />);
    cy.get('[ui5-toolbar-button]').should('exist');
  });

  cypressPassThroughTestsFactory(ToolbarButton);
});
