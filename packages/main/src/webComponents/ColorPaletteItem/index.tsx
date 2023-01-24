'use client';

import '@ui5/webcomponents/dist/ColorPaletteItem.js';
import { CSSProperties } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

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
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ColorPalette" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ColorPaletteItem = withWebComponent<ColorPaletteItemPropTypes, ColorPaletteItemDomRef>(
  'ui5-color-palette-item',
  ['value'],
  [],
  [],
  []
);

ColorPaletteItem.displayName = 'ColorPaletteItem';

export { ColorPaletteItem };
