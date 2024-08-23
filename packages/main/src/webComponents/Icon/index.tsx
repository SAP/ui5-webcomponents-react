'use client';

import '@ui5/webcomponents/dist/Icon.js';
import type IconDesign from '@ui5/webcomponents/dist/types/IconDesign.js';
import type IconMode from '@ui5/webcomponents/dist/types/IconMode.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface IconAttributes {
  /**
   * Defines the text alternative of the component.
   * If not provided a default text alternative will be set, if present.
   *
   * **Note:** Every icon should have a text alternative in order to
   * calculate its accessible name.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines the component semantic design.
   *
   * **Note:** Available since [v1.9.2](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.2) of **@ui5/webcomponents**.
   * @default "Default"
   */
  design?: IconDesign | keyof typeof IconDesign;

  /**
   * Defines the mode of the component.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   * @default "Image"
   */
  mode?: IconMode | keyof typeof IconMode;

  /**
   * Defines the unique identifier (icon name) of the component.
   *
   * To browse all available icons, see the
   * [SAP Icons](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html),
   * [SAP Fiori Tools](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT) and
   * [SAP Business Suite](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html)
   *
   * Example:
   * `name='add'`, `name='delete'`, `name='employee'`.
   *
   * **Note:** To use the SAP Fiori Tools icons,
   * you need to set the `tnt` prefix in front of the icon's name.
   *
   * Example:
   * `name='tnt/antenna'`, `name='tnt/actor'`, `name='tnt/api'`.
   *
   * **Note:** To use the SAP Business Suite icons,
   * you need to set the `business-suite` prefix in front of the icon's name.
   *
   * Example:
   * `name='business-suite/3d'`, `name='business-suite/1x2-grid-layout'`, `name='business-suite/4x4-grid-layout'`.
   * @default undefined
   */
  name?: string | undefined;

  /**
   * Defines whether the component should have a tooltip.
   *
   * **Note:** The tooltip text should be provided via the `accessible-name` property.
   * @default false
   */
  showTooltip?: boolean;
}

interface IconDomRef extends Required<IconAttributes>, Ui5DomRef {}

interface IconPropTypes extends IconAttributes, Omit<CommonProps, keyof IconAttributes> {}

/**
 * The `Icon` component represents an SVG icon.
 * There are two main scenarios how the `Icon` component is used:
 * as a purely decorative element,
 * or as an interactive element that can be focused and clicked.
 *
 * ### Usage
 *
 * 1. **Get familiar with the icons collections.**
 *
 * Before displaying an icon, you need to explore the icons collections to find and import the desired icon.
 *
 * Currently there are 3 icons collection, available as 3 npm packages:
 *
 * - [@ui5/webcomponents-icons](https://www.npmjs.com/package/@ui5/webcomponents-icons) represents the "SAP-icons" collection and includes the following
 * [icons](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons).
 * - [@ui5/webcomponents-icons-tnt](https://www.npmjs.com/package/@ui5/webcomponents-icons-tnt) represents the "tnt" collection and includes the following
 * [icons](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT).
 * - [@ui5/webcomponents-icons-icons-business-suite](https://www.npmjs.com/package/@ui5/webcomponents-icons-business-suite) represents the "business-suite" collection and includes the following
 * [icons](https://ui5.sap.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/BusinessSuiteInAppSymbols).
 *
 * 2. **After exploring the icons collections, add one or more of the packages as dependencies to your project.**
 *
 * `npm i @ui5/webcomponents-icons`
 * `npm i @ui5/webcomponents-icons-tnt`
 * `npm i @ui5/webcomponents-icons-business-suite`
 *
 * 3. **Then, import the desired icon**.
 *
 * `import "@ui5/\{package_name\}/dist/\{icon_name\}.js";`
 *
 * **For Example**:
 *
 * For the standard "SAP-icons" icon collection, import an icon from the `@ui5/webcomponents-icons` package:
 *
 * `import "@ui5/webcomponents-icons/dist/employee.js";`
 *
 * For the "tnt" (SAP Fiori Tools) icon collection, import an icon from the `@ui5/webcomponents-icons-tnt` package:
 *
 * `import "@ui5/webcomponents-icons-tnt/dist/antenna.js";`
 *
 * For the "business-suite" (SAP Business Suite) icon collection, import an icon from the `@ui5/webcomponents-icons-business-suite` package:
 *
 * `import "@ui5/webcomponents-icons-business-suite/dist/ab-testing.js";`
 *
 * 4. **Display the icon using the `Icon` web component.**
 * Set the icon collection ("SAP-icons", "tnt" or "business-suite" - "SAP-icons" is the default icon collection and can be skipped)
 * and the icon name to the `name` property.
 *
 * `<Icon name="employee"></Icon>`
 * `<Icon name="tnt/antenna"></Icon>`
 * `<Icon name="business-suite/ab-testing"></Icon>`
 *
 * ### Keyboard Handling
 *
 * - [Space] / [Enter] or [Return] - Fires the `click` event if the `mode` property is set to `Interactive`.
 * - [Shift] - If [Space] / [Enter] or [Return] is pressed, pressing [Shift] releases the ui5-icon without triggering the click event.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const Icon = withWebComponent<IconPropTypes, IconDomRef>(
  'ui5-icon',
  ['accessibleName', 'design', 'mode', 'name'],
  ['showTooltip'],
  [],
  []
);

Icon.displayName = 'Icon';

export { Icon };
export type { IconDomRef, IconPropTypes };
