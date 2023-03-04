import { ResponsivePopover } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('ResponsivePopover', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ResponsivePopover />);
    cy.get('[ui5-responsive-popover]').should('exist');
  });

  cypressPassThroughTestsFactory(ResponsivePopover);
});
