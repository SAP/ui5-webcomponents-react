import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { WizardStep } from './index';

describe('WizardStep', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<WizardStep />);
    cy.get('[ui5-wizard-step]').should('exist');
  });

  cypressPassThroughTestsFactory(WizardStep);
});
