'use client';

import '@ui5/webcomponents/dist/ColorPalette.js';
import type { ColorPaletteItemClickEventDetail } from '@ui5/webcomponents/dist/ColorPalette.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface ColorPaletteAttributes {}

interface ColorPaletteDomRef extends ColorPaletteAttributes, Ui5DomRef {}

interface ColorPalettePropTypes extends ColorPaletteAttributes, Omit<CommonProps, 'onItemClick'> {
  /**
   * Defines the `ColorPaletteItem` elements.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the user selects a color.
   */
  onItemClick?: (event: Ui5CustomEvent<ColorPaletteDomRef, ColorPaletteItemClickEventDetail>) => void;
}

/**
 * The `ColorPalette` provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.
 *
 * ### Usage
 *
 * The `ColorPalette` is meant for users that need to select a color from a predefined set. To define the colors, use the `ColorPaletteItem` component inside the default slot of the `ColorPalette`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const ColorPalette = withWebComponent<ColorPalettePropTypes, ColorPaletteDomRef>(
  'ui5-color-palette',
  [],
  [],
  [],
  ['item-click'],
  () => import('@ui5/webcomponents/dist/ColorPalette.js')
);

ColorPalette.displayName = 'ColorPalette';

export { ColorPalette };
export type { ColorPaletteDomRef, ColorPalettePropTypes };
