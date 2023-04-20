import { ColorPaletteItem } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('ColorPaletteItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ColorPaletteItem />);
    cy.get('[ui5-color-palette-item]').should('exist');
  });

  cypressPassThroughTestsFactory(ColorPaletteItem);
});
