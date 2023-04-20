import { MultiComboBoxGroupItem } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('MultiComboBoxGroupItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<MultiComboBoxGroupItem />);
    cy.get('[ui5-mcb-group-item]').should('exist');
  });

  cypressPassThroughTestsFactory(MultiComboBoxGroupItem);
});
