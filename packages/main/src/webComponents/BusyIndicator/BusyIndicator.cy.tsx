import { BusyIndicator } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('BusyIndicator', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<BusyIndicator />);
    cy.get('[ui5-busy-indicator]').should('exist');
  });

  cypressPassThroughTestsFactory(BusyIndicator);
});
