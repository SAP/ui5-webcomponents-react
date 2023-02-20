import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { FilterItemOption } from './index';

describe('FilterItemOption', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<FilterItemOption />);
    cy.get('[ui5-filter-item-option]').should('exist');
  });

  cypressPassThroughTestsFactory(FilterItemOption);
});
