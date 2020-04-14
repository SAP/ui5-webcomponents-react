import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Icon';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface IconPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the text alternative of the <code>ui5-icon</code>. If not provided a default text alternative will be set, if present. <br><br> <b>Note:</b> Every icon should have a text alternative in order to calculate its accessible name.
   */
  accessibleName?: string;
  /**
   * Defines the unique identifier (icon name) of each <code>ui5-icon</code>. <br><br> To browse all available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>. <br><br> Example: <br> <code>name='add'</code>, <code>name='delete'</code>, <code>name='employee'</code>.
   */
  name?: string;
  /**
   * Defines whether the <code>ui5-icon</code> should have a tooltip.
   */
  showTooltip?: boolean;
}

/**
 * <code>import { Icon } from '@ui5/webcomponents-react/lib/Icon';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Icon" target="_blank">UI5 Web Components Playground</a>
 */
const Icon: FC<IconPropTypes> = withWebComponent<IconPropTypes>(
  'ui5-icon',
  ['accessibleName', 'name'],
  ['showTooltip'],
  [],
  []
);

Icon.displayName = 'Icon';

Icon.displayName = 'Icon';

Icon.defaultProps = {
  accessibleName: '',
  name: '',
  showTooltip: false
};

export { Icon };
