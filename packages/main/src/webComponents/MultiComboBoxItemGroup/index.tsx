'use client';

import '@ui5/webcomponents/dist/MultiComboBoxItemGroup.js';
import type { ListItemGroupMoveEventDetail } from '@ui5/webcomponents/dist/ListItemGroup.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface MultiComboBoxItemGroupAttributes {
  /**
   * Defines the accessible name of the header.
   * @default undefined
   */
  headerAccessibleName?: string | undefined;

  /**
   * Defines the header text of the <code>ui5-li-group</code>.
   * @default undefined
   */
  headerText?: string | undefined;
}

interface MultiComboBoxItemGroupDomRef extends Required<MultiComboBoxItemGroupAttributes>, Ui5DomRef {}

interface MultiComboBoxItemGroupPropTypes
  extends MultiComboBoxItemGroupAttributes,
    Omit<CommonProps, keyof MultiComboBoxItemGroupAttributes | 'children' | 'header' | 'onMove' | 'onMoveOver'> {
  /**
   * Defines the items of the <code>ui5-mcb-item-group</code>.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the header of the component.
   *
   * **Note:** Using this slot, the default header text of group and the value of `headerText` property will be overwritten.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  header?: UI5WCSlotsNode;
  /**
   * Fired when a movable list item is dropped onto a drop target.
   *
   * **Note:** `move` event is fired only if there was a preceding `move-over` with prevented default action.
   *
   * **Note:** Available since [v2.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onMove?: (event: Ui5CustomEvent<MultiComboBoxItemGroupDomRef, ListItemGroupMoveEventDetail>) => void;

  /**
   * Fired when a movable list item is moved over a potential drop target during a dragging operation.
   *
   * If the new position is valid, prevent the default action of the event using `preventDefault()`.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * **Note:** Available since [v2.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onMoveOver?: (event: Ui5CustomEvent<MultiComboBoxItemGroupDomRef, ListItemGroupMoveEventDetail>) => void;
}

/**
 * The `MultiComboBoxItemGroup` is type of suggestion item,
 * that can be used to split the `MultiComboBox` suggestions into groups.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 */
const MultiComboBoxItemGroup = withWebComponent<MultiComboBoxItemGroupPropTypes, MultiComboBoxItemGroupDomRef>(
  'ui5-mcb-item-group',
  ['headerAccessibleName', 'headerText'],
  [],
  ['header'],
  ['move-over', 'move']
);

MultiComboBoxItemGroup.displayName = 'MultiComboBoxItemGroup';

export { MultiComboBoxItemGroup };
export type { MultiComboBoxItemGroupDomRef, MultiComboBoxItemGroupPropTypes };
