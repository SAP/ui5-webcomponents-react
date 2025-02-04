'use client';

import '@ui5/webcomponents/dist/FormGroup.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface FormGroupAttributes {
  /**
   * Defines column span of the component,
   * e.g how many columns the group should span to.
   * @default undefined
   */
  columnSpan?: number | undefined;

  /**
   * Defines header text of the component.
   * @default undefined
   */
  headerText?: string | undefined;
}

interface FormGroupDomRef extends Required<FormGroupAttributes>, Ui5DomRef {}

interface FormGroupPropTypes extends FormGroupAttributes, Omit<CommonProps, keyof FormGroupAttributes | 'children'> {
  /**
   * Defines the items of the component.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The FormGroup (ui5-form-group) represents a group inside the Form (ui5-form) component
 * and it consists of FormItem (ui5-form-item) components.
 *
 * The layout of the FormGroup is mostly defined and controlled by the overarching Form (ui5-form) component.
 * Still, one can influence the layout via the FormGroup's `columnSpan` property,
 * that defines how many columns the group should expand to.
 *
 * ### Usage
 *
 * Тhe FormGroup (ui5-form-group) allows to split a Form into groups,
 * e.g to group FormItems that logically belong together.
 *
 * ### ES6 Module Import
 *
 * - import @ui5/webcomponents/dist/FormGroup.js";
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 */
const FormGroup = withWebComponent<FormGroupPropTypes, FormGroupDomRef>(
  'ui5-form-group',
  ['columnSpan', 'headerText'],
  [],
  [],
  []
);

FormGroup.displayName = 'FormGroup';

export { FormGroup };
export type { FormGroupDomRef, FormGroupPropTypes };
