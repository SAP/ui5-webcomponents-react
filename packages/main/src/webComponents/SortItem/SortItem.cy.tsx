import { SortItem } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('SortItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<SortItem />);
    cy.get('[ui5-sort-item]').should('exist');
  });

  cypressPassThroughTestsFactory(SortItem);
});
