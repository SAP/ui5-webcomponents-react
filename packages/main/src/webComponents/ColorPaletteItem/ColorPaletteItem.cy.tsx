import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ColorPaletteItem } from './index';

describe('ColorPaletteItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ColorPaletteItem />);
    cy.get('[ui5-color-palette-item]').should('exist');
  });

  cypressPassThroughTestsFactory(ColorPaletteItem);
});
