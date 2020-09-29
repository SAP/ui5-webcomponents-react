import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents-fiori/dist/SideNavigation';
import { FC } from 'react';
import { ReactNode } from 'react';

export interface SideNavigationPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines whether the <code>SideNavigation</code> is expanded or collapsed.
   */
  collapsed?: boolean;
  /**
   * Defines the main items of the <code>SideNavigation</code>. Use the <code>SideNavigation-item</code> component for the top-level items, and the <code>SideNavigation-subitem</code> component for second-level items, nested inside the items.
   */
  children?: unknown;
  /**
   * Defines the fixed items at the bottom of the <code>SideNavigation</code>. Use the <code>SideNavigation-item</code> component for the fixed items, and optionally the <code>SideNavigation-subitem</code> component to provide second-level items inside them.<br/><br/>
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
     * The <code>SideNavigation</code> is used as a standard menu in applications. It consists of two containers: the main
navigation section (top-aligned) and the secondary section (bottom-aligned). Usually the main navigation section is
related to the user’s current work context, whereas the secondary section is mostly used to link additional information
that may be of interest (legal information, developer communities, external help, contact information and so on).
     
     * <a href="https://sap.github.io/ui5-webcomponents/playground/components/SideNavigation" target="_blank">UI5 Web Components Playground</a>
     */
const SideNavigation: FC<SideNavigationPropTypes> = withWebComponent<SideNavigationPropTypes>(
  'ui5-side-navigation',
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
