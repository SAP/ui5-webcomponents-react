import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { SortItem } from './index';

describe('SortItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<SortItem />);
    cy.get('[ui5-sort-item]').should('exist');
  });

  cypressPassThroughTestsFactory(SortItem);
});
