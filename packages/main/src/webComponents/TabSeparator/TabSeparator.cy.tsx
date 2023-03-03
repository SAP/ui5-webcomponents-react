import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { TabSeparator } from './index';

describe('TabSeparator', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<TabSeparator />);
    cy.get('[ui5-tab-separator]').should('exist');
  });

  cypressPassThroughTestsFactory(TabSeparator);
});
