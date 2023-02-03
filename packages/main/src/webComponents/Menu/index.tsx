'use client';

import '@ui5/webcomponents/dist/Menu.js';
import { ReactNode } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface MenuAttributes {
  /**
   * Defines the header text of the menu (displayed on mobile).
   */
  headerText?: string;
  /**
   * Indicates if the menu is open
   */
  open?: boolean;
  /**
   * Defines the ID or DOM Reference of the element that the menu is shown at
   */
  opener?: string | HTMLElement;
}

export interface MenuDomRef extends MenuAttributes, Ui5DomRef {
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

export interface MenuPropTypes extends MenuAttributes, CommonProps {
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
  onBeforeClose?: (event: Ui5CustomEvent<MenuDomRef, { escPressed: boolean }>) => void;
  /**
   * Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening. **This event does not bubble.**
   */
  onBeforeOpen?: (event: Ui5CustomEvent<MenuDomRef>) => void;
  /**
   * Fired when an item is being clicked.
   */
  onItemClick?: (event: Ui5CustomEvent<MenuDomRef, { item: Record<string, unknown>; text: string }>) => void;
}

/**
 * `Menu` component represents a hierarchical menu structure.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Menu" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Menu = withWebComponent<MenuPropTypes, MenuDomRef>(
  'ui5-menu',
  ['headerText', 'opener'],
  ['open'],
  [],
  ['after-close', 'after-open', 'before-close', 'before-open', 'item-click'],
  '@ui5/webcomponents/dist/Menu.js'
);

Menu.displayName = 'Menu';

export { Menu };
