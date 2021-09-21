import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Option.js';
import { FC } from 'react';

export interface OptionPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines whether `Option` is in disabled state.
   *
   * **Note:** A disabled `Option` is noninteractive.
   */
  disabled?: boolean;
  /**
   * Defines the `icon` source URI.
   *
   * **Note:** SAP-icons font provides numerous buil-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines the selected state of the `Option`.
   */
  selected?: boolean;
  /**
   * Defines the stable selector that you can use via getStableDomRef method.
   */
  stableDomRef?: unknown;
  /**
   * Defines the value of the `Select` inside an HTML Form element when this `Option` is selected. For more information on HTML Form support, see the `name` property of `Select`.
   */
  value?: string;
}

/**
 * The `Option` component defines the content of an option in the `Select`
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Option" target="_blank">UI5 Web Components Playground</a>
 */
const Option: FC<OptionPropTypes> = withWebComponent<OptionPropTypes>(
  'ui5-option',
  ['icon', 'stableDomRef', 'value'],
  ['disabled', 'selected'],
  [],
  []
);

Option.displayName = 'Option';

Option.defaultProps = {
  disabled: false,
  selected: false
};

export { Option };
