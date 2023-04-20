import { ProductSwitchItem } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('ProductSwitchItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ProductSwitchItem />);
    cy.get('[ui5-product-switch-item]').should('exist');
  });

  cypressPassThroughTestsFactory(ProductSwitchItem);
});
