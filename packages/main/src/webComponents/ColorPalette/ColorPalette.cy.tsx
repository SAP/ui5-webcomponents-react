import { ColorPalette } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('ColorPalette', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ColorPalette />);
    cy.get('[ui5-color-palette]').should('exist');
  });

  cypressPassThroughTestsFactory(ColorPalette);
});
