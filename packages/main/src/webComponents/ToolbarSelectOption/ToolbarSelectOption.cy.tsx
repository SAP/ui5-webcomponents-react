import { ToolbarSelectOption } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('ToolbarSelectOption', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ToolbarSelectOption />);
    cy.get('[ui5-toolbar-select-option]').should('exist');
  });

  cypressPassThroughTestsFactory(ToolbarSelectOption);
});
