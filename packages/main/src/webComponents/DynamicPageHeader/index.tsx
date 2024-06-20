'use client';

import '@ui5/webcomponents-fiori/dist/DynamicPageHeader.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface DynamicPageHeaderAttributes {}

interface DynamicPageHeaderDomRef extends Required<DynamicPageHeaderAttributes>, Ui5DomRef {}

interface DynamicPageHeaderPropTypes extends DynamicPageHeaderAttributes, Omit<CommonProps, 'children'> {
  /**
   * Defines the content of the Dynamic Page Header.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * Header of the DynamicPage.
 *
 * The DynamicPageHeader `DynamicPageHeader` is part of the DynamicPage family
 * and is used to serve as header of the `DynamicPage`.
 *
 * ### Usage
 *
 * The `DynamicPageHeader` can hold any layout control and has two states - expanded
 * and collapsed (snapped). The switching between these states happens when:
 * - the user scrolls below its bottom margin
 * - the user clicks on the `DynamicPageTitle`
 * - through the `DynamicPage` property `headerSnapped`
 *
 * ### Responsive Behavior
 *
 * The responsive behavior of the `DynamicPageHeader` depends on the behavior of the
 * content that is displayed.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents-fiori__.
 */
const DynamicPageHeader = withWebComponent<DynamicPageHeaderPropTypes, DynamicPageHeaderDomRef>(
  'ui5-dynamic-page-header',
  [],
  [],
  [],
  [],
  () => import('@ui5/webcomponents-fiori/dist/DynamicPageHeader.js')
);

DynamicPageHeader.displayName = 'DynamicPageHeader';

export { DynamicPageHeader };
export type { DynamicPageHeaderDomRef, DynamicPageHeaderPropTypes };
