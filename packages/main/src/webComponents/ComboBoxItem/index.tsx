'use client';

import '@ui5/webcomponents/dist/ComboBoxItem.js';
import type { ListItemBaseClickEventDetail } from '@ui5/webcomponents/dist/ListItemBase.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface ComboBoxItemAttributes {
  /**
   * Defines the additional text of the component.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  additionalText?: string | undefined;

  /**
   * Defines the text of the component.
   * @default undefined
   */
  text?: string | undefined;

  /**
   * Defines the value of the `ComboBoxItem`.
   *
   * Use this property to associate a unique identifier or machine-readable value with the item,
   * separate from the display text. This enables:
   * - Selecting items programmatically via `selectedValue` on the ComboBox
   * - Submitting machine-readable values in forms
   * - Distinguishing between items with identical display text
   *
   * **When to use:**
   * - **Recommended:** Use the `value` property on items together with `selectedValue` on the ComboBox when you need unique identifiers
   * - Omit `value` if the display text (`text` property) is sufficient for your use case
   *
   * **Example:**
   * ```html
   * <ComboBox selected-value="DE">
   *   <ComboBoxItem text="Germany" value="DE"></ComboBoxItem>
   *   <ComboBoxItem text="France" value="FR"></ComboBoxItem>
   * </ComboBox>
   * ```
   *
   * **Note:** Available since [v2.20.0](https://github.com/UI5/webcomponents/releases/tag/v2.20.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  value?: string | undefined;
}

interface ComboBoxItemDomRef extends Required<ComboBoxItemAttributes>, Ui5DomRef {}

interface ComboBoxItemPropTypes
  extends ComboBoxItemAttributes, Omit<CommonProps, keyof ComboBoxItemAttributes | 'onClick'> {
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
  onClick?: (event: Ui5CustomEvent<ComboBoxItemDomRef, ListItemBaseClickEventDetail>) => void;
}

/**
 * The `ComboBoxItem` represents the item for a `ComboBox`.
 *
 * __Note:__ This is a UI5 Web Component! [ComboBoxItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ComboBoxItem) | [Repository](https://github.com/UI5/webcomponents)
 */
const ComboBoxItem = withWebComponent<ComboBoxItemPropTypes, ComboBoxItemDomRef>(
  'ui5-cb-item',
  ['additionalText', 'text', 'value'],
  [],
  [],
  ['click'],
);

ComboBoxItem.displayName = 'ComboBoxItem';

export { ComboBoxItem };
export type { ComboBoxItemDomRef, ComboBoxItemPropTypes };
