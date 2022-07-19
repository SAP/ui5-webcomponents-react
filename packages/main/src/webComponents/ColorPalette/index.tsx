import '@ui5/webcomponents/dist/ColorPalette.js';
import { ReactNode } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface ColorPaletteAttributes {}

export interface ColorPaletteDomRef extends ColorPaletteAttributes, Ui5DomRef {}

export interface ColorPalettePropTypes extends ColorPaletteAttributes, CommonProps {
  /**
   * Defines the `ColorPaletteItem` elements.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the user selects a color.
   */
  onItemClick?: (event: Ui5CustomEvent<ColorPaletteDomRef, { color: string }>) => void;
}

/**
 * The `ColorPalette` provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ColorPalette" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ColorPalette = withWebComponent<ColorPalettePropTypes, ColorPaletteDomRef>(
  'ui5-color-palette',
  [],
  [],
  [],
  ['item-click']
);

ColorPalette.displayName = 'ColorPalette';

export { ColorPalette };
