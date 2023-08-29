import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Toolbar } from './index';

describe('Toolbar', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Toolbar />);
    cy.get('[ui5-toolbar]').should('exist');
  });

  cypressPassThroughTestsFactory(Toolbar);
});
