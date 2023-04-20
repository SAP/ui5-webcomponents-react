import { Switch } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Switch', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Switch />);
    cy.get('[ui5-switch]').should('exist');
  });

  cypressPassThroughTestsFactory(Switch);
});
