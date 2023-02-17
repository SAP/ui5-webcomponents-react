import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { MenuItem } from './index';

describe('MenuItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<MenuItem />);
    cy.get('[ui5-menu-item]').should('exist');
  });

  cypressPassThroughTestsFactory(MenuItem);
});
