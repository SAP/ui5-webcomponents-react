'use client';

import '@ui5/webcomponents/dist/Tab.js';
import type { ITab } from '@ui5/webcomponents/dist/Interfaces.js';
import type SemanticColor from '@ui5/webcomponents/dist/types/SemanticColor.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface TabAttributes {
  /**
   * Represents the "additionalText" text, which is displayed in the tab. In the cases when in the same time there are tabs with icons and tabs without icons, if a tab has no icon the "additionalText" is displayed larger.
   */
  additionalText?: string;

  /**
   * Defines the component's design color.
   *
   * The design is applied to:
   *
   * *   the component icon
   * *   the `text` when the component overflows
   * *   the tab selection line
   *
   *
   *
   * Available designs are: `"Default"`, `"Neutral"`, `"Positive"`, `"Critical"` and `"Negative"`.
   *
   * **Note:** The design depends on the current theme.
   * @default "Default"
   */
  design?: SemanticColor | keyof typeof SemanticColor;

  /**
   * Disabled tabs can't be selected.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the icon source URI to be displayed as graphical element within the component. The SAP-icons font provides numerous built-in icons. See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   */
  icon?: string;

  /**
   * Specifies if the component is selected.
   * @default false
   */
  selected?: boolean;

  /**
   * The text to be displayed for the item.
   */
  text?: string;
}

interface TabDomRef extends TabAttributes, Ui5DomRef {
  /**
   * Returns the DOM reference of the tab that is placed in the header. **Note:** Tabs, placed in the `subTabs` slot of other tabs are not shown in the header. Calling this method on such tabs will return `null`. **Note:** If you need a DOM ref to the tab content please use the `getDomRef` method.
   * @returns {ITab | null}
   */
  getTabInStripDomRef: () => ITab | null;
}

interface TabPropTypes extends TabAttributes, Omit<CommonProps, keyof TabAttributes> {
  /**
   * Holds the content associated with this tab.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines hierarchies with nested sub tabs.
   *
   * **Note:** Use `Tab` and `TabSeparator` for the intended design.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="subTabs"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  subTabs?: UI5WCSlotsNode;
}

/**
 * The `Tab` represents a selectable item inside a `TabContainer`. It defines both the item in the tab strip (top part of the `TabContainer`) and the content that is presented to the user once the tab is selected.
 *
 * @abstract
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const Tab = withWebComponent<TabPropTypes, TabDomRef>(
  'ui5-tab',
  ['additionalText', 'design', 'icon', 'text'],
  ['disabled', 'selected'],
  ['subTabs'],
  [],
  () => import('@ui5/webcomponents/dist/Tab.js')
);

Tab.displayName = 'Tab';

export { Tab };
export type { TabDomRef, TabPropTypes };
