'use client';

import '@ui5/webcomponents/dist/SelectMenuOption.js';
import type { AccessibilityAttributes } from '@ui5/webcomponents/dist/ListItem.js';
import type ListItemType from '@ui5/webcomponents/dist/types/ListItemType.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface SelectMenuOptionAttributes {
  /**
   * Defines the text alternative of the component.
   *
   * **Note**: If not provided a default text alternative will be set, if present.
   */
  accessibleName?: string;

  /**
   * Defines whether the component is in disabled state.
   *
   * **Note:** A disabled component is hidden.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the text, displayed inside the `Select` input filed
   * when the option gets selected.
   */
  displayText?: string;

  /**
   * **Note:** The property is inherited and not supported. If set, it won't take any effect.
   * @default false
   * @deprecated true
   */
  navigated?: boolean;

  /**
   * Defines the selected state of the `ListItem`.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the text of the tooltip that would be displayed for the list item.
   *
   * **Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.
   */
  tooltip?: string;

  /**
   * **Note:** The property is inherited and not supported. If set, it won't take any effect.
   * @default "Active"
   * @deprecated true
   */
  type?: ListItemType | keyof typeof ListItemType;

  /**
   * Defines the value of the `Select` inside an HTML Form element when this component is selected.
   * For more information on HTML Form support, see the `name` property of `Select`.
   */
  value?: string;
}

interface SelectMenuOptionDomRef extends Required<SelectMenuOptionAttributes>, Ui5DomRef {
  /**
   * **Note:** The property is inherited and not supported. If set, it won't take any effect.
   *
   * @deprecated
   */
  accessibilityAttributes: AccessibilityAttributes;
}

interface SelectMenuOptionPropTypes
  extends SelectMenuOptionAttributes,
    Omit<CommonProps, keyof SelectMenuOptionAttributes | 'children' | 'deleteButton' | 'onDetailClick'> {
  /**
   * Defines the content of the component.
   */
  children?: ReactNode | ReactNode[];

  /**
   * **Note:** The slot is inherited and not supported. If set, it won't take any effect.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="deleteButton"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * @deprecated
   */
  deleteButton?: UI5WCSlotsNode;
  /**
   * Fired when the user clicks on the detail button when type is `Detail`.
   */
  onDetailClick?: (event: Ui5CustomEvent<SelectMenuOptionDomRef>) => void;
}

/**
 * The `SelectMenuOption` component represents an option in the `SelectMenu`.
 *
 * ### Usage
 *
 * For the `SelectMenuOption`
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 *
 * @since [1.17.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.17.0) of __@ui5/webcomponents__.
 */
const SelectMenuOption = withWebComponent<SelectMenuOptionPropTypes, SelectMenuOptionDomRef>(
  'ui5-select-menu-option',
  ['accessibleName', 'displayText', 'tooltip', 'type', 'value'],
  ['disabled', 'navigated', 'selected'],
  ['deleteButton'],
  ['detail-click'],
  () => import('@ui5/webcomponents/dist/SelectMenuOption.js')
);

SelectMenuOption.displayName = 'SelectMenuOption';

export { SelectMenuOption };
export type { SelectMenuOptionDomRef, SelectMenuOptionPropTypes };
