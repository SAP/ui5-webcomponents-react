import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { MultiComboBoxItem } from './index';

describe('MultiComboBoxItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<MultiComboBoxItem />);
    cy.get('[ui5-mcb-item]').should('exist');
  });

  cypressPassThroughTestsFactory(MultiComboBoxItem);
});
