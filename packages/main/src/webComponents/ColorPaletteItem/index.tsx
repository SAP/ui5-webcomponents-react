'use client';

import '@ui5/webcomponents/dist/ColorPaletteItem.js';
import type { CSSProperties } from 'react';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface ColorPaletteItemAttributes {
  /**
   * Defines the colour of the component.
   *
   * **Note:** The value should be a valid CSS color.
   */
  value?: CSSProperties['color'];
}

export interface ColorPaletteItemDomRef extends ColorPaletteItemAttributes, Ui5DomRef {}

export interface ColorPaletteItemPropTypes extends ColorPaletteItemAttributes, CommonProps {}

/**
 * The `ColorPaletteItem` component represents a color in the the `ColorPalette`
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ColorPalette" target="_blank">UI5 Web Components Storybook</ui5-link>
 */
const ColorPaletteItem = withWebComponent<ColorPaletteItemPropTypes, ColorPaletteItemDomRef>(
  'ui5-color-palette-item',
  ['value'],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/ColorPaletteItem.js')
);

ColorPaletteItem.displayName = 'ColorPaletteItem';

export { ColorPaletteItem };
