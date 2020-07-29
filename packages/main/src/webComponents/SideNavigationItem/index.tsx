import '@ui5/webcomponents-fiori/dist/SideNavigationItem';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface SideNavigationItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines if the item is expanded
   */
  expanded?: boolean;
  /**
   * Defines the icon of the item.
   */
  icon?: string;
  /**
   * Defines whether the subitem is selected
   */
  selected?: boolean;
  /**
   * Defines the text of the item.
   */
  text?: string;
  /**
   * If you wish to nest menus, you can pass inner menu items to the default slot.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * <code>import { SideNavigationItem } from '@ui5/webcomponents-react/lib/SideNavigationItem';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/SideNavigationItem" target="_blank">UI5 Web Components Playground</a>
 */
const SideNavigationItem: FC<SideNavigationItemPropTypes> = withWebComponent<SideNavigationItemPropTypes>(
  'ui5-side-navigation-item',
  ['icon', 'text'],
  ['expanded', 'selected'],
  [],
  []
);

SideNavigationItem.displayName = 'SideNavigationItem';

SideNavigationItem.defaultProps = {
  expanded: false,
  selected: false
};

export { SideNavigationItem };
