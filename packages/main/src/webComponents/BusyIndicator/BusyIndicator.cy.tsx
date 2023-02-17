import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { BusyIndicator } from './index';

describe('BusyIndicator', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<BusyIndicator />);
    cy.get('[ui5-busy-indicator]').should('exist');
  });

  cypressPassThroughTestsFactory(BusyIndicator);
});
