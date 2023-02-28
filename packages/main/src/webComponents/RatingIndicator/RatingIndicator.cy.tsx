import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { RatingIndicator } from './index';

describe('RatingIndicator', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<RatingIndicator />);
    cy.get('[ui5-rating-indicator]').should('exist');
  });

  cypressPassThroughTestsFactory(RatingIndicator);
});
