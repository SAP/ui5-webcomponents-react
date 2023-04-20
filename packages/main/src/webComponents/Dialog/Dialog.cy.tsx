import { Dialog } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Dialog', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Dialog />);
    cy.get('[ui5-dialog]').should('exist');
  });

  cypressPassThroughTestsFactory(Dialog);
});
