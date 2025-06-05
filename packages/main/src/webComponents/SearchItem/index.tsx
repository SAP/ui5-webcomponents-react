'use client';

import '@ui5/webcomponents-fiori/dist/SearchItem.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';

interface SearchItemAttributes {
  /**
   * Defines the description that appears right under the item text, if available.
   *
   * **Note:** Available since [v2.12.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.12.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  description?: string | undefined;

  /**
   * Defines the icon name of the search item.
   * **Note:** If provided, the image slot will be ignored.
   * @default undefined
   */
  icon?: string | undefined;

  /**
   * Defines the scope of the search item
   * @default undefined
   */
  scopeName?: string | undefined;

  /**
   * Defines whether the search item is selected.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the heading text of the search item.
   * @default undefined
   */
  text?: string | undefined;
}

interface SearchItemDomRef extends Required<SearchItemAttributes>, Ui5DomRef {}

interface SearchItemPropTypes
  extends SearchItemAttributes,
    Omit<CommonProps, keyof SearchItemAttributes | 'image' | 'onDelete'> {
  /**
   * **Note:** While the slot allows the option of setting a custom avatar, to comply with the
   * design guidelines, use the `ui5-avatar` with size - XS.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="image"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v2.12.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.12.0) of **@ui5/webcomponents-fiori**.
   */
  image?: UI5WCSlotsNode;
  /**
   * Fired when delete button is pressed.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onDelete?: (event: Ui5CustomEvent<SearchItemDomRef>) => void;
}

/**
 * A `SearchItem` is a list item, used for displaying search suggestions
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of __@ui5/webcomponents-fiori__.
 * @experimental
 */
const SearchItem = withWebComponent<SearchItemPropTypes, SearchItemDomRef>(
  'ui5-search-item',
  ['description', 'icon', 'scopeName', 'text'],
  ['selected'],
  ['image'],
  ['delete'],
);

SearchItem.displayName = 'SearchItem';

export { SearchItem };
export type { SearchItemDomRef, SearchItemPropTypes };
