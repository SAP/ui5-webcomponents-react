import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/Option.js';

export interface OptionPropTypes extends CommonProps {
  /**
   * Defines whether the component is in disabled state.
   *
   * **Note:** A disabled component is noninteractive.
   */
  disabled?: boolean;
  /**
   * Defines the `icon` source URI.
   *
   * **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines the selected state of the component.
   */
  selected?: boolean;
  /**
   * Defines the value of the `Select` inside an HTML Form element when this component is selected. For more information on HTML Form support, see the `name` property of `Select`.
   */
  value?: string;
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `Option` component defines the content of an option in the `Select`
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Option" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Option = withWebComponent<OptionPropTypes>('ui5-option', ['icon', 'value'], ['disabled', 'selected'], [], []);

Option.displayName = 'Option';

export { Option };
