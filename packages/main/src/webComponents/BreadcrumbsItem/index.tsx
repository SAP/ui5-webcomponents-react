import '@ui5/webcomponents/dist/BreadcrumbsItem.js';
import { ReactNode } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

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
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Breadcrumbs" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const BreadcrumbsItem = withWebComponent<BreadcrumbsItemPropTypes, BreadcrumbsItemDomRef>(
  'ui5-breadcrumbs-item',
  ['accessibleName', 'href', 'target'],
  [],
  [],
  []
);

BreadcrumbsItem.displayName = 'BreadcrumbsItem';

export { BreadcrumbsItem };
