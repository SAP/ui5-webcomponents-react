import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ToolbarItem } from './index';

describe('ToolbarItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ToolbarItem />);
    cy.get('[]').should('exist');
  });

  cypressPassThroughTestsFactory(ToolbarItem);
});
