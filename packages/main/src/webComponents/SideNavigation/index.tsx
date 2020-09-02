import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import { FC } from 'react';
import { ReactNode } from 'react';

export interface SideNavigationPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines whether the <code>ui5-side-navigation</code> is expanded or collapsed.
   */
  collapsed?: boolean;
  /**
   * Defines the main items of the <code>ui5-side-navigation</code>. Use the <code>ui5-side-navigation-item</code> component for the top-level items, and the <code>ui5-side-navigation-subitem</code> component for second-level items, nested inside the items.
   */
  children?: unknown;
  /**
   * Defines the fixed items at the bottom of the <code>ui5-side-navigation</code>. Use the <code>ui5-side-navigation-item</code> component for the fixed items, and optionally the <code>ui5-side-navigation-subitem</code> component to provide second-level items inside them.<br/><br/>
   *
   * <b>Note:</b> In order to achieve the best user experience, it is recommended that you keep the fixed items "flat" (do not pass sub-items)
   */
  fixedItems?: unknown;
  /**
   * Fired when the selection has changed via user interaction
   */
  onSelectionChange?: (event: CustomEvent<{ item: ReactNode }>) => void;
}

/**
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/SideNavigation" target="_blank">UI5 Web Components Playground</a>
 */
const SideNavigation: FC<SideNavigationPropTypes> = withWebComponent<SideNavigationPropTypes>(
  'ui5-side-navigation',
  () => import('@ui5/webcomponents-fiori/dist/SideNavigation'),
  [],
  ['collapsed'],
  ['fixedItems'],
  ['selection-change']
);

SideNavigation.displayName = 'SideNavigation';

SideNavigation.defaultProps = {
  collapsed: false
};

export { SideNavigation };
