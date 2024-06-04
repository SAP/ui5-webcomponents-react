'use client';

import '@ui5/webcomponents/dist/TabContainer.js';
import type {
  ITab,
  TabContainerMoveEventDetail,
  TabContainerTabSelectEventDetail
} from '@ui5/webcomponents/dist/TabContainer.js';
import type BackgroundDesign from '@ui5/webcomponents/dist/types/BackgroundDesign.js';
import type OverflowMode from '@ui5/webcomponents/dist/types/OverflowMode.js';
import type TabLayout from '@ui5/webcomponents/dist/types/TabLayout.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface TabContainerAttributes {
  /**
   * Defines whether the tab content is collapsed.
   * @default false
   */
  collapsed?: boolean;

  /**
   * Sets the background color of the Tab Container's content as `Solid`, `Transparent`, or `Translucent`.
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   * @default "Solid"
   */
  contentBackgroundDesign?: BackgroundDesign | keyof typeof BackgroundDesign;

  /**
   * Sets the background color of the Tab Container's header as `Solid`, `Transparent`, or `Translucent`.
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   * @default "Solid"
   */
  headerBackgroundDesign?: BackgroundDesign | keyof typeof BackgroundDesign;

  /**
   * Defines the overflow mode of the header (the tab strip). If you have a large number of tabs, only the tabs that can fit on screen will be visible.
   * All other tabs that can 't fit on the screen are available in an overflow tab "More".
   *
   * **Note:**
   * Only one overflow at the end would be displayed by default,
   * but when set to `StartAndEnd`, there will be two overflows on both ends, and tab order will not change on tab selection.
   *
   * **Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.
   * @default "End"
   */
  overflowMode?: OverflowMode | keyof typeof OverflowMode;

  /**
   * Defines the alignment of the content and the `additionalText` of a tab.
   *
   * **Note:**
   * The content and the `additionalText` would be displayed vertically by default,
   * but when set to `Inline`, they would be displayed horizontally.
   * @default "Standard"
   */
  tabLayout?: TabLayout | keyof typeof TabLayout;
}

interface TabContainerDomRef extends Required<TabContainerAttributes>, Ui5DomRef {
  /**
   * Returns all slotted tabs and their subTabs in a flattened array.
   * The order of tabs is depth-first.
   */
  readonly allItems: Array<ITab>;
}

interface TabContainerPropTypes
  extends TabContainerAttributes,
    Omit<
      CommonProps,
      | keyof TabContainerAttributes
      | 'children'
      | 'overflowButton'
      | 'startOverflowButton'
      | 'onMove'
      | 'onMoveOver'
      | 'onTabSelect'
    > {
  /**
   * Defines the tabs.
   *
   * **Note:** Use `Tab` and `TabSeparator` for the intended design.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the button which will open the overflow menu. If nothing is provided to this slot,
   * the default button will be used.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="overflowButton"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  overflowButton?: UI5WCSlotsNode;

  /**
   * Defines the button which will open the start overflow menu if available. If nothing is provided to this slot,
   * the default button will be used.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="startOverflowButton"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.
   */
  startOverflowButton?: UI5WCSlotsNode;
  /**
   * Fired when element is moved to the tab container.
   *
   * **Note:** `move` event is fired only if there was a preceding `move-over` with prevented default action.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onMove?: (event: Ui5CustomEvent<TabContainerDomRef, TabContainerMoveEventDetail>) => void;

  /**
   * Fired when element is being moved over the tab container.
   *
   * If the new position is valid, prevent the default action of the event using `preventDefault()`.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   */
  onMoveOver?: (event: Ui5CustomEvent<TabContainerDomRef, TabContainerMoveEventDetail>) => void;

  /**
   * Fired when a tab is selected.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   */
  onTabSelect?: (event: Ui5CustomEvent<TabContainerDomRef, TabContainerTabSelectEventDetail>) => void;
}

/**
 * The `TabContainer` represents a collection of tabs with associated content.
 * Navigation through the tabs changes the content display of the currently active content area.
 * A tab can be labeled with text only, or icons with text.
 *
 * ### Structure
 *
 * The `TabContainer` can hold two types of entities:
 *
 * - `Tab` - contains all the information on an item (text and icon)
 * - `TabSeparator` - used to separate tabs with a line
 *
 * ### Hierarchies
 * Multiple sub tabs could be placed underneath one main tab. Nesting allows deeper hierarchies with indentations
 * to indicate the level of each nested tab. When a tab has both sub tabs and own content its click area is split
 * to allow the user to display the content or alternatively to expand / collapse the list of sub tabs.
 *
 * ### Keyboard Handling
 *
 * #### Fast Navigation
 * This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 *
 *
 * `import "@ui5/webcomponents/dist/Tab.js";` (for `Tab`)
 *
 * `import "@ui5/webcomponents/dist/TabSeparator.js";` (for `TabSeparator`)
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const TabContainer = withWebComponent<TabContainerPropTypes, TabContainerDomRef>(
  'ui5-tabcontainer',
  ['contentBackgroundDesign', 'headerBackgroundDesign', 'overflowMode', 'tabLayout'],
  ['collapsed'],
  ['overflowButton', 'startOverflowButton'],
  ['move-over', 'move', 'tab-select'],
  () => import('@ui5/webcomponents/dist/TabContainer.js')
);

TabContainer.displayName = 'TabContainer';

export { TabContainer };
export type { TabContainerDomRef, TabContainerPropTypes };
