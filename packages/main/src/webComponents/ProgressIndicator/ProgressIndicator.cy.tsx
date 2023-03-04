import { ProgressIndicator } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('ProgressIndicator', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ProgressIndicator />);
    cy.get('[ui5-progress-indicator]').should('exist');
  });

  cypressPassThroughTestsFactory(ProgressIndicator);
});
