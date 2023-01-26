import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Select } from './index';

describe('Select', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Select />);
    cy.get('[ui5-select]').should('exist');
  });

  cypressPassThroughTestsFactory(Select);
});
