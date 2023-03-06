import { WizardStep } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('WizardStep', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<WizardStep />);
    cy.get('[ui5-wizard-step]').should('exist');
  });

  cypressPassThroughTestsFactory(WizardStep);
});
