import { CheckBox } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('CheckBox', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<CheckBox />);
    cy.get('[ui5-checkbox]').should('exist');
  });

  cypressPassThroughTestsFactory(CheckBox);
});
