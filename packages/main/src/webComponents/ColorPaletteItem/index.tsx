'use client';

import '@ui5/webcomponents/dist/ColorPaletteItem.js';
import type { ColorPaletteItemNativeClickEventDetail } from '@ui5/webcomponents/dist/ColorPaletteItem.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface ColorPaletteItemAttributes {
  /**
   * Defines if the component is selected.
   *
   * **Note:** Only one item must be selected per <code>ui5-color-palette</code>.
   * If more than one item is defined as selected, the last one would be considered as the selected one.
   *
   * **Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the tooltip of the component. When not set, the color value is used as the tooltip.
   *
   * **Note:** Available since [v2.22.0](https://github.com/UI5/webcomponents/releases/tag/v2.22.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  tooltip?: string | undefined;

  /**
   * Defines the colour of the component.
   *
   * **Note:** The value should be a valid CSS color.
   */
  value?: string;
}

interface ColorPaletteItemDomRef extends Required<ColorPaletteItemAttributes>, Ui5DomRef {}

interface ColorPaletteItemPropTypes
  extends ColorPaletteItemAttributes, Omit<CommonProps, keyof ColorPaletteItemAttributes | 'onClick'> {
  /**
   * Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event will not be fired if the `disabled` property is set to `true`.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * **Note:** Available since [v2.22.0](https://github.com/UI5/webcomponents/releases/tag/v2.22.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onClick?: (event: Ui5CustomEvent<ColorPaletteItemDomRef, ColorPaletteItemNativeClickEventDetail>) => void;
}

/**
 * The `ColorPaletteItem` component represents a color in the the `ColorPalette`.
 *
 * __Note:__ This is a UI5 Web Component! [ColorPaletteItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ColorPaletteItem) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents__.
 */
const ColorPaletteItem = withWebComponent<ColorPaletteItemPropTypes, ColorPaletteItemDomRef>(
  'ui5-color-palette-item',
  ['tooltip', 'value'],
  ['selected'],
  [],
  ['click'],
);

ColorPaletteItem.displayName = 'ColorPaletteItem';

export { ColorPaletteItem };
export type { ColorPaletteItemDomRef, ColorPaletteItemPropTypes };
