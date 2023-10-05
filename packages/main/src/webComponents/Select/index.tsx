'use client';

import '@ui5/webcomponents/dist/Select.js';
import type { SelectChangeEventDetail, SelectLiveChangeEventDetail } from '@ui5/webcomponents/dist/Select.js';
import type { ReactNode } from 'react';
import { ValueState } from '../../enums/index.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { UI5WCSlotsNode } from '../../types/index.js';

interface SelectAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;
  /**
   * Receives id(or many ids) of the elements that label the select.
   */
  accessibleNameRef?: string;
  /**
   * Defines whether the component is in disabled state.
   *
   * **Note:** A disabled component is noninteractive.
   */
  disabled?: boolean;
  /**
   * Defines the ID of the component's options menu, as an alternative to defining the selection's drop-down menu.
   *
   * **Note:** Usage of `SelectMenu` is recommended.
   */
  menu?: string;
  /**
   * Determines the name with which the component will be submitted in an HTML form. The value of the component will be the value of the currently selected `Option`.
   *
   * **Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   *
   * **Note:** When set, a native `input` HTML element will be created inside the `Select` so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
  /**
   * Defines whether the component is required.
   */
  required?: boolean;
  /**
   * Defines the value state of the component.
   *
   * Available options are:
   *
   * *   `None`
   * *   `Error`
   * *   `Warning`
   * *   `Success`
   * *   `Information`
   */
  valueState?: ValueState | keyof typeof ValueState;
}

export interface SelectDomRef extends Omit<SelectAttributes, 'menu'>, Ui5DomRef {
  /**
   * Defines a reference (ID or DOM element) of the component's options menu, as an alternative to defining the selection's drop-down menu.
   *
   * **Note:** Usage of `SelectMenu` is recommended.
   */
  menu?: string | HTMLElement;
  /**
   * Currently selected `Option` element.
   */
  readonly selectedOption: ReactNode;
}

export interface SelectPropTypes extends SelectAttributes, Omit<CommonProps, 'onChange'> {
  /**
   * Defines the component options.
   *
   * **Note:** Only one selected option is allowed. If more than one option is defined as selected, the last one would be considered as the selected one.
   *
   * **Note:** Use the `Option` component to define the desired options.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the HTML element that will be displayed in the component input part, representing the selected option.
   *
   * **Note:** If not specified and `SelectMenuOption` is used, either the option's `display-text` or its textContent will be displayed.
   *
   * **Note:** If not specified and `Option` is used, the option's textContent will be displayed.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="label"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  label?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   *
   * **Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.
   *
   * **Note:** If the component has `suggestionItems`, the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="valueStateMessage"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  valueStateMessage?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Fired when the selected option changes.
   */
  onChange?: (event: Ui5CustomEvent<SelectDomRef, SelectChangeEventDetail>) => void;
  /**
   * Fired after the component's dropdown menu closes.
   */
  onClose?: (event: Ui5CustomEvent<SelectDomRef>) => void;
  /**
   * Fired when the user navigates through the options, but the selection is not finalized, or when pressing the ESC key to revert the current selection.
   */
  onLiveChange?: (event: Ui5CustomEvent<SelectDomRef, SelectLiveChangeEventDetail>) => void;
  /**
   * Fired after the component's dropdown menu opens.
   */
  onOpen?: (event: Ui5CustomEvent<SelectDomRef>) => void;
}

/**
 * The `Select` component is used to create a drop-down list.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Select)
 */
const Select = withWebComponent<SelectPropTypes, SelectDomRef>(
  'ui5-select',
  ['accessibleName', 'accessibleNameRef', 'menu', 'name', 'valueState'],
  ['disabled', 'required'],
  ['label', 'valueStateMessage'],
  ['change', 'close', 'live-change', 'open'],
  () => import('@ui5/webcomponents/dist/Select.js')
);

Select.displayName = 'Select';

Select.defaultProps = {
  valueState: ValueState.None
};

export { Select };
