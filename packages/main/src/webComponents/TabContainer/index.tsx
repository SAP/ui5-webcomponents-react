import { TabLayout } from '@ui5/webcomponents-react/dist/TabLayout';
import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '@ui5/webcomponents-react/interfaces/Ui5DomRef';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/TabContainer.js';

interface TabContainerAttributes {
  /**
   * Defines whether the tab content is collapsed.
   */
  collapsed?: boolean;
  /**
   * Defines whether the tabs are in a fixed state that is not expandable/collapsible by user interaction.
   */
  fixed?: boolean;
  /**
   * Defines whether the overflow select list is displayed.
   *
   * The overflow select list represents a list, where all tab filters are displayed so that it's easier for the user to select a specific tab filter.
   */
  showOverflow?: boolean;
  /**
   * Defines the alignment of the content and the `additionalText` of a tab.
   *
   * **Note:** The content and the `additionalText` would be displayed vertically by defualt, but when set to `Inline`, they would be displayed horizontally.
   *
   * Available options are:
   *
   * *   `Standard`
   * *   `Inline`
   */
  tabLayout?: TabLayout | keyof typeof TabLayout;
}

export interface TabContainerDomRef extends TabContainerAttributes, Ui5DomRef {}

export interface TabContainerPropTypes extends TabContainerAttributes, CommonProps {
  /**
   * Defines the tabs.
   *
   * **Note:** Use `Tab` and `TabSeparator` for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the button which will open the overflow menu. If nothing is provided to this slot, the default button will be used.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  overflowButton?: ReactNode;
  /**
   * Fired when a tab is selected.
   */
  onTabSelect?: (event: Ui5CustomEvent<HTMLElement, { tab: ReactNode; tabIndex: number }>) => void;
}

/**
 * The `TabContainer` represents a collection of tabs with associated content. Navigation through the tabs changes the content display of the currently active content area. A tab can be labeled with text only, or icons with text.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TabContainer" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const TabContainer = withWebComponent<TabContainerPropTypes, TabContainerDomRef>(
  'ui5-tabcontainer',
  ['tabLayout'],
  ['collapsed', 'fixed', 'showOverflow'],
  ['overflowButton'],
  ['tab-select']
);

TabContainer.displayName = 'TabContainer';

TabContainer.defaultProps = {
  tabLayout: TabLayout.Standard
};

export { TabContainer };
