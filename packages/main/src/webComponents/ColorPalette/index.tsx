'use client';

import '@ui5/webcomponents/dist/ColorPalette.js';
import type { ColorPaletteItemClickEventDetail } from '@ui5/webcomponents/dist/ColorPalette.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface ColorPaletteAttributes {}

interface ColorPaletteDomRef extends ColorPaletteAttributes, Ui5DomRef {}

interface ColorPalettePropTypes extends ColorPaletteAttributes, Omit<CommonProps, keyof ColorPaletteAttributes> {
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
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ColorPalette)
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
