import { TabContainerTabsPlacement } from '@ui5/webcomponents-react/lib/TabContainerTabsPlacement';
import { TabLayout } from '@ui5/webcomponents-react/lib/TabLayout';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/TabContainer';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TabContainerPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines whether the tab content is collapsed.
   */
  collapsed?: boolean;
  /**
   * Defines whether the tabs are in a fixed state that is not expandable/collapsible by user interaction.
   */
  fixed?: boolean;
  /**
   * Defines whether the overflow select list is displayed. <br><br> The overflow select list represents a list, where all tab filters are displayed so that it's easier for the user to select a specific tab filter.
   */
  showOverflow?: boolean;
  /**
   * Defines the alignment of the <code>main text</code> and the <code>additionalText</code> of a tab.<br/><br/>
   *
   * <b>Note:</b> The <code>main text</code> and the <code>additionalText</code> would be displayed vertically by defualt, but when set to <code>Inline</code>, they would be displayed horizontally.<br/><br/>
   *
   * Available options are: <ul> <li><code>Standard</code></li> <li><code>Inline</code></li> <ul>
   */
  tabLayout?: TabLayout;
  /**
   * Defines the placement of the tab strip (tab buttons area) relative to the actual tabs' content. <br><br> <b>Note:</b> By default the tab strip is displayed above the tabs' content area and this is the recommended layout for most scenarios. Set to <code>Bottom</code> only when the <code>ui5-tabcontainer</code> is at the bottom of the page and you want the tab strip to act as a menu.
   */
  tabsPlacement?: TabContainerTabsPlacement;
  /**
   * Defines the tabs. <br><br> <b>Note:</b> Use <code>ui5-tab</code> and <code>ui5-tab-separator</code> for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when a tab is selected.
   */
  onTabSelect?: (event: CustomEvent<{ tab: ReactNode; tabIndex: number }>) => void;
}

/**
 * <code>import { TabContainer } from '@ui5/webcomponents-react/lib/TabContainer';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/TabContainer" target="_blank">UI5 Web Components Playground</a>
 */
const TabContainer: FC<TabContainerPropTypes> = withWebComponent<TabContainerPropTypes>(
  'ui5-tabcontainer',
  ['tabLayout', 'tabsPlacement'],
  ['collapsed', 'fixed', 'showOverflow'],
  [],
  ['tab-select']
);

TabContainer.displayName = 'TabContainer';

TabContainer.defaultProps = {
  collapsed: false,
  fixed: false,
  showOverflow: false,
  tabLayout: TabLayout.Standard,
  tabsPlacement: TabContainerTabsPlacement.Top
};

export { TabContainer };
