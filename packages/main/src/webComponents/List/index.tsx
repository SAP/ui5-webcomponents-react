import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';
import { ListSeparators } from '@ui5/webcomponents-react/lib/ListSeparators';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/List';
import { FC, ReactNode } from 'react';

export interface ListPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines if the component would display a loading indicator at the bottom of the list. It's especially useful, when combined with <code>infiniteScroll</code>.
   */
  busy?: boolean;
  /**
   * Defines the footer text.
   */
  footerText?: string;
  /**
   * Defines the <code>ui5-list</code> header text. <br><br> <b>Note:</b> If <code>header</code> is set this property is ignored.
   */
  headerText?: string;
  /**
   * Defines if the component would fire the <code>load-more</code> event when the user scrolls to the bottom of the list, and helps achieving an "infinite scroll" effect by adding new items each time.
   */
  infiniteScroll?: boolean;
  /**
   * Determines whether the list items are indented.
   */
  inset?: boolean;
  /**
   * Defines the mode of the <code>ui5-list</code>. <br><br> <b>Note:</b> Available options are <code>None</code>, <code>SingleSelect</code>, <code>SingleSelectBegin</code>, <code>SingleSelectEnd</code>, <code>MultiSelect</code>, and <code>Delete</code>.
   */
  mode?: ListMode;
  /**
   * Defines the text that is displayed when the <code>ui5-list</code> contains no items.
   */
  noDataText?: string;
  /**
   * Defines the item separator style that is used. <br><br> <b>Notes:</b> <ul> <li>Avalaible options are <code>All</code>, <code>Inner</code>, and <code>None</code>.</li> <li>When set to <code>None</code>, none of the items are separated by horizontal lines.</li> <li>When set to <code>Inner</code>, the first item doesn't have a top separator and the last item doesn't have a bottom separator.</li> </ul>
   */
  separators?: ListSeparators;
  /**
   * Defines the items of the <code>ui5-list</code>. <br><br> <b>Note:</b> Use <code>ui5-li</code>, <code>ui5-li-custom</code>, and <code>ui5-li-groupheader</code> for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the <code>ui5-list</code> header. <br><br> <b>Note:</b> When <code>header</code> is set, the <code>headerText</code> property is ignored.
   */
  header?: ReactNode | ReactNode[];
  /**
   * Fired when an item is activated, unless the item's <code>type</code> property is set to <code>Inactive</code>.
   */
  onItemClick?: (event: CustomEvent<{ item: ReactNode }>) => void;
  /**
   * Fired when the <code>Close</code> button of any item is clicked <br><br> <b>Note:</b> This event is applicable to <code>ui5-li-notification</code> items only, not to be confused with <code>item-delete</code>.
   */
  onItemClose?: (event: CustomEvent<{ item: ReactNode }>) => void;
  /**
   * Fired when the Delete button of any item is pressed. <br><br> <b>Note:</b> A Delete button is displayed on each item, when the <code>ui5-list</code> <code>mode</code> property is set to <code>Delete</code>.
   */
  onItemDelete?: (event: CustomEvent<{ item: ReactNode }>) => void;
  /**
   * Fired when the <code>Toggle</code> button of any item is clicked. <br><br> <b>Note:</b> This event is applicable to <code>ui5-li-notification-group</code> items only.
   */
  onItemToggle?: (event: CustomEvent<{ item: ReactNode }>) => void;
  /**
   * Fired when the user scrolls to the bottom of the list. <br><br> <b>Note:</b> The event is fired when the <code>infiniteScroll</code> property is enabled.
   */
  onLoadMore?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when selection is changed by user interaction in <code>SingleSelect</code>, <code>SingleSelectBegin</code>, <code>SingleSelectEnd</code> and <code>MultiSelect</code> modes.
   */
  onSelectionChange?: (event: CustomEvent<{ selectedItems: unknown[]; previouslySelectedItems: unknown[] }>) => void;
}

/**
 * <code>import { List } from '@ui5/webcomponents-react/lib/List';</code>
 * <br />
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
