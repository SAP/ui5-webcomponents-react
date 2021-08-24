import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/BreadcrumbsItem';

export interface BreadcrumbsItemPropTypes extends CommonProps {
  /**
   * Defines the accessible aria name of the item.
   */
  accessibleName?: string;
  /**
   * Defines the link href.
   *
   * **Note:** Standard hyperlink behavior is supported.
   */
  href?: string;
  /**
   * Defines the stable selector that you can use via `getStableDomRef` method.
   */
  stableDomRef?: string;
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
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `BreadcrumbsItem` component defines the content of an item in `undefined`
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/BreadcrumbsItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const BreadcrumbsItem = withWebComponent<BreadcrumbsItemPropTypes>(
  'ui5-breadcrumbs-item',
  ['accessibleName', 'href', 'stableDomRef', 'target'],
  [],
  [],
  []
);

BreadcrumbsItem.displayName = 'BreadcrumbsItem';

export { BreadcrumbsItem };
