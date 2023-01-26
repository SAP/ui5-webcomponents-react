import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ProductSwitchItem } from './index';

describe('ProductSwitchItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ProductSwitchItem />);
    cy.get('[ui5-product-switch-item]').should('exist');
  });

  cypressPassThroughTestsFactory(ProductSwitchItem);
});
