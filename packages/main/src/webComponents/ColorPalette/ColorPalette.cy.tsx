import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ColorPalette } from './index';

describe('ColorPalette', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ColorPalette />);
    cy.get('[ui5-color-palette]').should('exist');
  });

  cypressPassThroughTestsFactory(ColorPalette);
});
