import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ToolbarSpacer } from './index';

describe('ToolbarSpacer', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ToolbarSpacer />);
    cy.get('[ui5-toolbar-spacer]').should('exist');
  });

  cypressPassThroughTestsFactory(ToolbarSpacer);
});
