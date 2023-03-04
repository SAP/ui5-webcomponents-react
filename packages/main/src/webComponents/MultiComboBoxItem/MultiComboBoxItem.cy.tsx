import { MultiComboBoxItem } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('MultiComboBoxItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<MultiComboBoxItem />);
    cy.get('[ui5-mcb-item]').should('exist');
  });

  cypressPassThroughTestsFactory(MultiComboBoxItem);
});
