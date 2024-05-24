'use client';

import '@ui5/webcomponents/dist/Menu.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';
import type {
  MenuBeforeCloseEventDetail,
  MenuBeforeOpenEventDetail,
  MenuItemClickEventDetail,
  MenuItemFocusEventDetail
} from '@ui5/webcomponents/dist/Menu.js';
import type { ReactNode } from 'react';

interface MenuAttributes {
  /**
   * Defines the header text of the menu (displayed on mobile).
   */
  headerText?: string;

  /**
   * Defines if a loading indicator would be displayed inside the corresponding ui5-menu popover.
   *
   * **Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.
   * @default false
   */
  loading?: boolean;

  /**
   * Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover..
   *
   * **Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.
   * @default 1000
   */
  loadingDelay?: number;

  /**
   * Indicates if the menu is open
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   * @default false
   */
  open?: boolean;

  /**
   * Defines the ID or DOM Reference of the element that the menu is shown at
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   */
  opener?: string;
}

interface MenuDomRef extends Omit<Required<MenuAttributes>, 'opener'>, Ui5DomRef {
  /**
   * Closes the Menu.
   * @returns {void}
   */
  close: () => void;

  /**
   * Defines the ID or DOM Reference of the element that the menu is shown at
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   */
  opener: HTMLElement | string;

  /**
   * Shows the Menu near the opener element.
   * @param {HTMLElement | EventTarget} opener - the element that the popover is shown at
   * @returns {Promise<void>}
   */
  showAt: (opener: HTMLElement | EventTarget) => Promise<void>;
}

interface MenuPropTypes
  extends MenuAttributes,
    Omit<
      CommonProps,
      | keyof MenuAttributes
      | 'children'
      | 'onBeforeClose'
      | 'onBeforeOpen'
      | 'onClose'
      | 'onItemClick'
      | 'onItemFocus'
      | 'onOpen'
    > {
  /**
   * Defines the items of this component.
   *
   * **Note:** Use `MenuItem` for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. **This event does not bubble.**
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   */
  onBeforeClose?: (event: Ui5CustomEvent<MenuDomRef, MenuBeforeCloseEventDetail>) => void;

  /**
   * Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening. **This event does not bubble.**
   *
   * **Note:** Since 1.14.0 the event is also fired before a sub-menu opens.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   */
  onBeforeOpen?: (event: Ui5CustomEvent<MenuDomRef, MenuBeforeOpenEventDetail>) => void;

  /**
   * Fired after the menu is closed. **This event does not bubble.**
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   */
  onClose?: (event: Ui5CustomEvent<MenuDomRef>) => void;

  /**
   * Fired when an item is being clicked.
   *
   * **Note:** Since 1.17.0 the event is preventable, allowing the menu to remain open after an item is pressed.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onItemClick?: (event: Ui5CustomEvent<MenuDomRef, MenuItemClickEventDetail>) => void;

  /**
   * Fired when a menu item receives focus.
   *
   * **Note:** Available since [v1.23.1](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.1) of **@ui5/webcomponents**.
   */
  onItemFocus?: (event: Ui5CustomEvent<MenuDomRef, MenuItemFocusEventDetail>) => void;

  /**
   * Fired after the menu is opened. **This event does not bubble.**
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   */
  onOpen?: (event: Ui5CustomEvent<MenuDomRef>) => void;
}

/**
 * `Menu` component represents a hierarchical menu structure.
 *
 * ### Usage
 *
 * `Menu` contains `MenuItem` components.
 * An arbitrary hierarchy structure can be represented by recursively nesting menu items.
 *
 * ### Keyboard Handling
 *
 * The `Menu` provides advanced keyboard handling.
 * The user can use the following keyboard shortcuts in order to navigate trough the tree:
 *
 * - `Arrow Up` / `Arrow Down` - Navigates up and down the menu items that are currently visible.
 * - `Arrow Right`, `Space` or `Enter` - Opens a sub-menu if there are menu items nested
 * in the currently clicked menu item.
 * - `Arrow Left` or `Escape` - Closes the currently opened sub-menu.
 *
 * Note: if the text ditrection is set to Right-to-left (RTL), `Arrow Right` and `Arrow Left` functionality is swapped.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [1.3.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.3.0) of __@ui5/webcomponents__.
 */
const Menu = withWebComponent<MenuPropTypes, MenuDomRef>(
  'ui5-menu',
  ['headerText', 'loadingDelay', 'opener'],
  ['loading', 'open'],
  [],
  ['before-close', 'before-open', 'close', 'item-click', 'item-focus', 'open'],
  () => import('@ui5/webcomponents/dist/Menu.js')
);

Menu.displayName = 'Menu';

export { Menu };
export type { MenuDomRef, MenuPropTypes };
