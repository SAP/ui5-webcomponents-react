import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Menu } from './index';

describe('Menu', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Menu />);
    cy.get('[ui5-menu]').should('exist');
  });

  cypressPassThroughTestsFactory(Menu);
});
