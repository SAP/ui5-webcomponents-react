import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ShellBarItem } from './index';

describe('ShellBarItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ShellBarItem />);
    cy.get('[ui5-shellbar-item]').should('exist');
  });

  cypressPassThroughTestsFactory(ShellBarItem);
});
