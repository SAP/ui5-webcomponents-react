import { ToolbarSeparatorV2 } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('ToolbarSeparatorV2', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ToolbarSeparatorV2 />);
    cy.get('[ui5-toolbar-separator]').should('exist');
  });

  cypressPassThroughTestsFactory(ToolbarSeparatorV2);
});
