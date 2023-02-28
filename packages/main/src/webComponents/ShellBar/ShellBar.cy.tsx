import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ShellBar } from './index';

describe('ShellBar', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ShellBar />);
    cy.get('[ui5-shellbar]').should('exist');
  });

  cypressPassThroughTestsFactory(ShellBar);
});
