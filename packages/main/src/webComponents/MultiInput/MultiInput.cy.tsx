import { MultiInput } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('MultiInput', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<MultiInput />);
    cy.get('[ui5-multi-input]').should('exist');
  });

  cypressPassThroughTestsFactory(MultiInput);
});
