import { MultiComboBox } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('MultiComboBox', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<MultiComboBox />);
    cy.get('[ui5-multi-combobox]').should('exist');
  });

  cypressPassThroughTestsFactory(MultiComboBox);
});
