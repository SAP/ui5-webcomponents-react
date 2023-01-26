import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { SuggestionGroupItem } from './index';

describe('SuggestionGroupItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<SuggestionGroupItem />);
    cy.get('[ui5-suggestion-group-item]').should('exist');
  });

  cypressPassThroughTestsFactory(SuggestionGroupItem);
});
