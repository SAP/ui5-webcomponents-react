import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Switch } from './index';

describe('Switch', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Switch />);
    cy.get('[ui5-switch]').should('exist');
  });

  cypressPassThroughTestsFactory(Switch);
});
