import { ShellBarItem } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('ShellBarItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ShellBarItem />);
    cy.get('[ui5-shellbar-item]').should('exist');
  });

  cypressPassThroughTestsFactory(ShellBarItem);
});
