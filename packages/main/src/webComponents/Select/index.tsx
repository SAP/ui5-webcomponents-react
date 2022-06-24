import '@ui5/webcomponents/dist/Select.js';
import { ReactNode } from 'react';
import { ValueState } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface SelectAttributes {
  /**
   * Defines the accessible aria name of the component.
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

export interface SelectDomRef extends SelectAttributes, Ui5DomRef {
  /**
   * Currently selected option.
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
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   * **Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  valueStateMessage?: ReactNode | ReactNode[];
  /**
   * Fired when the selected option changes.
   */
  onChange?: (event: Ui5CustomEvent<HTMLSelectElement, { selectedOption: HTMLElement }>) => void;
}

/**
 * The `Select` component is used to create a drop-down list. The items inside the `Select` define the available options by using the `Option` component.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Select" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Select = withWebComponent<SelectPropTypes, SelectDomRef>(
  'ui5-select',
  ['accessibleName', 'accessibleNameRef', 'name', 'valueState'],
  ['disabled', 'required'],
  ['valueStateMessage'],
  ['change']
);

Select.displayName = 'Select';

Select.defaultProps = {
  valueState: ValueState.None
};

export { Select };
