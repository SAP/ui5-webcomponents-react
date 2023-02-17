import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { CheckBox } from './index';

describe('CheckBox', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<CheckBox />);
    cy.get('[ui5-checkbox]').should('exist');
  });

  cypressPassThroughTestsFactory(CheckBox);
});
