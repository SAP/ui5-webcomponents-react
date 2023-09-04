import { ToolbarSpacerV2 } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('ToolbarSpacerV2', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ToolbarSpacerV2 />);
    cy.get('[ui5-toolbar-spacer]').should('exist');
  });

  cypressPassThroughTestsFactory(ToolbarSpacerV2);
});
