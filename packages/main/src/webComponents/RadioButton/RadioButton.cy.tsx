import { RadioButton } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('RadioButton', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<RadioButton />);
    cy.get('[ui5-radio-button]').should('exist');
  });

  cypressPassThroughTestsFactory(RadioButton);
});
