import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { SplitButton } from './index';

describe('SplitButton', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<SplitButton>Split Button</SplitButton>);
    cy.get('[ui5-split-button]').should('exist');
  });

  cypressPassThroughTestsFactory(SplitButton);
});
