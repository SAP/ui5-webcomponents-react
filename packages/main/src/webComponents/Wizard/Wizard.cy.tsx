import { Wizard } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Wizard', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Wizard />);
    cy.get('[ui5-wizard]').should('exist');
  });

  cypressPassThroughTestsFactory(Wizard);
});
