import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ToolbarSelectOption } from './index';

describe('ToolbarSelectOption', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ToolbarSelectOption />);
    cy.get('[ui5-toolbar-select-option]').should('exist');
  });

  cypressPassThroughTestsFactory(ToolbarSelectOption);
});
