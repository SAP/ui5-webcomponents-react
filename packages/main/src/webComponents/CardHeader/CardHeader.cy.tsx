import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { CardHeader } from './index';

describe('CardHeader', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<CardHeader />);
    cy.get('[ui5-card-header]').should('exist');
  });

  cypressPassThroughTestsFactory(CardHeader);
});
