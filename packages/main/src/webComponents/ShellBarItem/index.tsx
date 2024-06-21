'use client';

import '@ui5/webcomponents-fiori/dist/ShellBarItem.js';
import type { ShellBarItemClickEventDetail } from '@ui5/webcomponents-fiori/dist/ShellBarItem.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface ShellBarItemAttributes {
  /**
   * Defines the count displayed in the top-right corner.
   */
  count?: string;

  /**
   * Defines the name of the item's icon.
   */
  icon?: string;

  /**
   * Defines the item text.
   *
   *   **Note:** The text is only displayed inside the overflow popover list view.
   */
  text?: string;
}

interface ShellBarItemDomRef extends Required<ShellBarItemAttributes>, Ui5DomRef {}

interface ShellBarItemPropTypes
  extends ShellBarItemAttributes,
    Omit<CommonProps, keyof ShellBarItemAttributes | 'onClick'> {
  /**
   * Fired, when the item is pressed.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
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
  ['count', 'icon', 'text'],
  [],
  [],
  ['click'],
  () => import('@ui5/webcomponents-fiori/dist/ShellBarItem.js')
);

ShellBarItem.displayName = 'ShellBarItem';

export { ShellBarItem };
export type { ShellBarItemDomRef, ShellBarItemPropTypes };
