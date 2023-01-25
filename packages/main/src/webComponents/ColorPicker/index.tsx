'use client';

import '@ui5/webcomponents/dist/ColorPicker.js';
import { CSSProperties } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface ColorPickerAttributes {
  /**
   * Defines the currently selected color of the component.
   *
   * **Note**: use HEX, RGB, RGBA, HSV formats or a CSS color name when modifying this property.
   */
  color?: CSSProperties['color'];
}

export interface ColorPickerDomRef extends ColorPickerAttributes, Omit<Ui5DomRef, 'color'> {}

export interface ColorPickerPropTypes extends ColorPickerAttributes, Omit<CommonProps, 'color' | 'onChange'> {
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
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ColorPicker" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ColorPicker = withWebComponent<ColorPickerPropTypes, ColorPickerDomRef>(
  'ui5-color-picker',
  ['color'],
  [],
  [],
  ['change']
);

ColorPicker.displayName = 'ColorPicker';

export { ColorPicker };
