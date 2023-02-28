import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ComboBox } from './index';

describe('ComboBox', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ComboBox />);
    cy.get('[ui5-combobox]').should('exist');
  });

  cypressPassThroughTestsFactory(ComboBox);
});
