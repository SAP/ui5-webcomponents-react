'use client';

import '@ui5/webcomponents/dist/Breadcrumbs.js';
import type { BreadcrumbsItemClickEventDetail } from '@ui5/webcomponents/dist/Breadcrumbs.js';
import type BreadcrumbsDesign from '@ui5/webcomponents/dist/types/BreadcrumbsDesign.js';
import type BreadcrumbsSeparator from '@ui5/webcomponents/dist/types/BreadcrumbsSeparator.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface BreadcrumbsAttributes {
  /**
   * Defines the visual appearance of the last BreadcrumbsItem.
   *
   * The Breadcrumbs supports two visual appearances for the last BreadcrumbsItem:
   * - "Standard" - displaying the last item as "current page" (bold and without separator)
   * - "NoCurrentPage" - displaying the last item as a regular BreadcrumbsItem, followed by separator
   * @default "Standard"
   */
  design?: BreadcrumbsDesign | keyof typeof BreadcrumbsDesign;

  /**
   * Determines the visual style of the separator between the breadcrumb items.
   * @default "Slash"
   */
  separators?: BreadcrumbsSeparator | keyof typeof BreadcrumbsSeparator;
}

interface BreadcrumbsDomRef extends Required<BreadcrumbsAttributes>, Ui5DomRef {}

interface BreadcrumbsPropTypes
  extends BreadcrumbsAttributes,
    Omit<CommonProps, keyof BreadcrumbsAttributes | 'children' | 'onItemClick'> {
  /**
   * Defines the component items.
   *
   * **Note:** Use the `BreadcrumbsItem` component to define the desired items.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fires when a `BreadcrumbsItem` is clicked.
   *
   * **Note:** You can prevent browser location change by calling `event.preventDefault()`.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onItemClick?: (event: Ui5CustomEvent<BreadcrumbsDomRef, BreadcrumbsItemClickEventDetail>) => void;
}

/**
 * Enables users to navigate between items by providing a list of links to previous steps in the user's navigation path.
 * It helps the user to be aware of their location within the application and allows faster navigation.
 *
 * The last three steps can be accessed as links directly, while the remaining links prior to them are available
 * in a drop-down menu.
 *
 * You can choose the type of separator to be used from a number of predefined options.
 *
 * ### Keyboard Handling
 * The `Breadcrumbs` provides advanced keyboard handling.
 *
 * - [F4], [Alt] + [Up], [Alt] + [Down], [Space], or [Enter] - If the dropdown arrow is focused - opens/closes the drop-down.
 * - [Space],[Enter] - Activates the focused item and triggers the `item-click` event.
 * - [Escape] - Closes the drop-down.
 * - [Left] - If the drop-down is closed - navigates one item to the left.
 * - [Right] - If the drop-down is closed - navigates one item to the right.
 * - [Up] - If the drop-down is open - moves focus to the next item.
 * - [Down] - If the drop-down is open - moves focus to the previous item.
 * - [Home] - Navigates to the first item.
 * - [End] - Navigates to the last item.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const Breadcrumbs = withWebComponent<BreadcrumbsPropTypes, BreadcrumbsDomRef>(
  'ui5-breadcrumbs',
  ['design', 'separators'],
  [],
  [],
  ['item-click']
);

Breadcrumbs.displayName = 'Breadcrumbs';

export { Breadcrumbs };
export type { BreadcrumbsDomRef, BreadcrumbsPropTypes };
