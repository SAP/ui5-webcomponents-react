'use client';

import '@ui5/webcomponents/dist/ColorPicker.js';
import type { CSSProperties } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface ColorPickerAttributes {
  /**
   * Defines the currently selected color of the component.
   *
   * **Note**: use HEX, RGB, RGBA, HSV formats or a CSS color name when modifying this property.
   * @default "rgba(255, 255, 255, 1)"
   */
  color?: CSSProperties['color'];
}

interface ColorPickerDomRef extends Required<ColorPickerAttributes>, Ui5DomRef {}

interface ColorPickerPropTypes
  extends ColorPickerAttributes,
    Omit<CommonProps, keyof ColorPickerAttributes | 'onChange'> {
  /**
   * Fired when the the selected color is changed
   */
  onChange?: (event: Ui5CustomEvent<ColorPickerDomRef>) => void;
}

/**
 * The `ColorPicker` allows users to choose any color and provides different input options for selecting colors.
 *
 * ### Usage
 *
 * #### When to use
 * Use the color picker if:
 *
 * -  users need to select any color freely.
 *
 * #### When not to use
 *
 * -  Users need to select one color from a predefined set of colors. Use the ColorPalette component instead.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const ColorPicker = withWebComponent<ColorPickerPropTypes, ColorPickerDomRef>(
  'ui5-color-picker',
  ['color'],
  [],
  [],
  ['change'],
  () => import('@ui5/webcomponents/dist/ColorPicker.js')
);

ColorPicker.displayName = 'ColorPicker';

export { ColorPicker };
export type { ColorPickerDomRef, ColorPickerPropTypes };
