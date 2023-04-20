import { CardHeader } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('CardHeader', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<CardHeader />);
    cy.get('[ui5-card-header]').should('exist');
  });

  cypressPassThroughTestsFactory(CardHeader);
});
