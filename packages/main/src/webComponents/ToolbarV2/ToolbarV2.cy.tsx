import { ToolbarV2 } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('ToolbarV2', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ToolbarV2 />);
    cy.get('[ui5-toolbar]').should('exist');
  });

  cypressPassThroughTestsFactory(ToolbarV2);
});
