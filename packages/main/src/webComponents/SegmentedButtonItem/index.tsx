'use client';

import '@ui5/webcomponents/dist/SegmentedButtonItem.js';
import type { AccessibilityAttributes } from '@ui5/webcomponents/dist/Button.js';
import type ButtonAccessibleRole from '@ui5/webcomponents/dist/types/ButtonAccessibleRole.js';
import type ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import type ButtonType from '@ui5/webcomponents/dist/types/ButtonType.js';
import type { MouseEventHandler, ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface SegmentedButtonItemAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the component.
   *
   * **Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.
   */
  accessibleNameRef?: string;

  /**
   * **Note:** The property is inherited and not supported. If set, it won't take any effect.
   * @default "Button"
   */
  accessibleRole?: ButtonAccessibleRole | keyof typeof ButtonAccessibleRole;

  /**
   * **Note:** The property is inherited and not supported. If set, it won't take any effect.
   * @default "Default"
   */
  design?: ButtonDesign | keyof typeof ButtonDesign;

  /**
   * Defines whether the component is disabled.
   * A disabled component can't be pressed or
   * focused, and it is not in the tab chain.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the icon, displayed as graphical element within the component.
   * The SAP-icons font provides numerous options.
   *
   * Example:
   * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   */
  icon?: string;

  /**
   * **Note:** The property is inherited and not supported. If set, it won't take any effect.
   * @default false
   */
  iconEnd?: boolean;

  /**
   * Determines whether the component is displayed as pressed.
   * @default false
   */
  pressed?: boolean;

  /**
   * **Note:** The property is inherited and not supported. If set, it won't take any effect.
   * @default false
   * @deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".
   */
  submits?: boolean;

  /**
   * Defines the tooltip of the component.
   *
   * **Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.
   *
   * **Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.
   */
  tooltip?: string;

  /**
   * **Note:** The property is inherited and not supported. If set, it won't take any effect.
   * @default "Button"
   */
  type?: ButtonType | keyof typeof ButtonType;
}

interface SegmentedButtonItemDomRef extends Required<SegmentedButtonItemAttributes>, Ui5DomRef {
  /**
   * **Note:** The property is inherited and not supported. If set, it won't take any effect.
   */
  accessibilityAttributes: AccessibilityAttributes;
}

interface SegmentedButtonItemPropTypes
  extends SegmentedButtonItemAttributes,
    Omit<CommonProps, keyof SegmentedButtonItemAttributes | 'children' | 'onClick'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the component is activated either with a
   * mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event will not be fired if the `disabled`
   * property is set to `true`.
   */
  onClick?: MouseEventHandler<SegmentedButtonItemDomRef>;
}

/**
 * Users can use the `SegmentedButtonItem` as part of a `SegmentedButton`.
 *
 * Clicking or tapping on a `SegmentedButtonItem` changes its state to `pressed`.
 * The item returns to its initial state when the user clicks or taps on it again.
 * By applying additional custom CSS-styling classes, apps can give a different style to any
 * `SegmentedButtonItem`.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const SegmentedButtonItem = withWebComponent<SegmentedButtonItemPropTypes, SegmentedButtonItemDomRef>(
  'ui5-segmented-button-item',
  ['accessibleName', 'accessibleNameRef', 'accessibleRole', 'design', 'icon', 'tooltip', 'type'],
  ['disabled', 'iconEnd', 'pressed', 'submits'],
  [],
  ['click'],
  () => import('@ui5/webcomponents/dist/SegmentedButtonItem.js')
);

SegmentedButtonItem.displayName = 'SegmentedButtonItem';

export { SegmentedButtonItem };
export type { SegmentedButtonItemDomRef, SegmentedButtonItemPropTypes };
