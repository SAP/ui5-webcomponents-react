'use client';

import '@ui5/webcomponents/dist/BreadcrumbsItem.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface BreadcrumbsItemAttributes {
  /**
   * Defines the accessible ARIA name of the item.
   */
  accessibleName?: string;
  /**
   * Defines the link href.
   *
   * **Note:** Standard hyperlink behavior is supported.
   */
  href?: string;
  /**
   * Defines the link target.
   *
   * Available options are:
   *
   * *   `_self`
   * *   `_top`
   * *   `_blank`
   * *   `_parent`
   * *   `_search`
   *
   *
   *
   * **Note: **This property must only be used when the `href` property is set.****
   */
  target?: string;
}

export interface BreadcrumbsItemDomRef extends BreadcrumbsItemAttributes, Ui5DomRef {}

export interface BreadcrumbsItemPropTypes extends BreadcrumbsItemAttributes, CommonProps {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `BreadcrumbsItem` component defines the content of an item in `Breadcrumbs`
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Breadcrumbs)
 */
const BreadcrumbsItem = withWebComponent<BreadcrumbsItemPropTypes, BreadcrumbsItemDomRef>(
  'ui5-breadcrumbs-item',
  ['accessibleName', 'href', 'target'],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/BreadcrumbsItem.js')
);

BreadcrumbsItem.displayName = 'BreadcrumbsItem';

export { BreadcrumbsItem };
