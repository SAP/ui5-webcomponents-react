import { RatingIndicator } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('RatingIndicator', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<RatingIndicator />);
    cy.get('[ui5-rating-indicator]').should('exist');
  });

  cypressPassThroughTestsFactory(RatingIndicator);
});
