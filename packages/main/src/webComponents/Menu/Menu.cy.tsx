import { Menu } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Menu', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Menu />);
    cy.get('[ui5-menu]').should('exist');
  });

  cypressPassThroughTestsFactory(Menu);
});
