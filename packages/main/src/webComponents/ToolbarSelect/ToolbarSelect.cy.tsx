import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ToolbarSelect } from './index';

describe('ToolbarSelect', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ToolbarSelect />);
    cy.get('[ui5-toolbar-select]').should('exist');
  });

  cypressPassThroughTestsFactory(ToolbarSelect);
});
