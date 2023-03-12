import { Select } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Select', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Select />);
    cy.get('[ui5-select]').should('exist');
  });

  cypressPassThroughTestsFactory(Select);
});
