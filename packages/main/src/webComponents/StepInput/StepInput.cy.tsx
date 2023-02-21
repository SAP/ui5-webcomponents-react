import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { StepInput } from './index';

describe('StepInput', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<StepInput />);
    cy.get('[ui5-step-input]').should('exist');
  });

  cypressPassThroughTestsFactory(StepInput);
});
