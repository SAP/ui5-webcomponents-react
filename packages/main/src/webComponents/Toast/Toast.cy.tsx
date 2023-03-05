import { Toast } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Toast', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Toast />);
    cy.get('[ui5-toast]').should('exist');
  });

  cypressPassThroughTestsFactory(Toast);
});
