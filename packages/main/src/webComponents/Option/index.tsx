import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Option';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface OptionPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the <code>icon</code> source URI. <br><br> <b>Note:</b> SAP-icons font provides numerous buil-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines the selected state of the <code>ui5-option</code>.
   */
  selected?: boolean;
  /**
   * Defines the value of the <code>ui5-select</code> inside an HTML Form element when this <code>ui5-option</code> is selected. For more information on HTML Form support, see the <code>name</code> property of <code>ui5-select</code>.
   */
  value?: string;
}

/**
 * <code>import { Option } from '@ui5/webcomponents-react/lib/Option';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Option" target="_blank">UI5 Web Components Playground</a>
 */
const Option: FC<OptionPropTypes> = withWebComponent<OptionPropTypes>(
  'ui5-option',
  ['icon', 'value'],
  ['selected'],
  [],
  []
);

Option.displayName = 'Option';

Option.defaultProps = {
  selected: false
};

export { Option };
