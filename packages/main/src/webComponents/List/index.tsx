import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';
import { ListSeparators } from '@ui5/webcomponents-react/lib/ListSeparators';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/List';
import { FC, ReactNode } from 'react';

export interface ListPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines if the component would display a loading indicator at the bottom of the list. It's especially useful, when combined with `infiniteScroll`.
   */
  busy?: boolean;
  /**
   * Defines the footer text.
   */
  footerText?: string;
  /**
   * Defines the `List` header text.
   *
   * **Note:** If `header` is set this property is ignored.
   */
  headerText?: string;
  /**
   * Defines if the component would fire the `onLoadMore` event when the user scrolls to the bottom of the list, and helps achieving an "infinite scroll" effect by adding new items each time.
   */
  infiniteScroll?: boolean;
  /**
   * Determines whether the list items are indented.
   */
  inset?: boolean;
  /**
   * Defines the mode of the `List`.
   *
   * **Note:** Available options are `None`, `SingleSelect`, `SingleSelectBegin`, `SingleSelectEnd`, `MultiSelect`, and `Delete`.
   */
  mode?: ListMode;
  /**
   * Defines the text that is displayed when the `List` contains no items.
   */
  noDataText?: string;
  /**
   * Defines the item separator style that is used.
   *
   * **Notes:**
   *
   * *   Avalaible options are `All`, `Inner`, and `None`.
   * *   When set to `None`, none of the items are separated by horizontal lines.
   * *   When set to `Inner`, the first item doesn't have a top separator and the last item doesn't have a bottom separator.
   */
  separators?: ListSeparators;
  /**
   * Defines the items of the `List`.
   *
   * **Note:** Use `StandardListItem`, `CustomListItem`, and `GroupHeaderListItem` for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the `List` header.
   *
   * **Note:** When `header` is set, the `headerText` property is ignored.
   */
  header?: ReactNode | ReactNode[];
  /**
   * Fired when an item is activated, unless the item's `type` property is set to `Inactive`.
   */
  onItemClick?: (event: CustomEvent<{ item: ReactNode }>) => void;
  /**
   * Fired when the `Close` button of any item is clicked
   *
   * **Note:** This event is applicable to `NotificationListItem` items only, not to be confused with `item-delete`.
   */
  onItemClose?: (event: CustomEvent<{ item: ReactNode }>) => void;
  /**
   * Fired when the Delete button of any item is pressed.
   *
   * **Note:** A Delete button is displayed on each item, when the `List` `mode` property is set to `Delete`.
   */
  onItemDelete?: (event: CustomEvent<{ item: ReactNode }>) => void;
  /**
   * Fired when the `Toggle` button of any item is clicked.
   *
   * **Note:** This event is applicable to `NotificationListItemBase` items only.
   */
  onItemToggle?: (event: CustomEvent<{ item: ReactNode }>) => void;
  /**
   * Fired when the user scrolls to the bottom of the list.
   *
   * **Note:** The event is fired when the `infiniteScroll` property is enabled.
   */
  onLoadMore?: (event: CustomEvent) => void;
  /**
   * Fired when selection is changed by user interaction in `SingleSelect`, `SingleSelectBegin`, `SingleSelectEnd` and `MultiSelect` modes.
   */
  onSelectionChange?: (event: CustomEvent<{ selectedItems: unknown[]; previouslySelectedItems: unknown[] }>) => void;
}

/**
 * The `List` component allows displaying a list of items, advanced keyboard handling support for navigating between items, and predefined modes to improve the development efficiency.
 *
 * The `List` is а container for the available list items:
 *
 * *   `StandardListItem`
 * *   `CustomListItem`
 * *   `GroupHeaderListItem`
 *
 *
 *
 * To benefit from the built-in selection mechanism, you can use the available selection modes, such as `SingleSelect`, `MultiSelect` and `Delete`.
 *
 * Additionally, the `List` provides header, footer, and customization for the list item separators.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/List" target="_blank">UI5 Web Components Playground</a>
 */
const List: FC<ListPropTypes> = withWebComponent<ListPropTypes>(
  'ui5-list',
  ['footerText', 'headerText', 'mode', 'noDataText', 'separators'],
  ['busy', 'infiniteScroll', 'inset'],
  ['header'],
  ['item-click', 'item-close', 'item-delete', 'item-toggle', 'load-more', 'selection-change']
);

List.displayName = 'List';

List.defaultProps = {
  busy: false,
  infiniteScroll: false,
  inset: false,
  mode: ListMode.None,
  separators: ListSeparators.All
};

export { List };
