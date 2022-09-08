import '@ui5/webcomponents/dist/TabContainer.js';
import { ReactNode } from 'react';
import { TabLayout, TabsOverflowMode } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';
import { TabDomRef } from '../Tab';
import { TabSeparatorDomRef } from '../TabSeparator';

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
   * The overflow select list represents a list, where all tabs are displayed so that it's easier for the user to select a specific tab.
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
  /**
   * Defines the overflow mode of the tab strip. If you have a large number of tabs, only the tabs that can fit on screen will be visible. All other tabs that can 't fit on the screen are available in an overflow tab "More".
   *
   * **Note:** Only one overflow at the end would be displayed by default, but when set to `StartAndEnd`, there will be two overflows on both ends, and tab order will not change on tab selection.
   *
   * Available options are:
   *
   * *   `End`
   * *   `StartAndEnd`
   */
  tabsOverflowMode?: TabsOverflowMode | keyof typeof TabsOverflowMode;
}

export interface TabContainerDomRef extends TabContainerAttributes, Ui5DomRef {
  /**
   * Returns all slotted tabs and their subTabs in a flattened array. The order of tabs is depth-first.
   * For example, given the following slotted elements:
   *
   * ```
   * <Tab id="tab1">
   *   <Tab id="sub1" />
   * </Tab>
   * <Tab id="tab2" />
   * <TabSeparator id="separator" />
   * <Tab id="tab3" />
   * ```
   *
   * Calling `allItems` on this TabContainer will return the instances in the following order: `[ Tab#tab1, Tab#sub1, Tab#tab2, TabSeparator#separator, Tab#tab3 ]`
   */
  readonly allItems?: (TabDomRef | TabSeparatorDomRef)[];
}

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
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  overflowButton?: ReactNode;
  /**
   * Defines the button which will open the start overflow menu if available. If nothing is provided to this slot, the default button will be used.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  startOverflowButton?: ReactNode;
  /**
   * Fired when a tab is selected.
   */
  onTabSelect?: (event: Ui5CustomEvent<TabContainerDomRef, { tab: HTMLElement; tabIndex: number }>) => void;
}

/**
 * The `TabContainer` represents a collection of tabs with associated content. Navigation through the tabs changes the content display of the currently active content area. A tab can be labeled with text only, or icons with text.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TabContainer" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const TabContainer = withWebComponent<TabContainerPropTypes, TabContainerDomRef>(
  'ui5-tabcontainer',
  ['tabLayout', 'tabsOverflowMode'],
  ['collapsed', 'fixed', 'showOverflow'],
  ['overflowButton', 'startOverflowButton'],
  ['tab-select']
);

TabContainer.displayName = 'TabContainer';

TabContainer.defaultProps = {
  tabLayout: TabLayout.Standard,
  tabsOverflowMode: TabsOverflowMode.End
};

export { TabContainer };
