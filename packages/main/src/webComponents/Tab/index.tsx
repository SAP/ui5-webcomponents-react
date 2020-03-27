import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Tab from '@ui5/webcomponents/dist/Tab';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TabPropTypes extends WithWebComponentPropTypes {
  /**
   * Represents the "additionalText" text, which is displayed in the tab filter.
   */
  additionalText?: string;
  /**
   * Enabled items can be selected.
   */
  disabled?: boolean;
  /**
   * Defines the icon source URI to be displayed as graphical element within the <code>ui5-tab</code>. The SAP-icons font provides numerous built-in icons. See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Specifies if the <code>ui5-tab</code> is selected.
   */
  selected?: boolean;
  /**
 * Defines the <code>ui5-tab</code> semantic color. <br><br> The color is applied to: <ul> <li>the <code>ui5-tab</code> icon</li> <li>the <code>text</code> when <code>ui5-tab</code> overflows</li> <li>the tab selection line</li> </ul>

<br><br> Available semantic colors are: <code>"Default"</code>, <code>"Neutral"</code>, <code>"Positive"</code>, <code>"Critical"</code> and <code>"Negative"</code>.

<br><br> <b>Note:</b> The color value depends on the current theme.
 */
  semanticColor?: string;
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
 * <code>import { Tab } from '@ui5/webcomponents-react/lib/Tab';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Tab" target="_blank">UI5 Web Components Playground</a>
 */
const Tab: FC<TabPropTypes> = withWebComponent<TabPropTypes>(UI5Tab);

Tab.displayName = 'Tab';

Tab.defaultProps = {
  additionalText: '',
  disabled: false,
  icon: '',
  selected: false,
  semanticColor: 'Default',
  text: ''
};

export { Tab };
