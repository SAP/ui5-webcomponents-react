import { ComboBoxItem } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('ComboBoxItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ComboBoxItem />);
    cy.get('[ui5-cb-item]').should('exist');
  });

  cypressPassThroughTestsFactory(ComboBoxItem);
});
