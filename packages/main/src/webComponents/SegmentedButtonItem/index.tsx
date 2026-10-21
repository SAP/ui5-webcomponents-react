'use client';

import '@ui5/webcomponents/dist/SegmentedButtonItem.js';
import type { SegmentedButtonItemClickEventDetail } from '@ui5/webcomponents/dist/SegmentedButtonItem.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface SegmentedButtonItemAttributes {
  /**
   * Defines the accessible description of the component.
   *
   * **Note:** Available since [v2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleDescription?: string | undefined;

  /**
   * Defines the IDs of the HTML Elements that describe the component.
   *
   * **Note:** Available since [v2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleDescriptionRef?: string | undefined;

  /**
   * Defines the accessible ARIA name of the component.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the component.
   *
   * **Note:** Available since [v1.1.0](https://github.com/UI5/webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Defines whether the component is disabled.
   * A disabled component can't be selected or
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
   * @default undefined
   */
  icon?: string | undefined;

  /**
   * Determines whether the component is displayed as selected.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the tooltip of the component.
   *
   * **Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.
   *
   * **Note:** Available since [v1.2.0](https://github.com/UI5/webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  tooltip?: string | undefined;
}

interface SegmentedButtonItemDomRef extends Required<SegmentedButtonItemAttributes>, Ui5DomRef {}

interface SegmentedButtonItemPropTypes
  extends
    SegmentedButtonItemAttributes,
    Omit<CommonProps, keyof SegmentedButtonItemAttributes | 'children' | 'onClick'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   *
   * __Supported Node Type/s:__ `Array<Node>`
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event will not be fired if the `disabled` property is set to `true`.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * **Note:** Available since [v2.22.0](https://github.com/UI5/webcomponents/releases/tag/v2.22.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onClick?: (event: Ui5CustomEvent<SegmentedButtonItemDomRef, SegmentedButtonItemClickEventDetail>) => void;
}

/**
 * Users can use the `SegmentedButtonItem` as part of a `SegmentedButton`.
 *
 * Clicking or tapping on a `SegmentedButtonItem` changes its state to `selected`.
 * The item returns to its initial state when the user clicks or taps on it again.
 * By applying additional custom CSS-styling classes, apps can give a different style to any
 * `SegmentedButtonItem`.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [SegmentedButtonItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/SegmentedButtonItem) | [Repository](https://github.com/UI5/webcomponents)
 */
const SegmentedButtonItem = withWebComponent<SegmentedButtonItemPropTypes, SegmentedButtonItemDomRef>(
  'ui5-segmented-button-item',
  ['accessibleDescription', 'accessibleDescriptionRef', 'accessibleName', 'accessibleNameRef', 'icon', 'tooltip'],
  ['disabled', 'selected'],
  [],
  ['click'],
);

SegmentedButtonItem.displayName = 'SegmentedButtonItem';

export { SegmentedButtonItem };
export type { SegmentedButtonItemDomRef, SegmentedButtonItemPropTypes };
