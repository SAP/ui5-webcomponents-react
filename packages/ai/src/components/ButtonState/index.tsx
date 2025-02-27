'use client';

import '@ui5/webcomponents-ai/dist/ButtonState.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface ButtonStateAttributes {
  /**
   * Defines the icon to be displayed as graphical element within the component after the text.
   * The SAP-icons font provides numerous options.
   *
   * **Example:**
   *
   * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default undefined
   */
  endIcon?: string | undefined;

  /**
   * Defines the icon to be displayed as graphical element within the component before the text.
   * The SAP-icons font provides numerous options.
   *
   * **Example:**
   *
   * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default undefined
   */
  icon?: string | undefined;

  /**
   * Defines the name of the button state.
   * @default undefined
   */
  name?: string | undefined;

  /**
   * Defines if the component is in split button mode.
   *
   * **Note:** Available since [v2.6.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents-ai**.
   * @default false
   */
  showArrowButton?: boolean;

  /**
   * Defines the text of the button in this state.
   * @default undefined
   */
  text?: string | undefined;
}

interface ButtonStateDomRef extends Required<ButtonStateAttributes>, Ui5DomRef {}

interface ButtonStatePropTypes extends ButtonStateAttributes, Omit<CommonProps, keyof ButtonStateAttributes> {}

/**
 * `ButtonState` is the item to use for defining states of `Button` components.
 *
 * ### Usage
 *
 * `ui5-si-button-state` is an abstract element, representing a state of `Button`. It is meant to be used in the `states` slot
 * of `Button` and should be used as standalone component.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents-ai__.
 * @abstract
 * @experimental The Button and ButtonState web components are availabe since 2.0 under an experimental flag and their API and behaviour are subject to change.
 */
const ButtonState = withWebComponent<ButtonStatePropTypes, ButtonStateDomRef>(
  'ui5-ai-button-state',
  ['endIcon', 'icon', 'name', 'text'],
  ['showArrowButton'],
  [],
  []
);

ButtonState.displayName = 'ButtonState';

export { ButtonState };
export type { ButtonStateDomRef, ButtonStatePropTypes };
