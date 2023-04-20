import { StepInput } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('StepInput', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<StepInput />);
    cy.get('[ui5-step-input]').should('exist');
  });

  cypressPassThroughTestsFactory(StepInput);
});
