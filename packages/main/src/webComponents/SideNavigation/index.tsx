'use client';

import '@ui5/webcomponents-fiori/dist/SideNavigation.js';
import type {
  SideNavigationItemClickEventDetail,
  SideNavigationItemToggleEventDetail,
  SideNavigationSelectionChangeEventDetail,
} from '@ui5/webcomponents-fiori/dist/SideNavigation.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface SideNavigationAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   *
   * **Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines whether the `SideNavigation` is expanded or collapsed.
   *
   * **Note:** On small screens (screen width of 599px or less) the collapsed mode is not supported, and in
   * expanded mode the side navigation will take the whole width of the screen.
   * The `SideNavigation` component is intended to be used within a `NavigationLayout`
   * component to ensure proper responsive behavior. If you choose not to use the
   * `NavigationLayout`, you will need to implement the appropriate responsive patterns yourself,
   * particularly for smaller screens where the collapsed mode should not be used.
   * @default false
   */
  collapsed?: boolean;

  /**
   * Specifies a term to be highlighted in the navigation items' text.
   * When set, matching portions of item and group texts are visually emphasized during rendering.
   *
   * **Note:** Available since [v2.28.0](https://github.com/UI5/webcomponents/releases/tag/v2.28.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  highlightedText?: string | undefined;
}

interface SideNavigationDomRef extends Required<SideNavigationAttributes>, Ui5DomRef {
  /**
   * Announces the number of search matches found in the side navigation to assistive technologies.
   *
   * This method uses an invisible live region message so screen readers can inform users
   * about the current number of search matches.
   *
   * **Note:** Available since [v2.28.0](https://github.com/UI5/webcomponents/releases/tag/v2.28.0) of **@ui5/webcomponents-fiori**.
   * @param {number} count - The number of matching navigation items.
   * @returns {void}
   */
  announceSearchMatchCount: (count: number) => void;
}

interface SideNavigationPropTypes
  extends
    SideNavigationAttributes,
    Omit<
      CommonProps,
      | keyof SideNavigationAttributes
      | 'children'
      | 'filterSection'
      | 'fixedItems'
      | 'header'
      | 'onItemClick'
      | 'onItemToggle'
      | 'onSelectionChange'
    > {
  /**
   * Defines the main items of the component.
   *
   * __Supported Node Type/s:__ `Array<SideNavigationItemBase>`
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the filter section of the `SideNavigation`.
   *
   * **Note:** The filter section is displayed when the component is expanded - the property `collapsed` is false;
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="filterSection"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v2.28.0](https://github.com/UI5/webcomponents/releases/tag/v2.28.0) of **@ui5/webcomponents-fiori**.
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  filterSection?: UI5WCSlotsNode;

  /**
   * Defines the fixed items at the bottom of the component.
   *
   * **Note:** In order to achieve the best user experience, it is recommended that you keep the fixed items "flat" (do not pass sub-items)
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="fixedItems"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * __Supported Node Type/s:__ `Array<SideNavigationItemBase>`
   */
  fixedItems?: UI5WCSlotsNode;

  /**
   * Defines the header of the `SideNavigation`.
   *
   * **Note:** The header is displayed when the component is expanded - the property `collapsed` is false;
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents-fiori**.
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  header?: UI5WCSlotsNode;
  /**
   * Fired when an item is clicked.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * **Note:** Available since [v2.20.0](https://github.com/UI5/webcomponents/releases/tag/v2.20.0) of **@ui5/webcomponents-fiori**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onItemClick?: (event: Ui5CustomEvent<SideNavigationDomRef, SideNavigationItemClickEventDetail>) => void;

  /**
   * Fired when a `SideNavigationItem` or `SideNavigationGroup` is expanded or collapsed.
   *
   * **Note:** You can call `preventDefault()` on the event to suppress the expand/collapse.
   * The `expanded` state stays unchanged. This is handy, for example, if you want to
   * dynamically load child items before allowing a parent item to expand.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * **Note:** Available since [v2.26.0](https://github.com/UI5/webcomponents/releases/tag/v2.26.0) of **@ui5/webcomponents-fiori**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onItemToggle?: (event: Ui5CustomEvent<SideNavigationDomRef, SideNavigationItemToggleEventDetail>) => void;

  /**
   * Fired when the selection has changed via user interaction.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onSelectionChange?: (event: Ui5CustomEvent<SideNavigationDomRef, SideNavigationSelectionChangeEventDetail>) => void;
}

/**
 * The `SideNavigation` is used as a standard menu in applications.
 * It consists of three containers: header (top-aligned), main navigation section (top-aligned) and the secondary section (bottom-aligned).
 *
 *  - The header is meant for displaying user related information - profile data, avatar, etc.
 *  - The main navigation section is related to the user's current work context.
 *  - The secondary section is mostly used to link additional information that may be of interest (legal information, developer communities, external help, contact information and so on).
 *
 * ### Usage
 *
 * Use the available `SideNavigationGroup`, `SideNavigationItem`
 * and `SideNavigationSubItem` components to build your menu.
 * The items can consist of text only or an icon with text. The use or non-use of icons must be consistent for all items on one level.
 * You must not combine entries with and without icons on the same level. We strongly recommend that you do not use icons on the second level.
 *
 * The `SideNavigation` component is designed to be used within a `NavigationLayout` component to ensure an optimal user experience.
 *
 * Using it standalone may not match the intended design and functionality.
 * For example, the side navigation may not exhibit the correct behavior on smaller screens.
 * Additionally, the padding of the `ShellBar` will not match the padding of the side navigation.
 *
 * ### Keyboard Handling
 *
 * ### Fast Navigation
 * This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 *
 *
 *
 * `import "@ui5/webcomponents-fiori/dist/SideNavigationGroup.js";` (for `SideNavigationGroup`)
 *
 * `import "@ui5/webcomponents-fiori/dist/SideNavigationItem.js";` (for `SideNavigationItem`)
 *
 * `import "@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js";` (for `SideNavigationSubItem`)
 *
 * __Note:__ This is a UI5 Web Component! [SideNavigation UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/SideNavigation) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents-fiori__.
 */
const SideNavigation = withWebComponent<SideNavigationPropTypes, SideNavigationDomRef>(
  'ui5-side-navigation',
  ['accessibleName', 'highlightedText'],
  ['collapsed'],
  ['filterSection', 'fixedItems', 'header'],
  ['item-click', 'item-toggle', 'selection-change'],
);

SideNavigation.displayName = 'SideNavigation';

export { SideNavigation };
export type { SideNavigationDomRef, SideNavigationPropTypes };
