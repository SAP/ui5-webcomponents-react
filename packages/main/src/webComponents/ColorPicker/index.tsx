import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/ColorPicker';
import { FC } from 'react';

export interface ColorPickerPropTypes extends Omit<WithWebComponentPropTypes, 'onChange'> {
  /**
   * Defines the currently selected color of the `ColorPicker`.
   *
   * **Note**: If you need to have initially set color, or change the color programmatically, use this property **Important**: Use HEX, RGB, RGBA, HSV, or a CSS color name when modifying this property.
   */
  color?: string;
  /**
   * Fired when the the selected color is changed
   */
  onChange?: (event: CustomEvent) => void;
}

/**
 * Enables the user to select a color & transparency.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ColorPicker" target="_blank">UI5 Web Components Playground</a>
 */
const ColorPicker: FC<ColorPickerPropTypes> = withWebComponent<ColorPickerPropTypes>(
  'ui5-color-picker',
  ['color'],
  [],
  [],
  ['change']
);

ColorPicker.displayName = 'ColorPicker';

ColorPicker.defaultProps = {};

export { ColorPicker };
