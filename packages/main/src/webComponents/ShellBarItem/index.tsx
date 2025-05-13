'use client';

import '@ui5/webcomponents-fiori/dist/ShellBarItem.js';
import type {
  ShellBarItemAccessibilityAttributes,
  ShellBarItemClickEventDetail,
} from '@ui5/webcomponents-fiori/dist/ShellBarItem.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface ShellBarItemAttributes {
  /**
   * Defines additional accessibility attributes on Shellbar Items.
   *
   * The accessibility attributes support the following values:
   *
   * - **expanded**: Indicates whether the button, or another grouping element it controls,
   * is currently expanded or collapsed.
   * Accepts the following string values: `true` or `false`.
   *
   * - **hasPopup**: Indicates the availability and type of interactive popup element,
   * such as menu or dialog, that can be triggered by the button.
   *
   * - **controls**: Identifies the element (or elements) whose contents
   * or presence are controlled by the component.
   * Accepts a lowercase string value, referencing the ID of the element it controls.
   *
   * **Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents-fiori**.
   * @default {}
   */
  accessibilityAttributes?: ShellBarItemAccessibilityAttributes;

  /**
   * Defines the count displayed in the top-right corner.
   * @default undefined
   */
  count?: string | undefined;

  /**
   * Defines the name of the item's icon.
   * @default undefined
   */
  icon?: string | undefined;

  /**
   * Defines the item text.
   *
   * **Note:** The text is only displayed inside the overflow popover list view.
   * @default undefined
   */
  text?: string | undefined;
}

interface ShellBarItemDomRef extends Required<ShellBarItemAttributes>, Ui5DomRef {}

interface ShellBarItemPropTypes
  extends ShellBarItemAttributes,
    Omit<CommonProps, keyof ShellBarItemAttributes | 'onClick'> {
  /**
   * Fired, when the item is pressed.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onClick?: (event: Ui5CustomEvent<ShellBarItemDomRef, ShellBarItemClickEventDetail>) => void;
}

/**
 * The `ShellBarItem` represents a custom item, that
 * might be added to the `ShellBar`.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 * @abstract
 */
const ShellBarItem = withWebComponent<ShellBarItemPropTypes, ShellBarItemDomRef>(
  'ui5-shellbar-item',
  ['accessibilityAttributes', 'count', 'icon', 'text'],
  [],
  [],
  ['click'],
);

ShellBarItem.displayName = 'ShellBarItem';

export { ShellBarItem };
export type { ShellBarItemDomRef, ShellBarItemPropTypes };
