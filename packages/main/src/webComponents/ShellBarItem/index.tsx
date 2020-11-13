import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents-fiori/dist/ShellBarItem';
import { FC, ReactNode } from 'react';

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
   * Defines the stable selector that you can use via getStableDomRef method.
   */
  stableDomRef?: unknown;
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
 * The `ShellBarItem` represents a custom item, that might be added to the `ShellBar`.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ShellBarItem" target="_blank">UI5 Web Components Playground</a>
 */
const ShellBarItem: FC<ShellBarItemPropTypes> = withWebComponent<ShellBarItemPropTypes>(
  'ui5-shellbar-item',
  ['count', 'icon', 'stableDomRef', 'text'],
  [],
  [],
  ['item-click']
);

ShellBarItem.displayName = 'ShellBarItem';

ShellBarItem.defaultProps = {};

export { ShellBarItem };
