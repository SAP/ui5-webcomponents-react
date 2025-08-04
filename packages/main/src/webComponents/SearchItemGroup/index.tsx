'use client';

import '@ui5/webcomponents-fiori/dist/SearchItemGroup.js';
import type { ListItemGroupMoveEventDetail } from '@ui5/webcomponents/dist/ListItemGroup.js';
import type WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface SearchItemGroupAttributes {
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

  /**
   * Defines if the text of the component should wrap when it's too long.
   * When set to "Normal", the content (title, description) will be wrapped
   * using the `ui5-expandable-text` component.<br/>
   *
   * The text can wrap up to 100 characters on small screens (size S) and
   * up to 300 characters on larger screens (size M and above). When text exceeds
   * these limits, it truncates with an ellipsis followed by a text expansion trigger.
   *
   * Available options are:
   * - `None` (default) - The text will truncate with an ellipsis.
   * - `Normal` - The text will wrap (without truncation).
   *
   * **Note:** Available since [v2.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents-fiori**.
   * @default "None"
   */
  wrappingType?: WrappingType | keyof typeof WrappingType;
}

interface SearchItemGroupDomRef extends Required<SearchItemGroupAttributes>, Ui5DomRef {}

interface SearchItemGroupPropTypes
  extends SearchItemGroupAttributes,
    Omit<CommonProps, keyof SearchItemGroupAttributes | 'children' | 'header' | 'onMove' | 'onMoveOver'> {
  /**
   * Defines the items of the <code>ui5-li-group</code>.
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
   * **Note:** Available since [v2.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents-fiori**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onMove?: (event: Ui5CustomEvent<SearchItemGroupDomRef, ListItemGroupMoveEventDetail>) => void;

  /**
   * Fired when a movable list item is moved over a potential drop target during a dragging operation.
   *
   * If the new position is valid, prevent the default action of the event using `preventDefault()`.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * **Note:** Available since [v2.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents-fiori**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onMoveOver?: (event: Ui5CustomEvent<SearchItemGroupDomRef, ListItemGroupMoveEventDetail>) => void;
}

/**
 * The `SearchItemGroup` is type of suggestion item,
 * that can be used to split the `SearchItem` suggestions into groups.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of __@ui5/webcomponents-fiori__.
 * @experimental
 */
const SearchItemGroup = withWebComponent<SearchItemGroupPropTypes, SearchItemGroupDomRef>(
  'ui5-search-item-group',
  ['headerAccessibleName', 'headerText', 'wrappingType'],
  [],
  ['header'],
  ['move-over', 'move'],
);

SearchItemGroup.displayName = 'SearchItemGroup';

export { SearchItemGroup };
export type { SearchItemGroupDomRef, SearchItemGroupPropTypes };
