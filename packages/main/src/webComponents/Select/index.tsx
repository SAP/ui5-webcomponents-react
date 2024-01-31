'use client';

import '@ui5/webcomponents/dist/Select.js';
import type { IOption } from '@ui5/webcomponents/dist/Interfaces.js';
import type { SelectChangeEventDetail, SelectLiveChangeEventDetail } from '@ui5/webcomponents/dist/Select.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

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
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines a reference (ID or DOM element) of component's menu of options as alternative to define the select's dropdown.
   *
   * **Note:** Usage of `SelectMenu` is recommended.
   * @default undefined
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
   * Defines whether the component is read-only.
   *
   * **Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.
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
   * \- when get - returns the value of the component, e.g. the `value` property of the selected option or its text content.
   * \- when set - selects the option with matching `value` property or text content.
   *
   * **Note:** If the given value does not match any existing option, the first option will get selected.
   */
  value?: string;

  /**
   * Defines the value state of the component.
   * @default "None"
   */
  valueState?: ValueState | keyof typeof ValueState;
}

interface SelectDomRef extends Omit<Required<SelectAttributes>, 'menu'>, Ui5DomRef {
  /**
   * Defines a reference (ID or DOM element) of component's menu of options as alternative to define the select's dropdown.
   *
   * **Note:** Usage of `SelectMenu` is recommended.
   */
  menu: HTMLElement | string | undefined;

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
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="label"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  label?: UI5WCSlotsNode;

  /**
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   *
   * **Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.
   *
   * **Note:** If the component has `suggestionItems`, the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="valueStateMessage"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  valueStateMessage?: UI5WCSlotsNode;
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
 * ### Usage
 *
 * There are two main usages of the `ui5-select>`. 1. With Option (`Option`) web component:
 * The available options of the Select are defined by using the Option component. The Option comes with predefined design and layout, including `icon`, `text` and `additional-text`.
 *
 * 2\. With SelectMenu (`SelectMenu`) and SelectMenuOption (`SelectMenuOption`) web components:
 * The SelectMenu can be used as alternative to define the Select's dropdown and can be used via the `menu` property of the Select to reference SelectMenu by its ID. The component gives the possibility to customize the Select's dropdown by slotting entirely custom options (via the SelectMenuOption component) and adding custom styles. **Note:** SelectMenu is a popover and placing it top-level in the HTML page is recommended, because some page styles (for example transitions) can misplace the SelectMenu.
 *
 * ### Keyboard Handling
 *
 * The `Select` provides advanced keyboard handling.
 *
 * *   \[F4, ALT+UP, ALT+DOWN, SPACE, ENTER\] - Opens/closes the drop-down.
 * *   \[UP, DOWN\] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
 * *   \[SPACE, ENTER\] - If the drop-down is opened - selects the focused option.
 * *   \[ESC\] - Closes the drop-down without changing the selection.
 * *   \[HOME\] - Navigates to first option
 * *   \[END\] - Navigates to the last option
 *
 *
 *
 * `import "@ui5/webcomponents/dist/Option";` (comes with `Select`)
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const Select = withWebComponent<SelectPropTypes, SelectDomRef>(
  'ui5-select',
  ['accessibleName', 'accessibleNameRef', 'menu', 'name', 'value', 'valueState'],
  ['disabled', 'readonly', 'required'],
  ['label', 'valueStateMessage'],
  ['change', 'close', 'live-change', 'open'],
  () => import('@ui5/webcomponents/dist/Select.js')
);

Select.displayName = 'Select';

export { Select };
export type { SelectDomRef, SelectPropTypes };
