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
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when an item is being clicked.
   */
  onItemClick?: (event: Ui5CustomEvent<MenuDomRef, { item: Record<string, unknown>; text: string }>) => void;
}

/**
 * `Menu` component represents a hierarchical menu structure.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Menu" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Menu = withWebComponent<MenuPropTypes, MenuDomRef>('ui5-menu', ['headerText'], [], [], ['item-click']);

Menu.displayName = 'Menu';

export { Menu };
