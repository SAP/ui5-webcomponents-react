import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Badge } from './index';

describe('Badge', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Badge />);
    cy.get('[ui5-badge]').should('exist');
  });

  cypressPassThroughTestsFactory(Badge);
});
