'use client';

import '@ui5/webcomponents/dist/Breadcrumbs.js';
import type { BreadcrumbsItemClickEventDetail } from '@ui5/webcomponents/dist/Breadcrumbs.js';
import type BreadcrumbsDesign from '@ui5/webcomponents/dist/types/BreadcrumbsDesign.js';
import type BreadcrumbsSeparatorStyle from '@ui5/webcomponents/dist/types/BreadcrumbsSeparatorStyle.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface BreadcrumbsAttributes {
  /**
   * Defines the visual indication and behavior of the breadcrumbs.
   *
   * **Note:** The `Standard` breadcrumbs show the current page as the last item in the trail.
   * The last item contains only plain text and is not a link.
   * @default "Standard"
   */
  design?: BreadcrumbsDesign | keyof typeof BreadcrumbsDesign;

  /**
   * Determines the visual style of the separator between the breadcrumb items.
   * @default "Slash"
   */
  separatorStyle?: BreadcrumbsSeparatorStyle | keyof typeof BreadcrumbsSeparatorStyle;
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
 * - [F4, ALT+UP, ALT+DOWN, SPACE, ENTER] - If the dropdown arrow is focused - opens/closes the drop-down.
 * - [SPACE, ENTER] - Activates the focused item and triggers the `item-click` event.
 * - [ESC] - Closes the drop-down.
 * - [LEFT] - If the drop-down is closed - navigates one item to the left.
 * - [RIGHT] - If the drop-down is closed - navigates one item to the right.
 * - [UP] - If the drop-down is open - moves focus to the next item.
 * - [DOWN] - If the drop-down is open - moves focus to the previous item.
 * - [HOME] - Navigates to the first item.
 * - [END] - Navigates to the last item.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const Breadcrumbs = withWebComponent<BreadcrumbsPropTypes, BreadcrumbsDomRef>(
  'ui5-breadcrumbs',
  ['design', 'separatorStyle'],
  [],
  [],
  ['item-click'],
  () => import('@ui5/webcomponents/dist/Breadcrumbs.js')
);

Breadcrumbs.displayName = 'Breadcrumbs';

export { Breadcrumbs };
export type { BreadcrumbsDomRef, BreadcrumbsPropTypes };
