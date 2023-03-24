import { SuggestionGroupItem } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('SuggestionGroupItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<SuggestionGroupItem />);
    cy.get('[ui5-suggestion-group-item]').should('exist');
  });

  cypressPassThroughTestsFactory(SuggestionGroupItem);
});
