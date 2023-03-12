import { FilterItem } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('FilterItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<FilterItem />);
    cy.get('[ui5-filter-item]').should('exist');
  });

  cypressPassThroughTestsFactory(FilterItem);
});
