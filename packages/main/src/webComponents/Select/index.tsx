import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Select';
import { FC, ReactNode } from 'react';

export interface SelectPropTypes extends Omit<WithWebComponentPropTypes, 'onChange'> {
  /**
   * Defines whether `Select` is in disabled state.
   *
   * **Note:** A disabled `Select` is noninteractive.
   */
  disabled?: boolean;
  /**
   * Determines the name with which the `Select` will be submitted in an HTML form. The value of the `Select` will be the value of the currently selected `Option`.
   *
   * **Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   *
   * **Note:** When set, a native `input` HTML element will be created inside the `Select` so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
  /**
   * Defines whether the `Select` is required.
   */
  required?: boolean;
  /**
   * Defines the value state of the `Select`.
   *
   * Available options are:
   *
   * *   `None`
   * *   `Error`
   * *   `Warning`
   * *   `Success`
   * *   `Information`
   */
  valueState?: ValueState;
  /**
   * Defines the `Select` options.
   *
   * **Note:** Only one selected option is allowed. If more than one option is defined as selected, the last one would be considered as the selected one.
   *
   * **Note:** Use the `Option` component to define the desired options.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the value state message that will be displayed as pop up under the `Select`.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   * **Note:** The `valueStateMessage` would be displayed, when the `Select` is in `Information`, `Warning` or `Error` value state.
   */
  valueStateMessage?: ReactNode | ReactNode[];
  /**
   * Fired when the selected option changes.
   */
  onChange?: (event: CustomEvent<{ selectedOption: ReactNode }>) => void;
}

/**
 * The `Select` component is used to create a drop-down list. The items inside the `Select` define the available options by using the `Option` component.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Select" target="_blank">UI5 Web Components Playground</a>
 */
const Select: FC<SelectPropTypes> = withWebComponent<SelectPropTypes>(
  'ui5-select',
  ['name', 'valueState'],
  ['disabled', 'required'],
  ['valueStateMessage'],
  ['change']
);

Select.displayName = 'Select';

Select.defaultProps = {
  disabled: false,
  required: false,
  valueState: ValueState.None
};

export { Select };
