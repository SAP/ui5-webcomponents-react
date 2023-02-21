import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ComboBoxItem } from './index';

describe('ComboBoxItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ComboBoxItem />);
    cy.get('[ui5-cb-item]').should('exist');
  });

  cypressPassThroughTestsFactory(ComboBoxItem);
});
