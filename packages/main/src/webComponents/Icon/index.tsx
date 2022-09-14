import '@ui5/webcomponents/dist/Icon.js';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface IconAttributes {
  /**
   * Defines the text alternative of the component. If not provided a default text alternative will be set, if present.
   *
   * **Note:** Every icon should have a text alternative in order to calculate its accessible name.
   */
  accessibleName?: string;
  /**
   * Defines the accessibility role of the component.
   */
  accessibleRole?: string;
  /**
   * Defines if the icon is interactive (focusable and pressable)
   */
  interactive?: boolean;
  /**
   * Defines the unique identifier (icon name) of the component.
   * To browse all available icons, see the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">SAP Icons</ui5-link>, <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT" class="api-table-content-cell-link">SAP Fiori Tools</ui5-link> and <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">SAP Business Suite</ui5-link> collections.
   * Example:
   * `name='add'`, `name='delete'`, `name='employee'`.
   *
   * **Note:** To use the SAP Fiori Tools icons, you need to set the `tnt` prefix in front of the icon's name.
   * Example:
   * `name='tnt/antenna'`, `name='tnt/actor'`, `name='tnt/api'`.
   *
   * **Note:** To use the SAP Business Suite icons, you need to set the `business-suite` prefix in front of the icon's name.
   * Example:
   * `name='business-suite/3d'`, `name='business-suite/1x2-grid-layout'`, `name='business-suite/4x4-grid-layout'`.
   */
  name?: string;
  /**
   * Defines whether the component should have a tooltip.
   */
  showTooltip?: boolean;
}

export interface IconDomRef extends IconAttributes, Ui5DomRef {}

export interface IconPropTypes extends IconAttributes, CommonProps {}

/**
 * The `Icon` component represents an SVG icon. There are two main scenarios how the `Icon` component is used: as a purely decorative element,
 * or as an interactive element that can be focused and clicked.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Icon" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Icon = withWebComponent<IconPropTypes, IconDomRef>(
  'ui5-icon',
  ['accessibleName', 'accessibleRole', 'name'],
  ['interactive', 'showTooltip'],
  [],
  []
);

Icon.displayName = 'Icon';

export { Icon };
