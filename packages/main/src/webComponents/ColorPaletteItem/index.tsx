'use client';

import '@ui5/webcomponents/dist/ColorPaletteItem.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface ColorPaletteItemAttributes {
  /**
   * Defines if the component is selected.
   *
   * **Note:** Only one item must be selected per <code>ui5-color-palette</code>.
   * If more than one item is defined as selected, the last one would be considered as the selected one.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the colour of the component.
   *
   * **Note:** The value should be a valid CSS color.
   */
  value?: string;
}

interface ColorPaletteItemDomRef extends Required<ColorPaletteItemAttributes>, Ui5DomRef {}

interface ColorPaletteItemPropTypes
  extends ColorPaletteItemAttributes,
    Omit<CommonProps, keyof ColorPaletteItemAttributes> {}

/**
 * The `ColorPaletteItem` component represents a color in the the `ColorPalette`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const ColorPaletteItem = withWebComponent<ColorPaletteItemPropTypes, ColorPaletteItemDomRef>(
  'ui5-color-palette-item',
  ['value'],
  ['selected'],
  [],
  []
);

ColorPaletteItem.displayName = 'ColorPaletteItem';

export { ColorPaletteItem };
export type { ColorPaletteItemDomRef, ColorPaletteItemPropTypes };
