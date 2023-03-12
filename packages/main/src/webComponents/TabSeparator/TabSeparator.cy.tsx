import { TabSeparator } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('TabSeparator', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<TabSeparator />);
    cy.get('[ui5-tab-separator]').should('exist');
  });

  cypressPassThroughTestsFactory(TabSeparator);
});
