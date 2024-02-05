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
   */
  color?: CSSProperties['color'];
}

interface ColorPickerDomRef extends ColorPickerAttributes, Omit<Ui5DomRef, 'color'> {}

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
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ColorPicker)
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
