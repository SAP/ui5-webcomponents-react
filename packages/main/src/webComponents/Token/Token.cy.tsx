import { Token } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Token', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Token />);
    cy.get('[ui5-token]').should('exist');
  });

  cypressPassThroughTestsFactory(Token);
});
