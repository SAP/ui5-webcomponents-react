import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { CSSProperties } from 'react';

import '@ui5/webcomponents/dist/ColorPicker.js';

export interface ColorPickerPropTypes extends Omit<CommonProps, 'onChange'> {
  /**
   * Defines the currently selected color of the component.
   *
   * **Note**: use HEX, RGB, RGBA, HSV formats or a CSS color name when modifying this property.
   */
  color?: CSSProperties['color'];
  /**
   * Fired when the the selected color is changed
   */
  onChange?: (event: Ui5CustomEvent<HTMLElement>) => void;
}

/**
 * The `ColorPicker` allows users to choose any color and provides different input options for selecting colors.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ColorPicker" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ColorPicker = withWebComponent<ColorPickerPropTypes>('ui5-color-picker', ['color'], [], [], ['change']);

ColorPicker.displayName = 'ColorPicker';

export { ColorPicker };
