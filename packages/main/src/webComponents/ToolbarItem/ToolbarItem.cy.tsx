import { ToolbarItem } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('ToolbarItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ToolbarItem />);
    cy.get('[ui5-tb-item]').should('exist');
  });

  cypressPassThroughTestsFactory(ToolbarItem);
});
