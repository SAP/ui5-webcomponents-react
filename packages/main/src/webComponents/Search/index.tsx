'use client';

import '@ui5/webcomponents-fiori/dist/Search.js';
import type SearchPopupMode from '@ui5/webcomponents/dist/types/SearchPopupMode.js';
import type { SearchFieldScopeSelectionChangeDetails } from '@ui5/webcomponents-fiori/dist/SearchField.js';
import type SearchMode from '@ui5/webcomponents-fiori/dist/types/SearchMode.js';
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
   * Defines whether the component is expanded.
   * @default false
   */
  expanded?: boolean;

  /**
   * Determines whether the component is in a fixed state that is not
   * expandable/collapsible by user interaction.
   * @default false
   */
  fixed?: boolean;

  /**
   * Defines the header text to be placed in the search suggestions popup.
   */
  headerText?: string;

  /**
   * Defines the mode of the component.
   * @default "Default"
   */
  mode?: SearchMode | keyof typeof SearchMode;

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
   * Defines the popup footer action button text.
   */
  popupActionText?: string;

  /**
   * Defines the visualisation mode of the search component.
   * @default "List"
   */
  popupMode?: SearchPopupMode | keyof typeof SearchPopupMode;

  /**
   * Defines whether the clear icon of the search will be shown.
   * @default false
   */
  showClearIcon?: boolean;

  /**
   * Defines whether the popup footer action button is shown.
   * Note: The footer action button is displayed only when the `popupMode` is set to `List`.
   * @default false
   */
  showPopupAction?: boolean;

  /**
   * Defines the subheader text to be placed in the search suggestions popup.
   */
  subheaderText?: string;

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
      | 'children'
      | 'illustration'
      | 'scopeOptions'
      | 'onClose'
      | 'onInput'
      | 'onOpen'
      | 'onPopupActionPress'
      | 'onScopeChange'
      | 'onSearch'
    > {
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
   * Defines the component scope options.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="scopeOptions"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  scopeOptions?: UI5WCSlotsNode;
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
   * Fired when load more button is pressed.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onPopupActionPress?: (event: Ui5CustomEvent<SearchDomRef>) => void;

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
 * - Expand/Collapse button - when there is no search term, the search button behaves as an expand/collapse button for the `Search` component
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
  ['accessibleName', 'headerText', 'mode', 'placeholder', 'popupActionText', 'popupMode', 'subheaderText', 'value'],
  ['expanded', 'fixed', 'noTypeahead', 'open', 'showClearIcon', 'showPopupAction'],
  ['illustration', 'scopeOptions'],
  ['close', 'input', 'open', 'popup-action-press', 'scope-change', 'search']
);

Search.displayName = 'Search';

export { Search };
export type { SearchDomRef, SearchPropTypes };
