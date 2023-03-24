import { Input } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Input', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Input />);
    cy.get('[ui5-input]').should('exist');
  });

  cypressPassThroughTestsFactory(Input);
});
