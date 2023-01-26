import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Dialog } from './index';

describe('Dialog', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Dialog />);
    cy.get('[ui5-dialog]').should('exist');
  });

  cypressPassThroughTestsFactory(Dialog);
});
