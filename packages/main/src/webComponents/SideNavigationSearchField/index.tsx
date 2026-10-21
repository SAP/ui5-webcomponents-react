'use client';

import '@ui5/webcomponents-fiori/dist/SideNavigationSearchField.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface SideNavigationSearchFieldAttributes {
  /**
   * Receives id (or many ids) of the elements that describe the component.
   * @default undefined
   */
  accessibleDescriptionRef?: string | undefined;

  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id (or many ids) of the elements that label the component.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Defines whether the clear icon of the search will be hidden.
   *
   * **Note:** When not set, the clear icon is displayed while the component has a value.
   * @default false
   */
  hideClearIcon?: boolean;

  /**
   * Defines a short hint intended to aid the user with data entry when the
   * component has no value.
   * @default undefined
   */
  placeholder?: string | undefined;

  /**
   * Defines the value of the component.
   *
   * **Note:** The property is updated upon typing.
   */
  value?: string;
}

interface SideNavigationSearchFieldDomRef extends Required<SideNavigationSearchFieldAttributes>, Ui5DomRef {}

interface SideNavigationSearchFieldPropTypes
  extends
    SideNavigationSearchFieldAttributes,
    Omit<CommonProps, keyof SideNavigationSearchFieldAttributes | 'onInput' | 'onSearch'> {
  /**
   * Fired when typing in input or clear icon is pressed.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onInput?: (event: Ui5CustomEvent<SideNavigationSearchFieldDomRef>) => void;

  /**
   * Fired when the user has triggered search with Enter key or Search Button press.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onSearch?: (event: Ui5CustomEvent<SideNavigationSearchFieldDomRef>) => void;
}

/**
 * A `SideNavigationSearchField` is a search field,
 * used to filter the items of a `SideNavigation`.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [SideNavigationSearchField UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/SideNavigationSearchField) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.28.0](https://github.com/UI5/webcomponents/releases/tag/v2.28.0) of __@ui5/webcomponents-fiori__.
 */
const SideNavigationSearchField = withWebComponent<SideNavigationSearchFieldPropTypes, SideNavigationSearchFieldDomRef>(
  'ui5-side-navigation-search-field',
  ['accessibleDescriptionRef', 'accessibleName', 'accessibleNameRef', 'placeholder', 'value'],
  ['hideClearIcon'],
  [],
  ['input', 'search'],
);

SideNavigationSearchField.displayName = 'SideNavigationSearchField';

export { SideNavigationSearchField };
export type { SideNavigationSearchFieldDomRef, SideNavigationSearchFieldPropTypes };
