import { ComboBox } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('ComboBox', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ComboBox />);
    cy.get('[ui5-combobox]').should('exist');
  });

  cypressPassThroughTestsFactory(ComboBox);
});
