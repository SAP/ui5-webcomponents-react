import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { FilterItem } from './index';

describe('FilterItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<FilterItem />);
    cy.get('[ui5-filter-item]').should('exist');
  });

  cypressPassThroughTestsFactory(FilterItem);
});
