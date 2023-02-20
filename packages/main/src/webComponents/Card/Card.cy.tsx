import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Card } from './index';

describe('Card', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Card />);
    cy.get('[ui5-card]').should('exist');
  });

  cypressPassThroughTestsFactory(Card);
});
