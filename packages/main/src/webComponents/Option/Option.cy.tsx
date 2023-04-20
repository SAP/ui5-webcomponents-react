import { Option } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Option', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Option />);
    cy.get('[ui5-option]').should('exist');
  });

  cypressPassThroughTestsFactory(Option);
});
