import { SideNavigationItem } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('SideNavigationItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<SideNavigationItem />);
    cy.get('[ui5-side-navigation-item]').should('exist');
  });

  cypressPassThroughTestsFactory(SideNavigationItem);
});
