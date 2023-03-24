import { Badge } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Badge', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Badge />);
    cy.get('[ui5-badge]').should('exist');
  });

  cypressPassThroughTestsFactory(Badge);
});
