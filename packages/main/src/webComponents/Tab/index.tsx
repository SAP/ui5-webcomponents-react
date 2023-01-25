import '@ui5/webcomponents/dist/Tab.js';
import { ReactNode } from 'react';
import { SemanticColor } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';
import { UI5WCSlotsNode } from '../../types';

interface TabAttributes {
  /**
   * Represents the "additionalText" text, which is displayed in the tab.
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
   */
  design?: SemanticColor | keyof typeof SemanticColor;
  /**
   * Enabled items can be selected.
   */
  disabled?: boolean;
  /**
   * Defines the icon source URI to be displayed as graphical element within the component. The SAP-icons font provides numerous built-in icons. See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Specifies if the component is selected.
   */
  selected?: boolean;
  /**
   * The text to be displayed for the item.
   */
  text?: string;
}

export interface TabDomRef extends TabAttributes, Ui5DomRef {
  /**
   * Returns the DOM reference of the tab that is placed in the header. **Note:** Tabs, placed in the `subTabs` slot of other tabs are not shown in the header. Calling this method on such tabs will return `null`. **Note:** If you need a DOM ref to the tab content please use the `getDomRef` method.
   */
  getTabInStripDomRef: () => void;
}

export interface TabPropTypes extends TabAttributes, CommonProps {
  /**
   * Holds the content associated with this tab.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines hierarchies with nested sub tabs.
   *
   * **Note:** Use `Tab` and `TabSeparator` for the intended design.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="subTabs"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  subTabs?: UI5WCSlotsNode | UI5WCSlotsNode[];
}

/**
 * The `Tab` represents a selectable item inside a `Tabcontainer`. It defines both the item in the tab strip (top part of the `Tabcontainer`) and the content that is presented to the user once the tab is selected
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TabContainer" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Tab = withWebComponent<TabPropTypes, TabDomRef>(
  'ui5-tab',
  ['additionalText', 'design', 'icon', 'text'],
  ['disabled', 'selected'],
  ['subTabs'],
  []
);

Tab.displayName = 'Tab';

Tab.defaultProps = {
  design: SemanticColor.Default
};

export { Tab };
