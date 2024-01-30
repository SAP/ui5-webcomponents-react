'use client';

import '@ui5/webcomponents-fiori/dist/SideNavigation.js';
import type { SideNavigationSelectionChangeEventDetail } from '@ui5/webcomponents-fiori/dist/SideNavigation.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface SideNavigationAttributes {
  /**
   * Defines whether the `SideNavigation` is expanded or collapsed.
   * @default false
   */
  collapsed?: boolean;
}

interface SideNavigationDomRef extends SideNavigationAttributes, Ui5DomRef {}

interface SideNavigationPropTypes
  extends SideNavigationAttributes,
    Omit<CommonProps, keyof SideNavigationAttributes | 'onSelectionChange'> {
  /**
   * Defines the main items of the `SideNavigation`. Use the `SideNavigationItem` component for the top-level items, and the `SideNavigationSubItem` component for second-level items, nested inside the items.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the fixed items at the bottom of the `SideNavigation`. Use the `SideNavigationItem` component for the fixed items, and optionally the `SideNavigationSubItem` component to provide second-level items inside them. **Note:** In order to achieve the best user experience, it is recommended that you keep the fixed items "flat" (do not pass sub-items)
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="fixedItems"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
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
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  header?: UI5WCSlotsNode;
  /**
   * Fired when the selection has changed via user interaction
   */
  onSelectionChange?: (event: Ui5CustomEvent<SideNavigationDomRef, SideNavigationSelectionChangeEventDetail>) => void;
}

/**
 * The `SideNavigation` is used as a standard menu in applications. It consists of three containers: header (top-aligned), main navigation section (top-aligned) and the secondary section (bottom-aligned).
 *
 * *   The header is meant for displaying user related information - profile data, avatar, etc.
 * *   The main navigation section is related to the user’s current work context
 * *   The secondary section is mostly used to link additional information that may be of interest (legal information, developer communities, external help, contact information and so on).
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const SideNavigation = withWebComponent<SideNavigationPropTypes, SideNavigationDomRef>(
  'ui5-side-navigation',
  [],
  ['collapsed'],
  ['fixedItems', 'header'],
  ['selection-change'],
  () => import('@ui5/webcomponents-fiori/dist/SideNavigation.js')
);

SideNavigation.displayName = 'SideNavigation';

export { SideNavigation };
export type { SideNavigationDomRef, SideNavigationPropTypes };
