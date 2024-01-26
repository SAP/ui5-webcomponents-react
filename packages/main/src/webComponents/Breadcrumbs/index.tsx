'use client';

import '@ui5/webcomponents/dist/Breadcrumbs.js';
import type { BreadcrumbsItemClickEventDetail } from '@ui5/webcomponents/dist/Breadcrumbs.js';
import type { ReactNode } from 'react';
import { BreadcrumbsDesign, BreadcrumbsSeparatorStyle } from '../../enums/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface BreadcrumbsAttributes {
  /**
   * Defines the visual indication and behavior of the breadcrumbs.
   *
   * **Note:** The `Standard` breadcrumbs show the current page as the last item in the trail. The last item contains only plain text and is not a link.
   */
  design?: BreadcrumbsDesign | keyof typeof BreadcrumbsDesign;
  /**
   * Determines the visual style of the separator between the breadcrumb items.
   */
  separatorStyle?: BreadcrumbsSeparatorStyle | keyof typeof BreadcrumbsSeparatorStyle;
}

interface BreadcrumbsDomRef extends BreadcrumbsAttributes, Ui5DomRef {}

interface BreadcrumbsPropTypes extends BreadcrumbsAttributes, Omit<CommonProps, keyof BreadcrumbsAttributes> {
  /**
   * Defines the component items.
   *
   * **Note:** Use the `BreadcrumbsItem` component to define the desired items.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fires when a `BreadcrumbsItem` is clicked. **Note:** You can prevent browser location change by calling `event.preventDefault()`.
   */
  onItemClick?: (event: Ui5CustomEvent<BreadcrumbsDomRef, BreadcrumbsItemClickEventDetail>) => void;
}

/**
 * Enables users to navigate between items by providing a list of links to previous steps in the user's navigation path. It helps the user to be aware of their location within the application and allows faster navigation.
 *
 * The last three steps can be accessed as links directly, while the remaining links prior to them are available in a drop-down menu.
 *
 * You can choose the type of separator to be used from a number of predefined options.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Breadcrumbs)
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

Breadcrumbs.defaultProps = {
  design: BreadcrumbsDesign.Standard,
  separatorStyle: BreadcrumbsSeparatorStyle.Slash
};

export { Breadcrumbs };
export type { BreadcrumbsDomRef, BreadcrumbsPropTypes };
