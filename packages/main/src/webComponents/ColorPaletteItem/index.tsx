'use client';

import '@ui5/webcomponents/dist/ColorPaletteItem.js';
import type { CSSProperties } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface ColorPaletteItemAttributes {
  /**
   * Defines the colour of the component.
   *
   * **Note:** The value should be a valid CSS color.
   * @default undefined
   */
  value?: CSSProperties['color'];
}

interface ColorPaletteItemDomRef extends ColorPaletteItemAttributes, Ui5DomRef {}

interface ColorPaletteItemPropTypes
  extends ColorPaletteItemAttributes,
    Omit<CommonProps, keyof ColorPaletteItemAttributes> {}

/**
 * The `ColorPaletteItem` component represents a color in the the `ColorPalette`.
 *
 * @abstract
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
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
export type { ColorPaletteItemDomRef, ColorPaletteItemPropTypes };
