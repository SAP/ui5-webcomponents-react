import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Token } from './index';

describe('Token', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Token />);
    cy.get('[ui5-token]').should('exist');
  });

  cypressPassThroughTestsFactory(Token);
});
