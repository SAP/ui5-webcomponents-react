'use client';

import '@ui5/webcomponents/dist/MultiComboBoxItem.js';
import type { ListItemBaseClickEventDetail } from '@ui5/webcomponents/dist/ListItemBase.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface MultiComboBoxItemAttributes {
  /**
   * Defines the additional text of the component.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  additionalText?: string | undefined;

  /**
   * Defines the selected state of the component.
   * @default false
   * @deprecated Set the `value` property on items and use the `selectedValues` property on the parent `ui5-multi-combobox` instead for programmatic selection.
   */
  selected?: boolean;

  /**
   * Defines the text of the component.
   * @default undefined
   */
  text?: string | undefined;

  /**
   * Defines the value of the component.
   *
   * Use this property to associate a unique identifier with the item,
   * separate from the display text. This enables selecting items
   * programmatically via `selectedValues` on the parent MultiComboBox.
   *
   * **Note:** Available since [v2.20.0](https://github.com/UI5/webcomponents/releases/tag/v2.20.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  value?: string | undefined;
}

interface MultiComboBoxItemDomRef extends Required<MultiComboBoxItemAttributes>, Ui5DomRef {}

interface MultiComboBoxItemPropTypes
  extends MultiComboBoxItemAttributes, Omit<CommonProps, keyof MultiComboBoxItemAttributes | 'onClick'> {
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
  onClick?: (event: Ui5CustomEvent<MultiComboBoxItemDomRef, ListItemBaseClickEventDetail>) => void;
}

/**
 * The `MultiComboBoxItem` represents the item for a `MultiComboBox`.
 *
 * __Note:__ This is a UI5 Web Component! [MultiComboBoxItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/MultiComboBoxItem) | [Repository](https://github.com/UI5/webcomponents)
 */
const MultiComboBoxItem = withWebComponent<MultiComboBoxItemPropTypes, MultiComboBoxItemDomRef>(
  'ui5-mcb-item',
  ['additionalText', 'text', 'value'],
  ['selected'],
  [],
  ['click'],
);

MultiComboBoxItem.displayName = 'MultiComboBoxItem';

export { MultiComboBoxItem };
export type { MultiComboBoxItemDomRef, MultiComboBoxItemPropTypes };
