import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { MultiComboBoxGroupItem } from './index';

describe('MultiComboBoxGroupItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<MultiComboBoxGroupItem />);
    cy.get('[ui5-mcb-group-item]').should('exist');
  });

  cypressPassThroughTestsFactory(MultiComboBoxGroupItem);
});
