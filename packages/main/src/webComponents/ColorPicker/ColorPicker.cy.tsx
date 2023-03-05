import { ColorPicker } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('ColorPicker', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ColorPicker />);
    cy.get('[ui5-color-picker]').should('exist');
  });

  cypressPassThroughTestsFactory(ColorPicker);
});
