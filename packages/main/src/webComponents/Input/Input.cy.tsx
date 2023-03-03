import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Input } from './index';

describe('Input', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Input />);
    cy.get('[ui5-input]').should('exist');
  });

  cypressPassThroughTestsFactory(Input);
});
