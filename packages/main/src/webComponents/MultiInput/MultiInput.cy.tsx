import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { MultiInput } from './index';

describe('MultiInput', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<MultiInput />);
    cy.get('[ui5-multi-input]').should('exist');
  });

  cypressPassThroughTestsFactory(MultiInput);
});
