import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ProgressIndicator } from './index';

describe('ProgressIndicator', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ProgressIndicator />);
    cy.get('[ui5-progress-indicator]').should('exist');
  });

  cypressPassThroughTestsFactory(ProgressIndicator);
});
