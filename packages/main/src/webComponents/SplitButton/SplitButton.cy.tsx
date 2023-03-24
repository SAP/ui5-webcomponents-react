import { SplitButton } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('SplitButton', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<SplitButton>Split Button</SplitButton>);
    cy.get('[ui5-split-button]').should('exist');
  });

  cypressPassThroughTestsFactory(SplitButton);
});
