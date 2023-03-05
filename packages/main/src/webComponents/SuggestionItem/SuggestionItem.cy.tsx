import { SuggestionItem } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('SuggestionItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<SuggestionItem />);
    cy.get('[ui5-suggestion-item]').should('exist');
  });

  cypressPassThroughTestsFactory(SuggestionItem);
});
