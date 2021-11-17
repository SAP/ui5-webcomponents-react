import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5DomRef } from '@ui5/webcomponents-react/interfaces/Ui5DomRef';
import { CSSProperties } from 'react';

import '@ui5/webcomponents/dist/ColorPaletteItem.js';

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
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ColorPaletteItem" target="_blank">UI5 Web Components Playground</ui5-link>
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
