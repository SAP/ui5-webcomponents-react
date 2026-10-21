'use client';

import '@ui5/webcomponents/dist/BreadcrumbsItem.js';
import type { BreadcrumbsItemClickEventDetail } from '@ui5/webcomponents/dist/BreadcrumbsItem.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface BreadcrumbsItemAttributes {
  /**
   * Defines the accessible ARIA name of the item.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines the link href.
   *
   * **Note:** Standard hyperlink behavior is supported.
   * @default undefined
   */
  href?: string | undefined;

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
  extends BreadcrumbsItemAttributes, Omit<CommonProps, keyof BreadcrumbsItemAttributes | 'children' | 'onClick'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   *
   * __Supported Node Type/s:__ `Array<Node>`
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event is also fired for the current page location item (the last item), which is not a link by design.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * **Note:** Available since [v2.22.0](https://github.com/UI5/webcomponents/releases/tag/v2.22.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onClick?: (event: Ui5CustomEvent<BreadcrumbsItemDomRef, BreadcrumbsItemClickEventDetail>) => void;
}

/**
 * The `BreadcrumbsItem` component defines the content of an item in `Breadcrumbs`.
 *
 * __Note:__ This is a UI5 Web Component! [BreadcrumbsItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/BreadcrumbsItem) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents__.
 * @abstract
 */
const BreadcrumbsItem = withWebComponent<BreadcrumbsItemPropTypes, BreadcrumbsItemDomRef>(
  'ui5-breadcrumbs-item',
  ['accessibleName', 'href', 'target'],
  [],
  [],
  ['click'],
);

BreadcrumbsItem.displayName = 'BreadcrumbsItem';

export { BreadcrumbsItem };
export type { BreadcrumbsItemDomRef, BreadcrumbsItemPropTypes };
