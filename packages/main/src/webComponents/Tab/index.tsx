import { SemanticColor } from '@ui5/webcomponents-react/dist/SemanticColor';
import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/Tab';

export interface TabPropTypes extends CommonProps {
  /**
   * Represents the "additionalText" text, which is displayed in the tab filter.
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
  design?: SemanticColor;
  /**
   * Enabled items can be selected.
   */
  disabled?: boolean;
  /**
   * Defines the icon source URI to be displayed as graphical element within the component. The SAP-icons font provides numerous built-in icons. See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Specifies if the component is selected.
   */
  selected?: boolean;
  /**
   * Defines the stable selector that you can use via getStableDomRef method.
   */
  stableDomRef?: string;
  /**
   * The text to be displayed for the item.
   */
  text?: string;
  /**
   * Defines the tab content.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `Tab` represents a selectable item inside a `Tabcontainer`. It defines both the item in the tab strip (top part of the `Tabcontainer`) and the content that is presented to the user once the tab is selected
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Tab" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Tab = withWebComponent<TabPropTypes>(
  'ui5-tab',
  ['additionalText', 'design', 'icon', 'stableDomRef', 'text'],
  ['disabled', 'selected'],
  [],
  []
);

Tab.displayName = 'Tab';

Tab.defaultProps = {
  design: SemanticColor.Default,
  disabled: false,
  selected: false
};

export { Tab };
