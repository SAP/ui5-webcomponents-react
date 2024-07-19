'use client';

import '@ui5/webcomponents/dist/Select.js';
import type { IOption, SelectChangeEventDetail, SelectLiveChangeEventDetail } from '@ui5/webcomponents/dist/Select.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface SelectAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the select.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Defines whether the component is in disabled state.
   *
   * **Note:** A disabled component is noninteractive.
   * @default false
   */
  disabled?: boolean;

  /**
   * Determines the name by which the component will be identified upon submission in an HTML form.
   *
   * **Note:** This property is only applicable within the context of an HTML Form element.
   * @default undefined
   */
  name?: string | undefined;

  /**
   * Defines whether the component is read-only.
   *
   * **Note:** A read-only component is not editable,
   * but still provides visual feedback upon user interaction.
   *
   * **Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.
   * @default false
   */
  readonly?: boolean;

  /**
   * Defines whether the component is required.
   * @default false
   */
  required?: boolean;

  /**
   * Defines the value of the component:
   *
   * - when get - returns the value of the component, e.g. the `value` property of the selected option or its text content.
   *
   * - when set - selects the option with matching `value` property or text content.
   *
   * **Note:** If the given value does not match any existing option,
   * the first option will get selected.
   *
   * **Note:** Available since [v1.20.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.20.0) of **@ui5/webcomponents**.
   */
  value?: string;

  /**
   * Defines the value state of the component.
   * @default "None"
   */
  valueState?: ValueState | keyof typeof ValueState;
}

interface SelectDomRef extends Required<SelectAttributes>, Ui5DomRef {
  /**
   * Currently selected `Option` element.
   */
  readonly selectedOption: IOption | undefined;
}

interface SelectPropTypes
  extends SelectAttributes,
    Omit<
      CommonProps,
      | keyof SelectAttributes
      | 'children'
      | 'label'
      | 'valueStateMessage'
      | 'onChange'
      | 'onClose'
      | 'onLiveChange'
      | 'onOpen'
    > {
  /**
   * Defines the component options.
   *
   * **Note:** Only one selected option is allowed.
   * If more than one option is defined as selected, the last one would be considered as the selected one.
   *
   * **Note:** Use the `Option` component to define the desired options.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the HTML element that will be displayed in the component input part,
   * representing the selected option.
   *
   * **Note:** If not specified and `OptionCustom` is used,
   * either the option's `display-text` or its textContent will be displayed.
   *
   * **Note:** If not specified and `Option` is used,
   * the option's textContent will be displayed.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="label"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v1.17.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.17.0) of **@ui5/webcomponents**.
   */
  label?: UI5WCSlotsNode;

  /**
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   *
   * **Note:** The `valueStateMessage` would be displayed,
   * when the component is in `Information`, `Warning` or `Error` value state.
   *
   * **Note:** If the component has `suggestionItems`,
   * the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="valueStateMessage"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  valueStateMessage?: UI5WCSlotsNode;
  /**
   * Fired when the selected option changes.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onChange?: (event: Ui5CustomEvent<SelectDomRef, SelectChangeEventDetail>) => void;

  /**
   * Fired after the component's dropdown menu closes.
   */
  onClose?: (event: Ui5CustomEvent<SelectDomRef>) => void;

  /**
   * Fired when the user navigates through the options, but the selection is not finalized,
   * or when pressing the ESC key to revert the current selection.
   *
   * **Note:** Available since [v1.17.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.17.0) of **@ui5/webcomponents**.
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
 * ### Usage
 *
 * There are two main usages of the `ui5-select>`.
 *
 * 1. With Option (`Option`) web component:
 *
 * The available options of the Select are defined by using the Option component.
 * The Option comes with predefined design and layout, including `icon`, `text` and `additional-text`.
 *
 * 2. With OptionCustom (`OptionCustom`) web component.
 *
 * Options with custom content are defined by using the OptionCustom component
 * The OptionCustom component comes with no predefined layout and it expects consumers to define it.
 *
 * ### Keyboard Handling
 * The `Select` provides advanced keyboard handling.
 *
 * - [F4] / [Alt] + [Up] / [Alt] + [Down] / [Space] or [Enter] - Opens/closes the drop-down.
 * - [Up] or [Down] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
 * - [Space], [Enter] - If the drop-down is opened - selects the focused option.
 * - [Escape] - Closes the drop-down without changing the selection.
 * - [Home] - Navigates to first option
 * - [End] - Navigates to the last option
 *
 *
 *
 * `import "@ui5/webcomponents/dist/Option";`
 * `import "@ui5/webcomponents/dist/OptionCustom";`
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const Select = withWebComponent<SelectPropTypes, SelectDomRef>(
  'ui5-select',
  ['accessibleName', 'accessibleNameRef', 'name', 'value', 'valueState'],
  ['disabled', 'readonly', 'required'],
  ['label', 'valueStateMessage'],
  ['change', 'close', 'live-change', 'open'],
  () => import('@ui5/webcomponents/dist/Select.js')
);

Select.displayName = 'Select';

export { Select };
export type { SelectDomRef, SelectPropTypes };
