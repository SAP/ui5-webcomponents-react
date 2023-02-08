'use client';

import '@ui5/webcomponents/dist/Breadcrumbs.js';
import { ReactNode } from 'react';
import { BreadcrumbsDesign, BreadcrumbsSeparatorStyle } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface BreadcrumbsAttributes {
  /**
   * Defines the visual indication and behavior of the breadcrumbs. Available options are `Standard` (by default) and `NoCurrentPage`.
   *
   * **Note:** The `Standard` breadcrumbs show the current page as the last item in the trail. The last item contains only plain text and is not a link.
   */
  design?: BreadcrumbsDesign | keyof typeof BreadcrumbsDesign;
  /**
   * Determines the visual style of the separator between the breadcrumb items.
   *
   * Available options are:
   *
   * *   `Slash`
   * *   `BackSlash`
   * *   `DoubleBackSlash`
   * *   `DoubleGreaterThan`
   * *   `DoubleSlash`
   * *   `GreaterThan`
   */
  separatorStyle?: BreadcrumbsSeparatorStyle | keyof typeof BreadcrumbsSeparatorStyle;
}

export interface BreadcrumbsDomRef extends BreadcrumbsAttributes, Ui5DomRef {}

export interface BreadcrumbsPropTypes extends BreadcrumbsAttributes, CommonProps {
  /**
   * Defines the component items.
   *
   * **Note:** Use the `BreadcrumbsItem` component to define the desired items.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fires when a `BreadcrumbsItem` is clicked. **Note:** You can prevent browser location change by calling `event.preventDefault()`.
   */
  onItemClick?: (
    event: Ui5CustomEvent<
      BreadcrumbsDomRef,
      { item: HTMLElement; altKey: boolean; ctrlKey: boolean; metaKey: boolean; shiftKey: boolean }
    >
  ) => void;
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
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Breadcrumbs" target="_blank">UI5 Web Components Playground</ui5-link>
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
