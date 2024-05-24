'use client';

import '@ui5/webcomponents/dist/List.js';
import type {
  ListItemClickEventDetail,
  ListItemCloseEventDetail,
  ListItemDeleteEventDetail,
  ListItemToggleEventDetail,
  ListSelectionChangeEventDetail
} from '@ui5/webcomponents/dist/List.js';
import type ListGrowingMode from '@ui5/webcomponents/dist/types/ListGrowingMode.js';
import type ListMode from '@ui5/webcomponents/dist/types/ListMode.js';
import type ListSeparators from '@ui5/webcomponents/dist/types/ListSeparators.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface ListAttributes {
  /**
   * Defines the accessible name of the component.
   */
  accessibleName?: string;

  /**
   * Defines the IDs of the elements that label the input.
   */
  accessibleNameRef?: string;

  /**
   * Defines the accessible role of the component.
   * @default "list"
   */
  accessibleRole?: string;

  /**
   * Defines if the component would display a loading indicator over the list.
   * @default false
   */
  busy?: boolean;

  /**
   * Defines the delay in milliseconds, after which the busy indicator will show up for this component.
   * @default 1000
   */
  busyDelay?: number;

  /**
   * Defines the footer text.
   */
  footerText?: string;

  /**
   * Defines whether the component will have growing capability either by pressing a `More` button,
   * or via user scroll. In both cases `load-more` event is fired.
   *
   * **Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,
   * on IE the component will fallback to `growing="Button"`.
   * @default "None"
   */
  growing?: ListGrowingMode | keyof typeof ListGrowingMode;

  /**
   * Defines the text that will be displayed inside the growing button.
   *
   * **Note:** If not specified a built-in text will be displayed.
   *
   * **Note:** This property takes effect if the `growing` property is set to the `Button`.
   *
   * **Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.
   */
  growingButtonText?: string;

  /**
   * Defines the component header text.
   *
   * **Note:** If `header` is set this property is ignored.
   */
  headerText?: string;

  /**
   * Determines whether the component is indented.
   * @default false
   */
  indent?: boolean;

  /**
   * Defines the mode of the component.
   * @default "None"
   */
  mode?: ListMode | keyof typeof ListMode;

  /**
   * Defines the text that is displayed when the component contains no items.
   */
  noDataText?: string;

  /**
   * Defines the item separator style that is used.
   * @default "All"
   */
  separators?: ListSeparators | keyof typeof ListSeparators;
}

interface ListDomRef extends Required<ListAttributes>, Ui5DomRef {}

interface ListPropTypes
  extends ListAttributes,
    Omit<
      CommonProps,
      | keyof ListAttributes
      | 'children'
      | 'header'
      | 'onItemClick'
      | 'onItemClose'
      | 'onItemDelete'
      | 'onItemToggle'
      | 'onLoadMore'
      | 'onSelectionChange'
    > {
  /**
   * Defines the items of the component.
   *
   * **Note:** Use `StandardListItem`, `CustomListItem`, and `GroupHeaderListItem` for the intended design.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the component header.
   *
   * **Note:** When `header` is set, the
   * `headerText` property is ignored.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  header?: UI5WCSlotsNode;
  /**
   * Fired when an item is activated, unless the item's `type` property
   * is set to `Inactive`.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onItemClick?: (event: Ui5CustomEvent<ListDomRef, ListItemClickEventDetail>) => void;

  /**
   * Fired when the `Close` button of any item is clicked
   *
   * **Note:** This event is only applicable to list items that can be closed (such as notification list items),
   * not to be confused with `item-delete`.
   */
  onItemClose?: (event: Ui5CustomEvent<ListDomRef, ListItemCloseEventDetail>) => void;

  /**
   * Fired when the Delete button of any item is pressed.
   *
   * **Note:** A Delete button is displayed on each item,
   * when the component `mode` property is set to `Delete`.
   */
  onItemDelete?: (event: Ui5CustomEvent<ListDomRef, ListItemDeleteEventDetail>) => void;

  /**
   * Fired when the `Toggle` button of any item is clicked.
   *
   * **Note:** This event is only applicable to list items that can be toggled (such as notification group list items).
   */
  onItemToggle?: (event: Ui5CustomEvent<ListDomRef, ListItemToggleEventDetail>) => void;

  /**
   * Fired when the user scrolls to the bottom of the list.
   *
   * **Note:** The event is fired when the `growing='Scroll'` property is enabled.
   */
  onLoadMore?: (event: Ui5CustomEvent<ListDomRef>) => void;

  /**
   * Fired when selection is changed by user interaction
   * in `SingleSelect`, `SingleSelectBegin`, `SingleSelectEnd` and `MultiSelect` modes.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onSelectionChange?: (event: Ui5CustomEvent<ListDomRef, ListSelectionChangeEventDetail>) => void;
}

/**
 * The `List` component allows displaying a list of items, advanced keyboard
 * handling support for navigating between items, and predefined modes to improve the development efficiency.
 *
 * The `List` is a container for the available list items:
 *
 * - `StandardListItem`
 * - `CustomListItem`
 * - `GroupHeaderListItem`
 *
 * To benefit from the built-in selection mechanism, you can use the available
 * selection modes, such as
 * `SingleSelect`, `MultiSelect` and `Delete`.
 *
 * Additionally, the `List` provides header, footer, and customization for the list item separators.
 *
 * ### Keyboard Handling
 *
 * #### Basic Navigation
 * The `List` provides advanced keyboard handling.
 * When a list is focused the user can use the following keyboard
 * shortcuts in order to perform a navigation:
 *
 * - [Up] or [Down] - Navigates up and down the items
 * - [Home] - Navigates to first item
 * - [End] - Navigates to the last item
 *
 * The user can use the following keyboard shortcuts to perform actions (such as select, delete),
 * when the `mode` property is in use:
 *
 * - [Space] - Select an item (if `type` is 'Active') when `mode` is selection
 * - [Delete] - Delete an item if `mode` property is `Delete`
 *
 * #### Fast Navigation
 * This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 *
 *
 * `import "@ui5/webcomponents/dist/StandardListItem.js";` (for `StandardListItem`)
 *
 * `import "@ui5/webcomponents/dist/CustomListItem.js";` (for `CustomListItem`)
 *
 * `import "@ui5/webcomponents/dist/GroupHeaderListItem.js";` (for `GroupHeaderListItem`)
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const List = withWebComponent<ListPropTypes, ListDomRef>(
  'ui5-list',
  [
    'accessibleName',
    'accessibleNameRef',
    'accessibleRole',
    'busyDelay',
    'footerText',
    'growing',
    'growingButtonText',
    'headerText',
    'mode',
    'noDataText',
    'separators'
  ],
  ['busy', 'indent'],
  ['header'],
  ['item-click', 'item-close', 'item-delete', 'item-toggle', 'load-more', 'selection-change'],
  () => import('@ui5/webcomponents/dist/List.js')
);

List.displayName = 'List';

export { List };
export type { ListDomRef, ListPropTypes };
