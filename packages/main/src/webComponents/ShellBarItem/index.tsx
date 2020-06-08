import '@ui5/webcomponents-fiori/dist/ShellBarItem';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ShellBarItemPropTypes extends WithWebComponentPropTypes {
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
  /**
   * Fired, when the item is pressed.
   */
  onItemClick?: (event: CustomEvent<{ targetRef: ReactNode }>) => void;
}

/**
 * <code>import { ShellBarItem } from '@ui5/webcomponents-react/lib/ShellBarItem';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ShellBarItem" target="_blank">UI5 Web Components Playground</a>
 */
const ShellBarItem: FC<ShellBarItemPropTypes> = withWebComponent<ShellBarItemPropTypes>(
  'ui5-shellbar-item',
  ['count', 'icon', 'text'],
  [],
  [],
  ['item-click']
);

ShellBarItem.displayName = 'ShellBarItem';

ShellBarItem.defaultProps = {};

export { ShellBarItem };
