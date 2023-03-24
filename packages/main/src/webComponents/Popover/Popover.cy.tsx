import { Popover } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Popover', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Popover />);
    cy.get('[ui5-popover]').should('exist');
  });

  cypressPassThroughTestsFactory(Popover);
});
