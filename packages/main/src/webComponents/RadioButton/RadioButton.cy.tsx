import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { RadioButton } from './index';

describe('RadioButton', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<RadioButton />);
    cy.get('[ui5-radio-button]').should('exist');
  });

  cypressPassThroughTestsFactory(RadioButton);
});
