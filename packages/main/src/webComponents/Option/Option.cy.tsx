import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Option } from './index';

describe('Option', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Option />);
    cy.get('[ui5-option]').should('exist');
  });

  cypressPassThroughTestsFactory(Option);
});
