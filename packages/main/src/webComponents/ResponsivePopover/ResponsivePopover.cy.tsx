import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ResponsivePopover } from './index';

describe('ResponsivePopover', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ResponsivePopover />);
    cy.get('[ui5-responsive-popover]').should('exist');
  });

  cypressPassThroughTestsFactory(ResponsivePopover);
});
