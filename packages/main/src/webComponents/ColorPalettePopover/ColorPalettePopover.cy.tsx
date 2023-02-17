import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ColorPalettePopover } from './index';

describe('ColorPalettePopover', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ColorPalettePopover />);
    cy.get('[ui5-color-palette-popover]').should('exist');
  });

  cypressPassThroughTestsFactory(ColorPalettePopover);
});
