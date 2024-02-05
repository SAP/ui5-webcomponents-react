'use client';

import '@ui5/webcomponents/dist/Menu.js';
import type {
  MenuBeforeCloseEventDetail,
  MenuBeforeOpenEventDetail,
  MenuItemClickEventDetail
} from '@ui5/webcomponents/dist/Menu.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface MenuAttributes {
  /**
   * Defines if a loading indicator would be displayed inside the corresponding Menu popover.
   */
  busy?: boolean;
  /**
   * Defines the delay in milliseconds, after which the busy indicator will be displayed inside the corresponding Menu popover..
   */
  busyDelay?: number;
  /**
   * Defines the header text of the menu (displayed on mobile).
   */
  headerText?: string;
  /**
   * Indicates if the menu is open
   */
  open?: boolean;
  /**
   * Defines the ID of the element that the menu is shown at
   */
  opener?: string;
}

interface MenuDomRef extends Omit<MenuAttributes, 'opener'>, Ui5DomRef {
  /**
   * Defines the ID or DOM Reference of the element that the menu is shown at
   */
  opener?: string | HTMLElement;
  /**
   * Closes the Menu.
   */
  close: () => void;
  /**
   * Shows the Menu near the opener element.
   * @param {HTMLElement | EventTarget} opener - the element that the popover is shown at
   */
  showAt: (opener: HTMLElement | EventTarget) => void;
}

interface MenuPropTypes extends MenuAttributes, Omit<CommonProps, keyof MenuAttributes> {
  /**
   * Defines the items of this component.
   *
   * **Note:** Use `MenuItem` for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired after the menu is closed. **This event does not bubble.**
   */
  onAfterClose?: (event: Ui5CustomEvent<MenuDomRef>) => void;
  /**
   * Fired after the menu is opened. **This event does not bubble.**
   */
  onAfterOpen?: (event: Ui5CustomEvent<MenuDomRef>) => void;
  /**
   * Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. **This event does not bubble.**
   */
  onBeforeClose?: (event: Ui5CustomEvent<MenuDomRef, MenuBeforeCloseEventDetail>) => void;
  /**
   * Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening. **This event does not bubble.** **Note:** Since 1.16.0 the event is also fired before a sub-menu opens.
   */
  onBeforeOpen?: (event: Ui5CustomEvent<MenuDomRef, MenuBeforeOpenEventDetail>) => void;
  /**
   * Fired when an item is being clicked. **Note:** Since 1.19.0 the event is preventable, allowing the menu to remain open after an item is pressed.
   */
  onItemClick?: (event: Ui5CustomEvent<MenuDomRef, MenuItemClickEventDetail>) => void;
}

/**
 * `Menu` component represents a hierarchical menu structure.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Menu)
 */
const Menu = withWebComponent<MenuPropTypes, MenuDomRef>(
  'ui5-menu',
  ['busyDelay', 'headerText', 'opener'],
  ['busy', 'open'],
  [],
  ['after-close', 'after-open', 'before-close', 'before-open', 'item-click'],
  () => import('@ui5/webcomponents/dist/Menu.js')
);

Menu.displayName = 'Menu';

Menu.defaultProps = {
  busyDelay: 1000,
  opener: ''
};

export { Menu };
export type { MenuDomRef, MenuPropTypes };
