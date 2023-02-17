import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { SideNavigationItem } from './index';

describe('SideNavigationItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<SideNavigationItem />);
    cy.get('[ui5-side-navigation-item]').should('exist');
  });

  cypressPassThroughTestsFactory(SideNavigationItem);
});
