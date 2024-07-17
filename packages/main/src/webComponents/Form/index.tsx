'use client';

import '@ui5/webcomponents/dist/Form.js';
import type FormItemSpacing from '@ui5/webcomponents/dist/types/FormItemSpacing.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface FormAttributes {
  /**
   * Defines the header text of the component.
   *
   * **Note:** The property gets overridden by the `header` slot.
   * @default undefined
   */
  headerText?: string | undefined;

  /**
   * Defines the vertical spacing between form items.
   *
   * **Note:** If the Form is meant to be switched between "non-edit" and "edit" modes,
   * we recommend using "Large" item spacing in "non-edit" mode, and "Normal" - for "edit" mode,
   * to avoid "jumping" effect, caused by the hight difference between texts in "non-edit" mode and the input fields in "edit" mode.
   * @default "Normal"
   */
  itemSpacing?: FormItemSpacing | keyof typeof FormItemSpacing;

  /**
   * Defines the width proportion of the labels and fields of a FormItem by breakpoint.
   *
   * By default, the labels take 4/12 (or 1/3) of the form item in M,L and XL sizes,
   * and 12/12 in S size, e.g in S the label is on top of its associated field.
   *
   * The supported values are between 1 and 12. Greater the number, more space the label will use.
   *
   * **Note:** If "12" is set, the label will be displayed on top of its assosiated field.
   * @default "S12 M4 L4 XL4"
   */
  labelSpan?: string;

  /**
   * Defines the number of columns to distribute the form content by breakpoint.
   *
   * Supported values:
   * - `S` - 1 column by default (1 column is recommended)
   * - `M` - 1 column by default (up to 2 columns are recommended)
   * - `L` - 2 columns by default (up to 3 columns are recommended)
   * - `XL` - 2 columns by default (up to 6 columns  are recommended)
   * @default "S1 M1 L2 XL2"
   */
  layout?: string;
}

interface FormDomRef extends Required<FormAttributes>, Ui5DomRef {}

interface FormPropTypes extends FormAttributes, Omit<CommonProps, keyof FormAttributes | 'children' | 'header'> {
  /**
   * Defines the component content - FormGroups or FormItems.
   *
   * **Note:** Mixing FormGroups and standalone FormItems (not belonging to a group) is not supported.
   * Either use FormGroups and make sure all FormItems are part of a FormGroup, or use just FormItems without any FormGroups.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the component header area.
   *
   * **Note:** When a `header` is provided, the `headerText` property is ignored.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  header?: UI5WCSlotsNode;
}

/**
 * The Form is a layout component that arranges labels and form fields (like input fields) pairs
 * into a specific number of columns.
 *
 * ### Structure
 *
 * - **Form** (`Form`) is the top-level container component, responsible for the content layout and responsiveness.
 * - **FormGroup** (`FormGroup`) enables the grouping of the Form content.
 * - **FormItem** (`FormItem`) is a pair of label and form fields and can be used directly in a Form, or as part of a FormGroup.
 *
 * The simplest Form (`Form`) consists of a header area on top,
 * displaying a header text (see the `headingText` property) and content below - an arbitrary number of FormItems (ui5-form-item),
 * representing the pairs of label and form fields.
 *
 * And, there is also "grouping" available to assist the implementation of richer UIs.
 * This is enabled by the FormGroup (`FormGroup`) component.
 * In this case, the Form is structured into FormGroups and each FormGroup consists of FormItems.
 *
 *  ### Responsiveness
 *
 * The Form component reacts and changes its layout on predefined breakpoints.
 * Depending on its size, the Form content (FormGroups and FormItems) gets divided into one or more columns as follows:
 * - **S** (< 600px) – 1 column is recommended (default: 1)
 * - **M** (600px - 1022px) – up to 2 columns are recommended (default: 1)
 * - **L** (1023px - 1439px) - up to 3 columns are recommended (default: 2)
 * - **XL** (> 1439px) – up to 6 columns are recommended (default: 2)
 *
 * To change the layout, use the `layout` property - f.e. layout="S1 M2 L3 XL6".
 *
 * ### Groups
 *
 * To make better use of screen space, there is built-in logic to determine how many columns should a FormGroup occupy.
 *
 * - **Example #1** (perfect match):
 * 4 columns and 4 groups: each group will use 1 column.
 *
 * - **Example #2** (balanced distribution):
 * 4 columns and 2 groups: each group will use 2 columns.
 * 6 columns and 2 groups: each group will use 3 columns.
 *
 * - **Example #3** (unbalanced distribution):
 * 3 columns and 2 groups: the larger one will use 2 columns, the smaller 1 column.
 * 5 columns and 3 groups: two of the groups will use 2 columns each, the smallest 1 column.
 *
 * **Note:** The size of a group element is determined by the number of FormItems assigned to it.
 * In the case of equality, the first in the DOM will use more columns, and the last - fewer columns.
 *
 * - **Example #4** (more groups than columns):
 * 3 columns and 4 groups: each FormGroup uses only 1 column, the last FormGroup will wrap on the second row.
 *
 * ### Groups Column Span
 *
 * To influence the built-in group distribution, described in the previous section,
 * you can use the FormGroup's `columnSpan` property, that defines how many columns the group should expand to.
 *
 * ### Items Column Span
 *
 * FormItem's columnSpan property defines how many columns the form item should expand to inside a form group or the form.
 *
 * ### Items Label Span
 *
 * The placement of the labels depends on the size of the used column.
 * If there is enough space, the labels are next to their associated fields, otherwise  - above the fields.
 * By default, the labels take 4/12 of the FormItem, leaving 8/12 parts to associated fields.
 * You can control what space the labels should take via the `labelSpan` property.
 *
 * **For example:** To always place the labels on top set: `labelSpan="S12 M12 L12 XL12"` property.
 *
 * ### ES6 Module Import
 *
 * - import @ui5/webcomponents/dist/Form.js";
 * - import @ui5/webcomponents/dist/FormGroup.js";
 * - import @ui5/webcomponents/dist/FormItem.js";
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 */
const Form = withWebComponent<FormPropTypes, FormDomRef>(
  'ui5-form',
  ['headerText', 'itemSpacing', 'labelSpan', 'layout'],
  [],
  ['header'],
  [],
  () => import('@ui5/webcomponents/dist/Form.js')
);

Form.displayName = 'Form';

export { Form };
export type { FormDomRef, FormPropTypes };
