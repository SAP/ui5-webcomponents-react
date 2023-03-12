import { Card } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Card', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Card />);
    cy.get('[ui5-card]').should('exist');
  });

  cypressPassThroughTestsFactory(Card);
});
