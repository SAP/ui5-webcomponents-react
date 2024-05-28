'use client';

import '@ui5/webcomponents/dist/BreadcrumbsItem.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface BreadcrumbsItemAttributes {
  /**
   * Defines the accessible ARIA name of the item.
   * @default undefined
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
   * - `_self`
   * - `_top`
   * - `_blank`
   * - `_parent`
   * - `_search`
   *
   * **Note:** This property must only be used when the `href` property is set.
   * @default undefined
   */
  target?: string | undefined;
}

interface BreadcrumbsItemDomRef extends Required<BreadcrumbsItemAttributes>, Ui5DomRef {}

interface BreadcrumbsItemPropTypes
  extends BreadcrumbsItemAttributes,
    Omit<CommonProps, keyof BreadcrumbsItemAttributes | 'children'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `BreadcrumbsItem` component defines the content of an item in `Breadcrumbs`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 * @abstract
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
export type { BreadcrumbsItemDomRef, BreadcrumbsItemPropTypes };
