import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Icon';
import { FC } from 'react';

export interface IconPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the text alternative of the <code>Icon</code>. If not provided a default text alternative will be set, if present. <br><br> <b>Note:</b> Every icon should have a text alternative in order to calculate its accessible name.
   */
  accessibleName?: string;
  /**
   * Defines if the icon is interactive (focusable and pressable)
   */
  interactive?: boolean;
  /**
   * Defines the unique identifier (icon name) of each <code>Icon</code>. <br><br/><br/>
   *
   * To browse all available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>. <br><br/><br/>
   *
   * Example: <br> <code>name='add'</code>, <code>name='delete'</code>, <code>name='employee'</code>. <br><br><br/><br/>
   *
   * <b>Note:</b> To use the SAP Fiori Tools icons, you need to set the <code>tnt</code> prefix in front of the icon's name. <br><br/><br/>
   *
   * Example: <br> <code>name='tnt/antenna'</code>, <code>name='tnt/actor'</code>, <code>name='tnt/api'</code>.
   */
  name?: string;
  /**
   * Defines whether the <code>Icon</code> should have a tooltip.
   */
  showTooltip?: boolean;
}

/**
 *  The <code>Icon</code> component represents an SVG icon. There are two main scenarios how the <code>Icon</code> component is used: as a purely decorative element; or as a visually appealing clickable area in the form of an icon button. <br><br> A large set of built-in icons is available and they can be used by setting the <code>name</code> property on the <code>Icon</code>. But before using an icon, you need to import the desired icon. <br> For the standard icon collection, you have to import an icon from the <code>@ui5/webcomponents-icons</code> package: <br> <code>import "@ui5/webcomponents-icons/dist/employee.js";</code> <br> For the SAP Fiori Tools icon collection (supported since 1.0.0-rc.10), you have to import an icon from the <code>@ui5/webcomponents-icons-tnt</code> package: <br> <code>import "@ui5/webcomponents-icons-tnt/dist/antenna.js";</code>
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Icon" target="_blank">UI5 Web Components Playground</a>
 */
const Icon: FC<IconPropTypes> = withWebComponent<IconPropTypes>(
  'ui5-icon',
  ['accessibleName', 'name'],
  ['interactive', 'showTooltip'],
  [],
  []
);

Icon.displayName = 'Icon';

Icon.defaultProps = {
  interactive: false,
  showTooltip: false
};

export { Icon };
