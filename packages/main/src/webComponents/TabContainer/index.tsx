'use client';

import '@ui5/webcomponents/dist/TabContainer.js';
import type { TabContainerTabSelectEventDetail } from '@ui5/webcomponents/dist/TabContainer.js';
import type { ReactNode } from 'react';
import { TabContainerBackgroundDesign, TabLayout, TabsOverflowMode } from '../../enums/index.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { UI5WCSlotsNode } from '../../types/index.js';
import type { TabDomRef } from '../Tab/index.js';
import type { TabSeparatorDomRef } from '../TabSeparator/index.js';

interface TabContainerAttributes {
  /**
   * Defines whether the tab content is collapsed.
   */
  collapsed?: boolean;
  /**
   * Sets the background color of the Tab Container's content as `Solid`, `Transparent`, or `Translucent`.
   */
  contentBackgroundDesign?: TabContainerBackgroundDesign | keyof typeof TabContainerBackgroundDesign;
  /**
   * Defines whether the tabs are in a fixed state that is not expandable/collapsible by user interaction.
   */
  fixed?: boolean;
  /**
   * Sets the background color of the Tab Container's header as `Solid`, `Transparent`, or `Translucent`.
   */
  headerBackgroundDesign?: TabContainerBackgroundDesign | keyof typeof TabContainerBackgroundDesign;
  /**
   * Defines whether the overflow select list is displayed.
   *
   * The overflow select list represents a list, where all tabs are displayed so that it's easier for the user to select a specific tab.
   */
  showOverflow?: boolean;
  /**
   * Defines the alignment of the content and the `additionalText` of a tab.
   *
   * **Note:** The content and the `additionalText` would be displayed vertically by default, but when set to `Inline`, they would be displayed horizontally.
   *
   * Available options are:
   *
   * *   `Standard`
   * *   `Inline`
   */
  tabLayout?: TabLayout | keyof typeof TabLayout;
  /**
   * Defines the overflow mode of the header (the tab strip). If you have a large number of tabs, only the tabs that can fit on screen will be visible. All other tabs that can 't fit on the screen are available in an overflow tab "More".
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
   * Returns all slotted tabs and their subTabs in a flattened array. The order of tabs is depth-first. For example, given the following slotted elements:
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
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="overflowButton"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  overflowButton?: UI5WCSlotsNode;
  /**
   * Defines the button which will open the start overflow menu if available. If nothing is provided to this slot, the default button will be used.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="startOverflowButton"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  startOverflowButton?: UI5WCSlotsNode;
  /**
   * Fired when a tab is selected.
   */
  onTabSelect?: (event: Ui5CustomEvent<TabContainerDomRef, TabContainerTabSelectEventDetail>) => void;
}

/**
 * The `TabContainer` represents a collection of tabs with associated content. Navigation through the tabs changes the content display of the currently active content area. A tab can be labeled with text only, or icons with text.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TabContainer" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const TabContainer = withWebComponent<TabContainerPropTypes, TabContainerDomRef>(
  'ui5-tabcontainer',
  ['contentBackgroundDesign', 'headerBackgroundDesign', 'tabLayout', 'tabsOverflowMode'],
  ['collapsed', 'fixed', 'showOverflow'],
  ['overflowButton', 'startOverflowButton'],
  ['tab-select'],
  () => import('@ui5/webcomponents/dist/TabContainer.js')
);

TabContainer.displayName = 'TabContainer';

TabContainer.defaultProps = {
  contentBackgroundDesign: TabContainerBackgroundDesign.Solid,
  headerBackgroundDesign: TabContainerBackgroundDesign.Solid,
  tabLayout: TabLayout.Standard,
  tabsOverflowMode: TabsOverflowMode.End
};

export { TabContainer };
