'use client';

import '@ui5/webcomponents/dist/FormItem.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface FormItemAttributes {
  /**
   * Defines the column span of the component,
   * e.g how many columns the component should span to.
   *
   * **Note:** The column span should be a number between 1 and the available columns of the FormGroup (when items are placed in a group)
   * or the Form. The available columns can be affected by the FormGroup#columnSpan and/or the Form#layout.
   * A number bigger than the available columns won't take effect.
   * @default undefined
   */
  columnSpan?: number | undefined;
}

interface FormItemDomRef extends Required<FormItemAttributes>, Ui5DomRef {}

interface FormItemPropTypes
  extends FormItemAttributes,
    Omit<CommonProps, keyof FormItemAttributes | 'children' | 'labelContent'> {
  /**
   * Defines the content of the component,
   * associated to `labelContent`.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the label of the component.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="labelContent"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  labelContent?: UI5WCSlotsNode;
}

/**
 * The FormItem (ui5-form-item) represents pair of a label and
 * one or more components (text or text fields), associated to it.
 *
 * ### Usage
 *
 * The FormItem is being used in FormGroup (ui5-form-group) or directly in Form (ui5-form).
 *
 * ### ES6 Module Import
 *
 * - import @ui5/webcomponents/dist/FormItem.js";
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 */
const FormItem = withWebComponent<FormItemPropTypes, FormItemDomRef>(
  'ui5-form-item',
  ['columnSpan'],
  [],
  ['labelContent'],
  [],
  () => import('@ui5/webcomponents/dist/FormItem.js')
);

FormItem.displayName = 'FormItem';

export { FormItem };
export type { FormItemDomRef, FormItemPropTypes };
