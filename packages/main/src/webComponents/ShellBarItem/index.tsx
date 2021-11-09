import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5DomRef } from '@ui5/webcomponents-react/interfaces/Ui5DomRef';
import { MouseEventHandler } from 'react';

import '@ui5/webcomponents-fiori/dist/ShellBarItem.js';

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
   */
  text?: string;
}

export interface ShellBarItemDomRef extends ShellBarItemAttributes, Ui5DomRef {}

export interface ShellBarItemPropTypes extends ShellBarItemAttributes, Omit<CommonProps, 'onClick'> {
  /**
   * Fired, when the item is pressed.
   */
  onClick?: MouseEventHandler<HTMLElement>;
}

/**
 * The `ShellBarItem` represents a custom item, that might be added to the `ShellBar`.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ShellBarItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ShellBarItem = withWebComponent<ShellBarItemPropTypes, ShellBarItemDomRef>(
  'ui5-shellbar-item',
  ['count', 'icon', 'text'],
  [],
  [],
  ['click']
);

ShellBarItem.displayName = 'ShellBarItem';

export { ShellBarItem };
