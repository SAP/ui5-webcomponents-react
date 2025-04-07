'use client';

import '@ui5/webcomponents-fiori/dist/Search.js';
import type { SearchFieldScopeSelectionChangeDetails } from '@ui5/webcomponents-fiori/dist/SearchField.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface SearchAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines whether the component is collapsed.
   * @default false
   */
  collapsed?: boolean;

  /**
   * Indicates whether a loading indicator should be shown in the popup.
   * @default false
   */
  loading?: boolean;

  /**
   * Defines whether the value will be autcompleted to match an item.
   * @default false
   */
  noTypeahead?: boolean;

  /**
   * Indicates whether the items picker is open.
   * @default false
   */
  open?: boolean;

  /**
   * Defines a short hint intended to aid the user with data entry when the
   * component has no value.
   * @default undefined
   */
  placeholder?: string | undefined;

  /**
   * Defines the tooltip of the search icon component.
   * @default undefined
   */
  searchIconTooltip?: string | undefined;

  /**
   * Defines whether the clear icon of the search will be shown.
   * @default false
   */
  showClearIcon?: boolean;

  /**
   * Defines the value of the component.
   *
   * **Note:** The property is updated upon typing.
   */
  value?: string;
}

interface SearchDomRef extends Required<SearchAttributes>, Ui5DomRef {}

interface SearchPropTypes
  extends SearchAttributes,
    Omit<
      CommonProps,
      | keyof SearchAttributes
      | 'action'
      | 'children'
      | 'illustration'
      | 'messageArea'
      | 'scopes'
      | 'onClose'
      | 'onInput'
      | 'onOpen'
      | 'onScopeChange'
      | 'onSearch'
    > {
  /**
   * Defines the popup footer action button.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="action"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  action?: UI5WCSlotsNode;

  /**
   * Defines the Search suggestion items.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the illustrated message to be shown in the popup.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="illustration"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  illustration?: UI5WCSlotsNode;

  /**
   * Defines the illustrated message to be shown in the popup.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="messageArea"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  messageArea?: UI5WCSlotsNode;

  /**
   * Defines the component scope options.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="scopes"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  scopes?: UI5WCSlotsNode;
  /**
   * Fired when the popup is closed.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onClose?: (event: Ui5CustomEvent<SearchDomRef>) => void;

  /**
   * Fired when typing in input or clear icon is pressed.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onInput?: (event: Ui5CustomEvent<SearchDomRef>) => void;

  /**
   * Fired when the popup is opened.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onOpen?: (event: Ui5CustomEvent<SearchDomRef>) => void;

  /**
   * Fired when the scope has changed.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onScopeChange?: (event: Ui5CustomEvent<SearchDomRef, SearchFieldScopeSelectionChangeDetails>) => void;

  /**
   * Fired when the user has triggered search with Enter key or Search Button press.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onSearch?: (event: Ui5CustomEvent<SearchDomRef>) => void;
}

/**
 * A `Search` is an input with suggestions, used for user search.
 *
 * The `Search` consists of several elements parts:
 * - Scope - displays a select in the beggining of the component, used for filtering results by their scope.
 * - Input field - for user input value
 * - Clear button - gives the possibility for deleting the entered value
 * - Search button - a primary button for performing search, when the user has entered a search term
 * - Suggestions - a list with available search suggestions
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of __@ui5/webcomponents-fiori__.
 * @experimental
 */
const Search = withWebComponent<SearchPropTypes, SearchDomRef>(
  'ui5-search',
  ['accessibleName', 'placeholder', 'searchIconTooltip', 'value'],
  ['collapsed', 'loading', 'noTypeahead', 'open', 'showClearIcon'],
  ['action', 'illustration', 'messageArea', 'scopes'],
  ['close', 'input', 'open', 'scope-change', 'search']
);

Search.displayName = 'Search';

export { Search };
export type { SearchDomRef, SearchPropTypes };
