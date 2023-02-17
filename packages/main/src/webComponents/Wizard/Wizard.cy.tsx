import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Wizard } from './index';

describe('Wizard', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Wizard />);
    cy.get('[ui5-wizard]').should('exist');
  });

  cypressPassThroughTestsFactory(Wizard);
});
