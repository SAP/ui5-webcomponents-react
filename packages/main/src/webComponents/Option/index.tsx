'use client';

import '@ui5/webcomponents/dist/Option.js';
import type { ListItemBaseClickEventDetail } from '@ui5/webcomponents/dist/ListItemBase.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface OptionAttributes {
  /**
   * Defines the `additionalText`, displayed in the end of the option.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  additionalText?: string | undefined;

  /**
   * Defines the `icon` source URI.
   *
   * **Note:**
   * SAP-icons font provides numerous built-in icons. To find all the available icons, see the
   * [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default undefined
   */
  icon?: string | undefined;

  /**
   * Defines the selected state of the component.
   * @default false
   * @deprecated since 2.20.0, please use the parent Select's `value` property instead.
   */
  selected?: boolean;

  /**
   * Defines the tooltip of the option.
   *
   * **Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  tooltip?: string | undefined;

  /**
   * Defines the value of the `Select` inside an HTML Form element when this component is selected.
   * For more information on HTML Form support, see the `name` property of `Select`.
   * @default undefined
   */
  value?: string | undefined;
}

interface OptionDomRef extends Required<OptionAttributes>, Ui5DomRef {}

interface OptionPropTypes extends OptionAttributes, Omit<CommonProps, keyof OptionAttributes | 'children' | 'onClick'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   *
   * __Supported Node Type/s:__ `Array<Node>`
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event will not be fired if the `disabled` property is set to `true`.
   *
   * **Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onClick?: (event: Ui5CustomEvent<OptionDomRef, ListItemBaseClickEventDetail>) => void;
}

/**
 * The `Option` component defines the content of an option in the `Select`.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [Option UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Option) | [Repository](https://github.com/UI5/webcomponents)
 */
const Option = withWebComponent<OptionPropTypes, OptionDomRef>(
  'ui5-option',
  ['additionalText', 'icon', 'tooltip', 'value'],
  ['selected'],
  [],
  ['click'],
);

Option.displayName = 'Option';

export { Option };
export type { OptionDomRef, OptionPropTypes };
