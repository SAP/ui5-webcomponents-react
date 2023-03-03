import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { MultiComboBox } from './index';

describe('MultiComboBox', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<MultiComboBox />);
    cy.get('[ui5-multi-combobox]').should('exist');
  });

  cypressPassThroughTestsFactory(MultiComboBox);
});
