import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { SideNavigationSubItem } from './index';

describe('SideNavigationSubItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<SideNavigationSubItem />);
    cy.get('[ui5-side-navigation-sub-item]').should('exist');
  });

  cypressPassThroughTestsFactory(SideNavigationSubItem);
});
