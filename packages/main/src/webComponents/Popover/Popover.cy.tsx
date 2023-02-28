import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Popover } from './index';

describe('Popover', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Popover />);
    cy.get('[ui5-popover]').should('exist');
  });

  cypressPassThroughTestsFactory(Popover);
});
