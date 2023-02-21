import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ComboBoxGroupItem } from './index';

describe('ComboBoxGroupItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ComboBoxGroupItem />);
    cy.get('[ui5-cb-group-item]').should('exist');
  });

  cypressPassThroughTestsFactory(ComboBoxGroupItem);
});
