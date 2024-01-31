'use client';

import '@ui5/webcomponents/dist/Label.js';
import type WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface LabelAttributes {
  /**
   * Defines the labeled input by providing its ID.
   *
   * **Note:** Can be used with both `Input` and native input.
   */
  for?: string;

  /**
   * Defines whether an asterisk character is added to the component text.
   *
   * **Note:** Usually indicates that user input (bound with the `for` property) is required. In that case the `required property of the corresponding input should also be set.`
   * @default false
   */
  required?: boolean;

  /**
   * Defines whether colon is added to the component text.
   *
   * **Note:** Usually used in forms.
   * @default false
   */
  showColon?: boolean;

  /**
   * Defines how the text of a component will be displayed when there is not enough space.
   * **Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.
   * @default "None"
   */
  wrappingType?: WrappingType | keyof typeof WrappingType;
}

interface LabelDomRef extends Required<LabelAttributes>, Ui5DomRef {}

interface LabelPropTypes extends LabelAttributes, Omit<CommonProps, keyof LabelAttributes> {
  /**
   * Defines the text of the component.
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `Label` is a component used to represent a label for elements like input, textarea, select.
 *
 * The `for` property of the `Label` must be the same as the id attribute of the related input element.
 *
 * Screen readers read out the label, when the user focuses the labelled control.
 *
 * The `Label` appearance can be influenced by properties, such as `required` and `wrappingType`. The appearance of the Label can be configured in a limited way by using the design property. For a broader choice of designs, you can use custom styles.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const Label = withWebComponent<LabelPropTypes, LabelDomRef>(
  'ui5-label',
  ['for', 'wrappingType'],
  ['required', 'showColon'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/Label.js')
);

Label.displayName = 'Label';

export { Label };
export type { LabelDomRef, LabelPropTypes };
