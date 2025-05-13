'use client';

import '@ui5/webcomponents-fiori/dist/SideNavigation.js';
import type { SideNavigationSelectionChangeEventDetail } from '@ui5/webcomponents-fiori/dist/SideNavigation.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface SideNavigationAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   *
   * **Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines whether the `SideNavigation` is expanded or collapsed.
   * @default false
   */
  collapsed?: boolean;
}

interface SideNavigationDomRef extends Required<SideNavigationAttributes>, Ui5DomRef {}

interface SideNavigationPropTypes
  extends SideNavigationAttributes,
    Omit<CommonProps, keyof SideNavigationAttributes | 'children' | 'fixedItems' | 'header' | 'onSelectionChange'> {
  /**
   * Defines the main items of the component.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the fixed items at the bottom of the component.
   *
   * **Note:** In order to achieve the best user experience, it is recommended that you keep the fixed items "flat" (do not pass sub-items)
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="fixedItems"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
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
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  header?: UI5WCSlotsNode;
  /**
   * Fired when the selection has changed via user interaction
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
 *  - The main navigation section is related to the user’s current work context
 *  - The secondary section is mostly used to link additional information that may be of interest (legal information, developer communities, external help, contact information and so on).
 *
 * ### Usage
 *
 * Use the available `SideNavigationGroup`, `SideNavigationItem`
 * and `SideNavigationSubItem` components to build your menu.
 * The items can consist of text only or an icon with text. The use or non-use of icons must be consistent for all items on one level.
 * You must not combine entries with and without icons on the same level. We strongly recommend that you do not use icons on the second level.
 *
 * The `SideNavigation` component is intended for use within an `NavigationLayout` component.
 * While it can function independently, it is recommended to use it with
 * the `NavigationLayout` for optimal user experience.
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
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const SideNavigation = withWebComponent<SideNavigationPropTypes, SideNavigationDomRef>(
  'ui5-side-navigation',
  ['accessibleName'],
  ['collapsed'],
  ['fixedItems', 'header'],
  ['selection-change'],
);

SideNavigation.displayName = 'SideNavigation';

export { SideNavigation };
export type { SideNavigationDomRef, SideNavigationPropTypes };
